import type { Topic } from "@/lib/types";
import { ArealTraening } from "@/components/TjekUp8Demo";

export const areal: Topic = {
  slug: "areal",
  title: "Areal",
  summary:
    "Areal og omkreds af rektangel, trekant, parallelogram, trapez og cirkel — plus sammensatte figurer, baglæns udregning og arealenheder.",
  demoComponent: ArealTraening,
  sections: [
    {
      heading: "Areal, omkreds og enheder",
      body:
        "Arealet er, hvor meget flade en figur dækker, og det måles i kvadratenheder: mm², cm², dm², m², ha og km². Omkredsen er turen hele vejen rundt om figuren og måles i almindelige længdeenheder: mm, cm, m og km. En af de hyppigste fejl til prøven er at bytte rundt på de to — eller at glemme kvadraten i enheden. Husk også, at alle mål skal være i samme enhed, før du regner: er den ene side i meter og den anden i centimeter, skal du omregne først.",
    },
    {
      heading: "Rektangel og kvadrat",
      body:
        "Arealet af et rektangel er længde gange bredde: A = l × b. Et rektangel på 12 cm × 7 cm har arealet 84 cm². Omkredsen er O = 2 × (l + b) = 2 × 19 = 38 cm. Et kvadrat er et rektangel, hvor alle sider er lige lange, så A = s × s = s² og O = 4 × s. Et kvadrat med siden 9 m har arealet 81 m² og omkredsen 36 m.",
    },
    {
      heading: "Trekant",
      body:
        "En trekant er præcis det halve af et rektangel med samme grundlinje og samme højde, og derfor er A = (g × h) : 2. En trekant med grundlinje 14 cm og højde 9 cm har arealet (14 × 9) : 2 = 63 cm². Højden skal altid stå vinkelret på grundlinjen — det er ikke den skrå side. I en retvinklet trekant kan du bruge de to kateter som grundlinje og højde. Omkredsen finder du derimod ved at lægge alle tre sider sammen.",
    },
    {
      heading: "Parallelogram og trapez",
      body:
        "Et parallelogram kan klippes om til et rektangel, så arealet er grundlinje gange højde: A = g × h. Med g = 9 cm og h = 6 cm får du 54 cm². Et trapez har to parallelle sider, a og b. Arealet er gennemsnittet af dem ganget med højden: A = ((a + b) : 2) × h. Med a = 6 cm, b = 10 cm og h = 8 cm bliver det (16 : 2) × 8 = 8 × 8 = 64 cm². Igen: brug højden, ikke den skrå side.",
    },
    {
      heading: "Cirkel",
      body:
        "En cirkels radius r går fra centrum til kanten, og diameteren d er dobbelt så lang: d = 2r. Arealet er A = π × r², og omkredsen er O = 2 × π × r, som også kan skrives O = π × d. Tallet π er cirka 3,14. En cirkel med radius 5 cm har arealet π × 25 ≈ 78,5 cm², og en cirkel med diameter 10 cm har omkredsen π × 10 ≈ 31,4 cm. Pas på: r² betyder r × r — ikke r × 2. Får du opgivet diameteren, skal du huske at halvere den, før du regner arealet.",
    },
    {
      heading: "Sammensatte figurer",
      body:
        "Prøveopgaver handler tit om en grund, et gulv eller en husfacade, der ikke er en simpel figur. Del figuren op i figurer, du kender — typisk rektangler, trekanter og halvcirkler — regn hver del for sig, og læg arealerne sammen. Er der et hul i figuren (fx et vindue eller en cirkulær bunddel), regner du hele arealet og trækker hullets areal fra. Tegn gerne stiplede hjælpelinjer på figuren og skriv målene på, inden du regner.",
    },
    {
      heading: "Baglæns og omregning af arealenheder",
      body:
        "Kender du arealet og mangler en side, sætter du ind i formlen og isolerer. Har en trekant arealet 48 cm² og grundlinjen 12 cm, giver A = (g × h) : 2 at 48 = (12 × h) : 2, altså 96 = 12 × h og h = 8 cm. Ved omregning af arealenheder ganger du med omregningstallet to gange, fordi arealet er længde gange længde: 1 m² = 100 cm × 100 cm = 10.000 cm², så 3 m² = 30.000 cm². På samme måde er 1 ha = 10.000 m², og 1 km² = 1.000.000 m².",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Et rektangel er 12 cm langt og 7 cm bredt. Hvad er arealet?",
      options: [
        { id: "a", text: "19 cm²" },
        { id: "b", text: "38 cm²" },
        { id: "c", text: "84 cm²" },
        { id: "d", text: "84 cm" },
      ],
      correctOptionId: "c",
      explanation:
        "A = længde × bredde = 12 × 7 = 84 cm². 38 cm er omkredsen, og enheden for areal skal være cm².",
    },
    {
      id: "q2",
      prompt: "En trekant har grundlinje 14 cm og højde 9 cm. Hvad er arealet?",
      options: [
        { id: "a", text: "126 cm²" },
        { id: "b", text: "63 cm²" },
        { id: "c", text: "23 cm²" },
        { id: "d", text: "31,5 cm²" },
      ],
      correctOptionId: "b",
      explanation:
        "A = (g × h) : 2 = (14 × 9) : 2 = 126 : 2 = 63 cm².",
    },
    {
      id: "q3",
      prompt: "Hvad er arealet af en cirkel med radius 5 cm? (afrund til 1 decimal)",
      options: [
        { id: "a", text: "31,4 cm²" },
        { id: "b", text: "15,7 cm²" },
        { id: "c", text: "78,5 cm²" },
        { id: "d", text: "25 cm²" },
      ],
      correctOptionId: "c",
      explanation:
        "A = π × r² = π × 5² = π × 25 ≈ 78,5 cm². 31,4 cm er omkredsen.",
    },
    {
      id: "q4",
      prompt: "En cirkel har diameter 10 cm. Hvad er omkredsen? (afrund til 1 decimal)",
      options: [
        { id: "a", text: "31,4 cm" },
        { id: "b", text: "62,8 cm" },
        { id: "c", text: "78,5 cm" },
        { id: "d", text: "15,7 cm" },
      ],
      correctOptionId: "a",
      explanation:
        "O = π × d = π × 10 ≈ 31,4 cm. (Samme resultat med O = 2 × π × r = 2 × π × 5.)",
    },
    {
      id: "q5",
      prompt: "Et trapez har parallelle sider på 6 cm og 10 cm og højden 8 cm. Hvad er arealet?",
      options: [
        { id: "a", text: "128 cm²" },
        { id: "b", text: "60 cm²" },
        { id: "c", text: "64 cm²" },
        { id: "d", text: "48 cm²" },
      ],
      correctOptionId: "c",
      explanation:
        "A = ((a + b) : 2) × h = ((6 + 10) : 2) × 8 = 8 × 8 = 64 cm².",
    },
    {
      id: "q6",
      prompt: "Hvor mange cm² er 3 m²?",
      options: [
        { id: "a", text: "300 cm²" },
        { id: "b", text: "3.000 cm²" },
        { id: "c", text: "30.000 cm²" },
        { id: "d", text: "300.000 cm²" },
      ],
      correctOptionId: "c",
      explanation:
        "1 m² = 100 cm × 100 cm = 10.000 cm². Derfor er 3 m² = 3 × 10.000 = 30.000 cm².",
    },
    {
      id: "q7",
      prompt: "En trekant har arealet 48 cm² og grundlinjen 12 cm. Hvor høj er trekanten?",
      options: [
        { id: "a", text: "4 cm" },
        { id: "b", text: "6 cm" },
        { id: "c", text: "8 cm" },
        { id: "d", text: "16 cm" },
      ],
      correctOptionId: "c",
      explanation:
        "48 = (12 × h) : 2. Gang begge sider med 2: 96 = 12 × h. Divider med 12: h = 8 cm.",
    },
    {
      id: "q8",
      prompt:
        "En husfacade består af et rektangel på 8 m × 5 m med en trekantet gavl ovenpå (grundlinje 8 m, højde 3 m). Hvad er det samlede areal?",
      options: [
        { id: "a", text: "52 m²" },
        { id: "b", text: "64 m²" },
        { id: "c", text: "40 m²" },
        { id: "d", text: "24 m²" },
      ],
      correctOptionId: "a",
      explanation:
        "Rektanglet: 8 × 5 = 40 m². Trekanten: (8 × 3) : 2 = 12 m². I alt 40 + 12 = 52 m².",
    },
  ],
};
