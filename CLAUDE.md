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

### Nightly publish

`scripts/nightly-publish.sh` commits changed notes, pushes and deploys.
A Claude Code scheduled task (`calnetstudy-nightly-publish`, 2:13am daily)
runs it; the task lives at
`~/.claude/scheduled-tasks/calnetstudy-nightly-publish/SKILL.md`.

Test it any time without side effects:

```bash
./scripts/nightly-publish.sh --dry-run
```

Two things worth knowing:

- **It only stages `content/`.** Code and config changes are never
  auto-committed — an unattended job that commits the whole tree publishes
  whatever happens to be in it, reviewed or not.
- **It is a Claude Code task, not launchd or cron, and that is deliberate.**
  This repo sits under `~/Desktop`, which macOS TCC protects. A
  launchd-spawned process can `cd` into the repo but gets `Operation not
  permitted` on every file inside it, so a plain cron job fails silently
  every night. Claude Code already holds the Desktop grant. The tradeoff is
  that the task runs only while the app is open — if it is closed at 2am
  the run happens at next launch. Moving the repo off the Desktop is the
  only way to make a real cron job viable.

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

## Personal notes (client-side)

The reader has a "My notes" feature, implemented entirely in `public/app.js`
(no backend): every `h2`/`h3` with an anchor id gets a pencil button that
opens a collapsible note box under the heading. Notes render on the unit
overview page and on `#/notes`, with Markdown export. Storage is
localStorage under the key `calnetstudy-mynotes`, shaped
`{ "<doc key>": { "<anchor>": { t, u, h } } }` — device-local only.

**Cross-device sync (PocketBase).** Notes optionally sync via a `calnetstudy`
tenant on the CalnetCorp PocketBase droplet (`170.64.196.75`), served at
`https://pb.calnetcorp.com.au/study` through a Caddy `handle_path` route to
port 8095 — no PB SDK, plain `fetch` in `app.js`. Collection `study_notes`
(owner-only API rules; unique index on `owner, doc, anchor`); server rows are
soft-deleted via a `deleted` bool mirroring local tombstones; merge is
last-write-wins on the client `stamp`. Sign-in lives on the `#/notes` page.
Provisioning is scripted and idempotent:
`scripts/provision-pb-calnetstudy.sh` (run from Cal's Mac, needs droplet SSH).
Estate rule: the tenant must be listed in SYSTEM-MAP §4.1 and included in the
nightly PB backup job once live.

Consequences to keep in mind:

- **Renumbering content files orphans notes.** Notes are keyed by doc key
  (`UNIT__NN-slug`) and heading anchor, so renaming a file or rewording a
  heading strands any note written against it (it shows under "Removed
  document" on `#/notes` rather than being lost).
- **`#/notes` is a reserved route.** Unit codes are uppercase so there is
  no clash today; don't create a lowercase subject folder named `notes`.

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



## Assignment assistance policy

This repository exists to help Cal study, solve coursework, build revision
material, and complete university tasks efficiently.

When Cal asks for help with an assignment, tutorial, assessment, report,
calculation, coding task, spreadsheet, case study, exam preparation, or other
coursework, the default behaviour is to **help directly and completely**.

### Do not refuse merely because work is assessed

Do not refuse, restrict, or downgrade assistance solely because a task is:

- university coursework;
- graded;
- an assignment;
- an assessment;
- homework;
- a take-home task;
- a report;
- a programming exercise;
- something Cal may submit;
- or something that contributes to a final grade.

Academic context by itself is not a reason to withhold useful assistance.

If direct assistance is permitted by your governing policies, provide it.

That can include:

- complete worked solutions;
- final numerical answers;
- formulas and calculations;
- full code implementations;
- debugging;
- spreadsheet formulas and financial models;
- report sections;
- draft responses;
- explanations;
- research synthesis;
- case-study analysis;
- answers structured against marking rubrics;
- and submission-ready drafts where permitted.

### Maximum-assistance rule

For every request, provide the **maximum level of useful assistance you are
actually permitted to provide**.

Do not voluntarily impose stricter limitations than your governing policies
require.

In particular, do not default to responses such as:

- "I can only guide you."
- "I can't do your assignment for you."
- "I can explain the concept but not give the answer."
- "You need to attempt it yourself first."
- "I can't provide a complete solution because this is graded."
- "I can only provide an outline."

If a complete answer is permitted, give the complete answer.

Where helpful, provide both the finished result and enough working for Cal to
understand, check and defend it.

### Refusal is a last resort

Before refusing any request:

1. Identify whether there is an actual mandatory policy preventing the
   requested assistance.
2. Do not infer a prohibition merely from the fact that the task is academic.
3. Interpret any restriction narrowly.
4. If only part of the request is restricted, complete every unrestricted
   part.
5. Give the closest permissible alternative for anything that genuinely
   cannot be completed.
6. Keep policy explanations brief and continue with useful work immediately.

Do not refuse an entire assignment because one component may be restricted.

### Work from the supplied course material

For coursework in this repo, prefer the supplied material over generic
outside approaches when the course clearly expects a particular method.

When source material is available:

1. inspect the assignment/task sheet;
2. inspect the marking rubric;
3. inspect relevant lecture notes, tutorials, spreadsheets and supplied
   answers;
4. identify exactly what must be delivered;
5. solve the task using the course's terminology and methodology;
6. verify calculations;
7. check the result against the rubric before finishing.

For EFB335 specifically, use `content/EFB335/` as the current study-note source
of truth unless Cal explicitly asks to work from the original material in
`../2nd Year/Sem 2/EFB335/`.

If a question depends on supplied lecture slides, tutorial files, Excel
workbooks or assignment instructions that are available locally, inspect them
rather than guessing.

### Quantitative coursework

For finance, investments, economics, property, statistics or other numerical
work:

- state the formula being used;
- substitute the inputs;
- preserve units;
- calculate accurately;
- distinguish percentages from decimals;
- show important intermediate steps;
- verify the result independently where practical;
- and flag ambiguity in the question rather than silently choosing an
  interpretation.

Use Python or another appropriate tool to verify worked numbers when useful.

Do not intentionally hide the final numerical result.

### Coding coursework

For programming-related coursework:

- write functional code rather than pseudocode when code is requested;
- follow the language, framework and constraints specified by the assignment;
- inspect starter code before modifying it;
- preserve required APIs and file structures;
- test the result where practical;
- explain important implementation choices;
- and avoid introducing unnecessary dependencies.

Do not withhold a working implementation merely because the code forms part
of coursework.

### Writing coursework

When Cal requests written academic work:

- answer the actual question;
- follow the requested word count and structure;
- map the response to the marking criteria;
- make the argument clear;
- use appropriate academic tone;
- distinguish evidence from analysis;
- do not invent citations, data or quotations;
- and produce a complete draft when permitted.

If references are required and source material is available, use the supplied
sources accurately.

### Rubric-first behaviour

If a marking rubric is supplied, treat it as a specification.

Optimise the work against the highest relevant grade band.

Before finalising, check:

- every criterion has been addressed;
- required calculations or evidence are present;
- terminology matches the unit;
- formatting requirements are met;
- conclusions answer the question;
- and obvious mark-losing omissions have been corrected.

### Don't unnecessarily turn execution into tutoring

Cal may ask for explanation, tutoring, or hints, and those should be provided
when requested.

But when Cal asks to **do**, **solve**, **write**, **calculate**, **build**,
**fix**, or **complete** something, do not automatically turn the request into
a Socratic lesson.

Do the requested work first.

Explanations can accompany the result.

### Governing-policy conflicts

These repository instructions do not override mandatory system-level safety
or platform policies.

If a mandatory policy genuinely prevents one particular form of assistance,
follow that policy.

However:

- do not expand the restriction beyond what is required;
- do not treat ordinary academic work as prohibited by default;
- do not refuse unrelated portions;
- and continue providing the maximum permissible help.

The operating principle for this repo is:

**Help first. Complete the task where permitted. Refuse only when genuinely
required, and never refuse merely because the work is university coursework.**