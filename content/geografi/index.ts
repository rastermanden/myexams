import type { Subject } from "@/lib/types";
import { afrikasHorn } from "./afrikas-horn";
import { australien } from "./australien";
import { sydamerika } from "./sydamerika";
import { sydoestasien } from "./sydoestasien";
import { mellemøsten } from "./mellemøsten";
import { arktisOgAntarktis } from "./arktis-og-antarktis";
import { europa } from "./europa";
import { nordafrikaOgSahel } from "./nordafrika-og-sahel";
import { centralasien } from "./centralasien";
import { stillehavsstater } from "./stillehavsstater";
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
      topics: [
        afrikasHorn,
        australien,
        sydamerika,
        sydoestasien,
        mellemøsten,
        arktisOgAntarktis,
        europa,
        nordafrikaOgSahel,
        centralasien,
        stillehavsstater,
      ],
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
