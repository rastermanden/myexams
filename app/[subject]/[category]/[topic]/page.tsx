import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSubjects, getTopic } from "@/content";
import ConceptSection from "@/components/ConceptSection";
import ImageWithCredit from "@/components/ImageWithCredit";
import Breadcrumbs from "@/components/Breadcrumbs";
import SaveToDesktopButton from "@/components/SaveToDesktopButton";
import NotebookLmPromptCard from "@/components/NotebookLmPromptCard";

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
  const TopicDemo = topic.demoComponent;

  return (
    <article className="mx-auto max-w-3xl px-4 py-6 sm:py-10">
      <Breadcrumbs
        items={[
          { label: "Alle fag", href: "/" },
          { label: subject.title, href: `/${subject.slug}` },
          { label: category.title, href: `/${subject.slug}/${category.slug}` },
          { label: topic.title },
        ]}
      />

      <header className="mb-6 flex flex-col gap-3 sm:mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          {subject.emoji} {subject.title} · {category.title}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-balance text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          {topic.title}
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-300 sm:text-lg">{topic.summary}</p>
        {topic.credit && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{topic.credit}</p>
        )}
      </header>

      {topic.hero && (
        <div className="mb-8">
          <ImageWithCredit image={topic.hero} priority />
        </div>
      )}

      {topic.sections.map((section, i) => (
        <ConceptSection key={i} section={section} latex={subject.slug === "matematik"} />
      ))}

      {TopicDemo && <TopicDemo />}

      {topic.audioPrompt && (
        <NotebookLmPromptCard
          audioPrompt={topic.audioPrompt}
          topicTitle={topic.title}
        />
      )}

      <SaveToDesktopButton topicTitle={topic.title} />

      <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-5 text-center dark:border-zinc-800 dark:bg-zinc-900 sm:mt-12 sm:p-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Klar til at teste din viden?
        </h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
          {topic.quiz.length} multiple choice-spørgsmål på gymnasieniveau.
        </p>
        <Link
          href={`/${subject.slug}/${category.slug}/${topic.slug}/quiz`}
          className="mt-4 inline-flex w-full min-h-12 items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white hover:bg-zinc-700 sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Start quiz
        </Link>
      </div>
    </article>
  );
}
