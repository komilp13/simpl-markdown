---
stepsCompleted: [1, 2, 3, 4]
status: 'complete'
completedAt: '2026-04-17'
totalEpics: 13
totalStories: 78
inputDocuments: ['_bmad-output/planning-artifacts/prd.md', '_bmad-output/planning-artifacts/architecture.md', '_bmad-output/planning-artifacts/ux-design-specification.md']
---

# simpl-markdown - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for simpl-markdown, decomposing the requirements from the PRD, UX Design, and Architecture into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: Users can create an account using social login via Google or Microsoft without filling out forms.
FR2: Users can log in and log out from any device.
FR3: The system automatically signs users out after 30 minutes of inactivity and redirects to login.
FR4: Users can configure session timeout duration (15, 30, or 60 minutes) in settings.
FR5: Users can enable two-factor authentication via email with "trust this device for 30 days" option.
FR6: Users can view their login activity log (date, time, device, location) in security settings.
FR7: Users can view and revoke active sessions on other devices.
FR8: Users can receive email notifications for logins from unfamiliar devices (optional, toggleable).
FR9: Users can create, rename, and delete notebooks.
FR10: Users can assign each notebook a color and an icon from a curated library.
FR11: Users can create, rename, and delete sections within a notebook.
FR12: Users can create, rename, and delete notes within a section.
FR13: Users can move notes between sections and notebooks.
FR14: Users can apply multiple tags to any note.
FR15: Users can view all notes associated with a specific tag across all notebooks.
FR16: Users can pin individual notes to the top of their section.
FR17: Users can mark notes as favorites and see them in a dedicated Favorites view.
FR18: Users can write note content using markdown syntax that automatically renders inline (fade-away editor).
FR19: Users can click on any rendered element to reveal and edit the underlying raw markdown.
FR20: Users can insert formatting, structural elements, and rich content blocks via a / slash command menu.
FR21: The slash command menu must include: tables, code blocks, images, horizontal dividers, text formatting (bold, italic, strikethrough, highlight, quote), headings (H1-H3), lists (bullet, numbered, toggle, checklist), Mermaid diagrams, LaTeX math blocks, and colored callout banners (success/green, warning/yellow, danger/red, info/blue).
FR22: Users can insert Mermaid diagram code blocks that render the diagram in real time as they type.
FR23: Users can insert code blocks with language-aware syntax highlighting, a language selector, a copy button, line numbers toggle, and word wrap toggle.
FR24: Users can insert LaTeX math equations both inline and as blocks with live rendering.
FR25: The system automatically tracks and displays the creation date and last modified date of every note.
FR26: Users can attach files (images, PDFs, spreadsheets, documents) to notes via drag-and-drop, clipboard paste, upload button, or /attach slash command.
FR27: The system renders image thumbnails inline and displays non-image attachments as styled cards with file metadata and download action.
FR28: Users can generate an in-note outline/table of contents from headings and jump to specific sections.
FR29: Users can bookmark individual lines or paragraphs within a note and jump to them via the outline panel.
FR30: Users can search across all notebooks, sections, and notes — including content, titles, tags, Mermaid labels, and code blocks — from a global search interface.
FR31: The system displays search results with highlighted matches and notebook/section breadcrumb for each result.
FR32: Users can create wiki-style internal links between notes by typing [[ to trigger an autocomplete note picker. (Phase 3)
FR33: The system automatically displays a "Linked from" backlinks section on every note listing all notes that reference it via wiki links. (Phase 3)
FR34: Users can view a "Related Notes" side panel showing notes grouped by explicit links, shared tags, and AI-detected content similarity. (Phase 3 for AI grouping)
FR35: Users can view a chronological Timeline of their activity across all notebooks, filterable by tag, date range, or search term.
FR36: The system displays change history for any note showing additions, removals, and modifications over time (diff-aware).
FR37: The system detects and alerts users to duplicate or near-duplicate notes, offering options to merge, link, or keep both. (Premium, Phase 3)
FR38: The system automatically saves note changes within 2 seconds of user inactivity and displays a "Saving..." → "Saved" status indicator.
FR39: The system saves changes periodically (every 30 seconds) during active typing as a crash-recovery safety net.
FR40: Users can manually force a save with Ctrl+S.
FR41: When a user deletes a note, the system moves it to a Trash bin and displays a toast notification with an "Undo" action that restores the note immediately.
FR42: Users can view the Trash bin, preview trashed notes, and restore them to their original location.
FR43: Users can configure the Trash retention duration in settings (7 days, 30 days, 90 days, or never auto-delete).
FR44: The system automatically deletes notes from Trash after the user's configured retention period.
FR45: The system syncs user data across devices via last-write-wins with debounced autosave. Cross-device sync within ~1 second via Supabase Realtime notification + refetch.
FR46: The system preserves the user's cursor position within a note across sessions and devices.
FR47: Users can access a dedicated top-level Journal space separate from notebooks.
FR48: The system automatically creates a new journal entry for today's date when the user opens the journal and no entry exists yet.
FR49: Users can view their journal entries in a monthly calendar grid with days containing entries highlighted.
FR50: Users can navigate to any specific date in the calendar to read or edit that entry.
FR51: Users can open today's journal entry instantly via a dedicated Quick Journal button available from anywhere in the app.
FR52: Users can apply tags to journal entries that integrate with the global tag system.
FR53: The system displays journal statistics (current streak, longest streak, this month count, total entries, average length). (Premium, Phase 3)
FR54: Users can enable or disable journal streak notifications in settings. (Premium, Phase 3)
FR55: Users can apply a note template to any note via the /template slash command.
FR56: The system provides a library of built-in starter templates including Meeting Notes, Project Plan, Weekly Review, Decision Log, Bug Report, Pros & Cons, Research Notes, 1-on-1 Meeting, Brainstorming, Daily Standup, Feature Spec, and Travel Plan.
FR57: Users can create custom note templates from scratch or by saving an existing note as a template.
FR58: Users can assign a default template to any section so new notes in that section auto-apply the template.
FR59: Templates can include variable tokens (like {{date}}, {{notebook_name}}) that auto-fill on creation.
FR60: Users can switch between light, dark, and sepia theme modes. (Sepia deferred to v1.1)
FR61: Users can customize accent colors (primary button, sidebar tint, link color, highlight color).
FR62: Users can upload a custom cover image for any notebook and resize/reposition it using an in-app crop editor before saving.
FR63: Users can enter a focus/zen mode that hides the sidebar, toolbar, and all chrome, leaving only the note canvas.
FR64: Users can customize the home dashboard by adding, removing, resizing, and rearranging widgets.
FR65: Users can adjust editor font size (12-24px) and line height (1.2-2.0) with live preview.
FR66: Users can configure separate appearance settings for editor text versus UI text.
FR67: Users can invoke global search with Ctrl+K.
FR68: Users can create a new note with Ctrl+N.
FR69: Users can switch between notes quickly with Ctrl+P.
FR70: Users can open the slash command menu with Ctrl+/.
FR71: Users can access all common actions via keyboard shortcuts without requiring a mouse.
FR72: Users can customize keyboard shortcut bindings in settings.
FR73: Users can enable per-notebook end-to-end encryption, encrypting content client-side before upload. (Phase 3)
FR74: When enabling encryption, the system generates a recovery key that the user must save before encryption activates. (Phase 3)
FR75: The system displays a lock icon on encrypted notebooks. (Phase 3)
FR76: The system enforces row-level security so users can only access their own data.
FR77: Users can import existing notes from markdown files via drag-and-drop folder upload.
FR78: Users can import notes from OneNote, Evernote (.enex), and Notion (exported ZIP).
FR79: The system automatically suggests notebook and section mapping during import and extracts tags from YAML frontmatter.
FR80: Users can export individual notes or entire notebooks in Markdown, PDF, Word, HTML, Plain Text, EPUB, LaTeX, or JSON format.
FR81: Users can export an entire notebook as a ZIP bundle containing files in the chosen format.
FR82: The system automatically creates a "Welcome" tutorial notebook for every new user on first sign-up.
FR83: The tutorial notebook contains hands-on lessons for: Your First Note, Try Slash Commands, Add a Mermaid Diagram, Organize with Tags, Explore Features.
FR84: The tutorial notebook displays a progress indicator showing completed lessons.
FR85: Users can delete the tutorial notebook at any time.
FR86: The system displays contextual empty-state guidance on every empty surface.
FR87: The system displays a subtle "What's New" announcement for returning users after long absences.
FR88: The system displays toast notifications for key actions.
FR89: Toast notifications can include contextual actions (e.g., "Undo" after delete).
FR90: Toasts must not block user workflow — they auto-dismiss after 3-4 seconds and stack up to 3 visible.
FR91: The system offers three subscription tiers: Free, Pro, and Premium, with defined feature gates for each.
FR92: The system offers monthly and annual billing options with a clear savings toggle.
FR93: Every new signup receives a 14-day free trial of Premium features without requiring credit card upfront.
FR94: The system displays a summary of Premium usage at trial end to inform conversion decisions.
FR95: The system gracefully downgrades trial users to Free tier when trial ends without deleting any data.
FR96: Users can upgrade, downgrade, or cancel their subscription at any time through a self-service customer portal.
FR97: The system enforces free-tier limits (3 notebooks max, 50 notes per notebook, 500MB storage) via non-blocking toast notifications.
FR98: Users can complete payment via credit/debit card, Apple Pay, or Google Pay.
FR99: The system applies prorated billing when users change plans mid-cycle.
FR100: The system handles failed payments with automatic retry (3 attempts over 7 days), email notifications, and a grace period before downgrade.
FR101: The system analyzes note content and suggests relevant tags that the user can accept or dismiss (Premium, Phase 3).
FR102: The system retroactively applies auto-tagging to existing notes (Premium, Phase 3).
FR103: The system detects duplicate or near-duplicate notes across the user's content (Premium, Phase 3).
FR104: The system groups related notes in the Related Notes side panel by AI-detected content similarity (Premium, Phase 3).
FR105: Anonymous users can access a public /playground route without authentication.
FR106: The playground renders markdown with the same fade-away editor, Mermaid, LaTeX, syntax highlighting, and slash commands as the authenticated app. (MVP: Mermaid only; LaTeX/syntax-highlighting v1.1)
FR107: Playground content is rendered client-side only — the system guarantees no content is saved or transmitted to the server.
FR108: The playground displays a clear "Nothing is saved. Your content stays in your browser" notice.
FR109: The playground displays a subtle non-blocking sign-up CTA that does not interrupt the user's workflow.
FR110: The system rate-limits playground asset requests by IP to prevent abuse.

### NonFunctional Requirements

NFR-P1: Initial application load within 2 seconds.
NFR-P2: Note switching within 500ms.
NFR-P3: All user actions respond within 500ms.
NFR-P4: Auto-save round-trip within 2 seconds.
NFR-P5: Slash command menu appears within 100ms.
NFR-P6: Global search returns results within 500ms for up to 10,000 notes.
NFR-P7: Mermaid diagrams render within 500ms.
NFR-P8: Syntax highlighting applies within 100ms.
NFR-P9: Cross-device sync propagation within 5 seconds.
NFR-P10: Core Web Vitals pass Google's "Good" threshold at 75th percentile.
NFR-P11: Initial bundle size under 250KB gzipped for authenticated route.
NFR-P12: /playground fully interactive within 2 seconds on 4G.
NFR-S1: All data encrypted in transit using TLS 1.2+.
NFR-S2: All data encrypted at rest.
NFR-S3: E2E encrypted notebooks: content encrypted client-side, server never holds decryption keys.
NFR-S4: User sessions use HttpOnly, Secure, SameSite=Strict cookies.
NFR-S5: RLS policies enforce user-only access, verified via automated tests on every migration.
NFR-S6: Tokens/passwords never logged, stored plain, or transmitted to third parties.
NFR-S7: Payment card data never touches our servers (Stripe PCI compliance).
NFR-S8: CSP disallows unsafe-inline scripts.
NFR-S9: User-generated content rendered through sanitizing parser to prevent XSS.
NFR-S10: All state-changing endpoints require CSRF token validation.
NFR-S11: Failed login attempts rate-limited (5 per 15 minutes per IP/account).
NFR-S12: 2FA codes expire within 5 minutes, single-use.
NFR-S13: Session tokens expire after configurable inactivity (15-60 min).
NFR-S14: /playground never transmits user content to server or third-party.
NFR-R1: 99.5% publicly-committed uptime (99.9% internal aspiration).
NFR-R2: Auto-save persists with zero data loss under normal conditions.
NFR-R3: WebSocket loss fallback to 30s polling without user-visible disruption.
NFR-R4: Offline edits sync on reconnection with conflict detection surfaced to user.
NFR-R5: Daily database backups with 7-day point-in-time recovery.
NFR-R6: Failed Stripe webhooks retry with exponential backoff, alert on unprocessed.
NFR-R7: Tab crashes lose no more than 2 seconds of work (SessionStorage recovery).
NFR-SC1: Support 1,000 concurrent users with performance targets met.
NFR-SC2: Single user: up to 100 notebooks, 1,000 sections, 100,000 notes without degradation.
NFR-SC3: Global search scales to 10 million total notes across all users.
NFR-SC4: Infrastructure scales to 50,000 MAU without manual intervention.
NFR-SC5: File storage supports per-user quotas up to 50GB with CDN delivery.
NFR-SC6: Beyond 50K MAU, architecture supports migration to custom infrastructure.
NFR-A1: WCAG 2.1 Level AA across all surfaces.
NFR-A2: All interactive elements fully operable via keyboard.
NFR-A3: All elements have ARIA labels/roles/states, verified by axe-core in CI.
NFR-A4: Color contrast 4.5:1 normal text, 3:1 large text across all themes.
NFR-A5: Screen reader compatible (NVDA, VoiceOver, TalkBack) tested before each major release.
NFR-A6: Text scales to 200% without loss of functionality.
NFR-PR1: Account deletion removes all data within 30 days with email confirmation.
NFR-PR2: Users can export all data in portable format at any time.
NFR-PR3: Audit log of security-relevant events visible to user.
NFR-PR4: GDPR-compliant: consent, portability, right to erasure, accessible privacy policy.
NFR-PR5: Privacy Policy disclosed before data collection.
NFR-PR6: Analytics respect Do Not Track, opt-out in settings.
NFR-C1: Last two major versions of Chrome, Firefox, Safari, Edge.
NFR-C2: No browser plugins, extensions, or polyfills required.
NFR-C3: Responsive 320px to 2560px+.
NFR-C4: Touch, pointer, and keyboard input all function correctly.
NFR-O1: Production errors captured via Sentry with user context.
NFR-O2: Product metrics tracked via PostHog (signups, conversions, DAU, feature usage).
NFR-O3: Core Web Vitals monitored via Vercel Analytics RUM.
NFR-O4: Critical ops events generate email alerts within 5 minutes.
NFR-O5: Deployments automated via CI/CD with no manual steps.

### Additional Requirements

From Architecture document:

- AR1: Project initialization using `npx create-next-app --example with-supabase` + `pnpm dlx shadcn@latest init --base radix` (starter template — Epic 1, Story 1)
- AR2: Three environments: development (local Supabase Docker), preview (Supabase free staging), production (Supabase free → Pro)
- AR3: GitHub Actions CI pipeline: TypeScript type-check → ESLint → Vitest → Playwright → axe-core
- AR4: Database uses UUIDs for all primary keys via gen_random_uuid()
- AR5: Soft deletes via deleted_at timestamp column (null = active, non-null = trashed)
- AR6: Version history via separate note_versions table with full content snapshots (Phase 2)
- AR7: Full-text search via PostgreSQL tsvector with GIN index and auto-update trigger
- AR8: Client caching via TanStack Query with staleTime: 30s for notes, 5m for notebooks/sections
- AR9: RLS helper function is_owner() used in all policies
- AR10: Single Next.js middleware for auth redirect on /app/* routes
- AR11: Hybrid API: Server Actions for mutations, direct Supabase for reads, API Routes for webhooks only
- AR12: Error handling: ActionResult<T> return type for all Server Actions
- AR13: State management: TanStack Query (server state) + Zustand (UI state only)
- AR14: Feature-based project folder structure in src/
- AR15: Dynamic imports for Mermaid (~1MB), KaTeX (~300KB), code highlighting
- AR16: Database migrations via Supabase CLI, versioned in Git
- AR17: Monitoring: Sentry (errors) + Vercel Analytics (CWV) + PostHog (product)
- AR18: Implementation patterns: snake_case database, camelCase TypeScript, kebab-case files, PascalCase components
- AR19: Co-located tests, named exports only, no barrel files, no default exports
- AR20: Supabase migrations numbered 00001-00011 covering all tables

### UX Design Requirements

UX-DR1: Implement Slite Gradient color token system — light theme (--background: #FAFAFA, --background-card: #FFFFFF, --primary: #7B68EE, --primary-gradient: linear-gradient(135deg, #7B68EE, #EF91F7), --surface-code: #1A1A2E) and dark theme equivalents as CSS custom properties in globals.css.
UX-DR2: Implement Plus Jakarta Sans as primary font (variable woff2) and JetBrains Mono as monospace font with the defined type scale (12-36px, 7 sizes).
UX-DR3: Build FadeAwayEditor component — TipTap + ProseMirror with keystroke-triggered fade-away decoration plugins for bold, italic, H1-H3, links (MVP). CSS opacity transition at 100ms. Click-to-reveal reverse-fade for editing rendered content.
UX-DR4: Build SlashCommandMenu component — floating combobox (Radix Popover) triggered by / with searchable, categorized commands. Radix combobox ARIA pattern with aria-activedescendant. 18+ commands in MVP.
UX-DR5: Build NotebookSidebar component — collapsible tree with role="tree"/treeitem ARIA pattern, gradient-wash active states, emoji Quick Access icons. Mobile: full-screen drawer.
UX-DR6: Build NoteTagInput component — horizontal pill row with autocomplete dropdown (role="listbox"). Tag pills are buttons with aria-label="Remove tag: [name]".
UX-DR7: Build NotebookColorIconPicker component — two-tab popover with 12-color palette (role="radiogroup") and icon grid. Color labels describe names not hex codes.
UX-DR8: Build SearchResultItem component for Ctrl+K palette — title + highlighted snippet + breadcrumb + tag pills.
UX-DR9: Build EditorStatusBar component — save status (aria-live="polite"), word count, reading time, shortcut hints. States: saving/saved/error/offline.
UX-DR10: Build JournalCalendarGrid component — monthly grid (role="grid"/gridcell), arrow-key navigation, dot indicators for entries, today highlighted. (Phase 2)
UX-DR11: Build DashboardWidgetGrid component — configurable widget grid (react-grid-layout), edit mode with drag/resize handles, keyboard alternatives. (Phase 2)
UX-DR12: Build PricingComparisonTable component — three-column Free/Pro/Premium, monthly↔annual toggle, feature checkmarks, CTAs. (Phase 2)
UX-DR13: Editor card-within-page layout — white card (16px radius) on gray surface (#FAFAFA), max-width 740px, margin 16px, subtle shadow. Card expands to full viewport in zen mode.
UX-DR14: Implement toast system via sonner — dark bg (#1A1A2E), 14px radius, bottom-right stack, max 3, auto-dismiss 3-4s, role="status" for info, role="alert" for errors.
UX-DR15: Implement empty state pattern — blinking cursor for writing surfaces, contextual guidance for navigation surfaces. Calm-friend voice. No elaborate illustrations.
UX-DR16: Implement button hierarchy — primary (solid --primary), secondary (border), ghost (no border), gradient variant (marketing only), destructive (red text on ghost). Sizes: 28/36/44px.
UX-DR17: Implement context menu pattern — Radix DropdownMenu on right-click/three-dot. Destructive items at bottom, separated by divider, red text. Shortcut hints inline.
UX-DR18: Copy & voice guidelines enforcement — "said aloud" test, forbidden register (no "Oops!", no exclamation except celebration, no anthropomorphizing), 12-word microcopy ceiling, plain verbs, specific button labels ("Delete notebook" not "OK").
UX-DR19: Sensitive moments copy — payment failures name actor + consequence + action. Sync conflicts are "choices" not "errors". Account deletion requires typing name. Encryption key loss stated plainly.
UX-DR20: Responsive breakpoints — mobile (320-767px): edge-to-edge card, drawer sidebar, bottom-sheet slash menu. Tablet (768-1023px): overlay sidebar. Desktop (1024px+): full three-pane. Editor never exceeds 740px.
UX-DR21: Accessibility implementation — skip-to-content links, 44px touch targets, prefers-reduced-motion (0ms), prefers-color-scheme for initial theme, axe-core in CI, monthly screen reader walkthroughs.
UX-DR22: Loading pattern — skeleton placeholders (never spinners), optimistic UI for mutations, progress bars only for long operations (import/export/upload).
UX-DR23: Playground follows tldraw/excalidraw model — zero chrome, landing page IS the canvas, CTA only when user tries to save, no penalty for dismissing.

### FR Coverage Map

| FR | Epic | Description |
|----|------|-------------|
| FR1-3 | Epic 1 | Authentication & session management |
| FR4 | Epic 8 | Session timeout settings |
| FR5-8 | Epic 11 | Advanced security (2FA, sessions, activity) |
| FR9, FR11-12 | Epic 2 | Notebook/section/note CRUD |
| FR10 | Epic 3 | Notebook color + icon |
| FR13-17 | Epic 3 | Move, tag, pin, favorite |
| FR18-25 | Epic 2 | Editor: fade-away, slash, Mermaid, code, LaTeX, timestamps |
| FR26-27 | Epic 10 | File attachments |
| FR28-29 | Epic 5 | Bookmarks & outline |
| FR30-31 | Epic 3 | Global search |
| FR32-33 | Epic 13 | Wiki links & backlinks (Phase 3) |
| FR34 | Epic 12 | Related notes AI grouping (Phase 3) |
| FR35-36 | Epic 5 | Timeline & diff history |
| FR37 | Epic 12 | Duplicate detection (Phase 3) |
| FR38-40 | Epic 2 | Auto-save |
| FR41-44 | Epic 3 | Trash & retention |
| FR45-46 | Epic 2 | Cross-device sync & cursor persistence |
| FR47-52 | Epic 6 | Journal system |
| FR53-54 | Epic 12 | Journal streaks (Phase 3) |
| FR55-59 | Epic 7 | Templates |
| FR60-66 | Epic 8 | Personalization |
| FR67-71 | Epic 3 | Keyboard shortcuts |
| FR72 | Epic 8 | Custom shortcut bindings |
| FR73-75 | Epic 13 | E2E encryption (Phase 3) |
| FR76 | Epic 1 | Row-level security |
| FR77-81 | Epic 10 | Import & export |
| FR82-85 | Epic 8 | Tutorial notebook |
| FR86-87 | Epic 8 | Empty states & what's new |
| FR88-90 | Epic 2 | Toast notifications |
| FR91-100 | Epic 9 | Monetization & billing |
| FR101-104 | Epic 12 | AI intelligence (Phase 3) |
| FR105-110 | Epic 4 | Public playground |

## Epic List

### Epic 1: Project Foundation & User Authentication
Users can sign up with Google or Microsoft, log in from any device, and have a secure authenticated session. Project infrastructure is deployed and operational.
**FRs:** FR1, FR2, FR3, FR76 | **ARs:** AR1-AR5, AR9-AR10, AR14, AR16-AR20 | **UX-DRs:** UX-DR1, UX-DR2, UX-DR14, UX-DR16, UX-DR20, UX-DR21 | **Sprint:** 1

### Epic 2: Core Editor Experience
Users can create notebooks, sections, and notes, and write using the fade-away markdown editor with slash commands, Mermaid diagrams, code blocks, and LaTeX. Notes auto-save continuously with cross-device sync.
**FRs:** FR9, FR11, FR12, FR18-25, FR38-40, FR45-46, FR88-90 | **UX-DRs:** UX-DR3, UX-DR4, UX-DR5, UX-DR9, UX-DR13, UX-DR15 | **Sprint:** 1-2

### Epic 3: Organization, Search & Data Safety
Users can tag notes, search across all content, pin and favorite notes, move notes between sections, and safely delete/restore notes via Trash. Keyboard shortcuts for all common actions.
**FRs:** FR10, FR13-17, FR30-31, FR41-44, FR67-71, FR86 | **ARs:** AR7, AR8 | **UX-DRs:** UX-DR6, UX-DR7, UX-DR8, UX-DR17 | **Sprint:** 2-3

### Epic 4: Public Playground & Marketing Site
Anonymous users can try the fade-away editor at /playground without signing up. SEO-optimized landing and pricing pages drive signups.
**FRs:** FR105-110 | **UX-DRs:** UX-DR23 | **Sprint:** 3

### Epic 5: Knowledge Layer & History
Users can view a timeline of activity, see change history (diffs) for notes, and use in-note bookmarks and floating outline for navigation.
**FRs:** FR28-29, FR35-36 | **ARs:** AR6 | **Sprint:** 4

### Epic 6: Daily Journal System
Users access a dedicated Journal space, write daily entries that auto-create, browse in a calendar view, and quickly open today's entry from anywhere.
**FRs:** FR47-52 | **UX-DRs:** UX-DR10 | **Sprint:** 5

### Epic 7: Templates & Productivity
Users can apply built-in starter templates (12 types), create custom templates, and assign default templates to sections.
**FRs:** FR55-59 | **Sprint:** 5

### Epic 8: Personalization, Settings & Polish
Users customize themes, fonts, dashboard, zen mode, keyboard shortcuts, and experience guided onboarding via tutorial notebook.
**FRs:** FR4, FR60-66, FR72, FR82-85, FR87 | **UX-DRs:** UX-DR11, UX-DR15, UX-DR18, UX-DR22 | **Sprint:** 6

### Epic 9: Monetization & Billing
Users see pricing tiers, subscribe, manage billing, and experience graceful free-tier limits. 14-day Premium trial on signup.
**FRs:** FR91-100 | **UX-DRs:** UX-DR12, UX-DR19 | **Sprint:** 6

### Epic 10: Import, Export & Rich Content
Users import notes from other tools, export in multiple formats, and attach files to notes.
**FRs:** FR26-27, FR77-81 | **Sprint:** 7

### Epic 11: Advanced Security & Account Management
Users enable 2FA via email, view login activity, manage sessions, receive device alerts.
**FRs:** FR5-8 | **Sprint:** 7

### Epic 12: AI Intelligence (Phase 3 — Premium)
Premium users get AI auto-tagging, duplicate detection, related notes, journal streaks/stats.
**FRs:** FR34, FR37, FR53-54, FR101-104 | **Sprint:** 8

### Epic 13: Encryption & Wiki Links (Phase 3)
Users enable per-notebook E2E encryption with recovery key. Users create wiki-style [[links]] and see backlinks.
**FRs:** FR32-33, FR73-75 | **Sprint:** 8

---

## Epic 1: Project Foundation & User Authentication

Users can sign up with Google or Microsoft, log in from any device, and have a secure authenticated session. Project infrastructure is deployed and operational.

### Story 1.1: Initialize Project with Starter Template
As a developer, I want to initialize the project using the official Supabase + Next.js starter with shadcn/ui, so that I have a working, deployable foundation with auth pre-configured.
**AC:** Given starter command available, When I run `npx create-next-app --example with-supabase` + `pnpm dlx shadcn@latest init --base radix`, Then Next.js 16+ project created with App Router, TypeScript strict, Tailwind, Supabase Auth. And feature-based folder structure created per architecture D12. And project runs locally without errors.

### Story 1.2: Configure Development Environment & CI/CD
As a developer, I want local Supabase Docker, environment variables, and GitHub Actions CI configured, so that I can develop locally and have automated quality checks.
**AC:** Given project initialized, When I run `supabase start`, Then local PostgreSQL/Auth/Storage/Realtime starts. And `.env.local` configured. And `.github/workflows/ci.yml` runs type-check, ESLint, Vitest. And Vercel auto-deploys main.

### Story 1.3: Implement Slite Gradient Theme System
As a user, I want the app to display with the Slite Gradient visual design, so that the app feels modern and distinctive.
**AC:** Given app loads, Then CSS custom properties for light theme applied (--background: #FAFAFA, --primary: #7B68EE, --primary-gradient). And Plus Jakarta Sans + JetBrains Mono loaded. And dark theme tokens toggle via class. And prefers-color-scheme detected. And prefers-reduced-motion respected.

### Story 1.4: Create Initial Database Schema with RLS
As a developer, I want core database tables with UUID keys, RLS policies, and is_owner() helper, so that user data is securely isolated.
**AC:** Given Supabase running, When migrations applied, Then notebooks/sections/notes tables exist with UUID PKs, proper columns, and FKs. And is_owner() function created. And RLS policies on all tables. And automated tests verify cross-user access blocked.

### Story 1.5: Social Login with Google and Microsoft
As a user, I want to sign up and log in using my Google or Microsoft account, so that I can start immediately without creating a password.
**AC:** Given login page, When I click "Sign in with Google/Microsoft", Then OAuth flow completes and I'm redirected to /app/dashboard. And session stored as HttpOnly/Secure/SameSite=Strict cookie. And logout destroys session. And unauthenticated /app/* access redirects to /login.

### Story 1.6: Session Timeout with Auto-Redirect
As a user, I want auto-signout after 30 minutes of inactivity, so that my account is protected.
**AC:** Given idle 30 minutes, Then immediate signout + redirect to /login. No confirmation modal. And active interaction resets timer.

### Story 1.7: App Shell Layout
As a user, I want to see the app shell (top bar, sidebar, status bar) when I log in, so that I can navigate.
**AC:** Given authenticated, Then top bar (52px) with logo/search/journal/theme. And sidebar (256px) with Notebooks + Quick Access. And main content area (gray #FAFAFA). And status bar (36px). And mobile sidebar as drawer via hamburger. And Ctrl+\ toggles sidebar.

### Story 1.8: Developer Documentation
As a developer, I want internal documentation covering project setup, architecture decisions, and contribution guidelines, so that I or future contributors can onboard quickly and build consistently.
**AC:** Given a new developer clones the repo, Then README contains: project overview, prerequisites (Node, pnpm, Docker), setup steps, environment variable guide, and link to architecture doc. And a docs section covers: Server Action inventory (actions, inputs, outputs), Stripe webhook endpoint documentation (events handled, payload, errors), Supabase Realtime channel conventions. And coding standards section links to architecture patterns (naming, structure, format) with pre-commit checklist (types pass, tests pass, no barrel files, RLS on new tables).

---

## Epic 2: Core Editor Experience

Users can create notebooks, sections, and notes, and write using the fade-away markdown editor with slash commands, Mermaid, code blocks, and LaTeX. Notes auto-save with cross-device sync.

### Story 2.1: Notebook, Section & Note CRUD
As a user, I want to create, rename, and delete notebooks, sections, and notes, so that I can organize my content.
**AC:** Given sidebar, When I click + next to Notebooks/notebook/section, Then inline text field for creation. And optimistic UI. And right-click for rename/delete. And delete cascades to children (soft delete). And undo toast for 5 seconds.

### Story 2.2: Editor Card Layout & Basic Text Editing
As a user, I want to type in a clean editor card on a gray surface, so that my writing feels focused.
**AC:** Given note opened, Then white card (16px radius) centered on #FAFAFA, max-width 740px. And card contains title, tags, TipTap editor. And placeholder: "Start writing, or type / for commands". And Plus Jakarta Sans at configured size.

### Story 2.3: Fade-Away Markdown Rendering
As a user, I want markdown syntax to fade into rendered output as I type, so that I see formatted content without mode switching.
**AC:** Given typing `**bold**`, Then asterisks fade (100ms CSS opacity), text becomes bold. And same for *italic*, ## headings, [links](url). And click on rendered element reverses fade for editing. And MVP: 4 syntax types only. And screen readers see semantic content.

### Story 2.4: Slash Command Menu
As a user, I want to type / to open a searchable command menu, so that I can format without memorizing syntax.
**AC:** Given typing /, Then floating combobox appears <100ms. And filter by typing. And 18+ commands. And Radix combobox ARIA. And Esc closes.

### Story 2.5: Live Mermaid Diagram Rendering
As a user, I want Mermaid code blocks to render diagrams in real time, so that I can visualize as I write.
**AC:** Given mermaid code block, Then diagram renders below in real time <500ms. And syntax errors show inline message. And Mermaid.js lazy-loaded on first use. And dark code block background.

### Story 2.6: Syntax-Highlighted Code Blocks
As a user, I want code blocks with language-aware highlighting and a copy button, so that code is readable.
**AC:** Given code block, Then language selector dropdown. And syntax highlighting <100ms. And copy button. And line numbers + word wrap toggles. And 20+ languages. And lazy-loaded.

### Story 2.7: LaTeX Math Equation Rendering
As a user, I want LaTeX math equations inline and as blocks, so that I can write mathematical notation.
**AC:** Given $...$ or $$...$$, Then equations render via KaTeX. And /math slash command. And live preview. And KaTeX lazy-loaded.

### Story 2.8: Auto-Save with Visual Status Indicator
As a user, I want notes to save automatically, so that I never lose work.
**AC:** Given typing stops for 2s, Then save fires, status shows "Saving..."→"Saved ✓". And 30s periodic save during active typing. And Ctrl+S manual save. And SessionStorage crash backup. And offline: "Offline — saved locally" (amber). And ActionResult<T> pattern.

### Story 2.9: Cross-Device Sync via Supabase Realtime
As a user, I want notes to appear on other devices within seconds, so that I can switch devices seamlessly.
**AC:** Given note saved on Device A, Then Device B receives Realtime notification ~1s, refetches via TanStack Query. And WebSocket loss falls back to 30s polling. And last-write-wins with updated_at. And cursor position preserved.

### Story 2.10: Toast Notification System
As a user, I want subtle notifications confirming my actions, so that I know the app is responding.
**AC:** Given action completes, Then toast in bottom-right, dark bg (#1A1A2E), 14px radius. And auto-dismiss 3-4s. And max 3 stack. And destructive actions include Undo (5s). And role="status" for info, role="alert" for errors. And sonner implementation.

---

## Epic 3: Organization, Search & Data Safety

Users can tag, search, pin, favorite, move notes, and safely delete/restore via Trash. Keyboard shortcuts for all actions.

### Story 3.1: Notebook Color & Icon Picker
As a user, I want to assign a color and icon to each notebook, so that I can visually distinguish them.
**AC:** Given notebook creation or edit, Then two-tab popover: 12-color palette + icon grid. And role="radiogroup" per grid. And color labels describe names. And saves via Server Action.

### Story 3.2: Multi-Tag Note Organization
As a user, I want to apply multiple tags and view all notes by tag, so that I can discover across notebooks.
**AC:** Given tag area clicked, Then autocomplete input with existing tags. And Enter applies tag pill. And tag pills removable with undo. And clicking tag shows all notes with that tag. And migration creates tags + note_tags tables with RLS.

### Story 3.3: Global Search with Ctrl+K Command Palette
As a user, I want to search all content from a single interface, so that I can find anything instantly.
**AC:** Given Ctrl+K pressed, Then command palette opens (cmdk). And results as-I-type (300ms debounce). And results show title + snippet + breadcrumb + tags. And <500ms response. And PostgreSQL tsvector with GIN index. And Esc closes.

### Story 3.4: Pin Notes to Top & Favorite Notes
As a user, I want to pin notes to section top and star favorites, so that important notes are always accessible.
**AC:** Given right-click note, Then Pin to Top / Star options. And pinned notes above divider. And favorites appear in Favorites view. And optimistic UI updates.

### Story 3.5: Move Notes Between Sections & Notebooks
As a user, I want to move notes between sections, so that I can reorganize as my structure evolves.
**AC:** Given right-click → Move to, Then picker shows notebooks/sections. And note moves instantly (optimistic). And undo toast 5s. And TanStack Query invalidates source + destination.

### Story 3.6: Trash Bin with Undo & Configurable Retention
As a user, I want deleted notes in Trash where I can restore them, so that I never permanently lose content.
**AC:** Given delete action, Then deleted_at set (soft delete). And toast "Moved to Trash — Undo" 5s. And Trash view shows deleted notes. And Restore sets deleted_at to null. And auto-purge after retention period. And RLS filters accordingly.

### Story 3.7: Keyboard Shortcuts for Common Actions
As a user, I want keyboard shortcuts for all common actions, so that I can work without the mouse.
**AC:** Given authenticated app, Then Ctrl+K (search), Ctrl+N (new note), Ctrl+P (switcher), Ctrl+/ (slash), Ctrl+S (save), Ctrl+B/I (bold/italic), Ctrl+\ (sidebar), Ctrl+Shift+F (zen), Esc (close overlay). And shortcuts only fire when editor focused. And status bar shows hints.

### Story 3.8: Context Menus for List Items
As a user, I want right-click context menus on notebooks, sections, notes, so that I can quickly access actions.
**AC:** Given right-click on items, Then contextual menus appear. And destructive items at bottom in red. And Radix DropdownMenu (keyboard accessible). And shortcut hints inline.

### Story 3.9: Empty State Guidance
As a user, I want helpful guidance on every empty screen, so that I always know what to do next.
**AC:** Given empty notebook/section/search/favorites/trash/tag, Then contextual guidance with suggested action. And calm-friend voice (<12 words). And reusable EmptyState component.

---

## Epic 4: Public Playground & Marketing Site

Anonymous users can try the editor at /playground. SEO landing and pricing pages drive signups.

### Story 4.1: Public Markdown Playground
As an anonymous user, I want to paste/type markdown and see it rendered without an account, so that I can try the editor.
**AC:** Given /playground, Then full-screen editor, zero chrome. And placeholder + "Nothing is saved" notice. And interactive <2s on 4G. And fade-away + slash commands work. And Mermaid lazy-loaded. And zero Supabase calls. And shares TipTap component with authenticated app.

### Story 4.2: Playground Conversion CTA
As an anonymous user, I want a subtle sign-up prompt at the right moment, so that I can save my work if I choose.
**AC:** Given Ctrl+S or save attempt, Then soft CTA appears (non-modal). And subtle persistent banner: "Like this editor? Sign up." And dismiss has no penalty. And returning visitors get warmer copy. And PostHog tracks conversion clicks.

### Story 4.3: Playground Rate Limiting
As a platform operator, I want rate limiting by IP, so that bots cannot abuse the playground.
**AC:** Given >100 requests/hour from one IP, Then 429 response with Retry-After header. And Vercel edge-level enforcement. And page HTML always loads.

### Story 4.4: SEO-Optimized Landing Page
As a potential user, I want a compelling landing page optimized for search, so that I can find and understand the product.
**AC:** Given search for "simple markdown notebook", Then landing page has optimized title/meta/OG tags. And JSON-LD structured data. And sitemap.xml. And robots.txt excludes /app/*. And SSR for fast TTFB. And 90+ Lighthouse score.

### Story 4.5: Pricing Page
As a potential user, I want a clear tier comparison, so that I can decide whether to upgrade.
**AC:** Given /pricing, Then three columns: Free/Pro/Premium. And monthly↔annual toggle with savings. And feature checkmarks. And reassurance: "Cancel anytime — export anytime." And logged-in users see current plan highlighted. And no scarcity tactics.

---

## Epic 5: Knowledge Layer & History

Users can view timeline, change history, and use in-note bookmarks and floating outline.

### Story 5.1: Note Version History & Diff View
As a user, I want to see what changed in a note over time, so that I can track evolution and restore versions.
**AC:** Given note history opened, Then version list (newest first) with timestamp + word count delta. And diff view: green additions, red removals, yellow modifications. And "Restore this version" preserves current as new version. And migration creates note_versions table. And RLS on versions.

### Story 5.2: Activity Timeline View
As a user, I want a chronological timeline across all notebooks, so that I can review recent work.
**AC:** Given timeline view, Then chronological activity grouped by date. And filterable by tag, date range, search. And clickable entries open notes. And pagination (20 per page, load-more).

### Story 5.3: In-Note Floating Outline & Heading Navigation
As a user, I want an auto-generated outline from headings with jump navigation, so that I can navigate long notes.
**AC:** Given note with headings, Then collapsible outline panel (right side) listing headings. And clickable jump-to. And current position highlighted on scroll. And hidden in zen mode. And hidden if no headings.

### Story 5.4: Manual Line Bookmarks
As a user, I want to bookmark specific lines, so that I can mark and jump to content not under headings.
**AC:** Given gutter click, Then bookmark marker appears. And bookmark added to outline panel. And shows first ~40 chars as label. And clicking jumps to line. And click marker again removes. And persists across saves.

---

## Epic 6: Daily Journal System

Users access a dedicated Journal, write daily entries, browse calendar, and open today's entry instantly.

### Story 6.1: Dedicated Journal Space & Auto-Created Daily Entries
As a user, I want a Journal section where today's entry is always ready, so that I can write without navigating.
**AC:** Given Journal clicked, Then dedicated space loads. And today's entry auto-creates if absent (title: full date). And editor opens with cursor ready. And migration creates journal_entries table with RLS. And Journal appears in sidebar Quick Access.

### Story 6.2: Journal Calendar View
As a user, I want a monthly calendar showing which days I wrote, so that I can browse past entries visually.
**AC:** Given calendar view, Then monthly grid with dot indicators for entries. And today highlighted. And click day with entry opens it. And click day without entry creates one. And prev/next month arrows. And role="grid"/gridcell ARIA. And single query per visible month.

### Story 6.3: Quick Journal Button
As a user, I want a button that instantly opens today's journal from anywhere, so that capturing thoughts is one click.
**AC:** Given Quick Journal icon in top bar, Then click opens today's entry. And auto-creates if absent. And cursor at bottom of existing content. And always visible (never collapsed). And client-side navigation.

### Story 6.4: Journal Entry Tagging
As a user, I want tags on journal entries that work with the global tag system, so that journal thoughts are discoverable alongside notes.
**AC:** Given journal entry, Then same NoteTagInput works. And tagged journal entries appear in tag views alongside regular notes. And labeled as journal entries in results. And global search includes journal content.

---

## Epic 7: Templates & Productivity

Users apply built-in templates, create custom ones, and assign defaults to sections.

### Story 7.1: Built-In Starter Templates
As a user, I want 12 pre-built templates I can apply instantly, so that structured notes start fast.
**AC:** Given /template command, Then template picker lists all 12 built-in templates. And selecting populates note with structure. And variable tokens ({{date}}, {{notebook_name}}) auto-fill. And migration creates templates table. And built-in templates seeded.

### Story 7.2: Create Custom Templates
As a user, I want to create my own templates, so that I can standardize my workflows.
**AC:** Given template management, Then create from scratch with editor. And "Save as Template" from any note. And rename, edit, duplicate, delete custom templates. And deleting template doesn't affect existing notes.

### Story 7.3: Apply Templates via Slash Command
As a user, I want to apply any template through the slash menu, so that I can structure notes without leaving the editor.
**AC:** Given /template typed, Then searchable list (built-in + custom). And selected template inserts at cursor. And variables resolved. And confirmation if note has existing content.

### Story 7.4: Section Default Templates
As a user, I want sections to auto-apply a template to new notes, so that repetitive sections start pre-filled.
**AC:** Given right-click section → Set Default Template, Then template picker appears. And new notes in section auto-populate. And template icon on section. And "None" option to remove default. And sections table gets default_template_id column.

---

## Epic 8: Personalization, Settings & Polish

Users customize themes, fonts, dashboard, zen mode, shortcuts, and get guided onboarding.

### Story 8.1: User Settings Panel
As a user, I want a centralized settings panel with clear categories, so that I can adjust any preference.
**AC:** Given Settings navigated, Then tabbed layout: Editor, Appearance, Organization, Data, Shortcuts, Account, Security. And changes save immediately (no Save button). And toast confirms. And migration creates user_settings table with defaults.

### Story 8.2: Theme Customization & Accent Colors
As a user, I want to switch light/dark and choose accent colors, so that the app looks my way.
**AC:** Given Appearance settings, Then Light/Dark/System toggle with 200ms transition. And 12-color accent palette with ring highlight. And accent updates --primary everywhere. And sepia deferred to v1.1.

### Story 8.3: Editor Font & Line Height Settings
As a user, I want to adjust font size and line height, so that I can optimize readability.
**AC:** Given Editor settings, Then font size slider (12-24px, default 16). And line height slider (1.2-2.0, default 1.6). And live preview as I drag. And applies to editor only, not UI.

### Story 8.4: Focus / Zen Mode
As a user, I want to hide all chrome and focus on writing, so that I can enter flow state.
**AC:** Given Ctrl+Shift+F, Then sidebar/topbar/statusbar fade out (300ms). And editor card expands to full viewport. And Esc returns to normal. And "Saved ✓" still appears briefly. And prefers-reduced-motion: 0ms.

### Story 8.5: Customizable Keyboard Shortcuts
As a user, I want to customize shortcut bindings, so that I can use my muscle memory.
**AC:** Given Settings → Shortcuts, Then list of all shortcuts with current bindings. And edit mode: "Press new shortcut..." And conflict detection. And Reset to defaults. And saved as JSON in user_settings.

### Story 8.6: Session Timeout Configuration
As a user, I want to configure inactivity timeout duration, so that I can balance security and convenience.
**AC:** Given Settings → Security, Then 15/30/60 minute options. And change saves immediately. And useIdleTimer updates without reload.

### Story 8.7: Interactive Tutorial Notebook
As a new user, I want a tutorial notebook that teaches by doing, so that I learn without reading docs.
**AC:** Given first signup, Then "Welcome to Simpl" notebook auto-created with 5 sections. And progress indicator. And deletable. And not re-created. And seeded from seed.sql. And prominent on first dashboard.

### Story 8.8: Customizable Home Dashboard
As a user, I want a configurable dashboard with widgets, so that I see useful info on app open.
**AC:** Given dashboard, Then default widgets: Recent Notes, Favorites, Quick Access. And edit mode with drag/resize. And add/remove widgets. And layout saved to user_settings. And keyboard alternatives for drag. And mobile: single column stack.

### Story 8.9: "What's New" Announcements
As a returning user, I want to see new features since my last visit, so that I discover capabilities.
**AC:** Given 30+ days since last login, Then subtle "What's New" link in sidebar. And click opens brief feature list. And dismisses until next release. And daily users never see it.

---

## Epic 9: Monetization & Billing

Users subscribe, manage billing, experience graceful limits, and get a 14-day Premium trial.

### Story 9.1: Stripe Integration & Webhook Handler
As a developer, I want Stripe products/prices and webhook handler syncing to Supabase, so that billing backend is operational.
**AC:** Given Stripe configured, Then Free/Pro/Premium products with monthly+annual prices. And webhook verifies signature. And subscriptions table updated idempotently. And RLS on subscriptions. And failures logged to Sentry.

### Story 9.2: 14-Day Premium Trial on Signup
As a new user, I want automatic 14-day Premium trial without credit card, so that I experience the full product.
**AC:** Given first signup, Then subscription row: tier=premium, status=trialing, expires in 14 days. And subtle banner shows days remaining. And day 10 nudge with usage summary. And graceful downgrade to Free at expiry (no data deleted).

### Story 9.3: Free-Tier Limit Enforcement
As a free user, I want clear, non-punitive limit notifications, so that I understand my options.
**AC:** Given limit hit (3 notebooks / 50 notes / 500MB), Then non-blocking toast with "Learn More" link. And toast doesn't repeat until next attempt. And enforced on client + server. And no scarcity language.

### Story 9.4: Upgrade Flow via Stripe Checkout
As a free user, I want to upgrade with fast payment, so that I unlock features immediately.
**AC:** Given upgrade clicked, Then Stripe Checkout session created. And Apple Pay/Google Pay visible. And payment succeeds → webhook → Supabase subscription updated. And tier badge updates via Realtime (no reload). And welcome toast with feature list.

### Story 9.5: Subscription Management via Stripe Customer Portal
As a paying user, I want self-service billing management, so that I control my subscription.
**AC:** Given Settings → Manage Subscription, Then Stripe Customer Portal opens. And portal allows: update payment, switch monthly/annual, upgrade/downgrade, download invoices, cancel. And changes sync via webhook. And downgrade retains access until period end.

### Story 9.6: Prorated Billing on Plan Changes
As a paying user, I want fair billing adjustment on mid-cycle changes, so that I only pay for what I use.
**AC:** Given mid-cycle upgrade, Then Stripe calculates proration. And upgrade takes effect immediately. And downgrade retains higher tier until period end.

### Story 9.7: Failed Payment Handling
As a paying user with a failed payment, I want a fair grace period, so that I don't lose access.
**AC:** Given payment fails, Then Stripe retries 3x over 7 days. And email names actor + consequence + action. And all retries fail → downgrade to Free (data intact). And updated payment reactivates. And never uses "failed" as first word.

---

## Epic 10: Import, Export & Rich Content

Users import from other tools, export in multiple formats, and attach files.

### Story 10.1: File Attachments via Drag-and-Drop & Upload
As a user, I want to attach files to notes, so that notes are self-contained.
**AC:** Given drag/paste/upload/slash, Then file uploads to Supabase Storage. And images render inline. And non-images show styled card. And migration creates file_attachments table. And per-user quota enforced. And CDN delivery. And lazy-load images.

### Story 10.2: Import Markdown Files via Drag-and-Drop
As a user, I want to import .md files by dragging a folder, so that I can migrate without copy-paste.
**AC:** Given folder dragged to import zone, Then preview: folders→sections, files→notes. And target notebook selection. And YAML frontmatter tags extracted. And progress indicator. And summary toast.

### Story 10.3: Import from OneNote, Evernote & Notion
As a user switching apps, I want to import from OneNote/Evernote/Notion, so that I don't lose existing content.
**AC:** Given import dialog, Then Evernote (.enex), Notion (ZIP), OneNote (Microsoft Graph API) supported. And content converted to markdown. And tags preserved. And brief "how to export" guide per source.

### Story 10.4: Export Individual Notes
As a user, I want to export notes in my preferred format, so that I can share or use outside the app.
**AC:** Given export action, Then format picker: Markdown, PDF, Word, HTML, Plain Text, LaTeX, JSON. And each format renders appropriately. And Mermaid as images in PDF.

### Story 10.5: Export Entire Notebook as ZIP Bundle
As a user, I want to export a notebook as ZIP, so that I can back up or share a complete project.
**AC:** Given notebook export, Then ZIP with folder-per-section, file-per-note, metadata.json. And progress bar for large exports. And same mechanism for full-account export.

---

## Epic 11: Advanced Security & Account Management

Users enable 2FA, view login activity, manage sessions, receive device alerts.

### Story 11.1: Two-Factor Authentication via Email
As a user, I want 2FA via email code, so that my account is protected beyond OAuth.
**AC:** Given 2FA enabled, Then 6-digit code sent on login. And code expires 5 min, single-use. And "Trust this device 30 days" option. And 5 failed attempts → 15 min lock. And disable requires current code.

### Story 11.2: Login Activity Log
As a user, I want to see recent login history, so that I can detect unauthorized access.
**AC:** Given Settings → Security, Then list: date, device, location, status. And 90-day retention. And RLS on login_activity table.

### Story 11.3: Active Session Management
As a user, I want to see and revoke active sessions, so that I can protect lost/compromised devices.
**AC:** Given active sessions view, Then list with device, location, last active, "Current" label. And Revoke per session. And "Revoke All Others" bulk action.

### Story 11.4: Unfamiliar Device Login Alerts
As a user, I want email alerts for new device logins, so that I can respond to compromise quickly.
**AC:** Given new device login with alerts enabled, Then email: "New login from [device] in [location]." And known devices tracked by fingerprint + user agent. And alert toggle in Settings.

---

## Epic 12: AI Intelligence (Phase 3 — Premium)

Premium users get AI auto-tagging, duplicate detection, related notes, journal streaks.

### Story 12.1: Claude API Integration Foundation
As a developer, I want Claude API client with rate limiting and graceful degradation, so that AI features have a reliable foundation.
**AC:** Given Claude API configured, Then centralized lib/ai/client.ts. And graceful failure (no editor blocking). And tier-gated at Server Action level. And rate-limited per user. And API key never exposed to client.

### Story 12.2: AI-Powered Auto-Tagging
As a Premium user, I want AI-suggested tags on my notes, so that organization is automatic.
**AC:** Given note saved (>50 words), Then Claude suggests 2-5 tags. And ghost pills with Accept/Dismiss. And prefers existing tags. And retroactive batch processing available. And results cached.

### Story 12.3: Duplicate & Near-Duplicate Detection
As a Premium user, I want duplicate alerts, so that I can clean up redundant content.
**AC:** Given note saved (>100 words), Then background similarity check. And alert: "Similar note found: [title]." And options: View, Link, Merge, Dismiss. And merge shows side-by-side. And async, never blocks editor.

### Story 12.4: AI-Grouped Related Notes Panel
As a Premium user, I want AI-detected related notes in the side panel, so that I discover connections.
**AC:** Given note open with Related panel, Then "Same Tags" (all tiers) + "Similar Content" (Premium, Claude). And up to 5 related notes with title + snippet. And non-Premium sees upgrade prompt. And cached 1 hour.

### Story 12.5: Journal Streaks & Statistics
As a Premium user, I want journaling stats and streaks, so that I can track my habit.
**AC:** Given journal viewed, Then stats: current streak, longest, this month, total, avg length. And optional streak notification (gentle, positive-only). And toggle in Settings. And SQL-computed on load.

---

## Epic 13: Encryption & Wiki Links (Phase 3)

Users enable per-notebook E2E encryption. Users create wiki-style [[links]] and see backlinks.

### Story 13.1: Per-Notebook End-to-End Encryption
As a user, I want to encrypt sensitive notebooks client-side, so that the server never holds my plaintext.
**AC:** Given Enable Encryption, Then recovery key generated + displayed with clear warning. And must confirm "I saved my key." And lock icon on encrypted notebooks. And content encrypted/decrypted client-side (AES-256-GCM). And search operates on local decrypted content. And disable re-uploads as plaintext.

### Story 13.2: Encryption Recovery Key Management
As a user, I want to manage my recovery key, so that I understand my data security.
**AC:** Given Settings → Security → Encryption, Then list of encrypted notebooks. And "View Recovery Key" (requires re-auth). And "Regenerate" option. And lost key = data unrecoverable (stated plainly). And no backdoor.

### Story 13.3: Wiki-Style Note Linking
As a user, I want to type [[ to link notes together, so that I can build connections between ideas.
**AC:** Given typing [[, Then autocomplete dropdown of all notes. And filter by typing. And results show title + breadcrumb. And link stored by note ID (rename-safe). And clicking link opens note. And note_links junction table with RLS.

### Story 13.4: Inline Backlinks Section
As a user, I want to see which notes link to the current note, so that I can navigate both directions.
**AC:** Given note with incoming links, Then "Linked from" section at bottom lists source notes with title + breadcrumb. And hidden if no backlinks. And updates when links added/removed. And loads async. And clickable navigation.
