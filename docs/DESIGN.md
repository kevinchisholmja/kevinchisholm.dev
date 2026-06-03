# kevinchisholm.dev — Design System

*Visual law for this project. Read before writing any component or style.
Every decision here was deliberate — do not override without updating this file.*

---

## Philosophy

Quiet confidence. The site sells capability to consulting clients, so it must
feel crafted and trustworthy without shouting. Personality comes from restraint,
warmth, and a few considered details — not decoration.

Tonal reference: **antfu.me** (dark, minimal, textured, type-forward). We borrow
the *feeling*, not the layout. Our differentiator: this is a builder's portfolio
aimed at clients, so it leads with proof (projects) and a clear way to engage.

---

## Colour — semantic tokens

Light and dark are designed as **one system**. Never hardcode `zinc-*` or
`dark:` colour pairs in components. Use the semantic tokens below — they swap
automatically between modes.

Defined in `app/globals.css` via CSS variables mapped into Tailwind through
`@theme inline`. Usage: `bg-canvas`, `bg-surface`, `text-ink`, `text-muted`,
`text-faint`, `border-line`, `text-accent`, etc.

| Token | Light | Dark | Use |
|---|---|---|---|
| `canvas` | `#fcfcfb` | `#0a0a0a` | Page background |
| `surface` | `#ffffff` | `#141413` | Cards, header fill |
| `elevated` | `#f6f5f2` | `#1c1b1a` | Inset areas, browser chrome, tags |
| `line` | `#e9e7e2` | `#262625` | Borders, dividers |
| `line-strong` | `#d9d6cf` | `#383735` | Hover borders |
| `ink` | `#1a1a17` | `#ecebe7` | Primary text, headings |
| `muted` | `#56544d` | `#a2a09a` | Body text, descriptions |
| `faint` | `#8b897f` | `#6c6a64` | Meta, dates, tags, captions |
| `accent` | `#ea580c` | `#fb923c` | Links on hover, active nav, badges |

### Rules
- **Warm neutrals, never cold zinc.** Light mode is paper-like, not clinical.
- **Accent is a highlight, never a fill.** Orange appears on hover, the active
  nav underline, and status badges. It is *not* a button background or hero element.
- The accent is deeper in light (`orange-600`) and brighter in dark (`orange-400`)
  so contrast stays balanced in both modes.

### Texture
Both modes carry a fine radial dot grid on `body` (`--dot`, 22px grid). It grounds
the page and is the single biggest reason light mode reads as "designed."

### Selection & focus
- `::selection` uses a faint accent wash.
- `:focus-visible` uses a 2px accent outline with 2px offset.

---

## Typography

### Fonts
- **Geist Sans** — all UI, headings, body
- **Geist Mono** — code, browser-window URL bar, technical labels

### Scale (Tailwind defaults — never invent sizes)
| Token | Size | Use |
|---|---|---|
| `text-xs` | 12px | meta, dates, tags |
| `text-sm` | 14px | secondary text, card descriptions, nav |
| `text-base` | 16px | body |
| `text-lg` | 18px | hero sub-paragraph, section intros |
| `text-3xl` | 30px | page headings |
| `text-4xl` | 36px | hero (mobile) |
| `text-5xl` | 48px | hero (desktop) |

### Weight & tracking
- Headings: `font-semibold` (600) + `tracking-tight` — editorial, not heavy-bold
- Hero leading: `leading-[1.1]`
- Body: `font-normal`, `leading-relaxed`
- Section labels: `text-sm font-medium text-faint uppercase tracking-widest`
- Never use `font-bold` (700) — semibold is the ceiling

### Prose (writing posts)
`@tailwindcss/typography` with `prose-zinc dark:prose-invert`, links in accent,
constrained to `max-w-2xl`.

---

## Spacing & layout

### Page containers
```
max-w-2xl   prose / writing post, support
max-w-3xl   consulting, hero text column
max-w-4xl   writing index
max-w-5xl   home, projects, header, footer
mx-auto px-4 sm:px-6
```

### Vertical rhythm
```
py-16 sm:py-24    page top/bottom
space-y-20 sm:space-y-28   between home sections (generous)
mb-12             page heading → content
```

---

## Components

### Header (`SiteHeader`, client)
- Sticky, `h-16`, `bg-canvas/70 backdrop-blur-md`, `border-b border-line/70`
- Name left (`font-semibold tracking-tight`, hover → accent)
- Nav right: active route gets `text-ink font-medium` + a 1px accent underline;
  inactive `text-muted hover:text-ink`
- Thin divider, then ThemeToggle

### Theme toggle (`ThemeToggle`, client)
- Light/dark only (no system). `Sun`/`Moon`, spring icon entrance
- **Circle reveal** via View Transitions API: a circle expands from the cursor,
  the new theme clips in *over* the old one — always expands, both directions
- Falls back to instant switch when unsupported or reduced-motion

### Browser window card (`BrowserWindow`)
- `rounded-xl border border-line bg-surface`
- Hover: `-translate-y-1`, stronger border, soft shadow; screenshot scales 1.02;
  title → accent
- Chrome: three traffic-light dots + mono URL bar on `bg-elevated`
- `aspect-video` screenshot; falls back to title placeholder if image missing
- Footer: title + description + status badge; stack tags row below

### Status badges
Ring-based, mode-aware via tokens:
```
Production  → emerald   In progress → blue
Prototype   → amber     Archived    → zinc/faint
text-[11px] font-medium px-2 py-0.5 rounded-full ring-1
```

### Availability pill (home hero)
Pulsing emerald dot + "Available for consulting work" — a real signal for clients.

---

## Motion

Subtle, fast, purposeful. All motion respects `prefers-reduced-motion`.

| Effect | Spec |
|---|---|
| Page entrance | `.fade-up` — translateY(10px)+fade, 0.55s, staggered via inline `animationDelay` (0 / 0.08s / 0.16s) |
| Link hover | `.link` animated underline — grows from left, 0.3s |
| Card hover | `-translate-y-1` + shadow + 1.02 image scale, 200–300ms |
| Nav/colour hover | `transition-colors duration-150` |
| Theme switch | View Transitions circle reveal, 500ms |
| Availability dot | `pulse-dot` 2s infinite |
| Toggle icon | spring entrance 200ms |

### Hard limits
- No motion longer than ~550ms (entrance) / 500ms (theme reveal)
- No scroll-triggered effects, no parallax, no looping decorative animation
  (the availability dot is the only persistent motion, and it's a signal)

---

## What not to do
- No cold zinc backgrounds — warm tokens only
- No `dark:` colour pairs in components — use semantic tokens
- No accent-coloured buttons or backgrounds — accent is a highlight
- No `font-bold` — `font-semibold` is the ceiling
- No gradients-as-background, hero illustrations, or stock imagery
- No more than two font families (Geist Sans + Mono — at the limit)
- No sidebar, no modals — this is an editorial site, not an app
- No bento grid — uniform 2-col card grid only
