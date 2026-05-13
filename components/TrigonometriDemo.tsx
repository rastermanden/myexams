"use client";

import { useMemo, useState } from "react";
import {
  degreesToRadians,
  rightTriangleFromLegs,
  sideFromSine,
} from "@/lib/trigonometry";

const GRAPH_WIDTH = 680;
const GRAPH_HEIGHT = 260;
const GRAPH_PADDING = 20;

function formatNumber(value: number, maxFractionDigits = 2): string {
  return value.toLocaleString("da-DK", { maximumFractionDigits: maxFractionDigits });
}

function sliderLabel(value: number): string {
  return value.toLocaleString("da-DK", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

export default function TrigonometriDemo() {
  const [adjacent, setAdjacent] = useState(7);
  const [opposite, setOpposite] = useState(4);
  const [formulaChoice, setFormulaChoice] = useState<"sin" | "cos" | "tan">("sin");
  const [hasCalculated, setHasCalculated] = useState(false);
  const [unitAngle, setUnitAngle] = useState(35);
  const [amplitude, setAmplitude] = useState(1);
  const [frequency, setFrequency] = useState(1);
  const [phaseShift, setPhaseShift] = useState(0);

  const triangle = useMemo(
    () => rightTriangleFromLegs(adjacent, opposite),
    [adjacent, opposite],
  );
  const formulaIsCorrect = formulaChoice === "sin";
  const calcResult = useMemo(
    () => sideFromSine(triangle.angleDegrees, triangle.hypotenuse),
    [triangle.angleDegrees, triangle.hypotenuse],
  );

  const triangleScale = 180 / Math.max(triangle.adjacent, triangle.opposite, 1);
  const triangleBase = triangle.adjacent * triangleScale;
  const triangleHeight = triangle.opposite * triangleScale;

  const unitAngleRad = degreesToRadians(unitAngle);
  const unitCircleX = Math.cos(unitAngleRad);
  const unitCircleY = Math.sin(unitAngleRad);

  const graphPath = useMemo(() => {
    const points: string[] = [];
    const xMin = -2 * Math.PI;
    const xMax = 2 * Math.PI;
    const drawableWidth = GRAPH_WIDTH - GRAPH_PADDING * 2;
    const centerY = GRAPH_HEIGHT / 2;
    const yScale = 40;

    for (let i = 0; i <= 260; i += 1) {
      const t = i / 260;
      const x = xMin + t * (xMax - xMin);
      const y = amplitude * Math.sin(frequency * (x - phaseShift));
      const svgX = GRAPH_PADDING + t * drawableWidth;
      const svgY = centerY - y * yScale;
      points.push(`${i === 0 ? "M" : "L"} ${svgX.toFixed(2)} ${svgY.toFixed(2)}`);
    }

    return points.join(" ");
  }, [amplitude, frequency, phaseShift]);

  const period = (2 * Math.PI) / frequency;

  return (
    <section className="mt-8 space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Interaktiv demo: trigonometri
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        Arbejd med retvinklet trigonometri, formelvalg, enhedscirkel og trigonometriske grafer.
      </p>

      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          1) Retvinklet trekant (ændr sider og vinkel)
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_220px]">
          <div className="overflow-x-auto">
            <svg viewBox="0 0 360 250" role="img" aria-label="Retvinklet trekant" className="h-auto w-full min-w-[280px]">
              <polygon
                points={`40,220 ${40 + triangleBase},220 ${40 + triangleBase},${220 - triangleHeight}`}
                fill="rgba(59,130,246,0.15)"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-600 dark:text-blue-400"
              />
              <text x={40 + triangleBase / 2} y={238} textAnchor="middle" className="fill-zinc-700 text-xs dark:fill-zinc-300">
                hosliggende = {formatNumber(triangle.adjacent)}
              </text>
              <text x={40 + triangleBase + 8} y={220 - triangleHeight / 2} className="fill-zinc-700 text-xs dark:fill-zinc-300">
                modstående = {formatNumber(triangle.opposite)}
              </text>
              <text
                x={40 + triangleBase / 2 + 16}
                y={220 - triangleHeight / 2 - 6}
                className="fill-zinc-700 text-xs dark:fill-zinc-300"
              >
                hypotenuse = {formatNumber(triangle.hypotenuse)}
              </text>
              <text x={62} y={210} className="fill-zinc-700 text-xs dark:fill-zinc-300">
                θ = {formatNumber(triangle.angleDegrees, 1)}°
              </text>
            </svg>
          </div>
          <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
            <label className="block">
              Hosliggende side: <strong>{sliderLabel(adjacent)}</strong>
              <input
                type="range"
                min="1"
                max="12"
                step="0.1"
                value={adjacent}
                onChange={(event) => setAdjacent(Number(event.target.value))}
                className="mt-2 w-full"
              />
            </label>
            <label className="block">
              Modstående side: <strong>{sliderLabel(opposite)}</strong>
              <input
                type="range"
                min="1"
                max="12"
                step="0.1"
                value={opposite}
                onChange={(event) => setOpposite(Number(event.target.value))}
                className="mt-2 w-full"
              />
            </label>
            <p>sin(θ) = {formatNumber(triangle.sin, 3)}</p>
            <p>cos(θ) = {formatNumber(triangle.cos, 3)}</p>
            <p>tan(θ) = {formatNumber(triangle.tan, 3)}</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          2) Trin-for-trin med formelvalg
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Opgave: Find den modstående side ud fra vinkel θ og hypotenusen.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
          <label className="block text-sm text-zinc-700 dark:text-zinc-200">
            Vælg formel
            <select
              value={formulaChoice}
              onChange={(event) => setFormulaChoice(event.target.value as "sin" | "cos" | "tan")}
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            >
              <option value="sin">sin(θ) = modstående / hypotenuse</option>
              <option value="cos">cos(θ) = hosliggende / hypotenuse</option>
              <option value="tan">tan(θ) = modstående / hosliggende</option>
            </select>
          </label>
          <button
            type="button"
            onClick={() => setHasCalculated(true)}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Beregn
          </button>
        </div>
        {hasCalculated && (
          <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-700 dark:bg-zinc-900">
            {formulaIsCorrect ? (
              <ol className="list-decimal space-y-1 pl-5 text-zinc-700 dark:text-zinc-200">
                <li>Vælg relationen sin(θ) = modstående / hypotenuse.</li>
                <li>Isolér modstående: modstående = hypotenuse · sin(θ).</li>
                <li>
                  Indsæt værdier: modstående = {formatNumber(triangle.hypotenuse)} · sin(
                  {formatNumber(triangle.angleDegrees, 1)}°).
                </li>
                <li>Resultat: modstående = {formatNumber(calcResult)}.</li>
              </ol>
            ) : (
              <p className="text-amber-700 dark:text-amber-300">
                Ikke helt: For at finde den modstående side fra vinkel + hypotenuse skal du bruge
                sinusrelationen i den retvinklede trekant.
              </p>
            )}
          </div>
        )}
      </div>

      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          3) Enhedscirkel med rotation
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_220px]">
          <div className="overflow-x-auto">
            <svg viewBox="0 0 260 260" role="img" aria-label="Enhedscirkel" className="h-auto w-full min-w-[240px]">
              <circle cx="130" cy="130" r="90" fill="transparent" stroke="currentColor" className="text-zinc-400 dark:text-zinc-600" />
              <line x1="40" y1="130" x2="220" y2="130" stroke="currentColor" className="text-zinc-500 dark:text-zinc-500" />
              <line x1="130" y1="40" x2="130" y2="220" stroke="currentColor" className="text-zinc-500 dark:text-zinc-500" />
              <line
                x1="130"
                y1="130"
                x2={130 + unitCircleX * 90}
                y2={130 - unitCircleY * 90}
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-600 dark:text-blue-400"
              />
              <circle
                cx={130 + unitCircleX * 90}
                cy={130 - unitCircleY * 90}
                r="5"
                fill="currentColor"
                className="text-blue-600 dark:text-blue-400"
              />
            </svg>
          </div>
          <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
            <label className="block">
              Vinkel: <strong>{formatNumber(unitAngle, 1)}°</strong>
              <input
                type="range"
                min="0"
                max="360"
                step="1"
                value={unitAngle}
                onChange={(event) => setUnitAngle(Number(event.target.value))}
                className="mt-2 w-full"
              />
            </label>
            <p>cos(θ) = x = {formatNumber(unitCircleX, 3)}</p>
            <p>sin(θ) = y = {formatNumber(unitCircleY, 3)}</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          4) Grafer: amplitude, periodicitet og faseforskydning
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Funktion: y = A · sin(B · (x - C)), hvor perioden er 2π / B.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-900">
          <svg
            viewBox={`0 0 ${GRAPH_WIDTH} ${GRAPH_HEIGHT}`}
            role="img"
            aria-label="Graf for trigonometrisk funktion"
            className="h-auto w-full min-w-[360px]"
          >
            <line x1="0" y1={GRAPH_HEIGHT / 2} x2={GRAPH_WIDTH} y2={GRAPH_HEIGHT / 2} stroke="currentColor" className="text-zinc-400 dark:text-zinc-600" />
            <line x1={GRAPH_WIDTH / 2} y1="0" x2={GRAPH_WIDTH / 2} y2={GRAPH_HEIGHT} stroke="currentColor" className="text-zinc-400 dark:text-zinc-600" />
            <path d={graphPath} fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-600 dark:text-blue-400" />
          </svg>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm text-zinc-700 dark:text-zinc-200">
          <label className="block">
            Amplitude A: <strong>{sliderLabel(amplitude)}</strong>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={amplitude}
              onChange={(event) => setAmplitude(Number(event.target.value))}
              className="mt-2 w-full"
            />
          </label>
          <label className="block">
            Frekvens B: <strong>{sliderLabel(frequency)}</strong>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={frequency}
              onChange={(event) => setFrequency(Number(event.target.value))}
              className="mt-2 w-full"
            />
          </label>
          <label className="block">
            Fase C (rad): <strong>{sliderLabel(phaseShift)}</strong>
            <input
              type="range"
              min={(-Math.PI).toString()}
              max={Math.PI.toString()}
              step="0.1"
              value={phaseShift}
              onChange={(event) => setPhaseShift(Number(event.target.value))}
              className="mt-2 w-full"
            />
          </label>
        </div>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
          Aktuel periode: <strong>{formatNumber(period, 3)}</strong>
        </p>
      </div>
    </section>
  );
}
