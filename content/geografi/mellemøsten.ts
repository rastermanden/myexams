import type { Topic } from "@/lib/types";

export const mellemøsten: Topic = {
  slug: "mellemøsten",
  title: "Mellemøsten",
  summary:
    "Mellemøsten som geopolitisk knudepunkt: ørkener, olie, vand som ressource, konflikter og demografiske forandringer fra Nilen til Tigris-Eufrat.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Middle_East_(orthographic_projection).svg?width=800",
    alt: "Mellemøsten fremhævet på en globus",
    credit: "Wikimedia Commons",
    license: "CC BY-SA 3.0",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Middle_East_(orthographic_projection).svg",
  },
  sections: [
    {
      heading: "Afgrænsning & naturgeografisk oversigt",
      body:
        "Mellemøsten dækker typisk landene fra Egypten og Tyrkiet i vest og nord til Iran og de arabiske Gulf-stater i øst. Regionen er domineret af tørre og halvtørre klimaer: Sahara og Arabien er BW-klimaer (varm ørken) med under 25 mm nedbør om året visse steder. Undtagelser er Levanten (Mediterrant klima, Csa), Tyrkiets og Irans bjergegne samt Fertile Halvmåne langs Tigris og Eufrat, der historisk bar verdens første civilisationer (Mesopotamien).",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Middle_East_satellite.jpg?width=800",
        alt: "Satellitbillede af Mellemøsten",
        credit: "NASA via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Middle_East_satellite.jpg",
      },
    },
    {
      heading: "Klima & vandknaphed",
      body:
        "Vand er Mellemøstens kritiske ressource. De fleste lande er 'vandfattige' (<1.000 m³ per person per år), og mange er under den absolutte grænse på 500 m³. Tigris-Eufrat-systemet, der starter i Tyrkiet, er kilde til livgivende vand for Syrien og Irak, men dæmningsprojekter (Atatürk-dæmningen, osv.) i Tyrkiet har reduceret vandstrømmen og skabt spændinger. Desalinering — saltvandsafsaltning — er afgørende for Saudi-Arabien, UAE og Kuwait, der henter en stor andel af drikkevandet fra Persiske Golf. Vandtabet fra Aralsøen (delvist fra tilgrænsende Centralasien) og Dødehavets svindende niveau illustrerer regionens vandkrise.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dead_Sea_satellite.jpg?width=800",
        alt: "Satellitbillede af Dødehavet, der svinder",
        credit: "NASA via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Dead_Sea_satellite.jpg",
      },
    },
    {
      heading: "Olie, gas & ressourceøkonomi",
      body:
        "Mellemøsten besidder ca. 48 % af verdens kendte oliereserver og ca. 40 % af naturgasreserverne (2023). Saudi-Arabiens Ghawar-felt er verdens største kendte oliefelt. Stater som UAE, Qatar og Kuwait har omdannet olieindtægter til statslige investeringsfonde (suveræne fonde) — Abu Dhabis ADIA er verdens fjerde største med ~800 mia. USD. Oliepriserne styrer stor set hele regionens politiske økonomi, men Vision 2030 (Saudi-Arabien), UAE's diversificeringsstrategi og Qatar's LNG-eksport viser forsøg på post-oil-økonomi.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Oil_fields_in_the_Middle_East.png?width=800",
        alt: "Kort over oliefelter i Mellemøsten",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Oil_fields_in_the_Middle_East.png",
      },
    },
    {
      heading: "Befolkning & demografisk variation",
      body:
        "Mellemøsten har ca. 400 mio. indbyggere med meget varierede demografiske profiler. Iran og Tyrkiet har gennemgået hurtig demografisk transition og nærmer sig vesteuropæiske fertilitetsrater. Derimod har Yemen og Irak stadig høje fertilitetsrater og unge befolkningspyramider. Golfstaterne er demografiske outliers: i UAE er ca. 89 % af befolkningen udenlandske gæstearbejdere (migrantarbejdere). Den arabiske ungdomspukkel (youth bulge) fra 2000'erne regnes som medvirkende faktor til Det arabiske Forår (2010–2012).",
    },
    {
      heading: "Konflikter & geopolitik",
      body:
        "Mellemøsten er præget af langvarige konflikter: Israel-Palæstina-konflikten siden 1948, Iraks og Syriens borgerkrige, Yemens borgerkrig (siden 2014) med millioner i humanitær nød. Den regionale rivalisering mellem Saudi-Arabien (sunni) og Iran (shia) er en gennemgående konfliktlinje — en proxy-krig-dynamik der spiller sig ud i Yemen, Libanon, Syrien og Irak. Tyrkiets NATO-medlemskab og Erdogans neo-ottomanske udenrigspolitik tilføjer yderligere kompleksitet. Suezkanalens (Egypten) strategiske betydning for 12 % af verdenshandlen er fortsat central for regionens geopolitiske vægt.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Syrian_civil_war.png?width=800",
        alt: "Kort over den syriske borgerkrig",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Syrian_civil_war.png",
      },
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt:
        "Hvad er Fertile Halvmåne, og hvilken historisk betydning har det?",
      options: [
        { id: "a", text: "Et landbrugsband fra Marokko til Egypten langs Middelhavet" },
        { id: "b", text: "Et bælteland fra Nilen til Tigris-Eufrat, der rummer verdens første kendte civilisationer" },
        { id: "c", text: "Et oliebælte under den Arabiske Halvø" },
        { id: "d", text: "Et bjergbælte fra Kaukasus til Zagros" },
      ],
      correctOptionId: "b",
      explanation:
        "Fertile Halvmåne er den buede bane af frugtbar jord fra Palæstina/Levanten over Mesopotamien (Irak). Her opstod de første agerbrug og bystater i verden (bl.a. Sumer, Babylonien) for ca. 10.000 år siden, takket være vanding fra Tigris og Eufrat.",
    },
    {
      id: "q2",
      prompt:
        "Hvorfor er desalinering (afsaltning af havvand) afgørende i Golfstaterne?",
      options: [
        { id: "a", text: "Pga. kraftig forurening af grundvandet fra landbrugsgødning" },
        { id: "b", text: "Fordi regionen er vandfattig med næsten intet ferskvand" },
        { id: "c", text: "Fordi EU kræver det som led i en handelsaftale" },
        { id: "d", text: "Pga. turisters store vandforbrug" },
      ],
      correctOptionId: "b",
      explanation:
        "Golfstater som Saudi-Arabien, UAE og Kuwait modtager under 100 mm regn om året og har næsten ingen permanente floder. Desalinering giver en stor del af drikkevandet, men er energiintensiv — olie og gas gør det muligt at betale for processen.",
    },
    {
      id: "q3",
      prompt:
        "Hvad er den demografiske baggrund for Det arabiske Forår (2010–2012)?",
      options: [
        { id: "a", text: "Aldrende befolkninger og mangel på unge" },
        { id: "b", text: "En stor ungdomspukkel med mange unge uden arbejde og politisk indflydelse" },
        { id: "c", text: "Masseindvandring fra Subsahara-Afrika" },
        { id: "d", text: "Faldende fertilitet og befolkningstilbagegang" },
      ],
      correctOptionId: "b",
      explanation:
        "Mange arabiske lande oplevede i 00'erne en youth bulge — et brat hop i andelen af unge (15–29 år). Kombineret med høj ungdomsarbejdsløshed (30–50 %), politisk undertrykkelse og sociale medier skabte det grobund for de folkeoprør, vi kender som Det arabiske Forår.",
    },
    {
      id: "q4",
      prompt:
        "Hvilken konfliktlinje beskrives som en sunni-shia-proxy-krig i Mellemøsten?",
      options: [
        { id: "a", text: "Tyrkiet vs. Grækenland" },
        { id: "b", text: "Saudi-Arabien vs. Iran" },
        { id: "c", text: "Israel vs. Egypten" },
        { id: "d", text: "Irak vs. Kuwait" },
      ],
      correctOptionId: "b",
      explanation:
        "Saudi-Arabien (sunni-domineret) og Iran (shiitisk stat) konkurrerer om regional hegemoni og støtter modsatrettede fraktioner i bl.a. Yemen (Saudi-støttet koalition vs. Houthi/Iran), Syrien og Libanon. Det er en klassisk proxy-krig-dynamik.",
    },
    {
      id: "q5",
      prompt:
        "Hvad er Suezkanalen, og hvad er dens globale betydning?",
      options: [
        { id: "a", text: "Et vadested over Nilen, kun brugt til lokal færgetrafik" },
        { id: "b", text: "En kunstig kanal i Egypten, der forbinder Middelhavet med Det Røde Hav og håndterer ca. 12 % af verdenshandlen" },
        { id: "c", text: "En naturlig fjord i det nordlige Egypten" },
        { id: "d", text: "Et oliestransportnet under Sinai" },
      ],
      correctOptionId: "b",
      explanation:
        "Suezkanalen (åbnet 1869, udvidet 2015) giver skibe mulighed for at sejle fra Europa til Asien uden at runde Kap det Gode Håb. Ca. 19.000 skibe passerer om året — inklusive container-, olie- og gasskibe. Hvergang kanalen blokeres (som ved Ever Given i 2021) mærkes det i global logistik.",
    },
  ],
};
