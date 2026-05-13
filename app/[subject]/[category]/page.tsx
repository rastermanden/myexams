import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { getAllSubjects, getCategory, getTopicByLegacySlug } from "@/content";
import TopicCard from "@/components/TopicCard";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  const params: { subject: string; category: string }[] = [];

  for (const subject of getAllSubjects()) {
    const slugs = new Set<string>();
    for (const category of subject.categories) {
      slugs.add(category.slug);
      for (const topic of category.topics) {
        slugs.add(topic.slug);
      }
    }
    for (const slug of slugs) {
      params.push({ subject: subject.slug, category: slug });
    }
  }

  return params;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ subject: string; category: string }>;
}) {
  const { subject: subjectSlug, category: categorySlug } = await params;
  const result = getCategory(subjectSlug, categorySlug);

  if (!result) {
    const legacyResult = getTopicByLegacySlug(subjectSlug, categorySlug);
    if (!legacyResult) notFound();
    permanentRedirect(
      `/${legacyResult.subject.slug}/${legacyResult.category.slug}/${legacyResult.topic.slug}`,
    );
  }

  const { subject, category } = result;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Alle fag", href: "/" },
          { label: subject.title, href: `/${subject.slug}` },
          { label: category.title },
        ]}
      />
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          {subject.emoji} {subject.title}
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {category.emoji ? `${category.emoji} ` : ""}
          {category.title}
        </h1>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
          {category.summary}
        </p>
      </header>

      {category.topics.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900">
          Ingen emner endnu i denne kategori.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {category.topics.map((topic) => (
            <TopicCard
              key={topic.slug}
              topic={topic}
              subjectSlug={subject.slug}
              categorySlug={category.slug}
            />
          ))}
        </div>
      )}

      <Link
        href={`/${subject.slug}`}
        className="mt-8 inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← Tilbage til {subject.title}
      </Link>
    </div>
  );
}
