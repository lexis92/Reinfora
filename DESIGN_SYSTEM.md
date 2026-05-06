# Reinfora Design System

The shared visual language for the Reinfora marketing site and product UI. Extracted from the live codebase — every token, component, and pattern below is something we already use.

---

## 1. Design Tokens

### Color

**Brand (lime)** — defined in `tailwind.config.js`. Primary brand identity, used for accents, gradients, and active states.

| Token | Hex | Usage |
|---|---|---|
| `brand-50` | `#f7fee7` | Light pill backgrounds (light mode) |
| `brand-100` | `#ecfccb` | Tag fills, chip backgrounds |
| `brand-200` | `#d9f99d` | Glow tints, blurred accents |
| `brand-300` | `#bef264` | Borders on accent surfaces |
| `brand-400` | `#a3e635` | **Primary action (dark mode)**, gradient mid |
| `brand-500` | `#84cc16` | Gradient stops, progress fills |
| `brand-600` | `#65a30d` | Text on brand surfaces (dark mode), gradient start |
| `brand-700` | `#4d7c0f` | Eyebrow labels (light mode) |
| `brand-800` | `#3f6212` | Pill text (light mode) |
| `brand-900` | `#365314` | Reserved |
| `brand-950` | `#1a2e05` | Selection text color |

**Neutral** — Tailwind `neutral` scale.

| Role | Light | Dark |
|---|---|---|
| Page background | `white` | `bg-neutral-950` |
| Card surface | `bg-white` | `bg-neutral-900/60` |
| Subtle surface | `bg-neutral-50` | `bg-neutral-900/40` |
| Body text | `text-neutral-900` | `text-neutral-100` |
| Secondary text | `text-neutral-600` | `text-neutral-400` |
| Muted/meta | `text-neutral-500` | `text-neutral-400` |
| Hairline border | `border-black/5` | `border-white/10` |
| Strong border | `border-black/10` | `border-white/15` |

**Selection** — `::selection { background:#a3e635; color:#1a2e05; }`

### Typography

- **Sans** — Geist Sans (`geist/font/sans`)
- **Mono** — Geist Mono (`geist/font/mono`)
- Feature settings: `cv11`, `ss01` enabled globally

| Scale | Tailwind | Use |
|---|---|---|
| Hero display | `text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]` | Home hero |
| Page H1 | `text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]` | Inner page header |
| Section H2 | `text-3xl md:text-5xl font-semibold tracking-tight` | Section titles |
| Sub H2 | `text-2xl md:text-4xl font-semibold tracking-tight` | Two-column heads |
| Card title | `text-lg font-semibold tracking-tight` | Card heading |
| Body | `text-base` / `text-[15px]` | Paragraphs |
| Small | `text-sm` | Card descriptions |
| Eyebrow | `text-xs font-semibold uppercase tracking-[0.15em]` | Section labels |
| Caption | `text-xs` | Footnotes, breadcrumbs, meta |

### Spacing

- Page horizontal pad: `px-6` (constant)
- Section pad (large): `py-16 md:py-24`
- Section pad (medium): `py-12 md:py-16`
- Section pad (hero-adjacent): `py-20 md:py-28`
- Container widths: `max-w-3xl` (legal/blog) · `max-w-5xl` (focused) · `max-w-6xl` (default)
- Card padding: `p-6` (default) · `p-8` (feature) · `p-10 md:p-16` (CTA)
- Grid gaps: `gap-4` (cards) · `gap-10` (two-column) · `gap-3` (meta)

### Radius

| Token | Class | Use |
|---|---|---|
| Pill | `rounded-full` | Buttons, badges |
| Small | `rounded-md` | Sidebar nav |
| Medium | `rounded-lg` | Stat tiles |
| Large | `rounded-xl` | Icon containers |
| Card | `rounded-2xl` | Default cards |
| Hero card | `rounded-3xl` | Section-spanning surfaces, CTA |

### Shadow & Glow

- Hero card: `shadow-2xl shadow-brand-500/10`
- Floating nav: `shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_8px_30px_rgba(0,0,0,0.06)]`
- Glow utility (`globals.css`): `box-shadow: 0 0 0 1px rgba(163,230,53,0.15), 0 10px 40px -10px rgba(163,230,53,0.4)`
- Ambient blurs: `bg-brand-400/40 blur-3xl` placed off-canvas behind sections

### Motion

- **Easing** — `[0.22, 1, 0.36, 1]` (cubic, ease-out-expo-ish) used everywhere via Framer Motion
- **Durations** — entrance 0.6–0.9s, hover transforms 200ms, gradient text 6–8s loop
- **Patterns**
  - Reveal: `initial={{opacity:0, y:12-20}}` → `animate={{opacity:1, y:0}}`
  - Hover arrow: `group-hover:translate-x-0.5`
  - Disclosure: `group-open:rotate-45`
  - In-view: `whileInView` + `viewport={{ once: true }}`
- Custom keyframes (Tailwind config): `gradient-x`, `shimmer`, `fade-up`, `fade-in`

### Background Effects

- `.grid-bg` — Lime grid masked by radial gradient (top-of-page hero backdrop)
- `.gradient-text` — Animated lime gradient on text (titles)
- `.noise` — SVG turbulence overlay for premium texture
- `.glow` — Brand-tinted box shadow for primary CTAs

### Theme

- Default: **dark** (set via inline script in `app/layout.tsx` and `theme-provider.tsx`)
- Toggle stores `'light' | 'dark'` in `localStorage` under `theme`
- Tailwind `darkMode: 'class'` — `.dark` on `<html>`

---

## 2. Components

### Layout

#### `PageShell` (`components/page-shell.tsx`)
Wraps every inner page. Composes `ScrollProgress` + `CursorGlow` + `Navbar` + children + `Footer`.

#### `PageHeader` (`components/page-header.tsx`)
Top-of-page hero. Props: `eyebrow?`, `title`, `lede?`, `breadcrumbs?`, `children?` (CTA slot). Includes `.grid-bg` and ambient brand glow.

#### `Navbar` / `Footer`
Floating pill nav (max-w-5xl, backdrop-blur). Footer is a 6-col grid: brand block + Product + Compare + Company + Trust.

### Primitives

#### `Button` (`components/ui/button.tsx`)
| Variant | Use |
|---|---|
| `primary` | Main CTA (dark in light mode, brand-400 in dark mode) |
| `secondary` | Adjacent/alt action |
| `ghost` | Inline action with arrow |

| Size | Class set |
|---|---|
| `sm` | `px-3.5 py-1.5 text-sm` |
| `md` | `px-5 py-2.5 text-sm` |
| `lg` | `px-6 py-3 text-sm` |

Auto-renders `<Link>` if `href` is passed, `<button>` otherwise. `withArrow` adds the canonical `ArrowRight` with hover translate.

#### `Card` (`components/ui/card.tsx`)
| Variant | Use |
|---|---|
| `default` | Standard surface |
| `interactive` | Adds hover border accent |
| `accent` | Brand-tinted gradient (CTA-style) |
| `subtle` | `bg-neutral-50` for contrast bands |

Sizes: `sm` (`p-6`), `md` (`p-8`), `lg` (`p-10 md:p-12`), `xl` (`p-10 md:p-16`). Radii: `2xl` (default) / `3xl`.

#### `Eyebrow` (`components/ui/eyebrow.tsx`)
| Variant | Use |
|---|---|
| `pill` | Brand pill (PageHeader, hero) |
| `label` | All-caps section label |

#### `IconBadge` (`components/ui/icon-badge.tsx`)
Square brand-tinted container for `lucide-react` icons. Sizes: `sm`, `md`, `lg`.

#### `Field` (`components/ui/field.tsx`)
Labeled input/textarea. Variants: `pill` (h-14 rounded-full) and `compact` (px-4 py-3 rounded-2xl/full).

#### `cn` helper (`lib/cn.ts`)
Tailwind class merger using `clsx` + `tailwind-merge`. Use in every primitive.

### Existing reusable components
`Logo`, `ThemeToggle`, `Magnetic` (cursor-following wrapper), `ScrollProgress`, `CursorGlow`, `ThreeScene` (3D backdrop, hero only).

---

## 3. Patterns

### Page rhythm
Every inner page follows the same rhythm:

1. `PageHeader` (eyebrow + title + lede + optional CTA slot)
2. Primary content (`py-12 md:py-16`)
3. Contrast band (`bg-neutral-50 dark:bg-neutral-900/40 border-y` + `py-16 md:py-20`)
4. Tertiary section (`py-16 md:py-20`)
5. Related/cross-link strip (`py-16 border-t`)

### Two-column "label + content"
```
grid md:grid-cols-12 gap-10
  .md:col-span-4 → eyebrow + heading
  .md:col-span-8 → body or grid of cards
```
Used on About, Security, HIPAA, feature detail pages.

### Card grids
- 2-col: `grid md:grid-cols-2 gap-4`
- 3-col: `grid sm:grid-cols-2 lg:grid-cols-3 gap-4`

### CTA strip
Centered title + lede + 2 buttons (primary + secondary) inside `py-16 border-t`. Reused on Features, About, blog posts, demo page.

### Disclosure (FAQ)
Native `<details>`/`<summary>` styled with Tailwind:
```
divide-y divide-black/5 dark:divide-white/10
border-y border-black/5 dark:border-white/10
group py-5
```
Indicator is `+` rotated `45°` on `group-open`.

### Comparison table (`/compare/[slug]`)
Three-column table inside `rounded-2xl` border. Reinfora column rows lead with `CheckCircle2` brand icon.

---

## 4. Accessibility

- Always pair interactive elements with focus-visible rings: `focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950`
- Use `aria-label` on icon-only buttons (see hamburger in `Navbar`)
- Prefer native semantics (`<details>`, `<nav>`, `<main>`, `<section>`) over ARIA when possible
- Animation respects `prefers-reduced-motion` (CursorGlow already does)
- Color: never use brand-on-brand-300 for body text — minimum contrast is `brand-700 on white` / `brand-300 on neutral-900`

---

## 5. Conventions

- Always import the canonical ease constant: `const ease = [0.22, 1, 0.36, 1] as const`
- Always use `lucide-react` for icons; size `h-4 w-4` for inline, `h-5 w-5` for IconBadge, `h-3.5 w-3.5` for trailing arrows
- Never hardcode hex values — extend `tailwind.config.js` instead
- Never use arbitrary values in spacing (`p-[17px]`) — stick to the Tailwind scale
- Prefer `<Link>` over `<a>` (Next.js routing)
- Keep page section padding consistent: `py-16 md:py-24` is the default

---

## 6. Roadmap

- [ ] Extract `Section` primitive for the recurring `py-16 md:py-24 max-w-6xl px-6` shell
- [ ] Add semantic color tokens (`success`, `warning`, `danger`)
- [ ] Add a shared focus-ring utility class
- [ ] Build a `<Stat>` and `<Metric>` primitive for dashboards
- [ ] Storybook (or equivalent) for live examples
