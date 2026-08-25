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
      body:
        "En brøk består af en tæller (tallet over stregen) og en nævner (tallet under stregen). Nævneren fortæller, hvor mange lige store dele helheden er delt i, og tælleren fortæller, hvor mange af dem du har. I 3/4 er helheden delt i 4 dele, og du har 3 af dem. Brøkstregen betyder samtidig „divideret med“: 3/4 er det samme som 3 : 4 = 0,75. Er tælleren mindre end nævneren, er brøken mindre end 1 (en ægte brøk). Er tælleren større, er brøken større end 1 (en uægte brøk), fx 7/4 = 1¾.",
    },
    {
      heading: "Forkorte og forlænge",
      body:
        "Du må gange eller dividere både tæller og nævner med det samme tal — brøkens værdi ændrer sig ikke. Dividerer du, forkorter du: 18/24 = (18 : 6)/(24 : 6) = 3/4, fordi 6 er den største fælles divisor. Ganger du, forlænger du: 2/5 = (2 × 3)/(5 × 3) = 6/15. Til prøven skal du altid aflevere svaret fuldt forkortet, altså hvor tæller og nævner ikke længere har en fælles faktor. Det, du ikke må, er at lægge det samme tal til tæller og nævner — 3/4 er ikke det samme som 4/5.",
    },
    {
      heading: "Fælles nævner: plus og minus",
      body:
        "Brøker kan kun lægges sammen eller trækkes fra hinanden, når de har samme nævner. Har de allerede det, regner du kun med tællerne: 3/8 + 2/8 = 5/8. Ellers finder du først en fælles nævner — helst den mindste. For 5 og 3 er den 15: 2/5 + 1/3 = 6/15 + 5/15 = 11/15. For 6 og 2 er den 6: 5/6 − 1/2 = 5/6 − 3/6 = 2/6 = 1/3. Husk at forlænge tælleren med det samme tal som nævneren, og at forkorte svaret til sidst.",
    },
    {
      heading: "Gange og dividere brøker",
      body:
        "At gange brøker er nemmere end at lægge dem sammen: tæller gange tæller, nævner gange nævner — ingen fælles nævner nødvendig. 3/8 × 4/9 = 12/72 = 1/6. Du må gerne forkorte på tværs, inden du ganger: 4 og 8 forkortes med 4, og 3 og 9 forkortes med 3, så du står med 1/2 × 1/3 = 1/6. At dividere med en brøk er det samme som at gange med den omvendte: „vend og gang“. 2/3 : 4/5 = 2/3 × 5/4 = 10/12 = 5/6. Ordet „af“ betyder gange: halvdelen af 2/3 er 1/2 × 2/3 = 1/3.",
    },
    {
      heading: "Brøk af et antal",
      body:
        "Skal du finde 3/4 af 240, deler du først med nævneren og ganger så med tælleren: 240 : 4 = 60, og 60 × 3 = 180. Den fremgangsmåde virker altid, og den er nem at regne i hovedet, fordi du starter med den lille del. Omvendt: hvis 3/4 af et tal er 180, er en fjerdedel 60, og hele tallet er 4 × 60 = 240. Den type opgaver dukker tit op i prøveopgaver om rabatter, opskrifter og fordelinger.",
    },
    {
      heading: "Brøk, decimaltal og procent",
      body:
        "Brøk, decimaltal og procent er tre måder at skrive det samme tal på. Fra brøk til decimaltal dividerer du: 5/8 = 5 : 8 = 0,625. Fra decimaltal til procent ganger du med 100: 0,625 = 62,5 %. Nogle bør du kunne udenad: 1/2 = 0,5 = 50 %, 1/4 = 0,25 = 25 %, 3/4 = 0,75 = 75 %, 1/5 = 0,2 = 20 %, 1/8 = 0,125 = 12,5 % og 1/3 ≈ 0,333 ≈ 33,3 %. Omregningen er også den nemmeste måde at sammenligne brøker på: 2/3 ≈ 0,667 er større end 5/8 = 0,625.",
    },
    {
      heading: "Blandede tal og typiske fejl",
      body:
        "Et blandet tal som 2¾ skrives om til en uægte brøk ved at gange heltallet med nævneren og lægge tælleren til: (2 × 4 + 3)/4 = 11/4. Den anden vej: 11/4 = 2 rest 3 = 2¾. De typiske fejl til prøven er: at lægge nævnerne sammen (1/3 + 1/4 er ikke 2/7, men 7/12), at glemme at forkorte svaret, at glemme at vende divisorbrøken om ved division, og at forveksle „større tæller“ med „større brøk“ — 3/4 er større end 5/8, selvom både tæller og nævner er mindre.",
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
