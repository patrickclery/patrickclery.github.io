# patrickclery.com

## What This Is

Patrick Clery's personal portfolio and gateway site. A single-page static site built with Next.js, deployed to GitHub Pages at patrickclery.com. It serves as the central hub linking to all projects, social profiles, and professional presence.

## Core Value

Be the single front door to everything Patrick ships — projects, code, socials. If someone googles Patrick Clery, this is what they find and where they go next.

## Requirements

### Validated

- ✓ Hero section with name, tagline, and bio — existing
- ✓ Experience timeline with job history and product screenshots — existing
- ✓ Projects section linking to ruly and awesomer — existing
- ✓ Skills grid organized by category (Backend, Frontend, AI, Leadership) — existing
- ✓ "Two Decades of Code" philosophy section — existing
- ✓ Links to GitHub, LinkedIn, and email — existing
- ✓ Static export deployed to GitHub Pages via GitHub Actions — existing
- ✓ Custom domain patrickclery.com via CNAME — existing
- ✓ Dark theme with CSS custom property design system — existing
- ✓ Responsive layout with Tailwind CSS — existing

### Active

(None yet — features will be added incrementally via `/gsd:add-phase`)

### Out of Scope

- Blog / CMS — not needed for a gateway site, adds maintenance burden
- Backend / API routes — static site by design, no server infrastructure
- Authentication — no user accounts needed
- Database — all content is hardcoded, no dynamic data

## Context

- **Stack:** Next.js 15 (App Router, static export), React 19, TypeScript, Tailwind CSS v4, lucide-react icons
- **Architecture:** Single-page with self-contained section components, each owning its own data as TypeScript arrays
- **Deployment:** GitHub Actions builds on push to master, deploys `out/` to GitHub Pages
- **Design system:** CSS custom properties in globals.css (dark theme with green/amber accents, Archivo + Space Grotesk fonts)
- **Codebase mapped:** See `.planning/codebase/` for full architecture, conventions, and concerns analysis

## Constraints

- **Static export:** No SSR, no API routes, no server-side logic — GitHub Pages serves flat files only
- **GitHub Pages:** Deployment target is fixed; no custom server infrastructure
- **Single page:** Currently one route (`/`), all sections render sequentially

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js static export over plain HTML | Get React component model + build tooling without needing a server | ✓ Good |
| Hardcoded data in components | Simple for a portfolio — no CMS complexity | ✓ Good |
| Dark theme only | Matches developer/hacker aesthetic Patrick wants | ✓ Good |
| Gateway site, not blog | Reduces maintenance — content lives in linked projects | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-23 after initialization*
