import Link from "next/link";
import type { AudioPrompt } from "@/lib/types";

export default function NotebookLmPromptCard({
  audioPrompt,
  topicTitle,
}: {
  audioPrompt: AudioPrompt;
  topicTitle: string;
}) {
  return (
    <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-4 flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          🎧 Lyt til stoffet
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Lav en lydoversigt med NotebookLM
        </h2>
        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
          {audioPrompt.intro}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Indsæt prompten i NotebookLM &gt; Customize, og tilføj denne side
          som kilde. Se{" "}
          <Link
            href="/vejledning/notebooklm-audio"
            className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
          >
            vejledningen
          </Link>{" "}
          for trin-for-trin-instruktion.
        </p>
      </div>
      <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Prompt — {topicTitle}
        </p>
        <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-6 text-zinc-800 dark:text-zinc-200">
          {audioPrompt.prompt}
        </pre>
      </div>
    </section>
  );
}
