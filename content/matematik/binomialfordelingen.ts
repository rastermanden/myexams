import type { Topic } from "@/lib/types";
import BinomialDistributionDemo from "@/components/BinomialDistributionDemo";

export const binomialfordelingen: Topic = {
  slug: "binomialfordelingen",
  title: "Binomialfordelingen",
  summary:
    "Modellér antal succeser i n uafhængige forsøg med binomialfordelingen — med formel, forventet værdi og interaktiv visualisering.",
  demoComponent: BinomialDistributionDemo,
  sections: [
    {
      heading: "Hvornår bruges binomialfordelingen?",
      body:
        "Binomialfordelingen B(n, p) bruges når: (1) Forsøget gentages n gange. (2) Hvert forsøg er uafhængigt. (3) Hvert forsøg har to udfald: succes (p) eller fiasko (1−p). (4) p er konstant i alle forsøg. Eksempel: Antal kroner i 10 møntkast, antal defekte varer i en produktion.",
    },
    {
      heading: "Binomialformlen",
      body:
        "P(X = k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ, hvor C(n,k) = n! / (k!(n−k)!) er binomialkoefficienten. Eksempel: P(X=3) for n=5, p=0,5: C(5,3) · 0,5³ · 0,5² = 10 · 0,125 · 0,25 = 0,3125.",
    },
    {
      heading: "Forventet værdi og varians",
      body:
        "For X ~ B(n, p): Forventet værdi: E(X) = n · p. Varians: Var(X) = n · p · (1−p). Standardafvigelse: σ = √(n·p·(1−p)). Eksempel: B(10, 0,5): E(X) = 5, σ = √2,5 ≈ 1,58.",
    },
    {
      heading: "Kumulativ sandsynlighed",
      body:
        "P(X ≤ k) er den kumulative sandsynlighed — sandsynligheden for at få højst k succeser. I praksis benyttes tabeller eller en CAS/lommeregner. Komplementreglen: P(X > k) = 1 − P(X ≤ k). Disse beregninger er centrale på studentereksamen og HTX.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "X ~ B(10, 0,5). Hvad er E(X)?",
      options: [
        { id: "a", text: "0,5" },
        { id: "b", text: "5" },
        { id: "c", text: "10" },
        { id: "d", text: "25" },
      ],
      correctOptionId: "b",
      explanation: "E(X) = n · p = 10 · 0,5 = 5.",
    },
    {
      id: "q2",
      prompt: "Hvad er Var(X) for X ~ B(20, 0,3)?",
      options: [
        { id: "a", text: "6" },
        { id: "b", text: "4,2" },
        { id: "c", text: "14" },
        { id: "d", text: "0,3" },
      ],
      correctOptionId: "b",
      explanation: "Var(X) = n·p·(1−p) = 20·0,3·0,7 = 4,2.",
    },
    {
      id: "q3",
      prompt: "P(X=2) for B(4, 0,5) = ?",
      options: [
        { id: "a", text: "0,25" },
        { id: "b", text: "0,375" },
        { id: "c", text: "0,5" },
        { id: "d", text: "0,0625" },
      ],
      correctOptionId: "b",
      explanation: "C(4,2)·0,5²·0,5² = 6·0,25·0,25 = 6/16 = 0,375.",
    },
    {
      id: "q4",
      prompt: "Hvad er en betingelse for at bruge binomialfordelingen?",
      options: [
        { id: "a", text: "Forsøgene er afhængige" },
        { id: "b", text: "Der er mindst 3 mulige udfald per forsøg" },
        { id: "c", text: "Hvert forsøg er uafhængigt og har to udfald" },
        { id: "d", text: "p ændrer sig for hvert forsøg" },
      ],
      correctOptionId: "c",
      explanation: "B(n,p) kræver uafhængige forsøg med to udfald (succes/fiasko).",
    },
    {
      id: "q5",
      prompt: "C(5, 2) = ?",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "10" },
        { id: "c", text: "20" },
        { id: "d", text: "25" },
      ],
      correctOptionId: "b",
      explanation: "C(5,2) = 5! / (2!·3!) = 10.",
    },
    {
      id: "q6",
      prompt: "X ~ B(6, 0,4). Hvad er σ (standardafvigelse)?",
      options: [
        { id: "a", text: "2,4" },
        { id: "b", text: "√1,44 = 1,20" },
        { id: "c", text: "0,4" },
        { id: "d", text: "0,24" },
      ],
      correctOptionId: "b",
      explanation: "σ = √(n·p·(1−p)) = √(6·0,4·0,6) = √1,44 = 1,20.",
    },
    {
      id: "q7",
      prompt: "P(X ≤ 2) for B(5,0,5): hvad er metoden?",
      options: [
        { id: "a", text: "P(X=0) + P(X=1) + P(X=2)" },
        { id: "b", text: "1 − P(X=2)" },
        { id: "c", text: "P(X=2) alene" },
        { id: "d", text: "n·p·P(X=2)" },
      ],
      correctOptionId: "a",
      explanation: "P(X ≤ 2) = P(X=0) + P(X=1) + P(X=2).",
    },
    {
      id: "q8",
      prompt: "10 møntkast. Hvad er P(præcis 5 kroner)?",
      options: [
        { id: "a", text: "0,246" },
        { id: "b", text: "0,5" },
        { id: "c", text: "0,125" },
        { id: "d", text: "0,312" },
      ],
      correctOptionId: "a",
      explanation: "P(X=5) = C(10,5)·(0,5)⁵·(0,5)⁵ = 252/1024 ≈ 0,246.",
    },
  ],
};
