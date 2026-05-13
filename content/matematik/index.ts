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
  topics: [geometri, lineaerRegression, broeker],
};
