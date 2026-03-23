# Technology Stack

**Analysis Date:** 2026-03-23

## Languages

**Primary:**
- TypeScript 5.x - All source files in `src/`
- CSS - `src/app/globals.css` (Tailwind v4 CSS-first config)

**Secondary:**
- JavaScript - Config files (`postcss.config.mjs`, `next.config.ts`)

## Runtime

**Environment:**
- Node.js 20 (pinned in CI via `.github/workflows/deploy.yml`)
- Local dev: Node.js 22 (no `.nvmrc` — runtime version not locked in repo)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 15.2.x - App Router, static export (`output: "export"` in `next.config.ts`)
- React 19.0.x - UI rendering
- React DOM 19.0.x - DOM binding

**Build/Dev:**
- TypeScript 5.x - Type checking via `tsconfig.json`
- Tailwind CSS 4.0.x - Utility-first CSS, v4 (CSS-first, no `tailwind.config.*` file)
- PostCSS via `@tailwindcss/postcss` 4.0.x - CSS processing (`postcss.config.mjs`)

## Key Dependencies

**Critical:**
- `next` ^15.2.0 - Framework, routing, static export, font optimization
- `react` ^19.0.0 - Component model
- `lucide-react` ^0.577.0 - Icon library used in every component (`Hero.tsx`, `Footer.tsx`, `Projects.tsx`, `Skills.tsx`, `VibeCoding.tsx`, `Experience.tsx`)

**Infrastructure:**
- `@tailwindcss/postcss` ^4.0.0 - Tailwind v4 PostCSS integration

## Configuration

**TypeScript (`tsconfig.json`):**
- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`
- Target: ES2017
- Module resolution: bundler
- JSX: preserve (Next.js handles transformation)

**Next.js (`next.config.ts`):**
- `output: "export"` — builds to static `out/` directory (no server-side rendering at runtime)
- `trailingSlash: true` — all routes get trailing slash
- `images.unoptimized: true` — required for static export (no Next.js Image Optimization API)

**PostCSS (`postcss.config.mjs`):**
- Single plugin: `@tailwindcss/postcss`

**CSS (`src/app/globals.css`):**
- Tailwind v4 imported via `@import "tailwindcss"`
- CSS custom properties defined in `:root` for design tokens:
  - `--color-bg`, `--color-surface`, `--color-border`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-accent-warm`

## Platform Requirements

**Development:**
- Node.js 20+
- `npm install` then `npm run dev`

**Production:**
- Static site — deploys as flat files to GitHub Pages
- Custom domain: `patrickclery.com` (configured via `public/CNAME`)
- Build output: `out/` directory

---

*Stack analysis: 2026-03-23*
