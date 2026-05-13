import type { Topic } from "@/lib/types";

export const deskriptivStatistik: Topic = {
  slug: "deskriptiv-statistik",
  title: "Deskriptiv statistik",
  summary:
    "Arbejd med data, hyppighedstabeller, centrale mål og diagrammer fra folkeskole til gymnasium.",
  sections: [
    {
      heading: "Dataindsamling og repræsentation",
      body:
        "Deskriptiv statistik starter med at indsamle data fra observationer, målinger eller spørgeskemaer. Data organiseres i tabeller med observation, hyppighed, frekvens og kumuleret frekvens, så du kan se både fordeling og udvikling i datasættet.",
    },
    {
      heading: "Statistiske nøgletal",
      body:
        "Centrale mål beskriver datasættets midte: middelværdi, median og typetal. Spredningsmål beskriver variation: kvartiler, kvartilafstand, variationsbredde, varians og standardafvigelse. Sammen bruges de til at sammenligne datasæt og vurdere, om data er samlet tæt eller spredt.",
    },
    {
      heading: "Diagrammer og tolkning",
      body:
        "Søjlediagram, cirkeldiagram, histogram, boksplot og sumkurve viser forskellige sider af data. Vælg diagramtype efter datatypen, og brug den til at fortolke tendenser, skævhed, outliers og forskelle mellem grupper. For grupperede observationer bruges klasseintervaller med tilhørende frekvenser.",
    },
    {
      heading: "Fra deskriptiv statistik til videre emner",
      body:
        "Når du kan beskrive data sikkert, kan du gå videre til mere specialiserede emner i samme kategori, fx risikoforhold (relativ risiko) og lineær regression/korrelation.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er forskellen på hyppighed og frekvens?",
      options: [
        { id: "a", text: "Ingen forskel – det er samme tal" },
        { id: "b", text: "Hyppighed er antal, frekvens er andel" },
        { id: "c", text: "Hyppighed er andel, frekvens er antal" },
        { id: "d", text: "Hyppighed bruges kun i histogrammer" },
      ],
      correctOptionId: "b",
      explanation:
        "Hyppighed er det faktiske antal observationer i en kategori, mens frekvens er andelen af hele datasættet.",
    },
    {
      id: "q2",
      prompt: "Hvilket mål påvirkes normalt mest af en ekstrem outlier?",
      options: [
        { id: "a", text: "Median" },
        { id: "b", text: "Typetal" },
        { id: "c", text: "Middelværdi" },
        { id: "d", text: "Nedre kvartil" },
      ],
      correctOptionId: "c",
      explanation:
        "Middelværdien bruger alle observationer direkte og flyttes derfor tydeligt af ekstreme værdier.",
    },
    {
      id: "q3",
      prompt: "Hvilket diagram er særligt velegnet til at vise kvartiler og outliers?",
      options: [
        { id: "a", text: "Cirkeldiagram" },
        { id: "b", text: "Boksplot" },
        { id: "c", text: "Søjlediagram" },
        { id: "d", text: "Pindediagram" },
      ],
      correctOptionId: "b",
      explanation:
        "Et boksplot viser median, kvartiler, kvartilafstand og kan markere outliers tydeligt.",
    },
    {
      id: "q4",
      prompt:
        "To klasser har samme middelværdi i en test. Hvilket ekstra mål er mest relevant for at sammenligne, hvor ens resultaterne er?",
      options: [
        { id: "a", text: "Variationsbredde eller standardafvigelse" },
        { id: "b", text: "Kun typetal" },
        { id: "c", text: "Kun antal observationer" },
        { id: "d", text: "Kun kumuleret frekvens ved sidste observation" },
      ],
      correctOptionId: "a",
      explanation:
        "Spredningsmål som variationsbredde og standardafvigelse viser, hvor tæt eller spredt resultaterne ligger omkring middelværdien.",
    },
  ],
};
