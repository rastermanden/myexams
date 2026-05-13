import Link from "next/link";
import type { Topic } from "@/lib/types";

export default function TopicCard({
  topic,
  subjectSlug,
  categorySlug,
}: {
  topic: Topic;
  subjectSlug: string;
  categorySlug: string;
}) {
  return (
    <Link
      href={`/${subjectSlug}/${categorySlug}/${topic.slug}`}
      className="group flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
    >
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {topic.title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {topic.summary}
      </p>
      <span className="mt-2 text-xs font-medium text-zinc-500">
        {topic.sections.length} afsnit · {topic.quiz.length} spørgsmål
      </span>
    </Link>
  );
}
