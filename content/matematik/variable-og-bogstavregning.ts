import type { Topic } from "@/lib/types";

export const variableOgBogstavregning: Topic = {
  slug: "variable-og-bogstavregning",
  title: "Variable og bogstavregning",
  summary:
    "Forstå hvordan bogstaver repræsenterer tal, og hvordan du regner sikkert med algebraiske udtryk.",
  sections: [
    {
      heading: "Hvad er en variabel?",
      body:
        "En variabel er et symbol (ofte x), som står for en ukendt eller skiftende værdi. I udtrykket 3x + 2 betyder 3x det samme som 3 · x.",
    },
    {
      heading: "Regneregler i bogstavregning",
      body:
        "Ens led kan lægges sammen: 2x + 5x = 7x. Forskellige led kan ikke samles direkte: 2x + 5y bliver stående. Vær opmærksom på fortegn, fx x - 3x = -2x.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad bliver 4x + 3x?",
      options: [
        { id: "a", text: "7x" },
        { id: "b", text: "12x" },
        { id: "c", text: "7x²" },
        { id: "d", text: "x" },
      ],
      correctOptionId: "a",
      explanation: "4x og 3x er ens led og kan samles til 7x.",
    },
    {
      id: "q2",
      prompt: "Hvilket udtryk kan reduceres til 9x?",
      options: [
        { id: "a", text: "6x + 3x" },
        { id: "b", text: "6x + 3" },
        { id: "c", text: "6 + 3x" },
        { id: "d", text: "6x · 3x" },
      ],
      correctOptionId: "a",
      explanation: "Kun 6x + 3x er ens led, der kan samles til 9x.",
    },
    {
      id: "q3",
      prompt: "Hvad er værdien af 2x + 1, når x = 4?",
      options: [
        { id: "a", text: "9" },
        { id: "b", text: "8" },
        { id: "c", text: "6" },
        { id: "d", text: "3" },
      ],
      correctOptionId: "a",
      explanation: "Indsæt x = 4: 2 · 4 + 1 = 8 + 1 = 9.",
    },
  ],
};
