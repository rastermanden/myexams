import type { Topic } from "@/lib/types";

export const raesonnementOgBevisfoerelse: Topic = {
  slug: "raesonnement-og-bevisfoerelse",
  title: "Ræsonnement og bevisførelse",
  summary:
    "Byg matematiske argumenter med klare påstande, begrundelser og konklusioner — fra intuitive forklaringer til gymnasiale beviser.",
  sections: [
    {
      heading: "Struktur i et matematisk argument",
      body:
        "Et stærkt ræsonnement består af: påstand, præmisser, logiske trin og konklusion. Skriv tydeligt, hvorfor hvert trin er gyldigt (definition, regneregel eller tidligere resultat).",
    },
    {
      heading: "Induktion og modstrid (gymnasium)",
      body:
        "Ved induktion beviser du en startsag og et induktionsskridt. Ved modstrid antager du det modsatte af det ønskede resultat og viser, at det fører til en umulighed. Begge metoder kræver præcis formulering.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad skal et matematisk bevis altid indeholde?",
      options: [
        { id: "a", text: "En logisk kæde af begrundede trin" },
        { id: "b", text: "Mange taleksempler uden forklaring" },
        { id: "c", text: "Kun en konklusion" },
        { id: "d", text: "Et skærmbillede fra en CAS" },
      ],
      correctOptionId: "a",
      explanation: "Et bevis er gyldigt, når hvert trin følger logisk og er begrundet.",
    },
    {
      id: "q2",
      prompt: "Hvad viser induktionsskridtet i et induktionsbevis?",
      options: [
        { id: "a", text: "At påstanden gælder for n = 1" },
        { id: "b", text: "At hvis påstanden gælder for n, gælder den også for n+1" },
        { id: "c", text: "At påstanden er sand for tilfældige tal" },
        { id: "d", text: "At modsat påstand er mere sandsynlig" },
      ],
      correctOptionId: "b",
      explanation: "Induktionsskridtet kobler et vilkårligt n til n+1.",
    },
  ],
};
