import type { Topic } from "@/lib/types";

export const geopolitikOverblik: Topic = {
  slug: "geopolitik-overblik",
  title: "Geopolitik (overblik)",
  summary:
    "Et gymnasialt overblik over stater, suverænitet, grænser, globalisering, ressourcer, konflikter, alliancer og magt i det internationale system.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_World_Factbook_2025_map.svg?width=800",
    alt: "Verdenskort med stater og regioner",
    credit: "CIA World Factbook via Wikimedia Commons",
    license: "Public domain",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:The_World_Factbook_2025_map.svg",
  },
  sections: [
    {
      heading: "Stat, nation, suverænitet og grænser",
      body:
        "Geopolitik undersøger, hvordan geografi former magtforhold mellem stater. En stat er et territorium med regering, befolkning og international anerkendelse, mens en nation er et forestillet fællesskab baseret på fx sprog, historie eller kultur. Suverænitet betyder, at staten formelt har højeste myndighed inden for egne grænser, men i praksis begrænses den af internationale aftaler, økonomiske afhængigheder og militære styrkeforhold. Grænser kan være naturlige (floder, bjerge), kulturelle (sprog/etnicitet) eller politiske (traktater/koloniale opdelinger), og konflikter opstår ofte, når disse typer ikke overlapper.",
    },
    {
      heading: "Kort: aktuelle konflikter og alliancer",
      body:
        "Et konflikt- og allianceskort bør læses lagvist: 1) væbnede konflikter og kontrolzoner, 2) formelle alliancer (fx NATO), 3) økonomiske og politiske blokke (EU, BRICS, ASEAN, AU), 4) strategiske baser og forsyningslinjer. Pointen er, at samme område kan være både handelsknudepunkt, energikorridor og konfliktzone samtidigt. Ukraine-krigen, Gaza/Israel-krigen, Sudan-krigen og spændinger i Sydkinesiske Hav viser, at lokale konflikter hurtigt får globale konsekvenser gennem energi, migration, fødevarepriser og sikkerhedspolitik.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ongoing_conflicts_around_the_world.svg?width=800",
        alt: "Verdenskort over større aktuelle konflikter",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 4.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Ongoing_conflicts_around_the_world.svg",
      },
    },
    {
      heading: "Konflikter om ressourcer: vand, olie, gas og mineraler",
      body:
        "Ressourcegeopolitik handler om adgang, kontrol og transport. Vandkonflikter ses fx i Nilen (GERD mellem Etiopien, Sudan og Egypten). Olie- og gaskonflikter knytter sig til Mellemøsten, Rusland/Europa og Arktis, mens kritiske mineraler (lithium, kobolt, nikkel, sjældne jordarter) er centrale for grøn omstilling og batteriindustri. Ressourcer skaber ikke automatisk krig, men de kan forstærke eksisterende spændinger, især hvor statsinstitutioner er svage, grænser er omstridte, eller indtægter fordeles skævt.",
    },
    {
      heading: "Globalisering, internationale organisationer og kerne/periferi",
      body:
        "Globalisering forbinder økonomier, medier, kultur og politik på tværs af afstande. WTO-regler, internationale sanktioner, globale finansmarkeder og digitale platforme betyder, at national politik ofte får transnationale effekter. FN, EU, NATO og regionale organisationer fungerer som arenaer for både samarbejde og magtkamp. I kerne-periferi-perspektivet koncentreres finans, teknologi og beslutningskraft typisk i globale kerneområder, mens periferi ofte leverer råvarer og arbejdskraft. Samtidig udfordres denne opdeling af fremvoksende magter og nye syd-syd-samarbejder.",
    },
    {
      heading: "Tidslinje: konflikter og alliancer (1945-2026)",
      body:
        "1945: FN oprettes. 1949: NATO dannes. 1955-1991: Warszawapagten markerer bipolær blokpolitik. 1991: Sovjetunionen opløses, og USA står kortvarigt som dominerende unipolær magt. 2001-2021: Krigen mod terror omformer sikkerhedspolitik. 2008-: Finanskrise og efterfølgende geopolitiske forskydninger styrker multipolære tendenser. 2014: Krim-annektering. 2022-: Russisk fuldskalainvasion af Ukraine intensiverer europæisk oprustning. 2023-: Fornyet krig i Gaza og bred regional spænding. 2024-2026: Vedvarende rivalisering mellem USA og Kina om teknologi, handel og maritime zoner.",
    },
    {
      heading: "Energi, handelsruter og strategiske stræder",
      body:
        "Søkorridorer som Hormuzstrædet, Bab el-Mandeb, Suez, Bosporus og Malaccastrædet er globale flaskehalse. Forstyrrelser her påvirker fragtpriser, inflation og energisikkerhed i mange lande. Geopolitik i energisektoren spænder fra LNG-infrastruktur og rørledninger til elnet, sjøkabler og grøn teknologi. Energiomstilling reducerer nogle afhængigheder (fossile brændsler), men øger andre (kritiske mineraler, batterikæder, teknologi-komponenter). Derfor bliver både hard power (militær afskrækkelse) og soft power (teknologistandarder, diplomati, udviklingsaftaler) afgørende.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Strait_of_Hormuz_map-en.svg?width=800",
        alt: "Kort over Hormuzstrædet som strategisk energirute",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Strait_of_Hormuz_map-en.svg",
      },
    },
    {
      heading: "Casestudier og nuancering: flere perspektiver pr. konflikt",
      body:
        "Geopolitisk analyse bør sammenholde mindst tre perspektiver: 1) staters sikkerhed og strategiske interesser, 2) civilbefolkningens rettigheder og humanitære konsekvenser, 3) internationale regler og institutioner. Casestudier kan fx være Ukraine, Sydkinesiske Hav, Sahel eller Nilen. Et nuanceret forløb bruger flere kildetyper (officielle dokumenter, forskningsartikler, statistikker, kortdata, lokale stemmer) og skelner tydeligt mellem verificerede fakta, fortolkninger og politiske narrativer.",
    },
    {
      heading: "Kilder (udvalg)",
      body:
        "FN (UN Data, UNHCR, OCHA), Verdensbanken, IMF, SIPRI, IEA, UCDP, ACLED, WTO, IPCC, International Crisis Group, officielle traktater og nationale statistikkontorer. Data bør altid datomarkeres og krydstjekkes, fordi konflikt- og alliancesituationer ændrer sig hurtigt.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt:
        "Hvilken definition passer bedst på statssuverænitet i geopolitik?",
      options: [
        { id: "a", text: "At en stat aldrig påvirkes af andre stater" },
        { id: "b", text: "At en stat har højeste formelle myndighed i eget territorium" },
        { id: "c", text: "At en stat kun styres af internationale organisationer" },
        { id: "d", text: "At en stat altid har samme grænser som nationen" },
      ],
      correctOptionId: "b",
      explanation:
        "Suverænitet er statens formelle højeste myndighed inden for egne grænser. I praksis påvirkes den dog af traktater, markeder, sanktioner og militære magtforhold.",
    },
    {
      id: "q2",
      prompt:
        "Hvorfor er stræder som Hormuz og Bab el-Mandeb geopolitiske nøgleområder?",
      options: [
        { id: "a", text: "De har verdens største ferskvandsreserver" },
        { id: "b", text: "De forbinder centrale handels- og energiruter" },
        { id: "c", text: "De er primært turistmål uden sikkerhedspolitisk betydning" },
        { id: "d", text: "De bruges kun af regionale fiskerflåder" },
      ],
      correctOptionId: "b",
      explanation:
        "Smalle maritime flaskehalse kan påvirke globale forsyningskæder og energipriser, hvis passagen forstyrres af konflikt, pirateri eller blokader.",
    },
    {
      id: "q3",
      prompt:
        "Hvilket udsagn beskriver bedst forholdet mellem globalisering og geopolitik?",
      options: [
        { id: "a", text: "Globalisering fjerner alle geopolitiske konflikter" },
        { id: "b", text: "Globalisering gør geografi irrelevant" },
        { id: "c", text: "Globalisering skaber nye afhængigheder, som kan bruges politisk" },
        { id: "d", text: "Globalisering påvirker kun kultur, ikke økonomi eller sikkerhed" },
      ],
      correctOptionId: "c",
      explanation:
        "Handel, teknologi, finans og data skaber gensidige afhængigheder, der både kan fremme samarbejde og bruges som geopolitiske pressionsmidler.",
    },
    {
      id: "q4",
      prompt:
        "Hvilken tilgang er mest nuanceret i analyse af en aktuel konflikt?",
      options: [
        { id: "a", text: "Kun at bruge én statslig kilde fra én part i konflikten" },
        { id: "b", text: "Kun at fokusere på militære tabstal" },
        { id: "c", text: "At sammenholde sikkerhed, humanitære forhold og folkeret med flere kilder" },
        { id: "d", text: "At undgå tidslig udvikling og historisk baggrund" },
      ],
      correctOptionId: "c",
      explanation:
        "Nuancering kræver flere perspektiver og kildetyper samt skelnen mellem fakta, fortolkning og narrativ.",
    },
    {
      id: "q5",
      prompt:
        "Hvad betyder kerne/periferi i geopolitisk og økonomisk geografi?",
      options: [
        { id: "a", text: "At alle regioner har samme adgang til kapital og teknologi" },
        { id: "b", text: "At beslutningsmagt og værdikæder ofte koncentreres i kerneområder" },
        { id: "c", text: "At periferi kun handler om afstand til ækvator" },
        { id: "d", text: "At modellen ikke kan bruges i global analyse" },
      ],
      correctOptionId: "b",
      explanation:
        "Kerne/periferi beskriver asymmetrier i økonomisk og politisk magt, men modellen kan ændres over tid af nye magtcentre og regionale alliancer.",
    },
  ],
};
