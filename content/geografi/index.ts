import type { Subject } from "@/lib/types";
import { afrikasHorn } from "./afrikas-horn";
import { australien } from "./australien";
import { demografi } from "./demografi";

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
      slug: "demografi",
      title: "Demografi",
      summary: "Befolkningsudvikling, migration og urbanisering med data og sammenligninger.",
      emoji: "👥",
      topics: [demografi],
    },
  ],
};
