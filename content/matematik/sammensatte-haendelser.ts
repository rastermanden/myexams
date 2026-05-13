import type { Topic } from "@/lib/types";
import ProbabilitySimulatorDemo from "@/components/ProbabilitySimulatorDemo";

export const sammensatteHaendelser: Topic = {
  slug: "sammensatte-haendelser",
  title: "Sammensatte hændelser",
  summary:
    "Lær at beregne sandsynligheder for kombinationer af hændelser — med produktreglen for uafhængige og betingede hændelser.",
  demoComponent: ProbabilitySimulatorDemo,
  sections: [
    {
      heading: "Uafhængige hændelser",
      body:
        "To hændelser A og B er uafhængige, når den ene hændelses indtræffen ikke påvirker den andens sandsynlighed. Eksempel: to separate møntkast er uafhængige. For uafhængige hændelser gælder multiplikationsreglen: P(A og B) = P(A) · P(B).",
    },
    {
      heading: "Eksempel: produktreglen",
      body:
        "To møntkast: P(to kroner) = P(K) · P(K) = 1/2 · 1/2 = 1/4. To terningekast: P(begge viser 6) = 1/6 · 1/6 = 1/36. Produktreglen kan udvides til flere hændelser: P(A og B og C) = P(A) · P(B) · P(C) for uafhængige hændelser.",
    },
    {
      heading: "Afhængige hændelser",
      body:
        "Hændelser er afhængige, når udtræk påvirker resten. Eksempel: i en pose med 3 røde og 2 blå kugler uden tilbagelægning: P(1. rød) = 3/5, men P(2. rød | 1. rød) = 2/4 = 1/2. Her ændrer det første udtræk betingelserne for det næste.",
    },
    {
      heading: "Addition for gensidigt udelukkende hændelser",
      body:
        "Hændelser er gensidigt udelukkende (disjunkte), når de ikke kan ske samtidig. Eksempel: en terning kan ikke vise 3 og 5 på én gang. For sådanne hændelser: P(A eller B) = P(A) + P(B). P(3 eller 5) = 1/6 + 1/6 = 2/6 = 1/3.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "To fair møntkast. Hvad er P(begge plat)?",
      options: [
        { id: "a", text: "1/2" },
        { id: "b", text: "1/3" },
        { id: "c", text: "1/4" },
        { id: "d", text: "3/4" },
      ],
      correctOptionId: "c",
      explanation: "P(P) · P(P) = 1/2 · 1/2 = 1/4.",
    },
    {
      id: "q2",
      prompt: "To terninger. Hvad er P(begge viser 6)?",
      options: [
        { id: "a", text: "1/6" },
        { id: "b", text: "1/12" },
        { id: "c", text: "1/36" },
        { id: "d", text: "2/6" },
      ],
      correctOptionId: "c",
      explanation: "P(6) · P(6) = 1/6 · 1/6 = 1/36.",
    },
    {
      id: "q3",
      prompt: "Hvornår er to hændelser uafhængige?",
      options: [
        { id: "a", text: "Når de altid sker samtidig" },
        { id: "b", text: "Når den ene ikke påvirker den andres sandsynlighed" },
        { id: "c", text: "Når de er gensidigt udelukkende" },
        { id: "d", text: "Når P(A) = P(B)" },
      ],
      correctOptionId: "b",
      explanation: "Uafhængighed: A's indtræffen påvirker ikke P(B).",
    },
    {
      id: "q4",
      prompt: "P(A) = 0,5 og P(B) = 0,4 og A, B er uafhængige. Hvad er P(A og B)?",
      options: [
        { id: "a", text: "0,9" },
        { id: "b", text: "0,45" },
        { id: "c", text: "0,2" },
        { id: "d", text: "0,1" },
      ],
      correctOptionId: "c",
      explanation: "P(A og B) = P(A) · P(B) = 0,5 · 0,4 = 0,2.",
    },
    {
      id: "q5",
      prompt: "P(3 eller 4) ved ét terningekast?",
      options: [
        { id: "a", text: "1/6" },
        { id: "b", text: "1/3" },
        { id: "c", text: "1/2" },
        { id: "d", text: "2/3" },
      ],
      correctOptionId: "b",
      explanation: "Gensidigt udelukkende: P(3 eller 4) = P(3) + P(4) = 1/6 + 1/6 = 2/6 = 1/3.",
    },
    {
      id: "q6",
      prompt:
        "En pose har 4 kugler (2 røde, 2 blå). Du trækker uden tilbagelægning. P(1. rød)?",
      options: [
        { id: "a", text: "1/4" },
        { id: "b", text: "1/3" },
        { id: "c", text: "1/2" },
        { id: "d", text: "2/3" },
      ],
      correctOptionId: "c",
      explanation: "2 røde ud af 4 kugler: P = 2/4 = 1/2.",
    },
    {
      id: "q7",
      prompt:
        "Givet P(A) = 0,3 og P(B) = 0,6, uafhængige. Hvad er P(ingen af dem)?",
      options: [
        { id: "a", text: "0,28" },
        { id: "b", text: "0,18" },
        { id: "c", text: "0,42" },
        { id: "d", text: "0,10" },
      ],
      correctOptionId: "a",
      explanation: "P(A') · P(B') = (1−0,3) · (1−0,6) = 0,7 · 0,4 = 0,28.",
    },
    {
      id: "q8",
      prompt: "Tre møntkast. Hvad er P(alle tre krone)?",
      options: [
        { id: "a", text: "1/4" },
        { id: "b", text: "1/6" },
        { id: "c", text: "1/8" },
        { id: "d", text: "3/8" },
      ],
      correctOptionId: "c",
      explanation: "P(K)³ = (1/2)³ = 1/8.",
    },
  ],
};
