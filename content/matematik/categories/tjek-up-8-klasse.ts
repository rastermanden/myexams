import type { Category } from "@/lib/types";
import { deFireRegnearter } from "../de-fire-regnearter";
import { broekRepetition } from "../broek-repetition";
import { procentregning } from "../procentregning";
import { areal } from "../areal";
import { rumfang } from "../rumfang";
import { sandsynlighedTjekUp } from "../sandsynlighed-tjek-up";

export const tjekUp8Klasse: Category = {
  slug: "tjek-up-8-klasse",
  title: "Tjek-up (8. klasse)",
  summary:
    "Genopfriskning før tjek-up: de 4 regnearters algoritmer, brøk, procent, areal, rumfang og sandsynlighed — med træningsopgaver og quiz til hvert emne.",
  emoji: "✅",
  topics: [
    deFireRegnearter,
    broekRepetition,
    procentregning,
    areal,
    rumfang,
    sandsynlighedTjekUp,
  ],
};
