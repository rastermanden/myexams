import type { Topic } from "@/lib/types";

export const klimaforandringer: Topic = {
  slug: "klimaforandringer",
  title: "Klimaforandringer og menneskelig påvirkning",
  summary:
    "Klimaet har altid ændret sig, men menneskeskabte drivhusgas­udledninger accelererer forandringerne markant. Lær om historiske og nutidige klimaforandringer, observerede effekter og IPCCs konklusioner.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/2000_Year_Temperature_Comparison.png?width=800",
    alt: "Graf over Jordens gennemsnitstemperatur de seneste 2000 år – med markant stigning i nutiden",
    credit: "Wikimedia Commons",
    license: "Public domain",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:2000_Year_Temperature_Comparison.png",
  },
  sections: [
    {
      heading: "Historiske klimaforandringer",
      body:
        "Jordens klima har aldrig været statisk. Gennem geologisk tid har klimaet svinget mellem varme perioder (drivhus­klima) og kolde istider (ishus­klima). De kvartære istider (de seneste 2,6 millioner år) har haft cykliske perioder med store isdækkede kontinenter og et 5–8 °C koldere globalklima, alternerende med interglaciale perioder. Disse cykler styres af Milankovitch-parametrene: ændringer i Jordens bane (ekscenticitet, 100.000 år), aksehældning (oblicitet, 41.000 år) og precessionen (23.000 år). Derudover har store vulkanudbrud, solaktivitetsvariationer og kontinent­drift påvirket klimaet over lang tid. Holocene (fra ca. 11.700 år siden) er den varme interglaciale periode, vi lever i.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vostok_420ky_4curves_insolation.jpg?width=800",
        alt: "Graf over CO₂, temperatur og insolation over de seneste 420.000 år fra Vostok-iskerneboringer",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Vostok_420ky_4curves_insolation.jpg",
      },
    },
    {
      heading: "Menneskeskabte klimaforandringer",
      body:
        "Siden den industrielle revolution (ca. 1750) har menneskelige aktiviteter – primært afbrænding af fossile brændstoffer (kul, olie, naturgas) og skovrydning – øget CO₂-koncentrationen fra ca. 280 ppm til over 420 ppm. Andre drivhusgasser som metan (CH₄) og lattergas (N₂O) er ligeledes steget markant. IPCC (FN's klimapanel) konkluderer i AR6 (2021) med ekstremt høj sikkerhed, at menneskelig påvirkning er den dominerende årsag til den observerede opvarmning siden midten af det 20. århundrede. Den globale gennemsnitstemperatur er allerede steget ca. 1,2 °C i forhold til det præindustrielle niveau (1850–1900).",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Global_Temperature_Anomaly.svg?width=800",
        alt: "Graf over globale temperaturanomalier 1850–2020",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Global_Temperature_Anomaly.svg",
      },
    },
    {
      heading: "Observerede effekter",
      body:
        "De observerede konsekvenser af den globale opvarmning er allerede tydelige: Havniveaustigninger: havet er steget ca. 20 cm siden 1900 og accelererer (ca. 3,7 mm/år nu). Det skyldes termisk udvidelse af havvand og smeltning af gletsjere og indlandsis. Smeltende is: arktisk havis-udbredelse falder dramatisk; Grønlands og Antarktis' indlandsisplader mister masse. Hyppigere ekstremvejr: varmebølger er mere hyppige og intense; kraftigere nedbørs­hændelser; ændrede monsunmønstre. Ændringer i biodiversitet: polflytning af arters udbredelse, koralrevs­bleging pga. varmere, mere surt havvand. Arktisk is smelter dobbelt så hurtigt som det globale gennemsnit.",
    },
    {
      heading: "IPCCs konklusioner",
      body:
        "IPCC (Intergovernmental Panel on Climate Change) udgiver regelmæssige rapporter baseret på den samlede videnskabelige litteratur. Den sjette vurderingsrapport (AR6, 2021–2022) konkluderer: Jordens klima er allerede ændret på måder, der er hidtil usete over tusinder af år. Opvarmningen er utvetydigt menneskeskabt. For at begrænse opvarmningen til 1,5 °C skal globale nettoudledninger nå nul inden ca. 2050. Overskrides 1,5–2 °C vil Jordens klimasystem nærme sig tippepunkter (AMOC-svækkelse, arktisk is­tab, tropeskov-dieback), der er irreversible på menneskelige tidsskalaer. Rapporten er enstemmigt vedtaget af 195 regeringer og danner grundlag for internationale klimaforhandlinger.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er Milankovitch-parametrene primært ansvarlige for?",
      options: [
        { id: "a", text: "De menneskeskabte CO₂-udledninger" },
        { id: "b", text: "Naturlige, cykliske istider og varme perioder over titusinder af år" },
        { id: "c", text: "Solpletcyklussens 11-årige variation" },
        { id: "d", text: "Den termohaline cirkulationshastig­hed" },
      ],
      correctOptionId: "b",
      explanation:
        "Milankovitch-parametrene beskriver cykliske ændringer i Jordens bane om Solen (ekscenticitet, aksehældning, præcession), der over 20.000–100.000 år ændrer den sæsonlige og geografiske fordeling af solindstråling og dermed driver istidscyklusser.",
    },
    {
      id: "q2",
      prompt: "Hvor meget er den globale gennemsnitstemperatur steget siden det præindustrielle niveau?",
      options: [
        { id: "a", text: "Ca. 0,2 °C" },
        { id: "b", text: "Ca. 0,5 °C" },
        { id: "c", text: "Ca. 1,2–1,3 °C" },
        { id: "d", text: "Ca. 3 °C" },
      ],
      correctOptionId: "c",
      explanation:
        "Den globale middeltemperatur er steget ca. 1,2–1,3 °C siden den præindustrielle referenceperiode 1850–1900. Dette er ifølge IPCC AR6 utvetydigt forårsaget af menneskelig aktivitet.",
    },
    {
      id: "q3",
      prompt: "Hvad er det primære årsag til havniveaustigninger i dag?",
      options: [
        { id: "a", text: "Øget nedbør over havene" },
        { id: "b", text: "Termisk udvidelse af havvand og smeltning af landbaseret is" },
        { id: "c", text: "Erosion af kystlinjer" },
        { id: "d", text: "Tyngdekraftsvariationer pga. masseforskydn­inger" },
      ],
      correctOptionId: "b",
      explanation:
        "Havniveaustigninger drives primært af to faktorer: termisk udvidelse (havvand udvider sig når det opvarmes) og tilstrømning af smeltevand fra landbaserede gletsjere og Grønlands/Antarktis' indlandsisplader.",
    },
    {
      id: "q4",
      prompt: "Hvad konkluderer IPCC AR6 om, hvornår globale nettoudledninger skal nå nul for at begrænse opvarmningen til 1,5 °C?",
      options: [
        { id: "a", text: "Inden 2030" },
        { id: "b", text: "Ca. inden 2050" },
        { id: "c", text: "Ca. inden 2075" },
        { id: "d", text: "Inden 2100" },
      ],
      correctOptionId: "b",
      explanation:
        "IPCC AR6 konkluderer, at globale CO₂-nettoudledninger skal nå netto-nul ca. inden 2050 for at begrænse opvarmningen til 1,5 °C. For 2 °C kan det udskydes til ca. 2070. Det kræver radikale omstillinger af energi, transport og landbrug.",
    },
    {
      id: "q5",
      prompt: "Hvad er et 'klimatippepunkt'?",
      options: [
        { id: "a", text: "Den temperatur, ved hvilken havis begynder at smelte" },
        { id: "b", text: "En grænse, efter hvilken klimaforandringer kan blive selvforstærkende og irreversible" },
        { id: "c", text: "Tidspunktet for IPCC's næste vurderingsrapport" },
        { id: "d", text: "Grænsen mellem vinter- og sommerhalvår" },
      ],
      correctOptionId: "b",
      explanation:
        "Et klimatippepunkt er et kritisk punkt i klimasystemet, hvor en lille yderligere opvarmning kan udløse selvforstærkende, irreversible ændringer – som AMOC-kollaps, Grønlands destabilisering eller Amazon-skovens udtørring.",
    },
    {
      id: "q6",
      prompt: "Hvad er CO₂-koncentrationen i atmosfæren steget fra til siden den præindustrielle tid?",
      options: [
        { id: "a", text: "Fra 150 ppm til 280 ppm" },
        { id: "b", text: "Fra 280 ppm til over 420 ppm" },
        { id: "c", text: "Fra 350 ppm til 500 ppm" },
        { id: "d", text: "Fra 400 ppm til 450 ppm" },
      ],
      correctOptionId: "b",
      explanation:
        "Det præindustrielle CO₂-niveau var ca. 280 ppm. Det er nu (2024) steget til over 420 ppm – en stigning på ca. 50 %. Det er den højeste koncentration i mindst 3 millioner år.",
    },
    {
      id: "q7",
      prompt: "Hvad er 'koralrevs­bleging' et tegn på?",
      options: [
        { id: "a", text: "Overrislingsforurening fra landbruget" },
        { id: "b", text: "For varmt og/eller for surt havvand der stresser og dræber koralrevenes alger" },
        { id: "c", text: "Naturlig årstidsvariation i koralrevets farve" },
        { id: "d", text: "For store fiskepopulationer der tager koralernes føde" },
      ],
      correctOptionId: "b",
      explanation:
        "Koralrevs­bleging sker, når varmere (og/eller surere) havvand stresser korallernes symbiontiske alger (zooxanthellae), som koralerne udstøder. Uden algerne bliver korallerne hvide (blegede). Langvarig bleging medfører korallernes død.",
    },
  ],
};
