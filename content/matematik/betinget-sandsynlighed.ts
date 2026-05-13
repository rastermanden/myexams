import type { Topic } from "@/lib/types";

export const betingetSandsynlighed: Topic = {
  slug: "betinget-sandsynlighed",
  title: "Betinget sandsynlighed og Bayes' formel",
  summary:
    "Lær at beregne sandsynlighed betinget af given information og anvend Bayes' formel til at opdatere tro.",
  sections: [
    {
      heading: "Betinget sandsynlighed",
      body:
        "P(A | B) er sandsynligheden for A givet at B er indtruffet. Formlen er: P(A | B) = P(A og B) / P(B). Eksempel: i et kortspil, givet at kortet er rødt, hvad er P(hjerter)? P(hjerter | rød) = P(hjerter og rød) / P(rød) = (13/52) / (26/52) = 13/26 = 1/2.",
    },
    {
      heading: "Multiplikationsreglen",
      body:
        "Omskrivning af definitionen giver multiplikationsreglen: P(A og B) = P(A | B) · P(B) = P(B | A) · P(A). Denne regel er fundamental for beregning af sammensatte sandsynligheder, særlig når hændelserne er afhængige.",
    },
    {
      heading: "Total sandsynlighed",
      body:
        "Sætningen om total sandsynlighed: Hvis B₁, B₂, ..., Bₙ er gensidigt udelukkende og udtømmende (de dækker hele Ω), da er P(A) = Σ P(A | Bᵢ) · P(Bᵢ). Nyttigt når sandsynligheder er opdelt på scenarier.",
    },
    {
      heading: "Bayes' formel",
      body:
        "Bayes' formel tillader opdatering af sandsynligheder i lyset af ny information: P(B | A) = P(A | B) · P(B) / P(A). Kaldes priori-sandsynlighed (P(B)) og posteriori-sandsynlighed (P(B | A)). Bruges i statistik, medicinsk test og maskinlæring.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er formlen for betinget sandsynlighed P(A | B)?",
      options: [
        { id: "a", text: "P(A) · P(B)" },
        { id: "b", text: "P(A og B) / P(B)" },
        { id: "c", text: "P(A) / P(B)" },
        { id: "d", text: "P(B og A) · P(A)" },
      ],
      correctOptionId: "b",
      explanation: "Definitionen: P(A | B) = P(A ∩ B) / P(B).",
    },
    {
      id: "q2",
      prompt: "P(A og B) = 0,12 og P(B) = 0,4. Hvad er P(A | B)?",
      options: [
        { id: "a", text: "0,048" },
        { id: "b", text: "0,3" },
        { id: "c", text: "0,52" },
        { id: "d", text: "0,12" },
      ],
      correctOptionId: "b",
      explanation: "P(A | B) = 0,12 / 0,4 = 0,3.",
    },
    {
      id: "q3",
      prompt: "Hvornår er to hændelser A og B uafhængige?",
      options: [
        { id: "a", text: "P(A | B) = 0" },
        { id: "b", text: "P(A | B) = P(B)" },
        { id: "c", text: "P(A | B) = P(A)" },
        { id: "d", text: "P(A og B) = 0" },
      ],
      correctOptionId: "c",
      explanation: "Uafhængighed betyder, at B's viden ikke ændrer P(A): P(A | B) = P(A).",
    },
    {
      id: "q4",
      prompt: "Et kortspil. P(es | hjerter) = ?",
      options: [
        { id: "a", text: "4/52" },
        { id: "b", text: "1/13" },
        { id: "c", text: "1/4" },
        { id: "d", text: "1/52" },
      ],
      correctOptionId: "b",
      explanation: "Givet hjerter (13 kort): 1 es ud af 13 hjerter = 1/13.",
    },
    {
      id: "q5",
      prompt: "Bayes' formel opdaterer...",
      options: [
        { id: "a", text: "Sandsynligheder baseret på ny viden/data" },
        { id: "b", text: "Udfaldsrummet ved at fjerne udfald" },
        { id: "c", text: "Hændelsers rækkefølge" },
        { id: "d", text: "Gennemsnitlig sandsynlighed" },
      ],
      correctOptionId: "a",
      explanation: "Bayes' formel: P(B | A) = P(A | B) · P(B) / P(A) — opdatering med ny viden.",
    },
    {
      id: "q6",
      prompt: "P(A | B) = 0,6 og P(B) = 0,5. Hvad er P(A og B)?",
      options: [
        { id: "a", text: "0,1" },
        { id: "b", text: "0,3" },
        { id: "c", text: "0,6" },
        { id: "d", text: "1,1" },
      ],
      correctOptionId: "b",
      explanation: "P(A og B) = P(A | B) · P(B) = 0,6 · 0,5 = 0,3.",
    },
    {
      id: "q7",
      prompt: "Hvad hedder P(B) (før ny data indhentes) i Bayes-sammenhæng?",
      options: [
        { id: "a", text: "Posteriori" },
        { id: "b", text: "Betinget sandsynlighed" },
        { id: "c", text: "Priori" },
        { id: "d", text: "Marginal" },
      ],
      correctOptionId: "c",
      explanation: "P(B) kaldes priori-sandsynlighed (før ny observation).",
    },
    {
      id: "q8",
      prompt: "P(A og B) = P(A) · P(B) gælder kun for...",
      options: [
        { id: "a", text: "Alle hændelser" },
        { id: "b", text: "Gensidigt udelukkende hændelser" },
        { id: "c", text: "Uafhængige hændelser" },
        { id: "d", text: "Komplementære hændelser" },
      ],
      correctOptionId: "c",
      explanation: "Multiplikationsreglen P(A∩B) = P(A) · P(B) gælder præcis når A og B er uafhængige.",
    },
  ],
};
