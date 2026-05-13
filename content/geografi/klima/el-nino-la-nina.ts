import type { Topic } from "@/lib/types";

export const elNinoLaNina: Topic = {
  slug: "el-nino-la-nina",
  title: "El Niño og La Niña",
  summary:
    "ENSO-systemet (El Niño-Southern Oscillation) er den vigtigste naturlige klimavariabilitet på Jordens overflade og påvirker vejr og klima over hele verden.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/El_Nino_1997.jpg?width=800",
    alt: "Satellitbillede af Stillehavets overfladetemperatur under El Niño 1997",
    credit: "NASA/JPL via Wikimedia Commons",
    license: "Public domain",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:El_Nino_1997.jpg",
  },
  sections: [
    {
      heading: "ENSO-systemet",
      body:
        "ENSO (El Niño-Southern Oscillation) er et periodisk klimafænomen i det tropiske Stillehav, der skifter mellem tre faser: neutral, El Niño (varm fase) og La Niña (kold fase). Systemet danner et tæt koblet ocean-atmosfære system: havtemperaturer, vinde og nedbørsmønstre forstærker gensidigt hinanden i en feedback­løkke. ENSO påvirker vejr og klima over store dele af Jorden og er den vigtigste kilde til global klimavariabilitet fra år til år. Et ENSO-cyklus varer typisk 2–7 år. Det måles bl.a. ved Niño3.4-indekset (havtemperatur­anomali i det centrale Stillehav).",
    },
    {
      heading: "El Niño",
      body:
        "El Niño er ENSOs varme fase. Under normale forhold blæser passatvindene vest mod vest i det tropiske Stillehav og hober varmt vand op ved Asien/Australien (Vestpacifik), mens køligt dybvand opler i Østpacifik (Sydamerika). Under El Niño svækkes eller vendes passatvindene, og det varme vand breder sig øst­på. Overfladetemperaturen i det centrale og østlige tropiske Stillehav stiger med 0,5–3 °C eller mere. El Niño opstod første gang anerkendt i 1500-tallets spanske søfart (peruanske fiskere navngav det 'El Niño' – Jesusbarnet – da det kom om juletid). Stærke El Niño-episoder er 1982–83, 1997–98 og 2015–16.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Enso_normal.png?width=800",
        alt: "Diagram over normal tilstand vs. El Niño og La Niña i det tropiske Stillehav",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Enso_normal.png",
      },
    },
    {
      heading: "La Niña",
      body:
        "La Niña er ENSOs kolde fase og på mange måder det modsatte af El Niño. Passatvindene er stærkere end normalt, og mere varmt vand hober sig op i Vestpacifik. Det østlige tropiske Stillehav er koldere end normalt. La Niña er forbundet med øget opling af næringsrigt, koldt vand langs Sydamerikas kyst, hvilket gavner fiskeriet. Globalt set giver La Niña-år typisk lidt lavere global middeltemperatur. La Niña-år forbindes med svigtende regntider i Østafrika og dele af Sydamerika, kraftigere atlantiske orkan-sæsoner og mere nedbør i Australien og Sydøstasien.",
    },
    {
      heading: "Globale konsekvenser",
      body:
        "ENSO's virkninger forplanter sig langt ud over Stillehavet via 'telekonnek­tioner' i atmosfæren. El Niño: tørke i Australien, Sydøstasien, Indien og Østafrika; kraftig nedbør i Peru og Californien; svagere atlantisk orkan-sæson; mildere vintre i Canada og det nordlige USA. La Niña: modsatte mønstre – mere nedbør i Australien og Østafrika; kraftigere atlantisk orkan­sæson; koldere vintre i USA's nordvest. ENSO påvirker også Afrikas Horn, Sydafrika, Brasilien og Europa. Den globale middeltemperatur er typisk 0,1–0,2 °C varmere i El Niño-år og tilsvarende koldere i La Niña-år.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/ENSO_teleconnections.jpg?width=800",
        alt: "Verdenskort der viser ENSOs globale telekonnek­tioner og vejrpåvirkninger",
        credit: "NOAA via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:ENSO_teleconnections.jpg",
      },
    },
    {
      heading: "Forbindelsen til klimaforandringer",
      body:
        "Klimaforandringer påvirker ENSO-systemet, men på komplicerede måder. Forskning tyder på, at fremtidige El Niño-episoder kan blive kraftigere og hyppigere, og at 'superel Niño'er' (som 1997–98 og 2015–16) kan blive mere normale. Klimaopvarmningen øger baggrunds­temperaturen i Stillehavet, hvilket forstærker El Niños varme­signal. IPCC bemærker stor usikkerhed om fremtidens ENSO-mønster, men er mere sikker på, at El Niños effekter på nedbør og ekstremvejr vil forstærkes. ENSO-relaterede tørker og oversvømmelser vil ramme sårbare regioner hårdere i et varmere klima.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad står ENSO for?",
      options: [
        { id: "a", text: "Eastern North Sea Oscillation" },
        { id: "b", text: "El Niño-Southern Oscillation" },
        { id: "c", text: "Equatorial North-South Ocean current" },
        { id: "d", text: "European Natural Seasonal Output" },
      ],
      correctOptionId: "b",
      explanation:
        "ENSO = El Niño-Southern Oscillation. Det er et koblet ocean-atmosfæresystem i det tropiske Stillehav, der cyklisk skifter mellem El Niño (varm fase), La Niña (kold fase) og neutral tilstand.",
    },
    {
      id: "q2",
      prompt: "Hvad sker der med passatvindene under El Niño?",
      options: [
        { id: "a", text: "De forstærkes markant og driver mere varmt vand mod vest" },
        { id: "b", text: "De svækkes eller vendes, og varmt vand breder sig østpå" },
        { id: "c", text: "De skifter retning og blæser fra syd mod nord" },
        { id: "d", text: "De stopper helt i det tropiske Stillehav" },
      ],
      correctOptionId: "b",
      explanation:
        "Under El Niño svækkes de normale østlige passatvinde, og det varme vand, der normalt ophober sig i Vestpacifik, flyder østpå. Det opvarmer overfladen af det centrale og østlige tropiske Stillehav.",
    },
    {
      id: "q3",
      prompt: "Hvad er den typiske klimaeffekt af La Niña i Australien?",
      options: [
        { id: "a", text: "Kraftig tørke og øget risiko for skovbrande" },
        { id: "b", text: "Mere end normal nedbør og risiko for oversvømmelser" },
        { id: "c", text: "Koldere temperaturer og sne i Sydaustralien" },
        { id: "d", text: "Øget cyklonaktivitet i Vest­australien" },
      ],
      correctOptionId: "b",
      explanation:
        "La Niña giver mere end normal nedbør i Australien, da mere varmt vand ophober sig i Vestpacifik og giver kraftig nedbør over nærliggende landmasser. Australien oplevede fx exceptionelle oversvømmelser under La Niña 2010–12 og 2020–22.",
    },
    {
      id: "q4",
      prompt: "Hvad er en 'telekonnekion' i klimasystemet?",
      options: [
        { id: "a", text: "En satellitbaseret klimaovervågningsforbindel­se" },
        { id: "b", text: "En fjernbetjent koblings­effekt, hvor klimafænomener ét sted påvirker vejret langt borte" },
        { id: "c", text: "En undervandstelekommunikations­kabel langs havbunden" },
        { id: "d", text: "En direkte forbindel­se mellem ITCZ og jetstrømmene" },
      ],
      correctOptionId: "b",
      explanation:
        "Telekonnektioner er statistiske koblinger i atmosfæren, der gør at klimafænomener ét sted – som El Niño i Stillehavet – påvirker vejret tusinder af kilometer væk, f.eks. i Europa, Afrika eller Nordamerika.",
    },
    {
      id: "q5",
      prompt: "Hvorfra stammer navnet 'El Niño'?",
      options: [
        { id: "a", text: "Fra en spansk klimaforsker i det 20. århundrede" },
        { id: "b", text: "Fra peruanske fiskere, der navngav det efter Jesusbarnet da det typisk kom om juletid" },
        { id: "c", text: "Fra et NASA-satellitprojekt i 1970'erne" },
        { id: "d", text: "Fra en havstrøm beskrevet af Darwin under Beagle-ekspeditionen" },
      ],
      correctOptionId: "b",
      explanation:
        "Peruanske fiskere observerede, at en varm havstrøm periodisk viste sig langs kysten om juletid og reducerede fiskeriet. De kaldte den 'El Niño de Navidad' (Jesusbarnet), og navnet El Niño er siden brugt om fænomenet.",
    },
    {
      id: "q6",
      prompt: "Hvad siger forskning om fremtiden for El Niño under klimaforandringer?",
      options: [
        { id: "a", text: "El Niño vil forsvinde pga. svækkede passatvinde" },
        { id: "b", text: "El Niños effekter og muligvis hyppighed og intensitet kan øges i et varmere klima" },
        { id: "c", text: "El Niño og La Niña vil smelte sammen til én neutral tilstand" },
        { id: "d", text: "Klimaforandringer har ingen indflydelse på ENSO" },
      ],
      correctOptionId: "b",
      explanation:
        "IPCC og klimaforskning peger på, at El Niños nedbørs- og ekstremvejrseffekter sandsynligvis vil forstærkes i et varmere klima. Der er usikkerhed om hyppighed og intensitet, men superel Niño-hændelser som 1997–98 og 2015–16 kan blive mere hyppige.",
    },
    {
      id: "q7",
      prompt: "Hvilken effekt har El Niño typisk på den atlantiske orkan-sæson?",
      options: [
        { id: "a", text: "Det forstærker atlantiske orkaner markant" },
        { id: "b", text: "Det svækker atlantiske orkaner pga. øget vindskydning i øvre troposfæren" },
        { id: "c", text: "Det rammer slet ikke Atlanterhavets vejr" },
        { id: "d", text: "Det fordobler antallet af atlantiske orkaner" },
      ],
      correctOptionId: "b",
      explanation:
        "El Niño øger vindskydning (wind shear) i det tropiske Atlanterhav – det er store vindhastighedsforskelle med højden, der modvirker dannelse og vedligeholdelse af orkaner. Omvendt giver La Niña-år typisk mere aktive atlantiske orkan-sæsoner.",
    },
  ],
};
