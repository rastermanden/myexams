import type { Topic } from "@/lib/types";

export const brugAfLommeregner: Topic = {
  slug: "brug-af-lommeregner",
  title: "Brug af lommeregner",
  summary:
    "Brug almindelig lommeregner og grafregner korrekt til beregninger, kontrol og tydelig dokumentation i skriftlige besvarelser.",
  sections: [
    {
      heading: "Almindelig lommeregner: undgå tastefejl",
      body:
        "Skriv udtryk med parenteser og kontroller rækkefølge af regnearter. Brug ANS med omtanke, og lav overslag før du accepterer resultatet. Husk at notere afrundingsniveau med enheder.",
    },
    {
      heading: "Grafregner: funktioner og vindue",
      body:
        "Når du tegner grafer, skal vinduet passe til opgaven. Notér, hvordan du fandt skæringspunkter eller nulpunkter, og bekræft med en algebraisk beregning, når det kræves.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvorfor er overslag nyttigt ved lommeregnerbrug?",
      options: [
        { id: "a", text: "Det kan afsløre urimelige resultater" },
        { id: "b", text: "Det gør parenteser overflødige" },
        { id: "c", text: "Det erstatter alle mellemregninger" },
        { id: "d", text: "Det fjerner behovet for enheder" },
      ],
      correctOptionId: "a",
      explanation: "Et hurtigt overslag hjælper dig med at opdage taste- eller metodefejl.",
    },
    {
      id: "q2",
      prompt: "Hvad er god praksis ved grafregnerresultater?",
      options: [
        { id: "a", text: "Kun at vise et skærmbillede uden tekst" },
        { id: "b", text: "At beskrive vindue, aflæsning og metode" },
        { id: "c", text: "At vælge tilfældigt vindue" },
        { id: "d", text: "At afrunde tidligt i alle trin" },
      ],
      correctOptionId: "b",
      explanation: "Læseren skal kunne følge, hvordan du kom frem til resultatet.",
    },
  ],
};
