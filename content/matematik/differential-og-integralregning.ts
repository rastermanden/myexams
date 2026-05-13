import type { Topic } from "@/lib/types";
import CalculusOverviewDemo from "@/components/CalculusOverviewDemo";

export const differentialOgIntegralregning: Topic = {
  slug: "differential-og-integralregning",
  title: "Differential- og integralregning",
  summary:
    "Grænseværdier, afledte, integraler og differentialligninger med visualiseringer og trin-for-trin forklaringer.",
  demoComponent: CalculusOverviewDemo,
  sections: [
    {
      heading: "Fra grænseværdi til afledt funktion",
      body:
        "Differentialregning bygger på idéen om grænseværdier: Vi undersøger, hvad der sker med ændringsforholdet, når Δx går mod 0. Det giver differentialkvotienten f'(x), som tolkes som hældningen på tangenten til grafen i punktet.",
    },
    {
      heading: "Centrale underemner i differentialregning",
      body:
        "Kontinuitet, tangentligning, differentiationsregler (sum, produkt, kvotient og kæderegel), standardfunktioner samt analyse af monotoniforhold, ekstrema og optimering er kerneelementer på gymnasiets B- og A-niveau.",
    },
    {
      heading: "Integralregning og areal",
      body:
        "Stamfunktioner og bestemte integraler bruges til at beregne areal under en graf. Rektangelsummer giver en intuitiv approximation, mens integralregning giver den præcise værdi. På A-niveau indgår substitution, partiel integration og rumfang ved omdrejning.",
    },
    {
      heading: "Differentialligninger",
      body:
        "En differentialligning kobler en funktion til dens afledte. De bruges blandt andet til vækstmodeller, afkøling og andre ændringsprocesser. På A-niveau arbejder man med både opstilling, løsning og fortolkning.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad beskriver f'(x) geometrisk?",
      options: [
        { id: "a", text: "Arealet under grafen" },
        { id: "b", text: "Hældningen på tangenten" },
        { id: "c", text: "Skæringen med y-aksen" },
        { id: "d", text: "Grafens toppunkt" },
      ],
      correctOptionId: "b",
      explanation: "Den afledte i et punkt er tangentens hældning i punktet.",
    },
    {
      id: "q2",
      prompt: "Hvad er d/dx (x^3)?",
      options: [
        { id: "a", text: "x^2" },
        { id: "b", text: "2x^2" },
        { id: "c", text: "3x^2" },
        { id: "d", text: "3x" },
      ],
      correctOptionId: "c",
      explanation: "Potensreglen giver d/dx(x^n) = n·x^(n-1), altså 3x^2.",
    },
    {
      id: "q3",
      prompt: "Hvilken funktion er en stamfunktion til 2x?",
      options: [
        { id: "a", text: "x^2 + C" },
        { id: "b", text: "2x^2 + C" },
        { id: "c", text: "x + C" },
        { id: "d", text: "ln(x) + C" },
      ],
      correctOptionId: "a",
      explanation: "Fordi d/dx(x^2) = 2x, er x^2 + C en stamfunktion.",
    },
    {
      id: "q4",
      prompt: "Hvad giver integralet ∫_0^2 x dx?",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "2" },
        { id: "c", text: "3" },
        { id: "d", text: "4" },
      ],
      correctOptionId: "b",
      explanation: "∫_0^2 x dx = [x^2/2]_0^2 = 2.",
    },
    {
      id: "q5",
      prompt: "Hvad er tangentligningen til f(x)=x^2 i x₀=1?",
      options: [
        { id: "a", text: "y = 2x - 1" },
        { id: "b", text: "y = x + 1" },
        { id: "c", text: "y = 2x + 1" },
        { id: "d", text: "y = x^2 + 1" },
      ],
      correctOptionId: "a",
      explanation: "f(1)=1 og f'(1)=2, så y-1 = 2(x-1) => y = 2x-1.",
    },
  ],
};
