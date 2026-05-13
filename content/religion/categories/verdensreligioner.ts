import type { Category } from "@/lib/types";
import { kristendom } from "../kristendom";
import { islam } from "../islam";
import { joededom } from "../joededom";
import { buddhisme } from "../buddhisme";
import { naturreligioner } from "../naturreligioner";
import { ninianSmart } from "../ninian-smart";

export const verdensreligioner: Category = {
  slug: "verdensreligioner",
  title: "Verdensreligioner",
  summary:
    "De store verdensreligioner og naturreligioner — retninger, geografi, fælles myter, forskelle og Ninian Smarts syv dimensioner.",
  emoji: "🕊️",
  topics: [kristendom, islam, joededom, buddhisme, naturreligioner, ninianSmart],
};
