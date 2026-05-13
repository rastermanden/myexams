import type { Subject } from "@/lib/types";
import { afrikasHorn } from "./afrikas-horn";
import { australien } from "./australien";
import {
  floderOgVandloeb,
  forvitringOgErosion,
  gletsjere,
  grundvand,
  istiderOgIsensLandskabsdannelse,
  jordbundOgJordtyper,
  kysttyperOgKystdannelse,
  oerkenerOgOerkendannelse,
  skoveOgBiomer,
  soeerOgVaadomraader,
  vandetsKredsloeb,
} from "./naturgeografi";

export const geografi: Subject = {
  slug: "geografi",
  title: "Geografi",
  emoji: "🌍",
  description:
    "Naturgeografi og kulturgeografi til gymnasieniveau — regionale studier, klima, pladetektonik, demografi og geopolitik.",
  categories: [
    {
      slug: "naturgeografi",
      title: "Naturgeografi",
      summary:
        "Landskabsdannelse, hydrologi, jordbund og økosystemer fra folkeskole til gymnasium.",
      emoji: "🏔️",
      topics: [
        istiderOgIsensLandskabsdannelse,
        gletsjere,
        floderOgVandloeb,
        vandetsKredsloeb,
        grundvand,
        kysttyperOgKystdannelse,
        oerkenerOgOerkendannelse,
        skoveOgBiomer,
        jordbundOgJordtyper,
        forvitringOgErosion,
        soeerOgVaadomraader,
      ],
    },
    {
      slug: "regioner",
      title: "Regioner",
      summary: "Regionale case-studier med fokus på natur, samfund og udvikling.",
      emoji: "🗺️",
      topics: [afrikasHorn, australien],
    },
  ],
};
