"use client";

import { useState, useCallback } from "react";

type ExperimentType = "mønt" | "terning" | "kugler";
type MøntResult = "Krone" | "Plat";

const EXPERIMENT_LABELS: Record<ExperimentType, string> = {
  mønt: "Møntkast",
  terning: "Terningekast",
  kugler: "Kugle fra pose (3 røde, 2 blå)",
};

const OUTCOMES: Record<ExperimentType, string[]> = {
  mønt: ["Krone", "Plat"],
  terning: ["1", "2", "3", "4", "5", "6"],
  kugler: ["Rød", "Blå"],
};

const THEORETICAL: Record<ExperimentType, Record<string, number>> = {
  mønt: { Krone: 0.5, Plat: 0.5 },
  terning: { "1": 1 / 6, "2": 1 / 6, "3": 1 / 6, "4": 1 / 6, "5": 1 / 6, "6": 1 / 6 },
  kugler: { Rød: 0.6, Blå: 0.4 },
};

const OUTCOME_COLORS: Record<string, string> = {
  Krone: "bg-yellow-400",
  Plat: "bg-zinc-400",
  "1": "bg-red-400",
  "2": "bg-orange-400",
  "3": "bg-yellow-400",
  "4": "bg-green-400",
  "5": "bg-blue-400",
  "6": "bg-violet-400",
  Rød: "bg-red-400",
  Blå: "bg-blue-400",
};

function runExperiment(type: ExperimentType, count: number): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const o of OUTCOMES[type]) counts[o] = 0;
  for (let i = 0; i < count; i++) {
    const r = Math.random();
    if (type === "mønt") {
      const out: MøntResult = r < 0.5 ? "Krone" : "Plat";
      counts[out]++;
    } else if (type === "terning") {
      const out = String(Math.floor(r * 6) + 1);
      counts[out]++;
    } else {
      const out = r < 0.6 ? "Rød" : "Blå";
      counts[out]++;
    }
  }
  return counts;
}

function fmt(n: number): string {
  return (n * 100).toFixed(1) + "%";
}

export default function ProbabilitySimulatorDemo() {
  const [experiment, setExperiment] = useState<ExperimentType>("mønt");
  const [runs, setRuns] = useState(1000);
  const [results, setResults] = useState<Record<string, number> | null>(null);
  const [total, setTotal] = useState(0);

  const handleRun = useCallback(() => {
    const r = runExperiment(experiment, runs);
    setResults(r);
    setTotal(runs);
  }, [experiment, runs]);

  const handleReset = useCallback(() => {
    setResults(null);
    setTotal(0);
  }, []);

  const outcomes = OUTCOMES[experiment];
  const theoretical = THEORETICAL[experiment];

  return (
    <div className="my-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        🎲 Sandsynlighedssimulator
      </h2>
      <p className="mb-5 text-sm text-zinc-500 dark:text-zinc-400">
        Kør et eksperiment mange gange og sammenlign de observerede frekvenser med den teoretiske sandsynlighed.
      </p>

      <div className="mb-4 flex flex-wrap gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            Eksperiment
          </label>
          <select
            value={experiment}
            onChange={(e) => {
              setExperiment(e.target.value as ExperimentType);
              setResults(null);
              setTotal(0);
            }}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50"
          >
            {(Object.keys(EXPERIMENT_LABELS) as ExperimentType[]).map((t) => (
              <option key={t} value={t}>
                {EXPERIMENT_LABELS[t]}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            Antal forsøg: <span className="font-semibold text-zinc-900 dark:text-zinc-50">{runs.toLocaleString("da-DK")}</span>
          </label>
          <input
            type="range"
            min={100}
            max={10000}
            step={100}
            value={runs}
            onChange={(e) => setRuns(Number(e.target.value))}
            className="w-48 accent-zinc-900 dark:accent-zinc-50"
          />
        </div>
      </div>

      <div className="mb-5 flex gap-3">
        <button
          onClick={handleRun}
          className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Kør {runs.toLocaleString("da-DK")} forsøg
        </button>
        {results && (
          <button
            onClick={handleReset}
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Nulstil
          </button>
        )}
      </div>

      <div className="space-y-3">
        {outcomes.map((o) => {
          const observed = results ? results[o] / total : 0;
          const theory = theoretical[o];
          const colorClass = OUTCOME_COLORS[o] ?? "bg-zinc-400";
          return (
            <div key={o}>
              <div className="mb-1 flex justify-between text-xs font-medium text-zinc-700 dark:text-zinc-300">
                <span>{o}</span>
                <span className="flex gap-4">
                  {results && (
                    <span>
                      Observeret:{" "}
                      <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                        {fmt(observed)}
                      </span>
                      {" "}({results[o]} gange)
                    </span>
                  )}
                  <span>
                    Teoretisk:{" "}
                    <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {fmt(theory)}
                    </span>
                  </span>
                </span>
              </div>
              <div className="relative h-7 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                {/* Theoretical marker */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-zinc-400 dark:bg-zinc-500 z-10"
                  style={{ left: `${theory * 100}%` }}
                  title={`Teoretisk: ${fmt(theory)}`}
                />
                {/* Observed bar */}
                {results && (
                  <div
                    className={`h-full ${colorClass} opacity-80 transition-all duration-500`}
                    style={{ width: `${observed * 100}%` }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {results && (
        <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
          Søjlerne viser de observerede frekvenser. Den lodrette streg viser den teoretiske sandsynlighed.
          Jo flere forsøg, jo tættere nærmer de observerede frekvenser sig de teoretiske (store tals lov).
        </p>
      )}
    </div>
  );
}
