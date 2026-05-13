"use client";

import type { QuizQuestion } from "@/lib/types";

type Props = {
  question: QuizQuestion;
  index: number;
  total: number;
  selectedId: string | null;
  isLocked: boolean;
  onSelect: (optionId: string) => void;
};

export default function QuestionCard({
  question,
  index,
  total,
  selectedId,
  isLocked,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-zinc-500">
        <span>
          Spørgsmål {index + 1} af {total}
        </span>
        <span aria-hidden>
          {"●".repeat(index + 1)}
          {"○".repeat(Math.max(0, total - index - 1))}
        </span>
      </div>

      <h2 className="text-xl font-semibold leading-7 text-zinc-900 dark:text-zinc-50">
        {question.prompt}
      </h2>

      <ul className="flex flex-col gap-3">
        {question.options.map((opt) => {
          const isSelected = selectedId === opt.id;
          const isCorrect = opt.id === question.correctOptionId;
          let style =
            "border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800";
          if (isLocked) {
            if (isCorrect) {
              style =
                "border-emerald-500 bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-950";
            } else if (isSelected) {
              style =
                "border-rose-500 bg-rose-50 dark:border-rose-500 dark:bg-rose-950";
            } else {
              style =
                "border-zinc-200 bg-zinc-50 opacity-60 dark:border-zinc-800 dark:bg-zinc-900";
            }
          } else if (isSelected) {
            style =
              "border-blue-500 bg-blue-50 dark:border-blue-500 dark:bg-blue-950";
          }
          return (
            <li key={opt.id}>
              <button
                type="button"
                onClick={() => onSelect(opt.id)}
                disabled={isLocked}
                aria-pressed={isSelected}
                className={`flex w-full min-h-12 items-start gap-3 rounded-xl border px-4 py-3 text-left text-base leading-6 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-default ${style}`}
              >
                <span
                  aria-hidden
                  className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-current text-xs font-semibold uppercase"
                >
                  {opt.id}
                </span>
                <span className="text-zinc-900 dark:text-zinc-100">
                  {opt.text}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {isLocked && (
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Forklaring
          </p>
          {question.explanation}
        </div>
      )}
    </div>
  );
}
