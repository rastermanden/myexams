import type { Category, Subject, SubjectSlug, Topic } from "@/lib/types";
import { geografi } from "./geografi";
import { dansk } from "./dansk";
import { matematik } from "./matematik";

const subjects: Subject[] = [geografi, dansk, matematik];

export function getAllSubjects(): Subject[] {
  return subjects;
}

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

export function getCategory(
  subjectSlug: string,
  categorySlug: string,
): { subject: Subject; category: Category } | undefined {
  const subject = getSubject(subjectSlug);
  if (!subject) return undefined;
  const category = subject.categories.find((c) => c.slug === categorySlug);
  if (!category) return undefined;
  return { subject, category };
}

export function getTopic(
  subjectSlug: string,
  categorySlug: string,
  topicSlug: string,
): { subject: Subject; category: Category; topic: Topic } | undefined {
  const categoryResult = getCategory(subjectSlug, categorySlug);
  if (!categoryResult) return undefined;
  const { subject, category } = categoryResult;
  const topic = category.topics.find((t) => t.slug === topicSlug);
  if (!topic) return undefined;
  return { subject, category, topic };
}

export function getTopicByLegacySlug(
  subjectSlug: string,
  topicSlug: string,
): { subject: Subject; category: Category; topic: Topic } | undefined {
  const subject = getSubject(subjectSlug);
  if (!subject) return undefined;

  for (const category of subject.categories) {
    const topic = category.topics.find((t) => t.slug === topicSlug);
    if (topic) {
      return { subject, category, topic };
    }
  }

  return undefined;
}

export function getSubjectTopicCount(subject: Subject): number {
  return subject.categories.reduce((count, category) => count + category.topics.length, 0);
}

export function getSubjectSlugs(): SubjectSlug[] {
  return subjects.map((s) => s.slug);
}
