import type { Topic } from "@/lib/types";

export const algebraiskeBroeker: Topic = {
  slug: "algebraiske-broeker",
  title: "Algebraiske brøker",
  summary:
    "Forenkling, forkortning og regning med brøker der indeholder variable i tæller og nævner.",
  sections: [
    {
      heading: "Domæne og forkortning",
      body:
        "Du må aldrig dividere med 0. Derfor skal du først finde værdier, der gør nævneren 0. Derefter kan du forkorte fælles faktorer, fx (2x)/(4x) = 1/2 for x ≠ 0.",
    },
    {
      heading: "Addition og multiplikation",
      body:
        "Ved addition skal nævner være ens. Ved multiplikation ganger du tæller med tæller og nævner med nævner, og forkorter bagefter hvis muligt.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Forenkling af (6x)/(9x) for x ≠ 0 giver …",
      options: [
        { id: "a", text: "2/3" },
        { id: "b", text: "3/2" },
        { id: "c", text: "2x/3" },
        { id: "d", text: "6/9x" },
      ],
      correctOptionId: "a",
      explanation: "6/9 forkortes til 2/3, og x forkortes mod x.",
    },
    {
      id: "q2",
      prompt: "Hvilken værdi er ikke tilladt i (x + 1)/(x - 4)?",
      options: [
        { id: "a", text: "x = 4" },
        { id: "b", text: "x = 1" },
        { id: "c", text: "x = -4" },
        { id: "d", text: "x = 0" },
      ],
      correctOptionId: "a",
      explanation: "Nævneren bliver 0 ved x = 4, og det er ikke tilladt.",
    },
    {
      id: "q3",
      prompt: "Hvad er (x/3) + (x/3)?",
      options: [
        { id: "a", text: "2x/3" },
        { id: "b", text: "x/9" },
        { id: "c", text: "x/6" },
        { id: "d", text: "2x/9" },
      ],
      correctOptionId: "a",
      explanation: "Samme nævner: x/3 + x/3 = 2x/3.",
    },
  ],
};
