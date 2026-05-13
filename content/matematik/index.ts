import type { Subject } from "@/lib/types";
import { lineaerRegression } from "./lineaer-regression";
import { broeker } from "./broeker";
import { geometri } from "./geometri";

export const matematik: Subject = {
  slug: "matematik",
  title: "Matematik",
  emoji: "📐",
  description:
    "Geometri, funktioner, differential- og integralregning, statistik og sandsynlighed — fra folkeskole til gymnasium.",
  categories: [
    {
      slug: "geometri",
      title: "Geometri",
      summary: "Plangeometri, rumgeometri og vektorer fra folkeskole til gymnasium.",
      emoji: "📐",
      topics: [geometri],
    },
    {
      slug: "statistik",
      title: "Statistik",
      summary: "Dataanalyse, modeller og tolkning af variation i datasæt.",
      emoji: "📊",
      topics: [lineaerRegression],
    },
    {
      slug: "tal-og-regning",
      title: "Tal og regning",
      summary: "Grundlæggende talforståelse, brøker og regneregler.",
      emoji: "➗",
      topics: [broeker],
    },
  ],
};
