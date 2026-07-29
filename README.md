# calnetstudy

Study notes for every subject, in one searchable, phone-friendly site.

Markdown in → static site out. No database, no CMS, no framework.

---

## Adding notes

1. Create a folder for the unit under `content/` — the folder name is the unit code:

   ```
   content/EFB211/
   ```

2. Drop `.md` files in it. Number them to control the order:

   ```
   content/EFB211/00-overview.md
   content/EFB211/01-topic-1.md
   ```

   The first `# Heading` in each file becomes the document title.

3. *(Optional)* Describe the unit in `content/subjects.json` so it gets a
   proper name and colour on the home screen:

   ```json
   {
     "EFB211": {
       "name": "Financial Markets",
       "institution": "QUT",
       "term": "2nd Year · Sem 1",
       "colour": "#2f8f6b",
       "description": "One line about the unit."
     }
   }
   ```

4. Commit and push. Vercel rebuilds automatically.

   ```bash
   git add -A && git commit -m "Add EFB211 notes" && git push
   ```

That's the whole workflow. No step 5.

---

## Markdown features that work

| Feature | Notes |
|---|---|
| Tables | Scroll horizontally on mobile instead of breaking the layout |
| Fenced code blocks | Used for formulas — preserved verbatim, scroll sideways |
| `<details><summary>` | Tap-to-reveal answers for practice questions |
| Blockquotes | Rendered as highlighted callouts |
| Headings | `##` and `###` become sidebar navigation and search anchors |

Every `##`/`###` becomes a deep-linkable anchor, so search results jump
straight to the right section.

---

## Local preview

```bash
npm install
npm run dev          # → http://localhost:4321
```

`npm run build` alone just regenerates `public/data/`.

---

## How it works

```
content/<UNIT>/*.md
        │
        │  node build.js   (runs on every Vercel deploy)
        ▼
public/data/manifest.json          subjects, docs, table of contents
public/data/docs/<unit>__<doc>.json  pre-rendered HTML
public/data/search.json            one record per section, for search
        │
        ▼
public/index.html + app.js         reads the JSON, renders, caches offline
```

Markdown is rendered to HTML **at build time**, so the phone never loads a
markdown parser. The whole client is one HTML file, one stylesheet and one
script with no dependencies.

`public/data/` is generated and gitignored — never edit it by hand.

---

## Offline / home screen

The site is a PWA. On iOS: Share → **Add to Home Screen**. On Android:
menu → **Install app**. It then opens fullscreen, and any note you've
already opened stays readable with no connection.

The service worker (`public/sw.js`) caches the shell and serves notes
stale-while-revalidate. Bump the `CACHE` constant if you change the shell
and want to force a refresh.

---

## Project layout

```
build.js                 markdown → JSON build step
serve.js                 local preview server
vercel.json              build config + cache headers
content/subjects.json    unit metadata
content/<UNIT>/*.md      the actual notes
public/                  the site (index.html, styles.css, app.js, sw.js, icons)
public/data/             generated — gitignored
```
