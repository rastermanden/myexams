import type { Topic } from "@/lib/types";

export const kvadratsaetningerOgNotableIdentiteter: Topic = {
  slug: "kvadratsaetninger-og-notable-identiteter",
  title: "Kvadratsætninger og notable identiteter",
  summary:
    "Brug (a + b)², (a - b)² og (a + b)(a - b) sikkert i udvidelse og faktorisering.",
  sections: [
    {
      heading: "De tre klassiske identiteter",
      body:
        "(a + b)² = a² + 2ab + b², (a - b)² = a² - 2ab + b² og (a + b)(a - b) = a² - b².",
    },
    {
      heading: "Hvornår de bruges",
      body:
        "Identiteterne gør udvidelse hurtig og hjælper med at genkende mønstre ved faktorisering, fx x² - 9 = (x + 3)(x - 3).",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er (x + 4)²?",
      options: [
        { id: "a", text: "x² + 8x + 16" },
        { id: "b", text: "x² + 16" },
        { id: "c", text: "x² + 4x + 16" },
        { id: "d", text: "x² - 8x + 16" },
      ],
      correctOptionId: "a",
      explanation: "Brug (a + b)² = a² + 2ab + b².",
    },
    {
      id: "q2",
      prompt: "Faktoriser x² - 25.",
      options: [
        { id: "a", text: "(x + 5)(x - 5)" },
        { id: "b", text: "(x - 25)(x + 1)" },
        { id: "c", text: "(x - 5)²" },
        { id: "d", text: "x(x - 25)" },
      ],
      correctOptionId: "a",
      explanation: "x² - 25 er en differens af to kvadrater: x² - 5².",
    },
    {
      id: "q3",
      prompt: "Hvad er (2a - 3)²?",
      options: [
        { id: "a", text: "4a² - 12a + 9" },
        { id: "b", text: "4a² - 9" },
        { id: "c", text: "4a² + 12a + 9" },
        { id: "d", text: "2a² - 6a + 9" },
      ],
      correctOptionId: "a",
      explanation: "(2a)² - 2·(2a)·3 + 3² = 4a² - 12a + 9.",
    },
  ],
};
