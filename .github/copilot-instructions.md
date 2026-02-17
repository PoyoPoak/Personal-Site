# Copilot Instructions for Personal-Site

## Big Picture
- This is a **Next.js App Router** portfolio site exported as static files (`next.config.ts` sets `output: "export"`).
- Main user-facing pages are in `app/`: `app/page.tsx` (primary homepage) and `app/full-specs/page.tsx`.
- UI is built from a local **Subframe-generated component system** in `src/ui/components` plus theme tokens in `src/ui/theme.css`.
- `app/page.tsx` is intentionally client-side and contains section navigation/state logic (scroll tracking + smooth scroll), project list pagination, and interaction wiring.

## Critical Constraints
- Keep pages/components compatible with **static export**: avoid adding runtime-only server dependencies, API routes, or features requiring a Node server.
- Use regular `<img>` patterns already used in the repo unless there is a clear reason to switch (`images.unoptimized: true` is configured for static output).
- Most UI files are client components (`"use client"`) and rely on browser APIs (`window`, `document`); preserve this boundary when refactoring.

## Styling & Component Conventions
- Prefer design tokens/classes from `src/ui/theme.css` (`bg-default-background`, `text-subtext-color`, `border-neutral-border`, etc.).
- Reuse local UI primitives from `src/ui/components/*` before creating new components.
- Follow existing class composition style with `SubframeUtils.twClassNames` from `src/ui/utils.ts` when variants/conditional classes are needed.
- Maintain the existing visual language: mono typography, square corners, high-contrast dark theme.
- Keep responsive behavior aligned with the existing `mobile:` custom variant from `src/ui/theme.css`.

## Imports & Structure
- Use path aliases from `tsconfig.json`: `@/*` and `@/ui/*`.
- For consistency, prefer direct component imports like `@/ui/components/Button` (common pattern in `app/page.tsx`).
- Treat `src/ui/components` as shared primitives and `app/*` as page composition.

## Data & Integrations
- External integration is minimal: `src/lib/github.ts` fetches latest commit hash from GitHub API for `SiteFooter`.
- Preserve fetch caching intent (`next: { revalidate: 3600 }`) when touching GitHub commit retrieval.

## Developer Workflow
- Install deps: `npm install`
- Local dev: `npm run dev`
- Lint: `npm run lint`
- Production build/static export: `npm run build` (outputs static site to `out/`)
- Optional manual Pages deploy script exists: `npm run deploy` (`gh-pages -d out`)
- CI deploy is defined in `.github/workflows/nextjs.yml` (builds with Next and publishes `out/` to GitHub Pages).

## File-Specific Notes
- `next-env.d.ts` is generated; do not hand-edit.
- `README.md` is default Next.js boilerplate and not authoritative for project-specific behavior.
- `app/globals.css` imports Tailwind and `src/ui/theme.css`; keep that import chain intact when editing global styles.
