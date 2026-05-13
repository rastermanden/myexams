import type { Category } from "@/lib/types";
import { problemloesningsstrategier } from "../problemloesningsstrategier";
import { matematiskModellering } from "../matematisk-modellering";
import { raesonnementOgBevisfoerelse } from "../raesonnement-og-bevisfoerelse";
import { laesningAfMatematiskNotation } from "../laesning-af-matematisk-notation";
import { brugAfCASVaerktoejer } from "../brug-af-cas-vaerktoejer";
import { brugAfLommeregner } from "../brug-af-lommeregner";
import { kommunikereMatematisk } from "../kommunikere-matematisk";

export const tvaergaaendeFaerdigheder: Category = {
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
};
