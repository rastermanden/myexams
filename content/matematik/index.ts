import type { Subject } from "@/lib/types";
import { lineaerRegression } from "./lineaer-regression";
import { ligningerOgIsoleringAfX } from "./ligninger-og-isolering-af-x";
import { risikoforhold } from "./risikoforhold";
import { sandsynlighedsregningFraBunden } from "./sandsynlighedsregning-fra-bunden";
import { broeker } from "./broeker";
import { maalOgEnheder } from "./maal-og-enheder";
import { geometri } from "./geometri";
import { variableOgBogstavregning } from "./variable-og-bogstavregning";
import { reduktionAfUdtryk } from "./reduktion-af-udtryk";
import { parenteser } from "./parenteser";
import { ulighederMedEnUbekendt } from "./uligheder-med-en-ubekendt";
import { toLigningerMedToUbekendte } from "./to-ligninger-med-to-ubekendte";
import { andengradsligninger } from "./andengradsligninger";
import { algebraiskeBroeker } from "./algebraiske-broeker";
import { kvadratsaetningerOgNotableIdentiteter } from "./kvadratsaetninger-og-notable-identiteter";

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
      summary:
        "Variable, udtryk, ligninger, uligheder, andengrad og algebraiske brøker fra folkeskole til gymnasium.",
      emoji: "🧮",
      topics: [
        variableOgBogstavregning,
        reduktionAfUdtryk,
        parenteser,
        ligningerOgIsoleringAfX,
        ulighederMedEnUbekendt,
        toLigningerMedToUbekendte,
        andengradsligninger,
        algebraiskeBroeker,
        kvadratsaetningerOgNotableIdentiteter,
      ],
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
      summary: "Grundlæggende talforståelse, brøker, regneregler, mål og enheder.",
      emoji: "➗",
      topics: [broeker, maalOgEnheder],
    },
  ],
};
