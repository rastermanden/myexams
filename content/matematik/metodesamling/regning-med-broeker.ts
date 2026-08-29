import type { Topic } from "@/lib/types";
import { METODESAMLING_CREDIT } from "./credit";

export const regningMedBroeker: Topic = {
  slug: "regning-med-broeker",
  title: "Regning med brøker",
  summary:
    "Tæller og nævner som forholdet mellem to tal — forkortning, multiplikation, division med den omvendte brøk og fortegn.",
  credit: METODESAMLING_CREDIT,
  sections: [
    {
      heading: "2.1 Hvad er en brøk?",
      blocks: [
        { kind: "text", text: "En brøk består altid af en tæller og en nævner:" },
        { kind: "math", tex: "\\frac{\\text{tæller}}{\\text{nævner}}" },
        {
          kind: "text",
          text: "Det er egentlig et divisionsregnestykke, hvor man dividerer tæller med nævner, men typisk ikke ’udregner’, hvad divisionsstykket er, men bare lader tallene stå som de er.",
        },
        {
          kind: "text",
          text: "Man vil dog altid have en brøk til at være så ’forkortet’ som muligt.",
        },
        {
          kind: "figure",
          figure: {
            kind: "pies",
            pies: [
              { numerator: 2, denominator: 4, caption: "2/4" },
              { numerator: 1, denominator: 2, caption: "1/2" },
            ],
          },
          caption: "Den samme del af lagkagen — 2/4 er det samme som 1/2.",
        },
        {
          kind: "figure",
          figure: {
            kind: "pies",
            pies: [
              { numerator: 2, denominator: 8, caption: "2/8" },
              { numerator: 1, denominator: 4, caption: "1/4" },
            ],
          },
          caption: "På samme måde er 2/8 det samme som 1/4.",
        },
        {
          kind: "text",
          text: "En brøk er ’forholdet mellem to tal’ som viser ’hvor meget af lagkagen er skraveret’ hvor *den skraverede del* er **tæller** og *hele lagkagen* er **nævner**.",
        },
        {
          kind: "text",
          text: "Hvis man for eksempel skal udregne, hvad *forholdet* mellem **drenge** og **piger** i en familie er, kan man sige, at familien Jensen har",
        },
        { kind: "math", tex: "\\frac{3}{4}" },
        {
          kind: "text",
          text: "piger (tæller) ud af 4 personer (nævner), og i familien Münchow er der",
        },
        { kind: "math", tex: "\\frac{1}{4}" },
        { kind: "text", text: "piger." },
        {
          kind: "text",
          text: "Hvis man tæller familien Münchows hund Flicka med blandt pigerne i familien Münchow, får man",
        },
        { kind: "math", tex: "\\frac{2}{5}" },
        { kind: "text", text: "piger i familien Münchow." },
        {
          kind: "figure",
          figure: {
            kind: "pies",
            pies: [
              { numerator: 3, denominator: 4, caption: "3/4 = 75% piger" },
              { numerator: 1, denominator: 4, caption: "1/4 = 25% piger" },
              { numerator: 2, denominator: 5, caption: "2/5 = 40% piger" },
            ],
          },
        },
      ],
    },
    {
      heading: "2.2 Regneregler med brøker",
      blocks: [
        { kind: "text", text: "**Multiplikation med brøker**" },
        {
          kind: "text",
          text: "Når man ganger med brøker, ganger man altid **tæller med tæller** og **nævner med nævner**.",
        },
        { kind: "text", text: "*Eksempel 1: To brøker*" },
        {
          kind: "math",
          tex: "\\frac{3}{8} \\cdot \\frac{2}{7} = \\frac{3 \\cdot 2}{8 \\cdot 7} = \\frac{6}{56}",
        },
        { kind: "text", text: "*Eksempel 2: Brøk ganget med helt tal*" },
        { kind: "text", text: "Et helt tal kan skrives som en brøk med nævner 1:" },
        { kind: "math", tex: "8 = \\frac{8}{1}" },
        { kind: "text", text: "Derfor regnes der på samme måde:" },
        {
          kind: "math",
          tex: "8 \\cdot \\frac{3}{4} = \\frac{8}{1} \\cdot \\frac{3}{4} = \\frac{8 \\cdot 3}{1 \\cdot 4} = \\frac{24}{4} = 6",
        },
        { kind: "text", text: "**Division med brøker**" },
        {
          kind: "text",
          text: "Man dividerer en brøk med en anden brøk ved at **gange med den omvendte brøk**:",
        },
        { kind: "math", tex: "6 : \\frac{2}{3} = 6 \\cdot \\frac{3}{2}" },
        {
          kind: "math",
          tex: "6 \\cdot \\frac{3}{2} = \\frac{6}{1} \\cdot \\frac{3}{2} = \\frac{6 \\cdot 3}{1 \\cdot 2} = \\frac{18}{2} = 9",
        },
        { kind: "text", text: "**Fortegn i brøker**" },
        { kind: "text", text: "Et minus kan stå tre steder – det betyder det samme:" },
        {
          kind: "math",
          tex: "-\\frac{3}{4} = \\frac{-3}{4} = \\frac{3}{-4}",
        },
        { kind: "text", text: "To minusser giver plus:" },
        { kind: "math", tex: "\\frac{-6}{-2} = 3" },
        {
          kind: "list",
          title: "Opsummering",
          items: [
            "Alle tal kan skrives som brøker",
            "Et helt tal har altid nævner 1",
            "Division med en brøk er det samme som at gange med den omvendte",
            "Fortegn kan flyttes rundt uden at ændre værdien",
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad hedder de to dele af en brøk?",
      options: [
        { id: "a", text: "Tæller (øverst) og nævner (nederst)" },
        { id: "b", text: "Nævner (øverst) og tæller (nederst)" },
        { id: "c", text: "Faktor og produkt" },
        { id: "d", text: "Led og sum" },
      ],
      correctOptionId: "a",
      explanation:
        "Tælleren står over brøkstregen og er den skraverede del; nævneren står under og er hele lagkagen.",
    },
    {
      id: "q2",
      prompt: "Hvorfor er 2/8 det samme som 1/4?",
      options: [
        { id: "a", text: "Fordi 2 og 8 begge er lige tal" },
        { id: "b", text: "Fordi begge brøker dækker den samme del af lagkagen" },
        { id: "c", text: "Fordi man må lægge 2 til nævneren" },
        { id: "d", text: "Det er det ikke — 2/8 er større" },
      ],
      correctOptionId: "b",
      explanation:
        "Brøken er et forhold. Forkorter man 2/8 med 2, får man 1/4 — den skraverede del af kagen er præcis den samme.",
    },
    {
      id: "q3",
      prompt: "Hvad er 3/8 · 2/7?",
      options: [
        { id: "a", text: "5/15" },
        { id: "b", text: "6/56" },
        { id: "c", text: "21/16" },
        { id: "d", text: "6/15" },
      ],
      correctOptionId: "b",
      explanation: "Tæller gange tæller og nævner gange nævner: (3 · 2)/(8 · 7) = 6/56.",
    },
    {
      id: "q4",
      prompt: "Hvordan skrives det hele tal 8 som en brøk?",
      options: [
        { id: "a", text: "8/8" },
        { id: "b", text: "1/8" },
        { id: "c", text: "8/1" },
        { id: "d", text: "0/8" },
      ],
      correctOptionId: "c",
      explanation:
        "Et helt tal har altid nævner 1. Derfor kan man regne med det efter helt de samme regler som andre brøker.",
    },
    {
      id: "q5",
      prompt: "Hvad er 6 : 2/3?",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "9" },
        { id: "c", text: "12" },
        { id: "d", text: "3" },
      ],
      correctOptionId: "b",
      explanation:
        "Man ganger med den omvendte brøk: 6 · 3/2 = 18/2 = 9.",
    },
    {
      id: "q6",
      prompt: "Hvilket udtryk er IKKE det samme som −3/4?",
      options: [
        { id: "a", text: "(−3)/4" },
        { id: "b", text: "3/(−4)" },
        { id: "c", text: "(−3)/(−4)" },
        { id: "d", text: "−(3/4)" },
      ],
      correctOptionId: "c",
      explanation:
        "To minusser giver plus, så (−3)/(−4) er 3/4 — altså positiv. De øvrige tre er alle −3/4.",
    },
  ],
};
