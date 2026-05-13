import type { Topic } from "@/lib/types";

export const procentregning: Topic = {
  slug: "procentregning",
  title: "Procentregning",
  summary:
    "Lær at regne med procenter, procentvis ændring og sammenhængen mellem del, helhed og procent.",
  sections: [
    {
      heading: "Hvad er en procent?",
      body:
        "Procent betyder 'pr. hundrede'. 25 % svarer derfor til 25 ud af 100, altså 0,25 som decimaltal. Når du omregner mellem procent og decimaltal, dividerer du med 100 den ene vej og ganger med 100 den anden vej.",
    },
    {
      heading: "Tre klassiske procentopgaver",
      body:
        "I procentregning arbejder man ofte med tre størrelser: procent, del og helhed. Kender du to af dem, kan du finde den tredje: del = procent · helhed, procent = del / helhed, og helhed = del / procent. Husk at skrive procent som decimaltal i formlerne.",
    },
    {
      heading: "Procentvis stigning og fald",
      body:
        "Ved en procentvis ændring finder du først ændringen i kroner/enheder og dividerer med startværdien. Procentvis ændring = (ny værdi - gammel værdi) / gammel værdi · 100 %. En positiv værdi er stigning, og en negativ værdi er fald.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er 15 % skrevet som decimaltal?",
      options: [
        { id: "a", text: "0,15" },
        { id: "b", text: "1,5" },
        { id: "c", text: "15" },
        { id: "d", text: "0,015" },
      ],
      correctOptionId: "a",
      explanation:
        "15 % betyder 15 ud af 100. Derfor er 15 % = 15/100 = 0,15.",
    },
    {
      id: "q2",
      prompt: "En vare koster 400 kr. og stiger med 10 %. Hvad er den nye pris?",
      options: [
        { id: "a", text: "404 kr." },
        { id: "b", text: "420 kr." },
        { id: "c", text: "440 kr." },
        { id: "d", text: "480 kr." },
      ],
      correctOptionId: "c",
      explanation:
        "10 % af 400 kr. er 40 kr. Ny pris bliver derfor 400 + 40 = 440 kr.",
    },
    {
      id: "q3",
      prompt: "En elev svarer rigtigt på 18 ud af 24 opgaver. Hvor mange procent er det?",
      options: [
        { id: "a", text: "65 %" },
        { id: "b", text: "70 %" },
        { id: "c", text: "75 %" },
        { id: "d", text: "80 %" },
      ],
      correctOptionId: "c",
      explanation:
        "Procent = del / helhed = 18/24 = 0,75 = 75 %.",
    },
  ],
};
