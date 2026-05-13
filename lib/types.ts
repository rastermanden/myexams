export type ImageRef = {
  url: string;
  alt: string;
  credit: string;
  license: string;
  sourcePage?: string;
  width?: number;
  height?: number;
};

export type ConceptSection = {
  heading: string;
  body: string;
  image?: ImageRef;
};

export type QuizOption = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
};

export type Topic = {
  slug: string;
  title: string;
  summary: string;
  hero?: ImageRef;
  demoKey?: string;
  sections: ConceptSection[];
  quiz: QuizQuestion[];
};

export type SubjectSlug = "geografi" | "dansk" | "matematik";

export type Category = {
  slug: string;
  title: string;
  summary: string;
  emoji?: string;
  topics: Topic[];
};

export type Subject = {
  slug: SubjectSlug;
  title: string;
  emoji: string;
  description: string;
  categories: Category[];
};
