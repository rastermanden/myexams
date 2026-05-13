export default function NaturgeografiProcesserDemo() {
  return (
    <section className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Animation: landskabsdannende processer
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        Forenklet model af is, smeltevand og aflejring. Brug animationen til at forklare,
        hvordan materiale flyttes fra højere til lavere områder.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 dark:border-sky-900 dark:bg-sky-950/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
            1. Isbevægelse
          </p>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-sky-200 dark:bg-sky-900/70">
            <div className="h-full w-2/3 animate-pulse rounded-full bg-sky-500" />
          </div>
        </div>
        <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-3 dark:border-cyan-900 dark:bg-cyan-950/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
            2. Smeltevand
          </p>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-cyan-200 dark:bg-cyan-900/70">
            <div className="h-full w-1/2 animate-bounce rounded-full bg-cyan-500" />
          </div>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
            3. Aflejring
          </p>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-amber-200 dark:bg-amber-900/70">
            <div className="h-full w-1/3 animate-pulse rounded-full bg-amber-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
