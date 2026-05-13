"use client";

import { useMemo, useState } from "react";

type Plate = {
  id: string;
  name: string;
  summary: string;
  points: string;
};

const PLATES: Plate[] = [
  {
    id: "pacific",
    name: "Stillehavspladen",
    summary: "Verdens største oceaniske plade med mange subduktionszoner omkring Ildringen.",
    points: "80,120 180,70 290,90 300,170 250,250 150,280 70,220",
  },
  {
    id: "north-american",
    name: "Nordamerikanske plade",
    summary: "Omfatter Nordamerika og dele af Atlanterhavets bund.",
    points: "120,60 220,45 280,70 255,130 210,170 130,155 90,110",
  },
  {
    id: "south-american",
    name: "Sydamerikanske plade",
    summary: "Har en aktiv vestlig subduktionszone med Andesbjergene.",
    points: "240,155 305,170 325,270 285,335 235,300 215,220",
  },
  {
    id: "african",
    name: "Afrikanske plade",
    summary: "Pladen deles gradvist i den østafrikanske riftdal.",
    points: "340,120 430,110 470,170 445,280 365,300 315,215",
  },
  {
    id: "eurasian",
    name: "Eurasiske plade",
    summary: "Stor kontinental plade med kollisionszoner mod syd (bl.a. Himalaya).",
    points: "300,55 430,30 570,65 590,130 510,160 380,130",
  },
  {
    id: "indo-australian",
    name: "Indo-australske plade",
    summary: "Kolliderer mod nord med Eurasien og subducerer flere steder mod øst.",
    points: "430,165 555,160 620,240 600,305 485,320 425,255",
  },
];

const BOUNDARIES = {
  konstruktiv: {
    title: "Konstruktiv grænse (spredning)",
    description:
      "Plader bevæger sig fra hinanden. Magma stiger op og danner ny oceanisk skorpe ved en midtoceanisk ryg.",
    arrows: ["←", "→"],
  },
  destruktiv: {
    title: "Destruktiv grænse (subduktion)",
    description:
      "En tung oceanisk plade synker ned under en anden plade. Det kan skabe dybhavsgrave, jordskælv og vulkanbuer.",
    arrows: ["→", "↘"],
  },
  konservativ: {
    title: "Konservativ grænse (transform)",
    description:
      "Plader glider sidelæns forbi hinanden. Der dannes ikke ny eller tabes gammel skorpe, men skælv er hyppige.",
    arrows: ["→", "←"],
  },
} as const;

type BoundaryKey = keyof typeof BOUNDARIES;

export default function PlateTectonicsDemo() {
  const [activePlateId, setActivePlateId] = useState<string>(PLATES[0].id);
  const [boundaryType, setBoundaryType] = useState<BoundaryKey>("konstruktiv");

  const activePlate =
    PLATES.find((plate) => plate.id === activePlateId) ?? PLATES[0];
  const boundary = BOUNDARIES[boundaryType];
  const updatedAt = useMemo(
    () =>
      new Intl.DateTimeFormat("da-DK", {
        dateStyle: "short",
        timeStyle: "short",
      }).format(new Date()),
    [],
  );

  return (
    <section className="mt-8 space-y-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Interaktivt: pladetektonik i praksis
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Klik på pladerne i kortet, skift mellem pladegrænser, og brug live-data fra
          jordskælv og vulkaner.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-950">
          <h3 className="mb-3 text-base font-semibold text-zinc-800 dark:text-zinc-200">
            Interaktivt verdenskort med tektoniske plader (forenklet)
          </h3>
          <svg
            viewBox="0 0 680 360"
            role="img"
            aria-label="Forenklet verdenskort med større tektoniske plader"
            className="h-auto w-full min-w-[320px]"
          >
            <rect x="0" y="0" width="680" height="360" fill="#e0f2fe" />
            {PLATES.map((plate) => {
              const isActive = plate.id === activePlate.id;
              return (
                <polygon
                  key={plate.id}
                  points={plate.points}
                  onClick={() => setActivePlateId(plate.id)}
                  className={
                    isActive
                      ? "cursor-pointer fill-blue-500/70 stroke-blue-700 stroke-2"
                      : "cursor-pointer fill-cyan-400/45 stroke-cyan-900/50 stroke-2"
                  }
                />
              );
            })}
          </svg>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-700 dark:bg-zinc-950">
          <p className="font-semibold text-zinc-900 dark:text-zinc-50">Valgt plade</p>
          <p className="mt-1 text-zinc-800 dark:text-zinc-100">{activePlate.name}</p>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">{activePlate.summary}</p>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
          Animation og tværsnit af pladegrænser
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {(Object.keys(BOUNDARIES) as BoundaryKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setBoundaryType(key)}
              className={`inline-flex min-h-10 items-center justify-center rounded-full border px-4 py-1.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                boundaryType === key
                  ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
                  : "border-zinc-300 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              {BOUNDARIES[key].title}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">{boundary.description}</p>

        <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-900">
          <svg viewBox="0 0 700 220" className="h-auto w-full min-w-[320px]" role="img">
            <rect x="40" y="100" width="260" height="60" fill="#f59e0b" opacity="0.8" />
            <rect x="300" y="100" width="260" height="60" fill="#f59e0b" opacity="0.8" />
            <rect x="40" y="160" width="520" height="40" fill="#7c3aed" opacity="0.7" />

            {boundaryType === "konstruktiv" && (
              <>
                <polygon points="250,80 210,80 210,70 170,90 210,110 210,100 250,100" fill="#1d4ed8">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0;-10 0;0 0"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </polygon>
                <polygon points="350,80 390,80 390,70 430,90 390,110 390,100 350,100" fill="#1d4ed8">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0;10 0;0 0"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </polygon>
                <polygon points="292,165 306,165 299,95" fill="#ef4444" />
              </>
            )}

            {boundaryType === "destruktiv" && (
              <>
                <polygon points="220,80 260,80 260,70 300,90 260,110 260,100 220,100" fill="#1d4ed8">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0;10 0;0 0"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </polygon>
                <polygon points="410,120 460,155 455,165 510,175 490,125 485,133 435,98" fill="#1d4ed8">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0;8 4;0 0"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </polygon>
                <polygon points="335,160 349,160 342,110" fill="#ef4444" />
              </>
            )}

            {boundaryType === "konservativ" && (
              <>
                <polygon points="245,82 285,82 285,72 325,92 285,112 285,102 245,102" fill="#1d4ed8">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0;12 0;0 0"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </polygon>
                <polygon points="355,102 395,102 395,92 355,112 395,132 395,122 355,122" fill="#1d4ed8">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0;-12 0;0 0"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </polygon>
                <line
                  x1="300"
                  y1="90"
                  x2="300"
                  y2="200"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeDasharray="6 5"
                />
              </>
            )}
          </svg>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
          Aktuelle data: jordskælv og vulkaner
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Sidst opdateret på siden: {updatedAt}. Data hentes hos eksterne kilder.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <a
            href="https://earthquake.usgs.gov/earthquakes/map/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            USGS: Live jordskælvskort
          </a>
          <a
            href="https://volcano.si.edu/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Smithsonian GVP: Aktive vulkaner
          </a>
        </div>
      </div>
    </section>
  );
}
