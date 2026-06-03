# kevinchisholm.dev — Project Rules (all agents)

## Stack
| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js App Router | check node_modules/next/package.json |
| Styling | Tailwind CSS | 4.x — `@import "tailwindcss"` not `@tailwind` directives |
| Content | MDX | gray-matter for frontmatter, next-mdx-remote for rendering |
| Deployment | Vercel | static-first |

## Hard constraints — never break these
- No authentication
- No database
- No payment processing
- No CMS
- No invented content — all copy, project descriptions, and claims come from Kevin
- No unnecessary npm packages — keep the dependency surface small
- No inline content in components — all post and project content lives in MDX files

## Content invariants
- Writing posts: `content/writing/YYYY-MM-DD-slug.mdx`
- Project entries: `content/projects/project-slug.mdx`
- Components render content — they never contain it
- Images: `public/` only — no inline base64
- Frontmatter is the source of truth for all metadata

## Naming conventions
| Concept | Convention |
|---|---|
| Writing posts | `content/writing/YYYY-MM-DD-slug.mdx` |
| Project entries | `content/projects/project-slug.mdx` |
| App screenshots | `public/screenshots/project-slug.png` |
| Components | PascalCase, kebab-case filename |
| Routes | lowercase, kebab-case |
| Page files | `app/[route]/page.tsx` |

## Design invariants
- Dark mode is the default — light mode is secondary
- Accent colour: `orange-500` — used sparingly, never as background fill
- No fake testimonials, inflated claims, or invented client history
- Project status labels must be honest: Prototype / In progress / Production / Archived
