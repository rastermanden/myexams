<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Content model and routing

- Subject data uses `categories[]`, and each category contains `topics[]`.
- Canonical topic routes are `/<subject>/<category>/<topic>` and `/<subject>/<category>/<topic>/quiz`.
- Legacy routes `/<subject>/<topic>` and `/<subject>/<topic>/quiz` are preserved via redirects.

## Adding a topic (avoid merge-conflict hot spots)

- Each category lives in its own file at `content/<subject>/categories/<category>.ts` and only that file lists its topics. Adding a topic to an existing category touches just one shared file (its category file).
- A topic with an interactive demo imports its demo component directly and sets `demoComponent` on the `Topic` object. There is no central demo registry — `app/[subject]/[category]/[topic]/page.tsx` renders `topic.demoComponent` directly.
- `content/<subject>/index.ts` just composes the category list. Touch it only when adding a brand-new category.
