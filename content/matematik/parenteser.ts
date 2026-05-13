import type { Topic } from "@/lib/types";

export const parenteser: Topic = {
  slug: "parenteser",
  title: "Parenteser",
  summary:
    "Øv at gange ind i parentes og sætte fælles faktor udenfor korrekt.",
  sections: [
    {
      heading: "Gange ind i parentes",
      body:
        "Brug distributiv lov: a(b + c) = ab + ac. Fx 3(x + 4) = 3x + 12.",
    },
    {
      heading: "Sætte udenfor parentes",
      body:
        "Omvendt kan du faktorisere: 4x + 20 = 4(x + 5). Tjek ved at gange ind igen.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Udvid 2(x + 7).",
      options: [
        { id: "a", text: "2x + 14" },
        { id: "b", text: "2x + 7" },
        { id: "c", text: "x + 14" },
        { id: "d", text: "2x² + 7" },
      ],
      correctOptionId: "a",
      explanation: "2 skal ganges med begge led i parentesen.",
    },
    {
      id: "q2",
      prompt: "Hvad er korrekt faktorisering af 9x + 6?",
      options: [
        { id: "a", text: "3(3x + 2)" },
        { id: "b", text: "9(x + 6)" },
        { id: "c", text: "6(9x + 1)" },
        { id: "d", text: "3(3x + 6)" },
      ],
      correctOptionId: "a",
      explanation: "Både 9x og 6 kan deles med 3.",
    },
    {
      id: "q3",
      prompt: "Udvid -4(y - 2).",
      options: [
        { id: "a", text: "-4y + 8" },
        { id: "b", text: "-4y - 8" },
        { id: "c", text: "4y - 8" },
        { id: "d", text: "4y + 8" },
      ],
      correctOptionId: "a",
      explanation: "-4·y = -4y og -4·(-2) = +8.",
    },
  ],
};
