# Codebase Concerns

**Analysis Date:** 2026-03-23

## Tech Debt

**Hardcoded hover color values bypassing the design token system:**
- Issue: Hover states use `hover:bg-green-400` and `hover:text-green-400` directly instead of a CSS variable. The base color `--color-accent` maps to `#22C55E` (green-500), but hover states hardcode a different Tailwind shade. If the accent color ever changes, hover states will not follow.
- Files: `src/components/Hero.tsx` (lines 21, 48, 57), `src/components/Footer.tsx` (lines 10, 19, 28), `src/components/VibeCoding.tsx` (line 41)
- Impact: Color theme is not fully centralized; a brand color change requires hunting down every `hover:green-400` usage rather than updating one CSS variable.
- Fix approach: Define `--color-accent-hover` in `src/app/globals.css` and replace all `hover:text-green-400` / `hover:bg-green-400` with `hover:text-[var(--color-accent-hover)]` / `hover:bg-[var(--color-accent-hover)]`.

**Verbose repeated font class pattern across all headings:**
- Issue: Every heading applies the longhand `font-[family-name:var(--font-archivo)]` inline. This pattern appears 9 times across 5 components.
- Files: `src/components/Hero.tsx`, `src/components/Projects.tsx`, `src/components/VibeCoding.tsx`, `src/components/Experience.tsx`, `src/components/Skills.tsx`
- Impact: Any change to heading typography requires editing every component individually.
- Fix approach: Create a Tailwind utility class (e.g. `font-display`) in `src/app/globals.css` that applies the Archivo variable, or extract a shared `<SectionHeading>` component.

**WorkAxle job entry has empty highlights array:**
- Issue: The `highlights` array for WorkAxle is explicitly set to `[]` in the `jobs` data structure.
- Files: `src/components/Experience.tsx` (line 11)
- Impact: The most recent and current position shows no bullet points, which weakens the resume presentation. The conditional `job.highlights.length > 0` silently hides this gap.
- Fix approach: Add meaningful highlights for the WorkAxle role, or remove the `highlights` field from the data shape if it is not always applicable.

**`cursor-pointer` applied to `<a>` tags:**
- Issue: All anchor elements explicitly add `cursor-pointer` via className. This is the browser default for `<a>` tags and is redundant.
- Files: `src/components/Hero.tsx`, `src/components/Footer.tsx`, `src/components/Projects.tsx`, `src/components/VibeCoding.tsx`
- Impact: Minor noise in classNames; not harmful but adds clutter.
- Fix approach: Remove `cursor-pointer` from all `<a>` elements.

**Conflicting font classes on one element in Projects.tsx:**
- Issue: Line 62 of `src/components/Projects.tsx` applies both `font-[family-name:var(--font-archivo)]` and `font-mono` to the same `<h3>`. These conflict — `font-mono` would override the Archivo variable set on the same element.
- Files: `src/components/Projects.tsx` (line 62)
- Impact: Project card titles may render in a system monospace font rather than Archivo, depending on CSS cascade order.
- Fix approach: Remove `font-mono` from that element; use only the Archivo variable class for headings, or move `font-mono` to a separate inner element if monospace styling is intentional.

## Security Considerations

**Personal email address in source code:**
- Risk: `patrick.clery@gmail.com` appears as a literal string in two components.
- Files: `src/components/Hero.tsx` (line 51), `src/components/Footer.tsx` (line 9)
- Current mitigation: This is an intentional public portfolio contact; no code mitigation in place.
- Recommendations: No change needed for a public portfolio site where contact visibility is the goal. Acceptable as-is.

**No Content Security Policy headers:**
- Risk: The site is statically exported and hosted on GitHub Pages. There are no CSP, X-Frame-Options, or other security headers configured.
- Files: `next.config.ts` — no `headers()` function (not applicable for `output: "export"` static sites)
- Current mitigation: GitHub Pages itself provides some baseline protections.
- Recommendations: For a static personal portfolio, the risk is low. If the site ever moves to a server-rendered deployment, add security headers via `next.config.ts`.

## Performance Bottlenecks

**Unoptimized images served as raw PNGs:**
- Problem: Four preview images (`workaxle-preview.png` at 396K, `vericatch-preview.png` at 308K, `awesomer-preview.png` at 144K, `lexop-preview.png` at 104K) are served as unoptimized PNG files. Next.js image optimization is explicitly disabled in `next.config.ts` (`images: { unoptimized: true }`) because the site uses static export.
- Files: `next.config.ts` (line 7), `public/images/` (all four PNG files)
- Cause: GitHub Pages cannot run Next.js server-side image optimization at request time.
- Improvement path: Pre-convert PNGs to WebP/AVIF at build time using a script or image optimization pipeline (e.g., `sharp` CLI, `imagemin`). Add `width` and `height` attributes to the `<img>` elements in `src/components/Experience.tsx` (line 119) and `src/components/Projects.tsx` (line 50) to prevent layout shift.

**`<img>` elements lack explicit `width` and `height` attributes:**
- Problem: Both image usages rely on `className` for sizing rather than native `width`/`height` HTML attributes, causing Cumulative Layout Shift (CLS) while images load.
- Files: `src/components/Experience.tsx` (line 119–124), `src/components/Projects.tsx` (line 50–55)
- Cause: Native `<img>` used instead of `next/image` (intentional given static export), but no dimensions provided.
- Improvement path: Add `width` and `height` attributes matching the actual image dimensions, or switch to `next/image` with `unoptimized={true}` which handles aspect-ratio reservation automatically.

## Fragile Areas

**All content is hardcoded in component files:**
- Files: `src/components/Experience.tsx` (jobs array, lines 3–68), `src/components/Projects.tsx` (projects array, lines 3–24), `src/components/Skills.tsx` (skillGroups array, lines 3–24)
- Why fragile: Adding or updating any resume content requires editing TSX component files directly. There is no data layer separation.
- Safe modification: Edit the data arrays at the top of each component file. The rendering logic is separate from the data.
- Test coverage: None — no tests exist in the codebase.

**No linting or formatting tooling configured:**
- Files: No `.eslintrc*`, `eslint.config.*`, `.prettierrc*`, or `biome.json` present. No lint script in `package.json`.
- Why fragile: Code style consistency depends entirely on editor settings. CI pipeline (`deploy.yml`) runs only `npm run build` — no lint step. TypeScript errors would be caught at build time but style regressions are invisible.
- Safe modification: Add `eslint` and `next/eslint` or `biome` with a lint step before build in the CI workflow.

## Missing Critical Features

**No `og:image` or Twitter Card image:**
- Problem: `src/app/layout.tsx` defines OpenGraph metadata (title, description, url) but no `og:image`, `twitter:card`, or `twitter:image` properties. Social shares will render with no preview image.
- Blocks: Rich link previews on LinkedIn, Twitter/X, Slack, etc. — significant for a job-seeking portfolio.
- Files: `src/app/layout.tsx` (lines 17–28)

**No favicon in `public/` — duplicate favicon in `src/app/`:**
- Problem: `favicon.ico` exists at `src/app/favicon.ico` (Next.js App Router convention) but also at the project root (`/favicon.ico`, which is not inside `public/`). The root-level `favicon.ico` would not be served by Next.js static export.
- Files: `src/app/favicon.ico`, `/favicon.ico` (root)
- Impact: The root-level favicon is unreachable via the deployed site; it may confuse contributors.
- Fix approach: Remove the root-level `favicon.ico` or move it to `public/` if a fallback is needed.

## Test Coverage Gaps

**No tests exist:**
- What's not tested: All component rendering, data structure shapes, link correctness, image path validity.
- Files: All files in `src/`
- Risk: Any refactoring of component data arrays or Tailwind class changes cannot be verified automatically. Broken image paths (e.g., `preview: "/images/workaxle-preview.png"`) would only surface visually.
- Priority: Low — this is a static personal portfolio with no user logic or business rules. The risk of undetected regressions is proportional to the rate of content updates.

---

*Concerns audit: 2026-03-23*
