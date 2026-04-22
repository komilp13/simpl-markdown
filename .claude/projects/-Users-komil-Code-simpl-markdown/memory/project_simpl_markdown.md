---
name: Simpl Markdown project
description: Greenfield SaaS markdown notebook — all planning complete, development started, Story 1.1 done
type: project
---

Simpl Markdown is a greenfield cloud-based markdown notebook web app that Komil is building solo. Target users want OneNote-like structure without the rigidity, Notion-like features without the complexity, and Obsidian-like markdown power without the bulk.

**Why:** Komil's own pain point — notes scattered across devices and tools.

## Current Development Status (as of 2026-04-21)

**Story 1.1 COMPLETE (status: review).** Project initialized and deployed to Vercel.
**Next story to create:** Story 1.2 (Configure Development Environment & CI/CD)
**Resume command:** `/bmad-create-story` with argument `1-2` to create Story 1.2, then `/bmad-dev-story` to implement it.

**What exists in the codebase:**
- Next.js 16.2 project from `with-supabase` starter template
- shadcn/ui initialized with Radix primitives
- `src/` based feature folder structure (per Architecture D12)
- Route groups: `(marketing)/`, `(auth)/`, `(app)/`
- Supabase Auth with cookie-based sessions (from starter)
- Vitest + Playwright config files (no tests yet)
- `ActionResult<T>` type, `cn()`, `constants`, `dates` utilities
- Deployed to Vercel, GitHub repo: https://github.com/komilp13/simpl-markdown

**Important note:** The starter uses `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (not `ANON_KEY`). The `.env.example` has been updated to match.

## Planning Artifacts

- Brainstorming: `_bmad-output/brainstorming/brainstorming-session-2026-04-12-1940.md` (56 features, 4 decisions)
- PRD: `_bmad-output/planning-artifacts/prd.md` (110 FRs, 60 NFRs, 7 user journeys)
- UX Design: `_bmad-output/planning-artifacts/ux-design-specification.md` (Slite Gradient, 10 custom components, 5 flows)
- Architecture: `_bmad-output/planning-artifacts/architecture.md` (17 decisions, full project structure)
- Database ERD: `_bmad-output/planning-artifacts/database-erd.md` (14 tables)
- Epics & Stories: `_bmad-output/planning-artifacts/epics.md` (13 epics, 78 stories)
- Readiness Report: `_bmad-output/planning-artifacts/implementation-readiness-report-2026-04-17.md` (all checks passed)
- Design Directions: `_bmad-output/planning-artifacts/ux-design-directions.html` (6 mockups, Direction 3 selected)

## Implementation Artifacts

- Story 1.1: `_bmad-output/implementation-artifacts/1-1-initialize-project-starter-template.md` (status: review, all tasks complete)

## Key Decisions

- Tech: React + Next.js 16 + TypeScript + Tailwind + TipTap + Supabase + Vercel + Stripe + Claude API
- Design: Slite Gradient (purple→pink gradient accents, card-on-gray editor, Plus Jakarta Sans + JetBrains Mono)
- Editor: Keystroke-triggered fade-away, 4 syntax types MVP (bold, italic, H1-H3, links)
- Sync: Last-write-wins via Supabase Realtime (not CRDT)
- Uptime: 99.5% public (not 99.9%)
- MVP: Epics 1-4 (31 stories, ~9 weeks). Playground ships with Mermaid only.
- Pricing: Free / Pro $10 / Premium $20 with 14-day trial
- FR32-33 (wiki links/backlinks) moved to Phase 3
- Sepia theme deferred to v1.1

## Sprint Roadmap

| Sprint | Epics | Stories | Status |
|--------|-------|---------|--------|
| Sprint 1 (MVP) | Epic 1: Foundation+Auth | 8 stories | Story 1.1 done, 1.2 next |
| Sprint 2 (MVP) | Epic 2: Core Editor | 10 stories | Not started |
| Sprint 3 (MVP) | Epic 3: Organization + Epic 4: Playground | 14 stories | Not started |
| Sprint 4 | Epic 5: Knowledge | 4 stories | Not started |
| Sprint 5 | Epic 6: Journal + Epic 7: Templates | 8 stories | Not started |
| Sprint 6 | Epic 8: Personalization + Epic 9: Billing | 16 stories | Not started |
| Sprint 7 | Epic 10: Import/Export + Epic 11: Security | 9 stories | Not started |
| Sprint 8 | Epic 12: AI + Epic 13: Encryption+Links | 9 stories | Not started |
