import type { Topic } from "@/lib/types";

export const arktisOgAntarktis: Topic = {
  slug: "arktis-og-antarktis",
  title: "Arktis og Antarktis",
  summary:
    "Jordens poler — polklima, indlandsis, havissens dynamik, klimaforandringer og den voksende geopolitiske interesse i polare regioner.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Arctic_Ocean_map.png?width=800",
    alt: "Kort over Arktis og det arktiske hav",
    credit: "Wikimedia Commons",
    license: "Public domain",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Arctic_Ocean_map.png",
  },
  sections: [
    {
      heading: "Geografisk afgrænsning",
      body:
        "Arktis er det område nord for Polarcirklen (66,5°N) og dækker det Arktiske Ocean (ca. 14 mio. km²) omgivet af landmasser: Grønland, Canada, USA (Alaska), Rusland, Norge, Sverige, Finland og Island. Antarktis er et kontinent (ca. 14 mio. km²) dækket af en indlandsis med et gennemsnitligt tykkelse på ca. 2.100 m og en maksimal tykkelse på 4.900 m. Antarctic-traktaten fra 1959 fryser territorielle krav og forbyder militær aktivitet.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Antarctica_satellite_with_south_pole.jpg?width=800",
        alt: "Satellitbillede af Antarktis",
        credit: "NASA via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Antarctica_satellite_with_south_pole.jpg",
      },
    },
    {
      heading: "Klimatyper & polarklima",
      body:
        "Arktis og Antarktis har ET (tundra) og EF (frostklima/polarklima) i Köppens klassifikationssystem. Antarktis er verdens koldeste og tørreste kontinent — den teknisk set tørreste ørken. Middeltemperaturen ved Sydpolen er ca. −49 °C om vinteren. Arktis opvarmes fire gange hurtigere end det globale gennemsnit — en effekt kaldet Arctic Amplification — fordi smeltende is erstattes af mørkere havoverflade, der absorberer mere varme (albedo-feedback).",
    },
    {
      heading: "Indlandsis & havissens dynamik",
      body:
        "Den antarktiske indlandsis indeholder ca. 26,5 mio. km³ is svarende til ca. 61 % af alt ferskvand på Jordens overflade. Hvis al is smeltede, ville havniveauet stige ca. 58 m. Grønlands indlandsis ville bidrage med yderligere 7 m. Den arktiske havissens sommerminimumsudstrækning er faldet med ca. 13 % per årti siden 1979 (NASA). Destabilisering af Vestantarktis og Pine Island-gletscheren er et tipping point, videnskaberne følger tæt.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Arctic_sea_ice_minimum_comparison.jpg?width=800",
        alt: "Sammenligning af arktisk havis minimum 1984 vs. 2012",
        credit: "NASA via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Arctic_sea_ice_minimum_comparison.jpg",
      },
    },
    {
      heading: "Klimaforandringer & polarregionernes rolle",
      body:
        "Polarregionerne er både indikatorer og forstærkere af klimaforandringer. Permafrost (permanent frossen jord) i Sibirien og Canada indeholder enorme mængder methan og CO₂, der frigives ved optøning — en potentiel positiv feedback. Havniveaustigninger drevet af polarsmelting truer lavtliggende kystbyer og øer globalt. Tundraens optøning ændrer vilkårene for urfolk (samerne, inuitterne), flora og fauna og frigiver gammel organisk kulstof.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greenland_ice_sheet.jpg?width=800",
        alt: "Den Grønlandske Indlandsis",
        credit: "NASA via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Greenland_ice_sheet.jpg",
      },
    },
    {
      heading: "Geopolitik & ressourcer",
      body:
        "Arktis rummer anslået 30 % af verdens uopdagede naturgasreserver og 13 % af oliereserverne (USGS). Issmeltning åbner nye søfartsleder — Nordøstpassagen langs Ruslands kyst kan skære 10–15 dage fra Asien-Europa-rejsen. Rusland, Canada, Grønland (Danmark) og Norge har modsatrettede territorielle krav om den arktiske havbund (via Havretten). Russiske atomdrevne isbrydere og militære baser på arktiske øer øger spændingerne. Kina betragter sig som 'Near-Arctic State' og investerer i arktisk forskning og logistik.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt:
        "Hvad er 'Arctic Amplification', og hvorfor er det bekymrende?",
      options: [
        { id: "a", text: "Det er en forstærkningseffekt af lydbølger i polarvind" },
        { id: "b", text: "Arktis opvarmes 4× hurtigere end resten af Jordens overflade pga. albedo-feedback" },
        { id: "c", text: "Arktis afkøles hurtigere end resten pga. lavere luftfugtighed" },
        { id: "d", text: "Det beskriver, at Arktis er varmere end resten af Jordens overflade" },
      ],
      correctOptionId: "b",
      explanation:
        "Når havisen smelter, erstattes den hvide, reflekterende is (høj albedo) af mørkt hav (lav albedo), som absorberer mere solvarme. Det giver yderligere opvarmning — en positiv feedback. Resultatet er, at Arktis opvarmes ca. 3–4 gange hurtigere end det globale gennemsnit.",
    },
    {
      id: "q2",
      prompt:
        "Hvad er Antarctic-traktaten (1959)?",
      options: [
        { id: "a", text: "En aftale om fordeling af olieressourcer i Antarktis" },
        { id: "b", text: "En aftale der fryser territorielle krav, forbyder militær aktivitet og fremmer videnskabeligt samarbejde i Antarktis" },
        { id: "c", text: "En NATO-aftale om militære baser ved Sydpolen" },
        { id: "d", text: "En traktat om isbjørns fredning i Antarktis" },
      ],
      correctOptionId: "b",
      explanation:
        "Antarctic-traktaten (1959) fryser eksisterende territorielle krav og forbyder militær tilstedeværelse, atomvåben og udvinding af ressourcer. Den er underskrevet af over 50 lande og gælder for arealer syd for 60°S.",
    },
    {
      id: "q3",
      prompt:
        "Hvor meget ville havniveauet stige, hvis den antarktiske indlandsis smeltede fuldstændigt?",
      options: [
        { id: "a", text: "Ca. 7 m" },
        { id: "b", text: "Ca. 20 m" },
        { id: "c", text: "Ca. 58 m" },
        { id: "d", text: "Ca. 200 m" },
      ],
      correctOptionId: "c",
      explanation:
        "Den antarktiske indlandsis indeholder ca. 26,5 mio. km³ is. Hvis alt smeltede, ville det svare til ca. 58 m havniveaustigning. Grønlands is ville bidrage med ca. 7 m yderligere — men begge scenarier er på meget lang tidsskala.",
    },
    {
      id: "q4",
      prompt:
        "Hvad er Nordøstpassagen, og hvem kontrollerer den?",
      options: [
        { id: "a", text: "En luftkorridor over Arktis — kontrolleret af ICAO" },
        { id: "b", text: "En søfartsvej langs Ruslands nordkyst, der forbinder Europa og Asien — primært under russisk kontrol" },
        { id: "c", text: "En passagervejstunnel under Arktis — ejet af Canada og Rusland i fællesskab" },
        { id: "d", text: "En vandvej ved siden af Panamakanalen — kontrolleret af USA" },
      ],
      correctOptionId: "b",
      explanation:
        "Nordøstpassagen (russisk: Sevmorput/Northern Sea Route) løber langs Ruslands arktiske kyst. Iskassning gør den gradvist farbar om sommeren. Rusland kræver at skippe skal have tilladelse og lodses — hvad andre lande bestrider. Ruten kan skære 10–15 dage af Asien-Europa-rejsen.",
    },
    {
      id: "q5",
      prompt:
        "Hvad sker der med permafrost, og hvad er konsekvensen for klimaet?",
      options: [
        { id: "a", text: "Permafrost vokser pga. arktisk kulde — det absorberer mere CO₂" },
        { id: "b", text: "Permafrost optøer og frigiver methan og CO₂, som forstærker klimaforandringer" },
        { id: "c", text: "Permafrost har ingen effekt på klimagasser" },
        { id: "d", text: "Permafrost smelter kun i Antarktis, ikke i Arktis" },
      ],
      correctOptionId: "b",
      explanation:
        "Permafrost er jord, der har været frossen i mindst to år — og i Sibirien op til hundredtusinder af år. Den indeholder enorme mængder organisk kulstof. Når den optøer pga. opvarmning, nedbrydes det organiske materiale og frigiver CO₂ og methan — en positiv feedback-loop der forstærker den globale opvarmning.",
    },
  ],
};
