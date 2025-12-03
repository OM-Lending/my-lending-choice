# Change: Integrate Resend for Contact and Valuation Form Email Delivery

## Why

The contact form at `/contact-us` and property valuation form at `/free-property-valuation` only show success messages without actually sending any notification to the business. This means potential leads and customer inquiries are lost. Integrating Resend will enable real email delivery, ensuring the My Lending Choice team receives form submissions immediately.

## What Changes

- Add `resend` npm package as a dependency
- Create Next.js API routes (`/api/contact`, `/api/valuation`) to handle form submissions
- Update both forms to submit data to their respective API endpoints
- Add basic spam protection (honeypot field) to both forms
- Add rate limiting (max 5 submissions per IP per hour)
- Add loading and error states to both form UIs
- Configure Resend with environment variables
- Create HTML email templates matching brand aesthetics
- Remove bedrooms and bathrooms fields from valuation form

## Impact

- **Affected specs**: Creates new `email-forms` capability
- **Affected code**:
  - `src/app/contact-us/page.tsx` - Contact form submission logic
  - `src/app/free-property-valuation/page.tsx` - Valuation form (remove bedrooms/bathrooms, add API submission)
  - `src/app/api/contact/route.ts` - New API route
  - `src/app/api/valuation/route.ts` - New API route
  - `package.json` - New dependency
  - `.env.local` / `.env.example` - Environment variables
- **New External Dependency**: Resend (email delivery service)
- **Environment Variables Required**: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `ADMIN_EMAIL`
