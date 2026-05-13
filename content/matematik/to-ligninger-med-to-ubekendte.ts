import type { Topic } from "@/lib/types";

export const toLigningerMedToUbekendte: Topic = {
  slug: "to-ligninger-med-to-ubekendte",
  title: "To ligninger med to ubekendte",
  summary:
    "Lær substitution, reduktionsmetoden med lige store koefficienter og grafisk løsning af ligningssystemer.",
  sections: [
    {
      heading: "Substitution og reduktion",
      body:
        "Ved substitution isolerer du én variabel i den ene ligning og indsætter i den anden. Ved reduktion gør du koefficienter modsatte, så en variabel elimineres ved addition.",
    },
    {
      heading: "Grafisk fortolkning",
      body:
        "Hver ligning svarer til en linje. Skæringspunktet mellem linjerne er løsningen (x, y), som opfylder begge ligninger samtidigt.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad betyder en løsning (x, y) i et ligningssystem?",
      options: [
        { id: "a", text: "At punktet opfylder begge ligninger" },
        { id: "b", text: "At punktet kun opfylder den første ligning" },
        { id: "c", text: "At x altid er 0" },
        { id: "d", text: "At y altid er 0" },
      ],
      correctOptionId: "a",
      explanation: "Løsningen skal opfylde begge ligninger samtidigt.",
    },
    {
      id: "q2",
      prompt: "Løs systemet x + y = 7 og x - y = 1.",
      options: [
        { id: "a", text: "(4, 3)" },
        { id: "b", text: "(3, 4)" },
        { id: "c", text: "(7, 1)" },
        { id: "d", text: "(1, 7)" },
      ],
      correctOptionId: "a",
      explanation: "Læg ligningerne sammen: 2x = 8, så x = 4 og dermed y = 3.",
    },
    {
      id: "q3",
      prompt: "Hvis to linjer er parallelle, har systemet typisk …",
      options: [
        { id: "a", text: "ingen løsning" },
        { id: "b", text: "præcis én løsning" },
        { id: "c", text: "uendeligt mange løsninger" },
        { id: "d", text: "altid løsningen (0,0)" },
      ],
      correctOptionId: "a",
      explanation: "Parallelle linjer skærer ikke hinanden og giver derfor ingen fælles løsning.",
    },
  ],
};
