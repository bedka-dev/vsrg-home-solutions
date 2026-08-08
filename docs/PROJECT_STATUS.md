# Project Status — Where We Left Off

_Last updated: August 2026 (as of `main` @ `10e74c9` — "Merge develop into main")_

This document captures the current state of the VSRG Home Solutions website: what's built, how healthy the codebase is, and the known gaps. For what comes next, see [ROADMAP.md](./ROADMAP.md).

## What This Project Is

A lead-generation marketing site for **Victory Springs Realty Group**, a family-owned cash home buyer serving the Dallas–Fort Worth area. The site's single conversion goal is capturing seller leads (name, phone, property address) and submitting them to a separate Laravel backend.

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Shadcn/ui, deployed as a static SPA (Vercel config present, Docker/nginx setup also available).

## What's Built and Working

### Pages (all implemented)

| Route | Page | Notes |
|-------|------|-------|
| `/` | Home | Hero (with video asset), About, How It Works, Comparison, AddressCTA sections |
| `/about` | About | Hero, Core Values, Commitment, CTA |
| `/challenges` | Challenges | Situation carousel/cards (foreclosure, divorce, inheritance, relocation) driven by `situationsData.ts` |
| `/how-it-works` | How It Works | Step cards with Lottie animations (`Calendar`, `Call`, `Form`, `Money`) |
| `/locations` | Locations | DFW map, city sections driven by `citiesData.ts` |
| `/contact` | Contact | Full lead form plus info cards, service-area map, "what happens next" |
| `*` | NotFound | Catch-all 404 |

### Lead capture (the core feature)

- `ContactForm` (`src/components/common/ContactForm.tsx`) collects name, phone (auto-formatted), optional email, property address, city/state/zip, message, and SMS opt-in.
- **Google Maps address autocomplete** via `react-google-autocomplete`, parsing address components into structured fields.
- Submits to the Laravel backend at `{VITE_BACKEND_API_URL}/leads` (`src/lib/api.ts`). The endpoint path was recently fixed from `/api/leads` to `/leads` (PR #28 — the last change merged before this doc).
- Success state, error state, and submitting state are handled; each form embed passes a `source` value for lead attribution.
- Reusable CTA components (`PrimaryCTA`, `PhoneCTA`, `AddressCTA`, `StickyMobileCTA` for mobile) funnel users toward the form or a phone call.

### Infrastructure

- **Deployment:** `vercel.json` rewrites all routes to `/` for SPA routing. Docker setup exists for both dev (port 8080) and prod (nginx, port 80).
- **Environment config:** `.env.example` documents backend URL, Google Maps key, business contact info, and placeholders for analytics/Sentry (not yet wired up — see gaps below).
- **Branching:** `develop` → `main` workflow documented in CLAUDE.md and README. `main` is currently in sync with `develop` (main's tip is the merge of develop).

## Codebase Health Check

Run on a fresh clone (August 2026):

- ✅ **`npm run build` passes** in ~6s.
- ⚠️ **Bundle size:** the main JS chunk is **546 kB minified (169 kB gzipped)** — over Vite's 500 kB warning threshold. No code-splitting or lazy route loading yet.
- ⚠️ **Image weight:** several assets ship unoptimized — `conversation.png` (1.8 MB), `foreclosure.jpg` (1.3 MB), `hero-dfw.jpeg` (765 kB). These will hurt Core Web Vitals on a lead-gen site where mobile page speed matters.
- ⚠️ **`npm run lint`: 4 errors, 8 warnings.** Errors: `any` type in `src/lib/api.ts`, `require()` import in `tailwind.config.ts`, and two empty-interface issues in Shadcn UI primitives. Warnings are all `react-refresh/only-export-components` in generated Shadcn files.
- ❌ **No tests.** No test framework is installed and no test files exist.
- ❌ **No CI.** There is no `.github/workflows` directory — lint/build are not enforced on PRs, and the branch rules in CLAUDE.md rely on manual discipline.

## Known Gaps and Tech Debt

**Documentation drift**
- CLAUDE.md still says the lead endpoint is `/api/leads`; the code now uses `/leads` (fixed in PR #28).
- README.md is still largely Lovable boilerplate (references lovable.dev project URL, generic clone instructions) rather than describing this business/site.
- `package.json` is still named `vite_react_shadcn_ts` at version `0.0.0`.

**Installed but unused libraries** (CLAUDE.md describes these as "the patterns," but the code doesn't use them yet)
- `react-hook-form` + `zod` + `@hookform/resolvers` are installed, but `ContactForm` uses manual `useState` with only HTML `required` validation — no phone/zip format validation, no schema.
- `@tanstack/react-query` is installed and the app is wrapped in `QueryClientProvider`, but `submitLead` is a raw `fetch` call with no mutation, retry, or timeout handling.

**SEO/branding placeholders left over from scaffolding**
- Open Graph and Twitter card images point to `lovable.dev`'s image; the Twitter handle is `@Lovable`.
- Favicon is an inline emoji SVG placeholder.
- No per-page titles or meta descriptions (single static `index.html` head for all six routes), no sitemap, minimal `robots.txt`, no structured data (LocalBusiness/Service schema).

**Configuration duplication**
- Both `tailwind.config.js` and `tailwind.config.ts` exist. Tailwind resolves the `.ts` one; the `.js` file is dead config that will silently confuse future edits.

**Scaffolded but not wired**
- Analytics (`VITE_GA_MEASUREMENT_ID`, `VITE_GTM_ID`), feature flags, and Sentry env vars exist in `.env.example` but nothing in `src/` reads them. There is currently **no conversion tracking on the lead form** — the site's one KPI isn't measured.

**Repo hygiene**
- Six stale remote feature branches remain after merge (`feature/fix-api-endpoint-path`, `feature/component-refactoring`, `add-vercel-config-for-spa`, etc.). CLAUDE.md's own branch rules say to delete these.

## Where Development Left Off

The last substantive work (PRs #22–#28) was deployment- and integration-focused: Vercel SPA routing config, environment variable cleanup, and the API endpoint path fix. In other words: **the site content and lead-capture flow are feature-complete for a v1, and the most recent effort was getting it deployed and talking to the backend correctly.**

The natural next phases — hardening the lead funnel, measurement, SEO, and quality infrastructure — are laid out in [ROADMAP.md](./ROADMAP.md).
