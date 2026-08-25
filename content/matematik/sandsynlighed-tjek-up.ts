import type { Topic } from "@/lib/types";
import { SandsynlighedTraening } from "@/components/TjekUp8Demo";

export const sandsynlighedTjekUp: Topic = {
  slug: "sandsynlighed-tjek-up",
  title: "Sandsynlighed",
  summary:
    "Udfaldsrum, sandsynlighed som brøk og procent, komplement, tælletræer, uafhængige hændelser og træk med og uden tilbagelægning.",
  demoComponent: SandsynlighedTraening,
  sections: [
    {
      heading: "Udfaldsrum og sandsynlighed",
      body:
        "Et udfald er et muligt resultat af et forsøg, og udfaldsrummet er alle mulige udfald tilsammen. Kaster du en terning, er udfaldsrummet {1, 2, 3, 4, 5, 6} — seks udfald, som alle er lige sandsynlige. Når udfaldene er lige sandsynlige, er sandsynligheden for en hændelse A: P(A) = antal gunstige udfald divideret med antal mulige udfald. Sandsynligheden for at slå et lige tal er 3/6 = 1/2, fordi tre af de seks udfald (2, 4 og 6) er gunstige. En sandsynlighed ligger altid mellem 0 (umuligt) og 1 (sikkert), og summen af sandsynlighederne for alle udfald er 1.",
      examples: [
        {
          title: "To mønter — skriv hele udfaldsrummet op",
          task: "Hvad er sandsynligheden for præcis én plat, når du kaster to mønter?",
          steps: [
            {
              expression: "Udfaldsrum: {PP, PK, KP, KK}",
              explanation: "P = plat, K = krone. Første bogstav er mønt 1, andet bogstav er mønt 2.",
            },
            { expression: "Antal mulige udfald: 2 × 2 = 4" },
            {
              expression: "Gunstige udfald for præcis én plat: PK og KP → 2 stk.",
              explanation: "PP har to plat, og KK har ingen — de tæller ikke med.",
            },
            { expression: "P = 2/4 = 1/2 = 50 %" },
          ],
          result: "P(præcis én plat) = 1/2 = 50 %",
          check: "De fire udfald har sandsynlighederne 1/4 hver, og 1/4 + 1/4 + 1/4 + 1/4 = 1. Passer.",
        },
      ],
    },
    {
      heading: "Brøk, decimaltal og procent",
      body:
        "Du kan skrive en sandsynlighed på tre måder, og til prøven skal du kunne skifte mellem dem. En pose med 5 røde, 3 blå og 2 grønne kugler har 10 kugler i alt, så P(blå) = 3/10 = 0,3 = 30 %. Start altid med at tælle det samlede antal udfald — det er den fejl, der koster flest point. Forkort brøken til sidst, og skriv gerne både brøk og procent i dit svar, så det er tydeligt, at du har forstået sammenhængen.",
      examples: [
        {
          title: "Pose med 5 røde, 3 blå og 2 grønne kugler",
          task: "Skriv sandsynligheden for en blå på alle tre måder.",
          steps: [
            { expression: "Antal kugler i alt: 5 + 3 + 2 = 10", explanation: "Tæl altid det samlede antal først." },
            { expression: "Gunstige udfald (blå): 3" },
            { expression: "Som brøk: P(blå) = 3/10" },
            { expression: "Som decimaltal: 3 : 10 = 0,3" },
            { expression: "Som procent: 0,3 × 100 = 30 %" },
          ],
          result: "P(blå) = 3/10 = 0,3 = 30 %",
          check: "P(rød) = 5/10 = 50 % og P(grøn) = 2/10 = 20 %. Tilsammen 50 + 30 + 20 = 100 %. Passer.",
        },
      ],
    },
    {
      heading: "Komplementærhændelsen",
      body:
        "Komplementærhændelsen til A er „A sker ikke“, og de to sandsynligheder giver tilsammen 1: P(ikke A) = 1 − P(A). Har en pose 12 kugler, hvoraf 5 er røde, er P(rød) = 5/12 og P(ikke rød) = 1 − 5/12 = 7/12. Det er ofte en genvej: står der „mindst én“ i opgaven, er det næsten altid nemmere at regne sandsynligheden for „ingen“ og trække resultatet fra 1.",
      examples: [
        {
          title: "20 kugler, hvoraf 7 er gule",
          task: "Find sandsynligheden for ikke at trække en gul.",
          steps: [
            { expression: "P(gul) = 7/20 = 0,35 = 35 %" },
            {
              expression: "P(ikke gul) = 1 − 7/20",
              explanation: "1 skrives som 20/20, så brøkerne har samme nævner.",
            },
            { expression: "20/20 − 7/20 = 13/20" },
            { expression: "13 : 20 = 0,65 = 65 %" },
          ],
          result: "P(ikke gul) = 13/20 = 65 %",
          check: "35 % + 65 % = 100 %. En hændelse og dens komplement giver altid 1 tilsammen.",
        },
      ],
    },
    {
      heading: "Flere hændelser: tælletræ og produktreglen",
      body:
        "Når et forsøg består af flere trin, kan du tegne et tælletræ: en gren for hvert muligt udfald i hvert trin. Sandsynligheden for en bestemt vej gennem træet finder du ved at gange sandsynlighederne på grenene. Kaster du to terninger, er P(6 og 6) = 1/6 × 1/6 = 1/36, fordi kastene er uafhængige — det ene påvirker ikke det andet. Skal du finde sandsynligheden for flere forskellige veje, lægger du vejenes sandsynligheder sammen. Kort sagt: gang langs en gren, læg sammen på tværs af grene.",
      examples: [
        {
          title: "Sum 7 med to terninger",
          task: "Tæl de gunstige udfald systematisk.",
          steps: [
            {
              expression: "Antal mulige udfald: 6 × 6 = 36",
              explanation: "Hver terning har 6 udfald, og de kombineres frit.",
            },
            {
              expression: "Gunstige: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) → 6 stk.",
              explanation: "(1,6) og (6,1) er to forskellige udfald — terningerne kan kendes fra hinanden.",
            },
            { expression: "P(sum 7) = 6/36 = 1/6 ≈ 16,7 %" },
          ],
          result: "P(sum = 7) = 1/6",
          check: "Sum 7 er den hyppigste sum. Til sammenligning er P(sum = 2) kun 1/36, fordi kun (1,1) giver 2.",
        },
        {
          title: "Terning og mønt i samme forsøg",
          task: "Find sandsynligheden for en 6er OG krone.",
          steps: [
            { expression: "P(6er) = 1/6 og P(krone) = 1/2" },
            {
              expression: "Gang langs grenen i tælletræet: 1/6 × 1/2 = 1/12",
              explanation: "De to forsøg er uafhængige — mønten ved ikke, hvad terningen viste.",
            },
            { expression: "1 : 12 ≈ 0,083 = 8,3 %" },
            {
              expression: "Kontrol ved optælling: 6 × 2 = 12 mulige udfald, og kun ét er (6, krone)",
            },
          ],
          result: "P(6er og krone) = 1/12 ≈ 8,3 %",
          check: "Tælletræet har 12 grene i alt, som hver har sandsynligheden 1/12. Passer.",
        },
      ],
    },
    {
      heading: "Med og uden tilbagelægning",
      body:
        "Lægger du kuglen tilbage i posen efter første træk, er de to træk uafhængige, og sandsynligheden er den samme begge gange. Med 4 røde ud af 10 kugler er P(to røde) = 4/10 × 4/10 = 16/100 = 4/25. Lægger du den ikke tilbage, ændrer udfaldsrummet sig: efter en rød er der kun 3 røde tilbage og 9 kugler i alt, så P(to røde) = 4/10 × 3/9 = 12/90 = 2/15. Læg mærke til, at både tælleren og nævneren bliver mindre — det er den detalje, opgaverne tester.",
      examples: [
        {
          title: "Sokkeskuffen: 5 sorte og 7 hvide sokker",
          task: "Du tager to sokker uden at kigge og uden at lægge tilbage. Hvad er sandsynligheden for to sorte?",
          steps: [
            { expression: "I alt: 5 + 7 = 12 sokker" },
            { expression: "Første træk: P(sort) = 5/12" },
            {
              expression: "Andet træk: nu er der 4 sorte og 11 sokker tilbage → P = 4/11",
              explanation: "Både tælleren og nævneren bliver 1 mindre.",
            },
            { expression: "Gang langs grenen: 5/12 × 4/11 = 20/132" },
            { expression: "Forkort med 4: 20/132 = 5/33 ≈ 0,152 = 15,2 %" },
          ],
          result: "P(to sorte) = 5/33 ≈ 15,2 %",
          check: "Med tilbagelægning ville det være 5/12 × 5/12 = 25/144 ≈ 17,4 % — lidt større, fordi den første sorte sok så kommer tilbage i skuffen.",
        },
        {
          title: "Én sort og én hvid sok",
          task: "Samme skuffe — men nu i vilkårlig rækkefølge.",
          steps: [
            { expression: "Vej 1 (sort så hvid): 5/12 × 7/11 = 35/132" },
            { expression: "Vej 2 (hvid så sort): 7/12 × 5/11 = 35/132" },
            {
              expression: "Læg vejene sammen: 35/132 + 35/132 = 70/132",
              explanation: "Gang langs en gren, læg sammen på tværs af grene.",
            },
            { expression: "Forkort med 2: 70/132 = 35/66 ≈ 0,530 = 53,0 %" },
          ],
          result: "P(én af hver) = 35/66 ≈ 53 %",
          check: "De tre muligheder er to sorte (5/33 ≈ 15,2 %), to hvide (7/12 × 6/11 = 42/132 ≈ 31,8 %) og én af hver (53,0 %). 15,2 + 31,8 + 53,0 = 100 %. Passer.",
        },
      ],
    },
    {
      heading: "„Mindst én“ — regn modsat",
      body:
        "Sandsynligheden for at få mindst én 6'er i to terningkast kan regnes ved at tage det modsatte: P(ingen 6'er i ét kast) = 5/6, og i to kast 5/6 × 5/6 = 25/36. Derfor er P(mindst én 6'er) = 1 − 25/36 = 11/36 ≈ 30,6 %. Metoden virker, uanset hvor mange kast der er, mens den direkte optælling hurtigt bliver uoverskuelig. Husk at et terningkast ikke „husker“ de forrige kast: har du slået tre 6'ere i træk, er sandsynligheden for en 6'er i næste kast stadig 1/6.",
      examples: [
        {
          title: "Mindst én 6er i fire terningkast",
          task: "Regn modsat i stedet for at tælle alle muligheder.",
          steps: [
            { expression: "P(ingen 6er i ét kast) = 5/6", explanation: "Fem af de seks udfald er ikke en 6er." },
            {
              expression: "P(ingen 6er i fire kast) = (5/6)⁴ = 625/1296",
              explanation: "Mellemregning: 5⁴ = 625 og 6⁴ = 1.296.",
            },
            { expression: "625 : 1.296 ≈ 0,482" },
            { expression: "P(mindst én 6er) = 1 − 0,482 = 0,518 = 51,8 %" },
            { expression: "Som brøk: 1 − 625/1296 = 671/1296" },
          ],
          result: "P(mindst én 6er i 4 kast) = 671/1296 ≈ 51,8 %",
          check: "Fejlsvaret 4 × 1/6 = 66,7 % kommer af at lægge sandsynligheder sammen — det virker ikke, for så ville 6 kast give 100 %, og det er tydeligvis forkert.",
        },
      ],
    },
    {
      heading: "Teoretisk og statistisk sandsynlighed",
      body:
        "Den teoretiske sandsynlighed regner du dig frem til ud fra udfaldsrummet — fx 1/6 for en 6'er. Den statistiske (eksperimentelle) sandsynlighed måler du i et forsøg: kaster du terningen 60 gange og får 12 seksere, er den statistiske sandsynlighed 12/60 = 0,2 = 20 %. Jo flere gentagelser, jo tættere kommer den statistiske sandsynlighed typisk på den teoretiske — det kaldes de store tals lov. Bruger du et regneark eller en simulering, er det netop den sammenhæng, du undersøger.",
      examples: [
        {
          title: "200 kast med en tegnestift",
          task: "Tegnestiften lander 74 gange med spidsen opad. Hvad er den statistiske sandsynlighed?",
          steps: [
            {
              expression: "P = antal gunstige : antal forsøg = 74 : 200",
              explanation: "Her kan sandsynligheden ikke regnes teoretisk — tegnestiften er ikke symmetrisk.",
            },
            { expression: "74 : 200 = 0,37" },
            { expression: "0,37 × 100 = 37 %" },
            { expression: "Som forkortet brøk: 74/200 = 37/100" },
          ],
          result: "P(spids opad) ≈ 0,37 = 37 %",
          check: "Kaster du 200 gange mere og får omtrent samme andel, er 37 % et godt bud. Med kun 10 kast ville tallet svinge langt mere — det er de store tals lov.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Du kaster en terning. Hvad er sandsynligheden for at slå et lige tal?",
      options: [
        { id: "a", text: "1/6" },
        { id: "b", text: "1/3" },
        { id: "c", text: "1/2" },
        { id: "d", text: "2/3" },
      ],
      correctOptionId: "c",
      explanation:
        "De gunstige udfald er 2, 4 og 6 — altså 3 ud af 6 mulige. P = 3/6 = 1/2 = 50 %.",
    },
    {
      id: "q2",
      prompt: "En pose har 5 røde, 3 blå og 2 grønne kugler. Hvad er sandsynligheden for at trække en blå?",
      options: [
        { id: "a", text: "3/8" },
        { id: "b", text: "3/10 (30 %)" },
        { id: "c", text: "1/3" },
        { id: "d", text: "3/5" },
      ],
      correctOptionId: "b",
      explanation:
        "Der er 5 + 3 + 2 = 10 kugler i alt, og 3 af dem er blå: P = 3/10 = 0,3 = 30 %.",
    },
    {
      id: "q3",
      prompt: "En pose har 12 kugler, hvoraf 5 er røde. Hvad er sandsynligheden for IKKE at trække en rød?",
      options: [
        { id: "a", text: "5/12" },
        { id: "b", text: "1/12" },
        { id: "c", text: "7/12" },
        { id: "d", text: "5/7" },
      ],
      correctOptionId: "c",
      explanation:
        "Komplementreglen: P(ikke rød) = 1 − 5/12 = 7/12 ≈ 58,3 %.",
    },
    {
      id: "q4",
      prompt: "Du kaster to terninger. Hvad er sandsynligheden for to 6'ere?",
      options: [
        { id: "a", text: "1/12" },
        { id: "b", text: "1/36" },
        { id: "c", text: "1/6" },
        { id: "d", text: "2/6" },
      ],
      correctOptionId: "b",
      explanation:
        "Kastene er uafhængige, så du ganger: 1/6 × 1/6 = 1/36 ≈ 2,8 %.",
    },
    {
      id: "q5",
      prompt: "Du kaster en mønt tre gange. Hvad er sandsynligheden for plat alle tre gange?",
      options: [
        { id: "a", text: "1/2" },
        { id: "b", text: "1/6" },
        { id: "c", text: "1/8" },
        { id: "d", text: "3/8" },
      ],
      correctOptionId: "c",
      explanation:
        "1/2 × 1/2 × 1/2 = 1/8 = 12,5 %. Der er 2 × 2 × 2 = 8 mulige udfald, og kun ét af dem er plat-plat-plat.",
    },
    {
      id: "q6",
      prompt:
        "En pose har 4 røde og 6 blå kugler. Du trækker to kugler uden at lægge tilbage. Hvad er sandsynligheden for to røde?",
      options: [
        { id: "a", text: "4/25" },
        { id: "b", text: "2/15" },
        { id: "c", text: "2/5" },
        { id: "d", text: "1/5" },
      ],
      correctOptionId: "b",
      explanation:
        "Første træk: 4/10. Andet træk: nu er der 3 røde og 9 kugler tilbage, altså 3/9. P = 4/10 × 3/9 = 12/90 = 2/15.",
    },
    {
      id: "q7",
      prompt: "Du kaster en terning to gange. Hvad er sandsynligheden for mindst én 6'er?",
      options: [
        { id: "a", text: "1/36" },
        { id: "b", text: "1/3" },
        { id: "c", text: "11/36" },
        { id: "d", text: "25/36" },
      ],
      correctOptionId: "c",
      explanation:
        "Regn modsat: P(ingen 6'er) = 5/6 × 5/6 = 25/36. Derfor P(mindst én) = 1 − 25/36 = 11/36 ≈ 30,6 %.",
    },
    {
      id: "q8",
      prompt:
        "Du kaster en terning 60 gange og får 12 seksere. Hvad er den statistiske sandsynlighed for en 6'er i dit forsøg?",
      options: [
        { id: "a", text: "16,7 %" },
        { id: "b", text: "20 %" },
        { id: "c", text: "12 %" },
        { id: "d", text: "60 %" },
      ],
      correctOptionId: "b",
      explanation:
        "12 : 60 = 0,2 = 20 %. Den teoretiske sandsynlighed er 1/6 ≈ 16,7 % — jo flere kast, jo tættere kommer forsøget typisk på den.",
    },
  ],
};
