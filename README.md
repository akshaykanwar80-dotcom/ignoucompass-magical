# IGNOU Compass

IGNOU Compass is a single-page site that contains all the useful official links
IGNOU students need — admissions, re-registration, assignments, exam forms,
results, grade card, eGyanKosh study material, the digital library, and
grievance support — in one place, with no login and no backend required.

It also includes two small tools:

- **My courses** — save your programme, semester, and course codes once. The
  page turns them into ready-made shortcuts to search for books, assignments,
  and previous papers for each course. This is stored only in your browser's
  local storage; nothing is sent to a server.
- **Find material** — type any course code to get direct, site-restricted
  search links into eGyanKosh, the assignment pages, and the previous
  question paper archive.

The page carries a magical, wizarding-academy visual theme — parchment
panels, engraved gold headings, a slowly turning compass watermark, and a
drifting trail of gold dust — built from original SVG artwork in `assets/`.

## Why there's no "latest notices" feed

An earlier version of this page had a notices section with specific dates
and headlines. Those were placeholder content that looked real but weren't —
IGNOU's actual deadlines and notices change too often for a static page to
track safely. Instead, the "Stay updated" section links directly to the
exact official pages where real announcements appear, so you're always
checking the source itself.

## Files

- `index.html` — page structure and content
- `styles.css` — styling, animation, and the magical theme
- `app.js` — link data, saved-course logic, cursor-dust effect
- `manifest.webmanifest` — install metadata (used by the browser's own
  "Add to Home screen" / install icon, where supported)
- `icon.svg` — app icon
- `assets/` — original SVG artwork (compass rose, wax seal, corner
  flourishes, sparkles, textures)

## Local test

```
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

This is a static site — any static host works: GitHub Pages, Netlify,
Cloudflare Pages, or Vercel. Opening `index.html` directly via `file://`
works fine for browsing links.

## A note on the links

Every link on this page points to an official `ignou.ac.in`,
`samarth.edu.in`, `egyankosh.ac.in`, or `webservices.ignou.ac.in` address.
This project isn't affiliated with IGNOU — it's just a directory. Always
double-check dates and requirements on IGNOU's own pages before acting on
them.
