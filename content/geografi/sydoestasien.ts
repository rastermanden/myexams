import type { Topic } from "@/lib/types";

export const sydoestasien: Topic = {
  slug: "sydoestasien",
  title: "Sydøstasien",
  summary:
    "Sydøstasien — fra fastlandsstater som Vietnam og Thailand til øriget ASEAN-zone: naturgeografi, monsun, demografi og regional økonomi.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Southeast_Asia_(orthographic_projection).svg?width=800",
    alt: "Sydøstasien fremhævet på en globus",
    credit: "Wikimedia Commons",
    license: "CC BY-SA 3.0",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Southeast_Asia_(orthographic_projection).svg",
  },
  sections: [
    {
      heading: "Beliggenhed & geografisk opdeling",
      body:
        "Sydøstasien dækker ca. 4,5 mio. km² og rummer over 670 mio. mennesker fordelt på 11 lande. Regionen opdeles i Fastlands-Sydøstasien (Myanmar, Thailand, Laos, Cambodia, Vietnam) og Maritime Sydøstasien (Malaysia, Singapore, Brunei, Indonesien, Filippinerne, Timor-Leste). Strategisk er regionen knudepunktet for søfartsruter mellem Indien og Kina — særligt Malacca-strædet, som ca. 80.000 fartøjer passerer om året.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Southeast_Asia_satellite.jpg?width=800",
        alt: "Satellitbillede af Sydøstasien",
        credit: "NASA via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Southeast_Asia_satellite.jpg",
      },
    },
    {
      heading: "Naturgeografi & pladetektonik",
      body:
        "Den sydøstlige del af den Eurasiske Plade kolliderer med den Indisk-Australske Plade, hvilket giver de høje bjerge i Myanmar og det tektonisk aktive Sunda-bælte. Indonesien befinder sig på den såkaldte 'Ring of Fire' — Sumatra-Andaman-brudlinjen er årsagen til tsunamien i 2004 (magn. 9,1), der kostede over 200.000 menneskeliv. Øhavet er vulkanisk: Indonesien har ca. 130 aktive vulkaner og er verdens mest vulkaniske land.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/2004_Indian_Ocean_earthquake_-_affected_countries.png?width=800",
        alt: "Kort over lande ramt af tsunamien i Det Indiske Ocean 2004",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:2004_Indian_Ocean_earthquake_-_affected_countries.png",
      },
    },
    {
      heading: "Klima & monsun",
      body:
        "Størstedelen af regionen har tropisk klima — enten Af (regnaskov år rundt) eller Am/Aw (tropisk monsunklima med tydelig tør og våd sæson). Den sydvestlige sommermonsun (maj–oktober) bringer kraftig nedbør til store dele af regionen. Vietnam og Filippinerne rammes regelmæssigt af kraftige tyfoner (tropiske orkaner) fra det vestlige Stillehav. Klimaforandringer forøger risikoen for oversvømmelser i mega-deltaer som Mekong-deltaet (Vietnam) og Irrawaddy-deltaet (Myanmar), hvor millioner bor i lavtliggende risikoområder.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mekong_delta.jpg?width=800",
        alt: "Mekong-deltaet i Vietnam set fra luften",
        credit: "NASA via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Mekong_delta.jpg",
      },
    },
    {
      heading: "Befolkning & kultur",
      body:
        "Sydøstasien er etnisk og religiøst meget mangfoldig. Indonesien er verdens mest folkerige muslimske land (ca. 280 mio.). Thailand, Myanmar, Cambodia og Laos er buddhistiske. Filippinerne er overvejende katolsk. Singapore og Malaysia har markante kinesiske, malayiske og indiske befolkningsgrupper. Urbaniseringen accelererer: Jakarta, Manila og Bangkok er megabyer med 10–30 mio. indbyggere. Indonesien planlægger at flytte sin hovedstad (Nusantara) pga. overbelastning og synkning af Jakarta.",
    },
    {
      heading: "Økonomi, ASEAN & udvikling",
      body:
        "ASEAN (Association of Southeast Asian Nations) er et regionssamarbejde med 10 lande og et samlet BNP på ca. 3.600 mia. USD (2023). Singapore er et af verdens rigeste lande (BNI per capita ~65.000 USD); Myanmar er et af de fattigste. Regionen er en central del af globale forsyningskæder: Vietnam og Cambodja er store tøjeksportører; Indonesien og Malaysia eksporterer palmeolie og kobber. Turisme er afgørende for Thailand og Bali-regionen. Kinas 'String of Pearls'-strategi — et netværk af havne fra Indien til Sydkina-havet — øger regionens geopolitiske spændinger.",
    },
    {
      heading: "Aktuelle udfordringer",
      body:
        "Sydkina-havet er et af verdens mest omstridte havområder — Kina, Vietnam, Filippinerne, Malaysia, Brunei og Taiwan har overlappende krav. Afskovning i Borneo og Sumatra til palmeolieplantager er en af verdens største biodiversitetskriser og frigiver store mængder CO₂. Havstigninger truer lavtliggende østater og delta-byer. Myanmar er siden militærkuppet i 2021 lammet af borgerkrig, og over 2 mio. er fordrevet. Mekong-floden er truet af kinesiske dæmninger upstream, som reducerer vandstrøm og fiskebestande.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/South_China_Sea_claims.png?width=800",
        alt: "Kort over territorielle krav i Sydkina-havet",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:South_China_Sea_claims.png",
      },
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt:
        "Hvad er Malacca-strædet, og hvorfor er det globalt vigtigt?",
      options: [
        { id: "a", text: "Et vulkanisk stræde ved Filippinerne med ingen handelsbetydning" },
        { id: "b", text: "Et strategisk skibsfartsstrøde mellem Malaysia og Sumatra, der forbinder Det Indiske Ocean og Sydkina-havet" },
        { id: "c", text: "Den dybeste havgrav i Det Indiske Ocean" },
        { id: "d", text: "En politisk grænse mellem ASEAN og Kina" },
      ],
      correctOptionId: "b",
      explanation:
        "Malacca-strædet er den korteste søvej mellem Det Indiske Ocean og Sydkina-havet — ca. 80.000 fartøjer passerer årligt, herunder en tredjedel af verdens maritime handel. Et gidseltagningscenarie her ville lamme den globale forsyningskæde.",
    },
    {
      id: "q2",
      prompt:
        "Hvad forårsagede tsunamien den 26. december 2004 i Det Indiske Ocean?",
      options: [
        { id: "a", text: "Et vulkanudbrud ved Krakatau" },
        { id: "b", text: "Et undersøisk skred i Bengalbugten" },
        { id: "c", text: "Et megathrust-jordskælv (magn. 9,1) langs Sumatra-Andaman-brudlinjen" },
        { id: "d", text: "En tropisk orkan i Det Arabiske Hav" },
      ],
      correctOptionId: "c",
      explanation:
        "Et af de kraftigste jordskælv nogensinde (magn. 9,1–9,3) opstod, da den Indisk-Australske Plade glap under den Eurasiske Plade ved Sumatra. Den lodrette bevægelse af havbunden genererede bølger på op til 30 meter, som kostede over 200.000 liv.",
    },
    {
      id: "q3",
      prompt:
        "Hvilket land er verdens mest folkerige muslimske nation?",
      options: [
        { id: "a", text: "Pakistan" },
        { id: "b", text: "Saudi-Arabien" },
        { id: "c", text: "Indonesien" },
        { id: "d", text: "Bangladesh" },
      ],
      correctOptionId: "c",
      explanation:
        "Indonesien har ca. 280 mio. indbyggere, og ~87 % er muslimer — det giver det suverænt største antal muslimer i ét land. Landets islam er historisk præget af synkretisme med hinduisme, buddhisme og animistiske traditioner.",
    },
    {
      id: "q4",
      prompt:
        "Hvad er den primære årsag til, at Indonesien planlægger at flytte sin hovedstad fra Jakarta?",
      options: [
        { id: "a", text: "Militærstrategiske grunde pga. Sydkina-havet" },
        { id: "b", text: "Overbelastning, oversvømmelser og jordsætning — Jakarta synker med op til 25 cm/år" },
        { id: "c", text: "Jakarta mangler plads pga. bjergkæder" },
        { id: "d", text: "FN kræver, at alle østater har en indlandshovestad" },
      ],
      correctOptionId: "b",
      explanation:
        "Jakarta synker pga. overdreven grundvandspumpning, og store dele af nordkysten er allerede under havniveau. Kombineret med klimaforandringer og overbelastning (ca. 10 mio. beboere + pendlere) har Indonesien besluttet at flytte hovedstaden til Nusantara på Borneo.",
    },
    {
      id: "q5",
      prompt:
        "Hvad er 'Ring of Fire', og hvilket land i Sydøstasien er mest berørt?",
      options: [
        { id: "a", text: "En vulkankæde i Kina — Kina er mest berørt" },
        { id: "b", text: "Et bælte af vulkaner og jordskælv rundt om Stillehavet — Indonesien er mest berørt" },
        { id: "c", text: "En klimazone med tropiske skove — Filippinerne er mest berørt" },
        { id: "d", text: "En politisk handelszone — Singapore er mest berørt" },
      ],
      correctOptionId: "b",
      explanation:
        "Ring of Fire er et bælte langs Stillehavets kanter med 75 % af verdens aktive vulkaner og 90 % af jordens jordskælv. Indonesien har ca. 130 aktive vulkaner og er et af verdens mest jordskalvsudsatte lande.",
    },
  ],
};
