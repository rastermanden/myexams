import type { Subject } from "@/lib/types";
import { litteratur } from "./categories/litteratur";

export const dansk: Subject = {
  slug: "dansk",
  title: "Dansk litteratur",
  emoji: "📚",
  description:
    "Tekstanalyse, perioder og forfatterskaber — fra oplysningstiden til moderne dansk litteratur.",
  categories: [litteratur],
};
