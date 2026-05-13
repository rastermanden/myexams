import type { Category } from "@/lib/types";
import { pladetektonik as pladetektonikTopic } from "../pladetektonik";

export const pladetektonik: Category = {
  slug: "pladetektonik",
  title: "Pladetektonik",
  summary:
    "Jordens indre, pladernes bevægelser og konsekvenser som vulkaner, jordskælv og tsunamier.",
  emoji: "🌋",
  topics: [pladetektonikTopic],
};
