import type { Topic } from "@/lib/types";

export const kommunikereMatematisk: Topic = {
  slug: "kommunikere-matematisk",
  title: "Kommunikere matematisk",
  summary:
    "Strukturer skriftlige og mundtlige forklaringer, så dine matematiske løsninger bliver fagligt præcise og lette at følge.",
  sections: [
    {
      heading: "Struktur i skriftlige besvarelser",
      body:
        "Brug en fast disposition: problemforståelse, metodevalg, gennemregning med mellemtrin, konklusion og vurdering. Marker formler, enheder og antagelser tydeligt, så censor kan følge din tankegang.",
    },
    {
      heading: "Mundtlig formidling",
      body:
        "Forklar både hvad du gør og hvorfor. Peg på centrale begreber (fx proportionalitet, vækst, sandsynlighed) og brug figurer/tabeller aktivt. Afslut med en præcis konklusion i almindeligt sprog.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad kendetegner en stærk skriftlig matematikbesvarelse?",
      options: [
        { id: "a", text: "Kun facit uden forklaring" },
        { id: "b", text: "Tydelig metode, mellemregninger og konklusion" },
        { id: "c", text: "Mange sider uden struktur" },
        { id: "d", text: "Kun screenshots fra værktøjer" },
      ],
      correctOptionId: "b",
      explanation: "En god besvarelse viser hele argumentationen fra metode til konklusion.",
    },
    {
      id: "q2",
      prompt: "Hvad er vigtigt i en mundtlig matematikforklaring?",
      options: [
        { id: "a", text: "At springe begrundelser over" },
        { id: "b", text: "At forklare hvorfor metoden passer til problemet" },
        { id: "c", text: "At læse tal op uden kontekst" },
        { id: "d", text: "At undgå fagbegreber helt" },
      ],
      correctOptionId: "b",
      explanation: "Mundtlig kvalitet handler om begrundede valg og tydelig begrebsbrug.",
    },
  ],
};
