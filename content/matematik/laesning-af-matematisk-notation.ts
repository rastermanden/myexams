import type { Topic } from "@/lib/types";

export const laesningAfMatematiskNotation: Topic = {
  slug: "laesning-af-matematisk-notation",
  title: "Læsning af matematisk notation",
  summary:
    "Lær at læse symboler, udtryk og funktionsnotation sikkert, så du undgår klassiske misforståelser i opgaver og beviser.",
  sections: [
    {
      heading: "Symboler og betydning",
      body:
        "Træn standardnotation: ≤, ≥, ≠, ∈, |x|, √x, Σ, f(x), P(A|B) og intervalnotation. Læs altid notation i kontekst: samme symbol kan have forskellig rolle i forskellige emner.",
    },
    {
      heading: "Strategi til sikker læsning",
      body:
        "Omskriv notation til ord: fx '∀x ∈ R: x² ≥ 0' læses som 'for alle reelle x er x i anden større end eller lig 0'. Marker domæne, enheder og definitioner før du regner.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad betyder notationen |x|?",
      options: [
        { id: "a", text: "x ganget med sig selv" },
        { id: "b", text: "den absolutte værdi af x" },
        { id: "c", text: "enhedsvektor" },
        { id: "d", text: "x divideret med 2" },
      ],
      correctOptionId: "b",
      explanation: "|x| er afstanden fra x til 0 på tallinjen.",
    },
    {
      id: "q2",
      prompt: "Hvordan læses 'f(x) = 2x + 1' korrekt?",
      options: [
        { id: "a", text: "f ganget med x er 2x+1" },
        { id: "b", text: "funktionen f af x er 2x+1" },
        { id: "c", text: "f og x er uafhængige størrelser uden relation" },
        { id: "d", text: "x er altid lig 1" },
      ],
      correctOptionId: "b",
      explanation: "f(x) er en funktionsværdi, ikke et produkt f·x.",
    },
  ],
};
