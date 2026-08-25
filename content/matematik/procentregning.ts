import type { Topic } from "@/lib/types";
import { ProcentTraening } from "@/components/TjekUp8Demo";

export const procentregning: Topic = {
  slug: "procentregning",
  title: "Procent",
  summary:
    "Procent af et tal, rabat og moms, vækstfaktor, procentvis stigning og fald, prisen før ændringen, procentpoint og renters rente.",
  demoComponent: ProcentTraening,
  sections: [
    {
      heading: "Procent betyder hundrededele",
      body:
        "Procent kommer af „pro cent“ — pr. hundrede. 37 % betyder altså 37 ud af 100, altså brøken 37/100 eller decimaltallet 0,37. Derfor kan du altid skifte mellem de tre skrivemåder: fra procent til decimaltal dividerer du med 100 (flytter kommaet to pladser til venstre), og fra decimaltal til procent ganger du med 100. 100 % er det hele, 50 % er halvdelen, og 200 % er det dobbelte. Procent er et forholdstal: 20 % af 50 kr er ikke det samme som 20 % af 5.000 kr, så det skal altid stå klart, hvad procenten regnes af.",
    },
    {
      heading: "Procent af et tal",
      body:
        "Den sikre metode er at gange med decimaltallet: 18 % af 250 = 0,18 × 250 = 45. Den anden metode er 1 %-metoden, som er god i hovedregning: 1 % af 250 er 2,5, og 18 × 2,5 = 45. Kan du de nemme brøker, går det endnu hurtigere: 50 % er halvdelen, 25 % er en fjerdedel, 10 % er tallet med kommaet flyttet én plads til venstre, og 5 % er halvdelen af 10 %.",
      examples: [
        {
          title: "17 % af 460 kr",
          task: "Find procentdelen med to forskellige metoder.",
          steps: [
            {
              expression: "Metode 1 — decimaltal: 17 % = 17 : 100 = 0,17",
              explanation: "Flyt kommaet to pladser til venstre.",
            },
            {
              expression: "0,17 × 460: regn 17 × 46 = 782, og sæt kommaet: 78,2",
              explanation: "17 × 46 = 17 × 40 + 17 × 6 = 680 + 102 = 782.",
            },
            {
              expression: "Metode 2 — 1 %-metoden: 1 % af 460 = 4,60",
              explanation: "1 % finder du ved at dividere med 100.",
            },
            { expression: "17 × 4,60 = 78,20", explanation: "10 × 4,60 = 46, og 7 × 4,60 = 32,20. 46 + 32,20 = 78,20." },
          ],
          result: "17 % af 460 kr = 78,20 kr",
          check: "Overslag: 20 % af 460 er 92, og 17 % skal være lidt mindre. Passer.",
        },
        {
          title: "12,5 % af 640",
          task: "Brug en kendt brøk i stedet for at gange.",
          steps: [
            { expression: "12,5 % = 12,5/100 = 1/8", explanation: "12,5 % er en ottendedel — værd at kunne udenad." },
            { expression: "640 : 8 = 80" },
            { expression: "Kontrol med decimaltal: 0,125 × 640 = 80" },
          ],
          result: "12,5 % af 640 = 80",
          check: "8 × 80 = 640, så 80 er netop en ottendedel.",
        },
      ],
    },
    {
      heading: "Vækstfaktor — genvejen til stigning og fald",
      body:
        "En vækstfaktor er det tal, du ganger med, når noget ændrer sig procentvis. En stigning på 25 % svarer til vækstfaktoren 1 + 0,25 = 1,25, og et fald på 25 % svarer til 1 − 0,25 = 0,75. Så bliver opgaverne til én multiplikation: en vare til 800 kr med 25 % rabat koster 800 × 0,75 = 600 kr, og en pris uden moms på 400 kr bliver 400 × 1,25 = 500 kr med moms. Vækstfaktoren fortæller også den anden vej: ganger du med 0,92, er der tale om et fald på 8 %.",
      examples: [
        {
          title: "1.250 kr stiger 8 %",
          task: "Læg en procentdel til med vækstfaktor.",
          steps: [
            { expression: "Vækstfaktor: 1 + 8/100 = 1 + 0,08 = 1,08" },
            {
              expression: "1.250 × 1,08 = 1.350",
              explanation: "Mellemregning: 1.250 × 1 = 1.250 og 1.250 × 0,08 = 100. 1.250 + 100 = 1.350.",
            },
          ],
          result: "Ny værdi: 1.350 kr",
          check: "Stigningen er 100 kr, og 100 : 1.250 = 0,08 = 8 %. Passer.",
        },
        {
          title: "2.400 kr falder 35 %",
          task: "Træk en procentdel fra med vækstfaktor.",
          steps: [
            {
              expression: "Vækstfaktor: 1 − 35/100 = 1 − 0,35 = 0,65",
              explanation: "Efter et fald på 35 % er der 65 % tilbage.",
            },
            {
              expression: "2.400 × 0,65 = 1.560",
              explanation: "Mellemregning: 2.400 × 0,6 = 1.440 og 2.400 × 0,05 = 120. 1.440 + 120 = 1.560.",
            },
            {
              expression: "Samme svar den lange vej: 0,35 × 2.400 = 840, og 2.400 − 840 = 1.560",
            },
          ],
          result: "Ny pris: 1.560 kr",
          check: "1.560 : 2.400 = 0,65 — altså 65 % af den gamle pris. Passer.",
        },
      ],
    },
    {
      heading: "Hvor mange procent udgør det?",
      body:
        "Skal du finde procenten, deler du delen med det hele og ganger med 100: 27 af 60 er 27 : 60 = 0,45 = 45 %. Rækkefølgen er vigtig — delen står øverst, det hele nederst. Samme metode bruges til procentvis ændring: en pris stiger fra 400 kr til 460 kr, altså 60 kr mere. Ændringen er 60 : 400 = 0,15 = 15 %. Bemærk, at du skal dividere med det oprindelige tal, ikke med det nye.",
      examples: [
        {
          title: "En cykel stiger fra 3.200 kr til 3.680 kr",
          task: "Find den procentvise stigning.",
          steps: [
            { expression: "Ændring i kroner: 3.680 − 3.200 = 480" },
            {
              expression: "480 : 3.200 = 0,15",
              explanation: "Divider altid med det oprindelige tal — ikke med det nye.",
            },
            { expression: "0,15 × 100 = 15 %" },
            {
              expression: "Kontrol med vækstfaktor: 3.680 : 3.200 = 1,15 → +15 %",
              explanation: "Vækstfaktoren 1,15 svarer til en stigning på 15 %.",
            },
          ],
          result: "Prisen er steget 15 %",
          check: "3.200 × 1,15 = 3.680. Passer.",
        },
        {
          title: "63 ud af 84 elever",
          task: "Find hvor mange procent en del udgør.",
          steps: [
            { expression: "63 : 84 = 0,75", explanation: "Delen øverst, det hele nederst." },
            { expression: "0,75 × 100 = 75 %" },
            { expression: "Som brøk: 63/84 forkortet med 21 giver 3/4 = 75 %" },
          ],
          result: "63 af 84 er 75 %",
          check: "75 % af 84 er 0,75 × 84 = 63. Passer.",
        },
      ],
    },
    {
      heading: "Find prisen før ændringen",
      body:
        "Kender du prisen efter en procentvis ændring, skal du dividere med vækstfaktoren i stedet for at gange. En vare koster 480 kr efter 20 % rabat. Vækstfaktoren er 0,80, så den oprindelige pris er 480 : 0,80 = 600 kr. Tjek: 600 × 0,80 = 480. Den klassiske fejl er at lægge 20 % af 480 oveni (576 kr) — men rabatten blev jo regnet af den gamle, større pris.",
      examples: [
        {
          title: "Efter 30 % rabat koster varen 1.400 kr",
          task: "Find prisen før rabatten.",
          steps: [
            { expression: "Vækstfaktor ved 30 % rabat: 1 − 0,30 = 0,70" },
            {
              expression: "gammel pris × 0,70 = 1.400",
              explanation: "Sæt det op som en ligning — den gamle pris er det ukendte.",
            },
            {
              expression: "gammel pris = 1.400 : 0,70 = 2.000",
              explanation: "Divider med vækstfaktoren i stedet for at gange.",
            },
            {
              expression: "Fejlsvaret: 1.400 + 0,30 × 1.400 = 1.820",
              explanation: "Det er forkert, fordi rabatten blev regnet af den gamle, større pris.",
            },
          ],
          result: "Varen kostede 2.000 kr før rabatten",
          check: "2.000 × 0,70 = 1.400. Passer — og rabatten var 600 kr.",
        },
        {
          title: "Fra pris med moms til pris uden moms",
          task: "En vare koster 1.875 kr med 25 % moms. Hvad er prisen uden moms?",
          steps: [
            { expression: "Vækstfaktor for moms: 1 + 0,25 = 1,25" },
            { expression: "pris uden moms = 1.875 : 1,25 = 1.500" },
            { expression: "Momsen er 1.875 − 1.500 = 375 kr" },
            {
              expression: "Bemærk: 25 % af 1.875 er 468,75 — ikke momsen",
              explanation: "Momsen er 25 % af prisen UDEN moms, ikke af prisen med moms.",
            },
          ],
          result: "Pris uden moms: 1.500 kr (moms 375 kr)",
          check: "1.500 × 1,25 = 1.875. Passer.",
        },
      ],
    },
    {
      heading: "To ændringer efter hinanden — og renters rente",
      body:
        "Procenter må ikke bare lægges sammen. Stiger et beløb på 1.200 kr først 10 % og falder derefter 10 %, ganger du med begge vækstfaktorer: 1.200 × 1,10 × 0,90 = 1.188 kr. Du ender altså lavere end du startede, fordi faldet regnes af et større tal. Samme princip gælder renters rente: 5.000 kr til 3 % om året i 2 år bliver 5.000 × 1,03 × 1,03 = 5.000 × 1,03² = 5.304,50 kr. Formlen er startbeløb × vækstfaktor opløftet i antal år.",
      examples: [
        {
          title: "850 kr stiger 20 % og falder derefter 15 %",
          task: "Regn to procentvise ændringer efter hinanden.",
          steps: [
            { expression: "Vækstfaktorer: 1,20 (stigning) og 0,85 (fald)" },
            {
              expression: "Efter stigningen: 850 × 1,20 = 1.020",
              explanation: "Mellemregning: 850 + 0,20 × 850 = 850 + 170 = 1.020.",
            },
            {
              expression: "Efter faldet: 1.020 × 0,85 = 867",
              explanation: "Mellemregning: 1.020 − 0,15 × 1.020 = 1.020 − 153 = 867.",
            },
            {
              expression: "Samlet vækstfaktor: 1,20 × 0,85 = 1,02 → +2 % i alt",
              explanation: "Procenterne må ikke lægges sammen: +20 % og −15 % giver ikke +5 %.",
            },
          ],
          result: "Slutbeløb: 867 kr — en samlet stigning på 2 %",
          check: "850 × 1,02 = 867. Passer.",
        },
        {
          title: "12.000 kr til 4 % rente i 3 år",
          task: "Regn renters rente år for år.",
          steps: [
            { expression: "Vækstfaktor pr. år: 1 + 0,04 = 1,04" },
            { expression: "Efter 1. år: 12.000 × 1,04 = 12.480", explanation: "Renten er 480 kr." },
            {
              expression: "Efter 2. år: 12.480 × 1,04 = 12.979,20",
              explanation: "Nu er renten 499,20 kr — større, fordi den regnes af et større beløb.",
            },
            { expression: "Efter 3. år: 12.979,20 × 1,04 = 13.498,37" },
            {
              expression: "Med formel: 12.000 × 1,04³ = 12.000 × 1,124864 = 13.498,37",
              explanation: "Samme resultat i ét hug.",
            },
          ],
          result: "Efter 3 år står der 13.498,37 kr",
          check: "Uden renters rente ville det være 12.000 + 3 × 480 = 13.440 kr — altså 58,37 kr mindre.",
        },
      ],
    },
    {
      heading: "Procent og procentpoint — og typiske fejl",
      body:
        "Går et parti fra 40 % til 45 % af stemmerne, er stigningen 5 procentpoint — men den procentvise stigning er 5 : 40 = 12,5 %. Brug procentpoint, når du sammenligner to procenttal, og procent, når du sammenligner med udgangspunktet. Andre typiske fejl: at regne rabat af den nye pris i stedet for den gamle, at tro at +20 % efterfulgt af −20 % giver det samme tal igen, og at glemme, at moms på 25 % lægges til prisen uden moms (mens man går den anden vej ved at dividere med 1,25 — ikke ved at trække 25 % fra).",
      examples: [
        {
          title: "Fra 12 % til 15 % tilslutning",
          task: "Skeln mellem procentpoint og procent.",
          steps: [
            {
              expression: "Forskel i procentpoint: 15 − 12 = 3 procentpoint",
              explanation: "Når du trækker to procenttal fra hinanden, får du procentpoint.",
            },
            {
              expression: "Relativ stigning: 3 : 12 = 0,25 = 25 %",
              explanation: "Her sammenligner du ændringen med udgangspunktet på 12 %.",
            },
          ],
          result: "En stigning på 3 procentpoint, svarende til en stigning på 25 %",
          check: "12 % × 1,25 = 15 %. Passer.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvor meget er 18 % af 250?",
      options: [
        { id: "a", text: "4,5" },
        { id: "b", text: "45" },
        { id: "c", text: "50" },
        { id: "d", text: "205" },
      ],
      correctOptionId: "b",
      explanation:
        "0,18 × 250 = 45. Eller med 1 %-metoden: 1 % af 250 er 2,5, og 18 × 2,5 = 45.",
    },
    {
      id: "q2",
      prompt: "En jakke koster 800 kr og sættes ned med 25 %. Hvad er den nye pris?",
      options: [
        { id: "a", text: "200 kr" },
        { id: "b", text: "575 kr" },
        { id: "c", text: "600 kr" },
        { id: "d", text: "1.000 kr" },
      ],
      correctOptionId: "c",
      explanation:
        "Rabatten er 0,25 × 800 = 200 kr, så prisen bliver 800 − 200 = 600 kr. Med vækstfaktor: 800 × 0,75 = 600 kr.",
    },
    {
      id: "q3",
      prompt: "Hvor mange procent er 27 af 60?",
      options: [
        { id: "a", text: "27 %" },
        { id: "b", text: "33 %" },
        { id: "c", text: "45 %" },
        { id: "d", text: "222 %" },
      ],
      correctOptionId: "c",
      explanation:
        "27 : 60 = 0,45, og 0,45 × 100 = 45 %. Delen står øverst, det hele nederst.",
    },
    {
      id: "q4",
      prompt: "Efter 20 % rabat koster en cykel 480 kr. Hvad kostede den før?",
      options: [
        { id: "a", text: "500 kr" },
        { id: "b", text: "576 kr" },
        { id: "c", text: "600 kr" },
        { id: "d", text: "960 kr" },
      ],
      correctOptionId: "c",
      explanation:
        "Vækstfaktoren ved 20 % rabat er 0,80. Gammel pris = 480 : 0,80 = 600 kr. Tjek: 600 × 0,80 = 480 kr.",
    },
    {
      id: "q5",
      prompt: "Et beløb på 1.200 kr stiger 10 % og falder derefter 10 %. Hvad er beløbet nu?",
      options: [
        { id: "a", text: "1.200 kr" },
        { id: "b", text: "1.188 kr" },
        { id: "c", text: "1.320 kr" },
        { id: "d", text: "1.080 kr" },
      ],
      correctOptionId: "b",
      explanation:
        "1.200 × 1,10 = 1.320, og 1.320 × 0,90 = 1.188 kr. Faldet regnes af det større beløb, så du ender under udgangspunktet.",
    },
    {
      id: "q6",
      prompt: "Hvad er vækstfaktoren ved et fald på 8 %?",
      options: [
        { id: "a", text: "1,08" },
        { id: "b", text: "0,92" },
        { id: "c", text: "0,8" },
        { id: "d", text: "8" },
      ],
      correctOptionId: "b",
      explanation:
        "Ved et fald trækker du procenten fra 1: 1 − 0,08 = 0,92. Der er 92 % tilbage.",
    },
    {
      id: "q7",
      prompt: "Du sætter 5.000 kr i banken til 3 % rente om året. Hvad står der efter 2 år?",
      options: [
        { id: "a", text: "5.150 kr" },
        { id: "b", text: "5.300 kr" },
        { id: "c", text: "5.304,50 kr" },
        { id: "d", text: "5.309 kr" },
      ],
      correctOptionId: "c",
      explanation:
        "5.000 × 1,03² = 5.000 × 1,0609 = 5.304,50 kr. Andet års rente regnes af det nye, større beløb — derfor renters rente.",
    },
    {
      id: "q8",
      prompt: "Et parti går fra 40 % til 45 % af stemmerne. Hvad er korrekt?",
      options: [
        { id: "a", text: "En stigning på 5 procentpoint, svarende til 12,5 %" },
        { id: "b", text: "En stigning på 5 %" },
        { id: "c", text: "En stigning på 45 procentpoint" },
        { id: "d", text: "En stigning på 12,5 procentpoint" },
      ],
      correctOptionId: "a",
      explanation:
        "Forskellen mellem to procenttal måles i procentpoint: 45 − 40 = 5 procentpoint. Den procentvise stigning er 5 : 40 = 0,125 = 12,5 %.",
    },
  ],
};
