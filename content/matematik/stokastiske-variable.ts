import type { Topic } from "@/lib/types";

export const stokastiskeVariable: Topic = {
  slug: "stokastiske-variable",
  title: "Stokastiske variable og forventet værdi",
  summary:
    "Hvad er en stokastisk variabel? Lær at opstille sandsynlighedsfordelinger og beregne forventet værdi og varians.",
  sections: [
    {
      heading: "Stokastisk variabel",
      body:
        "En stokastisk variabel X er en funktion, der tildeler et tal til hvert udfald i udfaldsrummet. Eksempel: X = 'summen af to terninger' kan antage værdierne 2, 3, ..., 12. Vi skriver P(X = k) for sandsynligheden for, at X antager værdien k.",
    },
    {
      heading: "Sandsynlighedsfordeling",
      body:
        "En sandsynlighedsfordeling er en tabel eller formel, der angiver P(X = k) for alle mulige værdier k. Alle sandsynligheder skal være ≥ 0 og summer til 1: Σ P(X = k) = 1. Eksempel for én terning: P(X=1)=P(X=2)=...=P(X=6)=1/6.",
    },
    {
      heading: "Forventet værdi (middelværdi)",
      body:
        "Den forventede værdi μ = E(X) er et vægtet gennemsnit: E(X) = Σ k · P(X = k). Eksempel: én terning: E(X) = 1·(1/6) + 2·(1/6) + ... + 6·(1/6) = 21/6 = 3,5. Fortolkning: Det gennemsnitlige resultat i det lange løb.",
    },
    {
      heading: "Varians og standardafvigelse",
      body:
        "Varians σ² = Var(X) = E((X−μ)²) = Σ (k−μ)² · P(X=k) måler spredningen. Standardafvigelsen σ = √Var(X) er i samme enhed som X. For én terning: σ² = (1-3,5)²·(1/6) + ... + (6-3,5)²·(1/6) = 35/12 ≈ 2,92; σ ≈ 1,71.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er E(X) for én fair terning?",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "3,5" },
        { id: "c", text: "4" },
        { id: "d", text: "4,5" },
      ],
      correctOptionId: "b",
      explanation: "E(X) = (1+2+3+4+5+6)/6 = 21/6 = 3,5.",
    },
    {
      id: "q2",
      prompt: "Σ P(X = k) over alle k er altid lig med...",
      options: [
        { id: "a", text: "E(X)" },
        { id: "b", text: "0" },
        { id: "c", text: "1" },
        { id: "d", text: "Var(X)" },
      ],
      correctOptionId: "c",
      explanation: "Alle sandsynligheder i en fordeling summerer til 1.",
    },
    {
      id: "q3",
      prompt: "X kan antage {1, 2, 3} med P = {0,2; 0,5; 0,3}. Hvad er E(X)?",
      options: [
        { id: "a", text: "1,9" },
        { id: "b", text: "2,0" },
        { id: "c", text: "2,1" },
        { id: "d", text: "2,5" },
      ],
      correctOptionId: "c",
      explanation: "E(X) = 1·0,2 + 2·0,5 + 3·0,3 = 0,2 + 1,0 + 0,9 = 2,1.",
    },
    {
      id: "q4",
      prompt: "Hvad måler variansen Var(X)?",
      options: [
        { id: "a", text: "Det forventede resultat" },
        { id: "b", text: "Spredningen around gennemsnittet" },
        { id: "c", text: "Det maksimale udfald" },
        { id: "d", text: "Sandsynligheden for E(X)" },
      ],
      correctOptionId: "b",
      explanation: "Varians mål spredning: E((X−μ)²).",
    },
    {
      id: "q5",
      prompt: "En stokastisk variabel X tildeler tal til...",
      options: [
        { id: "a", text: "Hændelser" },
        { id: "b", text: "Udfald i udfaldsrummet" },
        { id: "c", text: "Sandsynligheder" },
        { id: "d", text: "Gennemsnittet" },
      ],
      correctOptionId: "b",
      explanation: "X : Ω → ℝ er en funktion fra udfaldsrummet til de reelle tal.",
    },
    {
      id: "q6",
      prompt: "Standardafvigelsen σ er lig med...",
      options: [
        { id: "a", text: "Var(X)²" },
        { id: "b", text: "√Var(X)" },
        { id: "c", text: "E(X) / Var(X)" },
        { id: "d", text: "E(X²)" },
      ],
      correctOptionId: "b",
      explanation: "σ = √Var(X). Standardafvigelsen er kvadratroden af variansen.",
    },
    {
      id: "q7",
      prompt: "Et møntkast: X = 1 ved krone, X = 0 ved plat. Hvad er E(X)?",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "0,5" },
        { id: "c", text: "1" },
        { id: "d", text: "2" },
      ],
      correctOptionId: "b",
      explanation: "E(X) = 1·(1/2) + 0·(1/2) = 0,5.",
    },
    {
      id: "q8",
      prompt: "Hvilken betingelse skal en sandsynlighedsfordeling opfylde?",
      options: [
        { id: "a", text: "P(X=k) > 0 og Σ P(X=k) = 0" },
        { id: "b", text: "P(X=k) ≥ 0 og Σ P(X=k) = 1" },
        { id: "c", text: "P(X=k) = 1 for alle k" },
        { id: "d", text: "Σ P(X=k) = E(X)" },
      ],
      correctOptionId: "b",
      explanation: "Sandsynligheder skal være ikke-negative og summere til 1.",
    },
  ],
};
