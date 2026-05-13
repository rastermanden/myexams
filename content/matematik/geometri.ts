import type { Topic } from "@/lib/types";
import GeometriDemo from "@/components/GeometriDemo";

export const geometri: Topic = {
  slug: "geometri",
  title: "Geometri",
  summary:
    "Plangeometri, rumgeometri og vektorer fra folkeskole til gymnasium med interaktive øvelser.",
  demoComponent: GeometriDemo,
  sections: [
    {
      heading: "Vinkler, trekanter og Pythagoras",
      body:
        "I geometri arbejder vi med vinkler (spids, ret, stump og fuld vinkel), trekantstyper og vinkelsum. En trekants vinkelsum er altid 180°. Pythagoras’ sætning gælder i retvinklede trekanter: a² + b² = c², hvor c er hypotenusen.",
    },
    {
      heading: "Plane figurer og areal",
      body:
        "For plane figurer bruger vi standardformler: rektangel A = l·b, trekant A = (g·h)/2, cirkel A = π·r². Firkanter som kvadrat, rektangel, parallelogram og trapez har hver deres arealformler, men idéen er altid at måle, hvor stor fladen er.",
    },
    {
      heading: "Rumgeometri: rumfang og overfladeareal",
      body:
        "I rumgeometri ser vi på kasse, cylinder, kegle, kugle og pyramide. Rumfang måles i kubikenheder og overfladeareal i kvadratenheder. Eksempel: cylinderens rumfang er V = π·r²·h, mens overfladearealet er O = 2πr(r+h).",
    },
    {
      heading: "Ensvinklethed, kongruens og koordinatgeometri",
      body:
        "To figurer er ensvinklede, når vinklerne er ens, men størrelsen kan være forskellig. Figurer er kongruente, når både form og størrelse er ens. I koordinatsystemet beskrives linjer og planer med ligninger, hvilket forbinder geometri med algebra.",
    },
    {
      heading: "Vektorer i 2D og 3D",
      body:
        "En vektor har retning og længde. I 2D/3D kan vi beregne længde, summere vektorer og finde skalarproduktet. Skalarproduktet bruges bl.a. til at afgøre vinkler mellem vektorer og til projektioner i gymnasiematematik.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvilken vinkeltype er 90°?",
      options: [
        { id: "a", text: "Spids vinkel" },
        { id: "b", text: "Ret vinkel" },
        { id: "c", text: "Stump vinkel" },
        { id: "d", text: "Fuld vinkel" },
      ],
      correctOptionId: "b",
      explanation: "En ret vinkel er præcis 90°.",
    },
    {
      id: "q2",
      prompt: "Hvad er vinkelsummen i en trekant?",
      options: [
        { id: "a", text: "90°" },
        { id: "b", text: "180°" },
        { id: "c", text: "270°" },
        { id: "d", text: "360°" },
      ],
      correctOptionId: "b",
      explanation: "Alle trekanter har vinkelsum 180°.",
    },
    {
      id: "q3",
      prompt: "En retvinklet trekant har kateterne 6 og 8. Hvad er hypotenusen?",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "12" },
        { id: "c", text: "14" },
        { id: "d", text: "16" },
      ],
      correctOptionId: "a",
      explanation: "c = √(6² + 8²) = √(36 + 64) = √100 = 10.",
    },
    {
      id: "q4",
      prompt: "Hvad er arealet af en cirkel med radius 3?",
      options: [
        { id: "a", text: "6π" },
        { id: "b", text: "9π" },
        { id: "c", text: "12π" },
        { id: "d", text: "18π" },
      ],
      correctOptionId: "b",
      explanation: "A = π·r² = π·3² = 9π.",
    },
    {
      id: "q5",
      prompt: "Hvad er rumfanget af en kasse med mål 2, 3 og 4?",
      options: [
        { id: "a", text: "9" },
        { id: "b", text: "12" },
        { id: "c", text: "24" },
        { id: "d", text: "48" },
      ],
      correctOptionId: "c",
      explanation: "V = l·b·h = 2·3·4 = 24.",
    },
    {
      id: "q6",
      prompt: "Hvad betyder det, at to trekanter er kongruente?",
      options: [
        { id: "a", text: "De har samme areal" },
        { id: "b", text: "De har samme vinkler" },
        { id: "c", text: "De har samme form og størrelse" },
        { id: "d", text: "De ligger på samme linje" },
      ],
      correctOptionId: "c",
      explanation: "Kongruente figurer er ens i både form og størrelse.",
    },
    {
      id: "q7",
      prompt: "Hvis v = (2, -1, 2), hvad er længden |v|?",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "√9" },
        { id: "c", text: "√8" },
        { id: "d", text: "√6" },
      ],
      correctOptionId: "a",
      explanation: "|v| = √(2² + (-1)² + 2²) = √(4+1+4) = √9 = 3.",
    },
    {
      id: "q8",
      prompt: "Hvad er skalarproduktet af a=(1,2,3) og b=(4,0,1)?",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "7" },
        { id: "c", text: "9" },
        { id: "d", text: "11" },
      ],
      correctOptionId: "b",
      explanation: "a·b = 1·4 + 2·0 + 3·1 = 4 + 0 + 3 = 7.",
    },
  ],
};
