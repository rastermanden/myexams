import type { Subject } from "@/lib/types";
import { naturgeografi } from "./categories/naturgeografi";
import { regioner } from "./categories/regioner";
import { demografi } from "./categories/demografi";

export const geografi: Subject = {
  slug: "geografi",
  title: "Geografi",
  emoji: "🌍",
  description:
    "Naturgeografi og kulturgeografi til gymnasieniveau — regionale studier, klima, pladetektonik, demografi og geopolitik.",
  categories: [naturgeografi, regioner, demografi],
};
