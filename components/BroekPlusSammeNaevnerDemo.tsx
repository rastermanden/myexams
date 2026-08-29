"use client";

import { useCallback, useEffect, useState } from "react";
import {
  PLUS_LEVEL_LABELS,
  type AnswerVerdict,
  type PlusLevel,
  type PlusSammeNaevnerExercise,
  checkAnswer,
  exerciseTex,
  generatePlusSammeNaevner,
  solutionTex,
} from "@/lib/broekPlusSammeNaevner";
import { DisplayTex } from "./latex/Tex";
import { PieRow } from "./latex/GeometryFigures";

const LEVELS: PlusLevel[] = [1, 2, 3];

const VERDICT_TEXT: Record<Exclude<AnswerVerdict, "incomplete">, string> = {
  correct: "Rigtigt — tællerne lagt sammen og nævneren ladt stå.",
  unreduced: "Rigtig værdi, men brøken kan forkortes endnu et hak.",
  wrong: "Ikke helt. Husk: nævneren lægges aldrig sammen.",
};

/**
 * Kagerne, der viser summen. Fylder svaret mere end en hel kage, tegnes
 * en hel og resten ved siden af — ligesom en uægte brøk læses.
 */
function resultPies({ raw }: PlusSammeNaevnerExercise) {
  if (raw.numerator <= raw.denominator) {
    return [
      {
        numerator: raw.numerator,
        denominator: raw.denominator,
        caption: `= ${raw.numerator}/${raw.denominator}`,
      },
    ];
  }
  const rest = raw.numerator - raw.denominator;
  return [
    {
      numerator: raw.denominator,
      denominator: raw.denominator,
      caption: `= en hel (${raw.denominator}/${raw.denominator})`,
    },
    {
      numerator: rest,
      denominator: raw.denominator,
      caption: `+ ${rest}/${raw.denominator} = ${raw.numerator}/${raw.denominator}`,
    },
  ];
}

/**
 * Træningsboks til metodesamlingens eksempel "Plus med samme nævner".
 * Eleven taster tæller og nævner selv, så den klassiske fejl — at lægge
 * nævnerne sammen — kan gøres og rettes.
 */
export default function BroekPlusSammeNaevnerDemo() {
  const [level, setLevel] = useState<PlusLevel>(1);
  const [exercise, setExercise] = useState<PlusSammeNaevnerExercise | null>(null);
  const [numerator, setNumerator] = useState("");
  const [denominator, setDenominator] = useState("");
  const [verdict, setVerdict] = useState<AnswerVerdict | null>(null);
  const [showSteps, setShowSteps] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);

  const newExercise = useCallback((nextLevel: PlusLevel) => {
    setExercise(generatePlusSammeNaevner(nextLevel));
    setNumerator("");
    setDenominator("");
    setVerdict(null);
    setShowSteps(false);
  }, []);

  // Opgaven trækkes tilfældigt, så den første laves først efter mount —
  // ellers ville den statisk genererede HTML og browseren vise hver sin opgave.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setExercise(generatePlusSammeNaevner(level));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCheck() {
    if (!exercise || verdict === "correct") return;
    const result = checkAnswer(exercise, numerator, denominator);
    setVerdict(result);
    if (result === "incomplete") return;

    setAttempts((value) => value + 1);
    if (result === "correct") {
      setCorrect((value) => value + 1);
      setStreak((value) => value + 1);
      setShowSteps(true);
    } else {
      setStreak(0);
    }
  }

  const isSolved = verdict === "correct";

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
      <h2 className="text-xl font-semibold tracking-tight text-balance text-zinc-900 dark:text-zinc-50 sm:text-2xl">
        Træn plus med samme nævner
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        Læg tællerne sammen, lad nævneren stå — og forkort svaret, hvis det kan
        lade sig gøre. Skriv svaret som en brøk.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-sm text-zinc-700 dark:text-zinc-200">Niveau:</span>
        {LEVELS.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={level === item}
            onClick={() => {
              setLevel(item);
              newExercise(item);
            }}
            className={`min-h-11 rounded-full border px-4 py-2 text-sm ${
              level === item
                ? "border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-100"
                : "border-zinc-300 text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
            }`}
          >
            {PLUS_LEVEL_LABELS[item]}
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
              Plus med samme nævner · {PLUS_LEVEL_LABELS[exercise.level]}
            </p>

            <div className="latex-doc mt-2">
              <DisplayTex tex={`${exerciseTex(exercise)} = {}?`} />
            </div>

            <div className="text-zinc-700 dark:text-zinc-300">
              <PieRow
                pies={[
                  {
                    numerator: exercise.left.numerator,
                    denominator: exercise.left.denominator,
                    caption: `${exercise.left.numerator}/${exercise.left.denominator}`,
                  },
                  {
                    numerator: exercise.right.numerator,
                    denominator: exercise.right.denominator,
                    caption: `+ ${exercise.right.numerator}/${exercise.right.denominator}`,
                  },
                  // Facitkagen kommer først frem, når opgaven er løst — ellers
                  // kunne svaret bare tælles af på figuren.
                  ...(isSolved ? resultPies(exercise) : []),
                ]}
              />
            </div>

            <div className="mt-4 flex flex-wrap items-end gap-3">
              <div className="flex flex-col items-center">
                <label
                  htmlFor="broek-plus-taeller"
                  className="text-xs text-zinc-600 dark:text-zinc-300"
                >
                  Tæller
                </label>
                <input
                  id="broek-plus-taeller"
                  type="number"
                  inputMode="numeric"
                  value={numerator}
                  onChange={(event) => setNumerator(event.target.value)}
                  disabled={isSolved}
                  className="mt-1 w-24 rounded-lg border border-zinc-300 px-3 py-2 text-center text-base tabular-nums text-zinc-900 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
                />
                <span
                  aria-hidden
                  className="my-1 h-px w-24 bg-zinc-400 dark:bg-zinc-500"
                />
                <input
                  id="broek-plus-naevner"
                  type="number"
                  inputMode="numeric"
                  value={denominator}
                  onChange={(event) => setDenominator(event.target.value)}
                  disabled={isSolved}
                  className="w-24 rounded-lg border border-zinc-300 px-3 py-2 text-center text-base tabular-nums text-zinc-900 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
                />
                <label
                  htmlFor="broek-plus-naevner"
                  className="mt-1 text-xs text-zinc-600 dark:text-zinc-300"
                >
                  Nævner
                </label>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              <button
                type="button"
                onClick={handleCheck}
                disabled={isSolved}
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
                onClick={() => newExercise(level)}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 dark:border-zinc-700 dark:text-zinc-100 sm:min-h-11 sm:px-5"
              >
                Ny opgave
              </button>
            </div>

            <p aria-live="polite" className="mt-4 text-sm font-medium">
              {verdict === "incomplete" ? (
                <span className="text-zinc-700 dark:text-zinc-200">
                  Skriv både en tæller og en nævner — nævneren må ikke være 0.
                </span>
              ) : verdict ? (
                <span
                  className={
                    verdict === "correct"
                      ? "text-green-700 dark:text-green-300"
                      : verdict === "unreduced"
                        ? "text-amber-700 dark:text-amber-300"
                        : "text-red-700 dark:text-red-300"
                  }
                >
                  {VERDICT_TEXT[verdict]}
                </span>
              ) : null}
            </p>

            <p className="mt-3 rounded-xl bg-zinc-100 px-4 py-3 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
              💡 Hint: {exercise.hint}
            </p>

            {showSteps && (
              <div className="mt-3 rounded-xl border border-zinc-200 p-3 dark:border-zinc-700 sm:p-4">
                <div className="latex-doc">
                  <DisplayTex tex={solutionTex(exercise)} />
                </div>
                <ol className="list-decimal space-y-1 pl-5 text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                  {exercise.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
