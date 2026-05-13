import type { Category } from "@/lib/types";
import { variableOgBogstavregning } from "../variable-og-bogstavregning";
import { reduktionAfUdtryk } from "../reduktion-af-udtryk";
import { parenteser } from "../parenteser";
import { ligningerOgIsoleringAfX } from "../ligninger-og-isolering-af-x";
import { ulighederMedEnUbekendt } from "../uligheder-med-en-ubekendt";
import { toLigningerMedToUbekendte } from "../to-ligninger-med-to-ubekendte";
import { andengradsligninger } from "../andengradsligninger";
import { algebraiskeBroeker } from "../algebraiske-broeker";
import { kvadratsaetningerOgNotableIdentiteter } from "../kvadratsaetninger-og-notable-identiteter";

export const algebra: Category = {
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
};
