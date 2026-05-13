import type { Category } from "@/lib/types";
import { deskriptivStatistik } from "../deskriptiv-statistik";
import { lineaerRegression } from "../lineaer-regression";
import { risikoforhold } from "../risikoforhold";

export const statistik: Category = {
  slug: "statistik",
  title: "Statistik",
  summary: "Dataanalyse, modeller og tolkning af variation i datasæt.",
  emoji: "📊",
  topics: [deskriptivStatistik, lineaerRegression, risikoforhold],
};
