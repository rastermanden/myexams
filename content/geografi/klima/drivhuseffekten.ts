import type { Topic } from "@/lib/types";

export const drivhuseffekten: Topic = {
  slug: "drivhuseffekten",
  title: "Drivhuseffekten",
  summary:
    "Drivhuseffekten er en naturlig og livsnødvendig proces – men menneskeskabt forstærkning heraf fører til global opvarmning. Lær om strålingsbalancen, drivhusgasserne og den forstærkede drivhuseffekt.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greenhouse_Effect.svg?width=800",
    alt: "Diagram over drivhuseffektens energiflow i jordens atmosfære",
    credit: "Wikimedia Commons",
    license: "Public domain",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Greenhouse_Effect.svg",
  },
  sections: [
    {
      heading: "Den naturlige drivhuseffekt",
      body:
        "Den naturlige drivhuseffekt er afgørende for livet på Jorden. Solens kortbølgede stråling passerer relativt uforhindret igennem atmosfæren og opvarmer jordens overflade. Overfladen udsender herefter langbølget infrarød (varme-)stråling tilbage mod verdensrummet. Drivhusgasserne i atmosfæren absorberer en stor del af denne infrarøde stråling og udsender noget af varmen tilbage mod overfladen – dette kaldes drivhuseffekten. Uden den naturlige drivhuseffekt ville Jordens gennemsnitstemperatur være ca. –18 °C i stedet for de nuværende +15 °C. Drivhuseffekten er altså en fundamental forudsætning for flydende vand og livet som vi kender det.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Earth_Energy_Budget.png?width=800",
        alt: "Diagram over Jordens energibudget og strålingsbalance",
        credit: "NASA via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Earth_Energy_Budget.png",
      },
    },
    {
      heading: "Drivhusgasser",
      body:
        "Drivhusgasserne er luftarter der absorberer og re-emitterer infrarød stråling. De vigtigste er: Vanddamp (H₂O): den absolut vigtigste naturlige drivhusgas – ansvarlig for ca. 50 % af den naturlige drivhuseffekt. Kuldioxid (CO₂): vigtigste menneskeskabte drivhusgas fra afbrænding af fossile brændstoffer og skovrydning. Metan (CH₄): 80 gange kraftigere end CO₂ over 20 år; udslippes fra kvæg, risdyrkning, lossepladser og naturgas-lækager. Lattergas (N₂O): ca. 265 gange kraftigere end CO₂ over 100 år; stammer primært fra kunstgødning og husdyrgødning. Fluorerede gasser (HFC, PFC, SF₆): menneskeskabte, meget kraftige og langlivede.",
    },
    {
      heading: "Strålingsbalancen",
      body:
        "Jordens energibalance eller strålingsbalance er forholdet mellem indgående solstråling og udgående stråling. Jordens albedo (reflektivitet) er gennemsnitligt ca. 0,30 – dvs. 30 % af solstrålingen reflekteres direkte (af skyer, is og lysere overflader). Resten absorberes og omdannes til varme. I ligevægt udstråler Jordens system nøjagtigt den samme energimængde, som den modtager. Øgede drivhusgaskoncentrationer reducerer mængden af udgående infrarød stråling, hvilket skaber en ubalance kaldet 'strålingsforcing' (RF). En RF på +3,9 W/m² (IPCC, 2021) er resultatet af menneskelige udledninger siden den præindustrielle tid.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Solar_Spectrum.png?width=800",
        alt: "Solens strålingsintensitet fordelt på bølgelængder og atmosfærisk absorption",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Solar_Spectrum.png",
      },
    },
    {
      heading: "Den forstærkede drivhuseffekt",
      body:
        "Den forstærkede (antropogene) drivhuseffekt er det fænomen, at menneskelige udledninger af drivhusgasser øger koncentrationerne i atmosfæren ud over det naturlige niveau og dermed øger den naturlige drivhuseffekt. Siden den industrielle revolution (ca. 1750) er CO₂-koncentrationen steget fra ca. 280 ppm til over 420 ppm (2024) – den højeste koncentration i mindst 3 millioner år. Dette har allerede ført til en global gennemsnitsopvarmning på ca. 1,2–1,3 °C. Tilbagekoblingsmekanismer forstærker effekten: smeltet is reducerer albedoen, opvarmede have kan lagre mindre CO₂, og optøende permafrost frigiver metan.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad ville Jordens gennemsnitstemperatur være uden den naturlige drivhuseffekt?",
      options: [
        { id: "a", text: "Ca. +5 °C" },
        { id: "b", text: "Ca. –18 °C" },
        { id: "c", text: "Ca. –50 °C" },
        { id: "d", text: "Ca. +25 °C" },
      ],
      correctOptionId: "b",
      explanation:
        "Uden den naturlige drivhuseffekt ville Jordens gennemsnitstemperatur være ca. –18 °C i stedet for de nuværende +15 °C. Drivhuseffekten tilsætter altså ca. 33 °C og er en forudsætning for flydende vand og livet.",
    },
    {
      id: "q2",
      prompt: "Hvilken naturlig drivhusgas er ansvarlig for størstedelen af den naturlige drivhuseffekt?",
      options: [
        { id: "a", text: "CO₂ (kuldioxid)" },
        { id: "b", text: "CH₄ (metan)" },
        { id: "c", text: "H₂O (vanddamp)" },
        { id: "d", text: "N₂O (lattergas)" },
      ],
      correctOptionId: "c",
      explanation:
        "Vanddamp er den vigtigste naturlige drivhusgas og tegner sig for ca. 50 % af den naturlige drivhuseffekt. CO₂ bidrager ca. 20 %, og det er primært CO₂ (og metan) der drives op af menneskelig aktivitet.",
    },
    {
      id: "q3",
      prompt: "Hvad er Jordens gennemsnitlige albedo?",
      options: [
        { id: "a", text: "Ca. 0,10 (10 %)" },
        { id: "b", text: "Ca. 0,30 (30 %)" },
        { id: "c", text: "Ca. 0,60 (60 %)" },
        { id: "d", text: "Ca. 0,90 (90 %)" },
      ],
      correctOptionId: "b",
      explanation:
        "Jordens gennemsnitlige albedo er ca. 0,30 – dvs. 30 % af den indkommende solstråling reflekteres tilbage til rummet (primært af skyer, isdækkede overflader og lyse ørkenoverflader).",
    },
    {
      id: "q4",
      prompt: "Hvad er den nuværende CO₂-koncentration i atmosfæren (ca. 2024)?",
      options: [
        { id: "a", text: "Ca. 280 ppm (præindustrielt niveau)" },
        { id: "b", text: "Ca. 350 ppm" },
        { id: "c", text: "Ca. 420 ppm" },
        { id: "d", text: "Ca. 560 ppm" },
      ],
      correctOptionId: "c",
      explanation:
        "CO₂-koncentrationen overskred 420 ppm i 2023–2024. Det præindustrielle niveau var ca. 280 ppm. Stigningen skyldes primært afbrænding af fossile brændstoffer (kul, olie, naturgas) og skovrydning.",
    },
    {
      id: "q5",
      prompt: "Hvad er 'strålingsforcing' (radiative forcing)?",
      options: [
        { id: "a", text: "Energien fra solstorme og solvind" },
        { id: "b", text: "Ubalancen i Jordens energibudget forårsaget af ændringer i drivhusgas­koncentrationer" },
        { id: "c", text: "Den totale solindstråling pr. m² på Jordens overflade" },
        { id: "d", text: "Albedoens bidrag til kølende effekt" },
      ],
      correctOptionId: "b",
      explanation:
        "Strålingsforcing (RF) måles i watt pr. kvadratmeter (W/m²) og angiver ubalancen i energibudgettet. Positiv RF (som fra CO₂) fører til opvarmning; negativ RF (som fra vulkansk aerosoler) fører til afkøling.",
    },
    {
      id: "q6",
      prompt: "Hvilken positiv tilbagekoblingsmekanisme forstærker drivhuseffekten, når isen smelter?",
      options: [
        { id: "a", text: "Mere is afkøler havet og absorberer mere CO₂" },
        { id: "b", text: "Smeltet mørk hav- eller landflade absorberer mere solstråling (lavere albedo)" },
        { id: "c", text: "Mere sne reflekterer mere solstråling tilbage til rummet" },
        { id: "d", text: "Havvand fordamper langsommere når isen forsvinder" },
      ],
      correctOptionId: "b",
      explanation:
        "Is og sne har høj albedo (ca. 0,8–0,9) og reflekterer det meste af solstrålingen. Når de smelter, afslører de mørkere hav (albedo ~0,06) eller land (albedo ~0,1–0,3), der absorberer langt mere varme. Dette er en positiv tilbagekobling, der forstærker opvarmningen.",
    },
    {
      id: "q7",
      prompt: "Hvad er metan (CH₄)'s opvarmningspotentiale sammenlignet med CO₂ over 20 år?",
      options: [
        { id: "a", text: "Det samme som CO₂ (1×)" },
        { id: "b", text: "Ca. 10 gange kraftigere end CO₂" },
        { id: "c", text: "Ca. 80 gange kraftigere end CO₂" },
        { id: "d", text: "Ca. 300 gange kraftigere end CO₂" },
      ],
      correctOptionId: "c",
      explanation:
        "Metan har et globalt opvarmningspotentiale (GWP) på ca. 80 over 20 år, dvs. en kg metan opvarmer ca. 80 gange mere end en kg CO₂ over 20 år. Over 100 år er GWP ca. 25–29 gange CO₂. Metan nedbrydes hurtigere i atmosfæren end CO₂.",
    },
  ],
};
