import type { Subject } from "@/lib/types";
import { verdensreligioner } from "./categories/verdensreligioner";

export const religion: Subject = {
  slug: "religion",
  title: "Religion",
  emoji: "🕊️",
  description:
    "Verdensreligioner til gymnasieniveau — kristendom, islam, jødedom, buddhisme og naturreligioner. Hvert emne har nøglefakta, retninger, geografi, ligheder, forskelle og Ninian Smarts syv dimensioner.",
  categories: [verdensreligioner],
};
