# Story 1.1: Initialize Project with Starter Template

Status: ready-for-dev

## Story

As a developer,
I want to initialize the project using the official Supabase + Next.js starter with shadcn/ui,
so that I have a working, deployable foundation with auth pre-configured.

## Acceptance Criteria

1. Project created via `npx create-next-app --example with-supabase simpl-markdown` — runs locally with `pnpm dev` without errors
2. shadcn/ui initialized via `pnpm dlx shadcn@latest init --base radix` — components available for use
3. Feature-based folder structure created per Architecture D12:
   - `src/app/` with route groups: `(marketing)/`, `(auth)/`, `(app)/`
   - `src/components/` with subdirs: `ui/`, `editor/`, `sidebar/`, `dashboard/`, `journal/`, `settings/`, `pricing/`, `shared/`
   - `src/lib/` with subdirs: `supabase/`, `stripe/`, `editor/`, `utils/`
   - `src/hooks/`, `src/stores/`, `src/types/`, `src/styles/`
   - `supabase/` with `config.toml` and `migrations/` directory
   - `e2e/` at project root
4. TypeScript strict mode enabled in `tsconfig.json`
5. ESLint configured (Next.js default config)
6. Vitest and Playwright config files created (test infrastructure ready, no tests yet)
7. `.env.example` documents all required environment variables
8. `.gitignore` properly excludes `.env.local`, `node_modules/`, `.next/`
9. Project deploys to Vercel without errors (initial deploy)

## Tasks / Subtasks

- [x] Task 1: Run starter template commands (AC: #1, #2)
  - [x] Execute `npx create-next-app --example with-supabase simpl-markdown`
  - [x] Navigate into project: `cd simpl-markdown`
  - [x] Execute `pnpm dlx shadcn@latest init --base radix`
  - [x] Verify project runs with `pnpm dev` — loads on localhost:3000

- [x] Task 2: Create feature-based folder structure (AC: #3)
  - [x] Create route groups in `src/app/`: `(marketing)/`, `(auth)/`, `(app)/`
  - [x] Move existing starter auth pages into `(auth)/` route group
  - [x] Create placeholder `page.tsx` in `(marketing)/` (landing) and `(app)/dashboard/` (authenticated home)
  - [x] Create component subdirectories: `src/components/{ui,editor,sidebar,dashboard,journal,settings,pricing,shared}/`
  - [x] Create library subdirectories: `src/lib/{supabase,stripe,editor,utils}/`
  - [x] Create `src/hooks/`, `src/stores/`, `src/types/`, `src/styles/`
  - [x] Create `supabase/migrations/` directory
  - [x] Create `e2e/` directory at project root
  - [x] Move any existing Supabase utility files from starter into `src/lib/supabase/`

- [x] Task 3: Configure testing infrastructure (AC: #6)
  - [x] Install Vitest: `pnpm add -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom`
  - [x] Create `vitest.config.ts` with React plugin, jsdom environment, path aliases matching tsconfig
  - [x] Install Playwright: `pnpm add -D @playwright/test`
  - [x] Create `playwright.config.ts` with base URL localhost:3000, webServer config for `pnpm dev`
  - [x] Add test scripts to `package.json`: `"test": "vitest"`, `"test:e2e": "playwright test"`, `"test:coverage": "vitest --coverage"`

- [x] Task 4: Configure environment and documentation (AC: #4, #5, #7, #8)
  - [x] Verify `tsconfig.json` has `"strict": true` (starter should set this)
  - [x] Verify ESLint config exists (`eslint.config.mjs` from starter)
  - [x] Create `.env.example` with all required vars
  - [x] Verify `.gitignore` excludes `.env.local`, `node_modules/`, `.next/`, `.vercel/`
  - [x] Add `supabase/.temp/` to `.gitignore` (local Supabase Docker state)

- [x] Task 5: Create utility foundations (AC: #3)
  - [x] Create `src/lib/utils/cn.ts` — Tailwind class merge utility using `clsx` + `tailwind-merge`
  - [x] Create `src/types/actions.ts` — `ActionResult<T>` type
  - [x] Create `src/lib/utils/constants.ts` — App-wide constants
  - [x] Create `src/lib/utils/dates.ts` — Date formatting with date-fns

- [ ] Task 6: Verify deployment (AC: #9)
  - [ ] Commit all changes to git
  - [ ] Push to GitHub repository
  - [ ] Verify Vercel auto-deploys and builds successfully
  - [ ] Verify deployed app loads without errors

## Dev Notes

### Architecture Requirements (from architecture.md)

**Decision D12 — Feature-based folder structure:**
```
src/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/        # Public: landing, pricing, playground
│   ├── (auth)/             # Login, callback
│   └── (app)/              # Authenticated: dashboard, editor, settings
├── components/
│   ├── ui/                 # shadcn/ui components (copy-paste)
│   ├── editor/             # TipTap editor + extensions
│   ├── sidebar/            # Notebook tree, navigation
│   ├── dashboard/          # Dashboard widgets
│   ├── journal/            # Journal calendar, entries
│   ├── settings/           # Settings panels
│   ├── pricing/            # Monetization UI
│   └── shared/             # Cross-cutting (search palette, theme provider, empty state)
├── lib/
│   ├── supabase/           # Client, helpers, types, actions/
│   ├── stripe/             # Helpers, webhook handlers
│   ├── editor/             # TipTap extensions, fade-away logic
│   └── utils/              # cn, dates, constants, errors
├── hooks/                  # Custom React hooks
├── stores/                 # Zustand stores
├── types/                  # TypeScript types/interfaces
└── styles/                 # Global CSS, theme variables
```

**Decision D14 — CI/CD:**
GitHub Actions CI runs: TypeScript type-check → ESLint → Vitest → Playwright → axe-core. Vercel auto-deploys main. CI/CD pipeline setup is Story 1.2 (next story), NOT this story. This story only creates the config files.

**Decision D19 — Code patterns:**
- Named exports only, no default exports
- No barrel files (index.ts re-exports)
- Co-located tests (*.test.tsx next to source)
- kebab-case file names, PascalCase components

**Decision AR12 — ActionResult type:**
```typescript
type ActionResult<T> = {
  data: T | null
  error: string | null
}
```
All Server Actions will return this type. Create it now so all future stories use it.

### Starter Template Expected Output

The `with-supabase` starter provides:
- Next.js App Router with TypeScript
- Tailwind CSS configured
- Supabase Auth with `@supabase/ssr` package
- Cookie-based session management (HttpOnly)
- Login/signup pages with OAuth support
- Middleware for route protection
- Environment variable setup for Supabase

After shadcn init:
- `components.json` config file
- `src/components/ui/` directory (may be `components/ui/` — move to `src/` if needed)
- Tailwind config extended with shadcn paths
- `cn()` utility function (may need to move to `src/lib/utils/cn.ts`)

### Critical Implementation Notes

1. **Do NOT create database tables** — schema setup is Story 1.4
2. **Do NOT configure GitHub Actions** — CI/CD is Story 1.2
3. **Do NOT implement theme system** — that's Story 1.3
4. **Do NOT add shadcn components** — just initialize the library. Components added per-story.
5. **The starter may use `app/` instead of `src/app/`** — restructure to `src/` if needed for consistency
6. **Preserve all starter auth functionality** — don't break it during restructure
7. **Test that auth still works after restructure** — login page loads, OAuth redirects configured

### Dependencies & Packages to Install

From starter (pre-installed):
- `next`, `react`, `react-dom`
- `@supabase/ssr`, `@supabase/supabase-js`
- `tailwindcss`, `postcss`, `autoprefixer`

From shadcn init (auto-installed):
- `@radix-ui/react-*` (primitives as needed)
- `class-variance-authority`, `clsx`, `tailwind-merge`
- `lucide-react` (icons)

Manually install in this story:
- `date-fns` — date formatting (Architecture: never moment.js)
- `vitest`, `@vitejs/plugin-react`, `jsdom` — unit testing
- `@testing-library/react`, `@testing-library/jest-dom` — React testing utilities
- `@playwright/test` — e2e testing

Do NOT install yet (future stories):
- TipTap (Story 2.2)
- Stripe (Story 9.1)
- Sentry (Story 1.2 or later)
- PostHog (Story 1.2 or later)
- react-hot-toast/sonner (Story 2.10)
- zustand (Story 1.7 or when first needed)
- @tanstack/react-query (Story 2.1 or when first needed)

### Project Structure Notes

- The starter creates the project at the root level. All source code goes under `src/`.
- If the starter puts files in `app/` instead of `src/app/`, move everything to `src/app/` and update next.config accordingly.
- The `supabase/` directory is at project root (not under `src/`).
- The `e2e/` directory is at project root (not under `src/`).
- shadcn may create `components/ui/` at root — move to `src/components/ui/`.

### Latest Technology Versions (as of April 2026)

- **Next.js:** 16.2.4 — App Router fully stable, Turbopack default for dev, ~400% faster dev startup
- **Supabase JS:** 2.103.2 — `@supabase/supabase-js` latest
- **shadcn CLI:** v4 (March 2026) — `--base radix` flag for choosing Radix primitives
- **React:** 19.x — Server Components, Suspense, Server Functions all stable
- **TypeScript:** 5.x strict mode
- **Tailwind CSS:** 4.x with CSS custom properties

### References

- [Source: architecture.md#Starter Template Evaluation] — Starter command and rationale
- [Source: architecture.md#Core Architectural Decisions D12] — Project structure
- [Source: architecture.md#Implementation Patterns] — Naming, exports, test co-location
- [Source: epics.md#Story 1.1] — Story definition and acceptance criteria
- [Source: architecture.md#Core Architectural Decisions D14] — CI/CD (next story, not this one)
- [Source: architecture.md#Core Architectural Decisions D15] — Three environments

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
