import type { Topic } from "@/lib/types";
import { BroekTraening } from "@/components/TjekUp8Demo";

export const broekRepetition: Topic = {
  slug: "broek-repetition",
  title: "Brøk",
  summary:
    "Repetition af brøker til tjek-up: forkorte og forlænge, fælles nævner, de fire regnearter med brøker, brøk af et antal og omregning til decimaltal og procent.",
  demoComponent: BroekTraening,
  sections: [
    {
      heading: "Hvad en brøk fortæller",
      figure: {
        kind: "pies",
        pies: [{ numerator: 3, denominator: 4, caption: "3/4" }],
      },
      body:
        "En brøk består af en tæller (tallet over stregen) og en nævner (tallet under stregen). Nævneren fortæller, hvor mange lige store dele helheden er delt i, og tælleren fortæller, hvor mange af dem du har. I 3/4 er helheden delt i 4 dele, og du har 3 af dem. Brøkstregen betyder samtidig „divideret med“: 3/4 er det samme som 3 : 4 = 0,75. Er tælleren mindre end nævneren, er brøken mindre end 1 (en ægte brøk). Er tælleren større, er brøken større end 1 (en uægte brøk), fx 7/4 = 1¾.",
    },
    {
      heading: "Forkorte og forlænge",
      figure: {
        kind: "pies",
        pies: [{ numerator: 6, denominator: 8, caption: "6/8" }, { numerator: 3, denominator: 4, caption: "3/4" }],
      },
      body:
        "Du må gange eller dividere både tæller og nævner med det samme tal — brøkens værdi ændrer sig ikke. Dividerer du, forkorter du: 18/24 = (18 : 6)/(24 : 6) = 3/4, fordi 6 er den største fælles divisor. Ganger du, forlænger du: 2/5 = (2 × 3)/(5 × 3) = 6/15. Til prøven skal du altid aflevere svaret fuldt forkortet, altså hvor tæller og nævner ikke længere har en fælles faktor. Det, du ikke må, er at lægge det samme tal til tæller og nævner — 3/4 er ikke det samme som 4/5.",
      examples: [
        {
          title: "Forkort 84/120 helt",
          task: "Find den fuldt forkortede brøk.",
          steps: [
            {
              expression: "84 = 2 × 2 × 3 × 7 og 120 = 2 × 2 × 2 × 3 × 5",
              explanation: "Primopdel begge tal for at se, hvad de har til fælles.",
            },
            {
              expression: "Fælles faktorer: 2 × 2 × 3 = 12",
              explanation: "12 er den største fælles divisor.",
            },
            { expression: "84 : 12 = 7 og 120 : 12 = 10" },
            {
              expression: "Trinvis går det også: 84/120 = 42/60 = 21/30 = 7/10",
              explanation: "Forkort med 2, så med 2 igen, og til sidst med 3 — samme resultat.",
            },
          ],
          result: "84/120 = 7/10",
          check: "7 og 10 har ingen fælles divisor ud over 1, så brøken er uforkortelig. Som decimaltal: 84 : 120 = 0,7 = 7 : 10.",
        },
        {
          title: "Forlæng 3/7, så nævneren bliver 42",
          task: "Skriv brøken med en bestemt nævner.",
          steps: [
            { expression: "42 : 7 = 6", explanation: "Nævneren skal ganges med 6." },
            {
              expression: "Tælleren ganges med det samme: 3 × 6 = 18",
              explanation: "Ganger du kun nævneren, ændrer du brøkens værdi.",
            },
          ],
          result: "3/7 = 18/42",
          check: "3 : 7 ≈ 0,4286 og 18 : 42 ≈ 0,4286 — samme tal.",
        },
      ],
    },
    {
      heading: "Fælles nævner: plus og minus",
      body:
        "Brøker kan kun lægges sammen eller trækkes fra hinanden, når de har samme nævner. Har de allerede det, regner du kun med tællerne: 3/8 + 2/8 = 5/8. Ellers finder du først en fælles nævner — helst den mindste. For 5 og 3 er den 15: 2/5 + 1/3 = 6/15 + 5/15 = 11/15. For 6 og 2 er den 6: 5/6 − 1/2 = 5/6 − 3/6 = 2/6 = 1/3. Husk at forlænge tælleren med det samme tal som nævneren, og at forkorte svaret til sidst.",
      examples: [
        {
          title: "5/12 + 7/18",
          task: "Læg to brøker sammen med forskellige nævnere.",
          steps: [
            {
              expression: "12 = 2 × 2 × 3 og 18 = 2 × 3 × 3",
              explanation: "Primopdel nævnerne for at finde den mindste fælles nævner.",
            },
            {
              expression: "MFN = 2 × 2 × 3 × 3 = 36",
              explanation: "Tag hver primfaktor med det højeste antal gange, den optræder.",
            },
            { expression: "5/12 = (5 × 3)/(12 × 3) = 15/36", explanation: "36 : 12 = 3, så forlæng med 3." },
            { expression: "7/18 = (7 × 2)/(18 × 2) = 14/36", explanation: "36 : 18 = 2, så forlæng med 2." },
            { expression: "15/36 + 14/36 = 29/36", explanation: "Nu regner du kun med tællerne." },
          ],
          result: "5/12 + 7/18 = 29/36",
          check: "29 er et primtal og går ikke op i 36, så brøken kan ikke forkortes. Overslag: 0,42 + 0,39 = 0,81, og 29 : 36 ≈ 0,806.",
        },
        {
          title: "3¼ − 5/6",
          task: "Træk en brøk fra et blandet tal.",
          steps: [
            { expression: "3¼ = (3 × 4 + 1)/4 = 13/4", explanation: "Lav først det blandede tal om til en uægte brøk." },
            { expression: "MFN for 4 og 6 er 12" },
            { expression: "13/4 = 39/12 (forlæng med 3) og 5/6 = 10/12 (forlæng med 2)" },
            { expression: "39/12 − 10/12 = 29/12" },
            { expression: "29/12 = 2 rest 5 = 2 5/12", explanation: "Skriv om til blandet tal, hvis opgaven beder om det." },
          ],
          result: "3¼ − 5/6 = 29/12 = 2 5/12",
          check: "Med decimaltal: 3,25 − 0,833 = 2,417, og 29 : 12 ≈ 2,417. Passer.",
        },
      ],
    },
    {
      heading: "Gange og dividere brøker",
      body:
        "At gange brøker er nemmere end at lægge dem sammen: tæller gange tæller, nævner gange nævner — ingen fælles nævner nødvendig. 3/8 × 4/9 = 12/72 = 1/6. Du må gerne forkorte på tværs, inden du ganger: 4 og 8 forkortes med 4, og 3 og 9 forkortes med 3, så du står med 1/2 × 1/3 = 1/6. At dividere med en brøk er det samme som at gange med den omvendte: „vend og gang“. 2/3 : 4/5 = 2/3 × 5/4 = 10/12 = 5/6. Ordet „af“ betyder gange: halvdelen af 2/3 er 1/2 × 2/3 = 1/3.",
      examples: [
        {
          title: "9/10 × 5/12 med forkortelse på tværs",
          task: "Gang to brøker, og forkort undervejs.",
          steps: [
            {
              expression: "5 og 10 forkortes med 5 → 9/2 × 1/12",
              explanation: "Du må forkorte en tæller mod en nævner, også på kryds mellem de to brøker.",
            },
            { expression: "9 og 12 forkortes med 3 → 3/2 × 1/4" },
            { expression: "Tæller: 3 × 1 = 3, nævner: 2 × 4 = 8" },
            {
              expression: "Uden forkortelse først: (9 × 5)/(10 × 12) = 45/120 = 3/8",
              explanation: "Samme svar — men med større tal undervejs.",
            },
          ],
          result: "9/10 × 5/12 = 3/8",
          check: "0,9 × 0,4167 ≈ 0,375, og 3 : 8 = 0,375. Passer.",
        },
        {
          title: "7/8 : 14/9 — vend og gang",
          task: "Divider en brøk med en brøk.",
          steps: [
            { expression: "Vend divisorbrøken: 14/9 → 9/14" },
            { expression: "7/8 : 14/9 = 7/8 × 9/14" },
            { expression: "7 og 14 forkortes med 7 → 1/8 × 9/2" },
            { expression: "Tæller: 1 × 9 = 9, nævner: 8 × 2 = 16" },
          ],
          result: "7/8 : 14/9 = 9/16",
          check: "0,875 : 1,5556 ≈ 0,5625, og 9 : 16 = 0,5625. Passer.",
        },
      ],
    },
    {
      heading: "Brøk af et antal",
      body:
        "Skal du finde 3/4 af 240, deler du først med nævneren og ganger så med tælleren: 240 : 4 = 60, og 60 × 3 = 180. Den fremgangsmåde virker altid, og den er nem at regne i hovedet, fordi du starter med den lille del. Omvendt: hvis 3/4 af et tal er 180, er en fjerdedel 60, og hele tallet er 4 × 60 = 240. Den type opgaver dukker tit op i prøveopgaver om rabatter, opskrifter og fordelinger.",
      examples: [
        {
          title: "5/8 af 344 kr",
          task: "Find en brøkdel af et beløb.",
          steps: [
            {
              expression: "En ottendedel: 344 : 8 = 43",
              explanation: "Del først med nævneren — så arbejder du med små tal.",
            },
            { expression: "Fem ottendedele: 43 × 5 = 215" },
            {
              expression: "Kontrol af de resterende 3/8: 43 × 3 = 129, og 215 + 129 = 344",
              explanation: "Delene skal tilsammen give hele beløbet.",
            },
          ],
          result: "5/8 af 344 kr = 215 kr",
          check: "5 : 8 = 0,625, og 0,625 × 344 = 215. Passer.",
        },
        {
          title: "Baglæns: 3/7 af et tal er 96",
          task: "Find det hele tal, når du kender en brøkdel af det.",
          steps: [
            {
              expression: "3 syvendedele er 96 → 1 syvendedel er 96 : 3 = 32",
              explanation: "Gå først ned til én del.",
            },
            { expression: "Hele tallet er 7 syvendedele: 32 × 7 = 224" },
          ],
          result: "Tallet er 224",
          check: "3/7 af 224: 224 : 7 = 32, og 32 × 3 = 96. Passer.",
        },
      ],
    },
    {
      heading: "Brøk, decimaltal og procent",
      body:
        "Brøk, decimaltal og procent er tre måder at skrive det samme tal på. Fra brøk til decimaltal dividerer du: 5/8 = 5 : 8 = 0,625. Fra decimaltal til procent ganger du med 100: 0,625 = 62,5 %. Nogle bør du kunne udenad: 1/2 = 0,5 = 50 %, 1/4 = 0,25 = 25 %, 3/4 = 0,75 = 75 %, 1/5 = 0,2 = 20 %, 1/8 = 0,125 = 12,5 % og 1/3 ≈ 0,333 ≈ 33,3 %. Omregningen er også den nemmeste måde at sammenligne brøker på: 2/3 ≈ 0,667 er større end 5/8 = 0,625.",
      examples: [
        {
          title: "7/16 som decimaltal og procent",
          task: "Omregn en brøk, der ikke er en af de kendte.",
          steps: [
            { expression: "Brøkstregen betyder divideret med: 7 : 16" },
            { expression: "16 går 0 gange op i 7 → sæt komma og hent et 0 ned: 70" },
            { expression: "16 × 4 = 64 → 70 − 64 = 6. Skriv 4 efter kommaet." },
            { expression: "Hent 0 ned → 60. 16 × 3 = 48 → rest 12. Skriv 3." },
            { expression: "Hent 0 ned → 120. 16 × 7 = 112 → rest 8. Skriv 7." },
            { expression: "Hent 0 ned → 80. 16 × 5 = 80 → rest 0. Skriv 5." },
            { expression: "Procent: 0,4375 × 100 = 43,75 %" },
          ],
          result: "7/16 = 0,4375 = 43,75 %",
          check: "7/16 ligger mellem 1/4 = 25 % og 1/2 = 50 %. Passer.",
        },
        {
          title: "0,36 som brøk og procent",
          task: "Gå den anden vej — fra decimaltal til brøk.",
          steps: [
            {
              expression: "0,36 har to decimaler → 0,36 = 36/100",
              explanation: "To decimaler betyder hundrededele.",
            },
            { expression: "Forkort med 4: 36 : 4 = 9 og 100 : 4 = 25" },
            { expression: "Procent: 0,36 × 100 = 36 %" },
          ],
          result: "0,36 = 9/25 = 36 %",
          check: "9 : 25 = 0,36. Passer.",
        },
      ],
    },
    {
      heading: "Blandede tal og typiske fejl",
      body:
        "Et blandet tal som 2¾ skrives om til en uægte brøk ved at gange heltallet med nævneren og lægge tælleren til: (2 × 4 + 3)/4 = 11/4. Den anden vej: 11/4 = 2 rest 3 = 2¾. De typiske fejl til prøven er: at lægge nævnerne sammen (1/3 + 1/4 er ikke 2/7, men 7/12), at glemme at forkorte svaret, at glemme at vende divisorbrøken om ved division, og at forveksle „større tæller“ med „større brøk“ — 3/4 er større end 5/8, selvom både tæller og nævner er mindre.",
      examples: [
        {
          title: "2 3/5 × 1 1/4",
          task: "Gang to blandede tal.",
          steps: [
            { expression: "2 3/5 = (2 × 5 + 3)/5 = 13/5", explanation: "Lav begge tal om til uægte brøker først." },
            { expression: "1 1/4 = (1 × 4 + 1)/4 = 5/4" },
            { expression: "13/5 × 5/4: forkort 5 mod 5 → 13/1 × 1/4" },
            { expression: "Tæller: 13 × 1 = 13, nævner: 1 × 4 = 4" },
            { expression: "13/4 = 3 rest 1 = 3¼" },
          ],
          result: "2 3/5 × 1 1/4 = 13/4 = 3¼",
          check: "Med decimaltal: 2,6 × 1,25 = 3,25, og 3¼ = 3,25. Passer.",
        },
        {
          title: "Fejlen 1/3 + 1/4 = 2/7",
          task: "Se, hvorfor man ikke må lægge nævnerne sammen.",
          steps: [
            {
              expression: "2/7 ≈ 0,286 — men 1/3 ≈ 0,333 alene er allerede større",
              explanation: "En sum kan ikke være mindre end det ene af de to tal, når begge er positive.",
            },
            { expression: "Korrekt: MFN for 3 og 4 er 12" },
            { expression: "1/3 = 4/12 og 1/4 = 3/12" },
            { expression: "4/12 + 3/12 = 7/12 ≈ 0,583" },
          ],
          result: "1/3 + 1/4 = 7/12",
          check: "0,333 + 0,25 = 0,583, og 7 : 12 ≈ 0,583. Passer.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er 2/5 + 1/3?",
      options: [
        { id: "a", text: "3/8" },
        { id: "b", text: "11/15" },
        { id: "c", text: "3/15" },
        { id: "d", text: "2/15" },
      ],
      correctOptionId: "b",
      explanation:
        "Mindste fælles nævner for 5 og 3 er 15. Forlæng: 2/5 = 6/15 og 1/3 = 5/15. Læg tællerne sammen: 6/15 + 5/15 = 11/15.",
    },
    {
      id: "q2",
      prompt: "Hvor meget er 3/4 af 240?",
      options: [
        { id: "a", text: "60" },
        { id: "b", text: "160" },
        { id: "c", text: "180" },
        { id: "d", text: "320" },
      ],
      correctOptionId: "c",
      explanation:
        "Del først med nævneren: 240 : 4 = 60. Gang så med tælleren: 60 × 3 = 180.",
    },
    {
      id: "q3",
      prompt: "Hvad er 5/6 − 1/2 fuldt forkortet?",
      options: [
        { id: "a", text: "1/3" },
        { id: "b", text: "2/6" },
        { id: "c", text: "4/4" },
        { id: "d", text: "1/2" },
      ],
      correctOptionId: "a",
      explanation:
        "Fælles nævner 6: 5/6 − 3/6 = 2/6. Forkort med 2: 2/6 = 1/3.",
    },
    {
      id: "q4",
      prompt: "Hvad er 3/8 × 4/9?",
      options: [
        { id: "a", text: "7/17" },
        { id: "b", text: "12/17" },
        { id: "c", text: "1/6" },
        { id: "d", text: "27/32" },
      ],
      correctOptionId: "c",
      explanation:
        "Tæller gange tæller og nævner gange nævner: (3 × 4)/(8 × 9) = 12/72 = 1/6. Du kan også forkorte på tværs først: 1/2 × 1/3 = 1/6.",
    },
    {
      id: "q5",
      prompt: "Hvad er 2/3 : 4/5?",
      options: [
        { id: "a", text: "8/15" },
        { id: "b", text: "5/6" },
        { id: "c", text: "6/5" },
        { id: "d", text: "2/5" },
      ],
      correctOptionId: "b",
      explanation:
        "Vend og gang: 2/3 × 5/4 = 10/12. Forkort med 2: 5/6.",
    },
    {
      id: "q6",
      prompt: "Hvad er 18/24 fuldt forkortet?",
      options: [
        { id: "a", text: "9/12" },
        { id: "b", text: "6/8" },
        { id: "c", text: "3/4" },
        { id: "d", text: "2/3" },
      ],
      correctOptionId: "c",
      explanation:
        "Største fælles divisor for 18 og 24 er 6: 18 : 6 = 3 og 24 : 6 = 4, altså 3/4. (9/12 og 6/8 er rigtige værdier, men ikke fuldt forkortede.)",
    },
    {
      id: "q7",
      prompt: "Hvad er 5/8 skrevet som decimaltal og som procent?",
      options: [
        { id: "a", text: "0,58 og 58 %" },
        { id: "b", text: "0,625 og 62,5 %" },
        { id: "c", text: "1,6 og 160 %" },
        { id: "d", text: "0,8 og 80 %" },
      ],
      correctOptionId: "b",
      explanation:
        "Brøkstregen betyder divideret med: 5 : 8 = 0,625. Gang med 100 for at få procent: 62,5 %.",
    },
    {
      id: "q8",
      prompt: "Hvilken af brøkerne er størst?",
      options: [
        { id: "a", text: "3/5" },
        { id: "b", text: "7/12" },
        { id: "c", text: "5/8" },
        { id: "d", text: "2/3" },
      ],
      correctOptionId: "d",
      explanation:
        "Omregn til decimaltal: 3/5 = 0,6, 7/12 ≈ 0,583, 5/8 = 0,625 og 2/3 ≈ 0,667. Den største er 2/3.",
    },
  ],
};
