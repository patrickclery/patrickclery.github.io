# External Integrations

**Analysis Date:** 2026-03-23

## APIs & External Services

**Icon Library:**
- Lucide React - SVG icons rendered client-side, no API calls
  - SDK/Client: `lucide-react` ^0.577.0
  - Auth: None

**Web Fonts:**
- Google Fonts via Next.js font optimization (`next/font/google`)
  - Fonts loaded: Archivo, Space_Grotesk
  - Implementation: `src/app/layout.tsx`
  - Served: Next.js fetches at build time and self-hosts — no runtime Google Fonts request from browsers

## Data Storage

**Databases:**
- None — this is a fully static portfolio site with no data persistence layer

**File Storage:**
- Local filesystem only — static assets in `public/images/`

**Caching:**
- None — static files served directly by GitHub Pages CDN

## Authentication & Identity

**Auth Provider:**
- None — no authentication required for a public portfolio site

## Monitoring & Observability

**Error Tracking:**
- None detected

**Logs:**
- None — static site, no server-side logging

## CI/CD & Deployment

**Hosting:**
- GitHub Pages — static site hosting
  - Custom domain: `patrickclery.com` (via `public/CNAME`)
  - Build artifact: `out/` directory

**CI Pipeline:**
- GitHub Actions — `.github/workflows/deploy.yml`
  - Trigger: push to `master` branch, or manual `workflow_dispatch`
  - Build step: `npm ci` + `npm run build`
  - Deploy step: `actions/deploy-pages@v4`
  - Node.js version: 20 (pinned via `actions/setup-node@v4`)
  - npm cache enabled

## Environment Configuration

**Required env vars:**
- None — no environment variables required for build or runtime

**Secrets location:**
- No secrets — no API keys, tokens, or credentials in use

## External Links (non-API)

**Outbound links rendered in UI:**
- GitHub profile: `https://github.com/patrickclery` — `src/components/Hero.tsx`, `src/components/Footer.tsx`
- LinkedIn profile: `https://www.linkedin.com/in/patrickclery/` — `src/components/Hero.tsx`, `src/components/Footer.tsx`
- Email: `mailto:patrick.clery@gmail.com` — `src/components/Hero.tsx`, `src/components/Footer.tsx`

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

---

*Integration audit: 2026-03-23*
