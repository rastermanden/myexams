import type { Category } from "@/lib/types";
import { vejrVsKlima } from "./vejr-vs-klima";
import { klimaetsElementer } from "./klimaets-elementer";
import { atmosfaerensOpbygning } from "./atmosfaerens-opbygning";
import { globaleVindsystemer } from "./globale-vindsystemer";
import { klimazoner } from "./klimazoner";
import { koeppensKlimaklassifikation } from "./koeppens-klimaklassifikation";
import { havstroemme } from "./havstroemme";
import { drivhuseffekten } from "./drivhuseffekten";
import { klimaforandringer } from "./klimaforandringer";
import { klimatilpasning } from "./klimatilpasning";
import { elNinoLaNina } from "./el-nino-la-nina";

export const klima: Category = {
  slug: "klima",
  title: "Klima",
  summary:
    "Klimasystemer, klimazoner og klimaforandringer fra folkeskole til gymnasium.",
  emoji: "🌡️",
  topics: [
    vejrVsKlima,
    klimaetsElementer,
    atmosfaerensOpbygning,
    globaleVindsystemer,
    klimazoner,
    koeppensKlimaklassifikation,
    havstroemme,
    drivhuseffekten,
    klimaforandringer,
    klimatilpasning,
    elNinoLaNina,
  ],
};
