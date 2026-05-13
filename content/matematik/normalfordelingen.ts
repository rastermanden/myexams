import type { Topic } from "@/lib/types";
import NormalDistributionDemo from "@/components/NormalDistributionDemo";

export const normalfordelingen: Topic = {
  slug: "normalfordelingen",
  title: "Normalfordelingen",
  summary:
    "Forstå normalfordelingens klokkeform, brug standardnormalfordelingen og beregn sandsynligheder med z-scores.",
  demoComponent: NormalDistributionDemo,
  sections: [
    {
      heading: "Hvad er normalfordelingen?",
      body:
        "Normalfordelingen N(μ, σ²) er en kontinuert sandsynlighedsfordeling med den symmetriske, klokkeformede kurve. Den er kendetegnet ved sin middelværdi μ (centrum) og standardafvigelse σ (spredning). Kurven er symmetrisk om μ. Mange naturlige mål (højde, vægt, eksamensscore) følger normalfordelingen.",
    },
    {
      heading: "Standardnormalfordelingen Z ~ N(0,1)",
      body:
        "Standardnormalfordelingen Z har μ = 0 og σ = 1. Enhver normalfordelt variabel X kan standardiseres: Z = (X − μ) / σ. Z-scoren angiver, hvor mange standardafvigelser X er fra middelværdien. P(Z < z) kan aflæses i en z-tabel eller beregnes med CAS.",
    },
    {
      heading: "68-95-99,7-reglen",
      body:
        "For N(μ, σ²): ca. 68% af observationerne falder inden for μ ± σ, ca. 95% inden for μ ± 2σ og ca. 99,7% inden for μ ± 3σ. Disse procentsatser er centrale at huske og bruges til hurtige overslag uden tabeller.",
    },
    {
      heading: "Beregning af sandsynligheder",
      body:
        "P(a < X < b) = P((a−μ)/σ < Z < (b−μ)/σ) beregnes ved opslag i z-tabeller eller CAS. P(X > x) = 1 − P(X ≤ x). Eksempel: Højder N(175, 8²). P(X > 185) = P(Z > (185−175)/8) = P(Z > 1,25) = 1 − Φ(1,25) ≈ 1 − 0,8944 = 0,1056.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Normalfordelingen er symmetrisk om...",
      options: [
        { id: "a", text: "σ" },
        { id: "b", text: "μ" },
        { id: "c", text: "0" },
        { id: "d", text: "1" },
      ],
      correctOptionId: "b",
      explanation: "Normalfordelingens klokke er symmetrisk om middelværdien μ.",
    },
    {
      id: "q2",
      prompt: "Hvad er z-scoren for X = 80, μ = 70, σ = 5?",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "2" },
        { id: "c", text: "10" },
        { id: "d", text: "0,5" },
      ],
      correctOptionId: "b",
      explanation: "z = (X−μ)/σ = (80−70)/5 = 10/5 = 2.",
    },
    {
      id: "q3",
      prompt: "Ca. hvilken procentdel af observationerne falder inden for μ ± 2σ?",
      options: [
        { id: "a", text: "68%" },
        { id: "b", text: "95%" },
        { id: "c", text: "99,7%" },
        { id: "d", text: "50%" },
      ],
      correctOptionId: "b",
      explanation: "95%-reglen: ca. 95% falder inden for μ ± 2σ.",
    },
    {
      id: "q4",
      prompt: "Standardnormalfordelingen Z ~ N(?, ?)",
      options: [
        { id: "a", text: "N(1, 0)" },
        { id: "b", text: "N(0, 1)" },
        { id: "c", text: "N(μ, σ)" },
        { id: "d", text: "N(0, σ)" },
      ],
      correctOptionId: "b",
      explanation: "Standardnormalfordelingen har μ = 0 og σ = 1: Z ~ N(0,1).",
    },
    {
      id: "q5",
      prompt: "Hvad er formlen for z-standardisering?",
      options: [
        { id: "a", text: "Z = μ + σX" },
        { id: "b", text: "Z = (X − σ) / μ" },
        { id: "c", text: "Z = (X − μ) / σ" },
        { id: "d", text: "Z = X · μ / σ" },
      ],
      correctOptionId: "c",
      explanation: "Z = (X − μ) / σ standardiserer til N(0,1).",
    },
    {
      id: "q6",
      prompt: "P(Z < −1,96) ≈ ?",
      options: [
        { id: "a", text: "0,025" },
        { id: "b", text: "0,05" },
        { id: "c", text: "0,975" },
        { id: "d", text: "0,5" },
      ],
      correctOptionId: "a",
      explanation: "P(Z < −1,96) ≈ 0,025 (2,5% af arealet i venstre hale).",
    },
    {
      id: "q7",
      prompt: "Kan normalfordelingen bruges til diskrete variable som antal kast?",
      options: [
        { id: "a", text: "Ja, altid" },
        { id: "b", text: "Nej, den er kun for kontinuerte variable" },
        { id: "c", text: "Ja, men kun når n er meget stor (som tilnærmelse)" },
        { id: "d", text: "Nej, man bruger altid binomialfordelingen" },
      ],
      correctOptionId: "c",
      explanation:
        "Normalfordelingen kan bruges som tilnærmelse til binomialfordelingen, når n er stor og p ikke er tæt på 0 eller 1.",
    },
    {
      id: "q8",
      prompt: "X ~ N(50, 4²). Hvad er P(42 < X < 58)?",
      options: [
        { id: "a", text: "Ca. 68%" },
        { id: "b", text: "Ca. 95%" },
        { id: "c", text: "Ca. 99,7%" },
        { id: "d", text: "Ca. 50%" },
      ],
      correctOptionId: "b",
      explanation: "42 = 50−2·4 = μ−2σ og 58 = 50+2·4 = μ+2σ. Inden for 2σ: ca. 95%.",
    },
  ],
};
