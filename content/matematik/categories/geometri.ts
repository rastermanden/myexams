import type { Category } from "@/lib/types";
import { geometri as geometriTopic } from "../geometri";

export const geometri: Category = {
  slug: "geometri",
  title: "Geometri",
  summary: "Plangeometri, rumgeometri og vektorer fra folkeskole til gymnasium.",
  emoji: "📐",
  topics: [geometriTopic],
};
