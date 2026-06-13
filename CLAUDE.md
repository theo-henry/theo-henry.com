# theo-henry.com

Personal portfolio site for Theo Henry.

## Critical: what is actually served

Netlify publishes `agreeable-reservation-488504.framer.app_tostatic/` (see `netlify.toml` `[build] publish`). **That directory is the live site.** Content edits must land there.

The root-level `index.html`, `portfolio-data.js`, `app.js`, and `styles.css` are an **unused alternate scaffold** (a hand-rolled JS-rendered portfolio). Editing `portfolio-data.js` does NOT change what users see. Do not be fooled by its clean structure — verify against `netlify.toml` before editing.

## Editing the live content

The Framer export is a single large pre-rendered HTML file: `agreeable-reservation-488504.framer.app_tostatic/index.html` (~184 lines, ~150k tokens — too large to Read whole; use `grep`/`perl` to locate snippets, then `Edit` in place).

Conventions when editing the Framer HTML:
- Preserve all `class="framer-..."` attributes and inline styles — they drive layout/typography.
- Paragraph breaks inside a `<p>` use `<br class="framer-text"><br class="framer-text">` (double `<br>`), not separate `<p>` tags.
- HTML-escape ampersands as `&amp;` and other entities as needed.
- Match the existing apostrophe style in surrounding text (curly `’` vs straight `'`) unless the user specifies.

To find content, search the Framer HTML with `perl -ne 'while(/(needle.{0,1200})/g){print "$1\n---\n"}'` — `grep -oE` with `{n}` quantifiers fails on the system's BSD grep.

## Sections currently identified in the Framer HTML

- Hero/intro paragraph (formerly "Brooklyn, New York City... Nova University") — `id="..."` not directly named; find by searching the intro copy.
- Projects section: `id="projects"`.
- Other sections follow the same `framer-...` container pattern.

## Future lessons / project notes

Add new project-specific learnings below as the user provides them. Keep entries short; prefer one bullet per lesson with date.

- 2026-06-13: Confirmed the Framer static export is the live site, not the root scaffold. Root `portfolio-data.js` is dead code unless build config changes.
