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

## Git Workflow

This project uses a **simplified feature-branch workflow**:

```
main (production-ready)
  ↑
feature/short-descriptive-name → PR → merge to main
```

**How it works:**

1. **main**: Production-ready code. Always deployable.
2. **Feature branches**: Create short-lived branches from `main` for each feature/fix
3. **Pull Requests**: Open PR when ready, review, then merge directly to `main`
4. **Cleanup**: Delete feature branches immediately after merging

**Branch Rules:**
- Never commit directly to `main`
- Keep feature branches small and short-lived (1-3 days max)
- Create descriptive branch names: `feature/add-contact-form`, `fix/mobile-nav`
- Delete feature branches after merging
- Tag releases on `main` (`v1.0.0`, `v1.1.0`, etc.)

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

**API Integration:** Backend at `VITE_BACKEND_API_URL` (default: `http://localhost:8000`), lead endpoint: `/leads` (not `/api/leads`)

**Adding New Routes:** Add route to `src/App.tsx` and create corresponding page component in `src/pages/`

## TypeScript Configuration

**Relaxed Mode:** This project uses relaxed TypeScript settings for rapid development:
- `noImplicitAny: false` - Implicit `any` types allowed
- `strictNullChecks: false` - Null checks not enforced
- `noUnusedLocals: false` - Unused variables allowed
- `noUnusedParameters: false` - Unused parameters allowed

This is intentional for faster iteration. Write type-safe code when practical, but don't let TypeScript block development.

## Docker Development

**Hot Module Replacement (HMR):** Vite is configured with polling for Docker compatibility:
- `host: "0.0.0.0"` - Binds to all interfaces for Docker networking
- `strictPort: true` - Won't try alternate ports if 8080 is busy
- `usePolling: true` - Required for HMR in Docker on Windows/macOS

**Ports:**
- Development: `8080`
- Production: `80` (mapped to `8081` in docker-compose)

## Lovable Integration

This project was created with [Lovable](https://lovable.dev) and includes:
- `lovable-tagger` plugin for component tracking (dev mode only)
- Project URL: https://lovable.dev/projects/59727211-68d5-403e-811d-3e0bb26fc9ab

## Environment Variables

Copy `.env.example` to `.env` and configure:

### Required
```bash
# Laravel backend API endpoint (no trailing slash)
VITE_BACKEND_API_URL=http://localhost:8000

# Google Maps API key for address autocomplete
# Configure restrictions at: https://console.cloud.google.com/google/maps-apis
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Application Defaults
```bash
VITE_APP_ENV=development
VITE_APP_NAME="Victory Springs Realty Group"
VITE_BUSINESS_PHONE="(972) 211-0909"
VITE_BUSINESS_EMAIL=info@vsrghomesolutions.com
```

### Optional (for future use)
```bash
# Feature flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_CHAT=false

# Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX

# Error tracking
VITE_SENTRY_DSN=
VITE_SENTRY_ENVIRONMENT=development
```

**Note:** The `VITE_` prefix is required by Vite to expose variables to browser code. Variables without this prefix remain server-side only.
