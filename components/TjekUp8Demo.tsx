"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  TJEK_UP_AREAS,
  TJEK_UP_AREA_LABELS,
  TJEK_UP_LEVEL_LABELS,
  type TjekUpArea,
  type TjekUpExercise,
  type TjekUpLevel,
  generateTjekUpExercise,
} from "@/lib/tjekUp8Exercises";

const LEVELS: TjekUpLevel[] = [1, 2, 3];

type TjekUpTraeningProps = {
  areas?: TjekUpArea[];
  title?: string;
  intro?: string;
};

export default function TjekUpTraening({
  areas = TJEK_UP_AREAS,
  title = "Træn til tjek-up",
  intro = "Tilfældige opgaver med hint og trinvis facit. Bliv ved, til du rammer rigtigt tre gange i træk.",
}: TjekUpTraeningProps) {
  const areaList = useMemo(() => (areas.length ? areas : TJEK_UP_AREAS), [areas]);
  const [area, setArea] = useState<TjekUpArea>(areaList[0]);
  const [level, setLevel] = useState<TjekUpLevel>(1);
  const [exercise, setExercise] = useState<TjekUpExercise | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);

  const newExercise = useCallback((nextArea: TjekUpArea, nextLevel: TjekUpLevel) => {
    setExercise(generateTjekUpExercise(nextArea, nextLevel));
    setSelected(null);
    setIsChecked(false);
    setShowSteps(false);
  }, []);

  // Opgaverne trækkes tilfældigt, så den første laves først efter mount —
  // ellers ville den statisk genererede HTML og browseren vise hver sin opgave.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setExercise(generateTjekUpExercise(area, level));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCheck() {
    if (!exercise || !selected || isChecked) return;
    const isCorrect = selected === exercise.correctOption;
    setIsChecked(true);
    setAttempts((value) => value + 1);
    if (isCorrect) {
      setCorrect((value) => value + 1);
      setStreak((value) => value + 1);
      setShowSteps(true);
    } else {
      setStreak(0);
    }
  }

  const isCorrect = Boolean(exercise && isChecked && selected === exercise.correctOption);

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
      <h2 className="text-xl font-semibold tracking-tight text-balance text-zinc-900 dark:text-zinc-50 sm:text-2xl">
        {title}
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{intro}</p>

      {areaList.length > 1 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {areaList.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={area === item}
              onClick={() => {
                setArea(item);
                newExercise(item, level);
              }}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm ${
                area === item
                  ? "border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-100"
                  : "border-zinc-300 text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
              }`}
            >
              {TJEK_UP_AREA_LABELS[item]}
            </button>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-sm text-zinc-700 dark:text-zinc-200">Niveau:</span>
        {LEVELS.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={level === item}
            onClick={() => {
              setLevel(item);
              newExercise(area, item);
            }}
            className={`min-h-11 rounded-full border px-4 py-2 text-sm ${
              level === item
                ? "border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-100"
                : "border-zinc-300 text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
            }`}
          >
            {TJEK_UP_LEVEL_LABELS[item]}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs text-zinc-600 dark:text-zinc-300">
        Rigtige: {correct} / {attempts} · Stime: {streak}
      </p>

      <div className="mt-4 rounded-xl border border-zinc-200 p-3 dark:border-zinc-700 sm:p-4">
        {!exercise ? (
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Henter opgave …</p>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {TJEK_UP_AREA_LABELS[exercise.area]} · {TJEK_UP_LEVEL_LABELS[exercise.level]}
            </p>
            <p className="mt-2 text-lg leading-7 text-zinc-900 dark:text-zinc-50">{exercise.prompt}</p>

            <div className="mt-4 grid gap-2">
              {exercise.options.map((option) => {
                const isSelected = selected === option;
                const isAnswer = option === exercise.correctOption;
                let style = "border-zinc-300 text-zinc-800 dark:border-zinc-700 dark:text-zinc-200";
                if (isChecked && isAnswer) {
                  style =
                    "border-green-600 bg-green-50 text-green-900 dark:bg-green-950/40 dark:text-green-100";
                } else if (isChecked && isSelected) {
                  style = "border-red-600 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-100";
                } else if (isSelected) {
                  style =
                    "border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-100";
                }
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => {
                      if (isChecked) return;
                      setSelected(option);
                    }}
                    className={`min-h-12 rounded-xl border px-4 py-3 text-left text-base ${style}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              <button
                type="button"
                onClick={handleCheck}
                disabled={!selected || isChecked}
                className="col-span-2 inline-flex min-h-12 items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-base font-medium text-white disabled:opacity-40 dark:bg-zinc-50 dark:text-zinc-900 sm:min-h-11 sm:text-sm"
              >
                Tjek svar
              </button>
              <button
                type="button"
                onClick={() => setShowSteps((value) => !value)}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 dark:border-zinc-700 dark:text-zinc-100 sm:min-h-11 sm:px-5"
              >
                {showSteps ? "Skjul fremgangsmåde" : "Vis fremgangsmåde"}
              </button>
              <button
                type="button"
                onClick={() => newExercise(area, level)}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 dark:border-zinc-700 dark:text-zinc-100 sm:min-h-11 sm:px-5"
              >
                Ny opgave
              </button>
            </div>

            {isChecked && (
              <p
                className={`mt-4 text-sm font-medium ${
                  isCorrect
                    ? "text-green-700 dark:text-green-300"
                    : "text-red-700 dark:text-red-300"
                }`}
              >
                {isCorrect
                  ? "Rigtigt — godt regnet!"
                  : `Ikke helt. Det rigtige svar er ${exercise.correctOption}.`}
              </p>
            )}

            <p className="mt-3 rounded-xl bg-zinc-100 px-4 py-3 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
              💡 Hint: {exercise.hint}
            </p>

            {showSteps && (
              <ol className="mt-3 list-decimal space-y-1 rounded-xl border border-zinc-200 py-3 pl-8 pr-4 text-sm leading-6 text-zinc-700 dark:border-zinc-700 dark:text-zinc-200">
                {exercise.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            )}
          </>
        )}
      </div>
    </section>
  );
}

function areaDemo(area: TjekUpArea, title: string, intro: string) {
  const Demo = () => <TjekUpTraening areas={[area]} title={title} intro={intro} />;
  Demo.displayName = `TjekUpTraening_${area}`;
  return Demo;
}

export const RegnearterTraening = areaDemo(
  "regnearter",
  "Træn de 4 regnearter",
  "Skriftlig addition, subtraktion, multiplikation og division — med trinvis fremgangsmåde.",
);

export const BroekTraening = areaDemo(
  "broeker",
  "Træn brøker",
  "Forkort, læg sammen, gang og divider brøker — og omregn til decimaltal og procent.",
);

export const ProcentTraening = areaDemo(
  "procent",
  "Træn procent",
  "Procent af et tal, rabat og moms, vækstfaktor og prisen før ændringen.",
);

export const ArealTraening = areaDemo(
  "areal",
  "Træn areal",
  "Rektangel, trekant, cirkel, trapez og sammensatte figurer — med enheder.",
);

export const RumfangTraening = areaDemo(
  "rumfang",
  "Træn rumfang",
  "Kasse, cylinder, prisme, kegle, pyramide og kugle — og omregning til liter.",
);

export const SandsynlighedTraening = areaDemo(
  "sandsynlighed",
  "Træn sandsynlighed",
  "Udfaldsrum, komplement, uafhængige hændelser og træk med og uden tilbagelægning.",
);
