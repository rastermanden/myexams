import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import { getAllSubjects, getTopic } from "@/content";
import ConceptSection from "@/components/ConceptSection";
import EquationSolverDemo from "@/components/EquationSolverDemo";
import ImageWithCredit from "@/components/ImageWithCredit";
import LinearRegressionDemo from "@/components/LinearRegressionDemo";

const TOPIC_DEMO_COMPONENTS: Record<string, ComponentType> = {
  "equation-solver": EquationSolverDemo,
  "linear-regression": LinearRegressionDemo,
};

export function generateStaticParams() {
  const params: { subject: string; topic: string }[] = [];
  for (const subject of getAllSubjects()) {
    for (const topic of subject.topics) {
      params.push({ subject: subject.slug, topic: topic.slug });
    }
  }
  return params;
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ subject: string; topic: string }>;
}) {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const result = getTopic(subjectSlug, topicSlug);
  if (!result) notFound();
  const { subject, topic } = result;
  const TopicDemo = topic.demoKey ? TOPIC_DEMO_COMPONENTS[topic.demoKey] : undefined;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href={`/${subject.slug}`}
        className="mb-6 inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← {subject.title}
      </Link>

      <header className="mb-8 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          {subject.emoji} {subject.title}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {topic.title}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          {topic.summary}
        </p>
      </header>

      {topic.hero && (
        <div className="mb-8">
          <ImageWithCredit image={topic.hero} priority />
        </div>
      )}

      {topic.sections.map((section, i) => (
        <ConceptSection key={i} section={section} />
      ))}

      {TopicDemo && <TopicDemo />}

      <div className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Klar til at teste din viden?
        </h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
          {topic.quiz.length} multiple choice-spørgsmål på gymnasieniveau.
        </p>
        <Link
          href={`/${subject.slug}/${topic.slug}/quiz`}
          className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Start quiz
        </Link>
      </div>
    </article>
  );
}
