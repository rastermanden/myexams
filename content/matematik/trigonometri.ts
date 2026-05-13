import type { Topic } from "@/lib/types";

export const trigonometri: Topic = {
  slug: "trigonometri-fra-retvinklet-til-generel",
  title: "Trigonometri",
  summary:
    "Fra retvinklede trekanter til enhedscirkel, sinus- og cosinusrelation samt trigonometriske funktioner og ligninger.",
  demoKey: "trigonometri",
  sections: [
    {
      heading: "sin, cos og tan i retvinklede trekanter",
      body:
        "I en retvinklet trekant beskriver trigonometrien forhold mellem siderne: sin(v) = modstående/hypotenuse, cos(v) = hosliggende/hypotenuse og tan(v) = modstående/hosliggende. Det giver en direkte kobling mellem vinkelstørrelse og sidelængder.",
    },
    {
      heading: "Find ukendt side eller vinkel",
      body:
        "Du finder ukendte sider ved at isolere den ukendte størrelse i sin-, cos- eller tan-formlen. Ukendte vinkler findes med de inverse funktioner: arcsin, arccos og arctan, fx v = arctan(modstående/hosliggende).",
    },
    {
      heading: "Sinusrelation og cosinusrelation",
      body:
        "I ikke-retvinklede trekanter bruges sinusrelationen a/sin(A) = b/sin(B) = c/sin(C) og cosinusrelationen c² = a² + b² - 2ab·cos(C). Sinusrelationen er god, når du kender en side-vinkel-par, mens cosinusrelationen især bruges til side-side-vinkel eller tre kendte sider.",
    },
    {
      heading: "Enhedscirkel, funktioner og perioder",
      body:
        "På enhedscirklen har punktet ved vinkel v koordinaterne (cos(v), sin(v)). Derfor kan trigonometriske funktioner læses både geometrisk og som grafer. sin(x) og cos(x) er periodiske med periode 2π, mens tan(x) har periode π.",
    },
    {
      heading: "Trigonometriske ligninger",
      body:
        "Når du løser trigonometriske ligninger, finder du først en grundløsning og bruger derefter periodicitet til at beskrive alle løsninger. Fx sin(x)=0,5 giver x = π/6 + 2kπ eller x = 5π/6 + 2kπ for heltal k.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvilken definition af sin(v) i en retvinklet trekant er korrekt?",
      options: [
        { id: "a", text: "sin(v) = hosliggende/hypotenuse" },
        { id: "b", text: "sin(v) = modstående/hypotenuse" },
        { id: "c", text: "sin(v) = modstående/hosliggende" },
        { id: "d", text: "sin(v) = hypotenuse/modstående" },
      ],
      correctOptionId: "b",
      explanation: "Sinus er altid forholdet modstående/hypotenuse i den retvinklede trekant.",
    },
    {
      id: "q2",
      prompt: "Hvilken funktion bruger du typisk til at finde en vinkel fra modstående og hosliggende side?",
      options: [
        { id: "a", text: "arcsin" },
        { id: "b", text: "arccos" },
        { id: "c", text: "arctan" },
        { id: "d", text: "cos" },
      ],
      correctOptionId: "c",
      explanation: "arctan(modstående/hosliggende) bruges direkte til at finde vinklen.",
    },
    {
      id: "q3",
      prompt: "Hvad er perioden for cos(x)?",
      options: [
        { id: "a", text: "π/2" },
        { id: "b", text: "π" },
        { id: "c", text: "2π" },
        { id: "d", text: "4π" },
      ],
      correctOptionId: "c",
      explanation: "cos(x + 2π) = cos(x), så perioden er 2π.",
    },
    {
      id: "q4",
      prompt: "Hvilken relation passer til en vilkårlig trekant, når du kender to sider og den mellemliggende vinkel?",
      options: [
        { id: "a", text: "Pythagoras" },
        { id: "b", text: "Sinusrelationen" },
        { id: "c", text: "Cosinusrelationen" },
        { id: "d", text: "Tangensrelationen" },
      ],
      correctOptionId: "c",
      explanation: "Cosinusrelationen forbinder trekanters sider med den mellemliggende vinkel.",
    },
    {
      id: "q5",
      prompt: "Hvis sin(v)=0,5, hvilken vinkel er en gyldig grundløsning i intervallet [0, 2π)?",
      options: [
        { id: "a", text: "v = π/6" },
        { id: "b", text: "v = π/3" },
        { id: "c", text: "v = π/4" },
        { id: "d", text: "v = 2π/3" },
      ],
      correctOptionId: "a",
      explanation: "sin(π/6)=0,5. (En anden løsning i intervallet er 5π/6.)",
    },
  ],
};
