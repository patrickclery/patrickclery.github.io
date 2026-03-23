# Coding Conventions

**Analysis Date:** 2026-03-23

## Naming Patterns

**Files:**
- React components: PascalCase `.tsx` files — `Hero.tsx`, `Experience.tsx`, `Projects.tsx`
- App-level files: lowercase — `layout.tsx`, `page.tsx`, `globals.css`
- Config files: camelCase or kebab-case — `next.config.ts`, `postcss.config.mjs`

**Functions / Components:**
- React components: named exports using `export function`, PascalCase — `export function Hero()`
- Page-level default export in `src/app/page.tsx` and `src/app/layout.tsx` uses `export default function`
- No arrow-function components; all components use standard `function` declarations

**Variables:**
- Local variables: camelCase — `skillGroups`, `spaceGrotesk`, `archivo`
- Module-level data arrays: camelCase — `const jobs = [...]`, `const projects = [...]`, `const skillGroups = [...]`
- Lucide icon locals: PascalCase when destructured from data — `const Icon = project.icon`

**Types:**
- TypeScript `strict` mode enabled (`tsconfig.json`)
- Inline prop types using object destructuring: `{ children }: { children: React.ReactNode }`
- No separate interface files; all types are inline at point of use

## Code Style

**Formatting:**
- No formatter config file present (no `.prettierrc`, no `biome.json`, no ESLint config)
- Indentation: 2 spaces throughout all source files
- Trailing commas: used in objects and arrays
- Quotes: double quotes for JSX attribute strings; double quotes for TypeScript strings

**Linting:**
- No ESLint or Biome config detected
- TypeScript strict mode (`"strict": true` in `tsconfig.json`) serves as primary type safety enforcement

## Import Organization

**Order:**
1. External packages — `import { Github, Linkedin } from "lucide-react"`, `import type { Metadata } from "next"`
2. Internal components — `import { Hero } from "../components/Hero"`
3. CSS — `import "./globals.css"`

**Path Aliases:**
- `@/*` maps to `./src/*` (defined in `tsconfig.json`)
- In practice, components use relative paths: `"../components/Hero"` rather than `@/components/Hero`

## Data Organization

**Module-level constants for static data:**
Components with lists of items (jobs, projects, skill groups) define their data as module-level `const` arrays above the component function. This keeps JSX clean and the data separately readable.

```typescript
// Pattern used in Experience.tsx, Projects.tsx, Skills.tsx
const items = [
  { field: "value", ... },
];

export function ComponentName() {
  return (
    <section>
      {items.map((item) => (
        <div key={item.uniqueField}>...</div>
      ))}
    </section>
  );
}
```

**Icon pattern:**
Lucide icons are imported as named imports. When used dynamically from data objects, the icon component reference is stored in the data and extracted into a local `const Icon` before render:

```typescript
// In Projects.tsx and Skills.tsx
const Icon = project.icon;
return <Icon className="w-5 h-5" />;
```

## CSS and Styling

**Framework:** Tailwind CSS v4 via `@tailwindcss/postcss`

**Design token pattern:**
All colors reference CSS custom properties defined in `src/app/globals.css`. Never use raw Tailwind color utilities for themed colors; use CSS vars:

```tsx
// Correct — use CSS var tokens
className="text-[var(--color-text-muted)]"
className="bg-[var(--color-accent)]"
className="border-[var(--color-border)]"

// Available tokens
--color-bg         // #0F172A — page background
--color-surface    // #1E293B — card/section backgrounds
--color-border     // #334155 — borders
--color-text       // #F8FAFC — primary text
--color-text-muted // #94A3B8 — secondary/muted text
--color-accent     // #22C55E — green accent (primary CTA)
--color-accent-warm // #F59E0B — amber accent (secondary highlights)
```

**Font pattern:**
Fonts are applied via CSS variable names, not Tailwind font utilities:

```tsx
className="font-[family-name:var(--font-archivo)]"    // headings
className="font-[family-name:var(--font-space-grotesk)]"  // body (set on <body>)
```

**Responsive pattern:**
Mobile-first with `sm:` and `lg:` prefixes. Max-width container always `max-w-5xl` with `mx-auto`.

## Component Structure

**Layout sections:**
- Each section component is self-contained: owns its own `<section>` or `<header>`/`<footer>` wrapper
- Section padding: `px-6 py-24` consistently
- Inner container: `<div className="mx-auto max-w-5xl">`
- `id` attributes on sections for in-page anchor navigation (`id="experience"`, `id="projects"`, `id="skills"`)

**External links:**
Always include `target="_blank" rel="noopener noreferrer"` on external `<a>` tags.

## Error Handling

**None present** — This is a static portfolio site with no data fetching, form submissions, or async operations. There is no error handling code.

## Logging

None — static site with no server-side logic.

## Comments

No inline comments present in any source file. Code is self-documenting via clear naming. No JSDoc/TSDoc annotations used.

## Module Design

**Exports:**
- All components use named exports: `export function Hero()`
- The page (`src/app/page.tsx`) and layout (`src/app/layout.tsx`) use default exports per Next.js App Router convention
- No barrel `index.ts` files

**No shared utilities:** All logic is self-contained within each component file. No shared utility modules exist.

---

*Convention analysis: 2026-03-23*
