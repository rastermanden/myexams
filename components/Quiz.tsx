"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import type { QuizQuestion } from "@/lib/types";
import { shuffle } from "@/lib/shuffle";
import QuestionCard from "./QuestionCard";
import ScoreScreen from "./ScoreScreen";

type Props = {
  questions: QuizQuestion[];
  topicKey: string;
};

function subscribeLocalStorage(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function useBestScore(key: string): [number | null, (value: number) => void] {
  const value = useSyncExternalStore(
    subscribeLocalStorage,
    () => {
      const raw = window.localStorage.getItem(key);
      return raw === null ? null : Number(raw);
    },
    () => null,
  );
  const setValue = (next: number) => {
    window.localStorage.setItem(key, String(next));
    window.dispatchEvent(new StorageEvent("storage", { key }));
  };
  return [value, setValue];
}

export default function Quiz({ questions, topicKey }: Props) {
  const storageKey = `bestScore:${topicKey}`;
  const [ordered, setOrdered] = useState<QuizQuestion[]>(questions);
  const [index, setIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [bestScore, setBestScore] = useBestScore(storageKey);

  const current = ordered[index];
  const total = ordered.length;
  const isLast = useMemo(() => index === total - 1, [index, total]);

  function handleSelect(optionId: string) {
    if (isLocked) return;
    setSelectedId(optionId);
    setIsLocked(true);
    if (optionId === current.correctOptionId) {
      setCorrectCount((c) => c + 1);
    }
  }

  function handleNext() {
    if (isLast) {
      const finalCorrect =
        selectedId === current.correctOptionId
          ? correctCount
          : correctCount;
      if (bestScore === null || finalCorrect > bestScore) {
        setBestScore(finalCorrect);
      }
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelectedId(null);
    setIsLocked(false);
  }

  function handleRetry() {
    setOrdered(shuffle(questions));
    setIndex(0);
    setSelectedId(null);
    setIsLocked(false);
    setCorrectCount(0);
    setFinished(false);
  }

  if (total === 0) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-white p-6 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
        Ingen spørgsmål endnu.
      </div>
    );
  }

  if (finished) {
    return (
      <ScoreScreen
        correct={correctCount}
        total={total}
        bestScore={bestScore}
        onRetry={handleRetry}
      />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <QuestionCard
        question={current}
        index={index}
        total={total}
        selectedId={selectedId}
        isLocked={isLocked}
        onSelect={handleSelect}
      />

      {isLocked && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {isLast ? "Se resultat" : "Næste spørgsmål"}
          </button>
        </div>
      )}
    </div>
  );
}
