import type { Category } from "@/lib/types";
import { geopolitikOverblik } from "../geopolitik-overblik";

export const geopolitik: Category = {
  slug: "geopolitik",
  title: "Geopolitik",
  summary:
    "Stater, magtforhold, konflikter, globalisering, energi og internationale organisationer i et nutidigt perspektiv.",
  emoji: "🧭",
  topics: [geopolitikOverblik],
};
