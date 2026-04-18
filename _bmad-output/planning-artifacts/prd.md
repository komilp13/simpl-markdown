---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02b-vision', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
workflow_completed: true
classification:
  projectType: 'Web App (SaaS)'
  domain: 'General / Productivity'
  complexity: 'Medium'
  projectContext: 'Greenfield'
inputDocuments: ['_bmad-output/brainstorming/brainstorming-session-2026-04-12-1940.md']
documentCounts:
  briefs: 0
  research: 0
  brainstorming: 1
  projectDocs: 0
  projectContext: 0
workflowType: 'prd'
---

# Product Requirements Document - simpl-markdown

**Author:** Komil
**Date:** 2026-04-12

## Executive Summary

Simpl Markdown is a cloud-based markdown notebook application that solves a fundamental problem: notes scattered across devices, tools, and formats. Users today juggle files on multiple machines, sync manually between cloud services, and fight rigid or overly complex editors just to write and organize their thoughts. Simpl Markdown eliminates this friction entirely — your notes live in the cloud, accessible from any device, always in sync, always ready.

The app targets individual users who want the power of markdown without the complexity of tools like Obsidian, the rigidity of OneNote, or the learning curve of Notion. It provides a hierarchical Notebook → Section → Note structure layered with multi-tag organization, global search, and a daily journal — all behind a clean, intuitive interface that anyone can pick up in minutes.

The product follows a freemium SaaS model with three tiers: Free (core features, 3 notebooks), Pro at $10/month (unlimited notebooks, encryption, templates, full export), and Premium at $20/month (AI-powered auto-tagging, duplicate detection, related notes, analytics). A 14-day Premium trial for every new signup drives conversion.

### What Makes This Special

**The editor is the differentiator.** Simpl Markdown features a fade-away markdown editor where syntax fades into rendered output as you type — no preview toggle, no split pane, no mode switching. You write and see the result simultaneously. This is the "aha moment" that separates the app from every competitor in the space.

**Search that actually works.** Global search indexes everything — note content, titles, tags, Mermaid diagram labels, code blocks — across all notebooks. Results show highlighted matches with breadcrumb context. Most note apps treat search as an afterthought; here it's a core navigation layer alongside hierarchy and tags.

**Simplicity is the product.** The note-taking market is full of powerful tools that are too complex and simple tools that are too limited. Simpl Markdown fills the gap — genuinely simple to start using, with real depth (Mermaid diagrams, LaTeX, syntax highlighting, templates, wiki-style linking) available when you need it. Simplicity isn't the absence of features — it's the absence of friction.

## Project Classification

- **Project Type:** Web App (SaaS) — browser-based application with responsive mobile support, real-time cloud sync, and subscription billing
- **Domain:** General / Productivity — note-taking and knowledge management with no regulatory or compliance requirements
- **Complexity:** Medium — core CRUD and rich text editing augmented by E2E encryption, offline sync, AI-powered intelligence, and a custom fade-away editor
- **Project Context:** Greenfield — entirely new product built from scratch on React + Next.js + Supabase + Vercel

The following sections translate this vision into measurable outcomes, phased scope, detailed user journeys, and a binding capability contract.

## Success Criteria

### User Success

- **First Note in Under 5 Minutes:** A new user completes sign-up, navigates the tutorial notebook, and creates their first note — experiencing the fade-away editor — within 5 minutes of landing on the app.
- **Cross-Device Sync Moment:** When a user logs in from a second device for the first time, all notebooks, sections, notes, and tags appear exactly as they left them. This is the "my problem is solved" moment.
- **Daily Active Engagement:** A retained user logs in multiple times daily, updating existing notes or creating new ones. Users who reach this pattern within their first week are considered activated.
- **Editor "Aha" Moment:** The user types markdown syntax, watches it fade into rendered output, and realizes they never need to toggle between edit and preview modes. This moment drives word-of-mouth.

### Business Success

- **3-Month Targets:**
  - 500 total registered users
  - 25-50 paid conversions (5-10% conversion rate)
  - Establish product-market fit signal: retained users logging in 3+ times per week
- **12-Month Targets:**
  - 1,000 total registered users
  - 60 paid conversions from free to paid
  - Advanced AI capabilities shipped (auto-tagging, duplicate detection, related notes)
  - Monthly recurring revenue growing month-over-month

### Technical Success

- **Performance:**
  - Initial app load under 2 seconds
  - Note switching under 500ms
  - All user actions (save, search, tag, navigate) respond within 500ms
- **Data Integrity:**
  - Zero data loss — auto-save captures all changes within 2-5 seconds of user input
  - Offline edits sync correctly on reconnection with conflict detection
- **Reliability:**
  - 99.9% uptime (less than 8.7 hours downtime per year)
  - Auto-save and sync resilient to intermittent connectivity

### Measurable Outcomes

| Metric | 3-Month Target | 12-Month Target |
|--------|---------------|-----------------|
| Total Users | 500 | 1,000 |
| Paid Conversions | 25-50 | 60 |
| Conversion Rate | 5-10% | ~6% |
| Daily Active Users | Track baseline | 20%+ of total |
| First Note < 5 min | 80%+ of new users | 90%+ of new users |
| App Load Time | < 2s | < 2s |
| Note Switch Time | < 500ms | < 500ms |
| Uptime | 99.9% | 99.9% |

## Product Scope

### MVP — Minimum Viable Product (Sprints 1-3, ~9 weeks)

The smallest product that proves the concept and delivers core value:

- **Authentication:** Social login (Google, Microsoft) via Supabase Auth
- **Core Hierarchy:** Notebook → Section → Note CRUD operations
- **The Editor:** Fade-away markdown editing with TipTap — the key differentiator
- **Slash Commands:** /table, /mermaid, /code, /image, callout banners (/success, /warning, /danger, /info)
- **Live Rendering:** Mermaid diagrams, syntax-highlighted code blocks, LaTeX math
- **Organization:** Multi-tag system, global search, favorites, pin to top
- **Data Safety:** Auto-save, trash bin with customizable retention, undo delete via toast
- **Visual Polish:** Light/dark themes, notebook color + icon picker, toast notifications, helpful empty states
- **Security:** 30-minute session timeout
- **Cloud Sync:** Notes stored in Supabase, accessible from any device

### Growth Features (Post-MVP, Sprints 4-7)

Features that make the product competitive and drive paid conversion:

- **Knowledge Layer:** Wiki-style note linking, inline backlinks, in-note bookmarks & floating outline
- **Timeline & History:** Timeline view, diff-aware change history
- **Journal System:** Dedicated daily journal space, calendar view, quick journal button
- **Templates:** Built-in starter templates (12), custom templates, section default templates
- **Personalization:** Custom accent colors, sepia mode, focus/zen mode, custom notebook covers with crop editor, customizable home dashboard
- **Settings & Import:** Full user settings panel, multi-source import (OneNote, Evernote, Notion, .md files)
- **Monetization:** Stripe integration, three-tier pricing, 14-day premium trial, annual billing
- **Security:** 2FA via email, login activity log & session management
- **Export:** Multi-format export (PDF, Word, HTML, EPUB, LaTeX, JSON, ZIP)
- **Mobile & Offline:** Responsive mobile experience, offline mode with auto-sync
- **Accessibility:** Adjustable font size & line height, full ARIA label coverage
- **Rich Content:** File attachments with cloud storage (images, PDFs, spreadsheets)

### Vision (Future)

Features that represent the long-term product ambition:

- **AI Intelligence (Premium):** Auto-tagging, duplicate/near-duplicate detection, related notes side panel, journal streaks & analytics
- **Per-Notebook E2E Encryption** with recovery key
- **Quick Capture** floating button
- **Native Mobile Apps** (iOS, Android) with push notifications, biometric login, widgets
- **Template Marketplace** for community-shared templates
- **Advanced Undo** — multi-step action history
- **API Access** for third-party integrations
- **Collaboration** features (sharing, co-editing) in future versions

## User Journeys

### Journey 1: Karen, The Note Taker (Core Experience)

**Persona — Karen, Executive Secretary**

Karen is an executive secretary at a mid-sized company. Her job is to be the memory of the office — logging meetings, tracking tasks, noting delegations, following up on commitments, and making sure nothing falls through the cracks. She juggles 8-10 meetings a day, phone calls, walk-in requests, and constant Slack messages from the executives she supports.

**Current Pain:** Karen takes notes everywhere — yellow legal pads during meetings, sticky notes on her monitor, a OneNote notebook that's become impossible to navigate, and a few Word docs on her desktop. She's constantly playing catch-up, transcribing handwritten notes at the end of the day. Her biggest frustration: she can't take notes fast enough during meetings. By the time she's formatted a bullet list in OneNote, the next agenda item has moved on.

**Trigger:** After a critical board meeting where she missed a delegation detail because she was still formatting the previous item, her boss asks "Did we decide who's leading the Q2 initiative?" and she has to admit she isn't sure. That night she googles "fastest note app for meetings."

**Journey Arc:**
- **Opening:** Karen finds Simpl Markdown via a blog post. Google signup in one click — no forms, no email verification wait.
- **Rising Action (First 5 Minutes):** The Welcome notebook opens. She types `**bold**` and watches asterisks fade as text becomes bold. Fade-away editor is her "aha moment." She discovers `/` commands, creates a Mermaid decision flow, writes her first real note in under 10 minutes.
- **Climax (Tuesday Board Meeting):** She types at full speed — bold names, bullet lists, `#delegation` and `#followup` tags inline. Notes are formatted, tagged, and searchable when the meeting ends. She emails minutes to the board 10 minutes later — unprecedented.
- **Resolution (Week 2):** Three notebooks — "Board Meetings," "Daily Tasks," "People" (section per executive). Cross-notebook tags. Hits `Ctrl+K`, finds "Q2 initiative lead" in under a second. Works from home laptop at night, everything synced. Yellow legal pad sits untouched.

**Journey Reveals Requirements For:** Frictionless social login, tutorial notebook that teaches by doing, fade-away markdown editor, slash commands at typing speed, multi-tag organization, global search (Ctrl+K), auto-save with visual confirmation, cross-device sync, hierarchical structure, Mermaid diagrams.

---

### Journey 2: Marcus, The Power User (Edge Case — Pushing the App's Limits)

**Persona — Marcus, Freelance Software Developer**

Marcus juggles 4-5 client projects simultaneously. He's been using Obsidian for two years but finds it too fiddly — plugin management, sync issues across his MacBook, Linux desktop, and Windows gaming PC. He lives in markdown, has opinions about keyboard shortcuts, and wants a tool that just works on every device without fighting him.

**Current Pain:** Hundreds of notes — project specs, code snippets, architecture diagrams, client meeting notes, bug trackers. Heavy wiki-linking user, needs reliable Mermaid diagrams. Obsidian's sync plugin is expensive and flaky.

**Journey Arc:**
- **Opening (Migration Day):** Google signup. Drags 347 `.md` files from Obsidian vault. Import preserves folder structure as Notebooks and Sections. YAML frontmatter tags extracted automatically.
- **Rising Action:** Binds muscle memory — `Ctrl+P` for note switcher, `Ctrl+K` for search. Notebook per client. Sections for "Specs," "Meetings," "Code Snippets," "Decisions." Uses `[[wiki links]]` to connect architectural decisions. Code blocks in TypeScript, Python, Bash with full syntax highlighting. Mermaid sequence diagrams rendering live.
- **Climax (Cross-Device Moment):** Friday evening on MacBook, mid-sentence. Saturday morning on Linux desktop, everything there — cursor position and all. Monday on Windows at coffee shop, reviews with client. No plugins, no sync delays, no conflicts.
- **Resolution:** Upgrades to Pro within trial. Custom keyboard shortcuts, custom templates for "New Client Project" and "Architecture Decision Record" as section defaults. Monthly project PDFs for clients. Tells two developer friends on Twitter.

**Journey Reveals Requirements For:** Multi-source import with folder preservation, YAML tag extraction, wiki-style linking with autocomplete, syntax highlighting (20+ languages), live Mermaid rendering, cross-device cloud sync with cursor state, customizable keyboard shortcuts, custom templates with section defaults, quick note switcher, PDF export, Pro tier conversion path.

---

### Journey 3: Priya, The New-to-Markdown User (Edge Case — Non-Technical Onboarding)

**Persona — Priya, College Student**

Priya is a sophomore studying biology. She takes notes in Google Docs and Apple Notes on her iPhone and MacBook. She's heard classmates talk about "markdown" and "knowledge management" but has never written a `#` heading in her life. She's smart but intimidated by anything technical-looking. She saw Simpl Markdown on TikTok — "it's dead simple, you don't need to know markdown."

**Current Pain:** Biology notes fragmented across 40+ Google Docs she can't search effectively. Loses time during exam prep. Apple Notes don't sync well with her Windows PC at the library.

**Journey Arc:**
- **Opening:** Google signup. Welcome notebook says "Don't worry — you don't need to know markdown. Just type." She relaxes.
- **Rising Action:** Types normal prose. Wants a list — sees hint "Type `/` for formatting options." No markdown syntax required. Uses `/success` green banner for "Key concept for exam!" Decorates notes without typing a single asterisk.
- **Climax (Week 2):** Notices she's been typing `**important**` because she saw it in a tutorial — it just worked. She learned markdown without realizing. Now uses `##` for headings because it's faster than the slash menu.
- **Resolution (Week 4):** "Biology 201" notebook with sections per week. Tags like `#exam-prep`, `#key-concept`. Hits Ctrl+K during finals, searches "mitochondria," finds every related note across 12 weeks. Aces midterm. Shows a classmate: "wait, isn't this for programmers?" Priya: "No, it's just notes. But better." Classmate signs up.

**Journey Reveals Requirements For:** Zero-markdown-knowledge entry path, discoverable slash menu, helpful empty states and hints, tutorial that doesn't assume technical background, progressive disclosure, visual feedback rewarding formatting, word-of-mouth friendly UX, plain-language search, responsive web across iPhone and Windows.

---

### Journey 4: Joey, The Admin/Ops User (Product Owner)

**Persona — Joey, Product Owner & Solo Operator**

Joey built Simpl Markdown and runs it solo — support tickets, monitoring uptime, watching Stripe subscriptions, responding to user emails. Wants to spend time building new features, not firefighting ops issues.

**Current Pain:** Without dedicated admin tools, Joey would drown in Supabase, Stripe, Vercel, and email inboxes. Needs a lightweight way to stay on top of platform health.

**Journey Arc:**
- **Opening (Monday 9 AM):** Three-dashboard check: Vercel (deploy green, 180ms avg response), Supabase (CPU 14%, auth up 8% WoW), Stripe (3 new Pro subs, 1 trial ending, 1 failed payment retry).
- **Support Request:** "I deleted my Work notebook, please help!" Joey checks account — notebook in Trash. Replies: "Good news — it's in your Trash. Click Trash in sidebar, click Restore. I'm here if you need help." Resolved in 3 minutes.
- **Climax (Quarterly Review):** Pulls metrics: 587 registered users (exceeded 500 target), 34 paid (5.8% conversion), 99.94% uptime, 2.3 sessions/user/day. Top features: slash commands, search, tags, Mermaid. Biggest churn driver: users who didn't create a second notebook in week one. Writes celebration blog post.
- **Resolution:** 30 min/day on ops, 7 hours on product. Supabase handles auth/storage/database. Stripe handles billing via customer portal. Email alerts for critical events only.

**Journey Reveals Requirements For:** Stripe Customer Portal, Stripe webhooks → Supabase subscription sync, Trash recovery, failed payment handling with retry/grace, observable infrastructure (Vercel logs, Supabase metrics, Stripe dashboard), user metrics tracking (signups, conversions, DAU, feature usage), email notification system, minimal custom admin UI — leverage existing dashboards.

---

### Journey 5: Sophia, The Returning User After Months Away

**Persona — Sophia, Graphic Designer**

Sophia signed up 4 months ago, wrote 15 notes, then got slammed with a client project and stopped using the app. Defaulted back to sticky notes and phone reminders. Now a new project starts tomorrow and she needs her "Design Inspiration" and "Client Preferences" notes.

**Journey Arc:**
- **Opening (Sunday 8 PM):** Opens laptop, sees bookmark, hesitates — "will my stuff still be there?" One-click Google re-auth after session timeout.
- **Rising Action — The Reunion:** Dashboard loads. Everything exactly as she left it. 15 notes, tags, even mid-sentence cursor position from 4 months ago. "Recent Notes" widget shows her last edits. Clicks into `#client-preferences` note about a restaurant brand — remembers immediately.
- **Onboarding-Free Re-Entry:** App doesn't force her through the tutorial. Fade-away editor still feels natural. Types a few notes for tomorrow.
- **Climax — Feature Discovery:** Subtle "What's New" link in sidebar. Clicks — brief summary of new starter templates, custom notebook covers, journal streaks. Not overwhelmed. Tries "Project Plan" template, feels a small dopamine hit.
- **Resolution:** Becomes daily user again. The re-engagement wasn't aggressive emails — it was that her work was there, untouched. Two weeks later upgrades to Pro for custom notebook covers.

**Journey Reveals Requirements For:** Data persistence with zero time-based deletion, graceful session re-auth without losing state, "Recent Notes" widget showing last activity, subtle opt-in "What's New" announcements, no forced re-onboarding for returning users, cursor position persistence, feature discovery that isn't aggressive or email-driven.

---

### Journey 6: Dmitri, The Free User Hitting Limits and Upgrading

**Persona — Dmitri, Startup Founder**

Dmitri runs a pre-seed startup. Signed up for Free 6 weeks ago (Karen recommended it at a coffee meetup). Loves the app — product planning, investor meeting notes, daily journaling. His 14-day Premium trial ended and he dropped gracefully to Free. Managing within limits but just barely.

**Current Pain:** 3 notebooks ("Product," "Investors," "Personal") at the max. Close to 50-note limit in "Product." Wants to create a fourth "Team Hiring" notebook but can't.

**Journey Arc:**
- **Opening — Hitting the Wall:** Tries to create new notebook. Friendly toast: "You've reached the 3-notebook limit. Upgrade to Pro for unlimited notebooks, 10GB storage, and more." No modal blocking workflow.
- **Rising Action — Pricing Page:** Clicks "Learn More." Three tiers side by side. Annual toggle: "$7/month billed annually — Save 30%." $84/year, less than his coffee subscription. Small details matter: "All your existing notes stay exactly where they are," "Cancel anytime — export your data anytime." No scarcity tactics.
- **Micro-Commitment:** Clicks "Upgrade to Pro — Annual." Stripe Checkout opens with Apple Pay. One tap, Face ID, done. Back in app in 30 seconds.
- **Climax — Instant Gratification:** App updates in real time. Badge switches from "Free" to "Pro." Limits lifted. Creates "Team Hiring" notebook. Applies deep green accent color (brand color). Enables encryption on "Investors" notebook. A welcome toast: "Welcome to Pro. Here's what you've unlocked."
- **Resolution:** Uses Pro naturally over next month — custom notebook covers, section default templates, sepia mode for late-night journaling, PDF export of pitch deck outline for co-founder. Emails support: "Any way to add due dates to notes?" Gets reply same day: "Not yet, on roadmap. I'll email when it ships." Feels heard.

**Journey Reveals Requirements For:** Graceful limit enforcement via non-blocking toasts, clear Free/Pro/Premium comparison page, monthly/annual billing toggle with savings highlighted, Stripe Checkout with Apple Pay/Google Pay, instant subscription activation via webhooks, real-time UI updates on tier change, welcome flow for new paying users, per-notebook encryption on Pro, PDF export on Pro, responsive human support channel.

---

### Journey 7: Marcus, The Curious Previewer (Acquisition Surface)

**Persona — Marcus, Developer**

Different Marcus — a developer writing a GitHub README for his open-source project. Has a chunk of markdown to preview but doesn't want to install anything or sign up for another account. Googles "markdown preview online." Simpl Markdown's playground ranks #3. Clicks.

**Journey Arc:**
- **Opening — Zero-Friction Entry:** Lands on `simpl-markdown.app/playground`. No login wall, no modal. Clean editor with placeholder: "Paste your markdown here — see it rendered as you type." Subtle note: "Nothing is saved. Your content stays in your browser."
- **Rising Action — The Preview Moment:** Pastes README markdown. Headings render, code blocks get syntax highlighting, Mermaid diagram renders as intended flowchart. Impressed — most previewers choke on Mermaid. Edits, preview updates instantly, copies back to his editor.
- **Soft CTA:** Subtle banner: "Like this editor? Create a free account to save your work across devices." Single "Sign Up" button. No modal interruptions, no popups, no countdown timers.
- **Climax — Conversion (Two Weeks Later):** Returns to playground three times for different READMEs. Third visit he thinks "if this had my notes saved, I'd use it daily." Clicks Sign Up.
- **Resolution:** Ports last markdown from playground into a new note. Free user. Creates notebook per open-source project. Within a month upgrades to Pro for unlimited notebooks and custom README templates.

**Journey Reveals Requirements For:** Public `/playground` route — no auth required, client-side-only rendering (no server storage), feature parity with logged-in editor, rate limiting by IP, clear "Nothing is saved" privacy messaging, subtle non-intrusive conversion CTA (no modals), shareable SEO-optimized URL, no export/sharing/history (intentionally minimal), clear boundary between playground (demo) and 14-day Premium trial.

---

### Journey Requirements Summary

The seven journeys collectively reveal the following capability areas:

**Onboarding & First Experience**
- Social login (Google, Microsoft) with one-click signup
- Tutorial notebook that teaches by doing
- Under-5-minute first-note experience
- Zero-markdown-required entry path via slash commands
- Helpful empty states and discoverable hints

**Core Editing Experience**
- Fade-away markdown editor (the "aha moment")
- Slash command menu for rich formatting without syntax knowledge
- Live Mermaid diagram rendering
- Syntax-highlighted code blocks (20+ languages)
- LaTeX math support
- Auto-save with visual indicator

**Organization & Discovery**
- Notebook → Section → Note hierarchy
- Multi-tag organization across notebooks
- Global search with Ctrl+K
- Wiki-style note linking
- Pin notes, favorites
- Quick note switcher (Ctrl+P)

**Cross-Device & Data Safety**
- Real-time cloud sync
- Cursor position persistence
- Session re-auth without state loss
- Trash bin with restore capability
- Data persistence across long absences

**Personalization & Advanced**
- Custom keyboard shortcuts
- Custom note templates with section defaults
- Custom accent colors, sepia mode, notebook covers
- Focus/zen mode
- Multi-format export
- Multi-source import with folder preservation

**Monetization & Conversion**
- Three-tier pricing with genuinely usable free tier
- Graceful limit enforcement (toasts, not modals)
- Clear pricing comparison with annual toggle
- Stripe Checkout with Apple Pay/Google Pay
- Instant tier activation via webhooks
- Per-notebook encryption on Pro

**Acquisition Surface**
- Public `/playground` route — no authentication required
- Client-side-only markdown rendering with full editor parity
- Rate limiting by IP
- Clear "Nothing is saved" privacy messaging
- Subtle conversion CTA (no modals)
- SEO-optimized landing for "markdown preview online"

**Operations & Support**
- Stripe customer portal for self-serve billing
- Stripe webhooks → Supabase for subscription sync
- Failed payment handling with retry + grace period
- Feature announcement system (subtle, opt-in)
- Responsive human support channel
- Observable infrastructure

## Innovation & Novel Patterns

This section expands on the differentiators introduced in the Executive Summary with competitive analysis, validation approach, and risk mitigation.

### Detected Innovation Areas

**1. Fade-Away Markdown Editing — A Novel Interaction Pattern**

The fade-away editor represents a genuine interaction innovation. Existing markdown editors fall into two established camps:

- **Raw text editors** (Obsidian, VS Code, StackEdit): Users see markdown syntax while typing. Rendered preview requires a separate pane, tab, or toggle. The editor and the output live in two different visual spaces.
- **WYSIWYG block editors** (Notion, Craft, Coda): Users never see markdown syntax. Rendering happens through a block-based UI. Users lose direct access to markdown.

Simpl Markdown's fade-away editor collapses these two paradigms into a single, unified view. Users type `**bold**` and watch the asterisks fade away as the text becomes bold — same character positions, same cursor, same view. Clicking on rendered output reveals the raw markdown for editing. This is a distinct third paradigm: **markdown-transparent editing.**

**Why it's novel:** No widely-used markdown editor performs this syntax-to-render transition inline within the same typing flow. Products like Typora come closest but require explicit mode switching or lack the progressive fade animation.

**2. Public Markdown Playground as Acquisition Surface**

Using the actual production editor — not a watered-down demo — as an unauthenticated top-of-funnel tool is a novel go-to-market pattern for a SaaS note app. Most competitors gate their editor entirely behind signup walls. The playground surfaces the product's #1 differentiator (the fade-away editor) to users who aren't ready to convert yet, then serves as a habit-forming re-entry point that drives eventual signup.

**Why it's novel:** The pattern borrows from developer tools (CodePen, JSFiddle, Compiler Explorer) but applies it to a consumer productivity context where it's virtually unused.

### Market Context & Competitive Landscape

**Direct Competitors and Their Editing Paradigms:**

| Product | Editor Paradigm | Gap Simpl Markdown Fills |
|---------|-----------------|--------------------------|
| Obsidian | Raw markdown + preview pane | Too bulky, plugin-heavy, requires mode switching |
| Notion | Pure WYSIWYG block editor | No raw markdown access, steep learning curve |
| OneNote | Rich text, no markdown | Rigid structure, no markdown support at all |
| Evernote | Rich text + basic markdown | Cluttered UX, weak search, no Mermaid |
| Bear | Markdown with inline rendering | Apple-only, no cross-platform sync, no Mermaid |
| Typora | Inline rendered markdown | Desktop-only, no cloud sync, no collaboration-ready foundation |
| StackEdit | Raw markdown + preview | Developer-focused, no polish for general users |

**The Gap:** No competitor offers fade-away markdown editing combined with cloud-native sync, Mermaid/LaTeX rendering, hybrid hierarchy+tags organization, and a public playground for unauthenticated trial. Simpl Markdown sits in the uncontested middle of the market.

**Acquisition Tool Landscape:** CodePen and JSFiddle demonstrate the playground model works for developer tools. No equivalent exists for consumer note-taking apps — a novel application of a proven pattern.

### Validation Approach

**Validating Fade-Away Editor:**

- **User testing during MVP (Sprint 2):** Recruit 10 users across skill levels (markdown native, casual user, markdown-new) and measure time-to-first-formatted-note. Target: under 3 minutes for markdown-new users to produce a formatted note without instruction.
- **Success metric:** 80%+ of new users produce at least one heading, list, and bold/italic formatting in their first session without consulting documentation.
- **Qualitative signal:** Listen for unprompted references to the editor in support emails, social media, and reviews. If users mention "the editor" specifically as why they love the app, validation is strong.

**Validating Playground as Acquisition Surface:**

- **Baseline traffic measurement:** Launch `/playground` with SEO optimization for "markdown preview online," "mermaid diagram preview," "latex preview." Track monthly organic visits.
- **Conversion funnel tracking:** Measure playground-visitor → signup rate over 90 days post-launch. Target: 3-5% conversion from playground to account creation.
- **Quality signal:** Measure retention of playground-acquired users vs. direct-signup users. If playground users show comparable or better 30-day retention, the acquisition channel is working.

### Risk Mitigation

**Risk: Fade-Away Editor Feels Jarring or Unpredictable**

Some users may find syntax disappearing unsettling — they want to see what they typed.

- **Settings toggle:** "Show markdown syntax permanently" option for users who prefer raw view.
- **Click-to-edit interaction:** Clicking on any rendered element reveals the raw markdown at the cursor. Preserves user control even in faded view.
- **Fallback:** If user testing reveals significant friction, reduce transition animation aggressiveness or extend the visible-syntax window.

**Risk: Playground Attracts Abuse or Doesn't Convert**

Public unauthenticated tools can attract scrapers or produce unqualified top-of-funnel traffic.

- **Rate limiting by IP** (e.g., 100 requests/hour) prevents abuse.
- **Client-side-only rendering** means no server cost scales with playground usage.
- **No persistence** eliminates storage abuse vectors.
- **If conversion rate underperforms:** Iterate on CTA copy and placement, A/B test playground UX variations, consider progressive feature-gating.

**Risk: Competitors Copy the Fade-Away Editor**

The editor innovation is implementation-visible and could be replicated by well-funded competitors.

- **Execution moat:** Building fade-away editing well requires deep investment in TipTap/ProseMirror customization. Surface-level copies will feel janky.
- **Adjacent innovation moat:** Speed advantage (early product-market fit, playground acquisition, focused simplicity) lets us build other differentiators before competitors catch up.
- **Brand moat:** "Simpl Markdown" becomes synonymous with the editing experience. First-mover brand association is durable.

## Web App Specific Requirements

### Project-Type Overview

Simpl Markdown is a cloud-native web application built as a hybrid Next.js app: server-side rendered marketing surfaces (landing, pricing, playground, blog) paired with a client-side SPA for the authenticated user experience (editor, notebooks, dashboard, settings). The architecture optimizes for search-engine discoverability on public pages and fluid in-app interactivity on authenticated routes.

### Technical Architecture Considerations

**Application Structure:**

- **Framework:** Next.js 14+ with App Router and React 18+ with TypeScript
- **Rendering Strategy:**
  - Public routes (`/`, `/pricing`, `/playground`, `/blog/*`) — Server-side rendering (SSR) with static generation where possible for fastest TTFB
  - Authenticated routes (`/app/*`) — Client-side SPA with route-level code splitting
  - API routes — Next.js API routes proxying to Supabase where needed
- **Hosting:** Vercel edge network for frontend and API routes; Supabase Cloud for backend services
- **Styling:** Tailwind CSS with CSS variables for theme support (light, dark, sepia, custom accent colors)
- **Editor:** TipTap (ProseMirror-based) with custom extensions for fade-away markdown rendering, slash commands, Mermaid rendering, LaTeX rendering, and syntax-highlighted code blocks

### Browser Support Matrix

| Browser | Supported Versions | Rationale |
|---------|-------------------|-----------|
| Chrome | Last 2 major versions | Dominant desktop/Android share |
| Safari | Last 2 major versions | Primary iOS/macOS browser |
| Firefox | Last 2 major versions | Privacy-conscious user segment |
| Edge | Last 2 major versions | Enterprise and Windows default |
| Internet Explorer | Not supported | Deprecated by Microsoft; modern JS features required by TipTap/ProseMirror |
| Opera/Brave/Vivaldi | Best effort (Chromium-based) | Inherited Chrome compatibility |

**Polyfills:** None required — targeting evergreen browsers keeps bundle sizes minimal and performance predictable.

### Responsive Design

**Breakpoints:**

- **Mobile:** 320px – 767px — Sidebar collapses to hamburger drawer, editor full-width, Quick Capture as floating action button
- **Tablet:** 768px – 1023px — Sidebar collapsible, editor adapts, supports both touch and pointer input
- **Desktop:** 1024px+ — Three-pane layout available (sidebar, note list, editor)

**Touch vs. Pointer:**

- All interactive elements meet 44×44px minimum touch target on mobile/tablet
- Hover states degrade gracefully on touch devices (no "stuck hover")
- Slash command menu works with tap-to-open on touch devices
- Fade-away editor works identically across input modes

**Mobile-Specific Considerations:**

- Editor avoids on-screen keyboard fighting
- Scroll performance tuned for long notes — virtualization for note lists over 100 items
- Offline capability reads from service worker cache when connectivity is unavailable

### Performance Targets

Quantitative performance targets (including Core Web Vitals, note switch time, bundle size, etc.) are defined authoritatively in **NFR-P1 through NFR-P12** in the Non-Functional Requirements section. Below are the web-specific optimization strategies to achieve those targets.

**Optimization Strategies:**

- Route-based code splitting via Next.js App Router
- Image optimization via Next.js `<Image>` component + Vercel's image CDN
- Font subsetting and `font-display: swap`
- TipTap extensions lazy-loaded where possible (e.g., Mermaid renderer only loads when a Mermaid block is present)
- CDN caching for static assets with long TTLs

### SEO Strategy

**SEO-Critical Pages (indexed, optimized):**

- **`/` (Landing)** — Primary keywords: "simple markdown notebook," "cloud markdown editor," "notes app with mermaid"
- **`/pricing`** — Primary keywords: "markdown note app pricing," "notion alternative pricing"
- **`/playground`** — Primary keywords: "markdown preview online," "mermaid diagram preview," "latex preview online"
- **`/blog/*`** — Long-tail content marketing around note-taking, markdown, productivity

**SEO Techniques:**

- Next.js metadata API for per-page `<title>`, `<meta>`, Open Graph, Twitter Card tags
- Structured data (JSON-LD) for SoftwareApplication schema on the landing page
- Canonical URLs on all public pages
- Sitemap.xml auto-generated from routes
- Robots.txt excludes `/app/*`, `/api/*`, and `/auth/*`
- Fast TTFB via SSR + Vercel edge caching

**Authenticated Routes:**

- All `/app/*` routes include `<meta name="robots" content="noindex, nofollow">` since they contain user data

### Accessibility Level

**Target Standard:** WCAG 2.1 Level AA compliance across all surfaces — marketing, authenticated app, and playground.

**Accessibility Requirements:**

- **Keyboard navigation** — All interactive elements reachable via Tab, activated via Enter/Space. No keyboard traps. Logical tab order. Skip-to-main-content links on all pages.
- **Screen reader support** — Full ARIA label coverage (Feature #42). Tested with NVDA (Windows), VoiceOver (macOS/iOS), TalkBack (Android).
- **Visible focus indicators** — Clear, high-contrast focus rings on all interactive elements. Never rely solely on color for state.
- **Color contrast** — All text meets 4.5:1 contrast ratio for normal text, 3:1 for large text across all themes. Theme builder validates contrast on color selection.
- **Resizable text** — Text scales to 200% without loss of functionality. Font size and line height are user-configurable (Feature #41).
- **ARIA patterns:**
  - Editor: proper textarea semantics with ARIA live regions for auto-save status
  - Sidebar tree: ARIA tree/treeitem roles with expand/collapse state
  - Slash command menu: combobox pattern with `aria-activedescendant`
  - Modals: focus trap + `aria-modal`
  - Toasts: `role="status"` or `role="alert"` based on severity
  - Mermaid diagrams: alt text description generated from diagram content

**Accessibility Testing:**

- Automated: axe-core integrated into CI via Playwright/Vitest
- Manual: Monthly screen-reader walkthroughs of core flows
- User testing: At least 1 accessibility-focused user test before v1 launch

### Real-Time Requirements

**Supabase Realtime Use Cases:**

- **Auto-save confirmation** — Debounced 2-second write, then Realtime confirms cross-device propagation
- **Cross-device sync** — User edits on Device A; Device B (same account, same note open) receives the update via Supabase Realtime subscription on note row changes
- **Subscription status updates** — Stripe webhook updates Supabase `subscriptions` table; connected client sessions receive tier change via Realtime (instant UI unlock on upgrade)
- **Collaboration NOT in scope for v1** — Per Decision #1 (solo-focused), no multi-user co-editing or presence indicators

**Latency Expectations:**

- Same-device auto-save echo: < 2 seconds
- Cross-device sync propagation: < 5 seconds under normal network conditions
- Tier change propagation after payment: < 10 seconds from Stripe webhook to UI update

**Graceful Degradation:**

- If WebSocket connection to Supabase Realtime is lost, fallback to periodic polling every 30 seconds
- Offline mode uses local cache; conflict resolution applied on reconnect

### Implementation Considerations

**State Management:**

- Server state: TanStack Query (React Query) for data fetching, caching, and optimistic updates
- Client state: Zustand or React Context for UI state (theme, sidebar collapsed, active notebook)
- Form state: React Hook Form for settings and multi-step flows (signup, pricing, import)

**Authentication Flow:**

- Supabase Auth with OAuth providers (Google, Microsoft)
- Session stored as HttpOnly cookie for CSRF protection
- Protected routes gated by middleware at the Next.js layer
- 30-minute inactivity timeout with client-side timer + server-side token expiry (Feature #38)

**Security Baseline:**

- Content Security Policy (CSP) headers excluding `unsafe-inline` scripts
- HTTPS enforced everywhere (HSTS)
- Row-Level Security (RLS) policies in Supabase PostgreSQL ensure users can only access their own data
- CSRF tokens on state-changing API operations
- Input sanitization for user-generated content (note bodies are markdown, rendered via secure markdown parser with HTML sanitization)

**Error Handling & Observability:**

- Error boundary at route level prevents full-app crashes
- Sentry (or similar) for error tracking with user-scoped context
- Vercel Analytics for Core Web Vitals tracking
- Supabase logs for backend errors
- PostHog (or similar) for product analytics — signup conversion, feature usage, funnel drop-off

**Deployment & CI/CD:**

- Main branch auto-deploys to production on Vercel
- Pull request previews via Vercel preview deployments
- GitHub Actions for CI: type-checking, linting, unit tests, e2e smoke tests
- Database migrations versioned and applied via Supabase CLI

**Browser Storage Strategy:**

- LocalStorage: theme preference, sidebar state, editor preferences (non-sensitive)
- SessionStorage: temporary draft state for crash recovery
- IndexedDB: offline note cache for Feature #13
- No sensitive data (tokens, content) in client storage — relies on HttpOnly cookies for auth

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach: Experience-First MVP**

Simpl Markdown's MVP is not a "minimum feature set" — it's a **minimum complete experience.** The core value proposition is that the app *feels magical to use*. Shipping a half-baked fade-away editor, a weak search, or a slow cloud sync would undermine the entire brand promise of "simplicity that just works." Therefore the MVP includes fewer features, but every included feature must be **polished, fast, and reliable.**

**Guiding MVP Principles:**

- **Fewer features, deeper polish** — A user must say "this feels great" on first use, not "this looks promising."
- **Validate the differentiator early** — The fade-away editor must ship in the MVP because it's the whole reason this product exists.
- **Ship the acquisition surface with the product** — `/playground` ships alongside MVP to start SEO indexing and drive top-of-funnel traffic from day one.
- **Free tier usable, Pro tier deferred** — MVP launches with Free-tier features only. Stripe and paid conversion come in Phase 2 once we validate product-market fit.

**Resource Requirements:**

- Team: Solo developer (Joey)
- Timeline: ~9 weeks to MVP (Sprints 1-3)
- Infrastructure budget: Supabase free tier + Vercel hobby tier during MVP → paid tiers at first signs of traction

### MVP Feature Set (Phase 1 — Sprints 1-3, ~9 weeks)

**Core User Journeys Supported in MVP:**

- ✅ Journey 1 (Karen — Core note-taker) — Full support
- ✅ Journey 3 (Priya — New to markdown) — Full support
- ✅ Journey 7 (Marcus — Playground previewer) — Full support
- ⚠️ Journey 2 (Marcus the developer — Power user) — Partial (no import yet, no custom templates)
- ⚠️ Journey 5 (Sophia — Returning user) — Partial (basic dashboard only, no "What's New" yet)
- ❌ Journey 4 (Joey — Ops) — Uses external dashboards only, no custom admin tooling needed
- ❌ Journey 6 (Dmitri — Upgrade flow) — Not supported in MVP (no paid tier yet)

**Must-Have MVP Capabilities:**

**Foundation:**
- Supabase setup with schema, Row-Level Security, auth (Google + Microsoft)
- Notebook → Section → Note hierarchy with CRUD operations
- Auto-timestamped notes
- Smart auto-save with visual indicator
- 30-minute session timeout

**The Editor:**
- TipTap + custom extensions implementing fade-away markdown rendering — MVP scope limited to four syntax types: bold, italic, headings (H1-H3), and links. Code blocks, tables, lists, and other block-level fade-away behaviors deferred to v1.1 to protect MVP timeline.
- Slash command menu: `/table`, `/mermaid`, `/code`, `/image`, `/h1-h3`, `/success`, `/warning`, `/danger`, `/info`, `/bold`, `/italic`, `/quote`
- Live Mermaid diagram rendering
- Syntax-highlighted code blocks (20+ languages)
- LaTeX math equation rendering

**Organization:**
- Multi-tag note organization
- Global search (PostgreSQL full-text) with breadcrumb context
- Favorites/star notes
- Pin notes to top of section
- Notebook color + icon picker

**Data Safety:**
- Trash bin with 30-day default retention
- Undo delete via toast

**UX Polish:**
- Toast notifications
- Helpful empty states
- Light + dark themes (sepia deferred to v1.1 — triples the theme library matrix, cost/value poor for MVP)
- Keyboard shortcuts (Ctrl+K, Ctrl+N, Ctrl+P, Ctrl+/)
- Full ARIA labels (WCAG 2.1 AA baseline)

**Acquisition Surface:**
- Public `/playground` route with fade-away editor and Mermaid rendering. LaTeX and syntax-highlighting deferred to v1.1 to control bundle size (full parity alone would exceed 7MB eager-loaded). Client-side-only, "nothing is saved" messaging, subtle sign-up CTA.
- Landing page (`/`) with SEO optimization
- Responsive design

### Post-MVP Features

**Phase 2: Monetization & Growth (Sprints 4-6, ~9 weeks)**

- Stripe integration, three-tier pricing, 14-day trial, graceful limit enforcement
- Knowledge Layer: bookmarks & outline, timeline view, diff-aware change history
- Templates: 12 built-in starter templates, custom templates, section default templates
- Journal: dedicated space, calendar view, quick journal button
- Personalization: sepia mode, custom accent colors, focus/zen mode, customizable home dashboard, custom notebook cover images with crop editor

**Phase 3: Premium Intelligence & Expansion (Sprints 7-8, ~6 weeks)**

- Knowledge graph features: wiki-style note linking (FR32), inline backlinks (FR33) — moved from Phase 2 to prevent scope creep into second-brain territory during monetization phase
- AI Intelligence (Premium): auto-tagging, duplicate detection, related notes panel, journal streaks/stats
- Security: per-notebook E2E encryption, 2FA via email, login activity log
- Import: multi-source (OneNote, Evernote, Notion, .md files)
- Export: multi-format (PDF, Word, HTML, EPUB, LaTeX, JSON, ZIP)
- File attachments with cloud storage
- Offline mode with auto-sync
- Adjustable font size & line height
- Interactive tutorial notebook
- Quick Capture floating button
- Full User Settings Panel

**Phase 4+ (Vision — Deferred):**

- Native mobile apps (iOS, Android)
- Template marketplace
- Advanced multi-step undo
- API access for integrations
- Real-time collaboration (sharing, co-editing)
- Audio recording in notes

### Risk Mitigation Strategy

**Technical Risks:**

| Risk | Mitigation |
|------|-----------|
| Fade-away editor harder to build than estimated | Build a 2-week spike/prototype before committing to full MVP timeline. Fallback: Typora-style inline rendering. |
| Supabase Realtime scaling issues | Start with polling + optimistic UI; layer in Realtime incrementally. |
| Cross-device sync conflicts | MVP uses "last write wins" with `updated_at`. CRDT-style resolution is Phase 3. |
| Performance targets missed on low-end devices | Test on Lighthouse 4G Moto G4 profile from day one, not right before launch. |

**Market Risks:**

| Risk | Mitigation |
|------|-----------|
| Users don't "get" the fade-away editor | Playground is primary validation tool. Iterate onboarding if playground conversion underperforms after 30 days. |
| Simplicity positioning doesn't differentiate | Track unprompted mentions of "simplicity" and "the editor" in feedback. Re-examine messaging if not resonating. |
| Competitors ship similar editor | Speed is the moat — ship in 9 weeks, build engaged user community before they react. |
| Conversion rate below 5% | Phase 2 tests this. Experiment with trial length, feature gating, pricing before changing model. |

**Resource Risks:**

| Risk | Mitigation |
|------|-----------|
| Solo developer timeline slips | If slipping, defer Phase 2 features, not MVP polish. Polished-late beats unpolished-on-time. |
| Supabase free tier outgrown | Weekly usage monitoring. Pro-tier billing ready before limits. Cost at first revenue: ~$25/month. |
| Support volume exceeds capacity | Email-only support initially. FAQ/docs page by Phase 2. Live chat deferred to Phase 3. |
| Developer burnout | Enforce 9-week MVP timeline. Resist scope creep. Ship and rest between phases. |

The following functional requirements are the binding capability contract — any capability not listed below will not exist in v1 unless explicitly added later.

## Functional Requirements

### FR-A: Account Management & Authentication

- **FR1:** Users can create an account using social login via Google or Microsoft without filling out forms.
- **FR2:** Users can log in and log out from any device.
- **FR3:** The system automatically sign users out after 30 minutes of inactivity and redirect them to the login page.
- **FR4:** Users can configure the session timeout duration (15, 30, or 60 minutes) in their settings.
- **FR5:** Users can enable two-factor authentication via email with a "trust this device for 30 days" option.
- **FR6:** Users can view their login activity log (date, time, device, location) in security settings.
- **FR7:** Users can view and revoke active sessions on other devices.
- **FR8:** Users can receive email notifications for logins from unfamiliar devices (optional, toggleable).

### FR-B: Content Organization

- **FR9:** Users can create, rename, and delete notebooks.
- **FR10:** Users can assign each notebook a color and an icon from a curated library.
- **FR11:** Users can create, rename, and delete sections within a notebook.
- **FR12:** Users can create, rename, and delete notes within a section.
- **FR13:** Users can move notes between sections and notebooks.
- **FR14:** Users can apply multiple tags to any note.
- **FR15:** Users can view all notes associated with a specific tag across all notebooks.
- **FR16:** Users can pin individual notes to the top of their section.
- **FR17:** Users can mark notes as favorites and see them in a dedicated Favorites view.

### FR-C: Note Editing & Rich Content

- **FR18:** Users can write note content using markdown syntax that automatically renders inline (fade-away editor).
- **FR19:** Users can click on any rendered element to reveal and edit the underlying raw markdown.
- **FR20:** Users can insert formatting, structural elements, and rich content blocks via a `/` slash command menu.
- **FR21:** The slash command menu must include: tables, code blocks, images, horizontal dividers, text formatting (bold, italic, strikethrough, highlight, quote), headings (H1-H3), lists (bullet, numbered, toggle, checklist), Mermaid diagrams, LaTeX math blocks, and colored callout banners (success/green, warning/yellow, danger/red, info/blue).
- **FR22:** Users can insert Mermaid diagram code blocks that render the diagram in real time as they type.
- **FR23:** Users can insert code blocks with language-aware syntax highlighting, a language selector, a copy button, line numbers toggle, and word wrap toggle.
- **FR24:** Users can insert LaTeX math equations both inline (`$...$`) and as blocks (`$$...$$`) with live rendering.
- **FR25:** The system automatically track and display the creation date and last modified date of every note.
- **FR26:** Users can attach files (images, PDFs, spreadsheets, documents) to notes via drag-and-drop, clipboard paste, upload button, or `/attach` slash command.
- **FR27:** The system can render image thumbnails inline and display non-image attachments as styled cards with file metadata and download action.
- **FR28:** Users can generate an in-note outline/table of contents from headings and jump to specific sections.
- **FR29:** Users can bookmark individual lines or paragraphs within a note and jump to them via the outline panel.

### FR-D: Content Discovery & Connection

- **FR30:** Users can search across all notebooks, sections, and notes — including note content, titles, tags, Mermaid labels, and code blocks — from a global search interface.
- **FR31:** The system can display search results with highlighted matches and the notebook/section breadcrumb for each result.
- **FR32:** Users can create wiki-style internal links between notes by typing `[[` to trigger an autocomplete note picker.
- **FR33:** The system automatically display a "Linked from" backlinks section on every note listing all notes that reference it via wiki links.
- **FR34:** Users can view a "Related Notes" side panel showing notes grouped by explicit links, shared tags, and AI-detected content similarity.
- **FR35:** Users can view a chronological Timeline of their activity across all notebooks, filterable by tag, date range, or search term.
- **FR36:** The system can display change history for any note showing additions, removals, and modifications over time (diff-aware).
- **FR37:** The system can detect and alert users to duplicate or near-duplicate notes, offering options to merge, link, or keep both.

### FR-E: Data Safety & Persistence

- **FR38:** The system automatically save note changes within 2 seconds of user inactivity and display a "Saving..." → "Saved" status indicator.
- **FR39:** The system can save changes periodically (every 30 seconds) during active typing as a crash-recovery safety net.
- **FR40:** Users can manually force a save with `Ctrl+S`.
- **FR41:** When a user deletes a note, the system can move it to a Trash bin and display a toast notification with an "Undo" action that restores the note immediately.
- **FR42:** Users can view the Trash bin, preview trashed notes, and restore them to their original location.
- **FR43:** Users can configure the Trash retention duration in settings (7 days, 30 days, 90 days, or never auto-delete).
- **FR44:** The system automatically delete notes from Trash after the user's configured retention period.
- **FR45:** The system syncs user data across devices via last-write-wins with debounced autosave. When a user saves on Device A, Device B (with the same note open) reflects the change within ~1 second via Supabase Realtime notification + refetch. This is not co-editing or CRDT-based sync — conflicts are resolved by `updated_at` timestamp.
- **FR46:** The system can preserve the user's cursor position within a note across sessions and devices.

### FR-F: Daily Journal

- **FR47:** Users can access a dedicated top-level Journal space separate from notebooks.
- **FR48:** The system automatically create a new journal entry for today's date when the user opens the journal and no entry exists yet.
- **FR49:** Users can view their journal entries in a monthly calendar grid with days containing entries highlighted.
- **FR50:** Users can navigate to any specific date in the calendar to read or edit that entry.
- **FR51:** Users can open today's journal entry instantly via a dedicated Quick Journal button available from anywhere in the app.
- **FR52:** Users can apply tags to journal entries that integrate with the global tag system.
- **FR53:** The system can display journal statistics (current streak, longest streak, this month count, total entries, average length).
- **FR54:** Users can enable or disable journal streak notifications in settings.

### FR-G: Templates

- **FR55:** Users can apply a note template to any note via the `/template` slash command.
- **FR56:** The system can provide a library of built-in starter templates including Meeting Notes, Project Plan, Weekly Review, Decision Log, Bug Report, Pros & Cons, Research Notes, 1-on-1 Meeting, Brainstorming, Daily Standup, Feature Spec, and Travel Plan.
- **FR57:** Users can create custom note templates from scratch or by saving an existing note as a template.
- **FR58:** Users can assign a default template to any section so new notes in that section auto-apply the template.
- **FR59:** Templates can include variable tokens (like `{{date}}`, `{{notebook_name}}`) that auto-fill on creation.

### FR-H: Personalization & Appearance

- **FR60:** Users can switch between light, dark, and sepia theme modes.
- **FR61:** Users can customize accent colors (primary button, sidebar tint, link color, highlight color).
- **FR62:** Users can upload a custom cover image for any notebook and resize/reposition it using an in-app crop editor before saving.
- **FR63:** Users can enter a focus/zen mode that hides the sidebar, toolbar, and all chrome, leaving only the note canvas.
- **FR64:** Users can customize the home dashboard by adding, removing, resizing, and rearranging widgets (recent notes, favorites, activity, quick access notebooks, tag cloud).
- **FR65:** Users can adjust editor font size (12-24px) and line height (1.2-2.0) with live preview.
- **FR66:** Users can configure separate appearance settings for editor text versus UI text.

### FR-I: Keyboard & Power User Controls

- **FR67:** Users can invoke global search with `Ctrl+K`.
- **FR68:** Users can create a new note with `Ctrl+N`.
- **FR69:** Users can switch between notes quickly with `Ctrl+P`.
- **FR70:** Users can open the slash command menu with `Ctrl+/`.
- **FR71:** Users can access all common actions via keyboard shortcuts without requiring a mouse.
- **FR72:** Users can customize keyboard shortcut bindings in settings.

### FR-J: Security & Privacy

- **FR73:** Users can enable per-notebook end-to-end encryption, encrypting content client-side before upload.
- **FR74:** When enabling encryption, the system can generate a recovery key that the user must save before encryption activates.
- **FR75:** The system can display a lock icon on encrypted notebooks.
- **FR76:** The system can enforce row-level security so users can only access their own data.

### FR-K: Import & Export

- **FR77:** Users can import existing notes from markdown files via drag-and-drop folder upload.
- **FR78:** Users can import notes from OneNote, Evernote (`.enex`), and Notion (exported ZIP).
- **FR79:** The system automatically suggest notebook and section mapping during import and extract tags from YAML frontmatter.
- **FR80:** Users can export individual notes or entire notebooks in Markdown, PDF, Word, HTML, Plain Text, EPUB, LaTeX, or JSON format.
- **FR81:** Users can export an entire notebook as a ZIP bundle containing files in the chosen format.

### FR-L: Onboarding & Guidance

- **FR82:** The system automatically create a "Welcome" tutorial notebook for every new user on first sign-up.
- **FR83:** The tutorial notebook can contain hands-on lessons for: Your First Note, Try Slash Commands, Add a Mermaid Diagram, Organize with Tags, Explore Features.
- **FR84:** The tutorial notebook can display a progress indicator showing completed lessons.
- **FR85:** Users can delete the tutorial notebook at any time.
- **FR86:** The system can display contextual empty-state guidance on every empty surface (empty notebook, section, search results, favorites, trash, journal day, tag view).
- **FR87:** The system can display a subtle "What's New" announcement for returning users after long absences.

### FR-M: Notifications & Feedback

- **FR88:** The system can display toast notifications for key actions (note saved, moved to trash, tag added, export complete, template applied, note pinned, payment success/failure).
- **FR89:** Toast notifications can include contextual actions (e.g., "Undo" after delete).
- **FR90:** Toasts must not block user workflow — they auto-dismiss after 3-4 seconds and stack up to 3 visible.

### FR-N: Monetization & Subscription

- **FR91:** The system can offer three subscription tiers: Free, Pro, and Premium, with defined feature gates for each.
- **FR92:** The system can offer monthly and annual billing options with a clear savings toggle.
- **FR93:** Every new signup can receive a 14-day free trial of Premium features without requiring credit card upfront.
- **FR94:** The system can display a summary of Premium usage at trial end to inform conversion decisions.
- **FR95:** The system can gracefully downgrade trial users to Free tier when trial ends without deleting any data.
- **FR96:** Users can upgrade, downgrade, or cancel their subscription at any time through a self-service customer portal.
- **FR97:** The system can enforce free-tier limits (3 notebooks max, 50 notes per notebook, 500MB storage) via non-blocking toast notifications.
- **FR98:** Users can complete payment via credit/debit card, Apple Pay, or Google Pay.
- **FR99:** The system can apply prorated billing when users change plans mid-cycle.
- **FR100:** The system can handle failed payments with automatic retry (3 attempts over 7 days), email notifications, and a grace period before downgrade.

### FR-O: AI Intelligence (Premium)

- **FR101:** The system can analyze note content and suggest relevant tags that the user can accept or dismiss (Premium).
- **FR102:** The system can retroactively apply auto-tagging to existing notes (Premium).
- **FR103:** The system can detect duplicate or near-duplicate notes across the user's content (Premium).
- **FR104:** The system can group related notes in the Related Notes side panel by AI-detected content similarity (Premium).

### FR-P: Acquisition Surface (Public Playground)

- **FR105:** Anonymous users can access a public `/playground` route without authentication.
- **FR106:** The playground can render markdown with the same fade-away editor, Mermaid, LaTeX, syntax highlighting, and slash commands as the authenticated app.
- **FR107:** Playground content is rendered client-side only — the system can guarantee no content is saved or transmitted to the server.
- **FR108:** The playground can display a clear "Nothing is saved. Your content stays in your browser" notice.
- **FR109:** The playground can display a subtle non-blocking sign-up CTA that does not interrupt the user's workflow.
- **FR110:** The system can rate-limit playground asset requests by IP to prevent abuse.

## Non-Functional Requirements

### Performance

Performance is a first-class product attribute — slow or laggy note-taking would destroy the "simplicity that just works" brand promise. All targets apply at the 75th percentile under normal network conditions (4G or better).

- **NFR-P1:** The initial application load (first authenticated route after login) must complete within 2 seconds.
- **NFR-P2:** Switching between notes must complete within 500ms.
- **NFR-P3:** All user-initiated actions (save, search, tag, navigate, open menu, apply template) must respond within 500ms.
- **NFR-P4:** Auto-save round-trip (user stops typing → persisted to server) must complete within 2 seconds.
- **NFR-P5:** The slash command menu must appear within 100ms of `/` keystroke.
- **NFR-P6:** Global search must return results within 500ms for users with up to 10,000 notes.
- **NFR-P7:** Mermaid diagrams must render within 500ms of completed code entry.
- **NFR-P8:** Syntax highlighting must apply within 100ms of language selection or code changes.
- **NFR-P9:** Cross-device sync must propagate changes within 5 seconds under normal network conditions.
- **NFR-P10:** Core Web Vitals (LCP, FID, CLS) must pass Google's "Good" threshold across 75% of page loads.
- **NFR-P11:** Initial bundle size for the authenticated app route must not exceed 250KB gzipped.
- **NFR-P12:** The `/playground` route must be fully interactive within 2 seconds on 4G.

### Security

Security is foundational trust — users trust us with their thoughts, ideas, and sensitive notes. Any breach destroys the product.

- **NFR-S1:** All data must be encrypted in transit using TLS 1.2+.
- **NFR-S2:** All data must be encrypted at rest (Supabase default + application-level encryption for E2E notebooks).
- **NFR-S3:** Notebooks with user-enabled E2E encryption must have content encrypted client-side before transmission — the server must never hold decryption keys.
- **NFR-S4:** User sessions must use HttpOnly, Secure, SameSite=Strict cookies.
- **NFR-S5:** Row-Level Security (RLS) policies must enforce that users can only access rows they own — verified through automated tests on every database migration.
- **NFR-S6:** User passwords or authentication tokens must never be logged, stored in plain text, or transmitted to third parties.
- **NFR-S7:** Payment card data must never touch our servers — all card handling delegated to Stripe (PCI DSS compliance via Stripe).
- **NFR-S8:** The Content Security Policy (CSP) must disallow `unsafe-inline` scripts and restrict script sources to vetted origins.
- **NFR-S9:** User-generated content (markdown bodies) must be rendered through a sanitizing parser to prevent XSS attacks.
- **NFR-S10:** All state-changing API endpoints must require CSRF token validation.
- **NFR-S11:** Failed login attempts must be rate-limited by IP and account to prevent brute-force attacks (5 attempts per 15 minutes).
- **NFR-S12:** 2FA codes must expire within 5 minutes of generation and be single-use.
- **NFR-S13:** Session tokens must expire after 30 minutes of inactivity (configurable 15-60 minutes per user).
- **NFR-S14:** The public `/playground` route must never transmit user content to the server or any third-party endpoint.

### Reliability & Availability

- **NFR-R1:** The production system must maintain 99.5% publicly-committed uptime (≤3.6 hours of downtime per month), with 99.9% as an internal aspirational target. Lower public commitment reflects solo-dev operational reality and dependency on Vercel + Supabase uptime which are not under our control.
- **NFR-R2:** Auto-save must successfully persist user changes with zero data loss under normal conditions.
- **NFR-R3:** If the WebSocket connection to Supabase Realtime is lost, the system must fall back to polling every 30 seconds without user-visible disruption.
- **NFR-R4:** Offline edits (Phase 3) must sync correctly on reconnection; conflicts must be detected and surfaced to the user rather than silently overwritten.
- **NFR-R5:** Database backups must run daily with 7-day point-in-time recovery (provided by Supabase).
- **NFR-R6:** Failed Stripe webhooks must retry with exponential backoff; unprocessed events must surface alerts to operations.
- **NFR-R7:** Browser tab crashes must not lose more than 2 seconds of unsaved work (SessionStorage draft recovery).

### Scalability

- **NFR-SC1:** The system must support 1,000 concurrent users with performance targets met.
- **NFR-SC2:** The system must support a single user having up to 100 notebooks, 1,000 sections total, and 100,000 notes total without performance degradation.
- **NFR-SC3:** Global search must scale to indices of 10 million total notes across all users (PostgreSQL full-text search capacity).
- **NFR-SC4:** The infrastructure must scale horizontally via Vercel edge functions and Supabase's managed Postgres without manual intervention up to 50,000 monthly active users.
- **NFR-SC5:** File storage must support per-user quotas up to 50GB (Premium tier) with CDN delivery.
- **NFR-SC6:** Beyond 50,000 monthly active users, the architecture must support migration to custom infrastructure (documented migration path).

### Accessibility

- **NFR-A1:** The product must conform to WCAG 2.1 Level AA across all user-facing surfaces (landing, authenticated app, playground).
- **NFR-A2:** All interactive elements must be fully operable via keyboard — no mouse-only functionality.
- **NFR-A3:** All interactive elements must have appropriate ARIA labels, roles, and states — verified by automated axe-core testing in CI on every pull request.
- **NFR-A4:** Color contrast for text must meet 4.5:1 for normal text and 3:1 for large text across all themes.
- **NFR-A5:** The product must function correctly with screen readers (tested with NVDA on Windows, VoiceOver on macOS/iOS, TalkBack on Android before each major release).
- **NFR-A6:** Text must scale to 200% without loss of functionality or content.

### Privacy & Data Protection

- **NFR-PR1:** User account deletion must remove all user-owned data within 30 days, with email confirmation when deletion is complete.
- **NFR-PR2:** Users must be able to export all their data in a standard portable format (Markdown + JSON metadata) at any time, without restriction.
- **NFR-PR3:** The system must maintain an audit log of security-relevant events visible to the user.
- **NFR-PR4:** The product must be GDPR-compliant: clear consent, data portability, right to erasure, accessible privacy policy.
- **NFR-PR5:** The product must disclose a Privacy Policy before any personal data is collected.
- **NFR-PR6:** Analytics must respect Do Not Track browser signals and provide an opt-out mechanism in settings.

### Compatibility & Browser Support

- **NFR-C1:** The product must support the last two major versions of Chrome, Firefox, Safari, and Edge.
- **NFR-C2:** The product must not require any browser plugins, extensions, or polyfills.
- **NFR-C3:** The product must be responsive across viewport widths from 320px to 2560px+.
- **NFR-C4:** Touch, pointer, and keyboard input must all function correctly without mode switching.

### Observability & Operability

- **NFR-O1:** Production errors must be captured via an error tracking service with user context attached.
- **NFR-O2:** Key product metrics must be tracked (signups, tier conversions, DAU, feature usage, funnel drop-off) via product analytics.
- **NFR-O3:** Core Web Vitals must be continuously monitored via Real User Monitoring.
- **NFR-O4:** Critical operational events (prolonged downtime, payment processing failures, database errors) must generate email alerts to the operator within 5 minutes.
- **NFR-O5:** Deployments must be automated via CI/CD with no manual steps required.
