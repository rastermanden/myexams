import type { Topic } from "@/lib/types";

export const nordafrikaOgSahel: Topic = {
  slug: "nordafrika-og-sahel",
  title: "Nordafrika og Sahel",
  summary:
    "Fra Middelhavskysten til Saharas ørken og Sahel-bæltet — klima, afskovning, demografisk pres, ustabilitet og migration.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sahara_satellite.jpg?width=800",
    alt: "Sahara-ørkenen set fra satellit",
    credit: "NASA via Wikimedia Commons",
    license: "Public domain",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Sahara_satellite.jpg",
  },
  sections: [
    {
      heading: "Geografisk afgrænsning",
      body:
        "Nordafrika dækker Marokko, Algeriet, Tunesien, Libyen og Egypten — alt i alt ca. 8,5 mio. km², hvoraf Sahara-ørkenen udgør størstedelen. Sahel er en 3.000–5.000 km lang og ca. 500 km bred overgangszone syd for Sahara, der strækker sig fra Senegal og Mauritanien i vest til Sudan og Eritrea i øst. Sahel-landene inkluderer bl.a. Mali, Niger, Burkina Faso, Tchad og Sudan — alle rangerer lavt på HDI-indekset.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sahel_map.png?width=800",
        alt: "Kort der viser Sahel-bæltet i Afrika",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage: "https://commons.wikimedia.org/wiki/File:Sahel_map.png",
      },
    },
    {
      heading: "Klima, Sahara & ørkendannelse",
      body:
        "Sahara er verdens største hedørken (~9,2 mio. km²). Den klassificeres som BWh (Köppens system) med under 25 mm regn om året de fleste steder. Sahara er imidlertid ikke statisk: for 10.000–5.000 år siden var området markant grønnere (Grøn Sahara/African Humid Period) pga. ændrede jordbaneparametre og stærkere afrikansk monsun. I dag accelererer ørkendannelse (desertifikation) i Sahel: afskove­ning, overgræsning og klimaforandringer ødelægger jordbunden og driver syd-grænsen for Sahara frem.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Desertification_map.png?width=800",
        alt: "Globalt kort over sårbarhed for desertifikation",
        credit: "UNCCD / Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Desertification_map.png",
      },
    },
    {
      heading: "Befolkning & demografisk pres",
      body:
        "Sahel-landene er kendetegnet ved høj fertilitet (Niger ca. 6,9 børn/kvinde — verdens højeste) og lave HDI-værdier. Befolkningerne i disse lande kan fordobles inden 2050. Det skaber et enormt pres på landbrugsjord, vandressourcer og staternes evne til at levere uddannelse og sundhed. Mange unge migrerer mod nord — mod Nord­afrikanske kystbyer og videre til Europa. Transitmigration gennem Niger, Libyen og Marokko er en central geografisk strøm.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Niger_population_pyramid.png?width=800",
        alt: "Befolkningspyramide for Niger med stor ungdomsandel",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Niger_population_pyramid.png",
      },
    },
    {
      heading: "Konflikt, terror & statssammenbrud",
      body:
        "Sahel-regionen er et af verdens mest konfliktplagede områder. IS-tilknyttede og al-Qaeda-tilknyttede grupper (Jama'at Nusrat al-Islam wal-Muslimin) opererer i Mali, Burkina Faso og Niger. En bølge af militærkup fra 2021 (Mali, Guinea, Burkina Faso, Niger) afspejler befolkningernes frustration over svage demokratier og Frankrigs historiske indflydelse. De nye militærledelses-regimer har uddrevet franske og EU-styrker (bl.a. Operation Barkhane) og inviteret i stedet russisk Wagner-gruppe. Det skaber en ny geopolitisk dynamik i Vestafrika.",
    },
    {
      heading: "Nilen & vandressourcer",
      body:
        "Nil-floden er Nordafrikas livsnerve — Egypten er 95 % afhængig af Nilen for landbrugsvand og drikkevand. Egyptens befolkning (ca. 105 mio.) er koncentreret i det 3 % af landet, der er frugtbar mark langs Nilen og i Nilens delta. Som tidligere nævnt er GERD-dæmningen i Etiopien en stridspunkt. Libyens Menneskeskabte Flod (Great Man-Made River) er verdens største vandinfrastrukturprojekt: den pumper fossilt grundvand fra Sahara-akviferer til kystbyerne.",
    },
    {
      heading: "Energi, råvarer & udvikling",
      body:
        "Nordafrika har betydelige olie- og gasreserver: Algeriet er Europas vigtige gaseksportør, og Libyen sidder på Afrikas største kendte oliereserver. Solen er en enorm uudnyttet ressource — projekter som DESERTEC ville bruge Nordafrikas sol til at forsyne Europa med vedvarende energi. Fosfatreserver i Marokko og Vest-Sahara gør Marokko til verdens dominerende fosfateksportør, vigtig for global gødningsproduktion.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt:
        "Hvad er desertifikation, og hvad er de primære årsager i Sahel?",
      options: [
        { id: "a", text: "Nydannelse af ørkener udelukkende på grund af naturlige klimacyklusser" },
        { id: "b", text: "Nedbrydning af jordens frugtbarhed til ørkenagtig tilstand, drevet af overgræsning, afskovning og klimaforandringer" },
        { id: "c", text: "Oversvømmelse af frugtbare jorder langs floder" },
        { id: "d", text: "Geologiske jordskred pga. pladetektonik" },
      ],
      correctOptionId: "b",
      explanation:
        "Desertifikation er en degradering af tørt og halvtørt land til ørkenagtig tilstand. I Sahel drives det af menneskelige faktorer (overgræsning af kvæg, afskovning til brændsel og landbrug) kombineret med klimaforandringer, der giver uregelmæssig og reduceret nedbør.",
    },
    {
      id: "q2",
      prompt:
        "Hvad er den 'Grønne Sahara' (African Humid Period)?",
      options: [
        { id: "a", text: "Et EU-projekt om afforestation af Nordafrika" },
        { id: "b", text: "En geologisk periode for ca. 10.000–5.000 år siden, da Sahara var langt grønnere pga. et forstærket monsunmønster" },
        { id: "c", text: "En klimatisk fremtidsprognose, der forudsiger grønning af Sahara" },
        { id: "d", text: "Et historisk afrikansk rige med store regnskovs­arealer" },
      ],
      correctOptionId: "b",
      explanation:
        "For 10.000–5.000 år siden (Holocene Climatic Optimum) var Sahara dramatisk anderledes: søer, floder, savanne og menneskebefolkninger. Det skyldtes ændringer i Jordens bane og heldning (Milanković-cyklusser), som forstærkede den afrikanske sommermonsun og bragte nedbør til regionen.",
    },
    {
      id: "q3",
      prompt:
        "Hvorfor er Niger centralt i afrikansk demographisk geografi?",
      options: [
        { id: "a", text: "Niger har verdens laveste fertilitet og størst migration ud af Afrika" },
        { id: "b", text: "Niger har verdens højeste fertilitet (~6,9 børn/kvinde) og en af de hurtigst voksende befolkninger" },
        { id: "c", text: "Niger er verdens mest tætbefolkede land" },
        { id: "d", text: "Niger er et lederland inden for urbanisering i Sahel" },
      ],
      correctOptionId: "b",
      explanation:
        "Niger har konsekvent ligget øverst på listen over lande med den højeste fertilitetsrate — ca. 6,9 børn per kvinde. Kombineret med et lavt HDI og lidt arable land giver det et enormt demografisk pres og migrationsdrivkraft.",
    },
    {
      id: "q4",
      prompt:
        "Hvad er det primære årsag til, at Egypten er i konflikt med Etiopien om GERD-dæmningen?",
      options: [
        { id: "a", text: "Dæmningen blokerer Egyptens olieskibe i Nilen" },
        { id: "b", text: "Egypten frygter, at dæmningen reducerer vandstrømmen til Nilen, som 95 % af Egyptens landbrug og drikkevand afhænger af" },
        { id: "c", text: "Dæmningen skaber kraftige jordbølger, der truer egyptiske byer" },
        { id: "d", text: "Etiopien bruger dæmningen til at producere atomkraft, der konkurrerer med Egypten" },
      ],
      correctOptionId: "b",
      explanation:
        "Egypten er afhængig af Nilens vand for sin eksistens — landbrugsjord langs Nilen og i deltaet er alt afgørende. GERD-dæmningens fyldning og drift risikerer at reducere vandstrømmen og true Egyptens vandforsyning. Det er et klassisk eksempel på hydropolitik: ophavs-stat (Etiopien) mod nedstrøms-stat (Egypten).",
    },
    {
      id: "q5",
      prompt:
        "Hvad er transitmigration, og hvordan påvirker det Nordafrika?",
      options: [
        { id: "a", text: "Migration inden for Nordafrikas grænser fra land til by" },
        { id: "b", text: "Migration, hvor migranter rejser gennem Nordafrika som mellemstation på vej til Europa" },
        { id: "c", text: "Nordafrikanske arbejdere, der pendler til Europa og tilbage" },
        { id: "d", text: "EU-borgeres pensionsflytning til Nordafrika" },
      ],
      correctOptionId: "b",
      explanation:
        "Transitmigration er den geografiske term for de ruter, som folk fra Subsahara-Afrika (og Mellemøsten) tager op gennem Niger, Libyen eller Marokko på vej til Middelhavet og Europa. Det skaber politiske spændinger, humanitære kriser og forretningsmodeller for menneskesmuglere.",
    },
  ],
};
