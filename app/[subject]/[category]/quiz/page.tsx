import { notFound, permanentRedirect } from "next/navigation";
import { getAllSubjects, getTopicByLegacySlug } from "@/content";

export function generateStaticParams() {
  const params: { subject: string; category: string }[] = [];
  for (const subject of getAllSubjects()) {
    for (const category of subject.categories) {
      for (const topic of category.topics) {
        params.push({ subject: subject.slug, category: topic.slug });
      }
    }
  }
  return params;
}

export default async function LegacyQuizRedirectPage({
  params,
}: {
  params: Promise<{ subject: string; category: string }>;
}) {
  const { subject: subjectSlug, category: topicSlug } = await params;
  const result = getTopicByLegacySlug(subjectSlug, topicSlug);
  if (!result) notFound();

  permanentRedirect(`/${result.subject.slug}/${result.category.slug}/${result.topic.slug}/quiz`);
}
