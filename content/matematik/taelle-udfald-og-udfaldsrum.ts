import type { Topic } from "@/lib/types";

export const taelleUdfaldOgUdfaldsrum: Topic = {
  slug: "taelle-udfald-og-udfaldsrum",
  title: "Tælle udfald og udfaldsrum",
  summary:
    "Hvad er et udfald? Hvad er et udfaldsrum? Lær at opskrive og tælle alle mulige udfald i simple eksperimenter.",
  sections: [
    {
      heading: "Udfald og udfaldsrum",
      body:
        "Et udfald er ét muligt resultat af et forsøg. Udfaldsrummet Ω (omega) er mængden af alle mulige udfald. Ved ét møntkast er udfaldsrummet Ω = {krone, plat}. Ved ét terningekast er Ω = {1, 2, 3, 4, 5, 6}.",
    },
    {
      heading: "Hændelser",
      body:
        "En hændelse A er en delmængde af udfaldsrummet — dvs. en samling af udfald, vi er interesserede i. Hændelsen 'terningen viser et lige tal' er A = {2, 4, 6} og indeholder 3 udfald ud af 6 mulige.",
    },
    {
      heading: "Tælle udfald i sammensatte eksperimenter",
      body:
        "Når vi kombinerer to eksperimenter, kan vi opskrive alle udfald som ordnede par. To møntkast giver udfaldsrummet {(K,K), (K,P), (P,K), (P,P)} med 2 · 2 = 4 udfald. To terninger giver 6 · 6 = 36 ordnede par.",
    },
    {
      heading: "Ligefordelte udfald",
      body:
        "Når alle udfald er lige sandsynlige, kan vi beregne sandsynligheder ved simpel tælling: P(A) = |A| / |Ω|, hvor |A| er antallet af gunstige udfald og |Ω| er det totale antal udfald. Denne formel virker kun, når udfaldsrummet er ligefordelt.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er udfaldsrummet for ét terningekast?",
      options: [
        { id: "a", text: "{1, 2, 3, 4, 5}" },
        { id: "b", text: "{1, 2, 3, 4, 5, 6}" },
        { id: "c", text: "{2, 4, 6}" },
        { id: "d", text: "{1, 3, 5}" },
      ],
      correctOptionId: "b",
      explanation: "En standardterning har seks sider: 1, 2, 3, 4, 5, 6.",
    },
    {
      id: "q2",
      prompt: "Hvad er udfaldsrummet for ét møntkast?",
      options: [
        { id: "a", text: "{krone}" },
        { id: "b", text: "{plat}" },
        { id: "c", text: "{krone, plat}" },
        { id: "d", text: "{krone, plat, kant}" },
      ],
      correctOptionId: "c",
      explanation: "Et fair møntkast giver krone eller plat.",
    },
    {
      id: "q3",
      prompt: "Hændelsen A = 'terningen viser et ulige tal'. Hvad er A?",
      options: [
        { id: "a", text: "{1, 3, 5}" },
        { id: "b", text: "{2, 4, 6}" },
        { id: "c", text: "{1, 2, 3}" },
        { id: "d", text: "{1, 2, 3, 4, 5, 6}" },
      ],
      correctOptionId: "a",
      explanation: "Ulige tal på en terning er 1, 3 og 5.",
    },
    {
      id: "q4",
      prompt: "Hvor mange udfald er der i udfaldsrummet for to møntkast?",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "4" },
        { id: "d", text: "6" },
      ],
      correctOptionId: "c",
      explanation: "Ω = {(K,K), (K,P), (P,K), (P,P)} — i alt 4 udfald.",
    },
    {
      id: "q5",
      prompt: "Hvad er symbolet for udfaldsrummet?",
      options: [
        { id: "a", text: "A" },
        { id: "b", text: "P" },
        { id: "c", text: "Ω" },
        { id: "d", text: "μ" },
      ],
      correctOptionId: "c",
      explanation: "Udfaldsrummet betegnes med det græske bogstav omega (Ω).",
    },
    {
      id: "q6",
      prompt: "En pose har 1 rød, 1 blå og 1 grøn kugle. Hvad er |Ω|?",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "2" },
        { id: "c", text: "3" },
        { id: "d", text: "6" },
      ],
      correctOptionId: "c",
      explanation: "Der er tre mulige udfald: rød, blå og grøn.",
    },
    {
      id: "q7",
      prompt: "To terninger kastes. Hvor mange ordnede udfald er der i alt?",
      options: [
        { id: "a", text: "12" },
        { id: "b", text: "24" },
        { id: "c", text: "36" },
        { id: "d", text: "48" },
      ],
      correctOptionId: "c",
      explanation: "6 · 6 = 36 ordnede par (i, j) med i, j ∈ {1,...,6}.",
    },
    {
      id: "q8",
      prompt: "En hændelse er en delmængde af...",
      options: [
        { id: "a", text: "sandsynligheder" },
        { id: "b", text: "udfaldsrummet" },
        { id: "c", text: "komplementet" },
        { id: "d", text: "formler" },
      ],
      correctOptionId: "b",
      explanation: "En hændelse A ⊆ Ω er en delmængde af udfaldsrummet.",
    },
  ],
};
