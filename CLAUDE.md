# CLAUDE.md — calnetstudy

Context for Claude Code working in this repo.

## What this is

A static site that turns Cal's university study notes (markdown) into a
searchable, phone-friendly reader. One repo, all subjects. Built for QUT
coursework; EFB335 (Investments) is the first unit in it.

Owner: Cal — `cal@calnetcorp.com.au`, GitHub `calnettle`, Vercel team
`calnettles-projects` (`team_s8QArCHFSfqntpC8VX7s4L9e`).

## Status — live

| | |
|---|---|
| Site | <https://calnetstudy.vercel.app> |
| GitHub | `calnettle/calnetstudy` (public), branch `master` |
| Vercel | project `calnetstudy` under `calnettles-projects` |
| Content | EFB335 complete (6 docs, ~10.8k words) |

To ship a change: commit, `git push`, then `vercel --prod --scope
calnettles-projects` from this folder. `vercel.json` already sets the build
command and output directory, so there is no manual build config.

**Do not try to deploy via the Vercel MCP.** It has read scope only —
`deploy_to_vercel` returns `403 forbidden: You don't have permission to
create a project`. Listing projects works fine. Use the `vercel` CLI from
Cal's machine, which is already authenticated as `calnettle`.

## Commands

```bash
npm install
npm run dev      # build + serve on http://localhost:4321
npm run build    # regenerate public/data/ and the icons only
```

There is no test suite. To verify a change, run a clean-room build —
this is exactly what Vercel does:

```bash
git clone . /tmp/verify && cd /tmp/verify && npm install && node build.js
```

Expect: 6 documents, 128 searchable sections, no `<hundefined>` in output.

## Architecture

```
content/<UNIT>/*.md
        │  node build.js
        ▼
public/data/manifest.json              subjects, docs, per-doc h2 list
public/data/docs/<unit>__<doc>.json    { code, id, title, html, toc }
public/data/search.json                one record per h1/h2/h3 section
public/icon-*.png                      generated, not committed
        │
        ▼
public/index.html + app.js             fetches JSON, renders, caches offline
```

Markdown → HTML happens **at build time**. The client ships no markdown
parser and no dependencies. Keep it that way — the whole point is that a
phone on bad reception loads three small files.

### Deliberate choices worth preserving

- **No framework.** Vanilla JS, hash routing, ~450 lines. Don't introduce
  React/Vite unless there's a real reason.
- **Generated files are gitignored** — `public/data/`, `public/icon-*.png`.
  Never commit them; never hand-edit them.
- **Icons are drawn in `build.js`** with a pure-Node PNG encoder (zlib +
  CRC32, no image deps) so the repo stays text-only. Restyle by editing
  the numbers in `makeIcon()`.
- **Search index is section-level**, not document-level, so a hit deep-links
  to the right heading via `#/<UNIT>/<doc-id>/<anchor>`.

## Gotchas

**`marked` renderer API.** Pinned to `^12.0.2`. v12 calls
`renderer.heading(text, level, raw)` positionally; v13+ passes a token
object. `render()` in `build.js` handles both and **throws** if headings
come out as `<hundefined>`. If you bump `marked`, run the build and confirm
it doesn't throw — this bug is silent otherwise and destroys every heading
id, the TOC, and search anchors.

**`stripHtml` must decode entities, not delete them.** An earlier version
regexed `&[a-z]+;` to a space, which silently ate the `&` from the
"Formula Sheet & Exam Traps" title. Entities are decoded via the `ENTITIES`
map — extend it rather than reintroducing a blanket strip.

**Recursive delete can fail on mounted filesystems.** `rm()` in `build.js`
falls back to best-effort per-file unlink because `fs.rmSync` throws
`EPERM` on some FUSE mounts. Don't "simplify" it back to a bare `rmSync`.

**Service worker caching.** `public/sw.js` defines `CACHE =
'calnetstudy-vN'` (currently `v2`). If you change the shell (`index.html`,
`app.js`, `styles.css`), bump that constant or returning visitors keep the
stale shell.

**`[hidden]` needs the `!important` rule in `styles.css`.** The search
overlay, the scrim and the offline badge are toggled by setting the
`hidden` attribute from `app.js`. The UA stylesheet's
`[hidden] { display: none }` loses to *any* author rule that sets
`display`, so `.search { display: flex }` silently kept the overlay on
screen over the whole app — the site rendered as a blank search page and
nothing was tappable. `[hidden] { display: none !important; }` near the top
of `styles.css` is what makes the attribute reliable. Don't remove it, and
don't switch these elements to a `.is-open` class without it.

**Deep links scroll twice, on purpose.** `scrollToAnchor()` in `app.js`
aligns the heading 72px below the top bar, then re-aligns after
`document.fonts.ready`. On a cold load the first scroll runs before the
webfont swaps in, and the reflow drags the target ~195px out of place.
Both scrolls temporarily clear `html{scroll-behavior:smooth}` so a
correction never animates. Verified with Playwright against a real browser
— note that a headless/hidden tab never fires `requestAnimationFrame`, so
scroll behaviour cannot be tested in one.

## Adding content

1. `content/<UNIT-CODE>/NN-slug.md` — numeric prefix controls ordering.
2. First `# Heading` in the file becomes the document title.
3. Optionally add the unit to `content/subjects.json` for its display name,
   term, colour and description.
4. Commit and push. Vercel rebuilds.

Markdown that's actively supported and should keep working: GFM tables
(wrapped in a horizontal scroller by `app.js`), fenced code blocks (used
for formulas — never reflow these), `<details><summary>` for tap-to-reveal
practice answers, and blockquotes (rendered as amber callouts).

## About the EFB335 notes

Compiled from Cal's Topic 1 and Topic 2 lecture slides, Tutorial 1
questions, and the Topic 1 Excel workbooks, which live in
`../2nd Year/Sem 2/EFB335/`. Every worked number was verified in Python.

`content/EFB335/` is now the **source of truth**. A combined
`EFB335 Revision Notes.md` still exists in the unit folder as the original
draft — if Cal asks to update notes, confirm which copy he means.

Two errors in the unit's supplied tutorial answers are flagged inline in
`03-tutorial-1-solutions.md` and should not be "corrected" back:

- **Ch 3 Problem 2(c)** — the answer sheet says the margin call price is
  \$20; it is **\$30**. At \$20 the position is worth less than the loan.
- **Ch 3 Problem 4** — asks for a rate of return, but the answer sheet
  stops at a dollar profit, and the interest treatment is ambiguous. All
  three readings are shown; Reilly & Brown's convention gives 41.73%.

If new topics get added, match the existing structure: concept → formula →
worked example → exam trap callout, with a checkpoint quiz in `<details>`.
