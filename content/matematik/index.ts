import type { Subject } from "@/lib/types";
import { lineaerRegression } from "./lineaer-regression";
import { sandsynlighedsregningFraBunden } from "./sandsynlighedsregning-fra-bunden";

export const matematik: Subject = {
  slug: "matematik",
  title: "Matematik",
  emoji: "📐",
  description:
    "Funktioner, differential- og integralregning, statistik og sandsynlighed — kerneområder fra gymnasiet.",
  topics: [lineaerRegression, sandsynlighedsregningFraBunden],
};
