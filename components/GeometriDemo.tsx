"use client";

import { useMemo, useState } from "react";
import {
  boxSurfaceArea,
  boxVolume,
  circleArea,
  coneSurfaceArea,
  coneVolume,
  cylinderSurfaceArea,
  cylinderVolume,
  pythagorasHypotenuse,
  pythagorasLeg,
  rectangleArea,
  sphereSurfaceArea,
  sphereVolume,
  squarePyramidSurfaceArea,
  squarePyramidVolume,
  triangleArea,
  vectorDot,
  vectorLength,
  vectorSum,
  type PlaneShape,
  type SolidShape,
  type Vector3,
} from "@/lib/geometry";

type PythagorasExercise = {
  prompt: string;
  expected: number;
  explanation: string;
};

const PYTHAGORAS_TRIPLES: Array<[number, number, number]> = [
  [3, 4, 5],
  [5, 12, 13],
  [8, 15, 17],
  [7, 24, 25],
  [9, 12, 15],
];

function randomPythagorasExercise(): PythagorasExercise {
  const scale = Math.floor(Math.random() * 3) + 1;
  const [aRaw, bRaw, cRaw] =
    PYTHAGORAS_TRIPLES[Math.floor(Math.random() * PYTHAGORAS_TRIPLES.length)];
  const a = aRaw * scale;
  const b = bRaw * scale;
  const c = cRaw * scale;

  if (Math.random() < 0.5) {
    return {
      prompt: `Beregn hypotenusen c, når kateterne er a = ${a} og b = ${b}.`,
      expected: pythagorasHypotenuse(a, b),
      explanation: `c = √(a² + b²) = √(${a}² + ${b}²) = ${c}`,
    };
  }

  return {
    prompt: `Beregn kateten a, når hypotenusen er c = ${c} og den anden katete er b = ${b}.`,
    expected: pythagorasLeg(c, b),
    explanation: `a = √(c² - b²) = √(${c}² - ${b}²) = ${a}`,
  };
}

function formatNumber(value: number): string {
  return value.toLocaleString("da-DK", { maximumFractionDigits: 2 });
}

function sliderValueLabel(value: number): string {
  return value.toLocaleString("da-DK", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

export default function GeometriDemo() {
  const [planeShape, setPlaneShape] = useState<PlaneShape>("rektangel");
  const [planeA, setPlaneA] = useState(6);
  const [planeB, setPlaneB] = useState(4);

  const [solidShape, setSolidShape] = useState<SolidShape>("kasse");
  const [solidA, setSolidA] = useState(5);
  const [solidB, setSolidB] = useState(3);
  const [solidC, setSolidC] = useState(4);

  const [exercise, setExercise] = useState<PythagorasExercise>(() =>
    randomPythagorasExercise(),
  );
  const [pythagorasAnswer, setPythagorasAnswer] = useState("");
  const [pythagorasFeedback, setPythagorasFeedback] = useState<
    "correct" | "wrong" | null
  >(null);

  const [aVector, setAVector] = useState<Vector3>({ x: 3, y: 2, z: 1 });
  const [bVector, setBVector] = useState<Vector3>({ x: 1, y: 4, z: -2 });

  const planeCalculation = useMemo(() => {
    switch (planeShape) {
      case "rektangel": {
        const area = rectangleArea(planeA, planeB);
        return {
          title: "Areal af rektangel",
          area,
          steps: [
            "Formel: A = l · b",
            `Indsæt værdier: A = ${formatNumber(planeA)} · ${formatNumber(planeB)}`,
            `Resultat: A = ${formatNumber(area)}`,
          ],
        };
      }
      case "trekant": {
        const area = triangleArea(planeA, planeB);
        return {
          title: "Areal af trekant",
          area,
          steps: [
            "Formel: A = (g · h) / 2",
            `Indsæt værdier: A = (${formatNumber(planeA)} · ${formatNumber(planeB)}) / 2`,
            `Resultat: A = ${formatNumber(area)}`,
          ],
        };
      }
      case "cirkel": {
        const area = circleArea(planeA);
        return {
          title: "Areal af cirkel",
          area,
          steps: [
            "Formel: A = π · r²",
            `Indsæt værdier: A = π · ${formatNumber(planeA)}²`,
            `Resultat: A = ${formatNumber(area)}`,
          ],
        };
      }
    }
  }, [planeA, planeB, planeShape]);

  const solidCalculation = useMemo(() => {
    switch (solidShape) {
      case "kasse": {
        const volume = boxVolume(solidA, solidB, solidC);
        const surfaceArea = boxSurfaceArea(solidA, solidB, solidC);
        return {
          volume,
          surfaceArea,
          steps: {
            volume: [
              "Formel: V = l · b · h",
              `Indsæt: V = ${formatNumber(solidA)} · ${formatNumber(solidB)} · ${formatNumber(solidC)}`,
              `Resultat: V = ${formatNumber(volume)}`,
            ],
            surfaceArea: [
              "Formel: O = 2(lb + lh + bh)",
              `Indsæt: O = 2(${formatNumber(solidA)}·${formatNumber(solidB)} + ${formatNumber(solidA)}·${formatNumber(solidC)} + ${formatNumber(solidB)}·${formatNumber(solidC)})`,
              `Resultat: O = ${formatNumber(surfaceArea)}`,
            ],
          },
        };
      }
      case "cylinder": {
        const volume = cylinderVolume(solidA, solidB);
        const surfaceArea = cylinderSurfaceArea(solidA, solidB);
        return {
          volume,
          surfaceArea,
          steps: {
            volume: [
              "Formel: V = π · r² · h",
              `Indsæt: V = π · ${formatNumber(solidA)}² · ${formatNumber(solidB)}`,
              `Resultat: V = ${formatNumber(volume)}`,
            ],
            surfaceArea: [
              "Formel: O = 2πr(r + h)",
              `Indsæt: O = 2π·${formatNumber(solidA)}·(${formatNumber(solidA)} + ${formatNumber(solidB)})`,
              `Resultat: O = ${formatNumber(surfaceArea)}`,
            ],
          },
        };
      }
      case "kegle": {
        const volume = coneVolume(solidA, solidB);
        const surfaceArea = coneSurfaceArea(solidA, solidB);
        return {
          volume,
          surfaceArea,
          steps: {
            volume: [
              "Formel: V = (π · r² · h) / 3",
              `Indsæt: V = (π · ${formatNumber(solidA)}² · ${formatNumber(solidB)}) / 3`,
              `Resultat: V = ${formatNumber(volume)}`,
            ],
            surfaceArea: [
              "Formel: O = πr(r + s), hvor s = √(r² + h²)",
              `Indsæt: r = ${formatNumber(solidA)}, h = ${formatNumber(solidB)}`,
              `Resultat: O = ${formatNumber(surfaceArea)}`,
            ],
          },
        };
      }
      case "kugle": {
        const volume = sphereVolume(solidA);
        const surfaceArea = sphereSurfaceArea(solidA);
        return {
          volume,
          surfaceArea,
          steps: {
            volume: [
              "Formel: V = 4/3 · π · r³",
              `Indsæt: V = 4/3 · π · ${formatNumber(solidA)}³`,
              `Resultat: V = ${formatNumber(volume)}`,
            ],
            surfaceArea: [
              "Formel: O = 4πr²",
              `Indsæt: O = 4π · ${formatNumber(solidA)}²`,
              `Resultat: O = ${formatNumber(surfaceArea)}`,
            ],
          },
        };
      }
      case "pyramide": {
        const volume = squarePyramidVolume(solidA, solidB);
        const surfaceArea = squarePyramidSurfaceArea(solidA, solidB);
        return {
          volume,
          surfaceArea,
          steps: {
            volume: [
              "Formel: V = (a² · h) / 3",
              `Indsæt: V = (${formatNumber(solidA)}² · ${formatNumber(solidB)}) / 3`,
              `Resultat: V = ${formatNumber(volume)}`,
            ],
            surfaceArea: [
              "Formel: O = a² + 2as, hvor s = √((a/2)² + h²)",
              `Indsæt: a = ${formatNumber(solidA)}, h = ${formatNumber(solidB)}`,
              `Resultat: O = ${formatNumber(surfaceArea)}`,
            ],
          },
        };
      }
    }
  }, [solidA, solidB, solidC, solidShape]);

  const sumVector = useMemo(() => vectorSum(aVector, bVector), [aVector, bVector]);
  const dotProduct = useMemo(() => vectorDot(aVector, bVector), [aVector, bVector]);
  const lengthA = useMemo(() => vectorLength(aVector), [aVector]);
  const lengthB = useMemo(() => vectorLength(bVector), [bVector]);

  function checkPythagorasAnswer() {
    const parsed = Number(pythagorasAnswer.replace(",", "."));
    if (!Number.isFinite(parsed)) {
      setPythagorasFeedback("wrong");
      return;
    }
    setPythagorasFeedback(Math.abs(parsed - exercise.expected) <= 0.05 ? "correct" : "wrong");
  }

  function newPythagorasExercise() {
    setExercise(randomPythagorasExercise());
    setPythagorasAnswer("");
    setPythagorasFeedback(null);
  }

  const toSvgX = (x: number) => 120 + x * 16;
  const toSvgY = (y: number) => 120 - y * 16;

  return (
    <section className="mt-8 space-y-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Interaktive geometri-værktøjer
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Interaktiv figur + areal
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Vælg figur og justér mål. Figuren opdateres med det samme.
          </p>

          <label className="mt-4 block text-sm text-zinc-700 dark:text-zinc-300">
            Figur
            <select
              value={planeShape}
              onChange={(event) => setPlaneShape(event.target.value as PlaneShape)}
              className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            >
              <option value="rektangel">Rektangel</option>
              <option value="trekant">Trekant</option>
              <option value="cirkel">Cirkel</option>
            </select>
          </label>

          <label className="mt-4 block text-sm text-zinc-700 dark:text-zinc-300">
            {planeShape === "cirkel" ? "Radius" : "Mål A"}: <span className="font-semibold">{sliderValueLabel(planeA)}</span>
            <input
              type="range"
              min="1"
              max="12"
              step="0.5"
              value={planeA}
              onChange={(event) => setPlaneA(Number(event.target.value))}
              className="mt-2 w-full"
            />
          </label>

          {planeShape !== "cirkel" && (
            <label className="mt-3 block text-sm text-zinc-700 dark:text-zinc-300">
              {planeShape === "trekant" ? "Højde" : "Mål B"}: <span className="font-semibold">{sliderValueLabel(planeB)}</span>
              <input
                type="range"
                min="1"
                max="12"
                step="0.5"
                value={planeB}
                onChange={(event) => setPlaneB(Number(event.target.value))}
                className="mt-2 w-full"
              />
            </label>
          )}

          <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-900">
            <svg viewBox="0 0 260 180" role="img" aria-label="Interaktiv geometrifigur" className="h-auto w-full">
              {planeShape === "rektangel" && (
                <rect
                  x="40"
                  y="20"
                  width={planeA * 14}
                  height={planeB * 10}
                  fill="rgba(37,99,235,0.25)"
                  stroke="rgb(37,99,235)"
                  strokeWidth="2"
                />
              )}
              {planeShape === "trekant" && (
                <polygon
                  points={`40,150 ${40 + planeA * 14},150 40,${150 - planeB * 10}`}
                  fill="rgba(5,150,105,0.25)"
                  stroke="rgb(5,150,105)"
                  strokeWidth="2"
                />
              )}
              {planeShape === "cirkel" && (
                <circle
                  cx="130"
                  cy="90"
                  r={Math.min(65, planeA * 8)}
                  fill="rgba(168,85,247,0.25)"
                  stroke="rgb(168,85,247)"
                  strokeWidth="2"
                />
              )}
            </svg>
          </div>

          <div className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
            <p className="font-semibold">{planeCalculation.title}</p>
            <ol className="mt-1 list-decimal space-y-1 pl-5">
              {planeCalculation.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-2 font-semibold">Areal: {formatNumber(planeCalculation.area)}</p>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Trinvis rumfang + overfladeareal
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Vælg rumlig figur og se begge udregninger trin for trin.
          </p>

          <label className="mt-4 block text-sm text-zinc-700 dark:text-zinc-300">
            Rumlig figur
            <select
              value={solidShape}
              onChange={(event) => setSolidShape(event.target.value as SolidShape)}
              className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            >
              <option value="kasse">Kasse</option>
              <option value="cylinder">Cylinder</option>
              <option value="kegle">Kegle</option>
              <option value="kugle">Kugle</option>
              <option value="pyramide">Pyramide (kvadratisk)</option>
            </select>
          </label>

          <label className="mt-4 block text-sm text-zinc-700 dark:text-zinc-300">
            {solidShape === "kasse" ? "Længde" : solidShape === "kugle" ? "Radius" : "Mål A"}: <span className="font-semibold">{sliderValueLabel(solidA)}</span>
            <input
              type="range"
              min="1"
              max="12"
              step="0.5"
              value={solidA}
              onChange={(event) => setSolidA(Number(event.target.value))}
              className="mt-2 w-full"
            />
          </label>

          {solidShape !== "kugle" && (
            <label className="mt-3 block text-sm text-zinc-700 dark:text-zinc-300">
              {solidShape === "kasse" ? "Bredde" : "Højde"}: <span className="font-semibold">{sliderValueLabel(solidB)}</span>
              <input
                type="range"
                min="1"
                max="12"
                step="0.5"
                value={solidB}
                onChange={(event) => setSolidB(Number(event.target.value))}
                className="mt-2 w-full"
              />
            </label>
          )}

          {solidShape === "kasse" && (
            <label className="mt-3 block text-sm text-zinc-700 dark:text-zinc-300">
              Højde: <span className="font-semibold">{sliderValueLabel(solidC)}</span>
              <input
                type="range"
                min="1"
                max="12"
                step="0.5"
                value={solidC}
                onChange={(event) => setSolidC(Number(event.target.value))}
                className="mt-2 w-full"
              />
            </label>
          )}

          <div className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
            <p className="font-semibold">Rumfang</p>
            <ol className="mt-1 list-decimal space-y-1 pl-5">
              {solidCalculation.steps.volume.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-2 font-semibold">V = {formatNumber(solidCalculation.volume)}</p>

            <p className="mt-4 font-semibold">Overfladeareal</p>
            <ol className="mt-1 list-decimal space-y-1 pl-5">
              {solidCalculation.steps.surfaceArea.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-2 font-semibold">O = {formatNumber(solidCalculation.surfaceArea)}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Pythagoras-træner
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{exercise.prompt}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <input
              type="text"
              inputMode="decimal"
              value={pythagorasAnswer}
              onChange={(event) => setPythagorasAnswer(event.target.value)}
              placeholder="Skriv dit svar"
              className="min-h-11 flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            />
            <button
              type="button"
              onClick={checkPythagorasAnswer}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Tjek svar
            </button>
            <button
              type="button"
              onClick={newPythagorasExercise}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Ny opgave
            </button>
          </div>

          {pythagorasFeedback === "correct" && (
            <p className="mt-3 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              Korrekt! {exercise.explanation}
            </p>
          )}
          {pythagorasFeedback === "wrong" && (
            <p className="mt-3 text-sm font-medium text-rose-700 dark:text-rose-400">
              Ikke helt rigtigt. Prøv igen eller klik “Ny opgave”.
            </p>
          )}
        </div>

        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Vektor-visualisering (2D/3D)
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Justér komponenterne og aflæs længde, sum og skalarprodukt.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {["x", "y", "z"].map((axis) => (
              <label key={`a-${axis}`} className="text-sm text-zinc-700 dark:text-zinc-300">
                A.{axis}: <span className="font-semibold">{aVector[axis as keyof Vector3]}</span>
                <input
                  type="range"
                  min="-6"
                  max="6"
                  step="1"
                  value={aVector[axis as keyof Vector3]}
                  onChange={(event) =>
                    setAVector((prev) => ({ ...prev, [axis]: Number(event.target.value) }))
                  }
                  className="mt-2 w-full"
                />
              </label>
            ))}
            {["x", "y", "z"].map((axis) => (
              <label key={`b-${axis}`} className="text-sm text-zinc-700 dark:text-zinc-300">
                B.{axis}: <span className="font-semibold">{bVector[axis as keyof Vector3]}</span>
                <input
                  type="range"
                  min="-6"
                  max="6"
                  step="1"
                  value={bVector[axis as keyof Vector3]}
                  onChange={(event) =>
                    setBVector((prev) => ({ ...prev, [axis]: Number(event.target.value) }))
                  }
                  className="mt-2 w-full"
                />
              </label>
            ))}
          </div>

          <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-900">
            <svg viewBox="0 0 240 240" role="img" aria-label="2D-vektordiagram" className="h-auto w-full">
              <line x1="20" y1="120" x2="220" y2="120" stroke="currentColor" className="text-zinc-400 dark:text-zinc-600" />
              <line x1="120" y1="20" x2="120" y2="220" stroke="currentColor" className="text-zinc-400 dark:text-zinc-600" />
              <line x1="120" y1="120" x2={toSvgX(aVector.x)} y2={toSvgY(aVector.y)} stroke="rgb(37,99,235)" strokeWidth="3" />
              <line x1="120" y1="120" x2={toSvgX(bVector.x)} y2={toSvgY(bVector.y)} stroke="rgb(16,185,129)" strokeWidth="3" />
              <line x1="120" y1="120" x2={toSvgX(sumVector.x)} y2={toSvgY(sumVector.y)} stroke="rgb(234,88,12)" strokeWidth="3" />
            </svg>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Blå: A, grøn: B, orange: A + B (vist i 2D-plan)
            </p>
          </div>

          <div className="mt-4 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <p>
              |A| = {formatNumber(lengthA)}, |B| = {formatNumber(lengthB)}
            </p>
            <p>
              A + B = ({sumVector.x}, {sumVector.y}, {sumVector.z})
            </p>
            <p>
              A · B = {dotProduct}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
