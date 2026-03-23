# Codebase Structure

**Analysis Date:** 2026-03-23

## Directory Layout

```
patrickclery.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions: build + deploy to GitHub Pages
├── .planning/
│   └── codebase/               # GSD planning documents
├── public/
│   ├── images/                 # Static image assets (product screenshots)
│   │   ├── awesomer-preview.png
│   │   ├── lexop-preview.png
│   │   ├── vericatch-preview.png
│   │   └── workaxle-preview.png
│   ├── CNAME                   # Custom domain: patrickclery.com
│   └── .nojekyll               # Prevents GitHub Pages Jekyll processing
├── src/
│   ├── app/
│   │   ├── favicon.ico         # App favicon
│   │   ├── globals.css         # Global styles + CSS custom property design tokens
│   │   ├── layout.tsx          # Root layout: fonts, metadata, HTML shell
│   │   └── page.tsx            # Single page: composes all section components
│   └── components/
│       ├── Hero.tsx            # Header section: name, tagline, nav links, contact
│       ├── Projects.tsx        # Open-source projects grid
│       ├── VibeCoding.tsx      # AI-assisted development philosophy section
│       ├── Experience.tsx      # Work history timeline with company data
│       ├── Skills.tsx          # Skills grouped by category
│       └── Footer.tsx          # Contact links and personal details
├── favicon.ico                 # Root favicon (also copied to src/app/)
├── next.config.ts              # Next.js config: static export, trailing slash
├── package.json                # Dependencies and npm scripts
├── postcss.config.mjs          # PostCSS config for Tailwind CSS v4
├── robots.txt                  # Search engine crawling rules
└── tsconfig.json               # TypeScript config with @/* path alias
```

## Directory Purposes

**`src/app/`:**
- Purpose: Next.js App Router files — the application shell
- Contains: Root layout, single page entry point, global CSS, favicon
- Key files: `layout.tsx`, `page.tsx`, `globals.css`

**`src/components/`:**
- Purpose: Self-contained page section components
- Contains: One file per section; each file owns its data array and rendering logic
- Key files: All six `.tsx` files — each maps directly to a visible page section

**`public/`:**
- Purpose: Static assets served at root URL, copied verbatim to `out/` on build
- Contains: Product preview images, CNAME file, .nojekyll marker
- Key files: `public/images/*.png` — referenced by components as `/images/filename.png`

**`.github/workflows/`:**
- Purpose: CI/CD automation
- Contains: Single deploy workflow triggered on push to `master`
- Key files: `deploy.yml`

## Key File Locations

**Entry Points:**
- `src/app/page.tsx`: The only page — renders `<main>` with all sections
- `src/app/layout.tsx`: HTML shell, font setup, OpenGraph metadata

**Configuration:**
- `next.config.ts`: Static export mode, trailing slash, unoptimized images
- `tsconfig.json`: TypeScript strict mode, `@/*` → `./src/*` path alias
- `postcss.config.mjs`: Tailwind CSS v4 PostCSS integration

**Design System:**
- `src/app/globals.css`: All CSS custom property color tokens defined here

**Static Assets:**
- `public/images/`: Product screenshots for Projects and Experience sections

**Deployment:**
- `.github/workflows/deploy.yml`: Build and deploy pipeline
- `public/CNAME`: Custom domain configuration

## Naming Conventions

**Files:**
- Components: PascalCase matching the exported function name, e.g., `Hero.tsx` exports `Hero()`
- App Router files: lowercase per Next.js convention — `page.tsx`, `layout.tsx`, `globals.css`
- Config files: lowercase with appropriate extension — `next.config.ts`, `tsconfig.json`

**Directories:**
- `src/app/`: Next.js App Router convention (lowercase)
- `src/components/`: Lowercase directory, PascalCase files inside

**Exports:**
- All components use named exports: `export function ComponentName()`
- No default exports from component files
- Page uses default export per Next.js requirement: `export default function Home()`

**Data:**
- Module-level `const` arrays for content data, plural lowercase names: `const jobs`, `const projects`, `const skillGroups`

## Where to Add New Code

**New Page Section:**
- Create component: `src/components/NewSection.tsx`
- Add named export `export function NewSection()`
- Define data as `const items = [...]` at module level in the same file
- Import and render in `src/app/page.tsx` inside the `<main>` block

**New Static Image:**
- Add PNG to `public/images/`
- Reference in component as `src="/images/filename.png"`

**Design Token Change:**
- Edit CSS custom properties in `src/app/globals.css` under `:root`
- All components pick up changes automatically via `var(--token-name)`

**New External Link or Contact Info:**
- Hero links: `src/components/Hero.tsx`
- Footer links: `src/components/Footer.tsx`

**Metadata (SEO, OpenGraph):**
- Edit the `metadata` export in `src/app/layout.tsx`

## Special Directories

**`out/` (generated, not present in repo):**
- Purpose: Next.js static export output — the deployable HTML/CSS/JS bundle
- Generated: Yes, by `npm run build`
- Committed: No (in `.gitignore`)

**`.next/` (generated, not present in repo):**
- Purpose: Next.js build cache and dev server artifacts
- Generated: Yes
- Committed: No (in `.gitignore`)

**`.planning/`:**
- Purpose: GSD planning documents for AI-assisted development workflow
- Generated: No (human/AI authored)
- Committed: Yes

---

*Structure analysis: 2026-03-23*
