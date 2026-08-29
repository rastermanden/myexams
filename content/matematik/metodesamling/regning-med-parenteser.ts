import type { Topic } from "@/lib/types";
import { METODESAMLING_CREDIT } from "./credit";

export const regningMedParenteser: Topic = {
  slug: "regning-med-parenteser",
  title: "Regning med parenteser",
  summary:
    "Parentesen som en lille opgave inde i opgaven — regnerækkefølge, at gange ind i alle led og hvad minus foran en parentes betyder.",
  credit: METODESAMLING_CREDIT,
  sections: [
    {
      heading: "3.1 Hvad betyder en parentes?",
      blocks: [
        {
          kind: "text",
          text: "En parentes bruges til at **samle noget, der skal regnes først**.",
        },
        {
          kind: "text",
          text: "Man kan tænke på parentesen som en “lille opgave inde i opgaven”.",
        },
        { kind: "text", text: "*Eksempel:*" },
        { kind: "math", tex: "2 \\cdot (3 + 4)" },
        { kind: "text", text: "Her betyder parentesen, at vi **først** skal regne:" },
        { kind: "math", tex: "3 + 4" },
        { kind: "text", text: "og **derefter** gange med 2." },
        { kind: "math", tex: "2 \\cdot (3 + 4) = 2 \\cdot 7 = 14" },
        {
          kind: "list",
          title: "Vigtigt:",
          items: ["Det, der står i parentes, regnes altid først"],
        },
      ],
    },
    {
      heading: "3.2 Regneregler (rækkefølge)",
      blocks: [
        {
          kind: "text",
          text: "Når der er parenteser, følger man denne rækkefølge:",
        },
        {
          kind: "list",
          ordered: true,
          items: ["Parenteser", "Gange og division", "Plus og minus"],
        },
        { kind: "text", text: "*Eksempel:*" },
        { kind: "math", tex: "5 + 2 \\cdot (3 + 1) = 5 + 2 \\cdot 4 = 5 + 8 = 13" },
      ],
    },
    {
      heading: "3.3 Parentes ændrer resultatet",
      blocks: [
        {
          kind: "text",
          text: "Parenteser er vigtige, fordi de kan ændre resultatet.",
        },
        { kind: "text", text: "**Uden parentes:**" },
        { kind: "math", tex: "2 \\cdot 3 + 4 = 6 + 4 = 10" },
        { kind: "text", text: "**Med parentes:**" },
        { kind: "math", tex: "2 \\cdot (3 + 4) = 2 \\cdot 7 = 14" },
        {
          kind: "list",
          title: "Konklusion:",
          items: [
            "Parenteser styrer, hvad der sker først",
            "Derfor kan de ændre hele resultatet",
          ],
        },
      ],
    },
    {
      heading: "3.4 At gange ind i en parentes",
      blocks: [
        {
          kind: "text",
          text: "Når man ganger et tal med en parentes, skal man gange med **alle led inde i parentesen**.",
        },
        {
          kind: "figure",
          figure: {
            kind: "arrows",
            left: ["a"],
            fromIndex: 0,
            operator: "·",
            italic: true,
            right: [
              { text: "(" },
              { text: "b", target: true },
              { text: "+" },
              { text: "c", target: true },
              { text: ")" },
            ],
          },
        },
        { kind: "text", text: "**Regel:**" },
        { kind: "math", tex: "a \\cdot (b + c) = a \\cdot b + a \\cdot c" },
        { kind: "text", text: "*Eksempel:*" },
        { kind: "math", tex: "3 \\cdot (2 + 5)" },
        { kind: "math", tex: "= 3 \\cdot 2 + 3 \\cdot 5" },
        { kind: "math", tex: "= 6 + 15 = 21" },
        {
          kind: "list",
          title: "Husk:",
          items: [
            "Man må ikke kun gange med det første tal",
            "Man skal gange med **alle** tal i parentesen",
          ],
        },
      ],
    },
    {
      heading: "3.5 Minus foran parentes",
      blocks: [
        {
          kind: "text",
          text: "Når der står minus foran en parentes, kan man tænke det som:",
        },
        { kind: "math", tex: "-(3 + 2) = (-1) \\cdot (3 + 2)" },
        {
          kind: "text",
          text: "Man ganger altså med $-1$ ind i alle led i parentesen:",
        },
        {
          kind: "figure",
          figure: {
            kind: "arrows",
            left: ["−1"],
            fromIndex: 0,
            operator: "·",
            right: [
              { text: "3", target: true },
              { text: "+" },
              { text: "2", target: true },
            ],
          },
        },
        { kind: "math", tex: "= -3 - 2 = -5" },
        { kind: "text", text: "*Eksempel:*" },
        { kind: "math", tex: "-(4 - 7) = (-1) \\cdot (4 - 7)" },
        { kind: "math", tex: "= -4 + 7 = 3" },
      ],
    },
    {
      heading: "3.6 Underforstået gange-tegn",
      blocks: [
        {
          kind: "text",
          text: "Når der står en parentes uden noget foran, er det det samme som:",
        },
        { kind: "math", tex: "(3 + 2) = 1 \\cdot (3 + 2)" },
        { kind: "text", text: "Når der står minus foran, er det:" },
        { kind: "math", tex: "-(3 + 2) = -1 \\cdot (3 + 2)" },
      ],
    },
    {
      heading: "3.7 Opsummering",
      blocks: [
        {
          kind: "list",
          items: [
            "Parenteser regnes altid først",
            "Gange udenfor parentes skal ganges ind i alle led",
            "En parentes uden fortegn betyder $1 \\cdot (\\ldots)$",
            "Et minus foran parentes betyder $-1 \\cdot (\\ldots)$",
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er 2 · (3 + 4)?",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "14" },
        { id: "c", text: "24" },
        { id: "d", text: "9" },
      ],
      correctOptionId: "b",
      explanation: "Parentesen regnes først: 3 + 4 = 7, og derefter 2 · 7 = 14.",
    },
    {
      id: "q2",
      prompt: "Hvad er den rigtige regnerækkefølge?",
      options: [
        { id: "a", text: "Plus og minus, så gange og division, så parenteser" },
        { id: "b", text: "Fra venstre mod højre uanset regnetegn" },
        { id: "c", text: "Parenteser, så gange og division, så plus og minus" },
        { id: "d", text: "Gange og division, så parenteser, så plus og minus" },
      ],
      correctOptionId: "c",
      explanation:
        "Parenteser først, derefter gange og division, og til sidst plus og minus.",
    },
    {
      id: "q3",
      prompt: "Hvad er 5 + 2 · (3 + 1)?",
      options: [
        { id: "a", text: "13" },
        { id: "b", text: "28" },
        { id: "c", text: "24" },
        { id: "d", text: "11" },
      ],
      correctOptionId: "a",
      explanation: "Parentesen først: 3 + 1 = 4. Så gange: 2 · 4 = 8. Til sidst 5 + 8 = 13.",
    },
    {
      id: "q4",
      prompt: "Hvad giver 3 · (2 + 5), når man ganger ind i parentesen?",
      options: [
        { id: "a", text: "3 · 2 + 5 = 11" },
        { id: "b", text: "3 · 2 + 3 · 5 = 21" },
        { id: "c", text: "3 + 2 · 3 + 5 = 14" },
        { id: "d", text: "3 · 2 · 5 = 30" },
      ],
      correctOptionId: "b",
      explanation:
        "Man skal gange med alle led i parentesen — ikke kun det første: 6 + 15 = 21.",
    },
    {
      id: "q5",
      prompt: "Hvad betyder minusset i −(4 − 7)?",
      options: [
        { id: "a", text: "At man ganger med −1 ind i alle led" },
        { id: "b", text: "At man kun skifter fortegn på det første led" },
        { id: "c", text: "At parentesen kan fjernes uden ændring" },
        { id: "d", text: "At man skal trække 1 fra" },
      ],
      correctOptionId: "a",
      explanation:
        "−(4 − 7) er (−1) · (4 − 7) = −4 + 7 = 3. Begge led skifter fortegn.",
    },
    {
      id: "q6",
      prompt: "Hvad står der underforstået foran en parentes uden fortegn, som i (3 + 2)?",
      options: [
        { id: "a", text: "0 ·" },
        { id: "b", text: "−1 ·" },
        { id: "c", text: "1 ·" },
        { id: "d", text: "Ingenting — parentesen betyder intet" },
      ],
      correctOptionId: "c",
      explanation:
        "Der står underforstået 1 · (3 + 2). Derfor ændrer parentesen ikke fortegnene, når der ikke står minus foran.",
    },
  ],
};
