import type { Topic } from "@/lib/types";

export const klimaetsElementer: Topic = {
  slug: "klimaets-elementer",
  title: "Klimaets elementer",
  summary:
    "En gennemgang af de centrale klimaelementer: temperatur, nedbør, lufttryk, vind og luftfugtighed – samt hvordan de måles på vejrstationer.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stevenson_screen.jpg?width=800",
    alt: "Stevenson-skærm (vejrhytte) til måling af temperatur og luftfugtighed",
    credit: "Wikimedia Commons",
    license: "CC BY-SA 3.0",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Stevenson_screen.jpg",
  },
  sections: [
    {
      heading: "Temperatur",
      body:
        "Temperatur er det mest grundlæggende klimaelement og angiver luftens varmeindhold. Den måles i grader Celsius (°C) i en standard vejrhytte (Stevenson-skærm) 2 meter over terræn i skygge. Vigtige afledte størrelser er middeltemperaturen (gennemsnittet af maksimum og minimum på en dag), årstemperaturamplituden (forskel mellem varmeste og koldeste måneds middel) og antallet af frostdage. Temperaturfordelingen på Jorden bestemmes primært af breddegrad (solvinkel og dagslængde), sæson, højde, kontinentalitet og havstrømme. Insolation – den indgående solstråling – er den ultimative drivkraft.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Maximum_and_minimum_thermometer.jpg?width=800",
        alt: "Maksimum- og minimumstermometer til vejrobservation",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Maximum_and_minimum_thermometer.jpg",
      },
    },
    {
      heading: "Nedbør",
      body:
        "Nedbør er vand, der falder fra atmosfæren til jordens overflade i form af regn, sne, hagl, slud, rimfrost m.m. Det måles i millimeter (mm) med en nedbørsmåler (regnmåler). Nedbørens globale fordeling afhænger af atmosfæriske cirkulations­mønstre: ved ækvator stiger varm, fugtig luft (Inter­tropisk Konvergenszone) og giver rigelig nedbør; ved ca. 30° nord og syd synker tør luft og skaber tørrezone­r (verdens ørkner). Mønsteret gentages svagere ved ca. 60° (frontalregn) og 90° (polære ørkner). Nedbørens form og fordeling over året er afgørende for vegetationstype og vandressourcer.",
    },
    {
      heading: "Lufttryk og vind",
      body:
        "Lufttryk er atmosfærens tryk pr. arealenhed, målt i hektopascal (hPa). Normalt lufttryk ved havoverfladen er ca. 1013 hPa. Luft bevæger sig altid fra højtryk mod lavtryk – det er grundlaget for vind. Jordens rotation afbøjer vinden via Corioliseffekten: på den nordlige halvkugle drejer vinden til højre (mod uret om lavtryk), og på den sydlige halvkugle til venstre. Temperaturforskelle mellem land og hav giver monsun­cirkulation og søbrisser. Den globale trykfordeling – med permanente højtryks­bælter (subtroperne) og lavtryks­bælter (ved ækvator og 60°) – styrer de store globale vindsystemer.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Barometer_mercury_bw.jpg?width=800",
        alt: "Kviksølvbarometer til måling af lufttryk",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Barometer_mercury_bw.jpg",
      },
    },
    {
      heading: "Luftfugtighed",
      body:
        "Luftfugtighed angiver mængden af vanddamp i atmosfæren. Absolut luftfugtighed er gram vanddamp pr. kubikmeter luft, mens relativ luftfugtighed (%) angiver, hvor mættet luften er ved den aktuelle temperatur (100 % = dugpunkt). Varm luft kan indeholde langt mere vanddamp end kold luft. Når luften afkøles til under dugpunktet, kondenserer vanddampen og danner skyer, tåge eller nedbør. Verdensatmosfæren indeholder ca. 13.000 km³ vanddamp, som cirkulerer gennem det hydrologiske kredsløb med en gennemsnitlig opholdstid på kun ~9 dage.",
    },
    {
      heading: "Vejrstationer og målinger",
      body:
        "Systematisk klimaovervågning kræver standardiserede målinger. En vejrstation indeholder typisk: Stevenson-skærm (temperatur/fugtighed), nedbørsmåler, vindmåler (anemometer) og -retnings­måler (vindvane), solskinstimer-måler (heliograf) og barometer. I Danmark drives det primære net af DMI med over 100 stationer. Globalt koordineres observationerne af WMO (Verdens Meteorologiske Organisation). Satellitter supplerer det terrænnære net med data om skydækning, havoverfladetemperaturer, nedbørsestimater og strålings­balance. Klimamodeller (GCM'er) assimilerer disse data til at beregne klimaprojektioner.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Anemometer.jpg?width=800",
        alt: "Kopanemometer til måling af vindhastighed",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Anemometer.jpg",
      },
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "I hvilken højde over terræn måles lufttemperaturen ifølge WMO-standard?",
      options: [
        { id: "a", text: "0,5 meter" },
        { id: "b", text: "2 meter" },
        { id: "c", text: "5 meter" },
        { id: "d", text: "10 meter" },
      ],
      correctOptionId: "b",
      explanation:
        "WMO kræver, at lufttemperaturen måles i en Stevenson-skærm (vejrhytte) placeret 2 meter over terræn i skygge og med god ventilation. Det sikrer sammenlignelighed på tværs af stationer verdensover.",
    },
    {
      id: "q2",
      prompt: "Hvad angiver 'relativ luftfugtighed' på 100 %?",
      options: [
        { id: "a", text: "Luften indeholder 100 gram vanddamp pr. kubikmeter" },
        { id: "b", text: "Luften er fuldt mættet med vanddamp ved den aktuelle temperatur" },
        { id: "c", text: "Det er forholdet mellem luftfugtighed i dag og normalen" },
        { id: "d", text: "Det regner med 100 mm nedbør pr. time" },
      ],
      correctOptionId: "b",
      explanation:
        "Relativ luftfugtighed på 100 % betyder, at luften er fuldt mættet – den kan ikke opholde mere vanddamp ved den aktuelle temperatur. Yderligere afkøling vil medføre kondensation i form af dug, tåge eller skyer.",
    },
    {
      id: "q3",
      prompt: "Hvad er det normale lufttryk ved havoverfladen?",
      options: [
        { id: "a", text: "760 hPa" },
        { id: "b", text: "900 hPa" },
        { id: "c", text: "1013 hPa" },
        { id: "d", text: "1200 hPa" },
      ],
      correctOptionId: "c",
      explanation:
        "Normalt lufttryk ved havoverfladen (1 atmosfære) er 1013,25 hPa (hektopascal), svarende til 760 mmHg. Lufttrykket falder med stigende højde, da der er mindre atmosfære over.",
    },
    {
      id: "q4",
      prompt: "Hvilken effekt afbøjer vejrfænomener og vind på den nordlige halvkugle til højre?",
      options: [
        { id: "a", text: "Hadley-effekten" },
        { id: "b", text: "Corioliseffekten" },
        { id: "c", text: "Albedoeffekten" },
        { id: "d", text: "Föneffekten" },
      ],
      correctOptionId: "b",
      explanation:
        "Corioliseffekten opstår pga. Jordens rotation. På den nordlige halvkugle afbøjes bevægende genstande (herunder luft) til højre i bevægelsesretningen, hvilket giver vind mod uret om lavtryk og meduret om højtryk.",
    },
    {
      id: "q5",
      prompt: "Hvad måler et anemometer?",
      options: [
        { id: "a", text: "Lufttryk" },
        { id: "b", text: "Luftfugtighed" },
        { id: "c", text: "Vindhastighed" },
        { id: "d", text: "Nedbørsmængde" },
      ],
      correctOptionId: "c",
      explanation:
        "Et anemometer (oftest et kopanemometer med roterende kopper) måler vindhastighed, typisk i meter pr. sekund (m/s) eller knob. Vindretning måles separat med en vindvane.",
    },
    {
      id: "q6",
      prompt: "Hvorfor modtager subtroperne (ca. 30° N og S) typisk meget lidt nedbør?",
      options: [
        { id: "a", text: "Fordi de ligger langt fra havene" },
        { id: "b", text: "Fordi synkende luftmasser her skaber højtryk og opvarmes, så nedbørsdannelse hæmmes" },
        { id: "c", text: "Fordi Corioliseffekten er størst ved 30°" },
        { id: "d", text: "Fordi ozonlaget er tykkest ved disse breddegrader" },
      ],
      correctOptionId: "b",
      explanation:
        "I Hadley-cellernes synkningszone ved ca. 30° N og S falder tør luft ned. Den komprimeres og opvarmes adiabatisk, hvilket øger dens kapacitet til at holde vanddamp og hæmmer nedbørsdannelse – det er her verdens store ørkner ligger.",
    },
    {
      id: "q7",
      prompt: "Hvad er 'årstemperaturamplituden' for et sted?",
      options: [
        { id: "a", text: "Forskellen mellem dagens maksimum- og minimumtemperatur" },
        { id: "b", text: "Gennemsnittet af alle dagsmiddeltemperaturer på et år" },
        { id: "c", text: "Forskellen mellem den varmeste og koldeste måneds middeltemperatur" },
        { id: "d", text: "Antal dage pr. år med temperatur over 25 °C" },
      ],
      correctOptionId: "c",
      explanation:
        "Årstemperaturamplituden er differencen mellem den varmeste måneds middeltemperatur og den koldeste måneds middeltemperatur. En høj amplitude (f.eks. 30 °C i Sibirien) indikerer et kontinentalt klima; en lav amplitude (f.eks. 8 °C i Bergen) indikerer et maritimt klima.",
    },
  ],
};
