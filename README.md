# myexams

Webapp for tailored individual exam training — Danish gymnasium-level (STX/HTX/HF).

Built with [Next.js](https://nextjs.org) (App Router, static export) and Tailwind CSS, deployed to GitHub Pages.

## Subjects

- **Geografi** — Naturgeografi & kulturgeografi. Topics: **Afrikas Horn** og **Australien**.
- **Dansk litteratur** — Kommer snart.
- **Matematik** — Kommer snart.

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
2. Add it to the subject's `topics: []` in `content/<subject>/index.ts`.
3. That's it — routes and quiz pages generate automatically.

Images use [Wikimedia Commons](https://commons.wikimedia.org/) via the hash-agnostic `Special:FilePath/<filename>?width=...` URL pattern.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages at `https://rastermanden.github.io/myexams/`.

**One-time setup**: in repo Settings → Pages, set **Source: GitHub Actions**.
