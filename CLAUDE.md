<!-- GSD:project-start source:PROJECT.md -->
## Project

**patrickclery.com**

Patrick Clery's personal portfolio and gateway site. A single-page static site built with Next.js, deployed to GitHub Pages at patrickclery.com. It serves as the central hub linking to all projects, social profiles, and professional presence.

**Core Value:** Be the single front door to everything Patrick ships — projects, code, socials. If someone googles Patrick Clery, this is what they find and where they go next.

### Constraints

- **Static export:** No SSR, no API routes, no server-side logic — GitHub Pages serves flat files only
- **GitHub Pages:** Deployment target is fixed; no custom server infrastructure
- **Single page:** Currently one route (`/`), all sections render sequentially
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- TypeScript 5.x - All source files in `src/`
- CSS - `src/app/globals.css` (Tailwind v4 CSS-first config)
- JavaScript - Config files (`postcss.config.mjs`, `next.config.ts`)
## Runtime
- Node.js 20 (pinned in CI via `.github/workflows/deploy.yml`)
- Local dev: Node.js 22 (no `.nvmrc` — runtime version not locked in repo)
- npm
- Lockfile: `package-lock.json` present
## Frameworks
- Next.js 15.2.x - App Router, static export (`output: "export"` in `next.config.ts`)
- React 19.0.x - UI rendering
- React DOM 19.0.x - DOM binding
- TypeScript 5.x - Type checking via `tsconfig.json`
- Tailwind CSS 4.0.x - Utility-first CSS, v4 (CSS-first, no `tailwind.config.*` file)
- PostCSS via `@tailwindcss/postcss` 4.0.x - CSS processing (`postcss.config.mjs`)
## Key Dependencies
- `next` ^15.2.0 - Framework, routing, static export, font optimization
- `react` ^19.0.0 - Component model
- `lucide-react` ^0.577.0 - Icon library used in every component (`Hero.tsx`, `Footer.tsx`, `Projects.tsx`, `Skills.tsx`, `VibeCoding.tsx`, `Experience.tsx`)
- `@tailwindcss/postcss` ^4.0.0 - Tailwind v4 PostCSS integration
## Configuration
- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`
- Target: ES2017
- Module resolution: bundler
- JSX: preserve (Next.js handles transformation)
- `output: "export"` — builds to static `out/` directory (no server-side rendering at runtime)
- `trailingSlash: true` — all routes get trailing slash
- `images.unoptimized: true` — required for static export (no Next.js Image Optimization API)
- Single plugin: `@tailwindcss/postcss`
- Tailwind v4 imported via `@import "tailwindcss"`
- CSS custom properties defined in `:root` for design tokens:
## Platform Requirements
- Node.js 20+
- `npm install` then `npm run dev`
- Static site — deploys as flat files to GitHub Pages
- Custom domain: `patrickclery.com` (configured via `public/CNAME`)
- Build output: `out/` directory
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Naming Patterns
- React components: PascalCase `.tsx` files — `Hero.tsx`, `Experience.tsx`, `Projects.tsx`
- App-level files: lowercase — `layout.tsx`, `page.tsx`, `globals.css`
- Config files: camelCase or kebab-case — `next.config.ts`, `postcss.config.mjs`
- React components: named exports using `export function`, PascalCase — `export function Hero()`
- Page-level default export in `src/app/page.tsx` and `src/app/layout.tsx` uses `export default function`
- No arrow-function components; all components use standard `function` declarations
- Local variables: camelCase — `skillGroups`, `spaceGrotesk`, `archivo`
- Module-level data arrays: camelCase — `const jobs = [...]`, `const projects = [...]`, `const skillGroups = [...]`
- Lucide icon locals: PascalCase when destructured from data — `const Icon = project.icon`
- TypeScript `strict` mode enabled (`tsconfig.json`)
- Inline prop types using object destructuring: `{ children }: { children: React.ReactNode }`
- No separate interface files; all types are inline at point of use
## Code Style
- No formatter config file present (no `.prettierrc`, no `biome.json`, no ESLint config)
- Indentation: 2 spaces throughout all source files
- Trailing commas: used in objects and arrays
- Quotes: double quotes for JSX attribute strings; double quotes for TypeScript strings
- No ESLint or Biome config detected
- TypeScript strict mode (`"strict": true` in `tsconfig.json`) serves as primary type safety enforcement
## Import Organization
- `@/*` maps to `./src/*` (defined in `tsconfig.json`)
- In practice, components use relative paths: `"../components/Hero"` rather than `@/components/Hero`
## Data Organization
## CSS and Styling
## Component Structure
- Each section component is self-contained: owns its own `<section>` or `<header>`/`<footer>` wrapper
- Section padding: `px-6 py-24` consistently
- Inner container: `<div className="mx-auto max-w-5xl">`
- `id` attributes on sections for in-page anchor navigation (`id="experience"`, `id="projects"`, `id="skills"`)
## Error Handling
## Logging
## Comments
## Module Design
- All components use named exports: `export function Hero()`
- The page (`src/app/page.tsx`) and layout (`src/app/layout.tsx`) use default exports per Next.js App Router convention
- No barrel `index.ts` files
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## Pattern Overview
- No backend, no API, no database — all content is hardcoded as TypeScript data arrays inside component files
- Single route (`/`) renders all sections sequentially in one page
- CSS variables drive the entire design system (dark theme, typography, colors)
- No client-side state management — all components are React Server Components by default
## Layers
- Purpose: Wraps the entire app with global fonts (Archivo, Space Grotesk) and global CSS
- Location: `src/app/layout.tsx`
- Contains: HTML shell, font configuration, OpenGraph metadata
- Depends on: `src/app/globals.css`, Next.js font API
- Used by: All pages
- Purpose: Assembles the single portfolio page by composing section components in order
- Location: `src/app/page.tsx`
- Contains: Component composition only — no logic or data
- Depends on: All components in `src/components/`
- Used by: Root layout
- Purpose: Self-contained page sections, each owning its own data and markup
- Location: `src/components/`
- Contains: Data arrays (jobs, projects, skills) + JSX rendering logic
- Depends on: `lucide-react` for icons, CSS custom properties for styling
- Used by: `src/app/page.tsx`
- Purpose: Defines CSS custom property design tokens (colors, typography) and base resets
- Location: `src/app/globals.css`
- Contains: `:root` color variables, smooth scroll, focus/selection styles
- Depends on: Tailwind CSS (v4 via `@import "tailwindcss"`)
- Used by: Root layout
## Data Flow
## Key Abstractions
- Purpose: An independently renderable portfolio section with its own data
- Examples: `src/components/Hero.tsx`, `src/components/Experience.tsx`, `src/components/Projects.tsx`
- Pattern: Named export function (e.g., `export function Experience()`), data array defined as `const` at module level above the component, JSX maps over the array to render items
- Purpose: Single source of truth for all colors and design tokens
- Definition: `src/app/globals.css` (`:root` block)
- Tokens: `--color-bg`, `--color-surface`, `--color-border`, `--color-text`, `--color-text-muted`, `--color-accent` (green), `--color-accent-warm` (amber)
- Usage: Referenced throughout components as `var(--color-accent)` inside Tailwind's bracket notation, e.g., `text-[var(--color-accent)]`
## Entry Points
- Location: `src/app/page.tsx`
- Triggers: Next.js App Router resolves `/` to this file
- Responsibilities: Composes all section components into the page
- Location: `src/app/layout.tsx`
- Triggers: Wraps every page in the app (only one page exists)
- Responsibilities: Font loading, global metadata, body class, global CSS import
- Location: `next.config.ts`
- Triggers: `npm run build`
- Responsibilities: Configures static export mode, trailing slash, disables image optimization (required for static export)
## Error Handling
- No error boundaries
- No try/catch blocks
- No async operations
## Cross-Cutting Concerns
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
