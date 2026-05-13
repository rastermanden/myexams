import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import { getAllSubjects, getTopic } from "@/content";
import ConceptSection from "@/components/ConceptSection";
import EquationSolverDemo from "@/components/EquationSolverDemo";
import FunktionerDemo from "@/components/FunktionerDemo";
import GeometriDemo from "@/components/GeometriDemo";
import ImageWithCredit from "@/components/ImageWithCredit";
import LinearRegressionDemo from "@/components/LinearRegressionDemo";
import ProbabilityFromScratchDemo from "@/components/ProbabilityFromScratchDemo";
import RisikoforholdDemo from "@/components/RisikoforholdDemo";
import Breadcrumbs from "@/components/Breadcrumbs";

const TOPIC_DEMO_COMPONENTS: Record<string, ComponentType> = {
  "equation-solver": EquationSolverDemo,
  funktioner: FunktionerDemo,
  geometri: GeometriDemo,
  "linear-regression": LinearRegressionDemo,
  "probability-from-scratch": ProbabilityFromScratchDemo,
  risikoforhold: RisikoforholdDemo,
};

export function generateStaticParams() {
  const params: { subject: string; category: string; topic: string }[] = [];
  for (const subject of getAllSubjects()) {
    for (const category of subject.categories) {
      for (const topic of category.topics) {
        params.push({ subject: subject.slug, category: category.slug, topic: topic.slug });
      }
    }
  }
  return params;
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ subject: string; category: string; topic: string }>;
}) {
  const { subject: subjectSlug, category: categorySlug, topic: topicSlug } = await params;
  const result = getTopic(subjectSlug, categorySlug, topicSlug);
  if (!result) notFound();
  const { subject, category, topic } = result;
  const TopicDemo = topic.demoKey ? TOPIC_DEMO_COMPONENTS[topic.demoKey] : undefined;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Alle fag", href: "/" },
          { label: subject.title, href: `/${subject.slug}` },
          { label: category.title, href: `/${subject.slug}/${category.slug}` },
          { label: topic.title },
        ]}
      />

      <header className="mb-8 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          {subject.emoji} {subject.title} · {category.title}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {topic.title}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">{topic.summary}</p>
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
          href={`/${subject.slug}/${category.slug}/${topic.slug}/quiz`}
          className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Start quiz
        </Link>
      </div>
    </article>
  );
}
