# Copilot instructions for this repo

Purpose: help AI agents work productively in this Vite + React + TypeScript portfolio. Keep changes small, follow existing patterns, and verify locally with yarn commands.

## Architecture and key files
- SPA built with Vite and React Router.
  - Entry: `index.html` loads `src/main.tsx` → `src/App.tsx` → `src/routes.tsx`.
  - Routing: `BrowserRouter` with routes like `/projets-univ/:id`, `/projets-perso/:id`, `/competences`, `/scolarite`, `/cybersecurity`.
  - Pages/components live under `src/Home`, `src/Projects`, `src/Competences`, `src/Scolarite`, `src/CyberSecurity`, `src/Header`, `src/Footer`.
- i18n: `src/i18n/i18n.ts` uses i18next + react-i18next.
  - Translations in `src/i18n/locales/{en,fr}.ts`. Language persists in `localStorage.language`.
  - Use `const { t } = useTranslation();` and keys like `t('header.home')`. Don’t hardcode user-facing strings.
- Data: education content is source-of-truth in `src/data/educationData.ts` (bilingual). See `src/data/README.md` for the expected shapes and date logic.
- Styling: plain CSS per component (e.g., `Header.css`, `CyberSecurity.css`). No CSS Modules. Icons are React components in `src/assets/Icons`.

## Data flows and external integrations
- GitHub projects: `src/routes.tsx` fetches `https://api.github.com/users/goujonmael/repos`, sorts by `pushed_at`, and caches in `localStorage.github_repos`. Reuse this cache-first pattern for similar fetches.
- TryHackMe stats/certificates: `src/CyberSecurity/CyberSecurity.tsx` currently uses in-file static data. For live calls during dev, Vite proxies are configured:
  - In `vite.config.ts`: `/api` → `https://tryhackme.com/api/v2/public-profile?username=GoGoGadg3t` and `/certificates` → certificates listing.
  - In production (Netlify), `netlify.toml` has matching redirects; or use `netlify/functions/certificates.js` (CORS-enabled example) to fetch server-side.
- SPA routing support: `public/_redirects` ensures all paths serve `index.html` on Netlify.
- Analytics: `index.html` includes an external `<script>` (umami) via `stats.maelg.com`.

## Developer workflow
- Package manager: yarn classic (see `package.json#packageManager`). Prefer yarn commands.
  - Start dev server (with proxy): `yarn dev`
  - Build: `yarn build` (TypeScript build + Vite build to `dist/`)
  - Preview built app: `yarn preview`
  - Lint: `yarn lint` (ESLint config in `eslint.config.js`)
- Deployment: Netlify uses `[build] command = "yarn run build"` and `publish = "dist"` from `netlify.toml`.
  - The `deploy` script targeting `gh-pages` appears legacy; Netlify is the primary deploy path.

## Project conventions and patterns
- Navigation: use React Router `NavLink` for internal navigation in `Header` (active class via `className={({isActive}) => ...}`); keep plain `<a>` only for external URLs and file downloads.
- Persistence: user settings (language) and lightweight caches (GitHub repos) use `localStorage`.
- Assets: serve from `public/` with absolute paths (e.g., `/files/CV_GOUJON_dev.pdf`, images under `public/images/**`).
- Types live in `src/types`. Favor typed props and interfaces. TS is `strict` per `tsconfig.app.json`.

## Examples to emulate
- Add a translated string:
  1) Add keys to `src/i18n/locales/en.ts` and `fr.ts`.
  2) Use them via `const { t } = useTranslation();` → `t('home.contact.viewProfile')`.
- Add education data: update both `educationData.fr` and `educationData.en` in `src/data/educationData.ts` following the documented shape.
- Fetch with cache:
  - Read `localStorage` first; on miss, fetch, sort/transform, then persist back. See `fetchData` in `src/routes.tsx`.

## Gotchas
- CORS to TryHackMe: use the dev proxy paths (`/api`, `/certificates`) or Netlify function to avoid browser CORS errors.
- Routing on Netlify: keep `_redirects` and `netlify.toml` in sync when adding paths.
- Build outputs to `dist/`; don’t rely on `build/`.

If anything above is unclear or you spot drift (e.g., switching CyberSecurity back to live data), ask to update this file with the new pattern.
