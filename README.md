# Story Globe 🌍

An interactive 3D globe that lets you explore folk tales, oral traditions, and legendary stories from countries around the world. Tap any country flag to discover stories and authors from that culture.

**Live:** [storyglobe.vercel.app](https://storyglobe.vercel.app)

---

## What It Does

- A fully interactive 3D Earth rendered in the browser
- Country flags are pinned to their real-world coordinates on the globe
- Tapping a flag opens a bottom drawer with stories and famous authors from that country
- Each story leads into a full reading experience with illustrated tale pages
- A badge system tracks which countries you've explored and stories you've read
- Fully mobile-first — designed to feel native on a phone

---

## User Value

- **Discover the world through stories** — explore oral traditions from 14 countries in one immersive experience, without needing to search or scroll
- **Learn while you play** — each story carries a moral, an origin, and cultural context that makes learning feel effortless
- **Track your journey** — the Passport system rewards curiosity, showing which countries you've visited and how many stories you've read
- **No account needed** — progress is saved locally, so users can jump straight in without signup friction
- **Mobile-first** — designed to feel native on a phone, making it easy to explore a story anywhere, anytime

---

## Tech Stack

### Frontend Framework
- **React 18** with **TypeScript** — component-based UI with full type safety
- **Vite** — fast dev server and build tooling with SWC for near-instant compilation
- **React Router v6** — client-side routing between the globe, country pages, and tale pages

### 3D Globe
- **Three.js** — WebGL-powered 3D rendering engine
- **@react-three/fiber** — React renderer for Three.js, allowing the globe to be composed as React components
- **@react-three/drei** — Helper abstractions including `Html` (for rendering country flag markers inside the 3D scene), `OrbitControls` (drag-to-spin), and occlusion culling so flags disappear correctly when behind the globe
- Real Earth texture mapped onto a sphere with a custom atmosphere layer and responsive camera that adapts to portrait/landscape screens

### Styling & UI
- **Tailwind CSS v3** — utility-first styling, fully mobile-responsive
- **shadcn/ui** — accessible component primitives built on Radix UI (drawers, modals, tooltips)
- **Framer Motion** — fluid animations for the bottom drawer, badge modal, and page transitions
- **Playfair Display + Lora** (Google Fonts) — premium serif typography to give the app a literary, high-end feel
- **Lucide React** — icon set

### Data & Backend
- **Supabase** — open-source Firebase alternative providing:
  - PostgreSQL database for stories, countries, authors, and tale content
  - Auto-generated REST & realtime APIs via the JS client
  - Auth infrastructure (session persistence, token refresh)
- **TanStack React Query v5** — server state management, caching, and background refetching for country and story data
- Custom hooks (`useCountries`, `useBadges`) abstract all data-fetching logic away from UI components

### State & Logic
- Local badge/progress state persisted in `localStorage` via a custom `useBadges` hook — no login required to track reading progress
- Responsive camera logic calculates the correct FOV and Z-distance based on screen aspect ratio so the globe is always fully visible

### Deployment
- **Vercel** — zero-config deployment with automatic aliasing to the production domain
- GitHub repository connected for version control

---

## Project Structure

```
src/
├── components/
│   ├── Globe3D.tsx        # Three.js globe with country markers
│   ├── StoryDrawer.tsx    # Bottom sheet with stories & authors
│   ├── BadgeCollection.tsx
│   └── ui/                # shadcn/ui primitives
├── pages/
│   ├── Index.tsx          # Landing page (globe)
│   ├── CountryPage.tsx    # Country detail
│   └── TalePage.tsx       # Story reading view
├── hooks/
│   ├── useCountries.ts    # Supabase data fetching
│   └── useBadges.ts       # Local progress tracking
├── data/
│   ├── stories.ts         # Story & country type definitions
│   └── tales.ts           # Tale content
└── integrations/
    └── supabase/          # Auto-generated client & types
```

---

## Designed & Engineered by [Projjal Dhar](https://projjaldhar.github.io)
