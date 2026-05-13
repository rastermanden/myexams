import type { Topic } from "@/lib/types";
import RisikoforholdDemo from "@/components/RisikoforholdDemo";

export const risikoforhold: Topic = {
  slug: "risikoforhold",
  title: "Risikoforhold",
  summary:
    "Beregn og fortolk risikoforhold (relativ risiko) fra en 2×2 krydstabel med en interaktiv demo.",
  demoComponent: RisikoforholdDemo,
  sections: [
    {
      heading: "Hvad er et risikoforhold?",
      body:
        "Et risikoforhold (RR – også kaldet relativ risiko) sammenligner sandsynligheden for et udfald i to grupper: en eksponeret gruppe og en ikke-eksponeret gruppe. Risikoforholdet beregnes som:\n\nRR = risiko i eksponeret gruppe / risiko i ikke-eksponeret gruppe\n\nEr RR = 1, er risikoen ens i begge grupper. Er RR > 1, har den eksponerede gruppe en højere risiko. Er RR < 1, har den eksponerede gruppe en lavere risiko.",
    },
    {
      heading: "2×2 krydstabellen",
      body:
        "Data opstilles i en 2×2 krydstabel med eksponering (ja/nej) på den ene akse og udfald (ja/nej) på den anden. Cellerne kaldes typisk a, b, c og d:\n\n• a = eksponeret med udfald\n• b = eksponeret uden udfald\n• c = ikke-eksponeret med udfald\n• d = ikke-eksponeret uden udfald\n\nRisikoen i den eksponerede gruppe er a / (a + b), og risikoen i den ikke-eksponerede gruppe er c / (c + d).",
    },
    {
      heading: "Odds ratio som udvidelse",
      body:
        "Odds ratio (OR) er et beslægtet mål, der bruges særligt i case-kontrol-studier. OR = (a × d) / (b × c). Når udfaldet er sjældent, er OR og RR tæt på hinanden. OR overvurderer den relative risiko, hvis udfaldet er hyppigt.",
    },
    {
      heading: "Sådan bruger du demoen",
      body:
        "Indtast tal i de fire celler i krydstabellen – eller generér et tilfældigt eksempel. Demoen beregner automatisk risikoforholdet og odds ratio trin for trin og viser en fortolkning af resultatet.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt:
        "En undersøgelse viser: 40 eksponerede fik sygdommen ud af 200 eksponerede, og 10 ikke-eksponerede fik sygdommen ud af 200 ikke-eksponerede. Hvad er risikoforholdet (RR)?",
      options: [
        { id: "a", text: "RR = 4" },
        { id: "b", text: "RR = 2" },
        { id: "c", text: "RR = 0,5" },
        { id: "d", text: "RR = 1" },
      ],
      correctOptionId: "a",
      explanation:
        "Risiko i eksponeret gruppe = 40/200 = 0,20. Risiko i ikke-eksponeret gruppe = 10/200 = 0,05. RR = 0,20 / 0,05 = 4. Den eksponerede gruppe har fire gange så høj risiko.",
    },
    {
      id: "q2",
      prompt: "Hvad betyder RR = 1?",
      options: [
        { id: "a", text: "Den eksponerede gruppe har dobbelt så høj risiko" },
        { id: "b", text: "Eksponeringen halverer risikoen" },
        { id: "c", text: "Der er ingen forskel i risiko mellem grupperne" },
        { id: "d", text: "Dataene er ugyldige" },
      ],
      correctOptionId: "c",
      explanation:
        "RR = 1 betyder, at risikoen er ens i den eksponerede og den ikke-eksponerede gruppe – eksponeringen har ingen effekt.",
    },
    {
      id: "q3",
      prompt:
        "I en 2×2 krydstabel er a = 30, b = 70, c = 20, d = 80. Hvad er odds ratio (OR)?",
      options: [
        { id: "a", text: "OR ≈ 1,71" },
        { id: "b", text: "OR ≈ 0,75" },
        { id: "c", text: "OR ≈ 2,00" },
        { id: "d", text: "OR ≈ 1,50" },
      ],
      correctOptionId: "a",
      explanation:
        "OR = (a × d) / (b × c) = (30 × 80) / (70 × 20) = 2400 / 1400 ≈ 1,71.",
    },
    {
      id: "q4",
      prompt: "Hvornår er odds ratio (OR) et godt estimat for risikoforholdet (RR)?",
      options: [
        { id: "a", text: "Altid – OR og RR er identiske" },
        { id: "b", text: "Når udfaldet er sjældent (lav prævalens)" },
        { id: "c", text: "Kun i randomiserede forsøg" },
        { id: "d", text: "Når grupperne er lige store" },
      ],
      correctOptionId: "b",
      explanation:
        "Når udfaldet er sjældent, er b ≈ a + b og d ≈ c + d, og OR nærmer sig RR. Er udfaldet hyppigt, overvurderer OR typisk den relative risiko.",
    },
  ],
};
