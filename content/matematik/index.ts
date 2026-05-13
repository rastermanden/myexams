import type { Subject } from "@/lib/types";
import { lineaerRegression } from "./lineaer-regression";
import { ligningerOgIsoleringAfX } from "./ligninger-og-isolering-af-x";

export const matematik: Subject = {
  slug: "matematik",
  title: "Matematik",
  emoji: "📐",
  description:
    "Funktioner, differential- og integralregning, statistik og sandsynlighed — kerneområder fra gymnasiet.",
  topics: [lineaerRegression, ligningerOgIsoleringAfX],
};
