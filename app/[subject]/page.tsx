import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSubjects, getSubject } from "@/content";
import TopicCard from "@/components/TopicCard";

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

      {subject.topics.length === 0 ? (
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
          {subject.topics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} subjectSlug={subject.slug} />
          ))}
        </div>
      )}
    </div>
  );
}
