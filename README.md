# Ayush Prajapat — Portfolio

Personal portfolio site built with **Next.js 14 (App Router)** and **TypeScript**,
statically exported for **GitHub Pages**. Minimal/clean design with a light + dark
theme toggle.

## Tech

- Next.js 14 static export (`output: "export"`)
- TypeScript, React 18
- Hand-written CSS with CSS variables (no UI framework)
- Self-hosted Inter font via `next/font`
- Zero runtime dependencies beyond React

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

> In dev the site is served from `/`. In a production build it's served from
> `/Portfolio` (the GitHub Pages project path) — see `next.config.mjs`.

## Build

```bash
npm run build
```

The static site is emitted to `./out`.

## Editing content

All text lives in one file: [`lib/content.ts`](lib/content.ts). Update your bio,
projects, skills, experience, achievements, contributions, and contact links
there — no component changes needed.

## Deploying to GitHub Pages

1. Push this repo to `https://github.com/AyushPrajapattt/Portfolio` on the `main` branch.
   Make sure `package-lock.json` is committed (the CI uses `npm ci`).
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and
   select **GitHub Actions**.
3. Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
   which builds the site and deploys it.
4. Your site will be live at **https://ayushprajapattt.github.io/Portfolio/**

### Using a different repo name

The path prefix is set in `next.config.mjs` via the `repo` constant. If you rename
the repo (or use a root `ayushprajapattt.github.io` repo), update `repo` accordingly
(use `""` for a root user/organization site).
