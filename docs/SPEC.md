# kevinchisholm.dev — Specification

*Master specification. Single source of truth for vision, structure, content model,
and phase plan. Update when phases complete.*

---

## Vision

kevinchisholm.dev is a personal website for Kevin Chisholm — a builder who creates
AI-powered tools that solve real problems. The primary purpose is to showcase those
applications to potential consulting clients. The secondary purpose is to support
a consulting inquiry flow. The supporting purpose is to publish daily writing that
demonstrates how Kevin thinks about building software.

A visitor should understand within 30 seconds: this person builds real things,
uses AI as a feature (not just a tool), and can help you do the same.

---

## Current state

Phase 1 in progress as of 2026-06-01. Repository exists with spec, design, and
control files. Next.js has not been initialised yet. No pages built.

---

## Audience

Potential consulting clients. Not other developers. The site should answer the
question a non-technical or semi-technical client asks: "Can this person help me
build something like this?"

---

## Site structure

| Route | Purpose | Status |
|---|---|---|
| `/` | Home — hero, featured projects (browser window grid), recent writing | Phase 1 |
| `/projects` | Full project showcase — uniform grid with browser window chrome | Phase 1 |
| `/writing` | Writing index — all posts, reverse-chronological | Phase 1 |
| `/writing/[slug]` | Individual post — MDX prose layout | Phase 1 |
| `/consulting` | Services and inquiry — static copy, no form yet | Phase 1 |
| `/support` | Support links — GitHub Sponsors, Patreon, Bitcoin address | Phase 1 |

---

## Content model

### Project entries (`content/projects/*.mdx`)

| Field | Type | Notes |
|---|---|---|
| title | string | App name |
| description | string | One sentence — what it does for the user, not the tech stack |
| status | enum | `Prototype` / `In progress` / `Production` / `Archived` — must be honest |
| url | string | Live URL — omit if not public |
| repo | string | GitHub URL — omit if private |
| featured | boolean | Show in home page grid |
| stack | string[] | Technologies used — displayed as tags |
| screenshot | string | Path relative to `/public/screenshots/` |

### Writing posts (`content/writing/*.mdx`)

| Field | Type | Notes |
|---|---|---|
| title | string | Post title |
| date | YYYY-MM-DD | Publication date — used for sort order |
| description | string | One sentence — used in listing and meta description |
| tags | string[] | Optional |

---

## Known projects (to be added as MDX content)

| App | Description | Status |
|---|---|---|
| Ledger | Personal finance tracker — send receipt photos to Telegram bot, Claude Vision extracts expense data, review via PWA dashboard | Production |
| UntilDone | Persistent reminder app — tasks that don't disappear until actually completed | In progress |
| Payroll apps | Additional apps — Kevin to provide details | TBD |

---

## Phase plan

### Phase 1 — Foundation 🔄 In progress
**Goal:** Spec, design decisions, Next.js scaffold, core layout, all pages as shells,
projects page with browser window grid.
**Scope:**
- Initialise Next.js with TypeScript, Tailwind v4, Geist font
- Core layout: header, footer
- All 6 routes as working pages (real copy on consulting and support, placeholder on projects/writing)
- BrowserWindow component
- Projects grid on home and /projects (placeholder screenshots)
- Writing list on home and /writing
- MDX parsing utilities in lib/content.ts
**Out of scope:** Real screenshots, real MDX content files, dark/light mode toggle, SEO meta

### Phase 2 — Content 📋 Planned
**Goal:** Populate all real content. Real project screenshots. Real writing posts.
**Scope:** MDX project entries, screenshots, first writing posts, Bitcoin address on /support

### Phase 3 — Polish 📋 Planned
**Goal:** Dark/light mode toggle, SEO meta, Open Graph images, performance audit.

---

## Key decisions

### MDX over a CMS
Content stays in the repo, version-controlled, AI-readable, no external dependency.
Gray-matter parses frontmatter. next-mdx-remote renders MDX in the App Router.

### Vercel over GitHub Pages
Zero-config Next.js deploys, automatic preview URLs, free tier sufficient for v1.

### Uniform grid over bento
All project cards the same size. 2-column desktop, 1-column mobile.
`grid-cols-1 sm:grid-cols-2`. Reliable at every screen size. Scales as more apps are added.
The browser window chrome provides visual distinction — not the layout.

### Browser window chrome over plain cards
Each project card wraps a screenshot in a macOS-style browser chrome (three coloured
dots + URL bar). Immediately communicates "this is a web app." No iframes — static
screenshots only.

### Dark mode default
antfu.me tonal reference. Dark, minimal, confident. Light mode available but dark is primary.

### No auth / DB / payments in v1
Consulting inquiry is manual (email/contact). Support links are outbound only.
Stripe and form handling are Phase 4+ decisions.

---

## Known constraints

- All project content must come from Kevin — no invented descriptions or claims
- Bitcoin address needed for /support page — Kevin to provide before Phase 2
- GitHub Sponsors and Patreon URLs needed before Phase 2
- Screenshots needed for each app before Phase 2 launch
