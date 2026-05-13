import type { Topic } from "@/lib/types";
import CountingTreeDemo from "@/components/CountingTreeDemo";

export const taelletraeerOgProduktreglen: Topic = {
  slug: "taelletraeer-og-produktreglen",
  title: "Tælletræer og produktreglen",
  summary:
    "Brug tælletræer til at kortlægge alle mulige udfald og produktreglen til hurtigt at tælle kombinationer.",
  demoComponent: CountingTreeDemo,
  sections: [
    {
      heading: "Hvad er et tælletræ?",
      body:
        "Et tælletræ (eller udfaldsdiagram) er en grafisk metode til at vise alle mulige udfald. Hvert trin i eksperimentet er en forgrening. Blade (slutpunkter) repræsenterer de samlede udfald. Tælletræet er især nyttigt, når man vil sikre sig, at ingen udfald glemmes.",
    },
    {
      heading: "Produktreglen",
      body:
        "Produktreglen siger: Hvis et eksperiment har k trin, og trin i har nᵢ muligheder, er det samlede antal udfald n₁ · n₂ · ... · nₖ. Eksempel: 3 valg af topping og 2 valg af bund giver 3 · 2 = 6 mulige pizzaer. To terningekast giver 6 · 6 = 36 udfald.",
    },
    {
      heading: "Tælletræ for to møntkast",
      body:
        "Første kast: 2 grene (K, P). Hvert gren deler sig i yderligere 2 (K, P). Blade: KK, KP, PK, PP — i alt 4 udfald. Sandsynlighed for hvert blad: 1/2 · 1/2 = 1/4. P(mindst ét K) = 3/4 (tre af fire blade opfylder betingelsen).",
    },
    {
      heading: "Stisandsynligheder",
      body:
        "I et tælletræ med sandsynligheder er sandsynligheden for en sti (fra rod til blad) lig med produktet af sandsynlighederne langs stien. Hændelsers sandsynlighed beregnes ved at lægge alle gunstige stisandsynligheder sammen.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Tre møntkast. Hvor mange blade har tælletræet?",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "6" },
        { id: "c", text: "8" },
        { id: "d", text: "12" },
      ],
      correctOptionId: "c",
      explanation: "2 · 2 · 2 = 8 mulige udfald.",
    },
    {
      id: "q2",
      prompt: "En is-kiosk tilbyder 3 smagstyper og 2 vaffeltyper. Hvad er antallet af kombinationer?",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "6" },
        { id: "c", text: "8" },
        { id: "d", text: "9" },
      ],
      correctOptionId: "b",
      explanation: "Produktreglen: 3 · 2 = 6 kombinationer.",
    },
    {
      id: "q3",
      prompt: "To terningekast: hvad er det totale antal mulige udfald?",
      options: [
        { id: "a", text: "12" },
        { id: "b", text: "18" },
        { id: "c", text: "36" },
        { id: "d", text: "42" },
      ],
      correctOptionId: "c",
      explanation: "6 · 6 = 36 ordnede udfald.",
    },
    {
      id: "q4",
      prompt: "I et tælletræ: hvad repræsenterer bladene?",
      options: [
        { id: "a", text: "De første trin" },
        { id: "b", text: "Alle sandsynligheder" },
        { id: "c", text: "Alle mulige samlede udfald" },
        { id: "d", text: "Forgreningspunkterne" },
      ],
      correctOptionId: "c",
      explanation: "Bladene (slutpunkterne) repræsenterer alle mulige samlede udfald.",
    },
    {
      id: "q5",
      prompt: "P(sti) i et tælletræ med sandsynligheder beregnes som...",
      options: [
        { id: "a", text: "Summen af grenenes sandsynligheder" },
        { id: "b", text: "Produktet af grenenes sandsynligheder" },
        { id: "c", text: "Gennemsnittet af grenenes sandsynligheder" },
        { id: "d", text: "Den maksimale sandsynlighed langs stien" },
      ],
      correctOptionId: "b",
      explanation: "Stisandsynlighed = produkt af sandsynligheder langs vejen fra rod til blad.",
    },
    {
      id: "q6",
      prompt: "Tøj: 4 bukser og 3 trøjer. Hvad er antallet af outfits?",
      options: [
        { id: "a", text: "7" },
        { id: "b", text: "9" },
        { id: "c", text: "12" },
        { id: "d", text: "16" },
      ],
      correctOptionId: "c",
      explanation: "4 · 3 = 12 kombinationer af bukser og trøjer.",
    },
    {
      id: "q7",
      prompt: "Tre trin med hhv. 2, 3 og 4 muligheder. Hvad er antallet af samlede udfald?",
      options: [
        { id: "a", text: "9" },
        { id: "b", text: "18" },
        { id: "c", text: "24" },
        { id: "d", text: "36" },
      ],
      correctOptionId: "c",
      explanation: "Produktreglen: 2 · 3 · 4 = 24.",
    },
    {
      id: "q8",
      prompt: "To møntkast: P(K og P) i denne rækkefølge?",
      options: [
        { id: "a", text: "1/2" },
        { id: "b", text: "1/4" },
        { id: "c", text: "1/3" },
        { id: "d", text: "3/4" },
      ],
      correctOptionId: "b",
      explanation: "P(K) · P(P) = 1/2 · 1/2 = 1/4.",
    },
  ],
};
