import type { Topic } from "@/lib/types";
import { METODESAMLING_CREDIT } from "./credit";

export const trigonometriMetode: Topic = {
  slug: "trigonometri-og-enhedscirklen",
  title: "Trigonometri og enhedscirklen",
  summary:
    "Sinus, cosinus og tangens som forholdet mellem siderne — og hvordan enhedscirklen gør dem til koordinater, så Pythagoras bliver til cos²(v) + sin²(v) = 1.",
  credit: METODESAMLING_CREDIT,
  sections: [
    {
      heading: "5 Trigonometri",
      blocks: [
        {
          kind: "text",
          text: "Trigonometri handler om sammenhængen mellem **vinkler og sidelængder i trekanter**.",
        },
        {
          kind: "text",
          text: "I en retvinklet trekant kaldes den længste side **hypotenusen**. De to andre sider kaldes **kateter**.",
        },
        { kind: "text", text: "Når man arbejder med en bestemt vinkel $v$, kaldes kateterne:" },
        {
          kind: "list",
          items: [
            "**Modstående katete**: siden overfor vinklen $v$.",
            "**Hosliggende katete**: siden ved siden af vinklen $v$.",
          ],
        },
        {
          kind: "figure",
          figure: {
            kind: "triangle",
            base: 4,
            height: 2.6,
            angleLabel: "v",
            adjacentLabel: "Hosliggende katete",
            oppositeLabel: "Modstående katete",
            hypotenuseLabel: "Hypotenusen",
          },
        },
      ],
    },
    {
      heading: "5.1 Sinus, cosinus og tangens",
      blocks: [
        {
          kind: "text",
          text: "Sinus, cosinus og tangens beskriver **forholdet mellem siderne** i en retvinklet trekant.",
        },
        { kind: "text", text: "**Regler:**" },
        {
          kind: "math",
          tex: "\\begin{aligned} \\sin(v) &= \\frac{\\text{modstående katete}}{\\text{hypotenusen}} \\\\[0.6em] \\cos(v) &= \\frac{\\text{hosliggende katete}}{\\text{hypotenusen}} \\\\[0.6em] \\tan(v) &= \\frac{\\text{modstående katete}}{\\text{hosliggende katete}} \\end{aligned}",
        },
        {
          kind: "text",
          text: "Det vigtige er altså, at sinus, cosinus og tangens beskriver **forholdet mellem siderne**.",
        },
        { kind: "text", text: "**Tre regneeksempler**" },
        {
          kind: "text",
          text: "Nedenfor ses tre retvinklede trekanter. Vi beregner $\\sin(v)$, $\\cos(v)$ og $\\tan(v)$ for vinklen $v$ i hver af dem.",
        },
        {
          kind: "figureRow",
          figures: [
            {
              kind: "triangle",
              base: 4,
              height: 3,
              size: 130,
              angleLabel: "v",
              adjacentLabel: "4",
              oppositeLabel: "3",
              hypotenuseLabel: "5",
              caption: "Trekant 1",
            },
            {
              kind: "triangle",
              base: 4,
              height: 3,
              size: 130,
              angleLabel: "v",
              adjacentLabel: "8",
              oppositeLabel: "6",
              hypotenuseLabel: "10",
              caption: "Trekant 2",
            },
            {
              kind: "triangle",
              base: 4,
              height: 3,
              size: 130,
              angleLabel: "v",
              adjacentLabel: "12",
              oppositeLabel: "9",
              hypotenuseLabel: "15",
              caption: "Trekant 3",
            },
          ],
        },
        { kind: "text", text: "**Trekant 1:**" },
        {
          kind: "math",
          tex: "\\sin(v) = \\frac{3}{5} = 0{,}6 \\qquad \\cos(v) = \\frac{4}{5} = 0{,}8 \\qquad \\tan(v) = \\frac{3}{4} = 0{,}75",
        },
        { kind: "text", text: "**Trekant 2:**" },
        {
          kind: "math",
          tex: "\\sin(v) = \\frac{6}{10} = \\frac{3}{5} = 0{,}6 \\qquad \\cos(v) = \\frac{8}{10} = \\frac{4}{5} = 0{,}8 \\qquad \\tan(v) = \\frac{6}{8} = \\frac{3}{4} = 0{,}75",
        },
        { kind: "text", text: "**Trekant 3:**" },
        {
          kind: "math",
          tex: "\\sin(v) = \\frac{9}{15} = \\frac{3}{5} = 0{,}6 \\qquad \\cos(v) = \\frac{12}{15} = \\frac{4}{5} = 0{,}8 \\qquad \\tan(v) = \\frac{9}{12} = \\frac{3}{4} = 0{,}75",
        },
        { kind: "text", text: "**Hvad opdager vi?**" },
        {
          kind: "text",
          text: "Selvom de tre trekanter har forskellige sidelængder, får vi **præcis de samme værdier** for sinus, cosinus og tangens:",
        },
        {
          kind: "math",
          tex: "\\sin(v) = 0{,}6 \\qquad \\cos(v) = 0{,}8 \\qquad \\tan(v) = 0{,}75",
        },
        {
          kind: "text",
          text: "Det skyldes, at forholdet mellem siderne er det samme i alle tre trekanter: Trekant 2 er blot dobbelt så stor som trekant 1, og trekant 3 er tre gange så stor som trekant 1.",
        },
        {
          kind: "text",
          text: "Selvom sidelængderne ændrer sig, ændrer **forholdet mellem siderne** sig altså ikke.",
        },
        {
          kind: "list",
          title: "Det betyder:",
          items: [
            "Sinus, cosinus og tangens afhænger af **vinklen**.",
            "De afhænger **ikke** af, hvor stor trekanten er.",
            "Hvis vinklen er den samme, er forholdet mellem siderne det samme.",
          ],
        },
      ],
    },
    {
      heading: "5.2 Enhedscirklen",
      blocks: [
        {
          kind: "text",
          text: "Når man skal beregne sidelængder og vinkler i forskellige trekanter, kan det være en fordel ikke at bekymre sig så meget om de konkrete længder, men i stedet se på **forholdet mellem dem**.",
        },
        {
          kind: "text",
          text: "Det er idéen bag **enhedscirklen**: Enhedscirklen er en cirkel med radius:",
        },
        { kind: "math", tex: "\\boxed{r = 1}" },
        {
          kind: "text",
          text: "Når man tegner en radius fra centrum til et punkt på cirklen og derefter tegner en lodret linje ned til den vandrette akse, dannes en retvinklet trekant.",
        },
        {
          kind: "figure",
          figure: { kind: "unitCircle", angle: 37, showLabels: true, showPoint: true },
        },
        { kind: "text", text: "Radius bliver trekantens hypotenuse." },
        { kind: "text", text: "Da radius i enhedscirklen altid er 1, er hypotenusen altså:" },
        { kind: "math", tex: "\\text{hypotenusen} = 1" },
        { kind: "text", text: "Fra før ved vi:" },
        {
          kind: "math",
          tex: "\\sin(v) = \\frac{\\text{modstående katete}}{\\text{hypotenusen}}",
        },
        { kind: "text", text: "Når hypotenusen er 1, får vi:" },
        {
          kind: "math",
          tex: "\\sin(v) = \\frac{\\text{modstående katete}}{1} = \\text{modstående katete}",
        },
        { kind: "text", text: "På samme måde:" },
        {
          kind: "math",
          tex: "\\cos(v) = \\frac{\\text{hosliggende katete}}{1} = \\text{hosliggende katete}",
        },
        { kind: "text", text: "**Pythagoras i enhedscirklen**" },
        {
          kind: "text",
          text: "Enhedscirklen hænger direkte sammen med Pythagoras’ sætning. For en retvinklet trekant gælder:",
        },
        { kind: "math", tex: "a^2 + b^2 = c^2" },
        {
          kind: "text",
          text: "Her er $a$ og $b$ de to kateter, mens $c$ er hypotenusen.",
        },
        {
          kind: "figure",
          figure: {
            kind: "triangle",
            base: 4,
            height: 3,
            angleLabel: "v",
            adjacentLabel: "a (katete)",
            oppositeLabel: "b (katete)",
            hypotenuseLabel: "c (hypotenuse)",
          },
        },
        {
          kind: "text",
          text: "Nu ser vi på den retvinklede trekant, som ligger inde i enhedscirklen. Her er hypotenusen samtidig en radius i cirklen. Da enhedscirklen har radius 1, er hypotenusen derfor $c = 1$.",
        },
        {
          kind: "text",
          text: "Det er altså stadig den samme Pythagoras-trekant. Vi har blot fået nogle mere konkrete værdier for siderne:",
        },
        { kind: "math", tex: "a = \\cos(v), \\qquad b = \\sin(v), \\qquad c = 1" },
        { kind: "text", text: "Sætter vi dem ind i Pythagoras, får vi:" },
        { kind: "math", tex: "\\cos^2(v) + \\sin^2(v) = 1^2" },
        { kind: "text", text: "og dermed:" },
        { kind: "math", tex: "\\boxed{\\cos^2(v) + \\sin^2(v) = 1}" },
        {
          kind: "text",
          text: "Det er altså ikke en helt ny regel. Det er **Pythagoras’ sætning anvendt direkte på trekanten inde i enhedscirklen**.",
        },
        { kind: "text", text: "**Eksempel med vores trekant:**" },
        {
          kind: "text",
          text: "Fra de tre tidligere regneeksempler fandt vi $\\cos(v) = 0{,}8$ og $\\sin(v) = 0{,}6$. Det betyder, at trekanten inde i enhedscirklen har kateterne $0{,}8$ og $0{,}6$.",
        },
        { kind: "text", text: "Vi kan nu bruge Pythagoras til at kontrollere hypotenusen:" },
        {
          kind: "math",
          tex: "\\begin{aligned} c^2 &= 0{,}8^2 + 0{,}6^2 \\\\ c^2 &= 0{,}64 + 0{,}36 = 1 \\end{aligned}",
        },
        { kind: "text", text: "Dermed er hypotenusen:" },
        {
          kind: "math",
          tex: "c = \\sqrt{0{,}8^2 + 0{,}6^2} = \\sqrt{1} = 1",
        },
        {
          kind: "text",
          text: "Det passer præcis med, at trekanten ligger i en enhedscirkel, hvor radius er 1. Den oprindelige 3-4-5-trekant er altså blot blevet skaleret ned, så hypotenusen bliver 1. Alle tre sider divideres med 5:",
        },
        {
          kind: "math",
          tex: "\\frac{3}{5} = 0{,}6 \\qquad \\frac{4}{5} = 0{,}8 \\qquad \\frac{5}{5} = 1",
        },
        { kind: "text", text: "Derfor:" },
        { kind: "math", tex: "3 : 4 : 5 \\longrightarrow 0{,}6 : 0{,}8 : 1" },
        {
          kind: "text",
          text: "Forholdet mellem siderne er stadig det samme. Det er netop derfor, at vinklen $v$ også er den samme.",
        },
        {
          kind: "text",
          text: "Den vandrette længde er altså $0{,}8$, og den lodrette længde er $0{,}6$. Det betyder, at punktet $P$ på enhedscirklen har koordinaterne:",
        },
        { kind: "math", tex: "\\boxed{P = (0{,}8,\\ 0{,}6)}" },
        { kind: "text", text: "Generelt gælder derfor for et punkt $P$ på enhedscirklen:" },
        { kind: "math", tex: "\\boxed{P = (\\cos(v),\\ \\sin(v))}" },
      ],
    },
    {
      heading: "5.3 Hvordan sinus og cosinus ændrer sig med vinklen",
      blocks: [
        {
          kind: "text",
          text: "Når vinklen $v$ bevæger sig hele vejen rundt i enhedscirklen, ændrer punktets $x$- og $y$-koordinater sig. Da",
        },
        { kind: "math", tex: "x = \\cos(v) \\qquad \\text{og} \\qquad y = \\sin(v)" },
        { kind: "text", text: "kan vi direkte se, hvordan sinus og cosinus ændrer sig." },
        {
          kind: "figureRow",
          figures: [
            {
              kind: "unitCircle",
              angle: 0,
              title: "0°",
              showArrow: true,
              captions: ["P = (1, 0)", "cos = 1, sin = 0"],
            },
            {
              kind: "unitCircle",
              angle: 90,
              title: "90°",
              showArrow: true,
              captions: ["P = (0, 1)", "cos = 0, sin = 1"],
            },
            {
              kind: "unitCircle",
              angle: 180,
              title: "180°",
              showArrow: true,
              captions: ["P = (−1, 0)", "cos = −1, sin = 0"],
            },
            {
              kind: "unitCircle",
              angle: 270,
              title: "270°",
              showArrow: true,
              captions: ["P = (0, −1)", "cos = 0, sin = −1"],
            },
            {
              kind: "unitCircle",
              angle: 360,
              title: "360°",
              showArrow: true,
              captions: ["P = (1, 0)", "cos = 1, sin = 0"],
            },
          ],
        },
        {
          kind: "list",
          title: "Her kan man se, at:",
          items: [
            "$\\cos(v)$ følger punktets vandrette placering $(x)$.",
            "$\\sin(v)$ følger punktets lodrette placering $(y)$.",
            "Både sinus og cosinus kan derfor kun ligge mellem $-1$ og $1$.",
            "Ved $360^\\circ$ er vi tilbage samme sted som ved $0^\\circ$.",
          ],
        },
        {
          kind: "math",
          tex: "-1 \\le \\sin(v) \\le 1 \\qquad -1 \\le \\cos(v) \\le 1",
        },
        {
          kind: "list",
          title: "Husk:",
          items: [
            "Enhedscirklen har altid radius 1.",
            "Radius bliver hypotenusen i den retvinklede trekant.",
            "$\\cos(v)$ er den hosliggende katete og samtidig punktets $x$-koordinat.",
            "$\\sin(v)$ er den modstående katete og samtidig punktets $y$-koordinat.",
            "Pythagoras’ $a^2 + b^2 = c^2$ bliver derfor til $\\cos^2(v) + \\sin^2(v) = 1$.",
            "Punktet på enhedscirklen kan derfor skrives som $P = (\\cos(v), \\sin(v))$.",
          ],
        },
      ],
    },
    {
      heading: "5.4 Sinus og cosinus som beregningsværktøj",
      blocks: [
        {
          kind: "text",
          text: "Når man kender en vinkel i en retvinklet trekant, kan man bruge **sinus og cosinus på lommeregneren** til at beregne ukendte sidelængder.",
        },
        {
          kind: "text",
          text: "Hvis vinklen $v$ er kendt, kan lommeregneren fortælle os $\\sin(v)$ og $\\cos(v)$. Disse tal fortæller, hvor stor en del af hypotenusen de to kateter udgør.",
        },
        {
          kind: "text",
          text: "**Eksempel:** Vi har en retvinklet trekant med $v = 30^\\circ$ og hypotenusen $10$ m. Vi vil beregne længden af begge kateter.",
        },
        {
          kind: "figure",
          figure: {
            kind: "triangle",
            base: 4,
            height: 2.3,
            angleLabel: "30°",
            adjacentLabel: "hosliggende katete = ?",
            oppositeLabel: "modstående = ?",
            hypotenuseLabel: "hypotenuse = 10 m",
          },
        },
        { kind: "text", text: "**Beregn den modstående katete med sinus**" },
        {
          kind: "text",
          text: "Vi kender vinklen og hypotenusen og vil finde den **modstående katete**. Derfor bruger vi sinus:",
        },
        { kind: "math", tex: "\\sin(30^\\circ) = \\frac{\\text{modstående katete}}{10}" },
        { kind: "text", text: "På lommeregneren finder vi $\\sin(30^\\circ) = 0{,}5$." },
        {
          kind: "text",
          text: "Det betyder, at den modstående katete er $0{,}5$ gange så lang som hypotenusen. Vi ganger derfor med 10:",
        },
        {
          kind: "math",
          tex: "\\begin{aligned} \\text{modstående katete} &= 10 \\cdot 0{,}5 \\\\ \\text{modstående katete} &= 5\\ \\text{m} \\end{aligned}",
        },
        { kind: "text", text: "**Beregn den hosliggende katete med cosinus**" },
        {
          kind: "text",
          text: "Vi kender igen vinklen og hypotenusen, men denne gang vil vi finde den **hosliggende katete**. Derfor bruger vi cosinus:",
        },
        { kind: "math", tex: "\\cos(30^\\circ) = \\frac{\\text{hosliggende katete}}{10}" },
        {
          kind: "text",
          text: "På lommeregneren finder vi $\\cos(30^\\circ) \\approx 0{,}866$, og vi ganger med 10:",
        },
        {
          kind: "math",
          tex: "\\text{hosliggende katete} = 10 \\cdot 0{,}866 \\approx 8{,}66\\ \\text{m}",
        },
        { kind: "text", text: "**Hvilken skal man vælge?**" },
        {
          kind: "list",
          title: "Når vinklen og hypotenusen er kendt:",
          items: [
            "Brug **sinus**, hvis du vil finde den **modstående katete**.",
            "Brug **cosinus**, hvis du vil finde den **hosliggende katete**.",
          ],
        },
        { kind: "text", text: "Man kan derfor tænke:" },
        {
          kind: "math",
          tex: "\\begin{aligned} \\text{modstående} &= \\text{hypotenuse} \\cdot \\sin(v) \\\\ \\text{hosliggende} &= \\text{hypotenuse} \\cdot \\cos(v) \\end{aligned}",
        },
        {
          kind: "text",
          text: "**Husk lommeregneren:** Når vinklen er angivet i grader, skal lommeregneren være indstillet til **grader (DEG)**.",
        },
      ],
    },
    {
      heading: "5.5 Hvor passer tangens ind?",
      blocks: [
        {
          kind: "text",
          text: "Nu har vi set, at sinus og cosinus kan forstås meget konkret ved hjælp af enhedscirklen: $\\sin(v)$ er den modstående katete, og $\\cos(v)$ er den hosliggende katete, fordi hypotenusen i enhedscirklen har længden 1.",
        },
        { kind: "text", text: "Men hvad så med **tangens**?" },
        { kind: "text", text: "Fra den retvinklede trekant kender vi reglen:" },
        {
          kind: "math",
          tex: "\\tan(v) = \\frac{\\text{modstående katete}}{\\text{hosliggende katete}}",
        },
        {
          kind: "text",
          text: "I enhedscirklen er den modstående katete $\\sin(v)$, og den hosliggende katete er $\\cos(v)$. Derfor kan vi skrive:",
        },
        { kind: "math", tex: "\\boxed{\\tan(v) = \\frac{\\sin(v)}{\\cos(v)}}" },
        {
          kind: "text",
          text: "Tangens er altså ikke en ny længde i enhedscirklen på samme måde som sinus og cosinus. **Tangens fortæller forholdet mellem sinus og cosinus.**",
        },
        { kind: "text", text: "**Eksempel med vores trekant**" },
        {
          kind: "text",
          text: "Tidligere fandt vi $\\sin(v) = 0{,}6$ og $\\cos(v) = 0{,}8$. Derfor bliver tangens:",
        },
        {
          kind: "math",
          tex: "\\tan(v) = \\frac{\\sin(v)}{\\cos(v)} = \\frac{0{,}6}{0{,}8} = 0{,}75",
        },
        {
          kind: "text",
          text: "Det er præcis det samme, som vi tidligere fandt direkte fra 3-4-5-trekanten:",
        },
        { kind: "math", tex: "\\tan(v) = \\frac{3}{4} = 0{,}75" },
        { kind: "text", text: "**Hvad sker der, når vinklen ændrer sig?**" },
        {
          kind: "figureRow",
          figures: [
            {
              kind: "unitCircle",
              angle: 0,
              title: "0°",
              captions: ["sin(v) = 0", "cos(v) = 1", "tan(v) = 0/1 = 0"],
            },
            {
              kind: "unitCircle",
              angle: 45,
              title: "45°",
              captions: ["sin(v) ≈ 0,71", "cos(v) ≈ 0,71", "tan(v) = 1"],
            },
            {
              kind: "unitCircle",
              angle: 90,
              title: "90°",
              captions: ["sin(v) = 1", "cos(v) = 0", "tan(v) = 1/0"],
            },
          ],
        },
        { kind: "text", text: "Ved $0^\\circ$ er:" },
        {
          kind: "math",
          tex: "\\tan(0^\\circ) = \\frac{\\sin(0^\\circ)}{\\cos(0^\\circ)} = \\frac{0}{1} = 0",
        },
        { kind: "text", text: "Ved $45^\\circ$ er sinus og cosinus lige store, og derfor bliver:" },
        {
          kind: "math",
          tex: "\\tan(45^\\circ) = \\frac{\\sin(45^\\circ)}{\\cos(45^\\circ)} = 1",
        },
        {
          kind: "text",
          text: "Når vinklen bevæger sig fra $45^\\circ$ og nærmer sig $90^\\circ$, bliver sinus større, mens cosinus bliver mindre. Det betyder, at vi dividerer med et mindre og mindre tal, og derfor bliver tangens større og større.",
        },
        {
          kind: "text",
          text: "Ved præcis $90^\\circ$ er $\\sin(90^\\circ) = 1$ og $\\cos(90^\\circ) = 0$. Tangens skulle derfor være $\\tfrac{1}{0}$ — men man kan ikke dividere med 0. Derfor siger man:",
        },
        { kind: "math", tex: "\\tan(90^\\circ)\\ \\text{er ikke defineret}" },
        {
          kind: "text",
          text: "Det samme sker igen ved $270^\\circ$, fordi cosinus også er 0 dér.",
        },
        {
          kind: "list",
          title: "Husk:",
          items: [
            "Sinus og cosinus kan ses direkte som længder og koordinater i enhedscirklen.",
            "Tangens er forholdet mellem sinus og cosinus: $\\tan(v) = \\tfrac{\\sin(v)}{\\cos(v)}$.",
            "Ved $45^\\circ$ er sinus og cosinus lige store, og derfor er $\\tan(45^\\circ) = 1$.",
            "Tangens kan godt være større end 1 eller mindre end $-1$.",
            "Tangens er ikke defineret, når $\\cos(v) = 0$, fx ved $90^\\circ$ og $270^\\circ$.",
          ],
        },
        { kind: "text", text: "**Hvad kan man bruge tangens til?**" },
        {
          kind: "text",
          text: "Tangens er især nyttig, når vi arbejder med de to kateter i en retvinklet trekant. Det betyder, at vi kan bruge tangens, når vi:",
        },
        {
          kind: "list",
          items: [
            "kender **vinklen og den hosliggende katete** og vil finde den modstående katete",
            "kender **vinklen og den modstående katete** og vil finde den hosliggende katete",
            "kender **begge kateter** og vil finde vinklen",
          ],
        },
        {
          kind: "text",
          text: "Man behøver altså ikke kende hypotenusen for at bruge tangens.",
        },
        { kind: "text", text: "**Eksempel: Hvor højt er et træ?**" },
        {
          kind: "text",
          text: "Du står 12 meter fra et træ. Vinklen fra jorden og op til toppen af træet er $35^\\circ$. Hvor højt er træet?",
        },
        {
          kind: "figure",
          figure: {
            kind: "triangle",
            base: 4,
            height: 2.8,
            angleLabel: "35°",
            adjacentLabel: "hosliggende katete = 12 m",
            oppositeLabel: "modstående = ?",
            hypotenuseLabel: "hypotenuse",
            footLabels: ["Dig", "Træ"],
          },
        },
        {
          kind: "text",
          text: "I forhold til vinklen på $35^\\circ$ kender vi den hosliggende katete $= 12$, og vi vil finde den modstående katete $= x$. Vi sætter tallene ind i tangens-formlen:",
        },
        { kind: "math", tex: "\\tan(35^\\circ) = \\frac{x}{12}" },
        {
          kind: "text",
          text: "Vi vil have $x$ alene. Derfor ganger vi med 12 på begge sider:",
        },
        { kind: "math", tex: "12 \\cdot \\tan(35^\\circ) = x" },
        {
          kind: "text",
          text: "På lommeregneren finder vi $\\tan(35^\\circ) \\approx 0{,}70$. Derfor:",
        },
        {
          kind: "math",
          tex: "\\begin{aligned} x &\\approx 12 \\cdot 0{,}70 \\\\ x &\\approx 8{,}4\\ \\text{m} \\end{aligned}",
        },
        { kind: "math", tex: "\\boxed{x \\approx 8{,}4\\ \\text{m}}" },
        {
          kind: "text",
          text: "Træet er altså cirka $8{,}4$ meter højt. Her kan man også se, hvad tallet fra tangens egentlig betyder: den modstående katete er cirka $0{,}70$ gange så lang som den hosliggende katete. For hver 1 meter vi bevæger os vandret, går linjen altså cirka $0{,}70$ meter opad.",
        },
        {
          kind: "text",
          text: "Det er derfor tangens kan bruges til at beregne højder og afstande, når vi kender en vinkel.",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad kaldes den længste side i en retvinklet trekant?",
      options: [
        { id: "a", text: "Den modstående katete" },
        { id: "b", text: "Hypotenusen" },
        { id: "c", text: "Den hosliggende katete" },
        { id: "d", text: "Radius" },
      ],
      correctOptionId: "b",
      explanation:
        "Hypotenusen er den længste side og ligger altid over for den rette vinkel. De to øvrige sider kaldes kateter.",
    },
    {
      id: "q2",
      prompt: "Hvad er sin(v) i en retvinklet trekant?",
      options: [
        { id: "a", text: "Hosliggende katete divideret med hypotenusen" },
        { id: "b", text: "Modstående katete divideret med hosliggende katete" },
        { id: "c", text: "Modstående katete divideret med hypotenusen" },
        { id: "d", text: "Hypotenusen divideret med modstående katete" },
      ],
      correctOptionId: "c",
      explanation: "sin(v) = modstående katete / hypotenusen.",
    },
    {
      id: "q3",
      prompt:
        "Tre trekanter har siderne 3-4-5, 6-8-10 og 9-12-15. Hvad gælder for sin(v) i dem?",
      options: [
        { id: "a", text: "Den er 0,6 i alle tre, fordi forholdet mellem siderne er det samme" },
        { id: "b", text: "Den bliver tre gange så stor i den største trekant" },
        { id: "c", text: "Den afhænger af trekantens areal" },
        { id: "d", text: "Den kan ikke beregnes uden vinklen i grader" },
      ],
      correctOptionId: "a",
      explanation:
        "Sinus afhænger kun af vinklen, ikke af trekantens størrelse. Trekanterne er ensvinklede, så forholdet 3/5 = 6/10 = 9/15 = 0,6.",
    },
    {
      id: "q4",
      prompt: "Hvorfor er cos(v) lig med punktets x-koordinat i enhedscirklen?",
      options: [
        { id: "a", text: "Fordi cosinus altid er 1" },
        { id: "b", text: "Fordi radius er 1, så cos(v) = hosliggende katete / 1" },
        { id: "c", text: "Fordi x-aksen er vandret" },
        { id: "d", text: "Fordi cosinus er det samme som sinus" },
      ],
      correctOptionId: "b",
      explanation:
        "Hypotenusen er radius, altså 1. Når man dividerer med 1, står den hosliggende katete tilbage — og den er netop punktets vandrette placering.",
    },
    {
      id: "q5",
      prompt: "Hvor kommer cos²(v) + sin²(v) = 1 fra?",
      options: [
        { id: "a", text: "Det er en helt ny regel, der kun gælder for cirkler" },
        { id: "b", text: "Det er Pythagoras anvendt på trekanten i enhedscirklen" },
        { id: "c", text: "Det følger af, at tan(v) = sin(v)/cos(v)" },
        { id: "d", text: "Det gælder kun ved 45°" },
      ],
      correctOptionId: "b",
      explanation:
        "a² + b² = c² med a = cos(v), b = sin(v) og c = 1 giver direkte cos²(v) + sin²(v) = 1.",
    },
    {
      id: "q6",
      prompt: "En retvinklet trekant har hypotenusen 10 m og vinklen 30°. Hvor lang er den modstående katete?",
      options: [
        { id: "a", text: "8,66 m" },
        { id: "b", text: "3 m" },
        { id: "c", text: "5 m" },
        { id: "d", text: "20 m" },
      ],
      correctOptionId: "c",
      explanation:
        "sin(30°) = 0,5, og modstående katete = hypotenuse · sin(v) = 10 · 0,5 = 5 m.",
    },
    {
      id: "q7",
      prompt: "Hvorfor er tan(90°) ikke defineret?",
      options: [
        { id: "a", text: "Fordi sin(90°) = 0" },
        { id: "b", text: "Fordi cos(90°) = 0, og man kan ikke dividere med 0" },
        { id: "c", text: "Fordi 90° ligger uden for enhedscirklen" },
        { id: "d", text: "Fordi tangens kun gælder under 45°" },
      ],
      correctOptionId: "b",
      explanation:
        "tan(v) = sin(v)/cos(v). Ved 90° er cos(v) = 0, og division med 0 er ikke defineret. Det samme sker ved 270°.",
    },
    {
      id: "q8",
      prompt: "Du står 12 m fra et træ og måler vinklen op til toppen til 35°. Hvor højt er træet?",
      options: [
        { id: "a", text: "Cirka 8,4 m" },
        { id: "b", text: "Cirka 17 m" },
        { id: "c", text: "Cirka 12 m" },
        { id: "d", text: "Cirka 6,9 m" },
      ],
      correctOptionId: "a",
      explanation:
        "tan(35°) = x/12, så x = 12 · tan(35°) ≈ 12 · 0,70 ≈ 8,4 m. Man behøver ikke kende hypotenusen.",
    },
  ],
};
