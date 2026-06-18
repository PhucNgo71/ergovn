# Ergovn — Distributor & Project Studio

A React + Vite site for Ergovn, distributor of premium ergonomic office
furniture brands in Vietnam. This is a B2B / project-inquiry site — all
retail purchases are routed out to the Haravan storefront at
**www.tfw.space**, operated by The First Workshop.

## Run locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with `npm run preview`.

## Before launch — things to finish

1. **Contact form endpoint** — `src/components/ContactSection.jsx` has a
   placeholder `FORM_ENDPOINT`. Sign up at https://formspree.io (free),
   create a form, and paste your real endpoint URL in.
2. **Real photography** — `src/data/brands.js` and `src/data/projects.js`
   currently point to Unsplash placeholder photo IDs. Replace `photo` with
   real press-kit imagery from each brand and real project photography.
3. **Confirm dealer vs. collaborator status** — each brand in
   `src/data/brands.js` has a `relationship` field set to either `"Dealer"`
   or `"Collaborator"`. Double check these are accurate before launch.
4. **UTM links** — every outbound "shop" link uses `shopLink()` from
   `src/data/config.js`, which appends UTM params pointing to
   `https://www.tfw.space`. Update `HARAVAN_STORE` there if the storefront
   URL ever changes.

## Deploying with GitHub + Vercel

1. Create a new GitHub repo (e.g. `ergovn-site`), don't initialize it with
   any files.
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial Ergovn site build"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ergovn-site.git
   git push -u origin main
   ```
3. Go to https://vercel.com → Import Project → select your repo. Vercel
   auto-detects Vite and deploys. Every future `git push` to `main`
   redeploys automatically.

## Project structure

```
src/
  data/
    config.js     — design tokens, Haravan link helper, bilingual copy
    brands.js     — the 8 dealer/collaborator brands
    projects.js   — case study project data
  components/
    Header.jsx         — topbar + sticky nav
    Hero.jsx            — auto-advancing photo carousel
    Reveal.jsx           — scroll-reveal animation wrapper
    BrandPlate.jsx        — single brand photo card
    MakersSection.jsx     — brand grid + horizontal scroller
    ProjectsSection.jsx   — project cards + parallax band
    ContactSection.jsx    — project inquiry form
    Footer.jsx             — closing CTA + footer
  App.jsx           — assembles everything
```
