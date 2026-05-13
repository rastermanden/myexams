import type { Topic } from "@/lib/types";

export const havstroemme: Topic = {
  slug: "havstroemme",
  title: "Havstrømme",
  summary:
    "Havstrømmene transporterer enorme mængder varme rundt på Jorden og spiller en afgørende rolle for klimaet – fra Golfstrømmens milde vintre i Europa til den termohaline cirkulations globale klimaregulering.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Corrientes-oceanicas.gif?width=800",
    alt: "Verdenskort over de vigtigste overfladestrømme i verdenshavene",
    credit: "NASA via Wikimedia Commons",
    license: "Public domain",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Corrientes-oceanicas.gif",
  },
  sections: [
    {
      heading: "Overfladestrømme",
      body:
        "Overfladestrømmene i verdenshavene drives primært af de globale vinde – særligt passatvindene og vestevindbæltet. De danner store cirkulære systemer kaldet gyrer: i de subtropiske oceaner cirkulerer vandet med uret på den nordlige halvkugle og mod uret på den sydlige. Langs vestsiden af oceanerne (nær kontinenternes østkyst) dannes smalle, hurtige, varme strømme – som Golfstrømmen i Atlanten og Kuroshio i Stillehavet. Langs østsiden af oceanerne dannes brede, langsomme, kolde strømme – som Kanaristrømmen og Californiastrømmen. Overfladestrømmene påvirker kystklimater markant.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Oceanic_gyres.png?width=800",
        alt: "De fem store havgyrer i verdenshavene",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Oceanic_gyres.png",
      },
    },
    {
      heading: "Golfstrømmen",
      body:
        "Golfstrømmen er en varm havstrøm, der starter i Den Mexicanske Golf, strømmer nordøst langs USA's østkyst og krydser Atlanterhavet mod Nordvesteuropa. Den transporterer ca. 1,3 petawatt varme – mere end hele menneskekultens energiforbrug. Golfstrømmens varme havoverflade opvarmer de atlantiske luftmasser, som vestevindbæltet fører ind over Nordvesteuropa og giver betydeligt mildere vintre, end bredde­graden ellers ville berettige. Oslo og London (ca. 52–60°N) har markant mildere vintre end Montreal og Labrador på samme breddegrad. Golfstrømmen er del af et større system kaldet AMOC.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Golfstrom.jpg?width=800",
        alt: "Satellitbillede der viser Golfstrømmens temperaturmønster i Atlanterhavet",
        credit: "NASA GSFC via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Golfstrom.jpg",
      },
    },
    {
      heading: "Termohalin cirkulation og AMOC",
      body:
        "Den termohaline cirkulation (THC), populært kaldet 'den globale havbånd-transportør', er en dybhavscirkulation drevet af tæthedsvariationer i havvandet. Tæthed stiger med lavere temperatur og højere saltholdighed. I Nordatlanten afkøles Golfstrømmens varme, saltede vand så meget, at det synker til bunds og strømmer mod syd som dybt, koldt bundvand. Dette skaber et 'sug', der trækker mere varmt overfladevand nordpå. AMOC (Atlantic Meridional Overturning Circulation) er betegnelsen for dette atlantiske kredsløb. Det tager ca. 1.000 år at fuldende ét kredsløb.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Thermohaline_circulation.svg?width=800",
        alt: "Diagram over den globale termohaline cirkulation (havbånd-transportøren)",
        credit: "Robert Simmon, NASA via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Thermohaline_circulation.svg",
      },
    },
    {
      heading: "Klimaets påvirkning af havstrømmene",
      body:
        "Klimaforandringer truer den termohaline cirkulation. Smeltende is fra Grønland og Arktis tilfører store mængder ferskvand til Nordatlanten. Ferskvand er lettere end saltvand og hæmmer det dybe synkningsflow, der driver AMOC. Videnskabelige målinger viser, at AMOC allerede er svækket til sit laveste niveau i over 1.000 år. Hvis AMOC kollapsede, kunne Nordeuropas temperaturer falde 3–8 °C på årtier – et dramatisk klimaskifte, der ville overstige den globale opvarmning i regionen. Tippepunktet er usikkert, men IPCC vurderer, at en gradvis svækkelse er meget sandsynlig i dette århundrede.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er den primære drivkraft bag overfladestrømmene?",
      options: [
        { id: "a", text: "Jordens magnetfelt" },
        { id: "b", text: "De globale vinde, primært passatvindene og vestevindbæltet" },
        { id: "c", text: "Tidevandsforskelle fra Månens tiltrækning" },
        { id: "d", text: "Temperaturforskelle i dybhavet" },
      ],
      correctOptionId: "b",
      explanation:
        "Overfladestrømmene drives primært af friktion fra de dominerende vindmønstre – passatvindene i troperne og vestevindbæltet i tempererede breddegrader. De danner de store oceanyrer.",
    },
    {
      id: "q2",
      prompt: "Hvad er drivkraften bag den termohaline cirkulation (AMOC)?",
      options: [
        { id: "a", text: "Vinden over havoverfladen" },
        { id: "b", text: "Tættere, koldere og saltere vand synker og skaber dyb­havscirkulation" },
        { id: "c", text: "Jordens rotation (Corioliseffekten alene)" },
        { id: "d", text: "Havbundsvulkaner der opvarmer dybt vand" },
      ],
      correctOptionId: "b",
      explanation:
        "AMOC drives af tæthedsvariationer: koldt, salt vand er tungere og synker til havbunden i Nordatlanten. Dette trækker varmt overfladevand nordpå. Ferskvand fra smeltet is kan forstyrre dette ved at mindske tætheden.",
    },
    {
      id: "q3",
      prompt: "Hvorfor har Nordvesteuropa mildere vintre end Nordamerika på samme breddegrad?",
      options: [
        { id: "a", text: "Europa er tættere på ækvator" },
        { id: "b", text: "Golfstrømmens varme vand opvarmer de atlantiske luftmasser, der transporteres ind over Europa af vestenvindene" },
        { id: "c", text: "Europa er meget lavere liggende end Nordamerika" },
        { id: "d", text: "Europas industri producerer mere varme end Nordamerikas" },
      ],
      correctOptionId: "b",
      explanation:
        "Golfstrømmen bringer varmt vand fra troperne til Nordatlanten. Vestenvindene transporter den opvarmede havluft ind over Nordvesteuropa og giver milde vintre. Eksempel: Oslo (ca. 60°N) har en januar­middeltemperatur på –2 °C, mens Montreal (45°N) har –9 °C.",
    },
    {
      id: "q4",
      prompt: "Hvad er en 'gyre' i havstrømmenes sammenhæng?",
      options: [
        { id: "a", text: "Et dybhavsvulkanudbrud" },
        { id: "b", text: "En stor, cirkulær overfladestrøm i et ocean, drevet af vinde og Coriolis" },
        { id: "c", text: "En tyfon i det tropiske Stillehav" },
        { id: "d", text: "En opvelling af koldt bundvand" },
      ],
      correctOptionId: "b",
      explanation:
        "En gyre er en stor, cirkulær havstrøm, der dannes af vinde og Corioliseffekten. I hvert af de fem store oceanbassiner er der en subtropisk gyre: med uret på den nordlige halvkugle, mod uret på den sydlige.",
    },
    {
      id: "q5",
      prompt: "Hvad er den forventede konsekvens af, at AMOC svækkes markant?",
      options: [
        { id: "a", text: "Varmere vintre i Nordvesteuropa pga. mere atlantisk varme" },
        { id: "b", text: "Kraftigt koldere klima i Nordvesteuropa, muligvis 3–8 °C koldere" },
        { id: "c", text: "Mere kraftige orkaner i det tropiske Atlanterhav" },
        { id: "d", text: "Lavere havniveau i Nordatlanten" },
      ],
      correctOptionId: "b",
      explanation:
        "Hvis AMOC svækkes eller kollapser, vil langt mindre varme blive transporteret nordpå. Modeller antyder, at Nordvesteuropa kunne blive 3–8 °C koldere, selvom den globale opvarmning fortsætter. Det ville have dramatiske konsekvenser for landbrug, levevilkår og infrastruktur.",
    },
    {
      id: "q6",
      prompt: "Hvad er den potentielle forbinding mellem smeltende Grønlandsgletsjer og AMOC?",
      options: [
        { id: "a", text: "Smeltevannet giver mere CO₂ til atmosfæren" },
        { id: "b", text: "Ferskvand fra smeltende is fortynder Nordatlantens saltholdighed og hæmmer vandets synkning, der driver AMOC" },
        { id: "c", text: "Isens bortsmeltning blotlægger mørkt hav, der reflekterer mere varme" },
        { id: "d", text: "Gletsjerferskvand tilfører næringsstoffer, der øger algevæksten" },
      ],
      correctOptionId: "b",
      explanation:
        "AMOC drives af tungt, salt vand der synker i Nordatlanten. Ferskvand fra smeltende Grønlandsgletsjer er lettere og fortynder saltholdig­heden. Det reducerer vandets tæthed og dets evne til at synke – hvilket kan svække eller stoppe AMOC.",
    },
  ],
};
