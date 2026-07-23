# Sachin Kumar — Portfolio

A premium, dark-luxury portfolio built with React + Vite (JavaScript, not TypeScript),
Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scrolling.

## Stack

- **React 18 + Vite** — plain JavaScript (`.jsx`), no TypeScript
- **Tailwind CSS** — design tokens in `tailwind.config.js`
- **Framer Motion** — scroll reveals, stagger, layout animations
- **GSAP** — hero entrance timeline
- **Lenis** — smooth scrolling, synced to GSAP's ticker
- **React Router** — single home route + a 404 page
- **React Icons** — iconography
- **EmailJS** — contact form, no backend required

## Folder structure

```
src/
  components/    reusable UI: Navbar, Footer, CustomCursor, GlassCard, etc.
  sections/      one file per portfolio section (Hero, About, Projects, ...)
  pages/         route-level components (Home, NotFound)
  hooks/         useLenis, useActiveSection, useTypingEffect, useCounter
  animations/    Framer Motion variants + the GSAP hero timeline
  utils/         data.js — all portfolio content lives here
  assets/        put your resume/profile photo here (see assets/README.md)
```

All copy — name, role, bio, education, experience, skills, projects,
achievements — lives in **`src/utils/data.js`**. Edit that one file to update
the whole site.

## 1. Install

This project was scaffolded by hand (no network access in the build sandbox),
so dependencies have **not** been installed yet. On your machine, with Node 18+:

```bash
cd sachin-portfolio
npm install
```

## 2. Add your resume & photo

See `src/assets/README.md`. In short:
- Put `Sachin_Kumar_Resume.pdf` in `/public`.
- Optionally swap the "SK" monogram in `Hero.jsx` for a real photo.

## 3. Configure the contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) so it works without a
backend.

1. Create a free EmailJS account.
2. Add an **Email Service** (e.g. Gmail) — note the Service ID.
3. Create an **Email Template** with variables `from_name`, `from_email`,
   `message`, `to_name` — note the Template ID.
4. Copy your **Public Key** from Account → API Keys.
5. Copy `.env.example` to `.env` and fill in the three values:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these, the form will show a friendly error instead of crashing.

## 4. Run locally

```bash
npm run dev
```

Visit the printed local URL (usually `http://localhost:5173`).

## 5. Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## Deploying to Vercel

**Option A — Vercel CLI**

```bash
npm i -g vercel
vercel login
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

**Option B — Git + Vercel dashboard (recommended)**

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`
   (Vercel detects this automatically).
4. Add the three `VITE_EMAILJS_*` environment variables under
   **Project Settings → Environment Variables**.
5. Deploy. Every push to `main` auto-deploys; PRs get preview URLs.

`vercel.json` is already included with a SPA rewrite rule so React Router's
client-side routes (like the 404 page) resolve correctly on refresh.

## Performance & accessibility notes

- Sections use `whileInView` (Framer Motion) so animations only run once,
  near the viewport — no wasted work off-screen.
- `ParticleField` and Lenis both respect `prefers-reduced-motion` and pause
  when off-screen via `IntersectionObserver`.
- The custom cursor is disabled automatically on touch devices.
- Focus states are visible (`:focus-visible`) and a skip-to-content link is
  included for keyboard/screen-reader users.
- Fonts are loaded via `<link>` with `preconnect` for faster first paint.
- For the best Lighthouse score: compress your resume PDF and profile photo,
  and add a real `og-image.png` (1200×630) to `/public`.

## Customizing the theme

Colors, fonts, and animation keyframes are all defined in
`tailwind.config.js` under `theme.extend`. The core palette:

| Token       | Value      |
|-------------|------------|
| `ink`       | `#0B0B0B`  |
| `emerald`   | `#00E599`  |
| `surface`   | `#111213`  |
| `line`      | `#232427`  |
| `muted`     | `#9A9CA3`  |
