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
      examples: [
        {
          title: "Gulv på 4,5 m × 3,2 m",
          task: "Find arealet — og hvor mange kvadratmeter klinker der skal købes med 10 % spild.",
          steps: [
            { expression: "A = l × b = 4,5 × 3,2" },
            {
              expression: "45 × 32 = 1.440, og der skal være 2 decimaler: 14,40",
              explanation: "4,5 har 1 decimal og 3,2 har 1 decimal — tilsammen 2.",
            },
            { expression: "A = 14,4 m²" },
            { expression: "Med 10 % spild: 14,4 × 1,10 = 15,84 m²" },
          ],
          result: "Arealet er 14,4 m², og der skal købes ca. 15,84 m² klinker",
          check: "Omkredsen er 2 × (4,5 + 3,2) = 15,4 m — næsten samme tal som arealet, men en helt anden størrelse. Læg mærke til enhederne: m mod m².",
        },
        {
          title: "Kvadrat med omkredsen 36 m",
          task: "Find arealet, når du kun kender omkredsen.",
          steps: [
            { expression: "O = 4 × s → 36 = 4 × s" },
            { expression: "s = 36 : 4 = 9 m" },
            { expression: "A = s² = 9 × 9 = 81 m²" },
          ],
          result: "Arealet er 81 m²",
          check: "Omkredsen af et kvadrat med siden 9 m: 4 × 9 = 36 m. Passer.",
        },
      ],
    },
    {
      heading: "Trekant",
      body:
        "En trekant er præcis det halve af et rektangel med samme grundlinje og samme højde, og derfor er A = (g × h) : 2. En trekant med grundlinje 14 cm og højde 9 cm har arealet (14 × 9) : 2 = 63 cm². Højden skal altid stå vinkelret på grundlinjen — det er ikke den skrå side. I en retvinklet trekant kan du bruge de to kateter som grundlinje og højde. Omkredsen finder du derimod ved at lægge alle tre sider sammen.",
      examples: [
        {
          title: "Trekant med grundlinje 13 cm og højde 8,4 cm",
          task: "Find arealet med decimaltal i målene.",
          steps: [
            { expression: "A = (g × h) : 2 = (13 × 8,4) : 2" },
            {
              expression: "13 × 8,4 = 109,2",
              explanation: "Mellemregning: 13 × 8 = 104 og 13 × 0,4 = 5,2. 104 + 5,2 = 109,2.",
            },
            { expression: "109,2 : 2 = 54,6" },
          ],
          result: "A = 54,6 cm²",
          check: "Rektanglet med samme mål ville have 109,2 cm², og trekanten er præcis det halve. Passer.",
        },
        {
          title: "Retvinklet trekant med kateter 9 cm og 12 cm",
          task: "Brug de to kateter som grundlinje og højde.",
          steps: [
            {
              expression: "I en retvinklet trekant står de to kateter vinkelret på hinanden",
              explanation: "Derfor kan den ene bruges som grundlinje og den anden som højde.",
            },
            { expression: "A = (9 × 12) : 2 = 108 : 2 = 54 cm²" },
            {
              expression: "Hypotenusen er 15 cm (9² + 12² = 81 + 144 = 225 = 15²)",
              explanation: "Den skal du IKKE bruge til arealet — kun til omkredsen.",
            },
            { expression: "Omkreds: 9 + 12 + 15 = 36 cm" },
          ],
          result: "A = 54 cm², omkreds 36 cm",
          check: "Bruger du hypotenusen som højde, får du et for stort areal — en klassisk fejl.",
        },
      ],
    },
    {
      heading: "Parallelogram og trapez",
      body:
        "Et parallelogram kan klippes om til et rektangel, så arealet er grundlinje gange højde: A = g × h. Med g = 9 cm og h = 6 cm får du 54 cm². Et trapez har to parallelle sider, a og b. Arealet er gennemsnittet af dem ganget med højden: A = ((a + b) : 2) × h. Med a = 6 cm, b = 10 cm og h = 8 cm bliver det (16 : 2) × 8 = 8 × 8 = 64 cm². Igen: brug højden, ikke den skrå side.",
      examples: [
        {
          title: "Trapezformet grund: 7,5 m og 12,5 m med højden 6 m",
          task: "Find arealet af et trapez.",
          steps: [
            { expression: "A = ((a + b) : 2) × h" },
            { expression: "a + b = 7,5 + 12,5 = 20" },
            { expression: "20 : 2 = 10", explanation: "Det er gennemsnittet af de to parallelle sider." },
            { expression: "10 × 6 = 60" },
          ],
          result: "A = 60 m²",
          check: "Arealet skal ligge mellem et rektangel på 7,5 × 6 = 45 m² og et på 12,5 × 6 = 75 m². 60 m² ligger midt imellem. Passer.",
        },
        {
          title: "Parallelogram med grundlinje 9 cm, højde 6 cm og skrå side 7 cm",
          task: "Vælg det rigtige mål.",
          steps: [
            {
              expression: "A = g × h = 9 × 6 = 54 cm²",
              explanation: "Højden er den vinkelrette afstand mellem de to parallelle sider.",
            },
            {
              expression: "Fejlsvaret 9 × 7 = 63 cm² bruger den skrå side",
              explanation: "Den skrå side er længere end højden, så arealet bliver for stort.",
            },
            { expression: "Omkreds: 2 × (9 + 7) = 32 cm", explanation: "Til omkredsen bruger du derimod de faktiske sider." },
          ],
          result: "A = 54 cm², omkreds 32 cm",
          check: "Klipper du trekanten af i den ene ende og sætter den i den anden, får du et rektangel på 9 × 6.",
        },
      ],
    },
    {
      heading: "Cirkel",
      body:
        "En cirkels radius r går fra centrum til kanten, og diameteren d er dobbelt så lang: d = 2r. Arealet er A = π × r², og omkredsen er O = 2 × π × r, som også kan skrives O = π × d. Tallet π er cirka 3,14. En cirkel med radius 5 cm har arealet π × 25 ≈ 78,5 cm², og en cirkel med diameter 10 cm har omkredsen π × 10 ≈ 31,4 cm. Pas på: r² betyder r × r — ikke r × 2. Får du opgivet diameteren, skal du huske at halvere den, før du regner arealet.",
      examples: [
        {
          title: "Rundt bord med diameter 1,4 m",
          task: "Find både areal og omkreds.",
          steps: [
            { expression: "r = d : 2 = 1,4 : 2 = 0,7 m", explanation: "Formlerne bruger radius, ikke diameter." },
            { expression: "r² = 0,7 × 0,7 = 0,49" },
            {
              expression: "A = π × 0,49 = 3,1416 × 0,49 = 1,5394…",
              explanation: "Afrund til sidst — ikke undervejs.",
            },
            { expression: "A ≈ 1,54 m²" },
            { expression: "O = π × d = 3,1416 × 1,4 = 4,3982… ≈ 4,40 m" },
          ],
          result: "A ≈ 1,54 m² og O ≈ 4,40 m",
          check: "Arealet skal være lidt mindre end kvadratet om cirklen: 1,4 × 1,4 = 1,96 m². Passer.",
        },
        {
          title: "Fra omkreds til radius og areal",
          task: "En cirkel har omkredsen 25,12 cm. Find radius og areal.",
          steps: [
            { expression: "O = 2 × π × r → 25,12 = 2 × 3,14 × r = 6,28 × r" },
            { expression: "r = 25,12 : 6,28 = 4 cm" },
            { expression: "A = π × r² = 3,14 × 16 = 50,24 cm²" },
          ],
          result: "r = 4 cm og A ≈ 50,24 cm²",
          check: "Omkredsen af en cirkel med r = 4: 2 × 3,14 × 4 = 25,12 cm. Passer.",
        },
      ],
    },
    {
      heading: "Sammensatte figurer",
      body:
        "Prøveopgaver handler tit om en grund, et gulv eller en husfacade, der ikke er en simpel figur. Del figuren op i figurer, du kender — typisk rektangler, trekanter og halvcirkler — regn hver del for sig, og læg arealerne sammen. Er der et hul i figuren (fx et vindue eller en cirkulær bunddel), regner du hele arealet og trækker hullets areal fra. Tegn gerne stiplede hjælpelinjer på figuren og skriv målene på, inden du regner.",
      examples: [
        {
          title: "Grund: rektangel med halvcirkel for enden",
          task: "En grund er et rektangel på 20 m × 12 m med en halvcirkel for den ene ende (diameter 12 m). Find arealet.",
          steps: [
            { expression: "Rektanglet: 20 × 12 = 240 m²" },
            { expression: "Halvcirklens radius: r = 12 : 2 = 6 m" },
            { expression: "Hel cirkel: π × 6² = 3,1416 × 36 = 113,10 m²" },
            { expression: "Halvcirkel: 113,10 : 2 = 56,55 m²" },
            { expression: "I alt: 240 + 56,55 = 296,55 m²" },
          ],
          result: "Arealet er ca. 296,55 m²",
          check: "Halvcirklen fylder omtrent en fjerdedel af rektanglet — 56,55 mod 240. Rimeligt.",
        },
        {
          title: "Plade med hul i",
          task: "En kvadratisk plade på 30 cm × 30 cm har et cirkulært hul med radius 5 cm. Hvor meget metal er der tilbage?",
          steps: [
            { expression: "Hele pladen: 30 × 30 = 900 cm²" },
            { expression: "Hullet: π × 5² = 3,1416 × 25 = 78,54 cm²" },
            {
              expression: "900 − 78,54 = 821,46 cm²",
              explanation: "Ved huller trækker du fra i stedet for at lægge til.",
            },
          ],
          result: "Der er ca. 821,46 cm² metal tilbage",
          check: "Hullet fylder 78,54 : 900 ≈ 8,7 % af pladen, så der skal være godt 91 % tilbage. Passer.",
        },
      ],
    },
    {
      heading: "Baglæns og omregning af arealenheder",
      body:
        "Kender du arealet og mangler en side, sætter du ind i formlen og isolerer. Har en trekant arealet 48 cm² og grundlinjen 12 cm, giver A = (g × h) : 2 at 48 = (12 × h) : 2, altså 96 = 12 × h og h = 8 cm. Ved omregning af arealenheder ganger du med omregningstallet to gange, fordi arealet er længde gange længde: 1 m² = 100 cm × 100 cm = 10.000 cm², så 3 m² = 30.000 cm². På samme måde er 1 ha = 10.000 m², og 1 km² = 1.000.000 m².",
      examples: [
        {
          title: "Baglæns: rektangel med areal 96 m² og bredde 7,5 m",
          task: "Find den manglende side.",
          steps: [
            { expression: "A = l × b → 96 = l × 7,5" },
            { expression: "l = 96 : 7,5" },
            {
              expression: "Gang begge tal med 10: 960 : 75 = 12,8",
              explanation: "Så slipper du for at dividere med et decimaltal.",
            },
          ],
          result: "Længden er 12,8 m",
          check: "12,8 × 7,5 = 96. Passer.",
        },
        {
          title: "Omregning: 0,75 km² til m² og 4,5 m² til cm²",
          task: "Omregn arealenheder korrekt.",
          steps: [
            {
              expression: "1 km = 1.000 m → 1 km² = 1.000 × 1.000 = 1.000.000 m²",
              explanation: "Ved areal ganges omregningstallet med sig selv.",
            },
            { expression: "0,75 km² = 0,75 × 1.000.000 = 750.000 m²" },
            { expression: "1 m = 100 cm → 1 m² = 100 × 100 = 10.000 cm²" },
            { expression: "4,5 m² = 4,5 × 10.000 = 45.000 cm²" },
          ],
          result: "0,75 km² = 750.000 m² og 4,5 m² = 45.000 cm²",
          check: "Fejlen er at gange med 1.000 og 100 i stedet — det giver 10 gange og 100 gange for lidt.",
        },
      ],
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
