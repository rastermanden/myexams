import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSubjects, getTopic } from "@/content";
import Quiz from "@/components/Quiz";
import Breadcrumbs from "@/components/Breadcrumbs";

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

export default async function QuizPage({
  params,
}: {
  params: Promise<{ subject: string; category: string; topic: string }>;
}) {
  const { subject: subjectSlug, category: categorySlug, topic: topicSlug } = await params;
  const result = getTopic(subjectSlug, categorySlug, topicSlug);
  if (!result) notFound();
  const { subject, category, topic } = result;

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Alle fag", href: "/" },
          { label: subject.title, href: `/${subject.slug}` },
          { label: category.title, href: `/${subject.slug}/${category.slug}` },
          { label: topic.title, href: `/${subject.slug}/${category.slug}/${topic.slug}` },
          { label: "Quiz" },
        ]}
      />
      <Link
        href={`/${subject.slug}/${category.slug}/${topic.slug}`}
        className="mb-6 inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← {topic.title}
      </Link>
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Quiz · {subject.title} · {category.title}
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {topic.title}
        </h1>
      </header>
      <Quiz
        questions={topic.quiz}
        topicKey={`${subject.slug}/${category.slug}/${topic.slug}`}
      />
    </div>
  );
}
