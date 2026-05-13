import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSubjects, getSubject, getSubjectTopicCount } from "@/content";

export function generateStaticParams() {
  return getAllSubjects().map((s) => ({ subject: s.slug }));
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: subjectSlug } = await params;
  const subject = getSubject(subjectSlug);
  if (!subject) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/"
        className="mb-6 inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← Alle fag
      </Link>
      <header className="mb-8 flex items-start gap-4">
        <span className="text-5xl" aria-hidden>
          {subject.emoji}
        </span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {subject.title}
          </h1>
          <p className="mt-1 max-w-2xl text-zinc-600 dark:text-zinc-300">
            {subject.description}
          </p>
        </div>
      </header>

      {subject.categories.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-xl font-medium text-zinc-700 dark:text-zinc-200">
            Kommer snart
          </p>
          <p className="mt-2 text-sm">
            Vi arbejder på indholdet til {subject.title.toLowerCase()}. Kig
            forbi senere.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {subject.categories.map((category) => {
            const topicCount = category.topics.length;
            return (
              <Link
                key={category.slug}
                href={`/${subject.slug}/${category.slug}`}
                className="group flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
              >
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {category.emoji ? `${category.emoji} ` : ""}
                  {category.title}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {category.summary}
                </p>
                <span className="mt-2 text-xs font-medium text-zinc-500">
                  {topicCount} emne{topicCount === 1 ? "" : "r"}
                </span>
              </Link>
            );
          })}
        </div>
      )}
      {subject.categories.length > 0 && (
        <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">
          I alt {getSubjectTopicCount(subject)} emne
          {getSubjectTopicCount(subject) === 1 ? "" : "r"} fordelt på{" "}
          {subject.categories.length} kategor
          {subject.categories.length === 1 ? "i" : "ier"}.
        </p>
      )}
    </div>
  );
}
