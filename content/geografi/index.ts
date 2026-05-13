import type { Subject } from "@/lib/types";
import { regioner } from "./categories/regioner";
import { demografi } from "./categories/demografi";
import { geopolitik } from "./categories/geopolitik";

export const geografi: Subject = {
  slug: "geografi",
  title: "Geografi",
  emoji: "🌍",
  description:
    "Naturgeografi og kulturgeografi til gymnasieniveau — regionale studier, klima, pladetektonik, demografi og geopolitik.",
  categories: [regioner, demografi, geopolitik],
};
