import type { Topic } from "@/lib/types";

export const andengradsligninger: Topic = {
  slug: "andengradsligninger",
  title: "Andengradsligninger",
  summary:
    "Arbejd med diskriminant, faktorisering og nulreglen for at finde rødder i andengradspolynomier.",
  sections: [
    {
      heading: "Standardform og diskriminant",
      body:
        "Skriv ligningen som ax² + bx + c = 0. Diskriminanten er d = b² - 4ac. Hvis d > 0 får du to reelle løsninger, d = 0 giver én dobbeltrod, og d < 0 giver ingen reelle rødder.",
    },
    {
      heading: "Faktorisering og nulregel",
      body:
        "Hvis udtrykket kan faktoriseres, fx x² - 5x + 6 = (x - 2)(x - 3), bruger du nulreglen: Et produkt er 0, når mindst én faktor er 0.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er diskriminanten for x² - 5x + 6 = 0?",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "25" },
        { id: "c", text: "-1" },
        { id: "d", text: "9" },
      ],
      correctOptionId: "a",
      explanation: "d = (-5)² - 4·1·6 = 25 - 24 = 1.",
    },
    {
      id: "q2",
      prompt: "Hvilke rødder har x² - 5x + 6 = 0?",
      options: [
        { id: "a", text: "x = 2 og x = 3" },
        { id: "b", text: "x = -2 og x = -3" },
        { id: "c", text: "x = 1 og x = 6" },
        { id: "d", text: "x = 0 og x = 5" },
      ],
      correctOptionId: "a",
      explanation: "(x - 2)(x - 3) = 0 giver rødderne x = 2 og x = 3.",
    },
    {
      id: "q3",
      prompt: "Hvad fortæller d < 0 om andengradsligningen?",
      options: [
        { id: "a", text: "Ingen reelle løsninger" },
        { id: "b", text: "Præcis to reelle løsninger" },
        { id: "c", text: "Præcis én reel løsning" },
        { id: "d", text: "At a skal være 0" },
      ],
      correctOptionId: "a",
      explanation: "Negativ diskriminant betyder, at parablen ikke skærer x-aksen.",
    },
  ],
};
