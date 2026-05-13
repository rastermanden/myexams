# myexams

Webapp for tailored individual exam training — Danish gymnasium-level (STX/HTX/HF).

Built with [Next.js](https://nextjs.org) (App Router, static export) and Tailwind CSS, deployed to GitHub Pages.

## Subjects

- **Geografi** — Naturgeografi & kulturgeografi.
  - **Pladetektonik**: **Pladetektonik**
  - **Regioner**: **Afrikas Horn** og **Australien**
- **Dansk litteratur** — Kommer snart.
- **Matematik**
  - **Geometri**: **Geometri**
  - **Statistik**: **Lineær regression**
  - **Tal og regning**: **Brøker**

Each topic explains its key concepts and ends with a multiple-choice quiz with explanations and a best-score tracker.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/
npm run lint
```

## Adding a topic

1. Create `content/<subject>/<topic-slug>.ts` exporting a `Topic` (see `lib/types.ts`).
2. Add it under a category's `topics: []` in `content/<subject>/index.ts`.
3. Topics are generated on `/<subject>/<category>/<topic>` (and `/quiz`) automatically.
4. Legacy links on `/<subject>/<topic>` and `/<subject>/<topic>/quiz` redirect to the new URL.

Images use [Wikimedia Commons](https://commons.wikimedia.org/) via the hash-agnostic `Special:FilePath/<filename>?width=...` URL pattern.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages at `https://rastermanden.github.io/myexams/`.

**One-time setup**: in repo Settings → Pages, set **Source: GitHub Actions**.
