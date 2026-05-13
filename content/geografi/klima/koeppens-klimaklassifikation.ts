import type { Topic } from "@/lib/types";

export const koeppensKlimaklassifikation: Topic = {
  slug: "koeppens-klimaklassifikation",
  title: "Köppens klimaklassifikation",
  summary:
    "Wladimir Köppens klimaklassifikation fra 1900 er stadig verdens mest anvendte system til at kategorisere og sammenligne klimatyper globalt.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/K%C3%B6ppen-Geiger_Climate_Classification_Map.png?width=800",
    alt: "Verdenskort over Köppen-Geiger klimaklassifikation",
    credit: "Beck et al. (2018) via Wikimedia Commons",
    license: "CC BY 4.0",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:K%C3%B6ppen-Geiger_Climate_Classification_Map.png",
  },
  sections: [
    {
      heading: "Systemets opbygning",
      body:
        "Wladimir Köppen (1846–1940), tysk-russisk geograf og klimatolog, udviklede sit klimaklassifikationssystem i 1900 og reviderede det løbende – senest med Rudolf Geiger i 1954 (det kaldes nu Köppen-Geiger). Systemet bruger bogstavkoder til at klassificere klimaer baseret på månedlige gennemsnits­temperaturer og -nedbørsmængder, som korrelerer med naturlig vegetation. Det første bogstav (A–E) angiver klimahoved­gruppe; det andet bogstav angiver nedbørsmønster (f, w, s, m); det tredje bogstav præciserer temperatur­karakteristika (a, b, c, d). For eksempel: 'Cfb' = C (tempereret), f (fugt hele året), b (varm sommer – varmeste måned under 22 °C).",
    },
    {
      heading: "A-klimaer: Tropiske klimaer",
      body:
        "A-klimaerne er tropiske – alle måneder har en middeltemperatur over 18 °C. De opdeles i: Af (tropisk regnskov): nedbør >60 mm i tørreste måned – kraftig regn hele året. Aw (tropisk savanne): tydelig tørtid, styret af ITCZ. Am (tropisk monsun): kort tørtid, men kraftig regnperiode. A-klimaerne dækker Sydamerika (Amazonas), Centralafrika (Kongobassinet), Sydøst­asien og det karibiske område. De rummer ca. 40 % af Jordens biodiversitet i kun ~12 % af landarealet, primært i de tropiske regnskove.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Amazon_Manaus_forest.jpg?width=800",
        alt: "Tropisk regnskov ved Manaus i Brasilien (Af-klimatype)",
        credit: "CIFOR via Wikimedia Commons",
        license: "CC BY-NC-ND 2.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Amazon_Manaus_forest.jpg",
      },
    },
    {
      heading: "B-klimaer: Tørre klimaer",
      body:
        "B-klimaerne er tørre – fordampningen overstiger nedbøren. De er verdens arealmæssigt største klimagruppe og dækker ca. 30 % af Jordens landareal. De inddeles i: BW (ørken, Wüste): ekstremt tørt – under halvdelen af grænsen for halvtørhed. BS (steppe): halvtørt. Temperaturen skelner yderligere mellem varme (BWh/BSh, 'h' = hot) og kolde (BWk/BSk, 'k' = cold) varianter. Eksempler: Sahara (BWh), Arabiske Ørken (BWh), Gobi (BWk), Kazakiske steppe (BSk), Atacama (BWh – verdens tørreste ørken). B-klimaerne opstår primært under de subtropiske højtryks­bælter.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gobi_Desert_Dunes.jpg?width=800",
        alt: "Sanddyner i Gobiørkenen (BWk-klima) i Centralasien",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Gobi_Desert_Dunes.jpg",
      },
    },
    {
      heading: "C-klimaer: Tempererede klimaer",
      body:
        "C-klimaerne er tempererede med koldeste måneds middeltemperatur mellem –3 °C og 18 °C. Tre undertyper: Cf (fugt hele året), Cs (tørre somre – Middelhav), Cw (tørre vintre – monsun). Varmeste måneds temperatur skelner yderligere: a (over 22 °C), b (under 22 °C, >4 måneder over 10 °C), c (under 22 °C, 1–3 måneder over 10 °C). Danmark og Nordvesteuropa er Cfb. Sydøst­europa og USA's østkyst er Cfa. C-klimaerne er de mest folkerige klimaer – de fleste storbyregioner i Europa, Nordamerika, Østasien og Australien ligger her.",
    },
    {
      heading: "D-klimaer: Kontinentale klimaer",
      body:
        "D-klimaerne er kontinentale/boreale med koldeste måneds middeltemperatur under –3 °C (frost). De forekommer kun på den nordlige halvkugle, da der ikke er nok landmasse på den sydlige. Df (snekov­skov/taiga, fugt hele året): Sibirien, Canada, Skandinaviens indre. Dw (tørre vintre): Østasien, Manchuriet. Dfc/Dfd er undertyper med meget kold vinter. Koldeste vintermåned i verdens koldeste beboede steder (som Yakutsk i Sibirien) er under –40 °C. Boreal skov (taiga) er karakteristisk vegetation – verdens største landbiom.",
    },
    {
      heading: "E-klimaer: Polare klimaer",
      body:
        "E-klimaerne er polare – varmeste måneds middeltemperatur er under 10 °C. To undertyper: ET (Tundra): varmeste måned 0–10 °C – en kort sommer muliggør lav vegetation (mos, lav, dværgbuske). EF (Is): varmeste måned under 0 °C – permanent iskappe, ingen vegetation. EF dækker Antarktis og størstedelen af Grønland. ET findes langs arktisk kyst, Islands højland og fjeldtoppe. E-klimaerne modtager ekstremt lidt nedbør (teknisk polare ørkner), men vandets tilstedeværelse som is er massiv. Klimaopvarmning reducerer E-klimaernes udbredelse markant.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tundra_in_Siberia.jpg?width=800",
        alt: "Sibirisk tundra (ET-klimatype) med lavt plantedække",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Tundra_in_Siberia.jpg",
      },
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad angiver det første bogstav i Köppens klimakode?",
      options: [
        { id: "a", text: "Nedbørsmønsteret (f, w, s, m)" },
        { id: "b", text: "Klimahovedgruppen baseret på temperatur og fugtighed (A–E)" },
        { id: "c", text: "Vegetationstype (f.eks. regnskov, savanne, steppe)" },
        { id: "d", text: "Årstemperaturamplituden" },
      ],
      correctOptionId: "b",
      explanation:
        "Det første bogstav (A–E) i Köppens system angiver klimahovedgruppen: A = tropisk, B = tørt, C = tempereret, D = kontinentalt, E = polart. Det er primært bestemt af temperaturkriterier.",
    },
    {
      id: "q2",
      prompt: "Hvilken Köppen-klimatype har Danmark?",
      options: [
        { id: "a", text: "Cfb" },
        { id: "b", text: "Cfa" },
        { id: "c", text: "Dfb" },
        { id: "d", text: "Csb" },
      ],
      correctOptionId: "a",
      explanation:
        "Danmark klassificeres som Cfb: C = tempereret (koldeste måned over –3 °C), f = fugt hele året, b = mild sommer (varmeste måned under 22 °C). Det er det klassiske vesteuropæiske maritimt klima.",
    },
    {
      id: "q3",
      prompt: "Hvad er Köppens B-klimaers afgørende kendetegn?",
      options: [
        { id: "a", text: "Alle måneder har temperaturer under 0 °C" },
        { id: "b", text: "Potentiel fordampning overstiger nedbøren" },
        { id: "c", text: "Årsnedbøren overstiger 2.000 mm" },
        { id: "d", text: "Ingen måned har temperaturer over 10 °C" },
      ],
      correctOptionId: "b",
      explanation:
        "B-klimaer defineres som tørre: den potentielle fordampning (evapotranspiration) overstiger nedbøren. Det er det afgørende kriterium – ikke blot lav nedbør, men underskud af vandbalance.",
    },
    {
      id: "q4",
      prompt: "Hvilken Köppen-klimatype er karakteristisk for Middelhavs­regionen?",
      options: [
        { id: "a", text: "Cfb" },
        { id: "b", text: "Aw" },
        { id: "c", text: "Csa/Csb" },
        { id: "d", text: "BWh" },
      ],
      correctOptionId: "c",
      explanation:
        "Cs-klimaet er kendetegnet ved tørre somre ('s' = sommertørke). Csa har varme somre (over 22 °C), Csb mildere somre. Det er Middelhavsklimaet – varmt og tørt om sommeren, mildt og regnfuldt om vinteren.",
    },
    {
      id: "q5",
      prompt: "Hvorfor forekommer D-klimaer (kontinentale) kun på den nordlige halvkugle?",
      options: [
        { id: "a", text: "Fordi Corioliseffekten er omvendt på den sydlige halvkugle" },
        { id: "b", text: "Fordi der ikke er tilstrækkelige landmasser i relevante breddegrader på den sydlige halvkugle" },
        { id: "c", text: "Fordi havet er varmere syd for ækvator" },
        { id: "d", text: "Fordi ozonlaget er tykkest over Antarktis" },
      ],
      correctOptionId: "b",
      explanation:
        "Kontinentalt klima kræver store landmasser langt fra havet i tempererede til subpolære breddegrader (50–70°). På den sydlige halvkugle er der kun hav i disse breddegrader (bortset fra Antarktis) – ingen landmasse stor nok til at udvikle ægte kontinentalt klima.",
    },
    {
      id: "q6",
      prompt: "Hvad er forskellen på ET og EF i Köppens system?",
      options: [
        { id: "a", text: "ET har nedbør hele året, EF har tørre somre" },
        { id: "b", text: "ET: varmeste måned 0–10 °C (tundra); EF: varmeste måned under 0 °C (is)" },
        { id: "c", text: "ET er tropisk tørklima; EF er polært frostklima" },
        { id: "d", text: "ET har sne om vinteren; EF har sne hele året" },
      ],
      correctOptionId: "b",
      explanation:
        "ET (Tundra) har varmeste måneds middel­temperatur 0–10 °C – nok til en kort vækst­sæson med mos og lave buske. EF (Eis/Is) har varmeste måned under 0 °C – permanent iskappe, ingen vegetation.",
    },
    {
      id: "q7",
      prompt: "Hvad er den mest arealmæssigt udbredte Köppen-gruppe på Jordens landareal?",
      options: [
        { id: "a", text: "A-klimaer (tropiske)" },
        { id: "b", text: "B-klimaer (tørre)" },
        { id: "c", text: "C-klimaer (tempererede)" },
        { id: "d", text: "D-klimaer (kontinentale)" },
      ],
      correctOptionId: "b",
      explanation:
        "B-klimaerne (ørken og steppe) dækker ca. 30 % af Jordens landareal og er den arealmæssigt største gruppe. De er primært koncentreret i subtroperne og tempererede indlandsegne.",
    },
  ],
};
