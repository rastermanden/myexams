import type { Topic } from "@/lib/types";
import { RumfangTraening } from "@/components/TjekUp8Demo";

export const rumfang: Topic = {
  slug: "rumfang",
  title: "Rumfang",
  summary:
    "Rumfang af kasse, terning, prisme, cylinder, kegle, pyramide og kugle — med omregning mellem cm³, liter og m³ og baglæns udregninger.",
  demoComponent: RumfangTraening,
  sections: [
    {
      heading: "Rumfang og enheder",
      body:
        "Rumfang (volumen) er, hvor meget der er plads til inde i en figur. Det måles i kubikenheder: mm³, cm³, dm³ og m³ — eller i rummål som milliliter og liter. Sammenhængen er værd at kunne udenad: 1 liter = 1 dm³ = 1.000 cm³, 1 milliliter = 1 cm³, og 1 m³ = 1.000 liter. Ved omregning mellem kubikenheder ganger eller dividerer du med omregningstallet tre gange, fordi rumfang er længde gange længde gange længde: 1 m³ = 100 cm × 100 cm × 100 cm = 1.000.000 cm³.",
    },
    {
      heading: "Kasse og terning",
      body:
        "En kasse (et retvinklet prisme) har rumfanget V = længde × bredde × højde. En kasse på 10 cm × 6 cm × 4 cm rummer 240 cm³. En terning har lige lange sider, så V = s × s × s = s³; en terning med siden 5 cm har rumfanget 125 cm³. Bland ikke rumfang sammen med overfladeareal: terningens overflade er 6 × s² = 150 cm², og den måles i cm², ikke cm³.",
    },
    {
      heading: "Prismer: grundflade gange højde",
      body:
        "Alle prismer og cylindre følger den samme regel: V = grundflade × højde. Grundfladen er den flade, figuren har hele vejen igennem. Er endefladen en trekant med grundlinje 8 cm og højde 5 cm, er grundfladen (8 × 5) : 2 = 20 cm², og er prismet 12 cm langt, er rumfanget 20 × 12 = 240 cm³. Reglen er nem at huske sådan: du stabler grundfladen oven på sig selv, indtil du når højden.",
    },
    {
      heading: "Cylinder",
      body:
        "En cylinder har en cirkel som grundflade, så V = π × r² × h. En cylinder med radius 3 cm og højde 10 cm har rumfanget π × 9 × 10 ≈ 282,7 cm³ — altså cirka 0,28 liter. Får du opgivet diameteren, skal du huske at halvere den først: en dåse med diameter 8 cm har radius 4 cm. Overfladen af en cylinder er noget andet: to cirkler plus den udrullede side, 2 × π × r² + 2 × π × r × h.",
    },
    {
      heading: "Kegle og pyramide — 1/3-reglen",
      body:
        "En kegle fylder præcis en tredjedel af den cylinder, der har samme grundflade og samme højde: V = (π × r² × h) : 3. Med r = 3 cm og h = 10 cm bliver det 282,7 : 3 ≈ 94,2 cm³. Præcis samme regel gælder for pyramiden i forhold til kassen: V = (grundflade × højde) : 3. En pyramide med kvadratisk grundflade på 6 cm × 6 cm og højden 10 cm har rumfanget (36 × 10) : 3 = 120 cm³. Højden er den lodrette højde fra grundfladen op til toppunktet — ikke den skrå sidekant.",
    },
    {
      heading: "Kugle",
      body:
        "En kugle har rumfanget V = 4/3 × π × r³. Radius skal altså i tredje potens. En kugle med radius 6 cm har rumfanget 4/3 × π × 216 ≈ 904,8 cm³. Kuglens overfladeareal er 4 × π × r² ≈ 452,4 cm² — samme tal, to helt forskellige formler og enheder. Bliver r fordoblet, bliver rumfanget otte gange så stort (2³ = 8), mens overfladen kun bliver fire gange så stor.",
    },
    {
      heading: "Liter, baglæns udregning og typiske fejl",
      body:
        "Prøveopgaver spørger tit om liter: et akvarium på 40 cm × 25 cm × 30 cm rummer 30.000 cm³, og det er 30.000 : 1.000 = 30 liter. Skal du den anden vej og mangler en side, dividerer du: har en kasse rumfanget 360 cm³ og en grundflade på 12 cm × 5 cm = 60 cm², er højden 360 : 60 = 6 cm. De typiske fejl er: at glemme at halvere diameteren, at glemme at dividere med 3 ved kegle og pyramide, at blande rumfang og overfladeareal sammen, og at bruge mål i forskellige enheder i samme udregning.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "En kasse er 10 cm × 6 cm × 4 cm. Hvad er rumfanget?",
      options: [
        { id: "a", text: "20 cm³" },
        { id: "b", text: "60 cm³" },
        { id: "c", text: "240 cm³" },
        { id: "d", text: "240 cm²" },
      ],
      correctOptionId: "c",
      explanation:
        "V = længde × bredde × højde = 10 × 6 × 4 = 240 cm³. Rumfang måles i kubikenheder.",
    },
    {
      id: "q2",
      prompt: "Hvor mange cm³ er 2,5 liter?",
      options: [
        { id: "a", text: "25 cm³" },
        { id: "b", text: "250 cm³" },
        { id: "c", text: "2.500 cm³" },
        { id: "d", text: "25.000 cm³" },
      ],
      correctOptionId: "c",
      explanation:
        "1 liter = 1 dm³ = 1.000 cm³, så 2,5 liter = 2,5 × 1.000 = 2.500 cm³.",
    },
    {
      id: "q3",
      prompt: "En cylinder har radius 3 cm og højde 10 cm. Hvad er rumfanget? (afrund til 1 decimal)",
      options: [
        { id: "a", text: "94,2 cm³" },
        { id: "b", text: "282,7 cm³" },
        { id: "c", text: "188,5 cm³" },
        { id: "d", text: "90 cm³" },
      ],
      correctOptionId: "b",
      explanation:
        "V = π × r² × h = π × 3² × 10 = π × 90 ≈ 282,7 cm³. 94,2 cm³ ville være en kegle med samme mål.",
    },
    {
      id: "q4",
      prompt: "En kegle har radius 3 cm og højde 10 cm. Hvad er rumfanget? (afrund til 1 decimal)",
      options: [
        { id: "a", text: "282,7 cm³" },
        { id: "b", text: "141,4 cm³" },
        { id: "c", text: "94,2 cm³" },
        { id: "d", text: "31,4 cm³" },
      ],
      correctOptionId: "c",
      explanation:
        "Keglen er 1/3 af cylinderen med samme grundflade og højde: 282,7 : 3 ≈ 94,2 cm³.",
    },
    {
      id: "q5",
      prompt: "En pyramide har kvadratisk grundflade 6 cm × 6 cm og højde 10 cm. Hvad er rumfanget?",
      options: [
        { id: "a", text: "360 cm³" },
        { id: "b", text: "180 cm³" },
        { id: "c", text: "120 cm³" },
        { id: "d", text: "60 cm³" },
      ],
      correctOptionId: "c",
      explanation:
        "Grundfladen er 6 × 6 = 36 cm². V = (36 × 10) : 3 = 360 : 3 = 120 cm³.",
    },
    {
      id: "q6",
      prompt: "En kugle har radius 6 cm. Hvad er rumfanget? (afrund til 1 decimal)",
      options: [
        { id: "a", text: "452,4 cm³" },
        { id: "b", text: "904,8 cm³" },
        { id: "c", text: "226,2 cm³" },
        { id: "d", text: "288 cm³" },
      ],
      correctOptionId: "b",
      explanation:
        "V = 4/3 × π × r³ = 4/3 × π × 216 ≈ 904,8 cm³. 452,4 er kuglens overfladeareal i cm².",
    },
    {
      id: "q7",
      prompt: "Et akvarium er 40 cm × 25 cm × 30 cm. Hvor mange liter rummer det?",
      options: [
        { id: "a", text: "3 liter" },
        { id: "b", text: "30 liter" },
        { id: "c", text: "300 liter" },
        { id: "d", text: "30.000 liter" },
      ],
      correctOptionId: "b",
      explanation:
        "V = 40 × 25 × 30 = 30.000 cm³. Da 1 liter = 1.000 cm³, er det 30.000 : 1.000 = 30 liter.",
    },
    {
      id: "q8",
      prompt: "En kasse har rumfanget 360 cm³ og en grundflade på 12 cm × 5 cm. Hvor høj er kassen?",
      options: [
        { id: "a", text: "6 cm" },
        { id: "b", text: "30 cm" },
        { id: "c", text: "60 cm" },
        { id: "d", text: "72 cm" },
      ],
      correctOptionId: "a",
      explanation:
        "Grundfladen er 12 × 5 = 60 cm². h = V : grundflade = 360 : 60 = 6 cm. Tjek: 60 × 6 = 360 cm³.",
    },
  ],
};
