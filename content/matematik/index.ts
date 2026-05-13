import type { Subject } from "@/lib/types";
import { algebra } from "./categories/algebra";
import { funktioner } from "./categories/funktioner";
import { differentialOgIntegralregning } from "./categories/differential-og-integralregning";
import { geometri } from "./categories/geometri";
import { trigonometri } from "./categories/trigonometri";
import { statistik } from "./categories/statistik";
import { sandsynlighed } from "./categories/sandsynlighed";
import { talOgRegning } from "./categories/tal-og-regning";

export const matematik: Subject = {
  slug: "matematik",
  title: "Matematik",
  emoji: "📐",
  description:
    "Geometri, funktioner, differential- og integralregning, statistik og sandsynlighed — fra folkeskole til gymnasium.",
  categories: [
    algebra,
    funktioner,
    differentialOgIntegralregning,
    geometri,
    trigonometri,
    statistik,
    sandsynlighed,
    talOgRegning,
  ],
};
