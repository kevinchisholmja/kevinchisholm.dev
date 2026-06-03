@AGENTS.md

# kevinchisholm.dev — AI Agent Instructions

## Read first
Before making any change, read **`docs/SPEC.md`** — single source of truth for vision,
structure, content model, and phase plan. Read **`docs/DESIGN.md`** before touching
any component or styling.

## Stack
| Layer | Technology | Gotcha |
|---|---|---|
| Framework | Next.js App Router | Check `node_modules/next/package.json` before using any Next.js API |
| Styling | Tailwind v4 | `@import "tailwindcss"` in globals.css — NOT `@tailwind` directives |
| Content | MDX + gray-matter | Content in `content/` — never hardcode in components |
| Fonts | Geist Sans + Geist Mono | Loaded via `next/font/google` |
| Deployment | Vercel | No API routes that require a persistent server |

## Current phase: Phase 1 — Foundation
Spec, design, and Next.js scaffold. Core layout (header, footer), home page shell,
projects page with browser window grid. No real content yet — placeholder screenshots.

## Site routes
| Route | Source | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero + featured projects (browser window grid) + recent writing |
| `/projects` | `app/projects/page.tsx` | Full project grid — reads from `content/projects/*.mdx` |
| `/writing` | `app/writing/page.tsx` | Writing index — reads from `content/writing/*.mdx` |
| `/writing/[slug]` | `app/writing/[slug]/page.tsx` | Individual post — MDX prose layout |
| `/consulting` | `app/consulting/page.tsx` | Static copy — inquiry only |
| `/support` | `app/support/page.tsx` | Static copy — outbound links only |

## Key files
| File | Purpose |
|---|---|
| `docs/SPEC.md` | Master spec — read before every session |
| `docs/DESIGN.md` | Visual law — read before any component work |
| `content/projects/*.mdx` | Project entries — source of truth |
| `content/writing/*.mdx` | Writing posts — source of truth |
| `lib/content.ts` | MDX parsing utilities — use these, don't write new ones |
| `components/BrowserWindow.tsx` | Browser chrome wrapper for project previews |

## Hard constraints (from AGENTS.md — repeated for clarity)
- No auth, no database, no payments, no CMS
- No invented content — Kevin provides all copy and project details
- All content from MDX files — never hardcode in components
- Honest project status labels only
