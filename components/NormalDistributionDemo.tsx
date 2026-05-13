"use client";

import { useMemo, useState } from "react";

// Approximation of standard normal CDF using abramowitz & stegun
function stdNormalCdf(z: number): number {
  if (z < -8) return 0;
  if (z > 8) return 1;
  // Approximation
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const poly =
    t * (0.319381530 +
      t * (-0.356563782 +
        t * (1.781477937 +
          t * (-1.821255978 + t * 1.330274429))));
  const pdf = Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
  const cdf = 1 - pdf * poly;
  return z >= 0 ? cdf : 1 - cdf;
}

function normalPdf(x: number, mu: number, sigma: number): number {
  const z = (x - mu) / sigma;
  return Math.exp(-0.5 * z * z) / (sigma * Math.sqrt(2 * Math.PI));
}

function fmt2(x: number): string {
  return x.toLocaleString("da-DK", { minimumFractionDigits: 3, maximumFractionDigits: 3 });
}

const SVG_W = 480;
const SVG_H = 180;
const PADDING = { left: 40, right: 20, top: 20, bottom: 30 };

function xToSvg(x: number, xMin: number, xMax: number): number {
  return PADDING.left + ((x - xMin) / (xMax - xMin)) * (SVG_W - PADDING.left - PADDING.right);
}

function yToSvg(y: number, yMax: number): number {
  return PADDING.top + (1 - y / yMax) * (SVG_H - PADDING.top - PADDING.bottom);
}

export default function NormalDistributionDemo() {
  const [mu, setMu] = useState(0);
  const [sigma, setSigma] = useState(1);
  const [rangeA, setRangeA] = useState(-1);
  const [rangeB, setRangeB] = useState(1);
  const [showRange, setShowRange] = useState(false);

  const xMin = mu - 4 * sigma;
  const xMax = mu + 4 * sigma;
  const steps = 300;
  const dx = (xMax - xMin) / steps;

  const points = useMemo(() => {
    return Array.from({ length: steps + 1 }, (_, i) => {
      const x = xMin + i * dx;
      return { x, y: normalPdf(x, mu, sigma) };
    });
  }, [mu, sigma, xMin, dx]);

  const yMax = useMemo(() => Math.max(...points.map((p) => p.y)) * 1.1, [points]);

  const svgPoints = points
    .map((p) => `${xToSvg(p.x, xMin, xMax)},${yToSvg(p.y, yMax)}`)
    .join(" ");

  // Shaded area for range
  const shadeA = Math.max(xMin, Math.min(xMax, rangeA));
  const shadeB = Math.max(xMin, Math.min(xMax, rangeB));
  const shadePoints = useMemo(() => {
    if (!showRange) return "";
    const inner = points.filter((p) => p.x >= shadeA && p.x <= shadeB);
    if (inner.length < 2) return "";
    const top = inner.map((p) => `${xToSvg(p.x, xMin, xMax)},${yToSvg(p.y, yMax)}`).join(" ");
    const baseline = `${xToSvg(shadeB, xMin, xMax)},${yToSvg(0, yMax)} ${xToSvg(shadeA, xMin, xMax)},${yToSvg(0, yMax)}`;
    return `${top} ${baseline}`;
  }, [showRange, shadeA, shadeB, points, xMin, xMax, yMax]);

  const probRange = showRange
    ? stdNormalCdf((shadeB - mu) / sigma) - stdNormalCdf((shadeA - mu) / sigma)
    : null;

  // Axis ticks: show μ-3σ to μ+3σ
  const ticks = [-3, -2, -1, 0, 1, 2, 3].map((i) => ({
    x: mu + i * sigma,
    label: i === 0 ? "μ" : `μ${i > 0 ? "+" : ""}${i}σ`,
  }));

  const sigmaRange68 =
    stdNormalCdf(1) - stdNormalCdf(-1);
  const sigmaRange95 =
    stdNormalCdf(2) - stdNormalCdf(-2);
  const sigmaRange997 =
    stdNormalCdf(3) - stdNormalCdf(-3);

  return (
    <div className="my-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        🔔 Normalfordelingen N(μ, σ²)
      </h2>
      <p className="mb-5 text-sm text-zinc-500 dark:text-zinc-400">
        Justér middelværdien μ og standardafvigelsen σ. Slå interval til for at beregne P(a &lt; X &lt; b).
      </p>

      <div className="mb-5 flex flex-wrap gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            μ (middelværdi):{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">{mu}</span>
          </label>
          <input
            type="range"
            min={-5}
            max={5}
            step={0.5}
            value={mu}
            onChange={(e) => setMu(Number(e.target.value))}
            className="w-40 accent-zinc-900 dark:accent-zinc-50"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            σ (standardafvigelse):{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">
              {sigma.toLocaleString("da-DK", { minimumFractionDigits: 1 })}
            </span>
          </label>
          <input
            type="range"
            min={0.5}
            max={3}
            step={0.5}
            value={sigma}
            onChange={(e) => setSigma(Number(e.target.value))}
            className="w-40 accent-zinc-900 dark:accent-zinc-50"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="w-full"
          style={{ maxWidth: SVG_W, height: "auto" }}
          aria-label="Normalfordeling kurve"
        >
          {/* Axes */}
          <line
            x1={PADDING.left}
            y1={yToSvg(0, yMax)}
            x2={SVG_W - PADDING.right}
            y2={yToSvg(0, yMax)}
            stroke="currentColor"
            className="text-zinc-300 dark:text-zinc-600"
            strokeWidth={1}
          />

          {/* Ticks */}
          {ticks.map(({ x, label }) => {
            const sx = xToSvg(x, xMin, xMax);
            if (sx < PADDING.left || sx > SVG_W - PADDING.right) return null;
            return (
              <g key={label}>
                <line
                  x1={sx}
                  y1={yToSvg(0, yMax)}
                  x2={sx}
                  y2={yToSvg(0, yMax) + 5}
                  stroke="currentColor"
                  className="text-zinc-400"
                  strokeWidth={1}
                />
                <text
                  x={sx}
                  y={yToSvg(0, yMax) + 16}
                  textAnchor="middle"
                  fontSize={9}
                  fill="currentColor"
                  className="text-zinc-500"
                >
                  {label}
                </text>
              </g>
            );
          })}

          {/* Shaded area */}
          {showRange && shadePoints && (
            <polygon
              points={shadePoints}
              className="fill-blue-400 dark:fill-blue-500"
              opacity={0.35}
            />
          )}

          {/* Curve */}
          <polyline
            points={svgPoints}
            fill="none"
            stroke="currentColor"
            className="text-blue-600 dark:text-blue-400"
            strokeWidth={2}
          />

          {/* μ line */}
          <line
            x1={xToSvg(mu, xMin, xMax)}
            y1={PADDING.top}
            x2={xToSvg(mu, xMin, xMax)}
            y2={yToSvg(0, yMax)}
            stroke="currentColor"
            className="text-zinc-400 dark:text-zinc-500"
            strokeWidth={1}
            strokeDasharray="4 3"
          />
        </svg>
      </div>

      {/* Range selector */}
      <div className="mt-4">
        <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          <input
            type="checkbox"
            checked={showRange}
            onChange={(e) => setShowRange(e.target.checked)}
            className="rounded accent-blue-600"
          />
          Beregn P(a &lt; X &lt; b)
        </label>
        {showRange && (
          <div className="mt-3 flex flex-wrap gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-zinc-600 dark:text-zinc-400">
                a:{" "}
                <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {rangeA.toLocaleString("da-DK", { minimumFractionDigits: 1 })}
                </span>
              </label>
              <input
                type="range"
                min={xMin}
                max={xMax}
                step={sigma / 4}
                value={rangeA}
                onChange={(e) => setRangeA(Number(e.target.value))}
                className="w-36 accent-blue-600"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-zinc-600 dark:text-zinc-400">
                b:{" "}
                <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {rangeB.toLocaleString("da-DK", { minimumFractionDigits: 1 })}
                </span>
              </label>
              <input
                type="range"
                min={xMin}
                max={xMax}
                step={sigma / 4}
                value={rangeB}
                onChange={(e) => setRangeB(Number(e.target.value))}
                className="w-36 accent-blue-600"
              />
            </div>
            {probRange !== null && (
              <div className="rounded-xl bg-blue-50 px-4 py-2 dark:bg-blue-950">
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  P({rangeA.toLocaleString("da-DK", { minimumFractionDigits: 1 })} &lt; X &lt;{" "}
                  {rangeB.toLocaleString("da-DK", { minimumFractionDigits: 1 })})
                </p>
                <p className="text-xl font-semibold text-blue-900 dark:text-blue-50">
                  ≈ {fmt2(probRange)}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  = {(probRange * 100).toFixed(1)}%
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-zinc-50 p-3 text-center dark:bg-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">μ ± σ</p>
          <p className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            ≈ {(sigmaRange68 * 100).toFixed(1)}%
          </p>
        </div>
        <div className="rounded-xl bg-zinc-50 p-3 text-center dark:bg-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">μ ± 2σ</p>
          <p className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            ≈ {(sigmaRange95 * 100).toFixed(1)}%
          </p>
        </div>
        <div className="rounded-xl bg-zinc-50 p-3 text-center dark:bg-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">μ ± 3σ</p>
          <p className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            ≈ {(sigmaRange997 * 100).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
}
