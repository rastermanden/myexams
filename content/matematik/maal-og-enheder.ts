import type { Topic } from "@/lib/types";
import MaalOgEnhederDemo from "@/components/MaalOgEnhederDemo";

export const maalOgEnheder: Topic = {
  slug: "maal-og-enheder",
  title: "Mål og enheder",
  summary:
    "Lær længde, areal, rumfang, masse, tid, hastighed, temperatur og målestoksforhold med omregningstræning.",
  demoComponent: MaalOgEnhederDemo,
  sections: [
    {
      heading: "Overblik over enheder",
      body:
        "I dette emne træner du enheder og omregning på folkeskole-niveau med repetition til gymnasiet. Vi arbejder med længde (mm, cm, m, km, tommer og fod), areal (mm², cm², m², ha, km²), rumfang (mL, cL, L, m³), vægt/masse (mg, g, kg, t), tid (sekund, minut, time, døgn, år), hastighed (m/s og km/h), temperatur (°C og K) samt målestoksforhold i kort og modeller.",
    },
    {
      heading: "Sådan omregner du sikkert",
      body:
        "Start med at finde hvilken størrelse du måler (fx længde eller masse). Brug derefter en fælles baseenhed og omregn i to trin: fra den første enhed til baseenheden, og videre til den ønskede enhed. For metriske enheder kan du ofte nøjes med at flytte decimalpunktet. Ved areal flytter du typisk decimalpunktet to trin pr. enhedsspring, og ved rumfang kan springene være tre trin mellem fx liter og kubikmeter.",
    },
    {
      heading: "Målestoksforhold og praktiske opgaver",
      body:
        "Målestoksforhold 1:n betyder, at 1 enhed på kortet svarer til n enheder i virkeligheden. Hvis en afstand er 4 cm på et kort med målestok 1:25.000, er den virkelige afstand 4 × 25.000 cm = 100.000 cm = 1.000 m = 1 km. I praksis skal du ofte kombinere flere omregninger, fx når du beregner fart i km/h fra afstand og tid eller sammenligner temperatur i °C og K.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er 2,5 km i meter?",
      options: [
        { id: "a", text: "250 m" },
        { id: "b", text: "2.500 m" },
        { id: "c", text: "25.000 m" },
        { id: "d", text: "0,25 m" },
      ],
      correctOptionId: "b",
      explanation: "1 km = 1.000 m, så 2,5 km = 2,5 × 1.000 = 2.500 m.",
    },
    {
      id: "q2",
      prompt: "Hvad er 3 m² i cm²?",
      options: [
        { id: "a", text: "300 cm²" },
        { id: "b", text: "3.000 cm²" },
        { id: "c", text: "30.000 cm²" },
        { id: "d", text: "300.000 cm²" },
      ],
      correctOptionId: "c",
      explanation:
        "1 m = 100 cm, derfor er 1 m² = 100² = 10.000 cm². Så 3 m² = 30.000 cm².",
    },
    {
      id: "q3",
      prompt: "Hvad er 750 mL i liter?",
      options: [
        { id: "a", text: "0,075 L" },
        { id: "b", text: "0,75 L" },
        { id: "c", text: "7,5 L" },
        { id: "d", text: "75 L" },
      ],
      correctOptionId: "b",
      explanation: "1.000 mL = 1 L, så 750 mL = 0,75 L.",
    },
    {
      id: "q4",
      prompt: "Hvad svarer 72 km/h til i m/s?",
      options: [
        { id: "a", text: "10 m/s" },
        { id: "b", text: "18 m/s" },
        { id: "c", text: "20 m/s" },
        { id: "d", text: "25 m/s" },
      ],
      correctOptionId: "c",
      explanation: "Del med 3,6: 72 ÷ 3,6 = 20 m/s.",
    },
    {
      id: "q5",
      prompt: "Et kort har målestok 1:50.000. Hvad svarer 2 cm på kortet til i virkeligheden?",
      options: [
        { id: "a", text: "100 m" },
        { id: "b", text: "1.000 m" },
        { id: "c", text: "10 km" },
        { id: "d", text: "100 km" },
      ],
      correctOptionId: "b",
      explanation:
        "2 × 50.000 cm = 100.000 cm = 1.000 m, som er det samme som 1 km.",
    },
    {
      id: "q6",
      prompt: "Hvad er 20 °C i Kelvin?",
      options: [
        { id: "a", text: "253,15 K" },
        { id: "b", text: "273,15 K" },
        { id: "c", text: "293,15 K" },
        { id: "d", text: "313,15 K" },
      ],
      correctOptionId: "c",
      explanation: "Læg 273,15 til: 20 + 273,15 = 293,15 K.",
    },
  ],
};
