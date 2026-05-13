import type { Subject } from "@/lib/types";
import { lineaerRegression } from "./lineaer-regression";
import { ligningerOgIsoleringAfX } from "./ligninger-og-isolering-af-x";
import { risikoforhold } from "./risikoforhold";
import { sandsynlighedsregningFraBunden } from "./sandsynlighedsregning-fra-bunden";
import { broeker } from "./broeker";
import { geometri } from "./geometri";
import { problemloesningsstrategier } from "./problemloesningsstrategier";
import { matematiskModellering } from "./matematisk-modellering";
import { raesonnementOgBevisfoerelse } from "./raesonnement-og-bevisfoerelse";
import { laesningAfMatematiskNotation } from "./laesning-af-matematisk-notation";
import { brugAfCASVaerktoejer } from "./brug-af-cas-vaerktoejer";
import { brugAfLommeregner } from "./brug-af-lommeregner";
import { kommunikereMatematisk } from "./kommunikere-matematisk";

export const matematik: Subject = {
  slug: "matematik",
  title: "Matematik",
  emoji: "📐",
  description:
    "Geometri, funktioner, differential- og integralregning, statistik og sandsynlighed — fra folkeskole til gymnasium.",
  categories: [
    {
      slug: "algebra",
      title: "Algebra",
      summary: "Ligninger, variable og isolering af x med trinvis progression.",
      emoji: "🧮",
      topics: [ligningerOgIsoleringAfX],
    },
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
      topics: [lineaerRegression, risikoforhold],
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
      summary: "Grundlæggende talforståelse, brøker og regneregler.",
      emoji: "➗",
      topics: [broeker],
    },
    {
      slug: "tvaergaaende-faerdigheder",
      title: "Tværgående færdigheder",
      summary:
        "Generelle kompetencer som problemløsning, modellering, notation, hjælpemidler og matematikfaglig formidling.",
      emoji: "🧠",
      topics: [
        problemloesningsstrategier,
        matematiskModellering,
        raesonnementOgBevisfoerelse,
        laesningAfMatematiskNotation,
        brugAfCASVaerktoejer,
        brugAfLommeregner,
        kommunikereMatematisk,
      ],
    },
  ],
};
