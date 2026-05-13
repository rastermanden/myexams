import type { Topic } from "@/lib/types";

export const vejrVsKlima: Topic = {
  slug: "vejr-vs-klima",
  title: "Vejr vs. klima",
  summary:
    "Hvad er forskellen på vejr og klima? Lær om tidsskalaer, klimanormalperioder og de faktorer og elementer, der tilsammen definerer et steds klima.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cloud_forest_mount_kinabalu.jpg?width=800",
    alt: "Skydækket bjergregnskov på Mount Kinabalu",
    credit: "Wikimedia Commons",
    license: "CC BY-SA 3.0",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Cloud_forest_mount_kinabalu.jpg",
  },
  sections: [
    {
      heading: "Hvad er vejr?",
      body:
        "Vejr er den aktuelle, kortvarige tilstand af atmosfæren på et bestemt sted og tidspunkt. Det beskriver parametre som temperatur, nedbør, skydække, luftfugtighed og vind – og det kan ændre sig time for time. Når vi siger 'Det regner i dag' eller 'Det er koldt ude', taler vi om vejret. Vejret drives primært af ubalancer i energi og lufttryk, som skaber vind og fugtbevægelser. Det er kortfristet og lokalt, og selv de bedste meteorologer kan kun forudsige vejret med rimelig nøjagtighed 7–10 dage frem.",
    },
    {
      heading: "Hvad er klima?",
      body:
        "Klima er det gennemsnitlige vejr over en lang årrække på et bestemt sted. Det er det statistiske mønster af vejr – gennemsnitstemperaturer, normalnedbør, hyppighed af ekstreme hændelser osv. – som beskriver, hvad man typisk kan forvente på stedet. En klassisk formulering er: 'Vejr er det, du klæder dig på til i dag; klima er det, du har i skabet.' Klimaet på en lokalitet ændrer sig langsomt over årtier og årtusinder under naturlige forhold, men menneskeskabte drivhusgasudledninger accelererer ændringerne markant.",
    },
    {
      heading: "Tidsskalaer og klimanormalperioder",
      body:
        "For at kunne sammenligne klimaet på tværs af steder og tider bruger meteorologer og klimatologer standardiserede referenceperioder kaldet klimanormalperioder. Den Meteorologiske Verdendsorganisation (WMO) fastlagde i 1935, at normalperioden skal være 30 år. Den nuværende officielle normalperiode er 1991–2020, som afløste den ældre periode 1961–1990. Danmarks Meteorologiske Institut (DMI) offentliggør fx normale måneds- og årstemperaturer og -nedbørsmængder baseret på disse 30-årsgennemsnit. En normalperiode udskiftes hvert tiende år for at holde referencen opdateret og indfange klimatiske skift.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Climate_normals.svg?width=800",
        alt: "Diagram der viser klimanormalperioder over tid",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Climate_normals.svg",
      },
    },
    {
      heading: "Klimaelementer og klimafaktorer",
      body:
        "Et steds klima beskrives ved hjælp af klimaelementer – de målbare størrelser som temperatur, nedbør, lufttryk, vind, solskinstimer og luftfugtighed. Klimafaktorer er derimod de bagvedliggende årsager, der bestemmer, hvilke klimaelementer et sted har. De vigtigste klimafaktorer er: breddegrad (afstand fra ækvator og solvinkel), højde over havet (temperaturen falder ca. 6,5 °C pr. 1.000 m), afstand til hav (kontinentalitet), havstrømme (f.eks. Golfstrømmens opvarmende effekt på Nordvesteuropa), topografi (læ-effekter og nedbørsskygge) og vegetation/jorddækning. Kombinationen af disse faktorer forklarer, hvorfor to steder på samme breddegrad kan have meget forskelligt klima.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er den korrekte definition af 'vejr'?",
      options: [
        { id: "a", text: "Det gennemsnitlige temperatur- og nedbørsmønster over 30 år" },
        { id: "b", text: "Den aktuelle atmosfæriske tilstand på et bestemt sted og tidspunkt" },
        { id: "c", text: "Den langsigtede ændring af jordens gennemsnitstemperatur" },
        { id: "d", text: "Et statistisk mål for nedbørsmængden i en region" },
      ],
      correctOptionId: "b",
      explanation:
        "Vejr er den kortvarige, aktuelle tilstand af atmosfæren – temperatur, nedbør, vind m.m. – på et bestemt sted og tidspunkt. Det ændrer sig konstant, modsat klimaet.",
    },
    {
      id: "q2",
      prompt: "Hvor lang er en WMO-standardiseret klimanormalperiode?",
      options: [
        { id: "a", text: "10 år" },
        { id: "b", text: "20 år" },
        { id: "c", text: "30 år" },
        { id: "d", text: "100 år" },
      ],
      correctOptionId: "c",
      explanation:
        "WMO fastslog i 1935, at en klimanormalperiode skal dække 30 år. Den nuværende er 1991–2020. Perioden udskiftes hvert tiende år.",
    },
    {
      id: "q3",
      prompt: "Hvad betegner man som 'klimaelementer'?",
      options: [
        { id: "a", text: "Bagvedliggende årsager som breddegrad og havstrømme" },
        { id: "b", text: "Målbare vejrparametre som temperatur, nedbør og vind" },
        { id: "c", text: "Kemiske komponenter i atmosfæren, f.eks. CO₂ og ozon" },
        { id: "d", text: "Langsigtede klimamodellers inputparametre" },
      ],
      correctOptionId: "b",
      explanation:
        "Klimaelementer er de målbare størrelser (temperatur, nedbør, lufttryk, vind, solskinstimer osv.), som tilsammen beskriver klimaet. De bagvedliggende årsager – breddegrad, hav, topografi – kaldes klimafaktorer.",
    },
    {
      id: "q4",
      prompt: "Hvilken klimafaktor forklarer primært, at Vesteuropa er mildere om vinteren end områder på samme breddegrad i Nordamerika?",
      options: [
        { id: "a", text: "Større afstand til ækvator" },
        { id: "b", text: "Golfstrømmens varmetransport til Atlanterhavet" },
        { id: "c", text: "Lavere højde over havet" },
        { id: "d", text: "Tyndere ozonlag over Nordamerika" },
      ],
      correctOptionId: "b",
      explanation:
        "Golfstrømmen transporterer varmt vand fra den tropiske Atlanterhav til det nordvestlige Europa. Den varme havoverflade opvarmer den vestlige vind, som bringer relativt milde vintere til bl.a. Vesteuropa.",
    },
    {
      id: "q5",
      prompt: "Hvad sker der typisk med temperaturen, når man stiger 1.000 meter op i højden (i troposfæren)?",
      options: [
        { id: "a", text: "Den stiger med ca. 6,5 °C" },
        { id: "b", text: "Den forbliver konstant" },
        { id: "c", text: "Den falder med ca. 6,5 °C" },
        { id: "d", text: "Den falder med ca. 20 °C" },
      ],
      correctOptionId: "c",
      explanation:
        "I troposfæren falder temperaturen gennemsnitligt ca. 6,5 °C pr. 1.000 meters højdestigning (den såkaldte tørre adiabatiske lapserate er 9,8 °C/km; den fugtige er lavere pga. kondensationsvarme).",
    },
    {
      id: "q6",
      prompt: "Hvad er den nuværende WMO-klimanormalperiode?",
      options: [
        { id: "a", text: "1961–1990" },
        { id: "b", text: "1971–2000" },
        { id: "c", text: "1981–2010" },
        { id: "d", text: "1991–2020" },
      ],
      correctOptionId: "d",
      explanation:
        "WMO opdaterede normalperioden til 1991–2020 i 2021. Tidligere periode var 1961–1990, men perioden udskiftes hvert årti for at holde referencebasen opdateret.",
    },
    {
      id: "q7",
      prompt: "Hvad er en 'nedbørsskygge'?",
      options: [
        { id: "a", text: "Et område med kunstigt skygge skabt af skyskrabere, der reducerer solindstrålingen" },
        { id: "b", text: "Det tørre område på en bjergs læside, der modtager lidt nedbør fordi luften allerede har afgivet sin fugt på luvsiden" },
        { id: "c", text: "Området under en tordenskys tunge nedbør" },
        { id: "d", text: "Et statistisk begreb for manglende nedbør i normalperioden" },
      ],
      correctOptionId: "b",
      explanation:
        "Når fugtig luft tvinges op over et bjerg (orografisk løft), køler den og afgiver nedbør på luvsiden. På læsiden synker luften igen, opvarmes og afgiver sjælden nedbør – det er nedbørsskyggen. Eksempel: Norges vestkyst vs. den svenske side af Skandinaverne.",
    },
  ],
};
