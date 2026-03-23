# Testing Patterns

**Analysis Date:** 2026-03-23

## Test Framework

**Runner:** None — no test framework is installed or configured.

**Evidence:**
- No `jest`, `vitest`, `@testing-library/react`, or any test dependency in `package.json`
- No `jest.config.*` or `vitest.config.*` files present
- No `test` script in `package.json` scripts
- No test files (`*.test.*`, `*.spec.*`) found anywhere in the project

**Run Commands:**
```bash
# No test commands available — none defined in package.json
npm run build    # Type-checking runs as part of Next.js build
```

## Current Quality Assurance

The project relies entirely on TypeScript strict mode for correctness:

- `"strict": true` in `tsconfig.json` enables all strict type checks
- `next build` (`npm run build`) performs TypeScript compilation and catches type errors
- CI/CD in `.github/workflows/deploy.yml` runs `npm run build` on every push to `master`, failing the deployment if the build fails

## Test File Organization

**Location:** Not applicable — no tests exist.

## Test Types

**Unit Tests:** Not present

**Integration Tests:** Not present

**E2E Tests:** Not present

## Coverage

**Requirements:** None enforced.

## Guidance for Adding Tests

If tests are added, the recommended approach for a Next.js 15 + React 19 project:

**Install:**
```bash
npm install --save-dev vitest @vitejs/plugin-react @testing-library/react @testing-library/user-event jsdom
```

**Config file location:** `vitest.config.ts` at project root

**Test file location:** Co-located with components — `src/components/Hero.test.tsx` alongside `src/components/Hero.tsx`

**Naming convention:** Match source filename + `.test.tsx` suffix

**What to test:** Components in `src/components/` are pure presentational functions with static data — unit tests confirming rendered output of key content (headings, links, job entries) would provide the most value.

---

*Testing analysis: 2026-03-23*
