import type { Subject } from "@/lib/types";
import { tjekUp8Klasse } from "./categories/tjek-up-8-klasse";
import { algebra } from "./categories/algebra";
import { funktioner } from "./categories/funktioner";
import { differentialOgIntegralregning } from "./categories/differential-og-integralregning";
import { geometri } from "./categories/geometri";
import { trigonometri } from "./categories/trigonometri";
import { statistik } from "./categories/statistik";
import { sandsynlighed } from "./categories/sandsynlighed";
import { talOgRegning } from "./categories/tal-og-regning";
import { tvaergaaendeFaerdigheder } from "./categories/tvaergaaende-faerdigheder";

export const matematik: Subject = {
  slug: "matematik",
  title: "Matematik",
  emoji: "📐",
  description:
    "Geometri, funktioner, differential- og integralregning, statistik og sandsynlighed — fra folkeskole til gymnasium.",
  categories: [
    tjekUp8Klasse,
    algebra,
    funktioner,
    differentialOgIntegralregning,
    geometri,
    trigonometri,
    statistik,
    sandsynlighed,
    talOgRegning,
    tvaergaaendeFaerdigheder,
  ],
};
