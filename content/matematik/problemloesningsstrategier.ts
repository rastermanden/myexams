import type { Topic } from "@/lib/types";

export const problemloesningsstrategier: Topic = {
  slug: "problemloesningsstrategier",
  title: "Problemløsningsstrategier",
  summary:
    "Lær en sikker arbejdsproces: forstå, planlæg, udfør og kontroller, så du løser matematikopgaver mere systematisk.",
  sections: [
    {
      heading: "Trin-for-trin-modellen",
      body:
        "Brug altid de fire trin: 1) Forstå opgaven og skriv givne data ned. 2) Planlæg en metode (formel, tegning eller tabel). 3) Udfør beregningen roligt med mellemregninger. 4) Kontroller svaret ved overslag, enhedstjek og om resultatet passer til konteksten.",
    },
    {
      heading: "Eksempel: pris med rabat og moms",
      body:
        "En vare koster 800 kr. Der gives 25% rabat, og derefter lægges 25% moms på. Plan: gang med 0,75 og derefter 1,25. Udfør: 800·0,75 = 600, og 600·1,25 = 750. Kontrol: resultatet er lidt under startprisen, hvilket er rimeligt.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad kommer først i en god problemløsningsstrategi?",
      options: [
        { id: "a", text: "Forstå opgaven og identificer data" },
        { id: "b", text: "Gæt et svar og regn baglæns" },
        { id: "c", text: "Skriv kun slutresultatet" },
        { id: "d", text: "Vælg altid den længste metode" },
      ],
      correctOptionId: "a",
      explanation: "Du skal først forstå, hvad der spørges om, og hvilke oplysninger du har.",
    },
    {
      id: "q2",
      prompt: "Hvilket kontroltrin er mest relevant til sidst?",
      options: [
        { id: "a", text: "Slet mellemregninger" },
        { id: "b", text: "Tjek enheder og rimelighed" },
        { id: "c", text: "Rund op til nærmeste hele tal uden grund" },
        { id: "d", text: "Skift metode midt i løsningen" },
      ],
      correctOptionId: "b",
      explanation: "Et slutcheck med enheder og rimelighed fanger mange fejl.",
    },
  ],
};
