import type { Topic } from "@/lib/types";
import { METODESAMLING_CREDIT } from "./credit";

export const regningIHaanden: Topic = {
  slug: "regning-i-haanden-med-flercifrede-tal",
  title: "Regning i hånden med flercifrede tal",
  summary:
    "De fire regnearters opstillinger: mente ved plus, lån ved minus, pladsværdi-gitteret ved gange og slikkepindsmetoden ved division.",
  credit: METODESAMLING_CREDIT,
  sections: [
    {
      heading: "1 Regning i hånden med flercifrede tal",
      blocks: [
        {
          kind: "text",
          text: "Når man regner i hånden med større tal, er det vigtigt at have styr på hvordan man:",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "**Stiller regnestykket op**",
            "**Skridt for skridt gennemfører regnestykket**.",
          ],
        },
        {
          kind: "text",
          text: "De fire regnearter bruger *forskellige metoder*, fordi de fungerer forskelligt.",
        },
      ],
    },
    {
      heading: "1.1 Addition (plus) – med in mente",
      blocks: [
        {
          kind: "text",
          text: "**Stilles op:** Ved addition lægger man tal sammen ved at stille dem over hinanden hvor 1'ere, 10'ere og 100'ere osv... stilles sammen i samme kolonne.",
        },
        {
          kind: "figure",
          figure: {
            kind: "columns",
            rows: [
              { cells: [{ digit: "1" }, { digit: "2" }, { digit: "4" }] },
              {
                operator: "+",
                cells: [{ digit: "5" }, { digit: "6" }, { digit: "8" }],
                rule: "single",
              },
              { cells: [{}, {}, {}], rule: "double" },
            ],
          },
        },
        {
          kind: "text",
          text: "**Skridt for skridt:** man starter med at lægge kolonnen med 1'erne sammen (dvs man starter fra højre mod venstre) og derefter 10'erne osv.",
        },
        {
          kind: "text",
          text: "*In mente*: Hvis summen af tal i samme kolonne bliver 10 eller mere, skrives 1'eren i samme kolonne og 10'eren sættes *i mente* i kolonnen til venstre.",
        },
        {
          kind: "figure",
          figure: {
            kind: "columns",
            rows: [
              {
                cells: [{ digit: "1" }, { digit: "2", carry: "1" }, { digit: "4" }],
              },
              {
                operator: "+",
                cells: [{ digit: "5" }, { digit: "6" }, { digit: "8" }],
                rule: "single",
              },
              {
                cells: [{ digit: "6" }, { digit: "9" }, { digit: "2" }],
                rule: "double",
              },
            ],
          },
        },
        {
          kind: "list",
          title: "Her ses tydeligt:",
          items: [
            "1'ere, 10'ere og 100'ere (osv. for større tal) står sammen i kolonner.",
            "*i mente*-tallene er små og hævet over de cifre, de hører til",
            "dobbeltstregen markerer det endelige resultat",
          ],
        },
      ],
    },
    {
      heading: "1.2 Subtraktion (minus) – med lån",
      blocks: [
        {
          kind: "text",
          text: "Ved subtraktion trækker man også **ciffer for ciffer**, fra højre mod venstre.",
        },
        {
          kind: "text",
          text: "Hvis det nederste tal er større end det øverste, **låner man 1 tier** fra det øverste tal i kolonnen til venstre for kolonnen du udregner.",
        },
        { kind: "text", text: "**Eksempel (regnestykke):**" },
        { kind: "math", tex: "344 - 126" },
        { kind: "text", text: "**Opstilling**" },
        {
          kind: "figure",
          figure: {
            kind: "columns",
            rows: [
              { cells: [{ digit: "3" }, { digit: "4" }, { digit: "4" }] },
              {
                cells: [{ digit: "1" }, { digit: "2" }, { digit: "6" }],
                rule: "single",
              },
              { cells: [{}, {}, {}], rule: "double" },
            ],
          },
        },
        { kind: "text", text: "**Trin for trin med lån:**" },
        {
          kind: "figure",
          figure: {
            kind: "columns",
            rows: [
              {
                cells: [
                  { digit: "3" },
                  { digit: "4", carry: "3", struck: true },
                  { digit: "4", carry: "10" },
                ],
              },
              {
                cells: [{ digit: "1" }, { digit: "2" }, { digit: "6" }],
                rule: "single",
              },
              {
                cells: [{ digit: "2" }, { digit: "1" }, { digit: "8" }],
                rule: "double",
              },
            ],
          },
        },
        {
          kind: "list",
          title: "Når man låner:",
          items: [
            "Tallet, der lånes fra, streges over.",
            "Den lånte 10'er lægges til tallet i kolonnen til højre (fx 10 + 4 = 14).",
          ],
        },
      ],
    },
    {
      heading: "1.3 Multiplikation (gange)",
      blocks: [
        {
          kind: "text",
          text: "Når man ganger tal med flere cifre, kan man gøre udregningen nemmere ved først at **ombytte faktorerne**, så tallet med **færrest cifre står først**.",
        },
        {
          kind: "text",
          text: "Det ændrer ikke resultatet (faktorernes orden er ligegyldig i multiplikation), men gør metoden mere overskuelig, fordi man skal arbejde med færre deltrin.",
        },
        { kind: "math", tex: "123 \\cdot 12 \\quad \\Rightarrow \\quad 12 \\cdot 123" },
        {
          kind: "text",
          text: "Idéen er, at man **kun ganger med ét ciffer ad gangen** og hele tiden holder styr på, hvilke cifre der hører til 1'ere, 10'ere og 100'ere.",
        },
        {
          kind: "text",
          text: "Og HUSK, at når man ganger ind i det lange tal, så starter man fra højre fra 1'erne (I) og mod venstre til 10'ere (II) og 100'ere (III), som vist med de små romertal på pilene i illustrationen nedenfor.",
        },
        {
          kind: "figure",
          figure: {
            kind: "arrows",
            left: ["1", "2"],
            fromIndex: 1,
            operator: "×",
            right: [
              { text: "1", arrow: "III" },
              { text: "2", arrow: "II" },
              { text: "3", arrow: "I" },
            ],
          },
          caption: "2-tallet ganges ind i alle tre cifre — fra højre mod venstre.",
        },
        {
          kind: "figure",
          figure: {
            kind: "arrows",
            left: ["1", "2"],
            fromIndex: 0,
            operator: "×",
            right: [
              { text: "1", arrow: "III" },
              { text: "2", arrow: "II" },
              { text: "3", arrow: "I" },
            ],
          },
          caption: "Derefter gør 1-tallet (10'eren) det samme.",
        },
        { kind: "text", text: "**Opstilling (skabelon med taleksempel 12 × 123):**" },
        {
          kind: "text",
          text: "Du opskriver gangestykket som nedenfor og husk, at du altid skal starte række 2 med at sætte et 0 helt til højre som vist nedenfor i skabelontabellen.",
        },
        {
          kind: "figure",
          figure: {
            kind: "grid",
            header: ["1", "2", "×", "1", "2", "3"],
            rows: [
              { cells: ["", "", "", "", "", ""] },
              { cells: ["", "", "", "", "", "0"], emphasis: [5], rule: "single" },
              { cells: ["", "", "", "", "", ""], rule: "double" },
            ],
          },
        },
        { kind: "text", text: "**Beregning (12 × 123):**" },
        {
          kind: "text",
          text: "Første trin: 2-tallet fra 12 ganges ind i 123, begyndende fra højre mod venstre.",
        },
        {
          kind: "figure",
          figure: {
            kind: "grid",
            header: ["1", "2", "×", "1", "2", "3"],
            rows: [
              { cells: ["", "", "", "2", "4", "6"] },
              { cells: ["", "", "", "", "", "0"], emphasis: [5], rule: "single" },
              { cells: ["", "", "", "", "", ""], rule: "double" },
            ],
          },
        },
        {
          kind: "text",
          text: "Andet trin: 1-tallet (10'eren) fra 12 ganges ind i 123, begyndende fra højre mod venstre, og skrives i række 2, som starter med **0**, fordi rækken repræsenterer 10'erne.",
        },
        {
          kind: "figure",
          figure: {
            kind: "grid",
            header: ["1", "2", "×", "1", "2", "3"],
            rows: [
              { cells: ["", "", "", "2", "4", "6"] },
              { cells: ["", "", "1", "2", "3", "0"], emphasis: [5], rule: "single" },
              { cells: ["", "", "1", "4", "7", "6"], rule: "double" },
            ],
          },
        },
        {
          kind: "text",
          text: "Når de to rækker er udregnet kan du lægge dem sammen og få resultatet på det samlede regnestykke, som i dette tilfælde er **1476**.",
        },
      ],
    },
    {
      heading: "1.4 Division",
      blocks: [
        {
          kind: "text",
          text: "Ved division finder man ud af, **hvor mange gange et tal kan være i et andet**.",
        },
        {
          kind: "text",
          text: "Når tallene har flere cifre, kan det være svært at holde styr på, hvad der allerede er brugt, og hvad der stadig mangler at blive delt.",
        },
        {
          kind: "text",
          text: "Derfor bruger vi en fast opstilling, hvor man tydeligt kan se, hvordan hvert ciffer bliver behandlet, og hvordan eventuelle rester føres videre.",
        },
        {
          kind: "text",
          text: "I de næste eksempler bruges **slikkepindsmetoden**, som gør division med mange cifre mere overskuelig og viser hele udregningen visuelt.",
        },
        { kind: "text", text: "**Eksempel (regnestykke):**" },
        { kind: "math", tex: "635 \\div 4" },
        { kind: "text", text: "**Opstilling (tom slikkepind):**" },
        {
          kind: "figure",
          figure: {
            kind: "stick",
            divisor: "4",
            steps: [{ dividend: "6" }, { dividend: "3" }, { dividend: "5" }],
          },
        },
        { kind: "text", text: "**Trin for trin udregning:**" },
        {
          kind: "figure",
          figure: {
            kind: "stick",
            divisor: "4",
            steps: [
              {
                dividend: "6",
                quotient: "1",
                note: "(6 ÷ 4 = 1, rest 2 føres ned)",
              },
              {
                dividend: "23",
                carried: 1,
                quotient: "5",
                note: "(23 ÷ 4 = 5, rest 3 føres ned)",
              },
              {
                dividend: "35",
                carried: 1,
                quotient: "8",
                note: "(35 ÷ 4 = 8, rest 3 kan ikke deles videre)",
              },
            ],
            remainder: "3",
          },
        },
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvorfor stiller man tallene op i kolonner, når man lægger sammen i hånden?",
      options: [
        { id: "a", text: "For at spare plads på papiret" },
        { id: "b", text: "Så 1'ere står under 1'ere, 10'ere under 10'ere og så videre" },
        { id: "c", text: "Fordi man skal regne fra venstre mod højre" },
        { id: "d", text: "For at kunne undlade menten" },
      ],
      correctOptionId: "b",
      explanation:
        "Opstillingen holder pladsværdierne samlet, så hver kolonne kun indeholder cifre af samme størrelsesorden.",
    },
    {
      id: "q2",
      prompt: "Hvad sker der, når en kolonne i et plusstykke giver 10 eller mere?",
      options: [
        { id: "a", text: "Man skriver hele tallet i kolonnen" },
        { id: "b", text: "Man runder ned til nærmeste 10" },
        { id: "c", text: "1'eren skrives i kolonnen, og 10'eren sættes i mente til venstre" },
        { id: "d", text: "Man begynder forfra fra venstre" },
      ],
      correctOptionId: "c",
      explanation:
        "Kun 1'eren bliver stående i kolonnen. 10'eren hører til næste pladsværdi og flyttes derfor med i mente.",
    },
    {
      id: "q3",
      prompt: "I 344 − 126 kan 4 − 6 ikke lade sig gøre. Hvad gør man?",
      options: [
        { id: "a", text: "Låner 1 tier fra kolonnen til venstre, så der står 14 − 6" },
        { id: "b", text: "Bytter om på cifrene og regner 6 − 4" },
        { id: "c", text: "Skriver 0 og går videre" },
        { id: "d", text: "Trækker 6 fra kolonnen til venstre i stedet" },
      ],
      correctOptionId: "a",
      explanation:
        "Man låner en 10'er fra nabokolonnen. Tallet, der lånes fra, streges over, og de 10 lægges til: 10 + 4 = 14, og 14 − 6 = 8.",
    },
    {
      id: "q4",
      prompt: "Hvorfor bytter man om, så 123 · 12 skrives som 12 · 123?",
      options: [
        { id: "a", text: "Fordi resultatet bliver et andet og lettere tal" },
        { id: "b", text: "Fordi man ellers ikke må gange" },
        { id: "c", text: "Fordi det største tal altid skal stå først" },
        { id: "d", text: "Fordi man så kun skal gange med to cifre og får færre deltrin" },
      ],
      correctOptionId: "d",
      explanation:
        "Faktorernes orden ændrer ikke resultatet, men det tal med færrest cifre giver færrest rækker at regne og lægge sammen.",
    },
    {
      id: "q5",
      prompt: "Hvorfor starter række 2 i gange-opstillingen med et 0 yderst til højre?",
      options: [
        { id: "a", text: "Fordi rækken repræsenterer 10'erne" },
        { id: "b", text: "Fordi resultatet altid ender på 0" },
        { id: "c", text: "For at markere at rækken er tom" },
        { id: "d", text: "Fordi man ganger med 0 i første trin" },
      ],
      correctOptionId: "a",
      explanation:
        "Række 2 kommer fra 10'eren i 12. Nullet rykker hele rækken én plads til venstre, så pladsværdierne passer, når rækkerne lægges sammen.",
    },
    {
      id: "q6",
      prompt: "I 635 ÷ 4 giver første trin 6 ÷ 4 = 1. Hvad sker der med resten?",
      options: [
        { id: "a", text: "Resten kasseres" },
        { id: "b", text: "Resten 2 føres ned foran næste ciffer, så der regnes 23 ÷ 4" },
        { id: "c", text: "Resten lægges til svaret" },
        { id: "d", text: "Resten ganges med 4" },
      ],
      correctOptionId: "b",
      explanation:
        "Resten 2 føres ned og sættes foran næste ciffer 3. Derfor er næste trin 23 ÷ 4 = 5 med rest 3.",
    },
    {
      id: "q7",
      prompt: "Hvad bliver 635 ÷ 4 med slikkepindsmetoden?",
      options: [
        { id: "a", text: "158 med rest 3" },
        { id: "b", text: "158 med rest 1" },
        { id: "c", text: "159 med rest 2" },
        { id: "d", text: "157 med rest 3" },
      ],
      correctOptionId: "a",
      explanation:
        "Trinene giver 1, 5 og 8, og til sidst kan resten 3 ikke deles videre: 635 = 4 · 158 + 3.",
    },
  ],
};
