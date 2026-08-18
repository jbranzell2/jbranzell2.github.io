---
name: new-project-images
description: Converts every image for a new portfolio project to AVIF (quality 80) and renders its hero/cover image through the shared <HeroImage> component so it gets fetchPriority="high" automatically. Use this whenever the user adds a new project to this site — "add a new project", "create a page for X", "I added images for the Y case study", dropping new Figma-exported images into src/imports/<ProjectName>/, or building out a new src/pages/*.tsx project page — even if they don't mention AVIF, image conversion, compression, or fetchpriority by name. Every existing project on this site (Electrolux, Alster, Apoteket, etc.) follows this pattern, so a new one should too — skipping it quietly regresses page load performance and leaves the new project inconsistent with the rest of the site.
---

# New project images: AVIF + hero priority

## Why this exists

Every project page on this site follows two conventions established across
the whole codebase (see `src/pages/Electrolux.tsx` or `src/pages/Apoteket.tsx`
for reference):

1. **Images are AVIF**, not the PNG/JPEG that comes straight out of a Figma
   export (which is often WebP data wearing a `.png` extension — Figma's
   export quirk, not yours to worry about; the converter sniffs real content
   either way). AVIF at quality 80 roughly halves the payload for photos and
   shrinks graphics/screenshots too, with no visible quality loss — this was
   verified by eye against both a photo and a text-heavy screenshot before
   settling on 80 as the default.
2. **The hero/cover image gets `fetchPriority="high"`,** via the shared
   `src/components/HeroImage.tsx` component rather than a hand-typed
   attribute. It's imported once but rendered twice — a mobile variant and a
   desktop variant, in different parts of the page's layout — because only
   one is visible per viewport but both are candidates for LCP (Largest
   Contentful Paint), so both need the hint. `HeroImage` bakes that in so a
   new page can't forget it.

A new project that skips these will still work, it'll just quietly be slower
to load and inconsistent with everything else on the site. That's the gap
this skill closes.

## Step 1 — Convert the new project's images to AVIF

1. Install `sharp` temporarily. It's not a project dependency — just a
   one-time conversion tool, so don't let it linger in `package.json`:
   ```bash
   npm install --no-save sharp
   ```
2. Run the bundled script on the new project's image directory (e.g.
   `src/imports/NewProject` — existing projects use a `Desktop<Name>`
   folder naming convention, but match whatever the new images actually
   landed in):
   ```bash
   node .claude/skills/new-project-images/scripts/convert-to-avif.mjs src/imports/NewProject
   ```
   This recursively converts every `.png`/`.jpg`/`.jpeg` under that
   directory to a same-named `.avif` at quality 80 and reports the size
   savings. Pass a second argument to use a different quality if the user
   asks for one — 80 is the site's established default, not a hard rule.
3. Update every import statement that references the old files — in the
   new project's page component, and anywhere else that imports them — from
   `.png`/`.jpg`/`.jpeg` to `.avif`. For example:
   ```bash
   sed -i '' -E 's|(@/imports/NewProject/[^"]*)\.(png|jpe?g)|\1.avif|g' src/pages/NewProject.tsx
   ```
4. Verify (see below), then delete the original source files — don't leave
   both formats sitting in the repo:
   ```bash
   find src/imports/NewProject -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -delete
   ```
5. Remove the temporary `sharp` install so `node_modules` matches
   `package.json` again:
   ```bash
   rm -rf node_modules && npm install
   ```

If the user is adding images to an *existing* project rather than a
brand-new one, the same five steps apply unchanged — just point the script
at wherever the new images landed.

## Step 2 — Render the hero image through `<HeroImage>`

Find the project's cover/hero image and render it with
`src/components/HeroImage.tsx` instead of a raw `<img>` — once where the
mobile hero belongs, once where the desktop hero belongs (they live in
different parts of the page's layout, not side by side, so this is two call
sites, not one):

```tsx
import HeroImage from "@/components/HeroImage";

{/* Mobile */}
<HeroImage variant="mobile" src={imgCover} alt="Project app" />

{/* Desktop */}
<HeroImage variant="desktop" src={imgCover} alt="Project app" />
```

The mobile variant defaults to `aspect-[390/339]`; pass
`mobileAspectClass="aspect-[390/XXX]"` if the new project's cover image uses a
different ratio (check the other prop against the actual image dimensions).
`fetchPriority="high"` is baked into the component — you don't add it
yourself, and you can't forget it on a new page.

Leave every other image on the page — screenshots, galleries, secondary
photos — as a plain `<img>` at default priority. `fetchPriority="high"` is a
scarce resource; marking everything high defeats the point of marking
anything high.

If a project's hero doesn't follow the mobile/desktop two-image pattern (e.g.
a single responsive `<img>` with no breakpoint duplication, or a bespoke
layout like `src/pages/Alster.tsx`'s desktop hero), `HeroImage` doesn't fit —
set `fetchPriority="high"` on that one image by hand instead. The goal is
"the LCP candidate(s) load first," not "everything must use the component."

## Verify

Use the same checks established throughout this project — don't rely on the
screenshot/preview tool alone for this, it's been unreliable in this
environment:

```bash
npx tsc --noEmit
npm run build
```

Then, with the dev server running, confirm the new images load as `.avif`
with `200 OK` (check Network requests), and confirm the hero `<img>`
elements actually carry the attribute — run this in the browser console or
via the JS-eval tool:

```js
Array.from(document.querySelectorAll('img')).map(img => ({alt: img.alt, fp: img.getAttribute('fetchpriority')}))
```

Exactly the hero image(s) should show `fp: "high"` — everything else on the
page should be `null`.
