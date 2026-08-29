import type { Category } from "@/lib/types";
import { regningIHaanden } from "../metodesamling/regning-i-haanden";
import { regningMedBroeker } from "../metodesamling/regning-med-broeker";
import { regningMedParenteser } from "../metodesamling/regning-med-parenteser";
import { regningMedLigninger } from "../metodesamling/regning-med-ligninger";
import { trigonometriMetode } from "../metodesamling/trigonometri";

export const metodesamling: Category = {
  slug: "metodesamling",
  title: "Metodesamling",
  summary:
    "Morten Münchows metodesamling for udskolingen på Hanssted Skole — de faste opstillinger til regning i hånden, brøker, parenteser, ligninger og trigonometri. Gengivet med tilladelse.",
  emoji: "📘",
  topics: [
    regningIHaanden,
    regningMedBroeker,
    regningMedParenteser,
    regningMedLigninger,
    trigonometriMetode,
  ],
};
