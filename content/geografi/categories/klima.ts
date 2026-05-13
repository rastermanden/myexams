import type { Category } from "@/lib/types";
import { vejrVsKlima } from "../klima/vejr-vs-klima";
import { klimaetsElementer } from "../klima/klimaets-elementer";
import { atmosfaerensOpbygning } from "../klima/atmosfaerens-opbygning";
import { globaleVindsystemer } from "../klima/globale-vindsystemer";
import { klimazoner } from "../klima/klimazoner";
import { koeppensKlimaklassifikation } from "../klima/koeppens-klimaklassifikation";
import { havstroemme } from "../klima/havstroemme";
import { drivhuseffekten } from "../klima/drivhuseffekten";
import { klimaforandringer } from "../klima/klimaforandringer";
import { klimatilpasning } from "../klima/klimatilpasning";
import { elNinoLaNina } from "../klima/el-nino-la-nina";

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
