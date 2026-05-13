import type { Topic } from "@/lib/types";
import PlateTectonicsDemo from "@/components/PlateTectonicsDemo";

export const pladetektonik: Topic = {
  slug: "pladetektonik",
  title: "Pladetektonik",
  summary:
    "Jordens indre, pladebevægelser og deres konsekvenser: vulkaner, jordskælv, tsunamier og bjergkædedannelse.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tectonic_plates_(2022).svg?width=1000",
    alt: "Verdenskort med tektoniske plader og pladegrænser",
    credit: "USGS via Wikimedia Commons",
    license: "Public domain",
    sourcePage: "https://commons.wikimedia.org/wiki/File:Tectonic_plates_(2022).svg",
  },
  demoComponent: PlateTectonicsDemo,
  sections: [
    {
      heading: "Jordens opbygning: kerne, kappe og skorpe",
      body:
        "Jorden er opbygget i lag. Inderst ligger den faste indre kerne (hovedsageligt jern og nikkel), omkring den den flydende ydre kerne, som skaber Jordens magnetfelt. Udenom ligger kappen, hvor varmt, fast materiale langsomt kan flyde over geologisk tid. Yderst ligger skorpen: tynd oceanisk skorpe (typisk 5-10 km) og tykkere kontinental skorpe (typisk 30-70 km).",
    },
    {
      heading: "Lithosfære og asthenosfære",
      body:
        "Lithosfæren er den stive ydre del af Jorden (skorpe + øverste kappe), opdelt i tektoniske plader. Under den ligger asthenosfæren, som er mere plastisk. Pladerne bevæger sig oven på asthenosfæren, drevet af varme fra Jordens indre, konvektionsstrømme, ridge push ved oceanrygge og slab pull ved subduktion.",
    },
    {
      heading: "Pladeteorien og pladebevægelser",
      body:
        "Pladeteorien forklarer, at kontinenter og oceanbund flytter sig i forhold til hinanden med få centimeter om året. Nye havbund dannes ved oceanrygge, mens ældre oceanbund synker ned i kappen ved subduktionszoner. GPS-målinger bekræfter i dag direkte disse bevægelser, fx at den Atlantiske Oceanbund udvider sig.",
    },
    {
      heading: "Pladegrænser: konstruktive, destruktive og konservative",
      body:
        "Ved konstruktive grænser bevæger plader sig fra hinanden og danner ny oceanbund (fx Midtatlantiske Ryg). Ved destruktive grænser synker en oceanisk plade ned under en anden plade (subduktion), hvilket kan danne dybhavsgrave, vulkanske ø-buer og bjergkæder. Ved konservative grænser glider plader sidelæns forbi hinanden, fx San Andreas-forkastningen, hvor spændinger udløses som jordskælv.",
    },
    {
      heading: "Vulkaner, jordskælv, tsunamier og orogenese",
      body:
        "Vulkaner findes især ved pladegrænser: skjoldvulkaner ved basaltisk magma (ofte ved hotspots eller spredningszoner) og stratovulkaner ved subduktion (mere viskøs magma og eksplosive udbrud). Jordskælv opstår, når spændinger frigives langs forkastninger. Store undersøiske skælv kan fortrænge vandmasser og skabe tsunamier. Orogenese (bjergkædedannelse) sker især ved kollision mellem kontinenter, som ved Himalaya.",
    },
    {
      heading: "Wegeners kontinentaldriftteori",
      body:
        "Alfred Wegener foreslog i 1912, at kontinenterne tidligere havde været samlet i superkontinentet Pangæa. Han brugte bl.a. kystlinjers pasform, ens fossiler på tværs af oceaner og geologiske ligheder som argumenter. Teorien manglede først en mekanisme, men blev senere understøttet af havbundsspredning, paleomagnetisme og moderne pladetektonik.",
    },
    {
      heading: "Kilder og data",
      body:
        "USGS (jordskælv og pladegrænser), Smithsonian Global Volcanism Program (vulkanaktivitet), NOAA/NWS (tsunami-beredskab), GEUS og Gymnasieniveau-lærebøger i naturgeografi. Interaktive ressourcer på siden linker til opdaterede datakilder.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvilket lag er mest plastisk og ligger under lithosfæren?",
      options: [
        { id: "a", text: "Den indre kerne" },
        { id: "b", text: "Asthenosfæren" },
        { id: "c", text: "Den oceaniske skorpe" },
        { id: "d", text: "Den ydre kerne" },
      ],
      correctOptionId: "b",
      explanation:
        "Asthenosfæren ligger under lithosfæren og opfører sig mere plastisk, så pladerne kan bevæge sig ovenpå.",
    },
    {
      id: "q2",
      prompt: "Hvad kendetegner en konstruktiv pladegrænse?",
      options: [
        { id: "a", text: "Plader kolliderer, og en synker ned" },
        { id: "b", text: "Plader glider sidelæns forbi hinanden" },
        { id: "c", text: "Plader bevæger sig fra hinanden og danner ny havbund" },
        { id: "d", text: "To kontinenter presses sammen uden vulkanisme" },
      ],
      correctOptionId: "c",
      explanation:
        "Konstruktive (divergerende) grænser danner ny oceanbund ved spredning, fx ved midtoceaniske rygge.",
    },
    {
      id: "q3",
      prompt: "Hvilken pladegrænse er San Andreas-forkastningen et eksempel på?",
      options: [
        { id: "a", text: "Destruktiv (subduktion)" },
        { id: "b", text: "Konservativ (transform)" },
        { id: "c", text: "Konstruktiv (spredning)" },
        { id: "d", text: "Hotspot uden pladegrænse" },
      ],
      correctOptionId: "b",
      explanation:
        "San Andreas er en transform forkastning, hvor plader primært glider sidelæns forbi hinanden.",
    },
    {
      id: "q4",
      prompt: "Hvorfor er stratovulkaner ofte mere eksplosive end skjoldvulkaner?",
      options: [
        { id: "a", text: "De står altid under havniveau" },
        { id: "b", text: "De har mere viskøs magma med højere gastryk" },
        { id: "c", text: "De dannes kun ved konservative grænser" },
        { id: "d", text: "De har ingen forbindelse til pladetektonik" },
      ],
      correctOptionId: "b",
      explanation:
        "Viskøs magma holder lettere på gasser, så trykket kan opbygges og give eksplosive udbrud.",
    },
    {
      id: "q5",
      prompt: "Hvad er den mest direkte årsag til de fleste tsunamier?",
      options: [
        { id: "a", text: "Vinddrevne overfladestrømme" },
        { id: "b", text: "Store undersøiske jordskælv med vertikal havbundsforskydning" },
        { id: "c", text: "Tidevandskræfter fra Månen alene" },
        { id: "d", text: "Regnskyl i kystområder" },
      ],
      correctOptionId: "b",
      explanation:
        "Tsunamier dannes typisk, når havbunden løftes eller sænkes hurtigt ved store subduktionsjordskælv.",
    },
    {
      id: "q6",
      prompt: "Hvad bidrog især til, at Wegeners idé blev accepteret senere?",
      options: [
        { id: "a", text: "Fund af dinosaurer i Arktis" },
        { id: "b", text: "Målinger af havbundsspredning og paleomagnetiske striber" },
        { id: "c", text: "At kontinenter aldrig ændrer placering" },
        { id: "d", text: "At alle jordskælv sker i Europa" },
      ],
      correctOptionId: "b",
      explanation:
        "Data fra havbunden og magnetiske mønstre viste mekanismen bag kontinentaldrift og understøttede pladetektonik.",
    },
    {
      id: "q7",
      prompt: "Hvilken proces danner Himalaya?",
      options: [
        { id: "a", text: "Spredning mellem to oceaniske plader" },
        { id: "b", text: "Kollision mellem to kontinentalplader" },
        { id: "c", text: "Transformbevægelse mellem oceaniske plader" },
        { id: "d", text: "Hotspot i den Atlantiske Oceanbund" },
      ],
      correctOptionId: "b",
      explanation:
        "Himalaya er dannet ved kollision mellem den Indiske og den Eurasiske plade.",
    },
    {
      id: "q8",
      prompt: "Hvad måler Richterskalaen primært?",
      options: [
        { id: "a", text: "Skadens omfang i bygninger" },
        { id: "b", text: "Jordskælvets energi/magnitude" },
        { id: "c", text: "Dybden af oceaniske grave" },
        { id: "d", text: "Varigheden af tsunami-advarsler" },
      ],
      correctOptionId: "b",
      explanation:
        "Richter beskriver magnitude (energifrigivelse), mens Mercalli beskriver observeret intensitet/skade.",
    },
  ],
};
