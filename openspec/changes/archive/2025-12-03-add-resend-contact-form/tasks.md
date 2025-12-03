## 1. Setup

- [x] 1.1 Install `resend` npm package
- [x] 1.2 Create `.env.example` with `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `ADMIN_EMAIL`
- [x] 1.3 Add environment variables to local `.env.local`

## 2. Contact Form API

- [x] 2.1 Create `/api/contact/route.ts` with POST handler
- [x] 2.2 Implement request body validation (name, email, message required)
- [x] 2.3 Implement honeypot spam check
- [x] 2.4 Implement IP-based rate limiting (5 submissions per hour)
- [x] 2.5 Integrate Resend client for email sending
- [x] 2.6 Create HTML email template with brand styling

## 3. Valuation Form API

- [x] 3.1 Create `/api/valuation/route.ts` with POST handler
- [x] 3.2 Implement request body validation (address, propertyType, firstName, lastName, email required)
- [x] 3.3 Reuse honeypot spam check and rate limiting logic
- [x] 3.4 Create HTML email template for valuation requests

## 4. Contact Form Frontend

- [x] 4.1 Add hidden honeypot field to contact form
- [x] 4.2 Convert form to controlled component with state management
- [x] 4.3 Implement form submission to API endpoint
- [x] 4.4 Add loading state during submission
- [x] 4.5 Add error state with retry option
- [x] 4.6 Add rate limit exceeded state with cooldown message

## 5. Valuation Form Frontend

- [x] 5.1 Remove bedrooms and bathrooms input fields
- [x] 5.2 Add hidden honeypot field
- [x] 5.3 Convert form to controlled component with state management
- [x] 5.4 Implement form submission to API endpoint
- [x] 5.5 Add loading state during submission
- [x] 5.6 Add error state with retry option
- [x] 5.7 Add rate limit exceeded state with cooldown message

## 6. Documentation

- [x] 6.1 Update project.md to reflect new external dependency
