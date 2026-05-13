import type { Category } from "@/lib/types";
import {
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
} from "../naturgeografi";

export const naturgeografi: Category = {
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
};
