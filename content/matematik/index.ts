import type { Subject } from "@/lib/types";
import { lineaerRegression } from "./lineaer-regression";
import { risikoforhold } from "./risikoforhold";

export const matematik: Subject = {
  slug: "matematik",
  title: "Matematik",
  emoji: "📐",
  description:
    "Funktioner, differential- og integralregning, statistik og sandsynlighed — kerneområder fra gymnasiet.",
  topics: [lineaerRegression, risikoforhold],
};
