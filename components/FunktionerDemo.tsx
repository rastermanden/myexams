"use client";

import { useMemo, useState } from "react";

type FunctionKind = "lineaer" | "andengrad" | "eksponential";

const SVG_WIDTH = 640;
const SVG_HEIGHT = 360;
const SVG_MARGIN = 36;

function formatNumber(value: number, maximumFractionDigits = 2): string {
  const rounded = Object.is(value, -0) ? 0 : value;
  return rounded.toLocaleString("da-DK", { maximumFractionDigits });
}

function formatSigned(value: number): string {
  const prefix = value < 0 ? "− " : "+ ";
  return `${prefix}${formatNumber(Math.abs(value))}`;
}

function buildTicks(min: number, max: number, steps: number): number[] {
  return Array.from({ length: steps + 1 }, (_, index) => min + ((max - min) * index) / steps);
}

export default function FunktionerDemo() {
  const [functionKind, setFunctionKind] = useState<FunctionKind>("lineaer");
  const [lineaerA, setLineaerA] = useState(1);
  const [lineaerB, setLineaerB] = useState(0);
  const [andengradA, setAndengradA] = useState(0.5);
  const [andengradB, setAndengradB] = useState(0);
  const [andengradC, setAndengradC] = useState(-2);
  const [eksponentialA, setEksponentialA] = useState(1.2);
  const [eksponentialB, setEksponentialB] = useState(2);

  const graphModel = useMemo(() => {
    if (functionKind === "lineaer") {
      const points = Array.from({ length: 101 }, (_, index) => {
        const x = -5 + index * 0.1;
        return { x, y: lineaerA * x + lineaerB };
      });
      return {
        title: "Lineær funktion",
        description:
          "Her er a hældningen og b skæringen med y-aksen. Når a ændres, bliver linjen stejlere eller fladere.",
        formula: `f(x) = ${formatNumber(lineaerA)}x ${formatSigned(lineaerB)}`,
        points,
        tableXValues: [-4, -2, 0, 2, 4],
        xMin: -5,
        xMax: 5,
        facts: [
          { label: "Hældning", value: formatNumber(lineaerA) },
          { label: "Skæring med y-aksen", value: formatNumber(lineaerB) },
        ],
      };
    }

    if (functionKind === "andengrad") {
      const points = Array.from({ length: 101 }, (_, index) => {
        const x = -5 + index * 0.1;
        return { x, y: andengradA * x ** 2 + andengradB * x + andengradC };
      });
      const toppunktX = andengradA === 0 ? 0 : -andengradB / (2 * andengradA);
      const toppunktY = andengradA * toppunktX ** 2 + andengradB * toppunktX + andengradC;
      return {
        title: "Andengradsfunktion",
        description:
          "Parameteren a bestemmer, om parablen åbner opad eller nedad. b flytter parablen sidelæns, og c er skæringen med y-aksen.",
        formula: `f(x) = ${formatNumber(andengradA)}x² ${formatSigned(andengradB)}x ${formatSigned(andengradC)}`,
        points,
        tableXValues: [-4, -2, 0, 2, 4],
        xMin: -5,
        xMax: 5,
        facts: [
          {
            label: "Toppunkt",
            value: `(${formatNumber(toppunktX)}, ${formatNumber(toppunktY)})`,
          },
          { label: "Skæring med y-aksen", value: formatNumber(andengradC) },
        ],
      };
    }

    const points = Array.from({ length: 81 }, (_, index) => {
      const x = index * 0.1;
      return { x, y: eksponentialB * eksponentialA ** x };
    });
    return {
      title: "Eksponentialfunktion",
      description:
        "Her er b startværdien, og a er fremskrivningsfaktoren. a > 1 giver vækst, mens 0 < a < 1 giver fald.",
      formula: `f(x) = ${formatNumber(eksponentialB)} · ${formatNumber(eksponentialA)}^x`,
      points,
      tableXValues: [0, 1, 2, 3, 4],
      xMin: 0,
      xMax: 8,
      facts: [
        { label: "Startværdi", value: formatNumber(eksponentialB) },
        { label: "Fremskrivningsfaktor", value: formatNumber(eksponentialA) },
      ],
    };
  }, [
    andengradA,
    andengradB,
    andengradC,
    eksponentialA,
    eksponentialB,
    functionKind,
    lineaerA,
    lineaerB,
  ]);

  const tableRows = useMemo(
    () =>
      graphModel.tableXValues.map((x) => ({
        x,
        y: graphModel.points.reduce((closest, point) =>
          Math.abs(point.x - x) < Math.abs(closest.x - x) ? point : closest,
        ).y,
      })),
    [graphModel],
  );

  const yValues = graphModel.points.map((point) => point.y).concat(0);
  const yMinRaw = Math.min(...yValues);
  const yMaxRaw = Math.max(...yValues);
  const yPadding = Math.max(1, (yMaxRaw - yMinRaw) * 0.15);
  const yMin = yMinRaw - yPadding;
  const yMax = yMaxRaw + yPadding;

  const width = SVG_WIDTH;
  const height = SVG_HEIGHT;
  const margin = SVG_MARGIN;
  const plotWidth = width - margin * 2;
  const plotHeight = height - margin * 2;

  const toSvgX = (x: number) =>
    margin + ((x - graphModel.xMin) / (graphModel.xMax - graphModel.xMin)) * plotWidth;
  const toSvgY = (y: number) => margin + (1 - (y - yMin) / (yMax - yMin)) * plotHeight;

  const polylinePoints = graphModel.points
    .map((point) => `${toSvgX(point.x)},${toSvgY(point.y)}`)
    .join(" ");

  const xAxisY = yMin <= 0 && yMax >= 0 ? toSvgY(0) : toSvgY(yMin);
  const yAxisX =
    graphModel.xMin <= 0 && graphModel.xMax >= 0 ? toSvgX(0) : toSvgX(graphModel.xMin);

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Interaktiv demo: funktioner
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        Skift mellem lineær, andengrad og eksponentialfunktion, og sammenlign samme
        funktion som forskrift, tabel og graf.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {[
          { value: "lineaer", label: "Lineær" },
          { value: "andengrad", label: "Andengrad" },
          { value: "eksponential", label: "Eksponential" },
        ].map((option) => {
          const isActive = functionKind === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setFunctionKind(option.value as FunctionKind)}
              className={`inline-flex min-h-10 items-center justify-center rounded-full px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isActive
                  ? "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900"
                  : "border border-zinc-300 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-4">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {graphModel.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  {graphModel.description}
                </p>
              </div>
              <div className="rounded-xl bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-900">
                <p className="text-xs uppercase tracking-wide text-zinc-500">Forskrift</p>
                <p className="mt-1 font-mono text-base font-semibold text-blue-700 dark:text-blue-300">
                  {graphModel.formula}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-950">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              role="img"
              aria-label={`Graf for ${graphModel.title.toLowerCase()}`}
              className="h-auto w-full min-w-[320px]"
            >
              <rect
                x={margin}
                y={margin}
                width={plotWidth}
                height={plotHeight}
                fill="transparent"
                stroke="currentColor"
                className="text-zinc-300 dark:text-zinc-700"
              />

              {buildTicks(graphModel.xMin, graphModel.xMax, 5).map((tick) => (
                <g key={`x-${tick}`}>
                  <line
                    x1={toSvgX(tick)}
                    y1={margin}
                    x2={toSvgX(tick)}
                    y2={margin + plotHeight}
                    stroke="currentColor"
                    strokeDasharray="4 4"
                    className="text-zinc-200 dark:text-zinc-800"
                  />
                  <text
                    x={toSvgX(tick)}
                    y={margin + plotHeight + 18}
                    textAnchor="middle"
                    fontSize="11"
                    fill="currentColor"
                    className="text-zinc-500 dark:text-zinc-400"
                  >
                    {formatNumber(tick, 1)}
                  </text>
                </g>
              ))}

              {buildTicks(yMin, yMax, 4).map((tick) => (
                <g key={`y-${tick}`}>
                  <line
                    x1={margin}
                    y1={toSvgY(tick)}
                    x2={margin + plotWidth}
                    y2={toSvgY(tick)}
                    stroke="currentColor"
                    strokeDasharray="4 4"
                    className="text-zinc-200 dark:text-zinc-800"
                  />
                  <text
                    x={margin - 8}
                    y={toSvgY(tick) + 4}
                    textAnchor="end"
                    fontSize="11"
                    fill="currentColor"
                    className="text-zinc-500 dark:text-zinc-400"
                  >
                    {formatNumber(tick, 1)}
                  </text>
                </g>
              ))}

              <line
                x1={margin}
                y1={xAxisY}
                x2={margin + plotWidth}
                y2={xAxisY}
                stroke="currentColor"
                className="text-zinc-500 dark:text-zinc-400"
              />
              <line
                x1={yAxisX}
                y1={margin}
                x2={yAxisX}
                y2={margin + plotHeight}
                stroke="currentColor"
                className="text-zinc-500 dark:text-zinc-400"
              />

              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                points={polylinePoints}
                className="text-blue-600 dark:text-blue-400"
              />

              {tableRows.map((row) => (
                <circle
                  key={row.x}
                  cx={toSvgX(row.x)}
                  cy={toSvgY(row.y)}
                  r="4.5"
                  fill="currentColor"
                  className="text-emerald-600 dark:text-emerald-400"
                />
              ))}
            </svg>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Tabelværdier
              </h3>
              <span className="text-xs text-zinc-500">Aflæs sammenhængen mellem x og y</span>
            </div>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-zinc-300 bg-zinc-50 px-3 py-2 text-left dark:border-zinc-700 dark:bg-zinc-900">
                      x
                    </th>
                    <th className="border border-zinc-300 bg-zinc-50 px-3 py-2 text-left dark:border-zinc-700 dark:bg-zinc-900">
                      y = f(x)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => (
                    <tr key={`row-${row.x}`}>
                      <td className="border border-zinc-300 px-3 py-2 dark:border-zinc-700">
                        {formatNumber(row.x, 1)}
                      </td>
                      <td className="border border-zinc-300 px-3 py-2 dark:border-zinc-700">
                        {formatNumber(row.y)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              Justér parametre
            </h3>

            <div className="mt-4 space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
              {functionKind === "lineaer" && (
                <>
                  <label className="block">
                    a (hældning): <span className="font-semibold">{formatNumber(lineaerA)}</span>
                    <input
                      type="range"
                      min="-3"
                      max="3"
                      step="0.1"
                      value={lineaerA}
                      onChange={(event) => setLineaerA(Number(event.target.value))}
                      className="mt-2 w-full"
                    />
                  </label>
                  <label className="block">
                    b (skæring): <span className="font-semibold">{formatNumber(lineaerB)}</span>
                    <input
                      type="range"
                      min="-6"
                      max="6"
                      step="0.1"
                      value={lineaerB}
                      onChange={(event) => setLineaerB(Number(event.target.value))}
                      className="mt-2 w-full"
                    />
                  </label>
                </>
              )}

              {functionKind === "andengrad" && (
                <>
                  <label className="block">
                    a (krumning): <span className="font-semibold">{formatNumber(andengradA)}</span>
                    <input
                      type="range"
                      min="-1.5"
                      max="1.5"
                      step="0.1"
                      value={andengradA}
                      onChange={(event) => setAndengradA(Number(event.target.value))}
                      className="mt-2 w-full"
                    />
                  </label>
                  <label className="block">
                    b (symmetri): <span className="font-semibold">{formatNumber(andengradB)}</span>
                    <input
                      type="range"
                      min="-4"
                      max="4"
                      step="0.1"
                      value={andengradB}
                      onChange={(event) => setAndengradB(Number(event.target.value))}
                      className="mt-2 w-full"
                    />
                  </label>
                  <label className="block">
                    c (y-skæring): <span className="font-semibold">{formatNumber(andengradC)}</span>
                    <input
                      type="range"
                      min="-6"
                      max="6"
                      step="0.1"
                      value={andengradC}
                      onChange={(event) => setAndengradC(Number(event.target.value))}
                      className="mt-2 w-full"
                    />
                  </label>
                </>
              )}

              {functionKind === "eksponential" && (
                <>
                  <label className="block">
                    a (fremskrivningsfaktor):{" "}
                    <span className="font-semibold">{formatNumber(eksponentialA)}</span>
                    <input
                      type="range"
                      min="0.5"
                      max="1.8"
                      step="0.05"
                      value={eksponentialA}
                      onChange={(event) => setEksponentialA(Number(event.target.value))}
                      className="mt-2 w-full"
                    />
                  </label>
                  <label className="block">
                    b (startværdi): <span className="font-semibold">{formatNumber(eksponentialB)}</span>
                    <input
                      type="range"
                      min="1"
                      max="8"
                      step="0.5"
                      value={eksponentialB}
                      onChange={(event) => setEksponentialB(Number(event.target.value))}
                      className="mt-2 w-full"
                    />
                  </label>
                </>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              Hurtige observationer
            </h3>
            <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              {graphModel.facts.map((fact) => (
                <li key={fact.label} className="rounded-xl bg-zinc-50 px-3 py-2 dark:bg-zinc-900">
                  <span className="block text-xs uppercase tracking-wide text-zinc-500">
                    {fact.label}
                  </span>
                  <span className="mt-1 block font-semibold text-zinc-900 dark:text-zinc-50">
                    {fact.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
