"use client";

import { useMemo, useState } from "react";

type Point = { id: number; x: number; y: number };

const MIN_X = 0;
const MAX_X = 10;
const MIN_Y = -5;
const MAX_Y = 15;
const SVG_WIDTH = 640;
const SVG_HEIGHT = 360;
const SVG_MARGIN = 36;
const RANDOM_SLOPE_MIN = 0.3;
const RANDOM_SLOPE_RANGE = 2;
const RANDOM_INTERCEPT_MIN = 1;
const RANDOM_INTERCEPT_RANGE = 5;
const NOISE_AMPLITUDE = 2.5;
const POINT_COUNT = 8;

const INITIAL_POINTS: Point[] = [
  { id: 1, x: 1, y: 2.1 },
  { id: 2, x: 2.4, y: 3.6 },
  { id: 3, x: 3.2, y: 4.2 },
  { id: 4, x: 4.8, y: 6.8 },
  { id: 5, x: 6, y: 7.3 },
  { id: 6, x: 7.5, y: 9.8 },
  { id: 7, x: 8.9, y: 10.6 },
];

let pointIdCounter = INITIAL_POINTS.length + 1;

function randomPoints(): Point[] {
  const targetSlope = Math.random() * RANDOM_SLOPE_RANGE + RANDOM_SLOPE_MIN;
  const targetIntercept =
    Math.random() * RANDOM_INTERCEPT_RANGE + RANDOM_INTERCEPT_MIN;
  return Array.from({ length: POINT_COUNT }, (_, i) => {
    const x = MIN_X + (i / (POINT_COUNT - 1)) * (MAX_X - MIN_X);
    const noise = (Math.random() - 0.5) * NOISE_AMPLITUDE;
    const y = targetSlope * x + targetIntercept + noise;
    return {
      id: pointIdCounter++,
      x,
      y: Math.max(MIN_Y, Math.min(MAX_Y, y)),
    };
  });
}

export default function LinearRegressionDemo() {
  const [slope, setSlope] = useState(1);
  const [intercept, setIntercept] = useState(0);
  const [points, setPoints] = useState<Point[]>(INITIAL_POINTS);

  const linePoints = useMemo(() => {
    const y1 = slope * MIN_X + intercept;
    const y2 = slope * MAX_X + intercept;
    return { x1: MIN_X, y1, x2: MAX_X, y2 };
  }, [slope, intercept]);

  const width = SVG_WIDTH;
  const height = SVG_HEIGHT;
  const margin = SVG_MARGIN;
  const plotWidth = width - margin * 2;
  const plotHeight = height - margin * 2;

  const toSvgX = (x: number) => margin + ((x - MIN_X) / (MAX_X - MIN_X)) * plotWidth;
  const toSvgY = (y: number) =>
    margin + (1 - (y - MIN_Y) / (MAX_Y - MIN_Y)) * plotHeight;

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Interaktiv demo: lineær regression
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        Justér hældning (m) og skæring (b), og se hvordan linjen y = m·x + b flytter
        sig i forhold til datapunkterne.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_220px]">
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-950">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            role="img"
            aria-label="Punktdiagram med regressionslinje"
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
            <line
              x1={toSvgX(linePoints.x1)}
              y1={toSvgY(linePoints.y1)}
              x2={toSvgX(linePoints.x2)}
              y2={toSvgY(linePoints.y2)}
              className="text-blue-600 dark:text-blue-400"
              stroke="currentColor"
              strokeWidth="3"
            />
            {points.map((point) => (
              <circle
                key={point.id}
                cx={toSvgX(point.x)}
                cy={toSvgY(point.y)}
                r="5"
                className="text-emerald-600 dark:text-emerald-400"
                fill="currentColor"
              />
            ))}
          </svg>
        </div>

        <div className="space-y-5">
          <label className="block text-sm text-zinc-700 dark:text-zinc-300">
            Hældning (m): <span className="font-semibold">{slope.toFixed(1)}</span>
            <input
              type="range"
              min="-2"
              max="3"
              step="0.1"
              value={slope}
              onChange={(event) => setSlope(Number(event.target.value))}
              className="mt-2 w-full"
            />
          </label>

          <label className="block text-sm text-zinc-700 dark:text-zinc-300">
            Skæring (b):{" "}
            <span className="font-semibold">{intercept.toFixed(1)}</span>
            <input
              type="range"
              min="-5"
              max="15"
              step="0.1"
              value={intercept}
              onChange={(event) => setIntercept(Number(event.target.value))}
              className="mt-2 w-full"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setSlope(1);
                setIntercept(0);
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Nulstil slidere
            </button>
            <button
              type="button"
              onClick={() => setPoints(randomPoints())}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Randomiser punkter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
