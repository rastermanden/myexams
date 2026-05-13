import type { Subject } from "@/lib/types";
import { afrikasHorn } from "./afrikas-horn";
import { australien } from "./australien";
import { geopolitikOverblik } from "./geopolitik-overblik";

export const geografi: Subject = {
  slug: "geografi",
  title: "Geografi",
  emoji: "🌍",
  description:
    "Naturgeografi og kulturgeografi til gymnasieniveau — regionale studier, klima, pladetektonik, demografi og geopolitik.",
  categories: [
    {
      slug: "regioner",
      title: "Regioner",
      summary: "Regionale case-studier med fokus på natur, samfund og udvikling.",
      emoji: "🗺️",
      topics: [afrikasHorn, australien],
    },
    {
      slug: "geopolitik",
      title: "Geopolitik",
      summary:
        "Stater, magtforhold, konflikter, globalisering, energi og internationale organisationer i et nutidigt perspektiv.",
      emoji: "🧭",
      topics: [geopolitikOverblik],
    },
  ],
};
