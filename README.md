# Yasir Hassan — Portfolio

Personal portfolio site. Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 +
Framer Motion, deployed on Vercel's free tier.

- **Dark by default**, with a light mode toggle
- Every page has real SEO metadata + Open Graph images
- A private `/stats` page and a subtle footer counter, backed by Redis
- **All content lives in `src/data/` — you should never need to edit a component
  to change what's on the site.**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site works fully out of
the box — the visit counter and `/stats` page just stay quietly hidden until you
wire up a Redis database (see [Analytics setup](#analytics-setup) below).

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build locally
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
```

## Editing content

This is the part you'll actually touch. Every page reads from a typed object (or
array of objects) in `src/data/`. Components never contain hardcoded copy — they
just render whatever's in these files, so editing the site is editing data, not
JSX.

| File | Controls |
|---|---|
| `src/data/site.ts` | Your name, tagline, resume path, social links, and the navbar links |
| `src/data/experience.ts` | The `/experience` timeline |
| `src/data/projects.ts` | The `/projects` grid and every `/projects/[slug]` detail page |
| `src/data/skills.ts` | The three grouped cards on `/skills` |
| `src/data/education.ts` | School info, coursework tags, and the leadership subsection on `/education` |

Shared shapes for all of the above live in `src/data/types.ts` — open that file
first if you want to see exactly what fields are available.

### Example: adding a new project

Open `src/data/projects.ts` and add an object to the `projects` array:

```ts
{
  slug: "my-new-project",           // becomes the URL: /projects/my-new-project
  name: "My New Project",
  summary: "One line for the card and home page teaser.",
  description: "A longer paragraph shown on the detail page.",
  tech: ["Python", "FastAPI", "Docker"],
  github: "https://github.com/yasirh567-stack/my-new-project",
  liveDemo: "https://my-new-project.vercel.app", // omit this line entirely if you don't have one — the UI adapts automatically
  coverImage: {
    src: "/projects/my-new-project/cover.png",
    alt: "Short description of the screenshot for screen readers",
  },
  images: [
    { src: "/projects/my-new-project/cover.png", alt: "..." },
    { src: "/projects/my-new-project/screenshot-1.png", alt: "..." },
  ],
},
```

Then drop the actual image files in `public/projects/my-new-project/`. That's the
whole change — no component edits, and the new project immediately appears in the
`/projects` grid, gets its own `/projects/my-new-project` page with a screenshot
carousel, and gets its own auto-generated Open Graph share image.

Mark a project `featured: true` to have it show up in the two-project teaser on
the home page (the two `featured` projects are shown first; without any featured
flags, the first two projects in the array are used).

### Project screenshots

- **Cover image**: 16:10 aspect ratio (e.g. **1280×800**) — used on cards and as
  the first carousel slide.
- **Gallery screenshots**: same 16:10 aspect ratio works best since the carousel
  frame is fixed at that ratio; any resolution above ~1200px wide looks sharp.
- Placeholder SVGs already exist at `public/projects/<slug>/` with the exact
  filenames referenced in `projects.ts` — just overwrite them with real PNG/JPG
  screenshots and update the `src` extension in `projects.ts` to match (or keep
  the `.svg` filenames and export your screenshots as SVG, either works).

### Resume

Drop your resume at `public/resume.pdf`. Every "Resume" button on the site
(`src/data/site.ts` → `resumeUrl`) already points there — nothing else to wire up.

## Design system

- **Colors, fonts, dark/light values**: `src/app/globals.css` — Tailwind 4's
  CSS-first `@theme` config. `:root` holds the dark palette (the default);
  `.light` overrides it. Change `--accent` in both blocks to re-theme the whole
  site.
- **Fonts**: Space Grotesk (headings) + Inter (body), loaded via `next/font/google`
  in `src/app/layout.tsx`.
- **Skill icons**: `src/components/SimpleIcon.tsx` renders brand marks from the
  [simple-icons](https://simpleicons.org) package by slug. In `src/data/skills.ts`,
  set `icon: "python"` etc.; omit `icon` entirely for anything without a brand
  mark (SQL, Verilog, Playwright currently do this) and a plain monogram badge
  is shown instead.

## Analytics setup

Two independent systems, both optional — the site works fine with neither
configured.

### 1. Vercel Analytics (page views, visitors)

Already wired up (`@vercel/analytics`) in the root layout. It activates
automatically the moment the site is deployed on Vercel — nothing to configure.
View results in your Vercel project's **Analytics** tab.

### 2. Custom visit counter + `/stats` page

A footer counter and a private `/stats` page (not linked in the navbar —
visit it directly at `/stats`) backed by Redis. One session only ever counts as
one visit, via a `sessionStorage` flag.

To turn it on:

1. In the [Vercel Dashboard](https://vercel.com/dashboard), open your project →
   **Storage** → **Create Database** → choose **KV** (Vercel Marketplace,
   Upstash-backed) *or* go directly to [upstash.com](https://upstash.com) and
   create a free Redis database.
2. Copy the REST URL and REST token it gives you.
3. Set them as environment variables — locally in `.env.local` (copy
   `.env.example`), and in your Vercel project's **Settings → Environment
   Variables** for production:

   ```
   UPSTASH_REDIS_REST_URL=...
   UPSTASH_REDIS_REST_TOKEN=...
   ```

   (If you provisioned Vercel KV instead of Upstash directly, Vercel gives you
   `KV_REST_API_URL` / `KV_REST_API_TOKEN` — `src/lib/redis.ts` accepts either
   naming, so no code changes are needed either way.)
4. Redeploy (or restart `npm run dev`). Visits now increment automatically and
   `/stats` shows the running total plus a per-page breakdown.

Until these env vars are set, the counter component renders nothing and `/stats`
shows a short explanation instead of an error — see `src/lib/redis.ts`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/new), import the repo — it
   auto-detects Next.js, no config needed.
3. Add the `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` env vars if
   you want the visit counter (see above).
4. Before your first deploy (or any time after), update `src/data/site.ts` →
   `url` to your real production URL — it feeds the sitemap, canonical URLs,
   and Open Graph tags.
5. Deploy. Free tier covers this project comfortably.

## Project structure

```
src/
  app/                    routes — one folder per page, plus icon.tsx,
                           opengraph-image.tsx, sitemap.ts, robots.ts,
                           and the api/visit route handler
  components/              presentational components; content comes in via props
  data/                    <- edit this to change what's on the site
  lib/                     redis client, SEO metadata helper, cn() utility
public/
  projects/<slug>/         project screenshots
  resume.pdf               drop your resume here (not included)
```
