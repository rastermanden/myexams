import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSubjects, getTopic } from "@/content";
import Quiz from "@/components/Quiz";

export function generateStaticParams() {
  const params: { subject: string; topic: string }[] = [];
  for (const subject of getAllSubjects()) {
    for (const topic of subject.topics) {
      params.push({ subject: subject.slug, topic: topic.slug });
    }
  }
  return params;
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ subject: string; topic: string }>;
}) {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const result = getTopic(subjectSlug, topicSlug);
  if (!result) notFound();
  const { subject, topic } = result;

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Link
        href={`/${subject.slug}/${topic.slug}`}
        className="mb-6 inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← {topic.title}
      </Link>
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Quiz · {subject.title}
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {topic.title}
        </h1>
      </header>
      <Quiz
        questions={topic.quiz}
        topicKey={`${subject.slug}/${topic.slug}`}
      />
    </div>
  );
}
