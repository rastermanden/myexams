"use client";

import { useMemo, useState } from "react";
import {
  type AnswerFormat,
  type DifficultyLevel,
  SUBTOPIC_ORDER,
  type SubtopicSlug,
  generateTalOgRegningExercise,
} from "@/lib/talOgRegningExercises";

const TARGET_TASKS_PER_SUBTOPIC = 8; // Krav: mindst 8–10 opgaver pr. underemne.

const SUBTOPIC_META: Record<SubtopicSlug, { title: string; description: string }> = {
  "naturtal-heltal-decimaltal": {
    title: "Naturlige tal, hele tal, decimaltal",
    description: "Træn omregning mellem brøk, decimaltal og procent.",
  },
  broeker: {
    title: "Brøker",
    description: "Forkort, forlæng, addér, subtraher, gang og dividér.",
  },
  procentregning: {
    title: "Procentregning",
    description: "Af et tal, vækst og fald.",
  },
  "negative-tal": {
    title: "Negative tal",
    description: "Regn med plus og minus på talinjen.",
  },
  regnehierarki: {
    title: "Regnehierarki",
    description: "Parenteser og prioritering af regnearter.",
  },
  "potenser-og-roedder": {
    title: "Potenser og rødder",
    description: "Kvadrater, kuber og rødder.",
  },
  "primtal-faktorisering-divisorer": {
    title: "Primtal, faktorisering, divisorer",
    description: "Opdel tal i primfaktorer trin for trin.",
  },
  talsystemer: {
    title: "Talsystemer",
    description: "Titalssystem og binær notation.",
  },
};

const DIFFICULTIES: Array<{ value: DifficultyLevel; label: string }> = [
  { value: 1, label: "Let" },
  { value: 2, label: "Mellem" },
  { value: 3, label: "Svær" },
];

const ANSWER_FORMATS: Array<{ value: AnswerFormat; label: string }> = [
  { value: "fraction", label: "Brøk" },
  { value: "decimal", label: "Decimaltal" },
  { value: "percent", label: "Procent" },
];

function renderVisualization(
  visual: { type: "number-line" | "fraction-bar" | "percent-circle"; value: number; label: string } | undefined,
) {
  if (!visual) return null;

  if (visual.type === "number-line") {
    return (
      <div className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-700">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{visual.label}</p>
        <svg viewBox="0 0 320 60" className="mt-2 w-full" role="img" aria-label="Talinje">
          <line x1="20" y1="30" x2="300" y2="30" stroke="currentColor" className="text-zinc-400" strokeWidth="3" />
          <line x1="160" y1="20" x2="160" y2="40" stroke="currentColor" className="text-zinc-500" />
          <circle cx={20 + Math.max(0, Math.min(1, visual.value)) * 280} cy="30" r="6" fill="currentColor" className="text-blue-600" />
        </svg>
      </div>
    );
  }

  if (visual.type === "fraction-bar") {
    return (
      <div className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-700">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{visual.label}</p>
        <div className="mt-2 h-5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
          <div
            className="h-full bg-blue-600 transition-all"
            style={{ width: `${Math.max(0, Math.min(1, visual.value)) * 100}%` }}
          />
        </div>
      </div>
    );
  }

  const percent = Math.max(0, Math.min(1, visual.value));
  return (
    <div className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-700">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{visual.label}</p>
      <div className="mt-2 flex items-center gap-3">
        <svg viewBox="0 0 42 42" className="h-14 w-14" role="img" aria-label="Procentcirkel">
          <circle cx="21" cy="21" r="15.915" fill="none" className="text-zinc-300" stroke="currentColor" strokeWidth="5" />
          <circle
            cx="21"
            cy="21"
            r="15.915"
            fill="none"
            className="text-blue-600"
            stroke="currentColor"
            strokeWidth="5"
            strokeDasharray={`${percent * 100} ${100 - percent * 100}`}
            transform="rotate(-90 21 21)"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-sm text-zinc-700 dark:text-zinc-200">{Math.round(percent * 100)}%</p>
      </div>
    </div>
  );
}

export default function TalOgRegningDemo() {
  const [subtopic, setSubtopic] = useState<SubtopicSlug>("naturtal-heltal-decimaltal");
  const [difficulty, setDifficulty] = useState<DifficultyLevel>(1);
  const [format, setFormat] = useState<AnswerFormat>("fraction");
  const [exercise, setExercise] = useState(() =>
    generateTalOgRegningExercise("naturtal-heltal-decimaltal", 1, "fraction"),
  );
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);
  const [correctBySubtopic, setCorrectBySubtopic] = useState<Record<SubtopicSlug, number>>({
    "naturtal-heltal-decimaltal": 0,
    broeker: 0,
    procentregning: 0,
    "negative-tal": 0,
    regnehierarki: 0,
    "potenser-og-roedder": 0,
    "primtal-faktorisering-divisorer": 0,
    talsystemer: 0,
  });

  const overallProgress = useMemo(() => {
    const solved = Object.values(correctBySubtopic).reduce((sum, value) => sum + value, 0);
    return Math.round((solved / (SUBTOPIC_ORDER.length * TARGET_TASKS_PER_SUBTOPIC)) * 100);
  }, [correctBySubtopic]);

  function generateNext(targetSubtopic: SubtopicSlug, targetDifficulty = difficulty, targetFormat = format) {
    setExercise(generateTalOgRegningExercise(targetSubtopic, targetDifficulty, targetFormat));
    setSelectedOption(null);
    setFeedback(null);
  }

  function handleCheck() {
    if (!selectedOption) return;
    const isCorrect = selectedOption === exercise.correctOption;
    setFeedback({
      isCorrect,
      text: isCorrect ? "Korrekt — godt regnet." : "Ikke helt endnu. Brug hintet og prøv igen.",
    });
    if (isCorrect) {
      setCorrectBySubtopic((prev) => ({
        ...prev,
        [exercise.subtopic]: prev[exercise.subtopic] + 1,
      }));
    }
  }

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Interaktive øvelser: Tal og regning
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        Træn hvert underemne med tilfældige opgaver, hints og trinvis forklaring.
      </p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
        <div className="h-full bg-blue-600 transition-all" style={{ width: `${overallProgress}%` }} />
      </div>
      <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
        Samlet progression: {overallProgress}% · mål: {TARGET_TASKS_PER_SUBTOPIC} opgaver pr. underemne
      </p>

      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {SUBTOPIC_ORDER.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setSubtopic(item);
              generateNext(item);
            }}
            className={`rounded-xl border px-3 py-3 text-left text-sm ${
              subtopic === item
                ? "border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-100"
                : "border-zinc-300 text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
            }`}
          >
            <p className="font-medium">{SUBTOPIC_META[item].title}</p>
            <p className="mt-1 text-xs opacity-90">{SUBTOPIC_META[item].description}</p>
            <p className="mt-1 text-xs">
              Løst: {correctBySubtopic[item]} / {TARGET_TASKS_PER_SUBTOPIC}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <label className="text-sm text-zinc-700 dark:text-zinc-200">
          Sværhedsgrad
          <select
            value={difficulty}
            onChange={(event) => {
              const nextDifficulty = Number(event.target.value) as DifficultyLevel;
              setDifficulty(nextDifficulty);
              generateNext(subtopic, nextDifficulty, format);
            }}
            className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-950"
          >
            {DIFFICULTIES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm text-zinc-700 dark:text-zinc-200">
          Svarformat
          <select
            value={format}
            onChange={(event) => {
              const nextFormat = event.target.value as AnswerFormat;
              setFormat(nextFormat);
              generateNext(subtopic, difficulty, nextFormat);
            }}
            className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-950"
          >
            {ANSWER_FORMATS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={() => generateNext(subtopic)}
          className="mt-auto inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-zinc-50 dark:text-zinc-900"
        >
          Ny tilfældig opgave
        </button>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            {SUBTOPIC_META[exercise.subtopic].title}
          </p>
          <p className="mt-2 text-base text-zinc-900 dark:text-zinc-50">{exercise.prompt}</p>

          <div className="mt-4 grid gap-2">
            {exercise.options.map((option) => {
              const selected = selectedOption === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedOption(option)}
                  className={`rounded-lg border px-3 py-2 text-left text-sm ${
                    selected
                      ? "border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-100"
                      : "border-zinc-300 text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleCheck}
              disabled={!selectedOption}
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-900"
            >
              Tjek svar
            </button>
            <button
              type="button"
              onClick={() => generateNext(subtopic)}
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700"
            >
              Næste opgave
            </button>
          </div>

          {feedback && (
            <div
              className={`mt-4 rounded-xl border p-3 text-sm ${
                feedback.isCorrect
                  ? "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200"
                  : "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200"
              }`}
            >
              <p className="font-semibold">{feedback.text}</p>
              <p className="mt-1">Hint: {exercise.hint}</p>
              <ol className="mt-2 list-decimal pl-5">
                {exercise.explanationSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <div className="space-y-3">{renderVisualization(exercise.visualization)}</div>
      </div>
    </section>
  );
}
