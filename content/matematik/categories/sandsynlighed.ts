import type { Category } from "@/lib/types";
import { sandsynlighedsregningFraBunden } from "../sandsynlighedsregning-fra-bunden";
import { taelleUdfaldOgUdfaldsrum } from "../taelle-udfald-og-udfaldsrum";
import { beregningSandsynlighed } from "../beregning-af-sandsynlighed";
import { komplementaerSandsynlighed } from "../komplementaer-sandsynlighed";
import { sammensatteHaendelser } from "../sammensatte-haendelser";
import { taelletraeerOgProduktreglen } from "../taelletraeer-og-produktreglen";
import { betingetSandsynlighed } from "../betinget-sandsynlighed";
import { kombinatorik } from "../kombinatorik";
import { stokastiskeVariable } from "../stokastiske-variable";
import { binomialfordelingen } from "../binomialfordelingen";
import { normalfordelingen } from "../normalfordelingen";

export const sandsynlighed: Category = {
  slug: "sandsynlighed",
  title: "Sandsynlighed",
  summary: "Sandsynlighedsregning fra intuition til formelle beregninger.",
  emoji: "🎲",
  topics: [
    sandsynlighedsregningFraBunden,
    taelleUdfaldOgUdfaldsrum,
    beregningSandsynlighed,
    komplementaerSandsynlighed,
    sammensatteHaendelser,
    taelletraeerOgProduktreglen,
    betingetSandsynlighed,
    kombinatorik,
    stokastiskeVariable,
    binomialfordelingen,
    normalfordelingen,
  ],
};
