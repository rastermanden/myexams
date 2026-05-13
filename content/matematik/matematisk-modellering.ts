import type { Topic } from "@/lib/types";

export const matematiskModellering: Topic = {
  slug: "matematisk-modellering",
  title: "Matematisk modellering",
  summary:
    "Oversæt virkelige problemer til matematiske modeller, vurder antagelser og fortolk resultater kritisk.",
  sections: [
    {
      heading: "Fra virkelighed til model",
      body:
        "En model bygges i trin: afgræns problemet, vælg variable, lav antagelser, opskriv sammenhænge og beregn. Til sidst vurderer du, om modellen faktisk beskriver virkeligheden godt nok til formålet.",
    },
    {
      heading: "Åbne datasæt til øvelse",
      body:
        "Arbejd med åbne datasæt om fx temperatur, befolkning eller trafik (DST, Open Data DK, kommunale datasæt). Start med en enkel model, fx lineær sammenhæng, og sammenlign modelens forudsigelser med de faktiske observationer.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er en central del af matematisk modellering?",
      options: [
        { id: "a", text: "At gøre antagelser tydelige" },
        { id: "b", text: "At undgå data" },
        { id: "c", text: "At bruge så mange formler som muligt" },
        { id: "d", text: "At ignorere enheder" },
      ],
      correctOptionId: "a",
      explanation: "Antagelser styrer modellen og skal være klare for at kunne vurderes.",
    },
    {
      id: "q2",
      prompt: "Hvad bør du gøre efter beregning i en modelopgave?",
      options: [
        { id: "a", text: "Kun skrive tallet uden forklaring" },
        { id: "b", text: "Fortolke resultatet i kontekst og validere mod data" },
        { id: "c", text: "Fjerne alle usikkerheder fra teksten" },
        { id: "d", text: "Undlade at nævne modellens begrænsninger" },
      ],
      correctOptionId: "b",
      explanation: "Modeller skal fortolkes og holdes op mod virkelige data og begrænsninger.",
    },
  ],
};
