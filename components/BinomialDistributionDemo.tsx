"use client";

import { useMemo, useState } from "react";

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function binomCoeff(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  return factorial(n) / (factorial(k) * factorial(n - k));
}

function binomPmf(n: number, p: number, k: number): number {
  return binomCoeff(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

function fmt2(x: number): string {
  return x.toLocaleString("da-DK", { minimumFractionDigits: 3, maximumFractionDigits: 3 });
}

function fmtPct(x: number): string {
  return (x * 100).toFixed(1) + "%";
}

const BAR_MAX_HEIGHT = 160;

export default function BinomialDistributionDemo() {
  const [n, setN] = useState(10);
  const [p, setP] = useState(0.5);
  const [highlighted, setHighlighted] = useState<number | null>(null);

  const distribution = useMemo(() => {
    return Array.from({ length: n + 1 }, (_, k) => ({
      k,
      prob: binomPmf(n, p, k),
    }));
  }, [n, p]);

  const maxProb = Math.max(...distribution.map((d) => d.prob));
  const mean = n * p;
  const variance = n * p * (1 - p);
  const stdDev = Math.sqrt(variance);

  const cumulativeUpTo =
    highlighted !== null
      ? distribution.slice(0, highlighted + 1).reduce((s, d) => s + d.prob, 0)
      : null;

  return (
    <div className="my-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        📊 Binomialfordelingen B(n, p)
      </h2>
      <p className="mb-5 text-sm text-zinc-500 dark:text-zinc-400">
        Justér n (antal forsøg) og p (succesandel). Hold musen over en søjle for at se P(X = k) og P(X ≤ k).
      </p>

      <div className="mb-5 flex flex-wrap gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            n (antal forsøg):{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">{n}</span>
          </label>
          <input
            type="range"
            min={1}
            max={20}
            step={1}
            value={n}
            onChange={(e) => { setN(Number(e.target.value)); setHighlighted(null); }}
            className="w-40 accent-zinc-900 dark:accent-zinc-50"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            p (succesandel):{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">
              {p.toLocaleString("da-DK", { minimumFractionDigits: 2 })}
            </span>
          </label>
          <input
            type="range"
            min={0.05}
            max={0.95}
            step={0.05}
            value={p}
            onChange={(e) => { setP(Number(e.target.value)); setHighlighted(null); }}
            className="w-40 accent-zinc-900 dark:accent-zinc-50"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div
          className="flex items-end gap-1"
          style={{ minWidth: `${(n + 1) * 36}px`, height: `${BAR_MAX_HEIGHT + 24}px` }}
        >
          {distribution.map(({ k, prob }) => {
            const barH = maxProb > 0 ? Math.round((prob / maxProb) * BAR_MAX_HEIGHT) : 0;
            const isHL = highlighted === k;
            return (
              <div
                key={k}
                className="flex flex-col items-center"
                style={{ width: 32 }}
                onMouseEnter={() => setHighlighted(k)}
                onMouseLeave={() => setHighlighted(null)}
              >
                <div
                  className={`w-full rounded-t transition-colors ${
                    isHL
                      ? "bg-blue-500"
                      : "bg-zinc-300 dark:bg-zinc-600 hover:bg-blue-400 dark:hover:bg-blue-500"
                  }`}
                  style={{ height: `${barH}px` }}
                />
                <span className="mt-0.5 text-center text-xs text-zinc-500 dark:text-zinc-400">
                  {k}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <p className="mt-1 text-center text-xs text-zinc-400 dark:text-zinc-500">k (antal succeser)</p>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Forventet værdi</p>
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            μ = {mean.toLocaleString("da-DK", { minimumFractionDigits: 2 })}
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">E(X) = n · p</p>
        </div>
        <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Varians</p>
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            σ² = {variance.toLocaleString("da-DK", { minimumFractionDigits: 2 })}
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Var(X) = n·p·(1−p)</p>
        </div>
        <div className="rounded-xl bg-zinc-50 p-3 dark:bg-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Standardafvigelse</p>
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            σ = {stdDev.toLocaleString("da-DK", { minimumFractionDigits: 3 })}
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">σ = √(n·p·(1−p))</p>
        </div>
        {highlighted !== null && (
          <div className="rounded-xl bg-blue-50 p-3 dark:bg-blue-950">
            <p className="text-xs text-blue-600 dark:text-blue-400">k = {highlighted}</p>
            <p className="text-lg font-semibold text-blue-900 dark:text-blue-50">
              P(X={highlighted}) = {fmt2(distribution[highlighted].prob)}
            </p>
            {cumulativeUpTo !== null && (
              <p className="text-xs text-blue-600 dark:text-blue-400">
                P(X≤{highlighted}) = {fmtPct(cumulativeUpTo)}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
