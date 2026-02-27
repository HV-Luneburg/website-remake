# CLAUDE.md — HV Lüneburg Website

Project instructions for Claude Code. These rules override default behaviour.

---

## Project Overview

**HV Lüneburg** (Handballverein Lüneburg e.V.) is a handball club founded in 1946 in Lüneburg, Germany. This is the club's public website.

- **Stack:** Astro 5 + Tailwind CSS + MDX (AstroWind template base)
- **CMS:** Sanity (project ID: `z61c87ba`, dataset: `production`)
- **Language:** German — all UI text, labels, headings, and content **must be in German**
- **URL:** `https://astrowind.vercel.app` (placeholder — needs updating)
- **Repo root:** `/Users/silaskruckenberg/Documents/Work/Volunteer/HVL/hv-lueneburg`

---

## Intended Site Structure

The full planned site navigation (not all pages built yet):

```
1.  Startseite             /
2.  Mannschaften           /teams
    ├── 1. Damen           /teams/damen-1
    ├── 1. Herren          /teams/herren-1
    ├── 2. Damen           /teams/damen-2
    ├── 2.–4. Herren       /teams/herren-2 … herren-4
    ├── Weibliche Jugend   /teams/weibliche-jugend-*
    └── Männliche Jugend   /teams/maennliche-jugend-*
3.  Aktuelles              /news       (blog)
4.  Engagement
    ├── Schiedsrichter
    └── Engagement allgemein
5.  Sponsoring
    ├── Aktuelle Sponsoren
    ├── Sponsor werden
    └── Jobbörse / News Sponsoren
6.  Intern
    ├── Logos
    └── Downloads
7.  Vertrauensteam
8.  Archiv
9.  Kontakt                /contact
10. Impressum              /terms
11. Datenschutz            /privacy
12. Barrierefreiheit
```

**Each team page** should include: Infos (Trainingszeiten, Halle, Trainer, Kontakt), Mannschaftsbild, Spielplan (handball.net), verknüpfte Berichte.

---

## Technical Stack

| Layer | Technology |
|---|---|
| Framework | Astro 5 (SSG mode) |
| Styling | Tailwind CSS 3 + custom `style.css` |
| Component library | AstroWind widgets |
| CMS | Sanity |
| Blog | Astro Content Collections + MDX |
| Icons | astro-icon (Tabler icons + Flat Color Icons) |
| Live data | handball.net embed widgets |
| Build | `npm run build` → `dist/` |
| Dev server | `npm run dev` |

---

## Design System

### Primary Stylesheet
`src/assets/styles/style.css` is the **primary design system** — never modify it without explicit instruction. It defines all HVL design tokens and component classes.

`src/assets/styles/tailwind.css` is loaded first; `style.css` is loaded after (takes precedence). The bridge mapping is in `src/components/CustomStyles.astro`.

### Brand Colours
| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#E30613` | HVL jersey red — CTAs, accents, borders |
| `--color-secondary` | `#1A3A8F` | Navy blue — secondary buttons, backgrounds |
| `--color-gold` | `#C9A020` | Lüneburg gold — accents, badges |
| `--color-black` | `#0C0C0C` | Jersey black — navbar, footer, dark sections |
| `--color-white` | `#FFFFFF` | Light backgrounds |

### Typography
| Font | Role | Loaded via |
|---|---|---|
| **Barlow Condensed** | Display / headings | Google Fonts |
| **Barlow** | Body / UI text | Google Fonts |
| **DM Mono** | Scores, stats, timestamps | Google Fonts |

**All headings are uppercase** — this is an intentional jersey/athletic aesthetic and must be preserved.

### CSS Variable Bridge
`CustomStyles.astro` maps `--aw-color-*` → HVL tokens so Tailwind utility classes (e.g. `text-primary`, `bg-primary`) resolve to HVL brand colours. Never change these mappings without updating both files.

### Key Component Classes (from style.css)
Use these classes when building or modifying components:

| Class | Purpose |
|---|---|
| `.navbar` | Main navigation bar (black + red bottom border) |
| `.navbar__inner` | Flex inner container (max 1440px) |
| `.navbar__logo` / `.navbar__logo-text` | Logo link + text |
| `.navbar__nav` / `.navbar__nav-link` | Navigation list + links |
| `.hero` | Full-bleed hero section |
| `.hero__media` | Background image/video layer |
| `.hero__content` | Content overlay |
| `.hero__title` / `.hero__subtitle` | Hero typography |
| `.hero__actions` | CTA button group |
| `.hero__number` | Jersey-number decorative backdrop |
| `.heading-eyebrow` | Uppercase red label above headings |
| `.section-header` / `.section-title` | Section title blocks |
| `.card` | Base card component |
| `.card__media` / `.card__body` / `.card__footer` | Card sub-elements |
| `.card--primary` / `.card--dark` / `.card--stat` | Card variants |
| `.btn` | Base button |
| `.btn--primary` | Red button with shadow |
| `.btn--secondary` | Navy button |
| `.btn--outline` / `.btn--outline-white` | Outlined variants |
| `.btn--sm` / `.btn--lg` / `.btn--xl` | Size variants |
| `.badge` / `.badge--primary` / `.badge--gold` | Labels/tags |
| `.footer` / `.footer__main` / `.footer__bottom` | Footer sections |
| `.footer__col-title` | Red-underlined footer column headings |
| `.ticker` / `.ticker__label` / `.ticker__track` | Scrolling news strip |
| `.sponsor-bar__logos` / `.sponsor-bar__logo` | Sponsor logo strip |
| `.fixture` | Match/game card |
| `.scoreboard` | Large score display |
| `.player-card` | Player portrait card |
| `.table--standings` | League standings table |
| `.gallery` | Photo grid gallery |
| `.section` / `.section--sm` / `.section--lg` | Spacing variants |
| `.bg-primary` / `.bg-secondary` / `.bg-dark` | Background variants |
| `.bg-gradient-dark` / `.bg-gradient-split` | Gradient backgrounds |
| `.section--angled-bottom` / `.section--angled-top` | Diagonal cuts |

---

## Architecture Rules

### Components
- **Always use existing AstroWind widgets** — do not create standalone HTML pages or new component files unless a widget genuinely doesn't exist for the use case.
- All page compositions live in `src/pages/` using the `PageLayout.astro` wrapper.
- `PageLayout.astro` automatically includes `Header`, `Footer`, and `Announcement` (ticker).

### Widget → HVL Class Mapping
When building on existing widgets, use these class/style patterns:

| Widget | HVL treatment |
|---|---|
| `Hero.astro` / `Hero2.astro` | `.hero` full-bleed, `.hero__title`, jersey-number decoration |
| `HeroText.astro` | Dark gradient background, `.heading-eyebrow`, uppercase title |
| `ui/Headline.astro` | `.section-header .section-header--center`, `.heading-eyebrow`, `.section-title` |
| `ui/Button.astro` `variant="primary"` | `.btn .btn--primary` |
| `ui/Button.astro` `variant="secondary"` | `.btn .btn--outline-white` |
| `ui/Button.astro` `variant="tertiary"` | `.btn-tertiary` |
| `Stats.astro` | `.card .card--stat` blocks |
| `Features2.astro` / `ItemGrid2.astro` | `.card .card__body .card__title .card__excerpt` |
| `Brands.astro` | `.sponsor-bar__logos .sponsor-bar__logo` |
| `CallToAction.astro` | `.bg-gradient-dark` + jersey-number decoration |
| `blog/GridItem.astro` | `.card` with `.badge`, `.card__title`, `.card__excerpt` |

### Layouts
```
Layout.astro          ← base HTML shell, loads tailwind.css + style.css
└── PageLayout.astro  ← wraps with Header + Footer + Announcement ticker
    └── page content  ← slot
```

### File Locations
| Type | Path |
|---|---|
| Pages | `src/pages/` |
| Widgets | `src/components/widgets/` |
| UI primitives | `src/components/ui/` |
| Blog components | `src/components/blog/` |
| Common (meta, analytics) | `src/components/common/` |
| Primary stylesheet | `src/assets/styles/style.css` |
| Tailwind base | `src/assets/styles/tailwind.css` |
| Font + variable bridge | `src/components/CustomStyles.astro` |
| Team data | `src/data/teams.ts` |
| Navigation | `src/navigation.ts` |
| Site config | `src/config.yaml` |
| Blog posts | `src/data/post/*.md` |

---

## Content Conventions

- **Language:** All visible text must be in German. Error messages, placeholders, labels — all German.
- **Dates:** German format (`dd.mm.yyyy`), locale `de-DE`.
- **Club name:** "HV Lüneburg" (with umlaut) or "Handballverein Lüneburg". Short form "HVL".
- **Founded:** 1946.
- **Section taglines** (`.heading-eyebrow`) are short uppercase German labels, e.g. "Seit 1946", "Mannschaften", "Aktuelles", "Tabelle", "Partner".
- **Tone:** Enthusiastic, community-focused, sporty. Second person ("du") when addressing visitors.
- **Placeholder images:** Use `~/assets/images/hero-image.png` until real photos exist.
- **Logo:** Text-based (`HV <span>Lüneburg</span>`) using `.navbar__logo-text` — no emoji.

---

## handball.net Integration

Live match and standings data is embedded via the handball.net widget system.

### Script loader (once per page)
```html
<script is:inline>
  (function(e,t,n,r,i,s,o){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},
  e[i].l=1*new Date;s=t.createElement(n),o=t.getElementsByTagName(n)[0];s.async=1;
  s.src=r;o.parentNode.insertBefore(s,o)})(window,document,"script",
  'https://www.handball.net/widgets/embed/v1.js',"_hb");
</script>
```

### Widget calls
```js
// Club-wide schedule (homepage)
_hb({ widget: 'spielplan', clubId: 'nuliga.hvn.681', container: 'div-id' });

// Team-specific standings
_hb({ widget: 'tabelle', token: 'nuliga.hvn.TEAMID', container: 'div-id' });

// Team-specific schedule
_hb({ widget: 'spielplan', token: 'nuliga.hvn.TEAMID', container: 'div-id' });
```

### Club ID
`nuliga.hvn.681` — exported as `HANDBALL_NET_CLUB_ID` from `src/data/teams.ts`.

### Team IDs
All 17 teams are in `src/data/teams.ts` with their `handballNetId`. Key teams:

| Team | handball.net ID |
|---|---|
| Herren 1 | `nuliga.hvn.1662205` |
| Herren 2 | `nuliga.hvn.1664641` |
| Damen 1 | `nuliga.hvn.1662898` |
| Damen 2 | `nuliga.hvn.1664664` |

### Integration rules
- Always use `<script is:inline>` — never bundle with Astro
- Use `define:vars` to pass team IDs into inline scripts on dynamic pages
- Container `div` IDs must be **unique per page** (not just per widget type)
- The handball.net logo on widgets **must remain visible** (licensing requirement)

---

## Sanity CMS

**Project ID:** `z61c87ba`
**Dataset:** `production`
**Status:** Schema is currently empty — not yet configured

When setting up Sanity schemas, prioritise:
1. `post` (news/Spielberichte) — already using Astro Content Collections as interim
2. `team` (Mannschaft info, Trainingszeiten, Trainer)
3. `sponsor` (logo, URL, category, tier)
4. `page` (flexible content pages for Engagement, Intern, Vertrauensteam etc.)

Use the Sanity MCP tools to manage content once schemas are defined.

---

## Blog / News System

- URL pattern: `/news/[slug]`
- List page: `/news`
- Posts are in `src/data/post/*.md` (Astro Content Collections)
- Fields: `title`, `excerpt`, `publishDate`, `image`, `category`, `tags`, `author`
- `postsPerPage`: 6
- Related posts: 4

---

## Development Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Production build → dist/
npm run preview  # Preview built site
```

Build is fully static (SSG). All 32 pages must build cleanly with no errors.

---

## What Is Still Placeholder / TODO

- **Club address** — currently "Platzhalter-Straße 1" on contact page
- **Website URL** — still `astrowind.vercel.app` in `config.yaml`
- **Social links** — Instagram and Facebook `href="#"` in `navigation.ts`
- **Sponsor logos** — `SponsorTicker.astro` uses placeholder text names; replace with real logos once delivered (Sanity `sponsor` type planned)
- **Hero images** — `heroSlides` in `site.ts` currently uses Unsplash demo URLs; replace with real action photography
- **Team photos** — no actual team portraits yet
- **Sanity CMS schema** — completely empty, not wired up
- **Google Analytics** — `id: null` in `config.yaml`
- **`claude/` directory** — contains an old standalone HTML prototype; can be deleted
- **Skyline SVG** — `../img/skyline-lueneburg.svg` referenced in `style.css` but file not present yet
- **Missing pages** — Engagement, Intern, Vertrauensteam, Archiv, Barrierefreiheit not yet created

---

## Key Decisions & History

- **2026-02-15:** Reference site for structure was [Tornados basketball theme](https://tornados.ancorathemes.com). Section order on homepage follows that layout using AstroWind widgets.
- **2026-02-27:** Full visual redesign applied using `style.css` as primary design system. Fonts changed from Inter → Barlow Condensed + Barlow. Colours changed from blue (AstroWind default) → HVL red/navy/gold. All major components rewritten to use HVL CSS classes. Typography is uppercase and condensed throughout (intentional jersey aesthetic).
- **2026-02-27 (session 2):** Homepage level-up: added `SponsorTicker.astro` (above navbar partner strip), upgraded `Hero2.astro` with load-time CSS animations and floating fixture card slot, wrapped handball.net widgets in `.handball-wrapper` dark container, restructured section order, reduced BlogLatestPosts to 3, removed bottom `Brands` section. Added CSS sections 22–25 to `style.css` (sponsor-ticker, fixture-card, handball-wrapper, hero load animations). Mobile typography: hero title clamped to `clamp(3rem, 10vw, 10rem)`, section-title and card__title made fluid with `clamp()`.
- **2026-02-27 (Netlify fix):** Site deployed to Netlify but all pages returned 404. Root cause: `@astrojs/node` adapter with `mode: 'standalone'` was in `astro.config.ts` — this splits output into `dist/client/` + `dist/server/`, but Netlify expects HTML files at `dist/` root. Fix: removed the node adapter entirely (Astro outputs static HTML directly to `dist/` without it), removed the `import node` line, and removed `studioBasePath: '/admin'` from the Sanity integration (that option creates an SSR route requiring an adapter). Build time dropped from ~38 s to ~5.7 s.

---

## Rules Summary

1. **German only** — all visible text
2. **Use AstroWind widgets** — don't create standalone HTML pages
3. **style.css is primary** — use its class names; do not rewrite components with inline Tailwind when a style.css class exists
4. **Uppercase headings** — intentional brand choice, do not revert
5. **HVL colour palette** — red `#E30613`, navy `#1A3A8F`, gold `#C9A020`, black `#0C0C0C`
6. **Barlow Condensed for headings** — keep font stack, do not substitute
7. **Never touch handball.net widget logos** — licensing requirement
8. **Build must pass cleanly** — run `npm run build` after any significant change
9. **No new npm packages** unless necessary — prefer existing dependencies
10. **Sanity project `z61c87ba` / dataset `production`** — always use these identifiers
11. **Keep this file up to date** — after every session, add lessons learned, new rules, or corrected assumptions to CLAUDE.md. If a pattern worked well, codify it here. If something broke and revealed a gap in the instructions, fix the gap. The goal is that each session leaves better instructions than the last.
12. **Hero2.astro slot pattern** — `Hero2.astro` accepts a `fixture` named slot (`<Fragment slot="fixture">`). Only rendered when the slot is provided (`Astro.slots.has('fixture')`). The fixture container (`.hero__fixture`) is hidden on mobile via CSS (max-width: 1023px).
13. **handball.net widget wrapper** — always wrap `<div id="hb-*"></div>` in `<div class="handball-wrapper">` for brand-consistent framing. Never override widget internals.
14. **`background-attachment: fixed` parallax won't work** on `<img>` elements — only on CSS `background-image`. Skipped for now; real parallax would require switching hero background to CSS `background-image` or using JS scroll listeners.
15. **CSS animations on hero** — removed AstroWind's `intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade` classes from hero elements. Replaced with `hero__title--reveal`, `hero__subtitle--reveal`, `hero__actions--reveal`, `hero__number--reveal` classes defined in `style.css` section 25. These fire immediately on load (hero is always in viewport). The global `prefers-reduced-motion: reduce` block at line ~2409 already covers all animations.
16. **SponsorTicker placement** — imported and rendered in `PageLayout.astro` before `<Announcement>` and `<Header>`. Uses CSS `ticker-scroll` keyframe (already defined) with 40s duration. Gap/separator dots (`·`) are separate `<span class="sponsor-ticker__sep">` elements.
17. **Z-index hierarchy** — `--z-sticky: 300` (navbar), mobile menu overlay `z-index: 295`, StickyScorebar `z-index: 150`. This ensures the navbar is always visually above other elements.
18. **Hero2.astro slides prop** — accepts `slides?: {src: string; alt: string}[]`. When provided, renders `.hero__slideshow` with crossfade every 10 s via JS `data-active` toggling. CSS: `.hero__slide[data-active="true"] { opacity: 1 }`. Manage slides via `heroSlides` in `src/data/site.ts`.
19. **StickyScorebar multi-game** — accepts `games?: Game[]` array. Desktop: flex row with `divide-x`. Mobile: one game shown, rotates every 20 s via JS toggling `display:none`. Found in `src/components/widgets/StickyScorebar.astro`.
20. **Team Instagram section** — on `/teams/[slug]`, Instagram appears as a standalone section between the description block and Tabelle (not inside the info card). Only rendered when `team.instagram` is set. Compute handle in frontmatter: `instagramHandle = team.instagram?.replace(...)`.
21. **stat-number font size** — `.card--stat .stat-number` uses `clamp(1.5rem, 4vw, 2.5rem)` (not `var(--text-hero)`) to prevent overflow on mobile with longer strings like "12.000+".
22. **No SSR adapter** — do NOT add `@astrojs/node` or any other adapter to `astro.config.ts`. This is a static site (SSG). Adding a Node adapter splits the build into `dist/client/` + `dist/server/`, breaking Netlify deployment. Netlify expects HTML files at `dist/` root.
23. **No `studioBasePath` in Sanity integration** — the `studioBasePath: '/admin'` option in `@sanity/astro` creates an SSR-rendered route, which requires an adapter. Since this is a static build and we have a separate Studio project (`studio-hv-lueneburg/`), do not set this option.
