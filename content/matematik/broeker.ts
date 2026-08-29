import type { Topic } from "@/lib/types";

export const broeker: Topic = {
  slug: "broeker",
  title: "Regneregler for brøker",
  summary:
    "Lær at lægge, trække, gange og dividere brøker — med masser af konkrete eksempler og nyttige huskeråd.",
  sections: [
    {
      heading: "Hvad er en brøk?",
      figure: {
        kind: "pies",
        pies: [{ numerator: 3, denominator: 4, caption: "3/4" }],
      },
      body:
        "En brøk er en måde at skrive en del af en helhed på. Brøken a/b består af en tæller (a) øverst og en nævner (b) nederst. Nævneren fortæller, hvor mange lige store dele helheden er delt i, og tælleren fortæller, hvor mange af de dele vi har. Eksempel: 3/4 betyder, at helheden er delt i 4 dele, og vi har 3 af dem. Brøken 1/2 svarer til en halv, 1/4 svarer til en kvart, og 2/3 svarer til to tredjedele.",
    },
    {
      heading: "Forkortelse og forlængelse",
      body:
        "Du kan gange eller dividere både tæller og nævner med det samme tal uden at ændre brøkens værdi. Det kaldes forlængelse (gange) eller forkortelse (dividere).\n\nForlængelse — eksempel: 1/2 = (1×3)/(2×3) = 3/6. Brøkerne 1/2 og 3/6 er ens.\n\nForkortelse — eksempel: 8/12. Både 8 og 12 kan divideres med 4: (8÷4)/(12÷4) = 2/3. Brøken 8/12 forkortes til 2/3.\n\nEn brøk er fuldt forkortet, når tæller og nævner ikke har nogen fælles faktor ud over 1. Det kaldes en uforkortelig brøk.",
    },
    {
      heading: "Addition og subtraktion af brøker",
      body:
        "For at lægge eller trække brøker skal de have samme nævner (fælles nævner). Har de allerede samme nævner, lægger eller trækker du bare tællerne:\n\n3/8 + 2/8 = (3+2)/8 = 5/8\n5/9 − 2/9 = (5−2)/9 = 3/9 = 1/3\n\nHar brøkerne forskellige nævnere, skal du først forlænge den ene (eller begge) så nævnerne bliver ens:\n\n1/4 + 1/2: forlæng 1/2 til 2/4 → 1/4 + 2/4 = 3/4\n\n2/3 + 1/4: mindste fælles nævner er 12 → 8/12 + 3/12 = 11/12\n\n3/5 − 1/3: mindste fælles nævner er 15 → 9/15 − 5/15 = 4/15",
    },
    {
      heading: "Multiplikation af brøker",
      body:
        "For at gange to brøker ganger du tæller med tæller og nævner med nævner — du behøver ikke fælles nævner:\n\n(a/b) × (c/d) = (a×c)/(b×d)\n\nEksempler:\n2/3 × 4/5 = (2×4)/(3×5) = 8/15\n\n1/2 × 3/4 = 3/8\n\n3/7 × 7/3 = 21/21 = 1  (gensidigt omvendte tal giver altid 1)\n\nTip: Kig efter, om du kan forkorte på tværs, før du ganger. Eksempel: (4/9) × (3/8) — 4 og 8 forkortes med 4 (→ 1 og 2), 3 og 9 forkortes med 3 (→ 1 og 3): (1/3) × (1/2) = 1/6.",
    },
    {
      heading: "Division af brøker",
      body:
        "At dividere med en brøk er det samme som at gange med den omvendte brøk (flip nævner og tæller på divisoren):\n\n(a/b) ÷ (c/d) = (a/b) × (d/c) = (a×d)/(b×c)\n\nEksempler:\n2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6\n\n3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2 = 1½\n\n5/6 ÷ 5/6 = 5/6 × 6/5 = 30/30 = 1  (enhver brøk divideret med sig selv giver 1)\n\nHusk: \"Vend og gang\" — vend divisorbrøken om, og gang i stedet for at dividere.",
    },
    {
      heading: "Blandede tal og omregning",
      body:
        "Et blandet tal som 2¾ består af et heltal (2) og en brøkdel (3/4). Du omregner til en uægte brøk ved at gange heltallet med nævneren og lægge tælleren til:\n\n2¾ = (2×4 + 3)/4 = 11/4\n\n3½ = (3×2 + 1)/2 = 7/2\n\nOmvendt — uægte brøk til blandet tal: 11/4 = 2 rest 3, altså 2¾.\n\nOmregning til decimaltal: del tæller med nævner:\n3/4 = 3÷4 = 0,75\n1/3 = 1÷3 ≈ 0,333…\n5/8 = 5÷8 = 0,625\n\nOmregning fra decimaltal til brøk: 0,6 = 6/10 = 3/5 (forkortet med 2).",
    },
    {
      heading: "Typiske faldgruber og gode råd",
      body:
        "• Forkert fælles nævner ved addition/subtraktion: Husk at forlænge tælleren i samme forhold som nævneren. Eksempel: 1/3 + 1/4 ≠ 2/7. Korrekt: 4/12 + 3/12 = 7/12.\n\n• Glemmer at forkorte svaret: Tjek altid om dit svar kan forkortes. 6/9 → 2/3.\n\n• Division: Mange glemmer at vende divisorbrøken om. Skriv altid \"vend og gang\" som hjælpetrin.\n\n• Negative brøker: −(3/4) = (−3)/4 = 3/(−4). Minustegnet kan placeres i tæller, nævner eller foran brøkstregen — det er det samme.\n\n• Gange med et heltal: 3 × (2/5) = (3×2)/5 = 6/5. Betragt heltallet som en brøk med nævner 1: 3/1 × 2/5 = 6/5.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er 1/4 + 1/2?",
      options: [
        { id: "a", text: "2/6" },
        { id: "b", text: "3/4" },
        { id: "c", text: "1/3" },
        { id: "d", text: "2/4" },
      ],
      correctOptionId: "b",
      explanation:
        "Forlæng 1/2 til 2/4 (gang tæller og nævner med 2). Derefter: 1/4 + 2/4 = 3/4.",
    },
    {
      id: "q2",
      prompt: "Hvad er 2/3 × 3/4?",
      options: [
        { id: "a", text: "6/12" },
        { id: "b", text: "5/7" },
        { id: "c", text: "1/2" },
        { id: "d", text: "8/9" },
      ],
      correctOptionId: "c",
      explanation:
        "2/3 × 3/4 = (2×3)/(3×4) = 6/12. Forkortet med 6 giver 1/2. Alternativt: forkort 2 og 4 med 2, og 3 og 3 med 3, inden du ganger: 1/1 × 1/2 = 1/2.",
    },
    {
      id: "q3",
      prompt: "Hvad er 3/4 ÷ 1/2?",
      options: [
        { id: "a", text: "3/8" },
        { id: "b", text: "3/2" },
        { id: "c", text: "6/4" },
        { id: "d", text: "1/6" },
      ],
      correctOptionId: "b",
      explanation:
        "Vend divisorbrøken om (1/2 → 2/1) og gang: 3/4 × 2/1 = 6/4 = 3/2. Svar: 3/2 (= 1½).",
    },
    {
      id: "q4",
      prompt: "Hvad er 5/6 − 1/4?",
      options: [
        { id: "a", text: "4/2" },
        { id: "b", text: "7/12" },
        { id: "c", text: "2/3" },
        { id: "d", text: "1/12" },
      ],
      correctOptionId: "b",
      explanation:
        "Mindste fælles nævner for 6 og 4 er 12. Forlæng: 10/12 − 3/12 = 7/12.",
    },
    {
      id: "q5",
      prompt: "Hvilken brøk svarer til det blandede tal 2¾?",
      options: [
        { id: "a", text: "6/4" },
        { id: "b", text: "9/4" },
        { id: "c", text: "11/4" },
        { id: "d", text: "8/4" },
      ],
      correctOptionId: "c",
      explanation:
        "2¾ = (2×4 + 3)/4 = (8+3)/4 = 11/4.",
    },
    {
      id: "q6",
      prompt: "Hvad er 8/12 i fuldt forkortet form?",
      options: [
        { id: "a", text: "4/6" },
        { id: "b", text: "2/3" },
        { id: "c", text: "3/4" },
        { id: "d", text: "1/2" },
      ],
      correctOptionId: "b",
      explanation:
        "8 og 12 har den største fælles divisor 4. 8÷4 = 2 og 12÷4 = 3, så 8/12 = 2/3.",
    },
  ],
};
