import type { Topic } from "@/lib/types";
import EquationSolverDemo from "@/components/EquationSolverDemo";

export const ligningerOgIsoleringAfX: Topic = {
  slug: "ligninger-og-isolering-af-x",
  title: "Ligninger og isolering af x",
  summary:
    "Lær at løse simple og mere komplekse ligninger trin for trin ved at bruge de grundlæggende regneregler på begge sider af lighedstegnet.",
  demoComponent: EquationSolverDemo,
  sections: [
    {
      heading: "Kerneidé: balance i en ligning",
      body:
        "En ligning er som en vægt i balance. Det, du gør på den ene side af lighedstegnet, skal du også gøre på den anden side. På den måde bevarer du balancen og kan isolere x korrekt.",
    },
    {
      heading: "Systematik når du isolerer x",
      body:
        "Brug en fast rækkefølge: 1) Saml x-led på én side (hvis nødvendigt), 2) flyt konstantled, 3) ophæv gange/division foran x. Den systematik virker både for simple ligninger og for ligninger med x på begge sider, parenteser og brøker.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er den vigtigste regel, når du løser en ligning?",
      options: [
        { id: "a", text: "Gør det samme på begge sider af lighedstegnet" },
        { id: "b", text: "Flyt altid x til højre side" },
        { id: "c", text: "Gang altid begge sider med 2 først" },
        { id: "d", text: "Slet led, der er svære at regne med" },
      ],
      correctOptionId: "a",
      explanation:
        "Ligninger løses ved at bevare balancen. Derfor skal samme operation udføres på begge sider.",
    },
    {
      id: "q2",
      prompt: "Hvilket næste skridt er korrekt i ligningen 2x + 4 = 10?",
      options: [
        { id: "a", text: "Træk 4 fra på begge sider" },
        { id: "b", text: "Læg 4 til på begge sider" },
        { id: "c", text: "Gang begge sider med 4" },
        { id: "d", text: "Dividér begge sider med 10" },
      ],
      correctOptionId: "a",
      explanation:
        "Først fjernes konstantleddet +4, så du får 2x alene på venstre side.",
    },
    {
      id: "q3",
      prompt: "I ligningen 3x = 15 isolerer du x ved at …",
      options: [
        { id: "a", text: "dividere begge sider med 3" },
        { id: "b", text: "trække 3 fra på begge sider" },
        { id: "c", text: "lægge 3 til på begge sider" },
        { id: "d", text: "gange begge sider med 3" },
      ],
      correctOptionId: "a",
      explanation: "Når x er ganget med 3, ophæves det ved at dividere begge sider med 3.",
    },
  ],
};
