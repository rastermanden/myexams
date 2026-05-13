import type { Topic } from "@/lib/types";

export const istiderOgIsensLandskabsdannelse: Topic = {
  slug: "istider-og-isens-landskabsdannelse",
  title: "Istider og isens landskabsdannelse",
  summary:
    "Hvordan indlandsis, smeltevand og dødis former moræner, tunneldale, hedesletter og dødishuller.",
  demoKey: "naturgeografi-processer",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Moraine_lake.jpg?width=1200",
    alt: "Morænelandskab med sø i baggrunden",
    credit: "Wikimedia Commons",
    license: "Se kildeside",
    sourcePage: "https://commons.wikimedia.org/wiki/File:Moraine_lake.jpg",
  },
  sections: [
    {
      heading: "Hovedprocesser",
      body:
        "Under istider bevæger gletsjeris sig langsomt og transporterer materiale. Isen aflejrer usorterede sedimenter som moræne, mens smeltevand sorterer sand og grus i hedesletter og smeltevandsdale. Når dødis smelter, kan der dannes dødishuller og småsøer.",
    },
    {
      heading: "Casestudie: Dansk morænelandskab",
      body:
        "Store dele af Østdanmark er præget af morænelandskaber fra den sidste istid (Weichsel). Vestjylland viser tydeligt smeltevandsaflejringer og hedesletter foran den tidligere isrand.",
    },
    {
      heading: "Kilder (udvalg)",
      body:
        "GEUS: https://www.geus.dk/, Den Store Danske (istid): https://denstoredanske.lex.dk/istid, Miljøstyrelsen (landskab/natur): https://mst.dk/, figurer med direkte kildelinks er angivet under hver illustration.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er moræne?",
      options: [
        { id: "a", text: "Velsorteret flodsand" },
        { id: "b", text: "Usorteret materiale aflejret af is" },
        { id: "c", text: "Kun organisk materiale fra moser" },
        { id: "d", text: "Kun vulkansk aske" },
      ],
      correctOptionId: "b",
      explanation:
        "Moræne er typisk usorteret materiale (ler, sand, grus, sten), som aflejres direkte af is.",
    },
    {
      id: "q2",
      prompt: "Hvordan opstår et dødishul?",
      options: [
        { id: "a", text: "Ved jordskælv i kalkundergrund" },
        { id: "b", text: "Ved meteornedslag" },
        { id: "c", text: "Når en isoleret isblok smelter i sediment" },
        { id: "d", text: "Når tidevandet udhuler klinter" },
      ],
      correctOptionId: "c",
      explanation:
        "En begravet isblok (dødis) smelter og efterlader en sænkning i terrænet.",
    },
  ],
};

export const gletsjere: Topic = {
  slug: "gletsjere",
  title: "Gletsjere",
  summary:
    "Opbygning, bevægelse og afsmeltning af gletsjere samt deres betydning for havniveau og landskab.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Muir_Glacier.jpg?width=1200",
    alt: "Stor dalgletsjer med isfront",
    credit: "Wikimedia Commons",
    license: "Public domain",
    sourcePage: "https://commons.wikimedia.org/wiki/File:Muir_Glacier.jpg",
  },
  sections: [
    {
      heading: "Massebalance og bevægelse",
      body:
        "En gletsjer vokser, når akkumulation (sne/isdannelse) er større end ablation (smeltning, kalvning, sublimation). Isen bevæger sig nedad ved intern deformation og glidning mod underlaget.",
    },
    {
      heading: "Tværsnit: erosionsformer",
      body:
        "Dalgletsjere kan omforme V-dale til U-dale, skabe hængende dale og afsætte endemoræner. Det ses tydeligt i mange alpine landskaber.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Glacial_valley_cross_section.svg?width=1200",
        alt: "Tværsnit af V-dal og U-dal",
        credit: "Wikimedia Commons",
        license: "CC BY-SA",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Glacial_valley_cross_section.svg",
      },
    },
    {
      heading: "Casestudie: Alpine gletsjere",
      body:
        "Mange alpine gletsjere i Alperne har haft netto-tilbagegang siden 1900-tallet. Det giver ændret afstrømning om sommeren og øget risiko for gletsjersø-udbrud lokalt.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvornår har en gletsjer positiv massebalance?",
      options: [
        { id: "a", text: "Når afsmeltning er større end sneakkumulation" },
        { id: "b", text: "Når akkumulation er større end ablation" },
        { id: "c", text: "Når temperaturen altid er over 0 °C" },
        { id: "d", text: "Når den kun består af havis" },
      ],
      correctOptionId: "b",
      explanation:
        "Positiv massebalance betyder, at gletsjeren samlet set tilføres mere masse, end den mister.",
    },
    {
      id: "q2",
      prompt: "Hvilken dalform forbindes typisk med gletsjererosion?",
      options: [
        { id: "a", text: "U-dal" },
        { id: "b", text: "V-dal" },
        { id: "c", text: "Karstdal" },
        { id: "d", text: "Riftdal" },
      ],
      correctOptionId: "a",
      explanation: "Gletsjere udvider og uddyber dale til karakteristiske U-profiler.",
    },
  ],
};

export const floderOgVandloeb: Topic = {
  slug: "floder-og-vandloeb",
  title: "Floder og vandløb",
  summary:
    "Erosion, transport og aflejring i flodsystemer fra kildeområder til delta og kyst.",
  sections: [
    {
      heading: "Tre nøgleprocesser",
      body:
        "Floder eroderer i øvre løb, transporterer materiale i mellemste løb og aflejrer sediment i nedre løb. Forholdet mellem vandføring, hældning og sediment bestemmer, hvilken proces der dominerer.",
    },
    {
      heading: "Tværsnit af flodleje",
      body:
        "Ydersiden af et meandersving har høj hastighed og erosion, mens indersiden typisk har lavere hastighed og aflejring (point bar).",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Meander.svg?width=1200",
        alt: "Skematisk figur af meander med erosion og aflejring",
        credit: "Wikimedia Commons",
        license: "CC BY-SA",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Meander.svg",
      },
    },
    {
      heading: "Kilder (udvalg)",
      body:
        "USGS Water Science School (rivers/streams): https://www.usgs.gov/special-topics/water-science-school/science/rivers-and-streams, GEUS: https://www.geus.dk/, figurer med direkte kildelinks er angivet under hver illustration.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvor i et meandersving er erosion typisk stærkest?",
      options: [
        { id: "a", text: "Indersiden af svinget" },
        { id: "b", text: "Ydersiden af svinget" },
        { id: "c", text: "Midten af svinget" },
        { id: "d", text: "Kun ved flodens kilde" },
      ],
      correctOptionId: "b",
      explanation:
        "Vandhastigheden er oftest højest på ydersiden, hvor skråningen derfor er mest udsat for erosion.",
    },
    {
      id: "q2",
      prompt: "Hvad betyder aflejring i flodsystemer?",
      options: [
        { id: "a", text: "At sediment bliver afsat" },
        { id: "b", text: "At floden fordamper" },
        { id: "c", text: "At vandet fryser hele året" },
        { id: "d", text: "At floden altid bliver dybere" },
      ],
      correctOptionId: "a",
      explanation:
        "Aflejring sker, når strømningen ikke længere kan transportere alt sedimentet.",
    },
  ],
};

export const vandetsKredsloeb: Topic = {
  slug: "vandets-kredsloeb",
  title: "Vandets kredsløb",
  summary:
    "Fordampning, kondensation, nedbør, infiltration og afstrømning i det globale og lokale vandkredsløb.",
  sections: [
    {
      heading: "Proceskæde",
      body:
        "Solenergi driver fordampning fra hav, søer og jord. Vanddamp kondenserer til skyer, falder som nedbør og returnerer via overfladeafstrømning eller infiltration til grundvand og hav.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Water_cycle_blank.svg?width=1200",
        alt: "Skematisk figur af vandets kredsløb",
        credit: "Wikimedia Commons",
        license: "CC BY-SA",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Water_cycle_blank.svg",
      },
    },
    {
      heading: "Dansk kontekst",
      body:
        "I Danmark varierer nedbør og fordampning over året, og vinterhalvåret bidrager ofte mest til grundvandsdannelse, fordi planternes fordampning er lavere.",
    },
    {
      heading: "Kilder (udvalg)",
      body:
        "DMI (klimanormaler og nedbør): https://www.dmi.dk/, GEUS (vand og geologi): https://www.geus.dk/, USGS Water Cycle: https://www.usgs.gov/special-topics/water-science-school/science/water-cycle.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad driver primært vandets kredsløb?",
      options: [
        { id: "a", text: "Månens tyngdekraft alene" },
        { id: "b", text: "Solenergi og tyngdekraft" },
        { id: "c", text: "Kun vindforhold" },
        { id: "d", text: "Kun vulkansk aktivitet" },
      ],
      correctOptionId: "b",
      explanation: "Solenergi driver fordampning, mens tyngdekraften driver nedbør og afstrømning.",
    },
    {
      id: "q2",
      prompt: "Hvad betyder infiltration?",
      options: [
        { id: "a", text: "Vand, der løber i flod" },
        { id: "b", text: "Vand, der trænger ned i jorden" },
        { id: "c", text: "Vand, der fordamper fra havet" },
        { id: "d", text: "Vand, der fryser i atmosfæren" },
      ],
      correctOptionId: "b",
      explanation: "Infiltration er nedsivning af vand fra overfladen til jord og undergrund.",
    },
  ],
};

export const grundvand: Topic = {
  slug: "grundvand",
  title: "Grundvand",
  summary:
    "Hvordan grundvand dannes, lagres i magasiner og bruges til drikkevand og økosystemer.",
  sections: [
    {
      heading: "Grundvandsdannelse",
      body:
        "Grundvand dannes, når nedbør siver ned gennem jordlag til den mættede zone. Sand- og gruslag har ofte høj permeabilitet, mens lerlag kan virke som dæklag.",
    },
    {
      heading: "Bæredygtig udnyttelse",
      body:
        "Hvis indvinding overstiger nydannelse over længere tid, kan grundvandsspejlet sænkes. Det kan påvirke vandløb, vådområder og drikkevandskvalitet.",
    },
    {
      heading: "Kilder (udvalg)",
      body:
        "GEUS (grundvand): https://www.geus.dk/faglige-omraader/grundvand, Miljøstyrelsen (drikkevand og grundvand): https://mst.dk/natur-vand/vand-i-hverdagen/drikkevand.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvilket jordlag har typisk høj permeabilitet?",
      options: [
        { id: "a", text: "Ler" },
        { id: "b", text: "Sand og grus" },
        { id: "c", text: "Massiv granit uden sprækker" },
        { id: "d", text: "Tørv" },
      ],
      correctOptionId: "b",
      explanation:
        "Sand- og gruslag har ofte større porer og dermed højere gennemstrømningsevne.",
    },
    {
      id: "q2",
      prompt: "Hvad kan ske ved langvarig overindvinding af grundvand?",
      options: [
        { id: "a", text: "Grundvandsspejlet stiger altid" },
        { id: "b", text: "Ingen påvirkning af naturen" },
        { id: "c", text: "Sænkning af grundvandsspejl og påvirkning af vandløb" },
        { id: "d", text: "Mindre risiko for saltvandsindtrængning ved kyster" },
      ],
      correctOptionId: "c",
      explanation:
        "Overindvinding kan sænke grundvandsspejlet og reducere tilstrømningen til vandløb og vådområder.",
    },
  ],
};

export const kysttyperOgKystdannelse: Topic = {
  slug: "kysttyper-og-kystdannelse",
  title: "Kysttyper og kystdannelse",
  summary:
    "Forskellen på erosions- og aflejringskyster samt processer som bølger, strøm og langsgående sedimenttransport.",
  sections: [
    {
      heading: "Kystprocesser",
      body:
        "Bølger, stormfloder og strømforhold bestemmer, om en kyst eroderes eller opbygges. Langsgående transport flytter sediment langs kysten og kan danne odder og barrierer.",
    },
    {
      heading: "Tværsnit: kystprofil",
      body:
        "Et kysttværsnit viser ofte samspillet mellem forstrand, klit/forklit og bagland. Ved høj energi dominerer erosion, mens lavere energi kan fremme aflejring.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Beach_profile.svg?width=1200",
        alt: "Skematisk tværsnit af en strandprofil",
        credit: "Wikimedia Commons",
        license: "CC BY-SA",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Beach_profile.svg",
      },
    },
    {
      heading: "Casestudie: Vestkysten i Danmark",
      body:
        "Vestkysten er stærkt eksponeret for bølgeenergi fra Nordsøen. Her bruges kystbeskyttelse som sandfodring og høfder for at begrænse erosion.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad beskriver langsgående sedimenttransport?",
      options: [
        { id: "a", text: "Transport af sediment ud på dybhavet" },
        { id: "b", text: "Transport af sediment parallelt med kysten" },
        { id: "c", text: "Transport af sediment kun i floder" },
        { id: "d", text: "Transport af sediment i atmosfæren" },
      ],
      correctOptionId: "b",
      explanation:
        "Bølger, der rammer skråt, kan flytte sediment langs kystlinjen over lange afstande.",
    },
    {
      id: "q2",
      prompt: "Hvilken kyst er typisk præget af stor bølgeenergi og erosion?",
      options: [
        { id: "a", text: "Aflejringskyst" },
        { id: "b", text: "Erosionskyst" },
        { id: "c", text: "Koralatol" },
        { id: "d", text: "Flodslette" },
      ],
      correctOptionId: "b",
      explanation: "Ved høj energi fjernes sediment ofte hurtigere, end det tilføres.",
    },
  ],
};

export const oerkenerOgOerkendannelse: Topic = {
  slug: "oerkener-og-oerkendannelse",
  title: "Ørkener og ørkendannelse",
  summary:
    "Klimatiske og menneskelige årsager til tørre områder, ørkenspredning og sårbare økosystemer.",
  sections: [
    {
      heading: "Hvorfor opstår ørkener?",
      body:
        "Mange ørkener ligger i subtropiske højtryksbælter, hvor synkende luft hæmmer skydannelse. Andre findes i regnskygge bag bjergkæder eller langt fra fugtkilder.",
    },
    {
      heading: "Ørkendannelse (desertifikation)",
      body:
        "Desertifikation er jordforringelse i tørre områder, ofte forstærket af overgræsning, afskovning og uhensigtsmæssig dyrkning i samspil med tørke.",
    },
    {
      heading: "Kilder (udvalg)",
      body:
        "UNCCD (desertification): https://www.unccd.int/, FAO (land degradation): https://www.fao.org/land-water/land/land-governance/land-degradation/en/, IPCC AR6 WGII: https://www.ipcc.ch/report/ar6/wg2/.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad betyder desertifikation?",
      options: [
        { id: "a", text: "At sand flytter sig i klitter" },
        { id: "b", text: "Jordforringelse i tørre områder" },
        { id: "c", text: "At alle tørre områder bliver rene sandørkener" },
        { id: "d", text: "At grundvand dannes hurtigere" },
      ],
      correctOptionId: "b",
      explanation:
        "Desertifikation handler om tab af jordens produktivitet i tørre områder, ikke kun om udvidelse af sandørken.",
    },
    {
      id: "q2",
      prompt: "Hvilket globalt trykbælte forbindes ofte med subtropiske ørkener?",
      options: [
        { id: "a", text: "Ækvatorialt lavtryk" },
        { id: "b", text: "Subtropisk højtryk" },
        { id: "c", text: "Polarfronten" },
        { id: "d", text: "Monsoonlavtryk" },
      ],
      correctOptionId: "b",
      explanation:
        "Synkende, tør luft i subtropiske højtryk giver ofte meget lidt nedbør.",
    },
  ],
};

export const skoveOgBiomer: Topic = {
  slug: "skove-og-biomer",
  title: "Skove og biomer",
  summary:
    "Biomer som regnskov, savanne, tempereret skov og taiga samt deres klimatiske forudsætninger.",
  sections: [
    {
      heading: "Biomer og klima",
      body:
        "Biomer er store økologiske zoner bestemt af temperatur, nedbør og sæsonvariation. Vegetationstyper afspejler tilpasning til lokale klima- og jordforhold.",
    },
    {
      heading: "Kort over biomer",
      body:
        "Verdenskort over biomer bruges til at koble klimazoner med vegetationsmønstre og biodiversitet.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vegetation.png?width=1200",
        alt: "Verdenskort over biomer og vegetationstyper",
        credit: "Wikimedia Commons",
        license: "CC BY-SA",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Vegetation.png",
      },
    },
    {
      heading: "Kilder (udvalg)",
      body:
        "WWF (biomes): https://www.worldwildlife.org/biomes, IPBES assessment reports: https://www.ipbes.net/, Britannica (biome): https://www.britannica.com/science/biome.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er et biom?",
      options: [
        { id: "a", text: "Et lokalt vandløb" },
        { id: "b", text: "En stor økologisk zone med karakteristisk klima og vegetation" },
        { id: "c", text: "En geologisk forkastning" },
        { id: "d", text: "En kortvarig vejrtype" },
      ],
      correctOptionId: "b",
      explanation:
        "Et biom beskriver store naturzoner med typiske planter, dyr og klimaforhold.",
    },
    {
      id: "q2",
      prompt: "Hvilken faktor er mest central for biomers fordeling globalt?",
      options: [
        { id: "a", text: "Breddegrad alene" },
        { id: "b", text: "Temperatur og nedbør" },
        { id: "c", text: "Månefaser" },
        { id: "d", text: "Befolkningstæthed" },
      ],
      correctOptionId: "b",
      explanation: "Kombinationen af temperatur og nedbør er grundlæggende for biomers udbredelse.",
    },
  ],
};

export const jordbundOgJordtyper: Topic = {
  slug: "jordbund-og-jordtyper",
  title: "Jordbund og jordtyper",
  summary:
    "Jordbundens opbygning, horisonter og forskelle mellem sand-, ler- og humusrig jord.",
  sections: [
    {
      heading: "Jordprofil",
      body:
        "En jordprofil består ofte af horisonter (fx O-, A-, B- og C-horisont). Sammensætningen påvirker vandholdning, næringsstoffer og plantedække.",
    },
    {
      heading: "Kort over jordtyper",
      body:
        "Jordbundskort bruges i både landbrug, naturforvaltning og planlægning for at vurdere dræning, erosion og dyrkningspotentiale.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/SoilTextureTriangle.svg?width=1200",
        alt: "Teksturtrekant for jordtyper (sand, silt, ler)",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage: "https://commons.wikimedia.org/wiki/File:SoilTextureTriangle.svg",
      },
    },
    {
      heading: "Kilder (udvalg)",
      body:
        "GEUS (jord og geodata): https://www.geus.dk/, USDA Soil Survey Manual: https://www.nrcs.usda.gov/resources/guides-and-instructions/soil-survey-manual, Aarhus Universitet DCA/DCE jordfaglige ressourcer: https://dca.au.dk/.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad beskriver jordens tekstur?",
      options: [
        { id: "a", text: "Kun jordens farve" },
        { id: "b", text: "Fordeling af sand, silt og ler" },
        { id: "c", text: "Kun mængden af organisk materiale" },
        { id: "d", text: "Kun jordens pH" },
      ],
      correctOptionId: "b",
      explanation:
        "Jordtekstur beskriver kornstørrelsesfordelingen mellem sand, silt og ler.",
    },
    {
      id: "q2",
      prompt: "Hvad kendetegner ofte lerjord sammenlignet med sandjord?",
      options: [
        { id: "a", text: "Hurtigere dræning" },
        { id: "b", text: "Lavere vandholdning" },
        { id: "c", text: "Større vandholdning og langsommere dræning" },
        { id: "d", text: "Ingen forskel i vandbevægelse" },
      ],
      correctOptionId: "c",
      explanation:
        "Lerjord har små porer, som holder bedre på vand, men dræner langsommere.",
    },
  ],
};

export const forvitringOgErosion: Topic = {
  slug: "forvitring-og-erosion",
  title: "Forvitring og erosion",
  summary:
    "Fysisk, kemisk og biologisk forvitring samt erosion fra vand, vind og is.",
  sections: [
    {
      heading: "Tre former for forvitring",
      body:
        "Fysisk forvitring nedbryder materiale mekanisk (fx frostsprængning). Kemisk forvitring ændrer mineraler via reaktioner (fx opløsning), og biologisk forvitring skyldes rødder og organismer.",
    },
    {
      heading: "Sammenhæng med erosion",
      body:
        "Forvitring producerer løst materiale, som derefter kan transporteres væk af erosion. Processerne hænger tæt sammen i landskabsudvikling.",
    },
    {
      heading: "Kilder (udvalg)",
      body:
        "USGS (weathering and erosion): https://www.usgs.gov/media/images/weathering-and-erosion, GEUS undervisningsressourcer: https://www.geus.dk/formidling, Britannica (weathering): https://www.britannica.com/science/weathering.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvilket eksempel er kemisk forvitring?",
      options: [
        { id: "a", text: "Frostsprængning" },
        { id: "b", text: "Rodsprængning" },
        { id: "c", text: "Opløsning af kalk i surt vand" },
        { id: "d", text: "Aflejring i floder" },
      ],
      correctOptionId: "c",
      explanation: "Opløsning af mineraler ved kemiske reaktioner er kemisk forvitring.",
    },
    {
      id: "q2",
      prompt: "Hvad er erosion?",
      options: [
        { id: "a", text: "Transport og bortførsel af materiale" },
        { id: "b", text: "Kun dannelse af jordbund" },
        { id: "c", text: "Kun nedbør i bjergområder" },
        { id: "d", text: "Smeltning af havis" },
      ],
      correctOptionId: "a",
      explanation:
        "Erosion er fjernelse og transport af materiale ved fx vand, vind eller is.",
    },
  ],
};

export const soeerOgVaadomraader: Topic = {
  slug: "soeer-og-vaadomraader",
  title: "Søer og vådområder",
  summary:
    "Dannelse, hydrologi og økologisk betydning af søer, moser og andre vådområder.",
  sections: [
    {
      heading: "Dannelse og typer",
      body:
        "Søer kan dannes ved istidsprocesser, tektonik, vulkanisme eller menneskeskabte opdæmninger. Vådområder opstår, hvor vandstanden står højt i længere perioder.",
    },
    {
      heading: "Økosystemfunktioner",
      body:
        "Vådområder kan tilbageholde næringsstoffer, dæmpe oversvømmelser og lagre kulstof. Søers tilstand påvirkes af næringsstofbelastning, iltforhold og temperatur.",
    },
    {
      heading: "Kilder (udvalg)",
      body:
        "Aarhus Universitet DCE (vandmiljø): https://dce.au.dk/udgivelser, Miljøstyrelsen (vådområder): https://mst.dk/natur-vand/vandmiljoe, Ramsar Convention: https://www.ramsar.org/.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvilken funktion har vådområder ofte i et opland?",
      options: [
        { id: "a", text: "De øger altid erosionen i floder" },
        { id: "b", text: "De kan holde på vand og reducere oversvømmelsestoppe" },
        { id: "c", text: "De forhindrer al grundvandsdannelse" },
        { id: "d", text: "De findes kun i arktiske områder" },
      ],
      correctOptionId: "b",
      explanation:
        "Vådområder virker ofte som naturlige buffere, der kan forsinke vandets afstrømning.",
    },
    {
      id: "q2",
      prompt: "Hvad er eutrofiering i søer?",
      options: [
        { id: "a", text: "Næringsberigelse, som kan give algeopblomstring" },
        { id: "b", text: "Naturlig afkøling af søvand" },
        { id: "c", text: "Fuldstændig udtørring af søen" },
        { id: "d", text: "Dannelse af kalkstenshuler" },
      ],
      correctOptionId: "a",
      explanation:
        "For mange næringsstoffer kan øge algevækst og påvirke iltforholdene negativt.",
    },
  ],
};
