"use client";

import { useState } from "react";

type TableValues = { a: number; b: number; c: number; d: number };

const EXAMPLES: { label: string; values: TableValues }[] = [
  {
    label: "Rygning og lungekræft",
    values: { a: 40, b: 160, c: 10, d: 190 },
  },
  {
    label: "Vaccination og infektion",
    values: { a: 15, b: 485, c: 60, d: 440 },
  },
  {
    label: "Kostfibre og hjertesygdom",
    values: { a: 25, b: 75, c: 50, d: 150 },
  },
];

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandom(): TableValues {
  const a = randomInt(5, 80);
  const b = randomInt(20, 150);
  const c = randomInt(5, 80);
  const d = randomInt(20, 150);
  return { a, b, c, d };
}

function rrInterpretation(rr: number): string {
  if (rr > 1.05) {
    return `RR = ${rr.toFixed(2)} > 1: Den eksponerede gruppe har en højere risiko for udfaldet.`;
  }
  if (rr < 0.95) {
    return `RR = ${rr.toFixed(2)} < 1: Den eksponerede gruppe har en lavere risiko for udfaldet (eksponeringen ser ud til at være beskyttende).`;
  }
  return `RR = ${rr.toFixed(2)} ≈ 1: Der er ingen væsentlig forskel i risiko mellem grupperne.`;
}

function orInterpretation(or: number): string {
  if (or > 1.05) {
    return `OR = ${or.toFixed(2)} > 1: Oddset for udfaldet er højere i den eksponerede gruppe.`;
  }
  if (or < 0.95) {
    return `OR = ${or.toFixed(2)} < 1: Oddset for udfaldet er lavere i den eksponerede gruppe.`;
  }
  return `OR = ${or.toFixed(2)} ≈ 1: Oddset er ens i begge grupper.`;
}

function clampPositive(v: number): number {
  return Math.max(1, Math.round(v));
}

export default function RisikoforholdDemo() {
  const [values, setValues] = useState<TableValues>(EXAMPLES[0].values);

  const { a, b, c, d } = values;
  const n1 = a + b;
  const n0 = c + d;

  const riskExposed = n1 > 0 ? a / n1 : 0;
  const riskUnexposed = n0 > 0 ? c / n0 : 0;
  const rr = riskUnexposed > 0 ? riskExposed / riskUnexposed : null;
  const or = b > 0 && c > 0 ? (a * d) / (b * c) : null;

  function handleChange(key: keyof TableValues, raw: string) {
    const num = parseInt(raw, 10);
    setValues((prev) => ({ ...prev, [key]: isNaN(num) ? 0 : clampPositive(num) }));
  }

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Interaktiv demo: risikoforhold
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        Indtast tal i krydstabellen eller vælg et eksempel – demoen beregner risikoforhold
        (RR) og odds ratio (OR) trin for trin.
      </p>

      {/* Example selector */}
      <div className="mt-5 flex flex-wrap gap-2">
        {EXAMPLES.map((ex) => (
          <button
            key={ex.label}
            type="button"
            onClick={() => setValues(ex.values)}
            className="inline-flex min-h-9 items-center justify-center rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium text-zinc-800 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            {ex.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setValues(generateRandom())}
          className="inline-flex min-h-9 items-center justify-center rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Tilfældig opgave
        </button>
      </div>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {/* 2x2 table */}
        <div>
          <h3 className="mb-3 text-base font-semibold text-zinc-800 dark:text-zinc-200">
            2×2 krydstabel
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-zinc-300 bg-zinc-50 px-3 py-2 text-left text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400" />
                  <th className="border border-zinc-300 bg-zinc-50 px-3 py-2 text-center font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    Udfald&nbsp;✓
                  </th>
                  <th className="border border-zinc-300 bg-zinc-50 px-3 py-2 text-center font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    Udfald&nbsp;✗
                  </th>
                  <th className="border border-zinc-300 bg-zinc-50 px-3 py-2 text-center font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    I alt
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-zinc-300 bg-zinc-50 px-3 py-2 font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    Eksponeret
                  </td>
                  <td className="border border-zinc-300 px-2 py-1 text-center dark:border-zinc-700">
                    <input
                      type="number"
                      min="1"
                      value={a}
                      onChange={(e) => handleChange("a", e.target.value)}
                      aria-label="a: eksponeret med udfald"
                      className="w-16 rounded border border-zinc-300 bg-white px-2 py-1 text-center text-sm text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
                    />
                    <span className="ml-1 text-xs text-zinc-400">(a)</span>
                  </td>
                  <td className="border border-zinc-300 px-2 py-1 text-center dark:border-zinc-700">
                    <input
                      type="number"
                      min="1"
                      value={b}
                      onChange={(e) => handleChange("b", e.target.value)}
                      aria-label="b: eksponeret uden udfald"
                      className="w-16 rounded border border-zinc-300 bg-white px-2 py-1 text-center text-sm text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
                    />
                    <span className="ml-1 text-xs text-zinc-400">(b)</span>
                  </td>
                  <td className="border border-zinc-300 bg-zinc-50 px-3 py-2 text-center font-semibold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    {n1}
                  </td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 bg-zinc-50 px-3 py-2 font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    Ikke-eksponeret
                  </td>
                  <td className="border border-zinc-300 px-2 py-1 text-center dark:border-zinc-700">
                    <input
                      type="number"
                      min="1"
                      value={c}
                      onChange={(e) => handleChange("c", e.target.value)}
                      aria-label="c: ikke-eksponeret med udfald"
                      className="w-16 rounded border border-zinc-300 bg-white px-2 py-1 text-center text-sm text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
                    />
                    <span className="ml-1 text-xs text-zinc-400">(c)</span>
                  </td>
                  <td className="border border-zinc-300 px-2 py-1 text-center dark:border-zinc-700">
                    <input
                      type="number"
                      min="1"
                      value={d}
                      onChange={(e) => handleChange("d", e.target.value)}
                      aria-label="d: ikke-eksponeret uden udfald"
                      className="w-16 rounded border border-zinc-300 bg-white px-2 py-1 text-center text-sm text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
                    />
                    <span className="ml-1 text-xs text-zinc-400">(d)</span>
                  </td>
                  <td className="border border-zinc-300 bg-zinc-50 px-3 py-2 text-center font-semibold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    {n0}
                  </td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 bg-zinc-50 px-3 py-2 font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    I alt
                  </td>
                  <td className="border border-zinc-300 bg-zinc-50 px-3 py-2 text-center font-semibold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    {a + c}
                  </td>
                  <td className="border border-zinc-300 bg-zinc-50 px-3 py-2 text-center font-semibold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    {b + d}
                  </td>
                  <td className="border border-zinc-300 bg-zinc-50 px-3 py-2 text-center font-semibold text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    {a + b + c + d}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Step-by-step calculations */}
        <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
          <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
            Beregning trin for trin
          </h3>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Trin 1 – Risiko i eksponeret gruppe
            </p>
            <p className="mt-1 font-mono text-xs">
              R₁ = a / (a + b) = {a} / ({a} + {b}) = {a} / {n1} ={" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {riskExposed.toFixed(4)}
              </span>
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Trin 2 – Risiko i ikke-eksponeret gruppe
            </p>
            <p className="mt-1 font-mono text-xs">
              R₀ = c / (c + d) = {c} / ({c} + {d}) = {c} / {n0} ={" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {riskUnexposed.toFixed(4)}
              </span>
            </p>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Trin 3 – Risikoforhold (RR)
            </p>
            <p className="mt-1 font-mono text-xs">
              RR = R₁ / R₀ = {riskExposed.toFixed(4)} / {riskUnexposed.toFixed(4)} ={" "}
              <span className="font-semibold text-blue-700 dark:text-blue-300">
                {rr !== null ? rr.toFixed(2) : "–"}
              </span>
            </p>
            {rr !== null && (
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                {rrInterpretation(rr)}
              </p>
            )}
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Udvidelse – Odds ratio (OR)
            </p>
            <p className="mt-1 font-mono text-xs">
              OR = (a × d) / (b × c) = ({a} × {d}) / ({b} × {c}) = {a * d} / {b * c} ={" "}
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                {or !== null ? or.toFixed(2) : "–"}
              </span>
            </p>
            {or !== null && (
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                {orInterpretation(or)}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
