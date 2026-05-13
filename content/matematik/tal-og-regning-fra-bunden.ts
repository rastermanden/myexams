import type { Topic } from "@/lib/types";
import TalOgRegningDemo from "@/components/TalOgRegningDemo";

export const talOgRegningFraBunden: Topic = {
  slug: "tal-og-regning-fra-bunden",
  title: "Tal og regning fra bunden",
  summary:
    "Grundlæggende talforståelse med interaktive øvelser i naturlige tal, brøker, procent, regnehierarki og mere.",
  demoComponent: TalOgRegningDemo,
  sections: [
    {
      heading: "Naturlige tal, hele tal og decimaltal",
      body:
        "Vi starter med talforståelse: naturlige tal, hele tal og decimaltal. Du træner at skifte mellem brøk, decimaltal og procent, så du bliver sikker i flere repræsentationer af samme værdi.",
    },
    {
      heading: "Brøker og procentregning",
      body:
        "Brøker trænes med forkortning, forlængelse og de fire regningsarter. Procentdelen samler af-et-tal, vækst og fald med konkrete regnestrategier og trinvis forklaring.",
    },
    {
      heading: "Negative tal og regnehierarki",
      body:
        "Du øver regning med negative tal på talinje samt regnehierarki: parenteser, gange/dividere før plus/minus og sikre mellemregninger.",
    },
    {
      heading: "Potenser, rødder, primtal og talsystemer",
      body:
        "Afslutningen samler kvadrater/rødder, primtalsfaktorisering og simple opgaver i binær notation som valgfrit talsystem.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er 0,75 skrevet som brøk i simpleste form?",
      options: [
        { id: "a", text: "75/100" },
        { id: "b", text: "3/4" },
        { id: "c", text: "7/5" },
        { id: "d", text: "1/3" },
      ],
      correctOptionId: "b",
      explanation: "0,75 = 75/100, som forkortes med 25 til 3/4.",
    },
    {
      id: "q2",
      prompt: "Hvad er 2/3 + 1/6?",
      options: [
        { id: "a", text: "3/9" },
        { id: "b", text: "4/6" },
        { id: "c", text: "5/6" },
        { id: "d", text: "1/2" },
      ],
      correctOptionId: "c",
      explanation: "Fælles nævner 6: 2/3 = 4/6, så 4/6 + 1/6 = 5/6.",
    },
    {
      id: "q3",
      prompt: "20% af 150 er",
      options: [
        { id: "a", text: "15" },
        { id: "b", text: "20" },
        { id: "c", text: "30" },
        { id: "d", text: "35" },
      ],
      correctOptionId: "c",
      explanation: "20% = 0,20. 0,20 × 150 = 30.",
    },
    {
      id: "q4",
      prompt: "Hvad er -7 + 12?",
      options: [
        { id: "a", text: "-19" },
        { id: "b", text: "-5" },
        { id: "c", text: "5" },
        { id: "d", text: "19" },
      ],
      correctOptionId: "c",
      explanation: "Fra -7 går du 12 trin mod højre på talinjen og lander på 5.",
    },
    {
      id: "q5",
      prompt: "Beregn 4 + 3 × 2",
      options: [
        { id: "a", text: "14" },
        { id: "b", text: "10" },
        { id: "c", text: "12" },
        { id: "d", text: "8" },
      ],
      correctOptionId: "b",
      explanation: "Gange først: 3 × 2 = 6, derefter 4 + 6 = 10.",
    },
    {
      id: "q6",
      prompt: "Hvad er 5²?",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "15" },
        { id: "c", text: "20" },
        { id: "d", text: "25" },
      ],
      correctOptionId: "d",
      explanation: "5² betyder 5 × 5 = 25.",
    },
    {
      id: "q7",
      prompt: "Hvilken primtalsfaktorisering passer til 30?",
      options: [
        { id: "a", text: "2 × 3 × 5" },
        { id: "b", text: "6 × 5" },
        { id: "c", text: "10 × 3" },
        { id: "d", text: "15 × 2" },
      ],
      correctOptionId: "a",
      explanation: "Kun 2, 3 og 5 er primtal og giver produktet 30.",
    },
    {
      id: "q8",
      prompt: "Hvad er 10 i binær?",
      options: [
        { id: "a", text: "1010" },
        { id: "b", text: "1001" },
        { id: "c", text: "1111" },
        { id: "d", text: "1100" },
      ],
      correctOptionId: "a",
      explanation: "10 = 8 + 2, så binærskrivningen er 1010.",
    },
    {
      id: "q9",
      prompt: "Et tal vokser fra 200 med 15%. Nyt tal er",
      options: [
        { id: "a", text: "215" },
        { id: "b", text: "225" },
        { id: "c", text: "230" },
        { id: "d", text: "240" },
      ],
      correctOptionId: "c",
      explanation: "200 × 1,15 = 230.",
    },
    {
      id: "q10",
      prompt: "Hvad er 9/12 forkortet?",
      options: [
        { id: "a", text: "3/4" },
        { id: "b", text: "2/3" },
        { id: "c", text: "1/2" },
        { id: "d", text: "4/5" },
      ],
      correctOptionId: "a",
      explanation: "9/12 forkortes med 3 til 3/4.",
    },
  ],
};
