import type { Topic } from "@/lib/types";

export const brugAfCASVaerktoejer: Topic = {
  slug: "brug-af-cas-vaerktoejer",
  title: "Brug af CAS-værktøjer",
  summary:
    "Få korte, praktiske workflows i CAS (Maple, GeoGebra, Wolfram) til algebra, funktioner og kontrol af mellemregninger.",
  sections: [
    {
      heading: "Korte tutorials: tre typiske opgaver",
      body:
        "1) Løs ligninger symbolsk og tjek løsninger. 2) Tegn funktion og aflæs nulpunkter/skæring. 3) Differentier/integrer og verificér med numerisk kontrol. Dokumentér altid input og output tydeligt i din besvarelse.",
    },
    {
      heading: "God praksis med CAS",
      body:
        "CAS er et hjælpemiddel, ikke en erstatning for forståelse. Skriv derfor: hvad du bad værktøjet om, hvorfor kommandoen passer til opgaven, og hvordan resultatet tolkes matematisk.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er vigtigst, når du bruger CAS i en aflevering?",
      options: [
        { id: "a", text: "Kun at indsætte slutsvaret fra CAS" },
        { id: "b", text: "At dokumentere kommando, resultat og tolkning" },
        { id: "c", text: "At bruge flest mulige kommandoer" },
        { id: "d", text: "At undlade manuel kontrol" },
      ],
      correctOptionId: "b",
      explanation: "Besvarelsen skal vise metodevalg og matematisk forståelse, ikke kun output.",
    },
    {
      id: "q2",
      prompt: "Hvornår er CAS-kontrol særlig nyttig?",
      options: [
        { id: "a", text: "Ved kontrol af mellemregninger og alternative metoder" },
        { id: "b", text: "Kun i geometri uden tal" },
        { id: "c", text: "Aldrig i gymnasiet" },
        { id: "d", text: "Kun hvis facit mangler enheder" },
      ],
      correctOptionId: "a",
      explanation: "CAS er stærk til at tjekke algebraiske trin og sammenligne metoder.",
    },
  ],
};
