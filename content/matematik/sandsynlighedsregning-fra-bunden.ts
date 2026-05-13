import type { Topic } from "@/lib/types";
import ProbabilityFromScratchDemo from "@/components/ProbabilityFromScratchDemo";

export const sandsynlighedsregningFraBunden: Topic = {
  slug: "sandsynlighedsregning-fra-bunden",
  title: "Sandsynlighedsregning fra bunden",
  summary:
    "Lær sandsynlighed trin for trin med en langsom start, mange små opgaver og interaktive eksperimenter.",
  demoComponent: ProbabilityFromScratchDemo,
  sections: [
    {
      heading: "Trin 1 — Intuition: hvad er sandsynlighed?",
      body:
        "Vi starter helt roligt: umuligt, usandsynligt, lige sandsynligt, sandsynligt og sikkert. Du arbejder med hverdagsnære eksempler og placerer dem på en sandsynlighedslinje fra 0 til 1.",
    },
    {
      heading: "Trin 2 — Simple eksperimenter",
      body:
        "Du prøver møntkast, terningekast og kugler i en pose. Målet er at opbygge intuition med konkrete forsøg, før vi fokuserer på notation.",
    },
    {
      heading: "Trin 3 — Tælle udfald",
      body:
        "Her lærer du, hvad et udfald og et udfaldsrum er. Vi tæller mulige og gunstige udfald i mange små opgaver.",
    },
    {
      heading: "Trin 4 — Beregning af sandsynlighed",
      body:
        "Nu bruger vi formlen P(A) = antal gunstige udfald / antal mulige udfald. Hver opgave viser sandsynligheden som brøk, decimaltal og procent.",
    },
    {
      heading: "Trin 5 — Komplementær sandsynlighed",
      body:
        'Du træner "sandsynligheden for IKKE at få ..." med reglen P(ikke A) = 1 − P(A).',
    },
    {
      heading: "Trin 6 — Sammensatte hændelser (introduktion)",
      body:
        "Til sidst får du en forsigtig introduktion til to møntkast, to terninger og simple tælletræer. Fokus er forståelse, ikke avancerede beviser.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvilken værdi passer til udsagnet 'umuligt'?",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "0,5" },
        { id: "c", text: "1" },
        { id: "d", text: "2" },
      ],
      correctOptionId: "a",
      explanation: "En umulig hændelse har sandsynlighed 0.",
    },
    {
      id: "q2",
      prompt: "Hvad er sandsynligheden for plat i ét fair møntkast?",
      options: [
        { id: "a", text: "1/6" },
        { id: "b", text: "1/2" },
        { id: "c", text: "2/3" },
        { id: "d", text: "1" },
      ],
      correctOptionId: "b",
      explanation: "Der er to lige sandsynlige udfald: krone og plat.",
    },
    {
      id: "q3",
      prompt: "På en fair terning: hvor mange mulige udfald er der?",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "5" },
        { id: "c", text: "6" },
        { id: "d", text: "8" },
      ],
      correctOptionId: "c",
      explanation: "En standardterning har seks sider: 1, 2, 3, 4, 5, 6.",
    },
    {
      id: "q4",
      prompt: "Hvad er P(lige tal) ved ét terningekast?",
      options: [
        { id: "a", text: "1/6" },
        { id: "b", text: "2/6" },
        { id: "c", text: "3/6 = 1/2" },
        { id: "d", text: "4/6" },
      ],
      correctOptionId: "c",
      explanation: "Lige udfald er 2, 4 og 6, altså 3 af 6.",
    },
    {
      id: "q5",
      prompt: "Hvis P(A)=0,3, hvad er P(ikke A)?",
      options: [
        { id: "a", text: "0,3" },
        { id: "b", text: "0,5" },
        { id: "c", text: "0,7" },
        { id: "d", text: "1,3" },
      ],
      correctOptionId: "c",
      explanation: "Komplementreglen siger: P(ikke A) = 1 − 0,3 = 0,7.",
    },
    {
      id: "q6",
      prompt: "En pose har 3 røde og 1 blå kugle. Hvad er P(blå)?",
      options: [
        { id: "a", text: "1/4" },
        { id: "b", text: "1/3" },
        { id: "c", text: "3/4" },
        { id: "d", text: "1" },
      ],
      correctOptionId: "a",
      explanation: "Der er 1 gunstigt udfald ud af 4 mulige.",
    },
    {
      id: "q7",
      prompt: "To fair møntkast: hvad er P(to kroner)?",
      options: [
        { id: "a", text: "1/2" },
        { id: "b", text: "1/3" },
        { id: "c", text: "1/4" },
        { id: "d", text: "3/4" },
      ],
      correctOptionId: "c",
      explanation: "Udfaldsrummet er KK, KP, PK, PP. Kun KK passer.",
    },
    {
      id: "q8",
      prompt: "Hvilken skrivemåde er korrekt for 0,25?",
      options: [
        { id: "a", text: "25% og 1/4" },
        { id: "b", text: "2,5% og 1/2" },
        { id: "c", text: "250% og 1/40" },
        { id: "d", text: "0,25% og 25/1" },
      ],
      correctOptionId: "a",
      explanation: "0,25 svarer til både 25% og brøken 1/4.",
    },
    {
      id: "q9",
      prompt: "Hvilket udsagn beskriver bedst 'lige sandsynligt'?",
      options: [
        { id: "a", text: "Et udfald sker altid" },
        { id: "b", text: "To udfald har samme chance" },
        { id: "c", text: "Et udfald er umuligt" },
        { id: "d", text: "Et udfald er over 100%" },
      ],
      correctOptionId: "b",
      explanation: "Lige sandsynligt betyder samme sandsynlighed for udfaldene.",
    },
    {
      id: "q10",
      prompt: "To terninger: hvor mange mulige ordnede udfald er der?",
      options: [
        { id: "a", text: "12" },
        { id: "b", text: "18" },
        { id: "c", text: "24" },
        { id: "d", text: "36" },
      ],
      correctOptionId: "d",
      explanation: "6 muligheder på første terning og 6 på anden giver 6·6 = 36.",
    },
  ],
};
