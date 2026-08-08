# Roadmap — Planned Next Phases

Companion to [PROJECT_STATUS.md](./PROJECT_STATUS.md), which describes the current state. Phases are ordered by value to the business (a lead-gen site lives or dies on conversion, speed, and being found), but each phase is independent enough to reorder or split.

## Phase 1 — Measure the Funnel (highest priority)

The site's one job is generating leads, and right now nothing measures it.

- [ ] Wire up **GA4 and/or GTM** using the existing `VITE_GA_MEASUREMENT_ID` / `VITE_GTM_ID` env vars, gated behind `VITE_ENABLE_ANALYTICS`.
- [ ] Fire a **conversion event on successful lead submit** (including the form's `source` field, which is already collected) and on phone-CTA clicks (`tel:` link taps).
- [ ] Add **Sentry** error tracking using the existing `VITE_SENTRY_DSN` scaffolding, so failed form submissions surface instead of dying silently in the browser console.

**Done when:** every lead submission and phone-tap is visible in analytics with its source attribution, and JS/API errors are reported.

## Phase 2 — Harden the Lead Form

Adopt the patterns the project already ships dependencies for:

- [ ] Migrate `ContactForm` to **react-hook-form + Zod** (both installed, unused): schema-validate phone format, zip format, and required fields with inline error messages instead of bare HTML `required`.
- [ ] Wrap `submitLead` in a **TanStack Query mutation** with timeout and a retry-once policy; type the payload (removes the `any` lint error in `src/lib/api.ts`).
- [ ] Graceful degradation when `VITE_GOOGLE_MAPS_API_KEY` is missing/invalid — the address field should still work as a plain input.
- [ ] Consider a honeypot field or similar low-friction spam protection before ad traffic is sent to the site.

**Done when:** invalid submissions are caught client-side with clear messages, transient network failures don't lose leads, and the form works without Google Maps.

## Phase 3 — SEO and Branding Cleanup

Remove the scaffolding leftovers and make the site findable:

- [ ] Replace Lovable OG/Twitter images and the `@Lovable` handle with real brand assets; replace the emoji favicon.
- [ ] **Per-page titles and meta descriptions** for all six routes (e.g. `react-helmet-async` or a small custom head component).
- [ ] Add **LocalBusiness / RealEstateAgent structured data** (JSON-LD) with NAP info — critical for local search in DFW.
- [ ] Generate `sitemap.xml` and flesh out `robots.txt`.
- [ ] Rewrite `README.md` for this project (drop the Lovable boilerplate); fix the `/api/leads` → `/leads` reference in CLAUDE.md; rename `package.json` from `vite_react_shadcn_ts`.

**Done when:** each route has unique, accurate metadata; sharing any page shows correct branding; Search Console accepts the sitemap.

## Phase 4 — Performance

Page speed directly affects both ad Quality Score and conversion on mobile:

- [ ] **Compress/resize images** — `conversation.png` (1.8 MB), `foreclosure.jpg` (1.3 MB), `hero-dfw.jpeg` (765 kB) should become appropriately-sized WebP/AVIF.
- [ ] **Route-level code splitting** with `React.lazy` to get the 546 kB main chunk under the 500 kB threshold (Lottie and Embla are good candidates to defer).
- [ ] Lazy-load the hero video and below-the-fold imagery.
- [ ] Run Lighthouse before/after and record scores here.

**Done when:** Lighthouse mobile performance is solidly green and the Vite bundle-size warning is gone.

## Phase 5 — Quality Infrastructure

Make the documented branch workflow enforceable:

- [ ] Add **Vitest + React Testing Library**; start with tests for `ContactForm` validation/submission and the address-parsing logic in `handleAddressSelect`.
- [ ] **GitHub Actions CI**: lint + build + test on every PR to `develop` and `main`.
- [ ] Fix the 4 existing lint errors so CI can enforce a clean baseline.
- [ ] Delete the dead `tailwind.config.js` (the `.ts` config is the live one).
- [ ] Enable branch protection on `main` and `develop`; delete the six stale merged feature branches.

**Done when:** a PR cannot merge with failing lint/build/tests, and the repo matches its own branch rules.

## Phase 6 — Content & Conversion Growth (backlog)

Ideas to pull from once Phases 1–5 land, prioritized by lead data from Phase 1:

- **Testimonials / social proof** section (currently none — a big trust factor for "we buy houses" businesses).
- **FAQ page** targeting long-tail seller questions (also a structured-data opportunity).
- **Per-city landing pages** expanding on `citiesData.ts` for local SEO ("sell my house fast in Arlington", etc.).
- Live chat (env flag `VITE_ENABLE_CHAT` already reserved).
- A/B testing of headlines/CTAs once analytics provides a baseline.

---

### Suggested sequencing

Phases 1 and 2 together make the existing funnel trustworthy and measurable — do these before spending on traffic. Phase 3 and 4 make the traffic you get convert and rank. Phase 5 can proceed in parallel at any time. Phase 6 is data-driven and should wait for Phase 1's numbers.
