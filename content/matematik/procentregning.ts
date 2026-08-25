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
    },
    {
      heading: "Vækstfaktor — genvejen til stigning og fald",
      body:
        "En vækstfaktor er det tal, du ganger med, når noget ændrer sig procentvis. En stigning på 25 % svarer til vækstfaktoren 1 + 0,25 = 1,25, og et fald på 25 % svarer til 1 − 0,25 = 0,75. Så bliver opgaverne til én multiplikation: en vare til 800 kr med 25 % rabat koster 800 × 0,75 = 600 kr, og en pris uden moms på 400 kr bliver 400 × 1,25 = 500 kr med moms. Vækstfaktoren fortæller også den anden vej: ganger du med 0,92, er der tale om et fald på 8 %.",
    },
    {
      heading: "Hvor mange procent udgør det?",
      body:
        "Skal du finde procenten, deler du delen med det hele og ganger med 100: 27 af 60 er 27 : 60 = 0,45 = 45 %. Rækkefølgen er vigtig — delen står øverst, det hele nederst. Samme metode bruges til procentvis ændring: en pris stiger fra 400 kr til 460 kr, altså 60 kr mere. Ændringen er 60 : 400 = 0,15 = 15 %. Bemærk, at du skal dividere med det oprindelige tal, ikke med det nye.",
    },
    {
      heading: "Find prisen før ændringen",
      body:
        "Kender du prisen efter en procentvis ændring, skal du dividere med vækstfaktoren i stedet for at gange. En vare koster 480 kr efter 20 % rabat. Vækstfaktoren er 0,80, så den oprindelige pris er 480 : 0,80 = 600 kr. Tjek: 600 × 0,80 = 480. Den klassiske fejl er at lægge 20 % af 480 oveni (576 kr) — men rabatten blev jo regnet af den gamle, større pris.",
    },
    {
      heading: "To ændringer efter hinanden — og renters rente",
      body:
        "Procenter må ikke bare lægges sammen. Stiger et beløb på 1.200 kr først 10 % og falder derefter 10 %, ganger du med begge vækstfaktorer: 1.200 × 1,10 × 0,90 = 1.188 kr. Du ender altså lavere end du startede, fordi faldet regnes af et større tal. Samme princip gælder renters rente: 5.000 kr til 3 % om året i 2 år bliver 5.000 × 1,03 × 1,03 = 5.000 × 1,03² = 5.304,50 kr. Formlen er startbeløb × vækstfaktor opløftet i antal år.",
    },
    {
      heading: "Procent og procentpoint — og typiske fejl",
      body:
        "Går et parti fra 40 % til 45 % af stemmerne, er stigningen 5 procentpoint — men den procentvise stigning er 5 : 40 = 12,5 %. Brug procentpoint, når du sammenligner to procenttal, og procent, når du sammenligner med udgangspunktet. Andre typiske fejl: at regne rabat af den nye pris i stedet for den gamle, at tro at +20 % efterfulgt af −20 % giver det samme tal igen, og at glemme, at moms på 25 % lægges til prisen uden moms (mens man går den anden vej ved at dividere med 1,25 — ikke ved at trække 25 % fra).",
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
