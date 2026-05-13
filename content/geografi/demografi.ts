import type { Topic } from "@/lib/types";

export const demografi: Topic = {
  slug: "demografi",
  title: "Demografi",
  summary:
    "Befolkningsudvikling, migration og urbanisering fra folkeskole til gymnasium — med interaktiv befolkningspyramide, tidslinje og landesammenligning.",
  demoKey: "demografi",
  sections: [
    {
      heading: "Befolkningstal og vækst",
      body:
        "Befolkning kan vokse lineært (samme antal pr. år) eller eksponentielt (samme procent pr. år). I praksis ses ofte perioder med hurtig, næsten eksponentiel vækst efterfulgt af lavere vækst, når fertiliteten falder.",
    },
    {
      heading: "Fødselsrate, dødsrate og naturlig tilvækst",
      body:
        "Fødselsrate og dødsrate måles typisk pr. 1.000 indbyggere. Naturlig tilvækst er forskellen mellem fødsler og dødsfald og beskriver befolkningsændringen uden migration.",
    },
    {
      heading: "Den demografiske transition",
      body:
        "Modellen med fem faser forklarer overgangen fra høj fødsels- og dødsrate til lav fødsels- og dødsrate. Mange lavindkomstlande er i fase 2-3, mens flere højindkomstlande er i fase 4-5.",
    },
    {
      heading: "Befolkningspyramider",
      body:
        "Ekspansive pyramider har bred base (mange børn), stationære pyramider er mere søjleformede, og kontraktive pyramider har smal base (få fødsler). Pyramiden viser alder, køn og forsørgerbyrde i ét blik.",
    },
    {
      heading: "Aldersfordeling og forsørgerbyrde",
      body:
        "Forsørgerbyrde sammenligner andelen uden for arbejdsdygtig alder med andelen i arbejdsstyrken. En høj børne- eller ældreandel øger presset på uddannelse, sundhed og pension.",
    },
    {
      heading: "Migration",
      body:
        "Push-faktorer (fx konflikt eller arbejdsløshed) skubber mennesker væk, mens pull-faktorer (fx job, sikkerhed eller uddannelse) trækker dem til. Migration kan være intern eller international.",
    },
    {
      heading: "Flygtninge og økonomiske migranter",
      body:
        "Flygtninge flygter fra forfølgelse, krig eller vold og har særlig beskyttelse i international ret. Økonomiske migranter flytter primært for bedre levevilkår og jobsituation.",
    },
    {
      heading: "Urbanisering og megabyer",
      body:
        "Urbanisering er stigende andel af befolkningen i byer. Megabyer (10+ mio. indbyggere) vokser især i Afrika og Asien og skaber både økonomiske muligheder og udfordringer med boliger, infrastruktur og miljø.",
    },
    {
      heading: "Befolkningstæthed, sundhed og levetid",
      body:
        "Befolkningstæthed varierer kraftigt mellem lande og regioner. Forventet levetid påvirkes af sundhedssystem, ernæring, indkomst og uddannelse, og er en central indikator i demografiske analyser.",
    },
    {
      heading: "Kilder",
      body:
        "FN, World Population Prospects 2024: https://population.un.org/wpp/ · Verdensbanken, World Development Indicators (SP.POP.TOTL, SP.DYN.TFRT.IN, SP.URB.TOTL.IN.ZS, SP.DYN.LE00.IN): https://data.worldbank.org",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt:
        "Hvad er forskellen mellem lineær og eksponentiel befolkningsvækst?",
      options: [
        { id: "a", text: "Lineær vækst stiger med en fast procent, eksponentiel med et fast antal" },
        { id: "b", text: "Lineær vækst stiger med et fast antal, eksponentiel med en fast procent" },
        { id: "c", text: "Lineær vækst er altid hurtigere end eksponentiel" },
        { id: "d", text: "Der er ingen forskel i praksis" },
      ],
      correctOptionId: "b",
      explanation:
        "Lineær vækst lægger et fast antal til hvert tidsinterval, mens eksponentiel vækst lægger en fast andel/procent til og derfor kan accelerere over tid.",
    },
    {
      id: "q2",
      prompt: "Hvad beskriver naturlig tilvækst?",
      options: [
        { id: "a", text: "Forskellen mellem indvandring og udvandring" },
        { id: "b", text: "Forskellen mellem fødselsrate og dødsrate" },
        { id: "c", text: "Andelen af befolkningen i byer" },
        { id: "d", text: "Befolkningstæthed pr. km²" },
      ],
      correctOptionId: "b",
      explanation:
        "Naturlig tilvækst ser bort fra migration og måler kun balancen mellem fødsler og dødsfald.",
    },
    {
      id: "q3",
      prompt: "Hvilken beskrivelse passer bedst til en kontraktiv befolkningspyramide?",
      options: [
        { id: "a", text: "Bred base og mange børn" },
        { id: "b", text: "Næsten helt søjleformet" },
        { id: "c", text: "Smal base og relativt stor ældreandel" },
        { id: "d", text: "Kun mænd i den arbejdsdygtige alder" },
      ],
      correctOptionId: "c",
      explanation:
        "En kontraktiv pyramide viser lave fødselstal og en aldrende befolkning med stigende andel ældre.",
    },
    {
      id: "q4",
      prompt: "Hvad er et eksempel på en push-faktor i migration?",
      options: [
        { id: "a", text: "Højere løn i modtagerlandet" },
        { id: "b", text: "Krævende boligpriser i afsenderlandet" },
        { id: "c", text: "Krig og usikkerhed i afsenderlandet" },
        { id: "d", text: "Bedre universiteter i modtagerlandet" },
      ],
      correctOptionId: "c",
      explanation:
        "Push-faktorer er forhold, der presser mennesker væk fra et område, fx konflikt, forfølgelse eller naturkatastrofer.",
    },
    {
      id: "q5",
      prompt: "Hvornår bruges betegnelsen megaby normalt?",
      options: [
        { id: "a", text: "Når en by har over 1 million indbyggere" },
        { id: "b", text: "Når en by har over 5 millioner indbyggere" },
        { id: "c", text: "Når en by har over 10 millioner indbyggere" },
        { id: "d", text: "Når en by er hovedstad" },
      ],
      correctOptionId: "c",
      explanation:
        "I international demografi bruges megaby typisk om byer med mindst 10 millioner indbyggere.",
    },
  ],
};
