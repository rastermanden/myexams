import type { Topic } from "@/lib/types";

export const australien: Topic = {
  slug: "australien",
  title: "Australien",
  summary:
    "Australien som region og stat: naturgeografi, klima, befolkning og økonomisk-geografisk placering i Indo-Pacific.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Australia_(orthographic_projection).svg?width=800",
    alt: "Australien fremhævet på en globus",
    credit: "Wikimedia Commons",
    license: "CC BY-SA 3.0",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Australia_(orthographic_projection).svg",
  },
  sections: [
    {
      heading: "Beliggenhed & rumlig afgrænsning",
      body:
        "Australien ligger på den sydlige halvkugle mellem Det Indiske Ocean og Stillehavet. Landet er både et kontinent, en stat og en central del af regionen Oceanien. Nabolande i den bredere region er bl.a. Indonesien, Papua Ny Guinea og New Zealand. Den store afstand mellem byerne og de enorme ubeboede arealer i inlandet gør transportgeografi og infrastruktur til nøgletemaer i australsk geografi.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Australia_satellite_plane.jpg?width=800",
        alt: "Satellitbillede af Australien",
        credit: "NASA via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Australia_satellite_plane.jpg",
      },
    },
    {
      heading: "Klima & naturgrundlag",
      body:
        "Det indre Australien domineres af tørt ørken- og steppeklima (BWh/BSh), mens kystområderne har mere fugtige klimaformer. Nord har tropisk monsunpåvirkning, sydvest middelhavsklima og sydøst tempereret klima. Klimaet påvirkes af ENSO (El Niño/La Niña), som kan forstærke både tørke og ekstreme nedbørshændelser. Hyppige hedebølger og bushfires gør Australien til et centralt case for klimarisiko og tilpasning.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Climate_of_Australia.png?width=800",
        alt: "Klimakort over Australien",
        credit: "Australian Bureau of Meteorology via Wikimedia Commons",
        license: "CC BY 3.0 AU",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Climate_of_Australia.png",
      },
    },
    {
      heading: "Befolkning, urbanisering & økonomisk geografi",
      body:
        "Over 85 % af befolkningen bor i byområder langs kysten, især i Sydney, Melbourne, Brisbane, Perth og Adelaide. Befolkningstætheden er meget lav i outbacken, hvilket skaber en stærk kyst-inland-kontrast. Australien er en højt udviklet råvareeksportør med stor betydning inden for jernmalm, kul, naturgas og landbrug. Samtidig spiller tjenestesektoren og universitetsbyer en vigtig rolle i landets globale forbindelser.",
    },
    {
      heading: "Geopolitik i Indo-Pacific",
      body:
        "Australien har en strategisk placering i Indo-Pacific og indgår i sikkerheds- og handelssamarbejder med bl.a. USA, Japan, Indien og ASEAN-lande. Geografisk nærhed til maritime handelsruter giver stor betydning for havne, søfart og forsyningskæder. Landets udenrigsøkonomi er tæt koblet til asiatiske markeder, særligt Kina, hvilket gør regionens geopolitiske udvikling afgørende for australsk økonomi.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvilken påstand beskriver bedst Australiens bosætningsmønster?",
      options: [
        { id: "a", text: "De fleste bor i det centrale outback-område" },
        { id: "b", text: "Befolkningen er primært koncentreret i kystnære byområder" },
        { id: "c", text: "Befolkningen er jævnt fordelt over hele kontinentet" },
        { id: "d", text: "Flertallet bor i nordlige regnskovsområder" },
      ],
      correctOptionId: "b",
      explanation:
        "Australien har et stærkt kystmønster, hvor de største byer ligger langs østkysten, sydkysten og i sydvest, mens det indre er tyndt befolket.",
    },
    {
      id: "q2",
      prompt: "Hvilken klimatype dominerer store dele af det centrale Australien?",
      options: [
        { id: "a", text: "Tropisk regnskovsklima (Af)" },
        { id: "b", text: "Middelhavsklima (Csa)" },
        { id: "c", text: "Tørt ørken- og steppeklima (BWh/BSh)" },
        { id: "d", text: "Subarktisk klima (Dfc)" },
      ],
      correctOptionId: "c",
      explanation:
        "Det centrale Australien er præget af meget tørre klimaformer med lav nedbør, som i Köppen-systemet klassificeres som især BWh og BSh.",
    },
    {
      id: "q3",
      prompt: "Hvorfor er Australien geostrategisk vigtigt i Indo-Pacific?",
      options: [
        { id: "a", text: "Landet kontrollerer Suezkanalen" },
        { id: "b", text: "Landet ligger centralt ift. maritime ruter og asiatiske markeder" },
        { id: "c", text: "Landet er omgivet af indlandshave uden global handel" },
        { id: "d", text: "Landet har ingen handelsrelationer i Asien" },
      ],
      correctOptionId: "b",
      explanation:
        "Australien ligger tæt på vigtige havruter og er økonomisk tæt knyttet til asiatiske økonomier, hvilket giver stor regional betydning.",
    },
  ],
};
