import type { Topic } from "@/lib/types";
import LinearRegressionDemo from "@/components/LinearRegressionDemo";

export const lineaerRegression: Topic = {
  slug: "lineaer-regression",
  title: "Lineær regression",
  summary:
    "Forstå sammenhængen mellem datapunkter og linjen y = m·x + b med en interaktiv visualisering.",
  demoComponent: LinearRegressionDemo,
  sections: [
    {
      heading: "Hvad er lineær regression?",
      body:
        "Lineær regression bruges til at beskrive en tilnærmet lineær sammenhæng mellem en uafhængig variabel x og en afhængig variabel y. I modellen y = m·x + b bestemmer m linjens hældning, mens b er skæringen med y-aksen.",
    },
    {
      heading: "Sådan bruger du demoen",
      body:
        "Flyt sliderne for m og b for at se, hvordan regressionslinjen flytter sig i forhold til punkterne. Jo tættere linjen ligger på punkterne samlet set, jo bedre beskriver modellen data. Brug 'Randomiser punkter' til at prøve nye datasæt.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad repræsenterer parameteren m i modellen y = m·x + b?",
      options: [
        { id: "a", text: "Linjens hældning" },
        { id: "b", text: "Skæringen med x-aksen" },
        { id: "c", text: "Antallet af datapunkter" },
        { id: "d", text: "Middelværdien af y" },
      ],
      correctOptionId: "a",
      explanation:
        "m er hældningen. En større m-værdi gør linjen stejlere opad, mens en negativ m-værdi giver en faldende linje.",
    },
    {
      id: "q2",
      prompt: "Hvad sker der, når b øges i y = m·x + b, mens m holdes konstant?",
      options: [
        { id: "a", text: "Linjen bliver stejlere" },
        { id: "b", text: "Linjen flyttes opad parallelt" },
        { id: "c", text: "Linjen roterer omkring origo" },
        { id: "d", text: "Punkterne randomiseres" },
      ],
      correctOptionId: "b",
      explanation:
        "b bestemmer skæringen med y-aksen. Når b stiger, flyttes hele linjen opad uden at ændre hældning.",
    },
  ],
};
