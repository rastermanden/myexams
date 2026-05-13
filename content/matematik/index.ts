import type { Subject } from "@/lib/types";
import { lineaerRegression } from "./lineaer-regression";
import { sandsynlighedsregningFraBunden } from "./sandsynlighedsregning-fra-bunden";
import { broeker } from "./broeker";
import { maalOgEnheder } from "./maal-og-enheder";

export const matematik: Subject = {
  slug: "matematik",
  title: "Matematik",
  emoji: "📐",
  description:
    "Funktioner, differential- og integralregning, statistik og sandsynlighed — kerneområder fra gymnasiet.",
  categories: [
    {
      slug: "statistik",
      title: "Statistik",
      summary: "Dataanalyse, modeller og tolkning af variation i datasæt.",
      emoji: "📊",
      topics: [lineaerRegression],
    },
    {
      slug: "sandsynlighed",
      title: "Sandsynlighed",
      summary: "Sandsynlighedsregning fra intuition til formelle beregninger.",
      emoji: "🎲",
      topics: [sandsynlighedsregningFraBunden],
    },
    {
      slug: "tal-og-regning",
      title: "Tal og regning",
      summary: "Grundlæggende talforståelse, brøker, regneregler, mål og enheder.",
      emoji: "➗",
      topics: [broeker, maalOgEnheder],
    },
  ],
};
