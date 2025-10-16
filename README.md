# Pieter O'Hearn - Portfolio

A polished, single-page portfolio that introduces my work as a senior full-stack engineer. It highlights experience, core skills, and ways to get in touch, all wrapped in a responsive, theme-aware UI built with modern React tooling.

## Features
- Hero section with availability badge, skill highlights, and smooth-scroll navigation
- Timeline-style About section covering experience, education, and a downloadable CV
- Featured projects layout with rich architecture breakdowns (toggleable in `App.tsx`)
- Contact panel with social cards, location, and a lightweight client-side inquiry form
- Dark/light theme toggle with preference persisted via localStorage
- Tailwind CSS 4 design tokens and shadcn-inspired component library for consistent styling

## Tech Stack
- React 18 + TypeScript
- Vite 6 for fast local development and optimized builds
- Tailwind CSS 4 utility layers
- Radix UI primitives wrapped as reusable components
- Lucide icons for crisp SVG iconography

## Getting Started
1. Install dependencies: `pnpm install` (or `npm install`)
2. Run a dev server: `pnpm run dev`
3. Open the app: http://localhost:3000 (auto-opens via Vite config)
4. Build for production: `pnpm run build` (outputs to `build/`)

## Project Structure
- `src/App.tsx` – top-level layout with ThemeProvider and section orchestration
- `src/components/` – modular sections (Hero, About, Projects, Contact, Footer) and UI primitives
- `public/Pieter-OHearn-CV.pdf` – downloadable CV served as a static asset
- `src/index.css` – Tailwind CSS layer definitions and design tokens
- `vite.config.ts` – alias map for UI dependencies and dev server configuration

## Customising Content
- Update hero copy, badges, and skill chips in `src/components/hero.tsx`
- Adjust experience highlights, education, and skill taxonomy in `src/components/about.tsx`
- Populate real project data or hide the section by toggling `<Projects />` in `src/App.tsx`
- Replace the CV by dropping a new PDF in `public/` and updating download links if needed
- Wire the contact form to a service (e.g. Formspree, Netlify Forms) or a serverless function when ready

## Deployment
- GitHub Pages: `pnpm run deploy` builds and publishes the `build/` folder to the `gh-pages` branch using the `gh-pages` CLI.
- Ensure the repo name matches the Vite base path (`/me/` in `vite.config.ts`). Update that value if you rename the repository.
- The app remains fully static and can also be hosted on any other static provider that serves the `build/` directory (Vercel, Netlify, S3 + CloudFront, etc.).
- A GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically installs dependencies, builds, and deploys the site to GitHub Pages whenever `main` changes.
