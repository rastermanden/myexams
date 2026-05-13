import type { Topic } from "@/lib/types";

export const beregningSandsynlighed: Topic = {
  slug: "beregning-af-sandsynlighed",
  title: "Beregning af sandsynlighed",
  summary:
    "Lær formlen P(A) = gunstige udfald / mulige udfald og anvend den på terninger, kort og andre eksperimenter.",
  sections: [
    {
      heading: "Grundformlen P(A) = gunstige / mulige",
      body:
        "Når alle udfald er ligeligt sandsynlige, er sandsynligheden for hændelse A: P(A) = antal gunstige udfald / antal mulige udfald. Sandsynlighed udtrykkes som tal mellem 0 og 1, som brøk eller som procent. P = 0 betyder umuligt; P = 1 betyder sikkert.",
    },
    {
      heading: "Eksempel: terning",
      body:
        "Kast en fair terning. Hvad er P(3)? Der er 1 gunstigt udfald (3) ud af 6 mulige: P(3) = 1/6 ≈ 0,167 = 16,7 %. Hvad er P(mindst 4)? Gunstige udfald: {4, 5, 6} — 3 udfald. P(mindst 4) = 3/6 = 1/2 = 50 %.",
    },
    {
      heading: "Eksempel: kortspil",
      body:
        "Et standard kortspil har 52 kort: 4 farver × 13 værdier. P(hjerter) = 13/52 = 1/4 = 25 %. P(es) = 4/52 = 1/13 ≈ 7,7 %. P(billedkort) = 12/52 = 3/13 ≈ 23,1 %.",
    },
    {
      heading: "Brøk, decimaltal og procent",
      body:
        "Sandsynligheder kan skrives på tre måder: som brøk (3/6), som decimaltal (0,5) og som procent (50 %). Det er vigtigt at omregne rigtigt: divider tæller med nævner for at få decimaltal, multiplicer med 100 for procent.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "En fair terning kastes. Hvad er P(6)?",
      options: [
        { id: "a", text: "1/5" },
        { id: "b", text: "1/6" },
        { id: "c", text: "1/3" },
        { id: "d", text: "1/2" },
      ],
      correctOptionId: "b",
      explanation: "Der er 1 gunstigt udfald (6) ud af 6 mulige: P(6) = 1/6.",
    },
    {
      id: "q2",
      prompt: "P(A) = 3/12. Hvad er det som procent?",
      options: [
        { id: "a", text: "3 %" },
        { id: "b", text: "12 %" },
        { id: "c", text: "25 %" },
        { id: "d", text: "33 %" },
      ],
      correctOptionId: "c",
      explanation: "3/12 = 1/4 = 0,25 = 25 %.",
    },
    {
      id: "q3",
      prompt: "En pose har 2 røde og 3 blå kugler. Hvad er P(rød)?",
      options: [
        { id: "a", text: "2/3" },
        { id: "b", text: "3/5" },
        { id: "c", text: "2/5" },
        { id: "d", text: "1/2" },
      ],
      correctOptionId: "c",
      explanation: "2 røde ud af 5 i alt: P(rød) = 2/5.",
    },
    {
      id: "q4",
      prompt: "Hvad er P(trækker hjerter) i et 52-korts spil?",
      options: [
        { id: "a", text: "1/4" },
        { id: "b", text: "1/13" },
        { id: "c", text: "1/52" },
        { id: "d", text: "4/52" },
      ],
      correctOptionId: "a",
      explanation: "13 hjerter ud af 52 kort: P = 13/52 = 1/4.",
    },
    {
      id: "q5",
      prompt: "P(A) = 0,4. Hvad er det som brøk (forkortet)?",
      options: [
        { id: "a", text: "4/10" },
        { id: "b", text: "2/5" },
        { id: "c", text: "1/4" },
        { id: "d", text: "4/5" },
      ],
      correctOptionId: "b",
      explanation: "0,4 = 4/10 = 2/5.",
    },
    {
      id: "q6",
      prompt: "Hvad er P(ulige tal) ved ét terningekast?",
      options: [
        { id: "a", text: "1/6" },
        { id: "b", text: "1/3" },
        { id: "c", text: "1/2" },
        { id: "d", text: "2/3" },
      ],
      correctOptionId: "c",
      explanation: "Ulige tal er 1, 3, 5 — 3 ud af 6: P = 3/6 = 1/2.",
    },
    {
      id: "q7",
      prompt: "En terning kastes. Hvad er P(tal > 4)?",
      options: [
        { id: "a", text: "1/6" },
        { id: "b", text: "2/6 = 1/3" },
        { id: "c", text: "3/6 = 1/2" },
        { id: "d", text: "4/6 = 2/3" },
      ],
      correctOptionId: "b",
      explanation: "Tal større end 4 er 5 og 6 — 2 ud af 6: P = 2/6 = 1/3.",
    },
    {
      id: "q8",
      prompt: "Hvad er formlen for sandsynlighed ved ligefordelt udfaldsrum?",
      options: [
        { id: "a", text: "P(A) = mulige / gunstige" },
        { id: "b", text: "P(A) = gunstige × mulige" },
        { id: "c", text: "P(A) = gunstige / mulige" },
        { id: "d", text: "P(A) = mulige − gunstige" },
      ],
      correctOptionId: "c",
      explanation: "P(A) = antal gunstige udfald divideret med antal mulige udfald.",
    },
  ],
};
