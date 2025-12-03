<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# Repository Guidelines

## Project Structure & Module Organization
- Source lives in `src/app` (Next.js App Router) with page routes such as `about-us`, `services`, and `products`; shared UI sits in `src/components` (e.g., `Header.tsx`, `Footer.tsx`).
- Global styles are in `src/app/globals.css`; static assets are under `public/` (logos, lender images, icons).
- Use the `@/*` path alias from `tsconfig.json` for imports (e.g., `@/components/Header`); keep new shared pieces in `src/components` and route-specific helpers alongside their page.

## Build, Test, and Development Commands
- `npm run dev` — start the local dev server at `http://localhost:3000`.
- `npm run build` — production build; run before release to catch compilation issues.
- `npm run start` — serve the production build locally.
- `npm run lint` — Next.js + ESLint (core-web-vitals) checks; fix warnings before opening a PR.

## Coding Style & Naming Conventions
- TypeScript + React function components; prefer server components by default, add `"use client"` only when needed.
- Indentation: 2 spaces; keep files small and cohesive (one component per file). Use PascalCase for components and camelCase for variables/handlers; routes follow kebab-case folders (e.g., `free-property-valuation`).
- Styling: Tailwind CSS v4 utility-first classes; keep layout styles close to components and minimize custom globals. Co-locate page-specific styles in the route file when possible.
- Imports: group built-ins, third-party, then local (use the `@/` alias).

## Testing Guidelines
- No automated tests exist yet. For new features, add lightweight coverage (Jest/React Testing Library for components or Playwright for flows) under `src/tests` or co-located `__tests__` folders.
- Name tests after the component or route they cover (e.g., `Header.test.tsx`, `services.spec.ts`). Ensure new UI states have at least a render smoke test.

## Commit & Pull Request Guidelines
- Follow Conventional Commits seen in history (e.g., `feat: ...`, `fix: ...`, `chore: ...`). Write imperative, scoped messages.
- PRs should include: clear summary, linked issue/ticket, screenshots or GIFs for UI changes, and steps to reproduce/verify. Note any accessibility considerations (focus states, contrast).
- Keep changes small and focused; run `npm run lint` and (if present) tests before requesting review.***
