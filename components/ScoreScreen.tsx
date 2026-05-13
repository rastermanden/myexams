"use client";

type Props = {
  correct: number;
  total: number;
  bestScore: number | null;
  onRetry: () => void;
};

export default function ScoreScreen({
  correct,
  total,
  bestScore,
  onRetry,
}: Props) {
  const pct = Math.round((correct / total) * 100);
  let verdict = "Godt forsøg — prøv igen for at hæve scoren!";
  if (pct >= 90) verdict = "Fremragende! Du har styr på begreberne.";
  else if (pct >= 70) verdict = "Solid præstation — næsten i mål.";
  else if (pct >= 50) verdict = "Du er godt på vej. Repetér forklaringerne.";

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Du fik {correct} ud af {total} rigtige!
      </h2>
      <p className="text-base text-zinc-600 dark:text-zinc-300">{verdict}</p>
      <p className="text-sm text-zinc-500">
        {bestScore === null
          ? "Dette er dit første forsøg."
          : `Bedste score indtil videre: ${bestScore} / ${total}`}
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mx-auto inline-flex min-h-12 items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Prøv igen
      </button>
    </div>
  );
}
