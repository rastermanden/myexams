import type { Category } from "@/lib/types";
import { afrikasHorn } from "../afrikas-horn";
import { australien } from "../australien";
import { sydamerika } from "../sydamerika";
import { sydoestasien } from "../sydoestasien";
import { mellemøsten } from "../mellemøsten";
import { arktisOgAntarktis } from "../arktis-og-antarktis";
import { europa } from "../europa";
import { nordafrikaOgSahel } from "../nordafrika-og-sahel";
import { centralasien } from "../centralasien";
import { stillehavsstater } from "../stillehavsstater";

export const regioner: Category = {
  slug: "regioner",
  title: "Regioner",
  summary: "Regionale case-studier med fokus på natur, samfund og udvikling.",
  emoji: "🗺️",
  topics: [
    afrikasHorn,
    australien,
    sydamerika,
    sydoestasien,
    mellemøsten,
    arktisOgAntarktis,
    europa,
    nordafrikaOgSahel,
    centralasien,
    stillehavsstater,
  ],
};
