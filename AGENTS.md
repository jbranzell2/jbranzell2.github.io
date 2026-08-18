# johan-branzell-portfolio

Johan Branzell's portfolio site — React + Vite + Tailwind CSS v4, deployed to
GitHub Pages at [jbranzell2.github.io](https://jbranzell2.github.io).

## Development

```bash
npm install
npm run dev      # dev server on http://localhost:8443 (or $PORT)
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Deployment

Every push to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which builds the site and publishes it via GitHub Pages — no manual deploy
step needed. [public/404.html](public/404.html) implements the standard
[spa-github-pages](https://github.com/rafgraph/spa-github-pages) redirect
trick so direct loads and refreshes of a route like `/electrolux` work
correctly on GitHub Pages' static hosting.

## Project Structure

- `src/main.tsx` — React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` — Route table (react-router-dom `BrowserRouter`), one `<Route>` per page
- `src/pages/*.tsx` — One component per page (Home, About, and one per project)
- `src/components/Header.tsx` / `Footer.tsx` — Shared header/footer used by every page
- `src/ScrollToTop.tsx` — Resets scroll position on route change
- `src/imports/**/*.png` — Image assets (from the original Figma export; the `index.tsx` files that used to accompany them were unused dead code and have been removed)
- `src/index.css` — Global CSS entrypoint, Tailwind import, and self-hosted `@font-face` rules (`public/fonts/`)
- `index.html` — Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `vite.config.ts` — Vite configuration: React, Tailwind CSS v4, and the `@` alias for `src`

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin
configured in `vite.config.ts`. `src/index.css` imports Tailwind with
`@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put
global CSS or theme customization in `src/index.css`. Prefer Tailwind's
default design-system scale (`px-6`, `text-base`, `gap-4`, …) over arbitrary
bracket values (`px-[24px]`); only use bracket notation for the custom
Figma-derived sizes that don't land on that scale.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.
