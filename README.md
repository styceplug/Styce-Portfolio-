# styce.ng — Oluwaferanmi Olotu portfolio

React + Vite portfolio site. Every page is a real URL that is prerendered to
static HTML at build time, so each one has its own title, description,
canonical link, and structured data.

## Commands

```bash
npm run dev      # dev server (http://localhost:5173)
npm run build    # client build → SSR build → prerender every route
npm run preview  # serve dist/ (see the note about trailing slashes below)
npm run lint
```

## Routes

| URL | Page |
| --- | --- |
| `/` | Home — a tour of sections, each linking to its full page |
| `/about` | About: intro, proof, technical arsenal, journey |
| `/work` | Work index — every project, filterable by category |
| `/work/:slug` | Project case study (one per entry in `src/data/projects.js`) |
| `/blog` | Blog index |
| `/blog/:slug` | Blog post |
| `/contact` | Contact channels |
| anything else | 404 (`noindex`, served from `dist/404.html`) |

Routes are declared in `src/router/routes.js`, matched by the small
history-API router in `src/router/Router.jsx`. `src/seo/pageMeta.js` is the
single source of truth for head tags: the app applies it on client navigation,
and `scripts/prerender.mjs` bakes it into each static file.

Sections live inside pages, are addressed by hash (`/#work`, `/about#journey`),
and never change the URL path.

## Project layout

```
src/
  router/      route table + history router (Link, useRoute, useNavigate)
  seo/         per-route metadata, structured data, document head sync
  data/        site config, projects, posts, about content
  layout/      the shell every page renders inside (header, menu, rail, footer)
  components/  reusable pieces (section primitive, cards, project visuals)
  sections/    page sections (hero, trust, work preview, highlights, journal…)
  pages/       one file per route
  styles/      base → layout → components → sections → pages, imported by index.css
```

## Build output

`npm run build` writes a directory-per-route:

```
dist/index.html
dist/about/index.html
dist/work/index.html
dist/work/<slug>/index.html
dist/blog/<slug>/index.html
dist/404.html
dist/sitemap.xml        (generated — do not hand-edit)
```

## Deployment (nginx)

The static server must try the directory index before falling back, otherwise
extensionless URLs get the home page's HTML instead of their own:

```nginx
location / {
    try_files $uri $uri/index.html /404.html;
}
```

`npm run preview` does not do this (it falls back to `index.html` for
extensionless paths), so `/about` looks wrong there while `/about/` is
correct. That is a quirk of the preview server, not of the build.
