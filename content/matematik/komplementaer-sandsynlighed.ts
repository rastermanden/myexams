import type { Topic } from "@/lib/types";

export const komplementaerSandsynlighed: Topic = {
  slug: "komplementaer-sandsynlighed",
  title: "Komplementær sandsynlighed",
  summary:
    "Brug reglen P(ikke A) = 1 − P(A) til at løse opgaver smartere ved at beregne det modsatte.",
  sections: [
    {
      heading: "Hvad er komplementet?",
      body:
        "Komplementet af hændelse A, skrevet A' eller Ā (A komplement), er alle udfald, der IKKE er i A. Tilsammen dækker A og A' hele udfaldsrummet, og det gælder altid: P(A) + P(A') = 1.",
    },
    {
      heading: "Komplementreglen",
      body:
        "Komplementreglen: P(A') = 1 − P(A). Strategien er nyttig, når det er nemmere at beregne, hvad man IKKE vil have, og trække fra 1. Eksempel: P(mindst én sekser i to kast) er lettere at beregne som 1 − P(ingen seksere) = 1 − (5/6)² ≈ 0,306.",
    },
    {
      heading: "Eksempler",
      body:
        "En terning kastes. P(ikke 6) = 1 − P(6) = 1 − 1/6 = 5/6 ≈ 83,3 %. En kortspilsspiller trækker et kort: P(ikke billedkort) = 1 − 12/52 = 40/52 = 10/13 ≈ 76,9 %. Komplementet forenkler beregningen markant.",
    },
    {
      heading: "Hvornår er komplementet specielt nyttigt?",
      body:
        "Komplementstrategien er særlig nyttig, når hændelsen indeholder formuleringer som 'mindst én', 'mindst to' eller 'én eller flere'. Det er tit meget enklere at beregne nul-hændelsen (ingen) og trække fra 1.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvis P(A) = 0,3, hvad er P(A')?",
      options: [
        { id: "a", text: "0,3" },
        { id: "b", text: "0,5" },
        { id: "c", text: "0,7" },
        { id: "d", text: "1,3" },
      ],
      correctOptionId: "c",
      explanation: "P(A') = 1 − P(A) = 1 − 0,3 = 0,7.",
    },
    {
      id: "q2",
      prompt: "En terning: hvad er P(ikke 1)?",
      options: [
        { id: "a", text: "1/6" },
        { id: "b", text: "5/6" },
        { id: "c", text: "1/3" },
        { id: "d", text: "2/3" },
      ],
      correctOptionId: "b",
      explanation: "P(ikke 1) = 1 − 1/6 = 5/6.",
    },
    {
      id: "q3",
      prompt: "P(A) + P(A') er altid lig med...",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "0,5" },
        { id: "c", text: "1" },
        { id: "d", text: "2" },
      ],
      correctOptionId: "c",
      explanation: "A og A' dækker hele udfaldsrummet: P(A) + P(A') = 1.",
    },
    {
      id: "q4",
      prompt: "P(regnvejr) = 0,4. Hvad er P(ikke regnvejr)?",
      options: [
        { id: "a", text: "0,4" },
        { id: "b", text: "0,6" },
        { id: "c", text: "0,8" },
        { id: "d", text: "1,4" },
      ],
      correctOptionId: "b",
      explanation: "P(ikke regnvejr) = 1 − 0,4 = 0,6.",
    },
    {
      id: "q5",
      prompt: "To møntkast: hvad er P(mindst ét krone)?",
      options: [
        { id: "a", text: "1/4" },
        { id: "b", text: "1/2" },
        { id: "c", text: "3/4" },
        { id: "d", text: "1" },
      ],
      correctOptionId: "c",
      explanation:
        "Brug komplement: P(mindst ét krone) = 1 − P(ingen kroner) = 1 − P(PP) = 1 − 1/4 = 3/4.",
    },
    {
      id: "q6",
      prompt: "Hvad er P(A') når P(A) = 1?",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "0,5" },
        { id: "c", text: "1" },
        { id: "d", text: "2" },
      ],
      correctOptionId: "a",
      explanation: "P(A') = 1 − 1 = 0. Hvis A er sikker, er dens komplement umulig.",
    },
    {
      id: "q7",
      prompt: "Hvad er komplementet til hændelsen 'terningen viser mindst 4'?",
      options: [
        { id: "a", text: "Terningen viser 4, 5 eller 6" },
        { id: "b", text: "Terningen viser 1, 2 eller 3" },
        { id: "c", text: "Terningen viser 6" },
        { id: "d", text: "Terningen viser 1" },
      ],
      correctOptionId: "b",
      explanation: "Komplement til 'mindst 4' er 'højst 3', dvs. {1, 2, 3}.",
    },
    {
      id: "q8",
      prompt: "P(ikke billedkort) i et 52-korts spil (12 billedkort)?",
      options: [
        { id: "a", text: "12/52" },
        { id: "b", text: "40/52" },
        { id: "c", text: "13/52" },
        { id: "d", text: "1/13" },
      ],
      correctOptionId: "b",
      explanation: "P(billedkort) = 12/52. P(ikke billedkort) = 1 − 12/52 = 40/52.",
    },
  ],
};
