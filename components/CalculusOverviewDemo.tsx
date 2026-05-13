"use client";

import { useRef, useState } from "react";

const SVG_WIDTH = 640;
const SVG_HEIGHT = 280;
const PADDING = 30;

const GRAPH_MIN_X = -2;
const GRAPH_MAX_X = 2;
const GRAPH_MIN_Y = -2;
const GRAPH_MAX_Y = 6;

const RIEMANN_MIN_X = 0;
const RIEMANN_MAX_X = 2;
const RIEMANN_MIN_Y = 0;
const RIEMANN_MAX_Y = 6;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function buildPath(points: Array<{ x: number; y: number }>) {
  return points.map((point, i) => `${i === 0 ? "M" : "L"}${point.x} ${point.y}`).join(" ");
}

export default function CalculusOverviewDemo() {
  const [x0, setX0] = useState(1);
  const [a, setA] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [rectangleCount, setRectangleCount] = useState(6);
  const graphRef = useRef<SVGSVGElement>(null);

  const plotWidth = SVG_WIDTH - 2 * PADDING;
  const plotHeight = SVG_HEIGHT - 2 * PADDING;

  const toX = (x: number) => PADDING + ((x - GRAPH_MIN_X) / (GRAPH_MAX_X - GRAPH_MIN_X)) * plotWidth;
  const toY = (y: number) => PADDING + (1 - (y - GRAPH_MIN_Y) / (GRAPH_MAX_Y - GRAPH_MIN_Y)) * plotHeight;
  const fromY = (svgY: number) => GRAPH_MIN_Y + (1 - (svgY - PADDING) / plotHeight) * (GRAPH_MAX_Y - GRAPH_MIN_Y);

  const tangentData = {
    fx0: x0 * x0,
    slope: 2 * x0,
  };

  const tangentPath = buildPath(
    Array.from({ length: 80 }, (_, i) => {
      const x = GRAPH_MIN_X + (i / 79) * (GRAPH_MAX_X - GRAPH_MIN_X);
      const y = tangentData.fx0 + tangentData.slope * (x - x0);
      return { x: toX(x), y: toY(y) };
    }),
  );

  const parabolaPath = buildPath(
    Array.from({ length: 100 }, (_, i) => {
      const x = GRAPH_MIN_X + (i / 99) * (GRAPH_MAX_X - GRAPH_MIN_X);
      const y = x * x;
      return { x: toX(x), y: toY(y) };
    }),
  );

  const draggableParabolaPath = buildPath(
    Array.from({ length: 100 }, (_, i) => {
      const x = GRAPH_MIN_X + (i / 99) * (GRAPH_MAX_X - GRAPH_MIN_X);
      const y = a * x * x;
      return { x: toX(x), y: toY(y) };
    }),
  );

  const derivativePath = buildPath(
    Array.from({ length: 80 }, (_, i) => {
      const x = GRAPH_MIN_X + (i / 79) * (GRAPH_MAX_X - GRAPH_MIN_X);
      const y = 2 * a * x;
      return { x: toX(x), y: toY(y) };
    }),
  );

  const dragHandleXValue = 1;
  const dragHandleYValue = a;

  const updateAFromClientY = (clientY: number) => {
    const rect = graphRef.current?.getBoundingClientRect();
    if (!rect) return;
    const svgY = ((clientY - rect.top) / rect.height) * SVG_HEIGHT;
    const yValue = fromY(svgY);
    setA(clamp(yValue, -1.5, 2));
  };

  const dx = (RIEMANN_MAX_X - RIEMANN_MIN_X) / rectangleCount;
  const rectangles = Array.from({ length: rectangleCount }, (_, i) => {
    const xLeft = RIEMANN_MIN_X + i * dx;
    const height = xLeft * xLeft + 1;
    return { xLeft, height };
  });
  const leftArea = rectangles.reduce((sum, rectangle) => sum + rectangle.height * dx, 0);
  const exactArea = 14 / 3;

  const toAreaX = (x: number) =>
    PADDING + ((x - RIEMANN_MIN_X) / (RIEMANN_MAX_X - RIEMANN_MIN_X)) * plotWidth;
  const toAreaY = (y: number) =>
    PADDING + (1 - (y - RIEMANN_MIN_Y) / (RIEMANN_MAX_Y - RIEMANN_MIN_Y)) * plotHeight;

  const areaCurvePath = buildPath(
    Array.from({ length: 100 }, (_, i) => {
      const x = RIEMANN_MIN_X + (i / 99) * (RIEMANN_MAX_X - RIEMANN_MIN_X);
      const y = x * x + 1;
      return { x: toAreaX(x), y: toAreaY(y) };
    }),
  );

  return (
    <section className="mt-8 space-y-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Interaktiv demo: differential- og integralregning
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Udforsk tangent, afledt graf, areal under graf og trin-for-trin regler på dansk.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Tangentvisualisering for f(x)=x²
        </h3>
        <label className="block text-sm text-zinc-700 dark:text-zinc-300">
          Vælg x₀: <span className="font-semibold">{x0.toFixed(2)}</span>
          <input
            type="range"
            min="-1.8"
            max="1.8"
            step="0.05"
            value={x0}
            onChange={(event) => setX0(Number(event.target.value))}
            className="mt-2 w-full"
          />
        </label>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Tangent i x₀={x0.toFixed(2)}: y = {tangentData.slope.toFixed(2)}(x - {x0.toFixed(2)}) + {tangentData.fx0.toFixed(2)}
        </p>
        <svg viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} className="h-auto w-full rounded-xl border border-zinc-200 bg-zinc-50 p-2 dark:border-zinc-700 dark:bg-zinc-950" role="img" aria-label="Graf med tangent til parablen">
          <path d={parabolaPath} fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600 dark:text-blue-400" />
          <path d={tangentPath} fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-600 dark:text-emerald-400" />
          <circle cx={toX(x0)} cy={toY(tangentData.fx0)} r="5" fill="currentColor" className="text-rose-600 dark:text-rose-400" />
        </svg>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Træk en graf og se den afledede
        </h3>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Træk punktet ved x=1 op/ned for at ændre a i f(x)=a·x². Den afledede opdateres som f′(x)=2a·x.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <svg
            ref={graphRef}
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            className="h-auto w-full rounded-xl border border-zinc-200 bg-zinc-50 p-2 touch-none dark:border-zinc-700 dark:bg-zinc-950"
            role="img"
            aria-label="Parabel med trækbart punkt"
          >
            <path d={draggableParabolaPath} fill="none" stroke="currentColor" strokeWidth="3" className="text-violet-600 dark:text-violet-400" />
            <circle
              cx={toX(dragHandleXValue)}
              cy={toY(dragHandleYValue)}
              r="8"
              className="cursor-grab text-amber-500 active:cursor-grabbing"
              fill="currentColor"
              onPointerDown={(event) => {
                setDragging(true);
                event.currentTarget.setPointerCapture(event.pointerId);
                updateAFromClientY(event.clientY);
              }}
              onPointerMove={(event) => {
                if (!dragging) return;
                updateAFromClientY(event.clientY);
              }}
              onPointerUp={() => setDragging(false)}
            />
          </svg>

          <svg
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            className="h-auto w-full rounded-xl border border-zinc-200 bg-zinc-50 p-2 dark:border-zinc-700 dark:bg-zinc-950"
            role="img"
            aria-label="Graf for afledt funktion"
          >
            <path d={derivativePath} fill="none" stroke="currentColor" strokeWidth="3" className="text-cyan-600 dark:text-cyan-400" />
          </svg>
        </div>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">Aktuel model: f(x) = {a.toFixed(2)}·x², f′(x) = {(2 * a).toFixed(2)}·x</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Areal under graf med rektangelsummer
        </h3>
        <label className="block text-sm text-zinc-700 dark:text-zinc-300">
          Antal rektangler: <span className="font-semibold">{rectangleCount}</span>
          <input
            type="range"
            min="2"
            max="20"
            step="1"
            value={rectangleCount}
            onChange={(event) => setRectangleCount(Number(event.target.value))}
            className="mt-2 w-full"
          />
        </label>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Vi approksimerer ∫₀² (x²+1)dx med venstre rektangelsum. Approx: {leftArea.toFixed(4)} · Eksakt: {(exactArea).toFixed(4)}.
        </p>
        <svg viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} className="h-auto w-full rounded-xl border border-zinc-200 bg-zinc-50 p-2 dark:border-zinc-700 dark:bg-zinc-950" role="img" aria-label="Areal under graf med rektangler">
          {rectangles.map((rectangle, i) => {
            const x = toAreaX(rectangle.xLeft);
            const y = toAreaY(rectangle.height);
            const width = toAreaX(rectangle.xLeft + dx) - toAreaX(rectangle.xLeft);
            const height = toAreaY(0) - y;
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width={width}
                height={height}
                fill="currentColor"
                className="text-blue-200 dark:text-blue-900"
                stroke="currentColor"
              />
            );
          })}
          <path d={areaCurvePath} fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-700 dark:text-blue-400" />
        </svg>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Trin-for-trin differentiation og integration
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-4 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">Differentiation af h(x)=x³-3x²+2x</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5">
              <li>d/dx(x³)=3x²</li>
              <li>d/dx(-3x²)=-6x</li>
              <li>d/dx(2x)=2</li>
                <li>h′(x)=3x²-6x+2</li>
            </ol>
          </div>
          <div className="rounded-xl border border-zinc-200 p-4 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">Integration af h(x)=x³-3x²+2x</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5">
              <li>∫x³dx = x⁴/4</li>
              <li>∫(-3x²)dx = -x³</li>
              <li>∫2x dx = x²</li>
              <li>H(x)=x⁴/4 - x³ + x² + C</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
