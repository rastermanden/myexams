"use client";

import { useMemo, useState } from "react";
import type { DifficultyLevel } from "@/lib/equationExercises";
import { generateEquationExercise } from "@/lib/equationExercises";

const LEVELS: Array<{ value: DifficultyLevel; label: string }> = [
  { value: 1, label: "Niveau 1: x ± a = b" },
  { value: 2, label: "Niveau 2: ax = b eller x/a = b" },
  { value: 3, label: "Niveau 3: ax + b = c" },
  { value: 4, label: "Niveau 4: ax + b = cx + d" },
  { value: 5, label: "Niveau 5: parenteser og brøker" },
];

export default function EquationSolverDemo() {
  const [level, setLevel] = useState<DifficultyLevel>(1);
  const [exercise, setExercise] = useState(() => generateEquationExercise(1));
  const [stepIndex, setStepIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(
    null,
  );
  const [showSolution, setShowSolution] = useState(false);

  const currentStep = exercise.steps[stepIndex];
  const isSolved = !currentStep?.correctAction;
  const progress = useMemo(
    () =>
      `${Math.min(stepIndex + 1, exercise.steps.length)} / ${exercise.steps.length} trin`,
    [exercise.steps.length, stepIndex],
  );

  const generateNew = (targetLevel: DifficultyLevel) => {
    setExercise(generateEquationExercise(targetLevel));
    setStepIndex(0);
    setFeedback(null);
    setShowSolution(false);
  };

  const handleAction = (actionId: string) => {
    if (!currentStep?.correctAction) return;
    if (actionId === currentStep.correctAction.id) {
      setStepIndex((value) => Math.min(value + 1, exercise.steps.length - 1));
      setFeedback({
        type: "success",
        text: "Korrekt! Godt valg af regel.",
      });
      return;
    }
    setFeedback({
      type: "error",
      text: currentStep.hint ?? "Prøv igen — husk at gøre det samme på begge sider.",
    });
  };

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Interaktiv demo: ligninger og isolering af x
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        Træn reglen <strong>&quot;gør det samme på begge sider af lighedstegnet&quot;</strong> med
        trinvise ligninger.
      </p>

      <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200">
        <p className="font-medium">Grundregler:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Læg det samme til på begge sider</li>
          <li>Træk det samme fra på begge sider</li>
          <li>Gang med det samme på begge sider</li>
          <li>Dividér med det samme på begge sider (≠ 0)</li>
        </ul>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
        <label className="block text-sm text-zinc-700 dark:text-zinc-300">
          Vælg sværhedsgrad
          <select
            value={level}
            onChange={(event) => {
              const nextLevel = Number(event.target.value) as DifficultyLevel;
              setLevel(nextLevel);
              generateNew(nextLevel);
            }}
            className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          >
            {LEVELS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          onClick={() => generateNew(level)}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Ny ligning
        </button>
      </div>

      <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          <span>{exercise.title}</span>
          <span>{progress}</span>
        </div>

        <p className="mt-4 text-center text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          {currentStep.equation}
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{currentStep.explanation}</p>

        {!isSolved && currentStep.actions && (
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {currentStep.actions.map((action) => (
              <button
                key={action.id}
                type="button"
                onClick={() => handleAction(action.id)}
                className="rounded-xl border border-zinc-300 px-3 py-3 text-left text-sm text-zinc-800 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                {action.label}
              </button>
            ))}
          </div>
        )}

        {isSolved && (
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300">
            Flot! Du har isoleret x korrekt. Løsning: <strong>x = {exercise.solution}</strong>
          </div>
        )}

        {feedback && (
          <p
            className={`mt-4 rounded-xl border px-3 py-2 text-sm ${
              feedback.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300"
                : "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-300"
            }`}
          >
            {feedback.text}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setShowSolution((value) => !value)}
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            {showSolution ? "Skjul facit" : "Vis facitløsning"}
          </button>
        </div>

        {showSolution && (
          <ol className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
            {exercise.steps.map((step, index) => (
              <li key={`${exercise.id}-${index}`} className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-700">
                <p className="font-medium">
                  Trin {index + 1}: {step.equation}
                </p>
                <p className="mt-1 text-zinc-600 dark:text-zinc-300">{step.explanation}</p>
                {step.correctAction && (
                  <p className="mt-1 text-zinc-500 dark:text-zinc-400">
                    Regel: {step.correctAction.label}
                  </p>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
