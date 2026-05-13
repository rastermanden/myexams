import type { Category } from "@/lib/types";
import { sandsynlighedsregningFraBunden } from "../sandsynlighedsregning-fra-bunden";

export const sandsynlighed: Category = {
  slug: "sandsynlighed",
  title: "Sandsynlighed",
  summary: "Sandsynlighedsregning fra intuition til formelle beregninger.",
  emoji: "🎲",
  topics: [sandsynlighedsregningFraBunden],
};
