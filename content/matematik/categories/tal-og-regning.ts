import type { Category } from "@/lib/types";
import { talOgRegningFraBunden } from "../tal-og-regning-fra-bunden";
import { broeker } from "../broeker";
import { maalOgEnheder } from "../maal-og-enheder";

export const talOgRegning: Category = {
  slug: "tal-og-regning",
  title: "Tal og regning",
  summary: "Grundlæggende talforståelse, brøker, regneregler, mål og enheder.",
  emoji: "➗",
  topics: [talOgRegningFraBunden, broeker, maalOgEnheder],
};
