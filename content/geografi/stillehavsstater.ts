import type { Topic } from "@/lib/types";

export const stillehavsstater: Topic = {
  slug: "stillehavsstater",
  title: "Stillehavsstater",
  summary:
    "Østaterne i Stillehavet — korallrev, klimatruet lavland, havstigninger, kolonihistorie og stormagternes voksende interesse i en strategisk ocean.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pacific_Ocean.jpg?width=800",
    alt: "Det centrale Stillehav set fra satellit",
    credit: "NASA via Wikimedia Commons",
    license: "Public domain",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Pacific_Ocean.jpg",
  },
  sections: [
    {
      heading: "Geografisk oversigt & opdeling",
      body:
        "Oceanien opdeles traditionelt i tre subregioner: Melanesien (Fiji, Papua Ny Guinea, Salomonøerne, Vanuatu, New Caledonia), Mikronesien (Palau, Mikronesiens Forenede Stater, Marshall-øerne, Kiribati, Nauru) og Polynesien (Samoa, Tonga, Tuvalu, Cookøerne, Tahiti/Fransk Polynesien, Hawaii). Tilsammen udgør øerne meget lidt landmasse (~550.000 km²), men de fordeler sig over et enorme oceanisk areal — det Eksklusive Økonomiske Zone (EEZ) for alle Stillehavsstater udgør tilsammen ca. 30 mio. km².",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Oceania_map.png?width=800",
        alt: "Kort over øerne i Stillehavet og opdeling i Melanesien, Mikronesien og Polynesien",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Oceania_map.png",
      },
    },
    {
      heading: "Naturgeografi: atoller, vulkaner & korallrev",
      body:
        "Stillehavsøerne dannes på to måder: vulkansk aktivitet (hotspots og pladegrænser) og koralvækst. Høje vulkanske øer som Fiji, Hawaii og Vanuatu er geologisk yngre og mere topografisk varierede. Atoller — som Kiribati, Tuvalu og Marshall-øerne — er lave koralkransøer dannet over sunkne vulkaner. De fleste atol­ler er under 2 m over havniveau. Korallrevene er verdens mest biologisk mangfoldige marine økosystemer og udgør livsgrundlaget for kystfiskeriet.",
    },
    {
      heading: "Klimaforandringer: den eksistentielle trussel",
      body:
        "Stillehavsstater som Tuvalu, Kiribati og Marshall-øerne risikerer at blive ubeboelige eller forsvinde fuldstændig som følge af havniveaustigninger. Det nuværende tempo er ca. 3,7 mm/år globalt, men højere i dele af Stillehavet. Saltvandsinfiltration ødelægger allerede landbrugsjord og ferskvandslaguner. Tuvalu har indgået en aftale med New Zealand om at give tuvalianere ret til migration. Kiribati har købt land i Fiji som backup. Disse lande er symboler på klimaretfærdighed: de bidrager minimalt til CO₂-udledninger, men er mest sårbare.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tuvalu_islet.jpg?width=800",
        alt: "En lav atol i Tuvalu med tydelig sårbarhed over for havstigninger",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 2.0",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Tuvalu_islet.jpg",
      },
    },
    {
      heading: "Kolonihistorie & selvstændighed",
      body:
        "Stillehavsøerne var genstand for europæisk kolonisering fra 1500-tallet og frem — Spanien, Nederlandene, UK, Frankrig, USA, Australien og Japan delte regionen. Papua Ny Guinea (uafhængigt 1975), Vanuatu (1980) og Kiribati (1979) er relativt nyligt uafhængige. Nogle øer er fortsat territorier: Ny Kaledonien (Frankrig), Guam og Amerikanske Jomfruøer (USA), Niue og Cookøerne (New Zealand i fri sammenslutning). Kolonitidens efterslæb — sociale uligheder, jordspørgsmål og kulturel assimilation — præger stadig regionens geopolitik.",
    },
    {
      heading: "Geopolitik: stormagters kamp om Stillehavet",
      body:
        "Det sydlige og centrale Stillehav er et voksende geopolitisk kapløb. Kina har underskrevet sikkerhedsaftaler (bl.a. med Salomonøerne i 2022) og finansierer havne, veje og regeringsbygninger. USA, Australien og New Zealand betragter dette som en direkte trussel mod den regionale orden og har øget diplomatisk og militær tilstedeværelse. Taiwan-spørgsmålet er indlejret i regionens diplomati: flere Stillehavsstater anerkender Taiwan frem for Kina og modtager til gengæld kinesisk diplomatisk pres og taiwansk bistand. AUKUS-forsvarssamarbejdet (Australien, UK, USA) afspejler den voksende strategiske bekymring.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Indo-Pacific_strategy.png?width=800",
        alt: "Kort over Indo-Pacific strategiske interesser",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Indo-Pacific_strategy.png",
      },
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt:
        "Hvad er et atol, og hvad er det udgjort af?",
      options: [
        { id: "a", text: "En høj vulkansk ø med stejle kystskrænter" },
        { id: "b", text: "En ringformet lav øformation af koralkalk bygget op om en sunken vulkan" },
        { id: "c", text: "En sandbanke midlertidigt synlig ved lavvande" },
        { id: "d", text: "En kunstig ø bygget af fragtskibe" },
      ],
      correctOptionId: "b",
      explanation:
        "Et atol er en krans-formet koralling dannet, når en vulkansk ø synker (og koralrev vokser op langs kanten) eller ved, at havstigninger nedsænker det centrale vulkankompleks. Resultatet er en ringformet laguneø, typisk meget lavtliggende — som Tuvalu, Marshall-øerne og Kiribati.",
    },
    {
      id: "q2",
      prompt:
        "Hvad er det særlige ved Tuvalus situation i relation til klimaforandringer?",
      options: [
        { id: "a", text: "Tuvalu er truet af jordskælv fra Pacific Ring of Fire" },
        { id: "b", text: "Tuvalu er en lavtliggende atol-nation, der risikerer at blive ubeboelig pga. havstigninger" },
        { id: "c", text: "Tuvalu har tørkeproblemer pga. for lidt regn" },
        { id: "d", text: "Tuvalu er truet af vulkanudbrud fra en aktiv undersøisk vulkan" },
      ],
      correctOptionId: "b",
      explanation:
        "Tuvalu's højeste punkt er ca. 3 m over havniveau, og store dele af øerne er allerede oversvømmede ved stormflod. Havstigninger, saltvandsinfiltration og kraftigere tyfoner truer landbruget og ferskvandskilderne. Landet har indgået aftale med New Zealand om migrantrettigheder.",
    },
    {
      id: "q3",
      prompt:
        "Hvad er det Eksklusive Økonomiske Zone (EEZ), og hvorfor er det vigtigt for Stillehavsstater?",
      options: [
        { id: "a", text: "EEZ er en told-og skattefrizone for handel — vigtig for øernes eksportindtægter" },
        { id: "b", text: "EEZ er et 200 sømil hav-område, hvor en stat har eksklusive rettigheder til ressourcer — vigtig pga. rige fiskerivande og potentielle havbundsressourcer" },
        { id: "c", text: "EEZ er en flymilitær forbudszone — vigtig for regionens forsvar" },
        { id: "d", text: "EEZ er et diplomatisk neutralitetszone i internationale konflikter" },
      ],
      correctOptionId: "b",
      explanation:
        "Under FN's Havretskonvention (UNCLOS) har stater eneret til at udnytte levende og ikke-levende ressourcer (fisk, olie, mineraler) inden for 200 sømil fra kysten. Selv meget små Stillehavsøer har enorme EEZ'er. For eksempel har Kiribati (811 km² land) en EEZ på 3,4 mio. km² — næsten EU's areal.",
    },
    {
      id: "q4",
      prompt:
        "Hvad er den geopolitiske betydning af Kinas sikkerhedsaftale med Salomonøerne (2022)?",
      options: [
        { id: "a", text: "Ingen — aftalen handler kun om klimabistand" },
        { id: "b", text: "Kina kan muligvis opretholde militær tilstedeværelse på Salomonøerne, tæt på Australiens nordlige kyst — betragtet som truende af USA og Australien" },
        { id: "c", text: "Aftalen giver Salomonøerne adgang til Kinas BNI-støtte-program" },
        { id: "d", text: "Aftalen sikrer Taiwan diplomatisk anerkendelse via Kina" },
      ],
      correctOptionId: "b",
      explanation:
        "Salomonøernes sikkerhedsaftale med Kina (2022) åbner mulighed for, at kinesiske skibe og militærpersonale kan basere sig der — ca. 2.000 km fra Australien. USA, Australien og NZ ser det som en trussel mod den regionale balance. Det er en del af et bredere mønster med kinesisk maritime diplomati i Stillehavet.",
    },
    {
      id: "q5",
      prompt:
        "Hvad er 'klimaretfærdighed' (climate justice) i Stillehavsstaternes sammenhæng?",
      options: [
        { id: "a", text: "Et juridisk princip om, at stater, der udleder mest CO₂, kompenserer de mest sårbare stater" },
        { id: "b", text: "En aftale om at dele vedvarende energiteknologi gratis" },
        { id: "c", text: "Et FN-program om havmiljøbeskyttelse" },
        { id: "d", text: "En australsk finansieringsplan for Stillehavsøernes kystbeskyttelse" },
      ],
      correctOptionId: "a",
      explanation:
        "Klimaretfærdighed fremhæver det moralske misforhold: lande som Tuvalu og Kiribati bidrager knapt nok til de globale CO₂-udledninger, men er de første og hårdest ramte af konsekvenserne. De argumenterer for, at industrialiserede lande har en moralsk og juridisk forpligtelse til at kompensere ('Loss and Damage'-mekanisme under UNFCCC).",
    },
  ],
};
