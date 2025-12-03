## Context

My Lending Choice is currently a static marketing site with no backend integrations. Two forms need to deliver email notifications to the business team:

1. **Contact Form** (`/contact-us`) - General inquiries
2. **Property Valuation Form** (`/free-property-valuation`) - Valuation requests

Resend is chosen as the email provider for its developer-friendly API, reliability, and Next.js integration.

**Stakeholders**: Business team (receives leads), Website visitors (submits forms), Developers (maintains integration)

## Goals / Non-Goals

**Goals**:

- Deliver contact form submissions via email to the business team
- Provide clear feedback to users on submission success/failure
- Implement basic spam protection without degrading UX
- Keep implementation simple and maintainable

**Non-Goals**:

- Advanced spam protection (reCAPTCHA, Turnstile) - can be added later if needed
- Email bounce tracking or delivery analytics
- CRM integration or lead storage in a database
- Auto-reply emails to submitters

## Decisions

### Decision 1: Use Next.js API Routes for email delivery

**Rationale**: Next.js App Router supports API routes natively. This keeps the architecture simple without adding external serverless functions or backend services.

**Alternatives considered**:

- Resend + Edge Functions: More complex setup, not needed for simple form handling
- Third-party form services (Formspree, Netlify Forms): Adds external dependency and potential costs
- Direct client-side Resend calls: Exposes API key, security risk

### Decision 2: Server-side validation with client-side feedback

**Rationale**: Validate form data on the server (API route) for security. The client handles loading states and displays server responses.

### Decision 3: Honeypot field for spam protection

**Rationale**: Invisible field that bots fill out. Simple, zero-friction for real users. Can add stricter protection later if spam becomes an issue.

### Decision 4: HTML email template with brand styling

**Rationale**: Professional appearance builds trust. Template uses brand colors from `project.md` (navy blue primary, amber accent).

## Technical Design

### API Route Structure

#### Contact Form API

```
POST /api/contact
Content-Type: application/json

Request Body:
{
  "name": string (required),
  "email": string (required, valid email),
  "phone": string (optional),
  "subject": string (optional, defaults to "General Inquiry"),
  "message": string (required),
  "honeypot": string (must be empty)
}

Response (success):
{ "success": true }

Response (validation error):
{ "success": false, "error": "Validation message" }

Response (server error):
{ "success": false, "error": "Failed to send message" }
```

#### Property Valuation Form API

```
POST /api/valuation
Content-Type: application/json

Request Body:
{
  "address": string (required),
  "propertyType": string (required),
  "propertyStatus": string (required),
  "firstName": string (required),
  "lastName": string (required),
  "email": string (required, valid email),
  "phone": string (optional),
  "honeypot": string (must be empty)
}

Response (success):
{ "success": true }

Response (validation error):
{ "success": false, "error": "Validation message" }

Response (server error):
{ "success": false, "error": "Failed to send message" }
```

### Environment Variables

| Variable            | Description                                       | Required |
| ------------------- | ------------------------------------------------- | -------- |
| `RESEND_API_KEY`    | Resend API key from dashboard                     | Yes      |
| `RESEND_FROM_EMAIL` | Sender email address (must be verified in Resend) | Yes      |
| `ADMIN_EMAIL`       | Recipient email for contact form submissions      | Yes      |

**Default values for local development**:

- `RESEND_FROM_EMAIL`: `onboarding@resend.dev` (Resend's test sender)
- `ADMIN_EMAIL`: `loansupport3@mylendingchoice.com.au`

### Rate Limiting

To prevent abuse and stay within Resend's free tier limits (3,000 emails/month), the API implements IP-based rate limiting:

- **Limit**: 5 submissions per IP address per hour
- **Implementation**: In-memory Map with IP → timestamp array (suitable for single-instance deployment)
- **Response**: HTTP 429 with retry-after header when limit exceeded
- **Cleanup**: Expired entries purged on each request to prevent memory bloat

For future scaling, this can be migrated to Redis or Upstash rate limiting.

### File Structure

```
src/app/
├── api/
│   ├── contact/
│   │   └── route.ts              # Contact form API handler
│   └── valuation/
│       └── route.ts              # Valuation form API handler
├── contact-us/
│   └── page.tsx                  # Updated contact form
└── free-property-valuation/
    └── page.tsx                  # Updated valuation form (bedrooms/bathrooms removed)
```

## Risks / Trade-offs

| Risk                    | Impact               | Mitigation                                    |
| ----------------------- | -------------------- | --------------------------------------------- |
| Resend service outage   | Emails not delivered | Show user-friendly error, logs for debugging  |
| Spam submissions        | Inbox pollution      | Honeypot field + rate limiting (5/hour/IP)    |
| API key exposure        | Security breach      | Server-side only, environment variables       |
| Email delivery failures | Lost leads           | Error logging, consider fallback notification |

## Migration Plan

1. Install `resend` package
2. Add environment variables to `.env.local` (and `.env.example` for documentation)
3. Create API route `/api/contact`
4. Update contact form to use API submission
5. Test locally with Resend test domain
6. Deploy and configure production API key

**Rollback**: Remove API route, revert form to static behavior. No database or persistent state involved.

## Resolved Questions

- [x] Recipient email address: `loansupport3@mylendingchoice.com.au`
- [x] Resend free tier (3,000 emails/month) is sufficient
- [x] Rate limiting: Yes, 5 submissions per IP per hour
