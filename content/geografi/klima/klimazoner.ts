import type { Topic } from "@/lib/types";

export const klimazoner: Topic = {
  slug: "klimazoner",
  title: "Klimazoner",
  summary:
    "Jordens klimazoner – fra den tropiske regnskov til den polare tundra – og hvordan breddegrad, hav og topografi bestemmer klimatypen på et givet sted.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_Koppen_Map_(with_authors).svg?width=800",
    alt: "Verdenskort over klimazoner efter Köppens klassifikation",
    credit: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:World_Koppen_Map_(with_authors).svg",
  },
  sections: [
    {
      heading: "Oversigt over klimazoner",
      body:
        "Jordens klima varierer enormt fra pol til ækvator og fra kyst til indland. Klimazonerne er brede bælter med nogenlunde ensartede klimatiske forhold. Den klassiske inddeling skelner mellem: 1) Den tropiske zone (ca. 0–23,5° N og S), 2) Den subtropiske zone (ca. 23,5–35°), 3) Den tempererede zone (ca. 35–60°), og 4) Den polare zone (ca. 60–90°). Derudover er der bjergklimater, der ikke passer præcist ind i dette system, men følger en højdezonering med lignende mønstre. Overgangene er gradvise, ikke skarpe linjer, og påvirkes af lokale faktorer som topografi og havstrømme.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Klimaguertel.png?width=800",
        alt: "Skematisk oversigt over Jordens klimabælter fra pol til ækvator",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Klimaguertel.png",
      },
    },
    {
      heading: "Tropisk zone",
      body:
        "Den tropiske zone strækker sig på begge sider af ækvator og er kendetegnet ved høje temperaturer (typisk 24–28 °C årsgennemsnit) og ingen kold årstid. Den opdeles yderligere: I den tropiske regnskovszone (Af) regner det kraftigt hele året rundt, og her finder vi verdens artsrigeste levesteder – Amazonas, Kongo-bassinet og Sydøstasien. Længere fra ækvator afløses den af den tropiske savanne (Aw), hvor der er en tydelig tør og regnfuld sæson styret af ITCZ's bevægelse. Den Intertropiske Konvergenszone er afgørende: den bringer regn, når den er tæt, og tørke, når den er fjern.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Congo_River_and_Rainforest.jpg?width=800",
        alt: "Tropisk regnskov ved Congo-floden i Centralafrika",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Congo_River_and_Rainforest.jpg",
      },
    },
    {
      heading: "Subtropisk zone",
      body:
        "Den subtropiske zone (ca. 23,5–35° N og S) domineres af synkende luft fra Hadley-cellen, som giver tørt, solrigt vejr. Her ligger verdens store varme ørkner: Sahara, Arabien, Atacama, Kalahari og det australske indre. Middelhavsklima (Cs) er en undtagelse: det er en subtropisk klimatype med varme, tørre somre og milde, regnfulde vintre. Det forekommer i Middelhavsregionen, Californien, sydvestlige Australien og Chile. Koalitionseffekten opstår, fordi det subtropiske højtryk forskydes polart om vinteren og giver regn, men om sommeren dominerer højtryk og giver tørke.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sahara_Desert.jpg?width=800",
        alt: "Sanddyner i Sahara-ørkenen, den største varme ørken på Jorden",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Sahara_Desert.jpg",
      },
    },
    {
      heading: "Tempereret zone",
      body:
        "Den tempererede zone (ca. 35–60° N og S) har udtalte årstider med varme somre og kolde vintre. Her hersker vestevindbæltet og hyppige frontpassager. Den opdeles i maritimt klima (Cfb) ved vestkysterne – mild og fugtig hele året (som Danmark og Vesteuropa) – og kontinentalt klima (Df) i indlandet med meget kold vinter, varm sommer og stor årstemperaturamplitude (som det meste af Rusland og Canada). Monsunklimaet (Cw/Dw) i Øst­asien er en tredje variant med varm, fugtig sommer og kold, tør vinter. Tempererede skove og præstier er de dominerende biomer.",
    },
    {
      heading: "Polar zone",
      body:
        "Polzonerne (ca. 60–90° N og S) er domineret af kulde. Der skelnes mellem tundraklima (ET) med gennemsnitstemperatur i varmeste måned 0–10 °C, og isklima (EF) med alle måneder under 0 °C (som Grønlands indlandsis og Antarktis). Permafrost – permanent frossen jord – præger tundraen og er under hastig optøning som følge af klimaforandringer, hvilket kan frigive store mængder metan. Polzonerne modtager ekstremt lidt nedbør (under 200 mm/år) og er teknisk set 'polare ørkner'. Solindstrålingen er meget lav pga. lav solvinkel og polarnatten.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greenland_iceberg.jpg?width=800",
        alt: "Isbjerg i Grønland – typisk for polarklimaet",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Greenland_iceberg.jpg",
      },
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvilken klimazone er kendetegnet ved kraftig regn hele året rundt og ingen kold årstid?",
      options: [
        { id: "a", text: "Tropisk savanneklima (Aw)" },
        { id: "b", text: "Tropisk regnskovsklima (Af)" },
        { id: "c", text: "Middelhavsklima (Cs)" },
        { id: "d", text: "Tempereret maritimt klima (Cfb)" },
      ],
      correctOptionId: "b",
      explanation:
        "Det tropiske regnskovsklima (Af) har høje temperaturer og kraftig nedbør fordelt jævnt over hele året, pga. den konstante nærhed til ITCZ. Her finder vi Amazonas og Kongos regnskove.",
    },
    {
      id: "q2",
      prompt: "Hvad kendetegner Middelhavsklimaet (Cs)?",
      options: [
        { id: "a", text: "Kolde, snefyldte vintre og tørre somre" },
        { id: "b", text: "Varme, tørre somre og milde, regnfulde vintre" },
        { id: "c", text: "Jævn nedbør hele året og milde temperaturer" },
        { id: "d", text: "Ekstreme temperaturforskelle mellem sommer og vinter" },
      ],
      correctOptionId: "b",
      explanation:
        "Middelhavsklima (Cs) er en subtropisk klimatype med varme, tørre somre (subtropisk højtryk dominerer) og milde, regnfulde vintre (fronter fra vestevindbæltet). Det forekommer i Middelhavsregionen, Californien og sydvestlige Australien.",
    },
    {
      id: "q3",
      prompt: "Hvorfor er subtroperne (ca. 25–35° N og S) præget af ørkner?",
      options: [
        { id: "a", text: "Fordi de er langt fra havet" },
        { id: "b", text: "Fordi synkende, tør luft fra Hadley-cellen dominerer og hæmmer nedbørsdannelse" },
        { id: "c", text: "Fordi Corioliseffekten er stærkest her" },
        { id: "d", text: "Fordi vegetationen dræner al fugt fra luften" },
      ],
      correctOptionId: "b",
      explanation:
        "I Hadley-cellens synkningszone komprimeres og opvarmes luften adiabatisk, hvilket sænker den relative luftfugtighed og hæmmer skydannelse og nedbør. Resultatet er verdens store varme ørkner (Sahara, Arabien, Atacama).",
    },
    {
      id: "q4",
      prompt: "Hvad er den afgørende forskel på maritimt og kontinentalt tempereret klima?",
      options: [
        { id: "a", text: "Maritimt klima har mere sne, kontinentalt mere regn" },
        { id: "b", text: "Maritimt klima har lille årstemperaturamplitude; kontinentalt har stor amplitude" },
        { id: "c", text: "Kontinentalt klima har milde vintre pga. nærhed til hav" },
        { id: "d", text: "Maritimt klima forekommer kun ved indlandshave" },
      ],
      correctOptionId: "b",
      explanation:
        "Havet fungerer som en temperaturudligner (høj varmekapacitet). Maritimt klima (vestkyst) har derfor milde vintre og kølige somre – lille amplitude. Kontinentalt klima (indland) har ekstreme vintre og varme somre – stor amplitude.",
    },
    {
      id: "q5",
      prompt: "Hvad er permafrost?",
      options: [
        { id: "a", text: "Tykt isdækket hav i Arktis og Antarktis" },
        { id: "b", text: "Permanent frossen jord under overfladen i kolde klimaer" },
        { id: "c", text: "En klimaklassifikation for polarzoner" },
        { id: "d", text: "Fossil is fanget i gletsjere" },
      ],
      correctOptionId: "b",
      explanation:
        "Permafrost er jord, der har været frossen i mindst to på hinanden følgende år. Den optøer øverst om sommeren (aktiv lag), men er frosset nedenunder. Klimaopvarmning øger optøningen og kan frigive store mængder metan (CH₄).",
    },
    {
      id: "q6",
      prompt: "Hvad er det primære karakteristika for tundraklimaet (ET)?",
      options: [
        { id: "a", text: "Alle måneder er under 0 °C" },
        { id: "b", text: "Varmeste måneds middeltemperatur er 0–10 °C" },
        { id: "c", text: "Årsnedbøren overstiger 2000 mm" },
        { id: "d", text: "Sommertemperaturer på 20–30 °C med tørke" },
      ],
      correctOptionId: "b",
      explanation:
        "Tundraklimaet (ET = Tundra) har varmeste måneds middeltemperatur mellem 0 og 10 °C. Der er somme tider en kort vækst­sæson, men ingen ægte sommer. Isklima (EF) har alle måneder under 0 °C.",
    },
    {
      id: "q7",
      prompt: "Hvilken klimazone finder vi primært i Danmark?",
      options: [
        { id: "a", text: "Subtropisk klima (Cs)" },
        { id: "b", text: "Tempereret maritimt klima (Cfb)" },
        { id: "c", text: "Tropisk savanneklima (Aw)" },
        { id: "d", text: "Tundraklima (ET)" },
      ],
      correctOptionId: "b",
      explanation:
        "Danmark har et tempereret maritimt klima (Cfb): milde vintre, kølige somre, regn fordelt over hele året og lav årstemperaturamplitude (~15 °C). Det skyldes Atlanterhavets nærhed og vestevindbæltets dominans.",
    },
  ],
};
