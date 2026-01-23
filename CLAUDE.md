# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server (port 8080) |
| `npm run build` | Production build |
| `npm run build:dev` | Development mode build |
| `npm run lint` | Run ESLint on TypeScript/TSX files |
| `npm run preview` | Preview production build |

**Docker:** `docker-compose up dev` (port 8080) or `docker-compose up prod` (port 80)

## Deployment Workflow

This project follows a **develop-to-main** branching strategy:

```
main (production releases only)
  ↑
develop (integration branch)
  ↑
feature/* → PR → merge to develop → test → merge to main
```

**How it works:**

1. **main**: Production-ready code only. Tagged releases live here.
2. **develop**: Integration branch where all features are merged and tested.
3. **Feature branches**: Create from `develop`, work on feature, open PR to merge back to `develop`.
4. **Testing**: Thoroughly test `develop` branch before merging to `main`.
5. **Releases**: Merge `develop` → `main` for production releases, then tag the release on `main`.

**Branch Rules:**
- Never commit directly to `main` or `develop`
- All feature work happens in `feature/*` branches
- Feature branches merge into `develop` via PR
- Only `develop` merges into `main` for releases
- Delete feature branches after merging

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Shadcn/ui

**Routing (React Router v6):**
- `/` - Home
- `/about` - About
- `/challenges` - Life challenges (foreclosure, divorce, etc.)
- `/how-it-works` - Process explanation
- `/locations` - DFW service areas
- `/contact` - Contact page

**State Management:**
- TanStack React Query for server state
- React Hook Form + Zod for form handling

**Component Structure:**
```
src/
├── components/
│   ├── ui/          # Shadcn UI primitives
│   ├── common/      # Header, Footer, Layout, ContactForm, CTAs
│   ├── home/        # Hero, About, HowItWorks, Comparison
│   ├── challenges/  # SituationCarousel, SituationCard
│   ├── about/       # AboutHero, CoreValues, Commitment
│   ├── how-it-works/# StepCard, StepIcons
│   ├── locations/   # CitySection, DFWMap
│   └── contact/     # ContactForm, ServiceAreaMap
├── pages/           # Route page components
├── hooks/           # use-toast, use-mobile (768px breakpoint)
└── lib/
    ├── api.ts       # Lead submission to Laravel backend
    └── utils.ts     # cn() for classname merging
```

## Key Patterns

**Data Files:** Static content lives in `*Data.ts` files (e.g., `situationsData.ts`, `citiesData.ts`)

**Layout:** All pages wrap content in `<Layout>` component

**Path Alias:** Use `@/*` for imports from `src/` (e.g., `@/components/ui/button`)

**Styling:** Tailwind utilities + HSL CSS variables for theming. Use `cn()` for conditional classes.

**API Integration:** Backend at `VITE_API_URL` (default: `http://localhost:8000`), lead endpoint: `/api/leads`

## Environment Variables

```
VITE_GOOGLE_MAPS_API_KEY=<key>  # Google Maps Autocomplete
VITE_API_URL=http://localhost:8000  # Laravel backend
```
