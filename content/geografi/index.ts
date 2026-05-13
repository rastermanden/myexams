import type { Subject } from "@/lib/types";
import { pladetektonik } from "./categories/pladetektonik";
import { regioner } from "./categories/regioner";
import { demografi } from "./categories/demografi";
import { klima } from "./categories/klima";

export const geografi: Subject = {
  slug: "geografi",
  title: "Geografi",
  emoji: "🌍",
  description:
    "Naturgeografi og kulturgeografi til gymnasieniveau — regionale studier, klima, pladetektonik, demografi og geopolitik.",
  categories: [pladetektonik, regioner, demografi, klima],
};
