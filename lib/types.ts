export type ImageRef = {
  url: string;
  alt: string;
  credit: string;
  license: string;
  sourcePage?: string;
  width?: number;
  height?: number;
};

export type WorkedExampleStep = {
  /** Selve mellemregningen, fx "0,18 × 250 = 45". */
  expression: string;
  /** Kort forklaring af, hvorfor trinnet ser sådan ud. */
  explanation?: string;
};

/** Et gennemregnet eksempel med alle mellemregninger. */
export type WorkedExample = {
  title: string;
  task: string;
  steps: WorkedExampleStep[];
  result: string;
  /** Prøve eller overslag, der viser at svaret passer. */
  check?: string;
};

export type ConceptSection = {
  heading: string;
  body: string;
  examples?: WorkedExample[];
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

export type AudioPrompt = {
  intro: string;
  prompt: string;
};

export type Topic = {
  slug: string;
  title: string;
  summary: string;
  hero?: ImageRef;
  demoComponent?: import("react").ComponentType;
  sections: ConceptSection[];
  audioPrompt?: AudioPrompt;
  quiz: QuizQuestion[];
};

export type SubjectSlug = "geografi" | "dansk" | "matematik" | "religion";

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
