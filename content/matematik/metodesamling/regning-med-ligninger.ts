import type { Topic } from "@/lib/types";
import { METODESAMLING_CREDIT } from "./credit";

export const regningMedLigninger: Topic = {
  slug: "regning-med-ligninger",
  title: "Regning med ligninger",
  summary:
    "Lighedstegnet som en vægt: isolér variablen ved at gøre det samme på begge sider — og forstå tanke-genvejen, der ligger bag.",
  credit: METODESAMLING_CREDIT,
  sections: [
    {
      heading: "4.1 Isolér variabel",
      blocks: [
        { kind: "text", text: "**Grundidé: Lighedstegnet som en vægt**" },
        {
          kind: "text",
          text: "Et lighedstegn $(=)$ betyder, at **begge sider er lige store**. Man kan tænke på det som en vægt:",
        },
        {
          kind: "list",
          items: [
            "Venstre side og højre side skal altid veje det samme",
            "Hvis du ændrer noget på den ene side, skal du gøre **det samme** på den anden side",
          ],
        },
        {
          kind: "text",
          text: "**Målet:** At få variablen (fx $x$, $y$, $z$) til at stå **alene**.",
        },
        { kind: "text", text: "**Addition – læg det samme til på begge sider**" },
        { kind: "text", text: "*Regel:*" },
        { kind: "math", tex: "a = b \\Rightarrow c + a = b + c" },
        { kind: "text", text: "Regneeksempel der illustrerer reglen:" },
        {
          kind: "math",
          tex: "\\begin{aligned} 2 + 2 &= 4 && (\\checkmark)\\ \\text{korrekt} \\\\ 2 + 2 &\\neq 4 + 1 && (\\times)\\ \\text{forkert} \\\\ 1 + 2 + 2 &= 4 + 1 && (\\checkmark)\\ \\text{korrekt} \\\\ 7 + 2 + 2 &= 4 + 7 && (\\checkmark)\\ \\text{korrekt} \\\\ 1021 + 2 + 2 &= 4 + 1021 && (\\checkmark)\\ \\text{korrekt} \\end{aligned}",
        },
        {
          kind: "text",
          text: "**Konklusion:** Så længe man gør **det samme på begge sider** af $=$, forbliver ligningen sand.",
        },
        {
          kind: "text",
          text: "Det bruger vi til trin for trin at flytte tal væk fra bogstavet (variablen), så bogstavet til sidst står alene på den ene side.",
        },
        { kind: "text", text: "*Eksempel 1*" },
        {
          kind: "math",
          tex: "\\begin{aligned} x - 4 &= 9 \\\\ x - 4 + 4 &= 9 + 4 \\\\ x &= 13 \\end{aligned}",
        },
        { kind: "text", text: "*Eksempel 2*" },
        {
          kind: "math",
          tex: "\\begin{aligned} y - 7 &= 2 \\\\ y - 7 + 7 &= 2 + 7 \\\\ y &= 9 \\end{aligned}",
        },
        { kind: "text", text: "**Subtraktion – træk det samme fra på begge sider**" },
        { kind: "text", text: "*Regel:*" },
        { kind: "math", tex: "a = b \\Rightarrow a - c = b - c" },
        { kind: "text", text: "*Eksempel 3*" },
        {
          kind: "math",
          tex: "\\begin{aligned} x + 6 &= 2 \\\\ x + 6 - 6 &= 2 - 6 \\\\ x &= -4 \\end{aligned}",
        },
        { kind: "text", text: "*Eksempel 4*" },
        {
          kind: "math",
          tex: "\\begin{aligned} z + 3 &= 10 \\\\ z + 3 - 3 &= 10 - 3 \\\\ z &= 7 \\end{aligned}",
        },
        { kind: "text", text: "**Multiplikation – divider begge sider**" },
        { kind: "text", text: "*Regel:*" },
        { kind: "math", tex: "a = b \\Rightarrow \\frac{a}{c} = \\frac{b}{c}" },
        { kind: "text", text: "*Eksempel 5*" },
        {
          kind: "math",
          tex: "\\begin{aligned} 5x &= 20 \\\\ \\frac{5x}{5} &= \\frac{20}{5} \\\\ x &= \\frac{20}{5} \\\\ x &= 4 \\end{aligned}",
        },
        { kind: "text", text: "*Eksempel 6*" },
        {
          kind: "math",
          tex: "\\begin{aligned} 3y &= 15 \\\\ \\frac{3y}{3} &= \\frac{15}{3} \\\\ y &= \\frac{15}{3} \\\\ y &= 5 \\end{aligned}",
        },
        { kind: "text", text: "**Division – gang begge sider**" },
        { kind: "text", text: "*Regel:*" },
        { kind: "math", tex: "a = b \\Rightarrow a \\cdot c = b \\cdot c" },
        { kind: "text", text: "*Eksempel 7*" },
        {
          kind: "math",
          tex: "\\begin{aligned} \\frac{x}{4} &= 3 \\\\ \\frac{x}{4} \\cdot 4 &= 3 \\cdot 4 \\\\ x &= 3 \\cdot 4 \\\\ x &= 12 \\end{aligned}",
        },
        { kind: "text", text: "*Eksempel 8*" },
        {
          kind: "math",
          tex: "\\begin{aligned} \\frac{y}{5} &= 6 \\\\ \\frac{y}{5} \\cdot 5 &= 6 \\cdot 5 \\\\ y &= 6 \\cdot 5 \\\\ y &= 30 \\end{aligned}",
        },
        { kind: "text", text: "**Minus foran variablen**" },
        { kind: "text", text: "*Eksempel 9*" },
        {
          kind: "math",
          tex: "\\begin{aligned} -x &= 8 \\\\ (-1) \\cdot (-x) &= (-1) \\cdot 8 \\\\ x &= -8 \\end{aligned}",
        },
        { kind: "text", text: "*Eksempel 10*" },
        {
          kind: "math",
          tex: "\\begin{aligned} -y &= -5 \\\\ (-1) \\cdot (-y) &= (-1) \\cdot (-5) \\\\ y &= 5 \\end{aligned}",
        },
        {
          kind: "list",
          title: "Opsummering",
          items: [
            "Gør altid det samme på begge sider af $=$",
            "Brug den modsatte regneart",
            "Stop først, når der står **variabel = tal**",
          ],
        },
      ],
    },
    {
      heading: "4.2 Tanke-genvej: Flyt over på den anden side af =",
      blocks: [
        {
          kind: "text",
          text: "Denne metode er en **genvej**. Den virker, fordi den bygger på alle reglerne ovenfor, hvor man gør **det samme på begge sider** af lighedstegnet.",
        },
        {
          kind: "text",
          text: "I stedet for at skrive alle mellemregninger hver gang, kan man ofte nøjes med at tænke: *“Jeg flytter tallet over på den anden side og bruger den modsatte regneart.”*",
        },
        { kind: "text", text: "**Idéen bag genvejen**" },
        { kind: "text", text: "Når man bruger tanke-genvejen, gælder disse regler:" },
        {
          kind: "list",
          items: [
            "$+$ bliver til $-$",
            "$-$ bliver til $+$",
            "$\\cdot$ bliver til $:$",
            "$:$ bliver til $\\cdot$",
          ],
        },
        {
          kind: "text",
          text: "Det er vigtigt at forstå, at man **ikke flytter tal fysisk**. Genvejen virker kun, fordi den svarer til de rigtige regneregler, som du allerede har lært.",
        },
        { kind: "text", text: "**Eksempler med addition og subtraktion**" },
        { kind: "text", text: "*Eksempel 1*" },
        { kind: "math", tex: "x - 4 = 9" },
        {
          kind: "text",
          text: "Her står der $-4$ sammen med $x$. For at få $x$ alene, skal $-4$ væk. Når $-4$ “flyttes over” på den anden side af $=$, bliver det til $+4$:",
        },
        {
          kind: "math",
          tex: "\\begin{aligned} x &= 9 + 4 \\\\ x &= 13 \\end{aligned}",
        },
        { kind: "text", text: "*Eksempel 2*" },
        { kind: "math", tex: "x + 6 = 2" },
        {
          kind: "text",
          text: "Her står der $+6$ sammen med $x$. For at få $x$ alene, skal $+6$ væk. Når $+6$ “flyttes over” på den anden side af $=$, bliver det til $-6$:",
        },
        {
          kind: "math",
          tex: "\\begin{aligned} x &= 2 - 6 \\\\ x &= -4 \\end{aligned}",
        },
        {
          kind: "text",
          text: "**Husk:** Når du bruger tanke-genvejen, gør du i virkeligheden det samme som før: Du ændrer **begge sider**, så bogstavet til sidst står alene. Du skriver bare færre trin.",
        },
        {
          kind: "math",
          tex: "\\begin{aligned} x - 4 = 9 \\;&\\Rightarrow\\; x = 9 + 4 \\;\\Rightarrow\\; x = 13 \\\\ x + 6 = 2 \\;&\\Rightarrow\\; x = 2 - 6 \\;\\Rightarrow\\; x = -4 \\\\ y - 5 = 12 \\;&\\Rightarrow\\; y = 12 + 5 \\;\\Rightarrow\\; y = 17 \\\\ z + 8 = 3 \\;&\\Rightarrow\\; z = 3 - 8 \\;\\Rightarrow\\; z = -5 \\end{aligned}",
        },
        { kind: "text", text: "**Eksempler med multiplikation**" },
        {
          kind: "math",
          tex: "\\begin{aligned} 5x = 20 \\;&\\Rightarrow\\; x = \\frac{20}{5} \\;\\Rightarrow\\; x = 4 \\\\ 2y = 18 \\;&\\Rightarrow\\; y = \\frac{18}{2} \\;\\Rightarrow\\; y = 9 \\\\ -3z = 12 \\;&\\Rightarrow\\; z = \\frac{12}{-3} \\;\\Rightarrow\\; z = -4 \\end{aligned}",
        },
        { kind: "text", text: "**Eksempler med division**" },
        {
          kind: "math",
          tex: "\\begin{aligned} \\frac{x}{4} = 3 \\;&\\Rightarrow\\; x = 3 \\cdot 4 \\;\\Rightarrow\\; x = 12 \\\\ \\frac{y}{6} = -2 \\;&\\Rightarrow\\; y = -2 \\cdot 6 \\;\\Rightarrow\\; y = -12 \\\\ \\frac{z}{-5} = 4 \\;&\\Rightarrow\\; z = 4 \\cdot (-5) \\;\\Rightarrow\\; z = -20 \\end{aligned}",
        },
        {
          kind: "text",
          text: "**Vigtig pointe:** Man flytter ikke tal. Man bruger de samme regler — bare hurtigere.",
        },
      ],
    },
    {
      heading: "4.3 Brøker i ligninger",
      blocks: [
        { kind: "text", text: "**Underforstået 1**" },
        { kind: "text", text: "Hvis der står:" },
        { kind: "math", tex: "x = 4" },
        { kind: "text", text: "så betyder det egentlig:" },
        { kind: "math", tex: "1x = 4 \\qquad \\frac{x}{1} = 4" },
        { kind: "text", text: "**Eksempel: Variabel i nævner**" },
        { kind: "math", tex: "\\frac{x}{3} = 5" },
        { kind: "text", text: "Gange med 3 på begge sider:" },
        {
          kind: "math",
          tex: "\\begin{aligned} x &= 5 \\cdot 3 \\\\ x &= 15 \\end{aligned}",
        },
        { kind: "text", text: "**Eksempel: Brøk foran variabel**" },
        { kind: "math", tex: "\\frac{2x}{5} = 6" },
        { kind: "text", text: "Gange med 5:" },
        { kind: "math", tex: "2x = 30" },
        { kind: "text", text: "Divider med 2:" },
        {
          kind: "math",
          tex: "\\begin{aligned} x &= \\frac{30}{2} \\\\ x &= 15 \\end{aligned}",
        },
        { kind: "text", text: "**Vigtigt: Flere led**" },
        { kind: "math", tex: "\\frac{x + 4}{3} = 5" },
        { kind: "text", text: "Gange med 3 på begge sider:" },
        {
          kind: "math",
          tex: "\\begin{aligned} x + 4 &= 15 \\\\ x &= 15 - 4 \\\\ x &= 11 \\end{aligned}",
        },
        { kind: "text", text: "**Eksempel med minus**" },
        { kind: "math", tex: "-\\frac{x}{2} = 6" },
        { kind: "text", text: "Gange med 2:" },
        {
          kind: "math",
          tex: "\\begin{aligned} -x &= 6 \\cdot 2 \\\\ -x &= 12 \\end{aligned}",
        },
        { kind: "text", text: "Gange med $-1$:" },
        { kind: "math", tex: "x = -12" },
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad betyder lighedstegnet i en ligning?",
      options: [
        { id: "a", text: "At man skal skrive svaret bagefter" },
        { id: "b", text: "At begge sider er lige store, som på en vægt" },
        { id: "c", text: "At venstre side altid er størst" },
        { id: "d", text: "At man skal regne fra venstre mod højre" },
      ],
      correctOptionId: "b",
      explanation:
        "Ligningen er en vægt i balance. Derfor skal alt, du gør ved den ene side, også gøres ved den anden.",
    },
    {
      id: "q2",
      prompt: "Løs x − 4 = 9.",
      options: [
        { id: "a", text: "x = 5" },
        { id: "b", text: "x = 36" },
        { id: "c", text: "x = 13" },
        { id: "d", text: "x = −13" },
      ],
      correctOptionId: "c",
      explanation: "Læg 4 til på begge sider: x − 4 + 4 = 9 + 4, altså x = 13.",
    },
    {
      id: "q3",
      prompt: "Løs 5x = 20.",
      options: [
        { id: "a", text: "x = 4" },
        { id: "b", text: "x = 100" },
        { id: "c", text: "x = 15" },
        { id: "d", text: "x = 25" },
      ],
      correctOptionId: "a",
      explanation:
        "Divider begge sider med 5: 5x/5 = 20/5. Den modsatte regneart af gange er division.",
    },
    {
      id: "q4",
      prompt: "Løs x/4 = 3.",
      options: [
        { id: "a", text: "x = 0,75" },
        { id: "b", text: "x = 7" },
        { id: "c", text: "x = 12" },
        { id: "d", text: "x = 4/3" },
      ],
      correctOptionId: "c",
      explanation: "Gang begge sider med 4: x = 3 · 4 = 12.",
    },
    {
      id: "q5",
      prompt: "Når +6 “flyttes over” på den anden side af lighedstegnet, hvad bliver det så til?",
      options: [
        { id: "a", text: "−6" },
        { id: "b", text: "+6" },
        { id: "c", text: "·6" },
        { id: "d", text: ":6" },
      ],
      correctOptionId: "a",
      explanation:
        "Plus bliver til minus. Genvejen svarer til at trække 6 fra på begge sider — man flytter ikke tal fysisk.",
    },
    {
      id: "q6",
      prompt: "Løs −x = 8.",
      options: [
        { id: "a", text: "x = 8" },
        { id: "b", text: "x = −8" },
        { id: "c", text: "x = 1/8" },
        { id: "d", text: "x = 0" },
      ],
      correctOptionId: "b",
      explanation:
        "Gang begge sider med −1: (−1) · (−x) = (−1) · 8, altså x = −8.",
    },
    {
      id: "q7",
      prompt: "Løs (x + 4)/3 = 5.",
      options: [
        { id: "a", text: "x = 11" },
        { id: "b", text: "x = 19" },
        { id: "c", text: "x = 1" },
        { id: "d", text: "x = 15" },
      ],
      correctOptionId: "a",
      explanation:
        "Hele parentesen står over brøkstregen. Gang først med 3: x + 4 = 15, og træk så 4 fra: x = 11.",
    },
  ],
};
