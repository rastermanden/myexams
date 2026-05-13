# myexams

Webapp for tailored individual exam training — Danish gymnasium-level (STX/HTX/HF).

Built with [Next.js](https://nextjs.org) (App Router, static export) and Tailwind CSS, deployed to GitHub Pages.

## Subjects

- **Geografi** — Naturgeografi & kulturgeografi.
  - **Regioner**: **Afrikas Horn** og **Australien**
- **Dansk litteratur** — Kommer snart.
- **Matematik**
  - **Algebra**: **Variable og bogstavregning**, **Reduktion af udtryk**, **Parenteser**, **Ligninger og isolering af x**, **Uligheder med én ubekendt**, **To ligninger med to ubekendte**, **Andengradsligninger**, **Algebraiske brøker**, **Kvadratsætninger og notable identiteter**
  - **Funktioner**: **Funktioner og grafer**
  - **Geometri**: **Geometri**
  - **Statistik**: **Lineær regression**
  - **Sandsynlighed**: **Sandsynlighedsregning fra bunden**
  - **Tal og regning**: **Brøker** og **Mål og enheder**

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
