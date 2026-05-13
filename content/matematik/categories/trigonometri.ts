import type { Category } from "@/lib/types";
import { trigonometri as trigonometriTopic } from "../trigonometri";

export const trigonometri: Category = {
  slug: "trigonometri",
  title: "Trigonometri",
  summary: "Retvinklet og generel trigonometri med enhedscirkel og funktioner.",
  emoji: "📏",
  topics: [trigonometriTopic],
};
