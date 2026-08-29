import type { Topic } from "@/lib/types";
import BroekPlusSammeNaevnerDemo from "@/components/BroekPlusSammeNaevnerDemo";
import { METODESAMLING_CREDIT } from "./credit";

export const regningMedBroeker: Topic = {
  slug: "regning-med-broeker",
  title: "Regning med brøker",
  summary:
    "Tæller og nævner som forholdet mellem to tal — forkortning, plus med samme nævner trin for trin, fællesnævner, multiplikation, division med den omvendte brøk og fortegn.",
  credit: METODESAMLING_CREDIT,
  demoComponent: BroekPlusSammeNaevnerDemo,
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
        { kind: "text", text: "**Plus og minus med brøker**" },
        {
          kind: "text",
          text: "Brøker kan kun lægges sammen eller trækkes fra hinanden, når de har **samme nævner**. Har de det, lægger man **tællerne** sammen (eller trækker dem fra hinanden) og lader **nævneren stå**.",
        },
        {
          kind: "math",
          tex: "\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c} \\qquad \\frac{a}{c} - \\frac{b}{c} = \\frac{a-b}{c}",
        },
        { kind: "text", text: "**Plus med samme nævner**" },
        {
          kind: "text",
          text: "Det er den letteste af de to slags plusstykker, og det er den, alle de andre ender med at blive lavet om til. Når nævnerne er ens, er stykkerne af kagen nemlig lige store — og lige store stykker kan tælles sammen ét for ét.",
        },
        {
          kind: "text",
          text: "Nævneren fortæller *hvor store* stykkerne er, ikke *hvor mange* man har. Derfor ændrer nævneren sig ikke, når man lægger sammen: to ottendedele plus tre ottendedele er fem ottendedele — stadig ottendedele.",
        },
        {
          kind: "list",
          ordered: true,
          title: "Sådan gør du",
          items: [
            "Tjek, at nævnerne er ens — ellers skal der først findes en fællesnævner",
            "Læg **tællerne** sammen: $a + b$",
            "Lad **nævneren** stå, som den er: $c$",
            "**Forkort** svaret til sidst, hvis tæller og nævner har en fælles divisor",
          ],
        },
        { kind: "text", text: "*Eksempel 1: Tællerne lægges sammen*" },
        {
          kind: "text",
          text: "Begge brøker har nævneren 8, så kagen er delt i 8 lige store stykker begge gange. Man har 3 stykker og får 2 mere:",
        },
        {
          kind: "math",
          tex: "\\frac{3}{8} + \\frac{2}{8} = \\frac{3+2}{8} = \\frac{5}{8}",
        },
        {
          kind: "figure",
          figure: {
            kind: "pies",
            pies: [
              { numerator: 3, denominator: 8, caption: "3/8" },
              { numerator: 2, denominator: 8, caption: "+ 2/8" },
              { numerator: 5, denominator: 8, caption: "= 5/8" },
            ],
          },
          caption: "Stykkerne er lige store, så man tæller bare stykkerne sammen. Kagen (nævneren) er stadig delt i 8.",
        },
        {
          kind: "text",
          text: "5 og 8 har ingen fælles divisor, så $\\frac{5}{8}$ er færdigt — der er ikke mere at forkorte.",
        },
        { kind: "text", text: "*Eksempel 2: Svaret kan forkortes*" },
        {
          kind: "text",
          text: "Selve sammenlægningen foregår på præcis samme måde. Til sidst kan både 4 og 6 divideres med 2, og så skal svaret forkortes:",
        },
        {
          kind: "math",
          tex: "\\frac{1}{6} + \\frac{3}{6} = \\frac{1+3}{6} = \\frac{4}{6} = \\frac{4 : 2}{6 : 2} = \\frac{2}{3}",
        },
        {
          kind: "figure",
          figure: {
            kind: "pies",
            pies: [
              { numerator: 1, denominator: 6, caption: "1/6" },
              { numerator: 3, denominator: 6, caption: "+ 3/6" },
              { numerator: 4, denominator: 6, caption: "= 4/6" },
              { numerator: 2, denominator: 3, caption: "= 2/3" },
            ],
          },
          caption: "4/6 og 2/3 er den samme del af kagen — den er bare skåret i færre og større stykker.",
        },
        { kind: "text", text: "*Eksempel 3: Svaret bliver større end 1*" },
        {
          kind: "text",
          text: "Tællerne kan godt blive større tilsammen end nævneren. Så er svaret en **uægte brøk**, altså mere end en hel kage. Reglen er den samme — tællerne lægges sammen, nævneren står stille:",
        },
        {
          kind: "math",
          tex: "\\frac{5}{7} + \\frac{4}{7} = \\frac{5+4}{7} = \\frac{9}{7} = 1\\frac{2}{7}",
        },
        {
          kind: "figure",
          figure: {
            kind: "pies",
            pies: [
              { numerator: 5, denominator: 7, caption: "5/7" },
              { numerator: 4, denominator: 7, caption: "+ 4/7" },
              { numerator: 7, denominator: 7, caption: "= 7/7 (en hel)" },
              { numerator: 2, denominator: 7, caption: "+ 2/7" },
            ],
          },
          caption: "9 syvendedele fylder en hel kage og 2 syvendedele mere.",
        },
        {
          kind: "list",
          title: "Pas på — plus med samme nævner",
          items: [
            "Nævneren lægges **aldrig** sammen: $\\frac{3}{8} + \\frac{2}{8}$ er $\\frac{5}{8}$, ikke $\\frac{5}{16}$",
            "Nævnerne skal være ens, *før* man lægger tællerne sammen",
            "Svaret forkortes til sidst — men først når tællerne er lagt sammen",
            "Er tælleren større end nævneren, er svaret bare større end 1; det er ikke en fejl",
          ],
        },
        { kind: "text", text: "*Eksempel 4: Minus med samme nævner*" },
        {
          kind: "math",
          tex: "\\frac{5}{9} - \\frac{2}{9} = \\frac{5-2}{9} = \\frac{3}{9} = \\frac{1}{3}",
        },
        {
          kind: "text",
          text: "Til sidst forkortes svaret: både 3 og 9 kan divideres med 3.",
        },
        { kind: "text", text: "**Forskellige nævnere — find en fællesnævner**" },
        {
          kind: "text",
          text: "Har brøkerne *ikke* samme nævner, skal man først **forlænge** dem, så nævnerne bliver ens. At forlænge er at gange **både tæller og nævner med det samme tal** — så ændrer brøkens værdi sig ikke, kun måden den er skrevet på.",
        },
        { kind: "text", text: "*Eksempel 5: Den ene nævner går op i den anden*" },
        {
          kind: "text",
          text: "Her er 4 allerede en fællesnævner, for $2 \\cdot 2 = 4$. Derfor forlænges kun den anden brøk med 2:",
        },
        {
          kind: "math",
          tex: "\\frac{1}{4} + \\frac{1}{2} = \\frac{1}{4} + \\frac{1 \\cdot 2}{2 \\cdot 2} = \\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}",
        },
        {
          kind: "figure",
          figure: {
            kind: "pies",
            pies: [
              { numerator: 1, denominator: 4, caption: "1/4" },
              { numerator: 2, denominator: 4, caption: "+ 1/2 = 2/4" },
              { numerator: 3, denominator: 4, caption: "= 3/4" },
            ],
          },
          caption: "En halv kage er det samme som to fjerdedele — så er stykkerne lige store, og de kan lægges sammen.",
        },
        { kind: "text", text: "*Eksempel 6: Gang nævnerne over kryds*" },
        {
          kind: "text",
          text: "Går den ene nævner ikke op i den anden, kan man altid gange nævnerne med hinanden. Hver brøk forlænges med den *andens* nævner:",
        },
        {
          kind: "math",
          tex: "\\frac{a}{b} + \\frac{c}{d} = \\frac{a \\cdot d}{b \\cdot d} + \\frac{c \\cdot b}{d \\cdot b} = \\frac{a \\cdot d + c \\cdot b}{b \\cdot d}",
        },
        {
          kind: "math",
          tex: "\\frac{2}{3} + \\frac{1}{4} = \\frac{2 \\cdot 4}{3 \\cdot 4} + \\frac{1 \\cdot 3}{4 \\cdot 3} = \\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}",
        },
        { kind: "text", text: "*Eksempel 7: Minus med forskellige nævnere*" },
        {
          kind: "math",
          tex: "\\frac{3}{5} - \\frac{1}{3} = \\frac{3 \\cdot 3}{5 \\cdot 3} - \\frac{1 \\cdot 5}{3 \\cdot 5} = \\frac{9}{15} - \\frac{5}{15} = \\frac{4}{15}",
        },
        { kind: "text", text: "*Eksempel 8: Helt tal plus brøk*" },
        {
          kind: "text",
          text: "Et helt tal skrives som en brøk med nævner 1 og forlænges op til den nævner, den anden brøk har:",
        },
        {
          kind: "math",
          tex: "2 + \\frac{3}{4} = \\frac{2}{1} + \\frac{3}{4} = \\frac{2 \\cdot 4}{1 \\cdot 4} + \\frac{3}{4} = \\frac{8}{4} + \\frac{3}{4} = \\frac{11}{4}",
        },
        {
          kind: "list",
          title: "Pas på",
          items: [
            "Nævnerne lægges **aldrig** sammen: $\\frac{1}{3} + \\frac{1}{4}$ er ikke $\\frac{2}{7}$, men $\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$",
            "Forlænger man nævneren med et tal, skal tælleren forlænges med det samme tal",
            "Ved minus trækkes hele den bagerste tæller fra — pas på fortegnet",
            "Svaret forkortes til sidst, hvis det kan lade sig gøre",
          ],
        },
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
            "Plus og minus kræver samme nævner — forlæng, indtil nævnerne er ens",
            "Ved plus og minus regnes der kun på tællerne; nævneren står stille",
            "Ved gange regnes der både på tæller og nævner — der skal ikke findes fællesnævner",
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
      id: "q7",
      prompt: "Hvad er 3/8 + 2/8?",
      options: [
        { id: "a", text: "5/16" },
        { id: "b", text: "5/8" },
        { id: "c", text: "6/8" },
        { id: "d", text: "5/64" },
      ],
      correctOptionId: "b",
      explanation:
        "Nævnerne er ens, så man lægger kun tællerne sammen og lader nævneren stå: (3 + 2)/8 = 5/8.",
    },
    {
      id: "q11",
      prompt: "Hvad er 1/6 + 3/6, når svaret skal forkortes helt?",
      options: [
        { id: "a", text: "4/12" },
        { id: "b", text: "4/6" },
        { id: "c", text: "2/3" },
        { id: "d", text: "1/2" },
      ],
      correctOptionId: "c",
      explanation:
        "Nævnerne er ens, så tællerne lægges sammen: (1 + 3)/6 = 4/6. Både 4 og 6 kan divideres med 2, så svaret forkortes til 2/3.",
    },
    {
      id: "q12",
      prompt: "Hvad er 5/7 + 4/7?",
      options: [
        { id: "a", text: "9/14" },
        { id: "b", text: "9/7" },
        { id: "c", text: "20/7" },
        { id: "d", text: "Det kan ikke lade sig gøre — svaret bliver over 1" },
      ],
      correctOptionId: "b",
      explanation:
        "Tællerne lægges sammen, og nævneren står stille: (5 + 4)/7 = 9/7. At tælleren er større end nævneren er helt i orden — svaret er en uægte brøk, altså 1 hel og 2/7.",
    },
    {
      id: "q8",
      prompt: "Hvad skal der ske, før man kan lægge 2/3 og 1/4 sammen?",
      options: [
        { id: "a", text: "Brøkerne skal forlænges, så de får samme nævner" },
        { id: "b", text: "Tæller og nævner skal lægges sammen hver for sig" },
        { id: "c", text: "Den bagerste brøk skal vendes om" },
        { id: "d", text: "Begge brøker skal forkortes" },
      ],
      correctOptionId: "a",
      explanation:
        "Plus og minus kræver samme nævner. Ganger man nævnerne over kryds, bliver fællesnævneren 12: 8/12 + 3/12 = 11/12. At vende den bagerste brøk om hører til division.",
    },
    {
      id: "q9",
      prompt: "Hvad er 3/5 − 1/3?",
      options: [
        { id: "a", text: "2/2" },
        { id: "b", text: "2/15" },
        { id: "c", text: "4/15" },
        { id: "d", text: "9/15" },
      ],
      correctOptionId: "c",
      explanation:
        "Fællesnævneren er 5 · 3 = 15. Forlæng begge brøker: 9/15 − 5/15 = 4/15.",
    },
    {
      id: "q10",
      prompt: "Hvorfor er 1/3 + 1/4 ikke lig med 2/7?",
      options: [
        { id: "a", text: "Fordi man skal gange nævnerne, ikke lægge dem sammen" },
        { id: "b", text: "Fordi nævneren fortæller, hvor mange dele kagen er delt i — den lægges aldrig sammen" },
        { id: "c", text: "Fordi 2/7 ikke er forkortet" },
        { id: "d", text: "Fordi tælleren også skulle have været 7" },
      ],
      correctOptionId: "b",
      explanation:
        "Nævneren siger, hvor store stykkerne er, og den lægges aldrig sammen. Man forlænger i stedet til samme nævner: 4/12 + 3/12 = 7/12.",
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
