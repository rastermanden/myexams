import type { Topic } from "@/lib/types";
import { RegnearterTraening } from "@/components/TjekUp8Demo";

export const deFireRegnearter: Topic = {
  slug: "de-fire-regnearter",
  title: "De 4 regnearters algoritmer",
  summary:
    "Genopfriskning af skriftlig addition, subtraktion, multiplikation og division — med mente, lån, lang division, decimaltal og regnehierarki.",
  demoComponent: RegnearterTraening,
  sections: [
    {
      heading: "Det skal du kunne",
      body:
        "En algoritme er en fast opskrift, du kan følge hver gang — også når tallene bliver store. Til tjek-up skal du kunne regne de fire regnearter skriftligt, altså på papir uden lommeregner: plus (addition), minus (subtraktion), gange (multiplikation) og dividere (division). Du skal også kunne regne med decimaltal, kende regnehierarkiet og lave et overslag, så du opdager det, hvis svaret er helt skævt. Nøglen er, at du sætter tallene rigtigt op: enere under enere, tiere under tiere — og komma under komma, når der er decimaler.",
    },
    {
      heading: "Skriftlig addition — husk menten",
      body:
        "Skriv tallene under hinanden, så cifrene står i de rigtige søjler, og læg sammen fra højre mod venstre. Bliver en søjle 10 eller mere, skriver du kun det sidste ciffer og flytter 1 videre til næste søjle — det kaldes at have 1 i mente. Eksempel: 386 + 247. Enere: 6 + 7 = 13, skriv 3, husk 1 i mente. Tiere: 8 + 4 + 1 = 13, skriv 3, husk 1 i mente. Hundreder: 3 + 2 + 1 = 6. Svar: 633. Et hurtigt overslag (400 + 250 = 650) viser, at svaret er i den rigtige størrelsesorden.",
      examples: [
        {
          title: "4.678 + 2.945 med mente",
          task: "Læg de to tal sammen med den skriftlige algoritme.",
          steps: [
            {
              expression: "  4678\n+ 2945",
              explanation:
                "Sæt tallene under hinanden, så enere står under enere, tiere under tiere og så videre.",
            },
            {
              expression: "Enere: 8 + 5 = 13 → skriv 3, 1 i mente",
              explanation: "13 er 1 tier og 3 enere. Tieren flyttes videre til næste søjle.",
            },
            {
              expression: "Tiere: 7 + 4 = 11, plus mente 1 = 12 → skriv 2, 1 i mente",
              explanation: "Husk altid at lægge menten til, før du skriver cifret ned.",
            },
            {
              expression: "Hundreder: 6 + 9 = 15, plus mente 1 = 16 → skriv 6, 1 i mente",
            },
            {
              expression: "Tusinder: 4 + 2 = 6, plus mente 1 = 7 → skriv 7",
            },
          ],
          result: "4.678 + 2.945 = 7.623",
          check: "Overslag: 4.700 + 2.900 = 7.600 — tæt på 7.623, så størrelsesordenen passer.",
        },
        {
          title: "Tre tal på én gang: 128 + 76 + 349",
          task: "Læg tre tal sammen i samme opstilling.",
          steps: [
            {
              expression: "Enere: 8 + 6 + 9 = 23 → skriv 3, 2 i mente",
              explanation: "Med tre tal kan menten sagtens blive større end 1.",
            },
            {
              expression: "Tiere: 2 + 7 + 4 = 13, plus mente 2 = 15 → skriv 5, 1 i mente",
            },
            {
              expression: "Hundreder: 1 + 0 + 3 = 4, plus mente 1 = 5 → skriv 5",
              explanation: "76 har ingen hundreder, så der regnes med 0.",
            },
          ],
          result: "128 + 76 + 349 = 553",
          check: "Kontroller ved at lægge sammen i en anden rækkefølge: 128 + 349 = 477, og 477 + 76 = 553.",
        },
      ],
    },
    {
      heading: "Skriftlig subtraktion — husk lånet",
      body:
        "Skriv det største tal øverst, og træk fra søjle for søjle fra højre. Er cifret øverst mindre end cifret nedenunder, låner du 10 fra søjlen til venstre, som så bliver 1 mindre. Eksempel: 502 − 168. Enere: 2 − 8 går ikke, så lån: 12 − 8 = 4. Tieren var 0, så den låner videre fra hundrederne. Tiere: 9 − 6 = 3. Hundreder: 4 − 1 = 3. Svar: 334. Tjek altid ved at lægge sammen igen: 334 + 168 = 502.",
      examples: [
        {
          title: "6.004 − 2.387 med lån gennem nuller",
          task: "Træk fra, når der står nuller i det øverste tal.",
          steps: [
            {
              expression: "  6004\n− 2387",
              explanation: "Det største tal står øverst, og enere står under enere.",
            },
            {
              expression: "Enere: 4 − 7 går ikke → lån fra venstre",
              explanation:
                "Tieren og hundrederen er 0, så lånet hentes helt fra tusinderne: 6.004 bliver til 5 tusinder, 9 hundreder, 9 tiere og 14 enere.",
            },
            { expression: "Enere: 14 − 7 = 7" },
            { expression: "Tiere: 9 − 8 = 1" },
            { expression: "Hundreder: 9 − 3 = 6" },
            { expression: "Tusinder: 5 − 2 = 3" },
          ],
          result: "6.004 − 2.387 = 3.617",
          check: "Læg sammen igen: 3.617 + 2.387 = 6.004. Passer.",
        },
        {
          title: "1.000 − 673",
          task: "Træk fra et rundt tal — den klassiske låne-opgave.",
          steps: [
            {
              expression: "1.000 skrives om til 0 tusinder, 9 hundreder, 9 tiere og 10 enere",
              explanation: "Lånet vandrer hele vejen fra tusinderne ned til enerne.",
            },
            { expression: "Enere: 10 − 3 = 7" },
            { expression: "Tiere: 9 − 7 = 2" },
            { expression: "Hundreder: 9 − 6 = 3" },
          ],
          result: "1.000 − 673 = 327",
          check: "327 + 673 = 1.000. Du kan også tælle op: fra 673 til 700 er 27, og fra 700 til 1.000 er 300 — i alt 327.",
        },
      ],
    },
    {
      heading: "Multiplikation — del tallet op",
      body:
        "Ganger du med et etcifret tal, kan du dele det store tal op i tiere og enere: 47 × 6 = 40 × 6 + 7 × 6 = 240 + 42 = 282. Ganger du to tocifrede tal, gør du det samme med det bageste tal: 34 × 26 = 34 × 6 + 34 × 20 = 204 + 680 = 884. I den skriftlige opstilling svarer det til, at du først ganger med enerne, så med tierne (og husker at rykke en søjle til venstre), og til sidst lægger delresultaterne sammen. Overslag: 34 × 26 er cirka 30 × 25 = 750, så 884 er plausibelt.",
      examples: [
        {
          title: "47 × 6 ved at dele tallet op",
          task: "Gang et tocifret tal med et etcifret tal.",
          steps: [
            { expression: "47 = 40 + 7", explanation: "Del tallet op i tiere og enere." },
            { expression: "40 × 6 = 240" },
            { expression: "7 × 6 = 42" },
            { expression: "240 + 42 = 282", explanation: "Læg delresultaterne sammen." },
          ],
          result: "47 × 6 = 282",
          check: "Overslag: 50 × 6 = 300, og 282 ligger lige under. Passer.",
        },
        {
          title: "236 × 34 i skriftlig opstilling",
          task: "Gang et trecifret tal med et tocifret tal.",
          steps: [
            {
              expression: "236 × 4 = 944",
              explanation:
                "Enere: 6 × 4 = 24 → skriv 4, 2 i mente. Tiere: 3 × 4 = 12 + 2 = 14 → skriv 4, 1 i mente. Hundreder: 2 × 4 = 8 + 1 = 9.",
            },
            {
              expression: "236 × 30 = 7.080",
              explanation:
                "Gang med 3 (236 × 3 = 708) og sæt et 0 bagpå, fordi du ganger med tiere. I opstillingen svarer det til at rykke en søjle til venstre.",
            },
            { expression: "944 + 7.080 = 8.024", explanation: "Læg de to delresultater sammen." },
          ],
          result: "236 × 34 = 8.024",
          check: "Overslag: 240 × 34 ≈ 8.160 — samme størrelsesorden som 8.024.",
        },
      ],
    },
    {
      heading: "Division — lang division og rest",
      body:
        "Ved lang division arbejder du fra venstre mod højre. Du spørger hele tiden: hvor mange gange går divisoren op i tallet? Derefter ganger du op, trækker fra og henter næste ciffer ned. Eksempel: 187 : 11. 11 går 1 gang op i 18 (11), rest 7. Hent 7 ned: 77. 11 går 7 gange op i 77, rest 0. Svar: 17. Går divisionen ikke op, kan du enten skrive resten (fx 95 : 4 = 23 rest 3) eller sætte komma i svaret og hente nuller ned (95 : 4 = 23,75). Resten skal altid være mindre end det tal, du dividerer med. Tjek ved at gange tilbage: 17 × 11 = 187.",
      examples: [
        {
          title: "8.024 : 34 med lang division",
          task: "Divider med et tocifret tal, trin for trin.",
          steps: [
            {
              expression: "34 går 0 gange op i 8 → tag to cifre: 80",
              explanation: "Når divisoren er større end første ciffer, tager du et ciffer mere med.",
            },
            {
              expression: "34 × 2 = 68 → 80 − 68 = 12. Skriv 2 i svaret.",
            },
            {
              expression: "Hent 2 ned → 122. 34 × 3 = 102 → 122 − 102 = 20. Skriv 3 i svaret.",
            },
            {
              expression: "Hent 4 ned → 204. 34 × 6 = 204 → 204 − 204 = 0. Skriv 6 i svaret.",
            },
          ],
          result: "8.024 : 34 = 236 (går op, ingen rest)",
          check: "Gang tilbage: 236 × 34 = 8.024. Passer.",
        },
        {
          title: "947 : 6 — først med rest, så som decimaltal",
          task: "Divider, når regnestykket ikke går op.",
          steps: [
            { expression: "6 går 1 gang op i 9 → 9 − 6 = 3. Skriv 1." },
            { expression: "Hent 4 ned → 34. 6 × 5 = 30 → 34 − 30 = 4. Skriv 5." },
            { expression: "Hent 7 ned → 47. 6 × 7 = 42 → 47 − 42 = 5. Skriv 7." },
            {
              expression: "Foreløbigt svar: 157 rest 5",
              explanation: "Resten 5 er mindre end divisoren 6 — sådan skal det være.",
            },
            {
              expression: "Sæt komma og hent et 0 ned → 50. 6 × 8 = 48 → rest 2. Skriv 8 efter kommaet.",
            },
            { expression: "Hent et 0 ned → 20. 6 × 3 = 18 → rest 2. Skriv 3." },
          ],
          result: "947 : 6 = 157 rest 5 = 157,83… (3-tallet gentager sig)",
          check: "157 × 6 + 5 = 942 + 5 = 947. Passer.",
        },
      ],
    },
    {
      heading: "Decimaltal i de fire regnearter",
      body:
        "Plus og minus: sæt komma under komma, og fyld eventuelt op med nuller bagi, så tallene er lige lange — så regner du som med hele tal og sætter kommaet lige ned i svaret. Gange: se helt bort fra kommaerne, gang tallene, og sæt til sidst lige så mange decimaler i svaret, som de to tal har tilsammen. Eksempel: 2,5 × 0,4 → 25 × 4 = 100, og der skal være to decimaler: 1,00 = 1. Dividere: gør divisoren til et helt tal ved at gange begge tal med 10, 100 eller 1000. Eksempel: 4,8 : 0,6 = 48 : 6 = 8.",
      examples: [
        {
          title: "12,45 + 7,8 — komma under komma",
          task: "Læg decimaltal sammen, når de har forskelligt antal decimaler.",
          steps: [
            {
              expression: "  12,45\n+  7,80",
              explanation: "Skriv 7,8 som 7,80, så begge tal har to decimaler. Værdien ændrer sig ikke.",
            },
            { expression: "Hundrededele: 5 + 0 = 5" },
            { expression: "Tiendedele: 4 + 8 = 12 → skriv 2, 1 i mente" },
            { expression: "Enere: 2 + 7 = 9, plus mente 1 = 10 → skriv 0, 1 i mente" },
            { expression: "Tiere: 1 + 0 = 1, plus mente 1 = 2" },
          ],
          result: "12,45 + 7,8 = 20,25",
          check: "Overslag: 12,5 + 8 = 20,5. Passer.",
        },
        {
          title: "3,4 × 2,5 — tæl decimalerne til sidst",
          task: "Gang to decimaltal.",
          steps: [
            { expression: "Se bort fra kommaerne: 34 × 25" },
            { expression: "34 × 5 = 170" },
            { expression: "34 × 20 = 680" },
            { expression: "170 + 680 = 850" },
            {
              expression: "3,4 har 1 decimal og 2,5 har 1 decimal → svaret skal have 2 decimaler: 8,50",
            },
          ],
          result: "3,4 × 2,5 = 8,5",
          check: "Overslag: 3,4 × 2,5 ligger mellem 3 × 2,5 = 7,5 og 4 × 2,5 = 10. Passer.",
        },
        {
          title: "12,6 : 0,4 — gør divisoren til et helt tal",
          task: "Divider med et decimaltal.",
          steps: [
            {
              expression: "Gang begge tal med 10: 12,6 : 0,4 = 126 : 4",
              explanation: "Forholdet mellem tallene ændrer sig ikke, når begge ganges med det samme.",
            },
            { expression: "4 går 3 gange op i 12 → rest 0. Skriv 3." },
            { expression: "Hent 6 ned → 6. 4 × 1 = 4 → rest 2. Skriv 1." },
            { expression: "Sæt komma, hent et 0 ned → 20. 4 × 5 = 20 → rest 0. Skriv 5." },
          ],
          result: "12,6 : 0,4 = 31,5",
          check: "Gang tilbage: 31,5 × 0,4 = 12,6. Passer.",
        },
      ],
    },
    {
      heading: "Regnehierarkiet",
      body:
        "Når flere regnearter optræder i samme udtryk, er rækkefølgen fast: først parenteser, så potenser og rødder, derefter gange og dividere (fra venstre mod højre) og til sidst plus og minus (fra venstre mod højre). Eksempel: 6 + 4 × 5 = 6 + 20 = 26 — ikke 50. Og 2 × (3 + 7) = 2 × 10 = 20. Regner du med negative tal, husk fortegnsreglerne: minus gange plus giver minus, og minus gange minus giver plus.",
      examples: [
        {
          title: "40 − 3 × (2 + 4) + 12 : 4",
          task: "Regn ud i den rigtige rækkefølge.",
          steps: [
            { expression: "Parentes først: 2 + 4 = 6 → 40 − 3 × 6 + 12 : 4" },
            { expression: "Gange: 3 × 6 = 18 → 40 − 18 + 12 : 4" },
            { expression: "Dividere: 12 : 4 = 3 → 40 − 18 + 3" },
            {
              expression: "Plus og minus fra venstre: 40 − 18 = 22, og 22 + 3 = 25",
              explanation: "Plus og minus har samme rang, så du regner dem fra venstre mod højre.",
            },
          ],
          result: "40 − 3 × (2 + 4) + 12 : 4 = 25",
          check: "Regner du bare fra venstre mod højre uden hierarki, får du 40 − 3 = 37, 37 × 6 = 222, 222 + 12 = 234 og 234 : 4 = 58,5 — et helt andet resultat. Rækkefølgen er altså ikke ligegyldig.",
        },
        {
          title: "2 + 3 × 4² med potens",
          task: "Husk, at potenser kommer før gange.",
          steps: [
            { expression: "Potens først: 4² = 4 × 4 = 16 → 2 + 3 × 16" },
            { expression: "Gange: 3 × 16 = 48 → 2 + 48" },
            { expression: "Plus: 2 + 48 = 50" },
          ],
          result: "2 + 3 × 4² = 50",
          check: "Regner du (3 × 4)² = 144, har du ganget før potensen — det er en af de hyppigste fejl.",
        },
      ],
    },
    {
      heading: "Overslag, tjek og typiske fejl",
      body:
        "Lav altid et overslag først med runde tal — så opdager du en faktor 10 galt med det samme. De typiske fejl er: at glemme menten i addition, at glemme lånet i subtraktion, at rykke forkert søjle ved multiplikation med tocifrede tal, at sætte kommaet forkert i et gangestykke med decimaltal, og at regne plus før gange. Tjek altid til sidst: læg sammen igen efter en subtraktion, og gang tilbage efter en division.",
      examples: [
        {
          title: "Overslag før udregning: 297 × 19",
          task: "Lav et overslag, og regn så præcist.",
          steps: [
            { expression: "Overslag: 300 × 20 = 6.000", explanation: "Rund op til nemme tal." },
            {
              expression: "Præcist: 297 × 20 = 5.940",
              explanation: "Gang først med det runde tal 20 — det er nemmere end 19.",
            },
            {
              expression: "Træk et 297 fra igen: 5.940 − 297 = 5.643",
              explanation: "19 er 20 − 1, så du har ganget én gang for meget.",
            },
          ],
          result: "297 × 19 = 5.643",
          check: "Overslaget var 6.000, og svaret 5.643 ligger lige under — netop hvad man skulle forvente.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er 386 + 247?",
      options: [
        { id: "a", text: "523" },
        { id: "b", text: "623" },
        { id: "c", text: "633" },
        { id: "d", text: "733" },
      ],
      correctOptionId: "c",
      explanation:
        "Enere: 6 + 7 = 13 (skriv 3, 1 i mente). Tiere: 8 + 4 + 1 = 13 (skriv 3, 1 i mente). Hundreder: 3 + 2 + 1 = 6. Svar: 633.",
    },
    {
      id: "q2",
      prompt: "Hvad er 502 − 168?",
      options: [
        { id: "a", text: "334" },
        { id: "b", text: "344" },
        { id: "c", text: "434" },
        { id: "d", text: "366" },
      ],
      correctOptionId: "a",
      explanation:
        "2 − 8 går ikke, så du låner: 12 − 8 = 4. Efter lånet: 9 − 6 = 3 i tierne og 4 − 1 = 3 i hundrederne. Svar: 334. Tjek: 334 + 168 = 502.",
    },
    {
      id: "q3",
      prompt: "Hvad er 34 × 26?",
      options: [
        { id: "a", text: "204" },
        { id: "b", text: "680" },
        { id: "c", text: "824" },
        { id: "d", text: "884" },
      ],
      correctOptionId: "d",
      explanation:
        "34 × 6 = 204 og 34 × 20 = 680. Læg delresultaterne sammen: 204 + 680 = 884.",
    },
    {
      id: "q4",
      prompt: "Hvad er 187 : 11?",
      options: [
        { id: "a", text: "16" },
        { id: "b", text: "17" },
        { id: "c", text: "18" },
        { id: "d", text: "17 rest 1" },
      ],
      correctOptionId: "b",
      explanation:
        "11 går 1 gang op i 18, rest 7. Hent 7 ned: 11 går 7 gange op i 77, rest 0. Svar: 17. Tjek: 17 × 11 = 187.",
    },
    {
      id: "q5",
      prompt: "Hvad er 6 + 4 × 5?",
      options: [
        { id: "a", text: "50" },
        { id: "b", text: "26" },
        { id: "c", text: "30" },
        { id: "d", text: "24" },
      ],
      correctOptionId: "b",
      explanation:
        "Gange før plus: 4 × 5 = 20, og derefter 6 + 20 = 26. Svaret 50 kommer af at regne 6 + 4 først — det er forkert rækkefølge.",
    },
    {
      id: "q6",
      prompt: "Hvad er 2,5 × 0,4?",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "0,1" },
        { id: "c", text: "1" },
        { id: "d", text: "0,01" },
      ],
      correctOptionId: "c",
      explanation:
        "Gang uden komma: 25 × 4 = 100. Tallene har tilsammen 2 decimaler, så svaret får 2 decimaler: 1,00 = 1.",
    },
    {
      id: "q7",
      prompt: "Hvad er 95 : 4 skrevet som decimaltal?",
      options: [
        { id: "a", text: "23,75" },
        { id: "b", text: "23,5" },
        { id: "c", text: "24,25" },
        { id: "d", text: "23 rest 4" },
      ],
      correctOptionId: "a",
      explanation:
        "4 går 23 gange op i 95, og der er rest 3. Sæt komma i svaret og hent nuller ned: 30 : 4 = 7 rest 2, og 20 : 4 = 5. Svar: 23,75. (En rest kan aldrig være lige så stor som divisoren.)",
    },
    {
      id: "q8",
      prompt: "Hvad er 4,8 : 0,6?",
      options: [
        { id: "a", text: "0,8" },
        { id: "b", text: "8" },
        { id: "c", text: "80" },
        { id: "d", text: "2,88" },
      ],
      correctOptionId: "b",
      explanation:
        "Gang begge tal med 10, så divisoren bliver et helt tal: 48 : 6 = 8. Forholdet mellem tallene ændrer sig ikke, når du ganger begge med 10.",
    },
  ],
};
