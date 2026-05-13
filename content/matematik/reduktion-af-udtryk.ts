import type { Topic } from "@/lib/types";

export const reduktionAfUdtryk: Topic = {
  slug: "reduktion-af-udtryk",
  title: "Reduktion af udtryk",
  summary:
    "Lær at samle ens led og tage fælles faktor uden at ændre udtrykkets værdi.",
  sections: [
    {
      heading: "Saml ens led",
      body:
        "Når led har samme variable-del, kan de samles: 3x + 5x - 2x = 6x. Konstanter samles separat, fx 4 + 7 = 11.",
    },
    {
      heading: "Fælles faktor",
      body:
        "Hvis alle led har en fælles faktor, kan den sættes udenfor parentes: 6x + 9 = 3(2x + 3). Det gør udtrykket mere overskueligt.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Reducer 5x - 2x + 4x.",
      options: [
        { id: "a", text: "7x" },
        { id: "b", text: "9x" },
        { id: "c", text: "3x" },
        { id: "d", text: "7" },
      ],
      correctOptionId: "a",
      explanation: "5x - 2x + 4x = 3x + 4x = 7x.",
    },
    {
      id: "q2",
      prompt: "Hvilken omskrivning er korrekt for 8x + 12?",
      options: [
        { id: "a", text: "4(2x + 3)" },
        { id: "b", text: "2(4x + 6x)" },
        { id: "c", text: "8(x + 12)" },
        { id: "d", text: "12(8x + 1)" },
      ],
      correctOptionId: "a",
      explanation: "4 er fælles faktor i både 8x og 12.",
    },
    {
      id: "q3",
      prompt: "Reducer 2a + 3b + 5a - b.",
      options: [
        { id: "a", text: "7a + 2b" },
        { id: "b", text: "10ab" },
        { id: "c", text: "7a + 4b" },
        { id: "d", text: "a + 2b" },
      ],
      correctOptionId: "a",
      explanation: "2a + 5a = 7a og 3b - b = 2b.",
    },
  ],
};
