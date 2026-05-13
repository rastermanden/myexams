import type { Topic } from "@/lib/types";

export const kombinatorik: Topic = {
  slug: "kombinatorik",
  title: "Kombinatorik",
  summary:
    "Lær at tælle med permutationer og kombinationer — og afgøre, hvornår rækkefølge betyder noget.",
  sections: [
    {
      heading: "Permutationer — rækkefølge tæller",
      body:
        "En permutation er en ordnet arrangering. Antal måder at arrangere n elementer: n! = n · (n−1) · ... · 2 · 1. Eksempel: 3 bøger i en hylde: 3! = 6 måder. Antal permutationer af r elementer valgt fra n: P(n,r) = n! / (n−r)!. Eksempel: P(5,2) = 5!/3! = 20.",
    },
    {
      heading: "Kombinationer — rækkefølge tæller ikke",
      body:
        "En kombination er en uordnet udvælgelse. Antallet af måder at vælge r elementer fra n (uden gentag, rækkefølge ligegyldig): C(n,r) = n! / (r! · (n−r)!), også skrevet 'n over r' eller nCr. Eksempel: C(5,2) = 10. C(n,r) er altid ≤ P(n,r).",
    },
    {
      heading: "Hvornår er det en kombination, hvornår en permutation?",
      body:
        "Spørgsmål som 'Hvad er sandsynligheden for at vinde i lotto?' bruger kombinationer (6 tal ud af 43 — rækkefølge er ligegyldig). Spørgsmål om 'den første-, anden- og tredjepræmievinder' bruger permutationer (rækkefølge tæller). Nøglespørgsmål: Spiller rækkefølgen en rolle?",
    },
    {
      heading: "Kombinatorik og sandsynlighed",
      body:
        "Med kombinatorik kan vi tælle gunstige og mulige udfald i komplekse situationer. Lotto 6/43: Antal måder at vælge 6 tal: C(43,6) = 6.096.454. P(jackpot) = 1 / 6.096.454 ≈ 0,000016 %. Håndkort i poker (5 af 52): C(52,5) = 2.598.960 mulige hænder.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er 4! (4 fakultet)?",
      options: [
        { id: "a", text: "8" },
        { id: "b", text: "16" },
        { id: "c", text: "24" },
        { id: "d", text: "48" },
      ],
      correctOptionId: "c",
      explanation: "4! = 4 · 3 · 2 · 1 = 24.",
    },
    {
      id: "q2",
      prompt: "Hvad er C(5, 2)?",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "10" },
        { id: "c", text: "20" },
        { id: "d", text: "25" },
      ],
      correctOptionId: "b",
      explanation: "C(5,2) = 5! / (2! · 3!) = 120 / (2 · 6) = 10.",
    },
    {
      id: "q3",
      prompt: "Du vælger 3 elever ud af 10 til et hold. Spiller rækkefølge nogen rolle?",
      options: [
        { id: "a", text: "Ja — brug permutationer" },
        { id: "b", text: "Nej — brug kombinationer" },
        { id: "c", text: "Det afhænger af eleven" },
        { id: "d", text: "Brug produktreglen" },
      ],
      correctOptionId: "b",
      explanation: "Et hold er en uordnet gruppe — brug kombinationer: C(10,3) = 120.",
    },
    {
      id: "q4",
      prompt: "P(5,3) = ?",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "20" },
        { id: "c", text: "60" },
        { id: "d", text: "120" },
      ],
      correctOptionId: "c",
      explanation: "P(5,3) = 5! / (5−3)! = 120/2 = 60.",
    },
    {
      id: "q5",
      prompt: "Hvad er 0! ?",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "Udefineret" },
        { id: "d", text: "∞" },
      ],
      correctOptionId: "b",
      explanation: "Per definition er 0! = 1.",
    },
    {
      id: "q6",
      prompt: "Tre venner arrangeres i en kø. Hvor mange ordninger er mulige?",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "6" },
        { id: "c", text: "9" },
        { id: "d", text: "12" },
      ],
      correctOptionId: "b",
      explanation: "3! = 6 mulige ordninger.",
    },
    {
      id: "q7",
      prompt: "C(n, 0) = ?",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "n" },
        { id: "c", text: "n!" },
        { id: "d", text: "1" },
      ],
      correctOptionId: "d",
      explanation: "C(n,0) = n! / (0! · n!) = 1 (der er kun én måde at vælge ingen elementer).",
    },
    {
      id: "q8",
      prompt: "Lotto: vælg 6 unikke tal fra 1 til 43. Hvor mange kombinationer er der?",
      options: [
        { id: "a", text: "Ca. 6.000" },
        { id: "b", text: "Ca. 60.000" },
        { id: "c", text: "Ca. 600.000" },
        { id: "d", text: "Ca. 6.000.000" },
      ],
      correctOptionId: "d",
      explanation: "C(43,6) = 6.096.454 ≈ 6 millioner kombinationer.",
    },
  ],
};
