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
    },
    {
      heading: "Skriftlig subtraktion — husk lånet",
      body:
        "Skriv det største tal øverst, og træk fra søjle for søjle fra højre. Er cifret øverst mindre end cifret nedenunder, låner du 10 fra søjlen til venstre, som så bliver 1 mindre. Eksempel: 502 − 168. Enere: 2 − 8 går ikke, så lån: 12 − 8 = 4. Tieren var 0, så den låner videre fra hundrederne. Tiere: 9 − 6 = 3. Hundreder: 4 − 1 = 3. Svar: 334. Tjek altid ved at lægge sammen igen: 334 + 168 = 502.",
    },
    {
      heading: "Multiplikation — del tallet op",
      body:
        "Ganger du med et etcifret tal, kan du dele det store tal op i tiere og enere: 47 × 6 = 40 × 6 + 7 × 6 = 240 + 42 = 282. Ganger du to tocifrede tal, gør du det samme med det bageste tal: 34 × 26 = 34 × 6 + 34 × 20 = 204 + 680 = 884. I den skriftlige opstilling svarer det til, at du først ganger med enerne, så med tierne (og husker at rykke en søjle til venstre), og til sidst lægger delresultaterne sammen. Overslag: 34 × 26 er cirka 30 × 25 = 750, så 884 er plausibelt.",
    },
    {
      heading: "Division — lang division og rest",
      body:
        "Ved lang division arbejder du fra venstre mod højre. Du spørger hele tiden: hvor mange gange går divisoren op i tallet? Derefter ganger du op, trækker fra og henter næste ciffer ned. Eksempel: 187 : 11. 11 går 1 gang op i 18 (11), rest 7. Hent 7 ned: 77. 11 går 7 gange op i 77, rest 0. Svar: 17. Går divisionen ikke op, kan du enten skrive resten (fx 95 : 4 = 23 rest 3) eller sætte komma i svaret og hente nuller ned (95 : 4 = 23,75). Resten skal altid være mindre end det tal, du dividerer med. Tjek ved at gange tilbage: 17 × 11 = 187.",
    },
    {
      heading: "Decimaltal i de fire regnearter",
      body:
        "Plus og minus: sæt komma under komma, og fyld eventuelt op med nuller bagi, så tallene er lige lange — så regner du som med hele tal og sætter kommaet lige ned i svaret. Gange: se helt bort fra kommaerne, gang tallene, og sæt til sidst lige så mange decimaler i svaret, som de to tal har tilsammen. Eksempel: 2,5 × 0,4 → 25 × 4 = 100, og der skal være to decimaler: 1,00 = 1. Dividere: gør divisoren til et helt tal ved at gange begge tal med 10, 100 eller 1000. Eksempel: 4,8 : 0,6 = 48 : 6 = 8.",
    },
    {
      heading: "Regnehierarkiet",
      body:
        "Når flere regnearter optræder i samme udtryk, er rækkefølgen fast: først parenteser, så potenser og rødder, derefter gange og dividere (fra venstre mod højre) og til sidst plus og minus (fra venstre mod højre). Eksempel: 6 + 4 × 5 = 6 + 20 = 26 — ikke 50. Og 2 × (3 + 7) = 2 × 10 = 20. Regner du med negative tal, husk fortegnsreglerne: minus gange plus giver minus, og minus gange minus giver plus.",
    },
    {
      heading: "Overslag, tjek og typiske fejl",
      body:
        "Lav altid et overslag først med runde tal — så opdager du en faktor 10 galt med det samme. De typiske fejl er: at glemme menten i addition, at glemme lånet i subtraktion, at rykke forkert søjle ved multiplikation med tocifrede tal, at sætte kommaet forkert i et gangestykke med decimaltal, og at regne plus før gange. Tjek altid til sidst: læg sammen igen efter en subtraktion, og gang tilbage efter en division.",
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
