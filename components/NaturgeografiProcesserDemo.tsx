"use client";

export default function NaturgeografiProcesserDemo() {
  return (
    <section className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Animation: landskabsdannende processer
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        Forenklet model af en gletsjertunge, smeltevand og aflejring. De animerede markører
        viser en typisk bevægelse fra isfront mod smeltevandsslette.
      </p>
      <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/40">
        <div className="relative h-48 overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
          <svg viewBox="0 0 600 220" className="h-full w-full" role="img" aria-label="Procesdiagram med is, smeltevand og aflejring">
            <polygon points="20,40 250,40 180,180 20,180" fill="#bfdbfe" />
            <polygon points="250,40 350,85 300,180 180,180" fill="#93c5fd" />
            <path d="M300 180 C340 165, 430 165, 580 188 L580 220 L300 220 Z" fill="#fde68a" />
            <path d="M300 175 C350 150, 410 145, 560 150" stroke="#22d3ee" strokeWidth="6" fill="none" />
            <circle
              cx="130"
              cy="115"
              r="9"
              className="animate-pulse fill-sky-600"
              aria-label="Markør for isbevægelse"
            />
            <circle
              cx="360"
              cy="160"
              r="8"
              className="animate-bounce fill-cyan-500"
              aria-label="Markør for smeltevandsstrøm"
            />
            <circle
              cx="520"
              cy="178"
              r="8"
              className="animate-ping fill-amber-500"
              aria-label="Markør for aflejring"
            />
            <text
              x="70"
              y="30"
              fontSize="14"
              fill="currentColor"
              className="text-zinc-700 dark:text-zinc-200"
              aria-hidden="true"
            >
              Isbevægelse
            </text>
            <text
              x="330"
              y="140"
              fontSize="14"
              fill="currentColor"
              className="text-zinc-700 dark:text-zinc-200"
              aria-hidden="true"
            >
              Smeltevand
            </text>
            <text
              x="470"
              y="210"
              fontSize="14"
              fill="currentColor"
              className="text-zinc-700 dark:text-zinc-200"
              aria-hidden="true"
            >
              Aflejring
            </text>
          </svg>
        </div>
        <div className="mt-4 grid gap-3 text-xs text-zinc-600 dark:text-zinc-300 sm:grid-cols-3">
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-3 dark:border-sky-900 dark:bg-sky-950/40">
            <p className="font-semibold text-sky-700 dark:text-sky-300">1) Is</p>
            <p>Isen transporterer usorteret materiale mod isranden.</p>
          </div>
          <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-3 dark:border-cyan-900 dark:bg-cyan-950/40">
            <p className="font-semibold text-cyan-700 dark:text-cyan-300">2) Smeltevand</p>
            <p>Smeltevand sorterer sediment i strømretningen.</p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/40">
            <p className="font-semibold text-amber-700 dark:text-amber-300">3) Aflejring</p>
            <p>Sand og grus afsættes, når strømhastigheden falder.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
