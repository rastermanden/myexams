import Link from "next/link";
import type { Subject } from "@/lib/types";

export default function SubjectCard({ subject }: { subject: Subject }) {
  const topicCount = subject.topics.length;
  return (
    <Link
      href={`/${subject.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
    >
      <span className="text-4xl" aria-hidden>
        {subject.emoji}
      </span>
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        {subject.title}
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {subject.description}
      </p>
      <span className="mt-auto text-xs font-medium text-zinc-500 dark:text-zinc-500">
        {topicCount === 0
          ? "Kommer snart"
          : `${topicCount} emne${topicCount === 1 ? "" : "r"}`}
      </span>
    </Link>
  );
}
