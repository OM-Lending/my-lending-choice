# Project Context

## Purpose

**My Lending Choice** is a professional mortgage broker and lending services website targeting Australian homebuyers and businesses. The site helps users:

- Find competitive home loan rates from 40+ Australian lenders
- Explore refinancing options to reduce monthly payments
- Access commercial/business financing solutions
- Get free property valuations

The goal is to simplify the lending process with expert guidance, presenting a trustworthy, modern brand that converts visitors into leads.

## Tech Stack

- **Framework**: Next.js 16.0.4 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS v4 (utility-first, with PostCSS)
- **Icons**: lucide-react
- **Class Utilities**: clsx + tailwind-merge
- **Fonts**: Geist Sans & Geist Mono (via next/font/google)
- **Linting**: ESLint 9 with next/core-web-vitals + TypeScript config

## Project Conventions

### Code Style

- **Components**: React function components with TypeScript
- **Server Components**: Default; add `"use client"` only when client-side hooks/events are needed
- **Indentation**: 2 spaces
- **File Organization**: One component per file
- **Naming**:
  - Components: PascalCase (`Header.tsx`, `Footer.tsx`)
  - Variables/handlers: camelCase (`isMenuOpen`, `handleScroll`)
  - Routes: kebab-case folders (`free-property-valuation`, `about-us`)
- **Imports**: Use `@/*` path alias (maps to `./src/*`)
  - Group order: built-ins → third-party (next, react, lucide) → local (`@/components`)
- **Comments**: Always use English

### Architecture Patterns

- **Layout Pattern**: Root `layout.tsx` wraps all pages with `Header` and `Footer`
- **Route Structure**: Each page in `src/app/[route]/page.tsx`
- **Shared Components**: Reusable UI in `src/components/`
- **Static Assets**: Images, logos in `public/`
- **Styling Approach**:
  - Tailwind utilities inline in JSX
  - CSS variables for brand colors in `globals.css` using `@theme inline`
  - Responsive design: mobile-first with `md:`, `lg:` breakpoints

### Brand Colors (CSS Variables)

```css
--color-brand-primary: #2b4c7e   /* Navy blue - CTAs, links */
--color-brand-secondary: #0f172a /* Dark slate - headings, footer */
--color-brand-accent: #d97706    /* Amber - highlights */
--color-surface: #f8fafc         /* Light background sections */
```

### Testing Strategy

- No automated tests currently exist
- When adding tests:
  - Use Jest + React Testing Library for component tests
  - Use Playwright for E2E/flow tests
  - Place tests in `src/tests/` or co-located `__tests__/` folders
  - Name tests after the component/route (e.g., `Header.test.tsx`)

### Git Workflow

- **Branch**: `main` is the primary branch
- **Commit Style**: Conventional Commits
  - `feat:` new features
  - `fix:` bug fixes
  - `chore:` maintenance tasks
  - `refactor:` code improvements
  - `docs:` documentation updates
- **PR Requirements**:
  - Clear summary with linked issue/ticket
  - Screenshots/GIFs for UI changes
  - Run `npm run lint` before submitting

## Domain Context

- **Target Market**: Australian homebuyers, property investors, and businesses
- **Key Services**:
  - Home loans (first-time buyers, investors)
  - Commercial/business loans
  - Refinancing (rate reduction, equity access)
  - Free property valuations
- **Lender Network**: Partners with 40+ Australian lenders (logos displayed on site)
- **Contact**: Sydney-based office (Suite 1211/87 Liverpool St, Sydney NSW 2000)
- **Regulatory**: Displays ABN and Australian Credit License (ACL) numbers

## Important Constraints

- **Accessibility**: Ensure focus states and sufficient color contrast for all interactive elements
- **Performance**: Use Next.js Image component with proper `sizes` for responsive images
- **SEO**: Include proper metadata in `layout.tsx` and page-level metadata where needed
- **Mobile-First**: All layouts must work well on mobile devices first
- **No Dark Mode**: Currently light-theme only (dark mode media query exists but unused)

## External Dependencies

- **Google Fonts**: Geist Sans and Geist Mono loaded via `next/font`
- **Resend**: Email delivery service for contact and valuation forms
- **Image Hosting**: All images served locally from `/public`

## Environment Variables

| Variable            | Description                                       | Required |
| ------------------- | ------------------------------------------------- | -------- |
| `RESEND_API_KEY`    | Resend API key from dashboard                     | Yes      |
| `RESEND_FROM_EMAIL` | Sender email address (must be verified in Resend) | Yes      |
| `ADMIN_EMAIL`       | Recipient email for form submissions              | Yes      |

See `.env.example` for local development setup.

## Development Commands

```bash
npm run dev    # Start dev server at http://localhost:3000
npm run build  # Production build (run before release)
npm run start  # Serve production build locally
npm run lint   # ESLint checks (fix warnings before PRs)
```

## File Structure Overview

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Header, Footer wrapper)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + Tailwind config
│   ├── api/
│   │   ├── contact/route.ts     # Contact form API
│   │   └── valuation/route.ts   # Property valuation API
│   ├── about-us/page.tsx
│   ├── blog/page.tsx
│   ├── contact-us/page.tsx
│   ├── free-property-valuation/page.tsx
│   ├── products/page.tsx
│   └── services/page.tsx
├── components/
│   ├── Header.tsx          # Sticky nav with mobile menu
│   └── Footer.tsx          # Site footer with links
├── lib/
│   ├── email-templates.ts  # HTML email templates
│   └── rate-limit.ts       # IP-based rate limiting
public/
├── logo.jpg               # Brand logo
└── lenders/               # Partner lender logos (webp)
```
