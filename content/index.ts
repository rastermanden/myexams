import type { Subject, SubjectSlug, Topic } from "@/lib/types";
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

export function getTopic(
  subjectSlug: string,
  topicSlug: string,
): { subject: Subject; topic: Topic } | undefined {
  const subject = getSubject(subjectSlug);
  if (!subject) return undefined;
  const topic = subject.topics.find((t) => t.slug === topicSlug);
  if (!topic) return undefined;
  return { subject, topic };
}

export function getSubjectSlugs(): SubjectSlug[] {
  return subjects.map((s) => s.slug);
}
