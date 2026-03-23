# Architecture

**Analysis Date:** 2026-03-23

## Pattern Overview

**Overall:** Static site — single-page portfolio rendered via Next.js App Router with full static export (`output: "export"`). No server-side logic, no API routes, no dynamic routing. The compiled output is a flat HTML/CSS/JS bundle deployed to GitHub Pages.

**Key Characteristics:**
- No backend, no API, no database — all content is hardcoded as TypeScript data arrays inside component files
- Single route (`/`) renders all sections sequentially in one page
- CSS variables drive the entire design system (dark theme, typography, colors)
- No client-side state management — all components are React Server Components by default

## Layers

**Root Layout:**
- Purpose: Wraps the entire app with global fonts (Archivo, Space Grotesk) and global CSS
- Location: `src/app/layout.tsx`
- Contains: HTML shell, font configuration, OpenGraph metadata
- Depends on: `src/app/globals.css`, Next.js font API
- Used by: All pages

**Page:**
- Purpose: Assembles the single portfolio page by composing section components in order
- Location: `src/app/page.tsx`
- Contains: Component composition only — no logic or data
- Depends on: All components in `src/components/`
- Used by: Root layout

**Section Components:**
- Purpose: Self-contained page sections, each owning its own data and markup
- Location: `src/components/`
- Contains: Data arrays (jobs, projects, skills) + JSX rendering logic
- Depends on: `lucide-react` for icons, CSS custom properties for styling
- Used by: `src/app/page.tsx`

**Global Styles:**
- Purpose: Defines CSS custom property design tokens (colors, typography) and base resets
- Location: `src/app/globals.css`
- Contains: `:root` color variables, smooth scroll, focus/selection styles
- Depends on: Tailwind CSS (v4 via `@import "tailwindcss"`)
- Used by: Root layout

## Data Flow

**Content Rendering:**

1. `src/app/layout.tsx` sets up the HTML shell with fonts and metadata
2. `src/app/page.tsx` renders a `<main>` containing all section components in DOM order
3. Each section component (`Hero`, `Projects`, `VibeCoding`, `Experience`, `Skills`, `Footer`) independently renders its hardcoded data
4. Tailwind utility classes + CSS custom properties apply visual styling
5. `next build` produces a static export in `out/` — no runtime server required

**No State Flow:** There is no React state, no context, no props passed between components. Each component is fully self-contained.

## Key Abstractions

**Section Component:**
- Purpose: An independently renderable portfolio section with its own data
- Examples: `src/components/Hero.tsx`, `src/components/Experience.tsx`, `src/components/Projects.tsx`
- Pattern: Named export function (e.g., `export function Experience()`), data array defined as `const` at module level above the component, JSX maps over the array to render items

**CSS Custom Properties Design System:**
- Purpose: Single source of truth for all colors and design tokens
- Definition: `src/app/globals.css` (`:root` block)
- Tokens: `--color-bg`, `--color-surface`, `--color-border`, `--color-text`, `--color-text-muted`, `--color-accent` (green), `--color-accent-warm` (amber)
- Usage: Referenced throughout components as `var(--color-accent)` inside Tailwind's bracket notation, e.g., `text-[var(--color-accent)]`

## Entry Points

**App Entry:**
- Location: `src/app/page.tsx`
- Triggers: Next.js App Router resolves `/` to this file
- Responsibilities: Composes all section components into the page

**HTML Shell:**
- Location: `src/app/layout.tsx`
- Triggers: Wraps every page in the app (only one page exists)
- Responsibilities: Font loading, global metadata, body class, global CSS import

**Build Entry:**
- Location: `next.config.ts`
- Triggers: `npm run build`
- Responsibilities: Configures static export mode, trailing slash, disables image optimization (required for static export)

## Error Handling

**Strategy:** Not applicable — this is a static content site with no runtime logic, API calls, or user input that could fail.

**Patterns:**
- No error boundaries
- No try/catch blocks
- No async operations

## Cross-Cutting Concerns

**Styling:** Tailwind CSS v4 utility classes with CSS custom properties for design tokens. All color/spacing tokens accessed via `var(--token-name)` inside Tailwind bracket syntax.

**Typography:** Two Google Fonts loaded via `next/font/google` — Archivo (headings) and Space Grotesk (body). Applied as CSS variables `--font-archivo` and `--font-space-grotesk`, then referenced in class names.

**Accessibility:** `prefers-reduced-motion` media query in `globals.css` disables all animations/transitions. `focus-visible` styles use accent color outline. External links use `rel="noopener noreferrer"`.

**Images:** Stored in `public/images/` as PNG files. Referenced by relative path (e.g., `/images/workaxle-preview.png`). `loading="lazy"` applied to all images. Next.js image optimization disabled (`unoptimized: true`) to support static export.

**Deployment:** GitHub Actions workflow at `.github/workflows/deploy.yml` builds on push to `master` and deploys `out/` to GitHub Pages. CNAME file at `public/CNAME` maps the custom domain `patrickclery.com`.

---

*Architecture analysis: 2026-03-23*
