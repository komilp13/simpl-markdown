---
name: Simpl Markdown project
description: Greenfield SaaS note-taking web app with fade-away markdown editor; PRD complete, ready for UX/architecture phase
type: project
---

Simpl Markdown is a greenfield cloud-based markdown notebook web app that Komil is building solo. Target users want OneNote-like structure without the rigidity, Notion-like features without the complexity, and Obsidian-like markdown power without the bulk.

**Why:** Komil's own pain point — notes scattered across devices and tools. He's building what he wants to use himself.

**How to apply:**
- Brainstorming session: `_bmad-output/brainstorming/brainstorming-session-2026-04-12-1940.md` (56 features, 4 deferred decisions, 8-sprint roadmap)
- PRD: `_bmad-output/planning-artifacts/prd.md` (completed 2026-04-15; 110 FRs, full NFRs, 7 user journeys)
- Key differentiators: fade-away markdown editor (markdown syntax fades to rendered output inline), dedicated journal space, hybrid hierarchy+tags organization, public `/playground` as acquisition surface
- Tech stack: React + Next.js + TypeScript + Tailwind + TipTap, Supabase (auth/db/storage/realtime), Vercel, Stripe, Claude API for AI features
- Pricing: Free / Pro $10mo or $7/mo annual / Premium $20mo or $15/mo annual; 14-day Premium trial on signup
- MVP timeline: 9 weeks (Sprints 1-3). Full product: ~24 weeks
- Scope discipline: solo-focused (no collaboration v1), no native mobile v1, no template marketplace v1, delete-only undo v1
- User journeys named: Karen (secretary, core user), Marcus the developer (power user), Priya (student, new to markdown), Joey (Komil, admin/ops), Sophia (returning user), Dmitri (free-to-paid conversion), Marcus the previewer (playground)
- UX Design Spec: `_bmad-output/planning-artifacts/ux-design-specification.md` (completed 2026-04-16; Slite Gradient direction chosen, 10 custom components, 5 journey flows, full a11y strategy)
- Design Directions HTML: `_bmad-output/planning-artifacts/ux-design-directions.html` (6 mockups, Direction 3 Slite Gradient selected)
- Key UX decisions from party mode: iA Writer as primary editor inspiration, tldraw/excalidraw as playground model (not CodePen), sepia deferred to v1.1, fade-away limited to 4 syntax types in MVP, playground ships with Mermaid only (not full parity), 99.5% public uptime (not 99.9%), sync is last-write-wins not CRDT, FR32/FR33 (wiki links/backlinks) moved to Phase 3
- Architecture: `_bmad-output/planning-artifacts/architecture.md` (completed 2026-04-17; 17 decisions, full project structure, validation passed, implementation-ready)
- Key architecture decisions: Option A starter (create-next-app with-supabase), UUIDs everywhere, soft deletes via deleted_at, full-content version snapshots, PostgreSQL FTS with tsvector, TanStack Query + Zustand state, Server Actions for mutations, feature-based folder structure, GitHub Actions CI, three environments ($0 during dev)
- Epics & Stories: `_bmad-output/planning-artifacts/epics.md` (completed 2026-04-17; 13 epics, 77 stories, all 110 FRs covered, validated)
- Epic breakdown: E1 Foundation+Auth (7), E2 Editor (10), E3 Organization+Search (9), E4 Playground+Marketing (5), E5 Knowledge+History (4), E6 Journal (4), E7 Templates (4), E8 Personalization+Settings (9), E9 Monetization (7), E10 Import/Export (5), E11 Security (4), E12 AI Phase3 (5), E13 Encryption+WikiLinks Phase3 (4)
- MVP = Epics 1-4 (31 stories). Growth = Epics 5-9 (28 stories). Expansion = Epics 10-11 (9 stories). Phase 3 = Epics 12-13 (9 stories).
- Next workflow steps: implementation readiness check → development
