import type { Topic } from "@/lib/types";

export const europa: Topic = {
  slug: "europa",
  title: "Europa (regionale forskelle)",
  summary:
    "Europas interne geografiske uligheder — vest/øst, nord/syd — belyst gennem klima, økonomi, demografi og EU's regionale samhørighedspolitik.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Europe_satellite.jpg?width=800",
    alt: "Satellitbillede af Europa",
    credit: "NASA via Wikimedia Commons",
    license: "Public domain",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Europe_satellite.jpg",
  },
  sections: [
    {
      heading: "Europas naturgeografiske zoner",
      body:
        "Europa strækker sig fra den arktiske tundra i nord til Middelhavskysten i syd — ca. 3.900 km nord-syd. Klimazonerne er tilsvarende varierede: Arktisk tundra og subarktisk klima (Fennoskandien), Atlantisk vestkyst-klima (Cfb) i Vesteuropa, Kontinentalt klima (Dfb/Dfa) i Centraleuropa og Østeuropa, og Mediterrant klima (Csa/Csb) i Sydeuropa. Bjergkæder som Alperne, Pyreneæerne og Karpatherne fungerer som klimatiske og biologiske barrierer.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Europe_topography_map.png?width=800",
        alt: "Topografisk kort over Europa",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Europe_topography_map.png",
      },
    },
    {
      heading: "Vest/Øst-kløften",
      body:
        "Øst-Vest-kløften er et centralt tema i europæisk geografi. BNI per capita er ca. to til tre gange højere i Vesteuropa (Danmark, Nederlandene, Tyskland) end i Østeuropa (Bulgarien, Rumænien, Albanien). Den historiske baggrund inkluderer decennier bag Jerntæppet med planøkonomi, begrænset demokratisering og indenrigspolitiske problemer. Siden EU's udvidelse østpå (2004 og 2007) er gabet indsnævret, men langtfra lukket. Begrebet 'konvergens' bruges til at beskrive denne proces — EU's samhørighedsfonde støtter infrastruktur og erhvervsudvikling i fattigere regioner.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/GDP_Europe.png?width=800",
        alt: "BNP per capita i Europa kortlagt",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage: "https://commons.wikimedia.org/wiki/File:GDP_Europe.png",
      },
    },
    {
      heading: "Nord/Syd-kløften",
      body:
        "Eurozonen afslørede under gældskrisen 2010–2015 en dyb Nord/Syd-kløft. Lande som Grækenland, Portugal, Spanien og Italien ('PIGS'-landene) kæmpede med stor gæld, høj arbejdsløshed og svag konkurrenceevne — delvist fordi de ikke kan devaluere deres valuta inden for euroen. Nordeuropæiske lande som Tyskland og Nederlandene var netto-kreditorer. Diskussioner om overførselsunion vs. fiscal discipline pågår stadig i EU. Sydeuropæiske lande har også lavere fertilitet og hurtigere aldrende befolkninger.",
    },
    {
      heading: "Demografi & migration",
      body:
        "Europa er præget af lav og faldende fertilitet — de fleste EU-lande har fertilitetsrater under erstatningsniveauet (2,1 børn/kvinde). Det giver aldrende befolkninger og pres på pensionssystemer. Migration (fra Sydeuropa, Østeuropa og tredjelande) er en afgørende kilde til befolkningsvækst. Flygtningestrømmene 2015–2016 (Syrien, Afghanistan, Eritrea) og igen fra Ukraine fra 2022 satte migration øverst på den politiske dagsorden. Internt i EU er arbejdskraftmigration fra Øst- til Vesteuropa (fx polske håndværkere i UK, baltierne i Norden) en vedholdende bevægelse.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/EU_fertility_rate_map.png?width=800",
        alt: "Fertilitetskort over EU-lande",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:EU_fertility_rate_map.png",
      },
    },
    {
      heading: "Klimaforandringer & grøn omstilling",
      body:
        "EU's Green Deal (2019) sigter mod klimaneutralitet i 2050. Energimikset varierer enormt: Frankrig er stærkt afhængig af atomkraft (~70 %), Danmark af vindkraft (~55 %), Polen af kul. Russisk gasinvasion af Ukraine i 2022 fremskyndede Europas energiomstilling og reducerede afhængighed af russisk gas. Sydeuropa er særlig sårbart over for tørke og hedebølger — forudsigelser peger på en Middelhavs-aridisering med reducerede vandressourcer frem mod 2100.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt:
        "Hvad er 'konvergens' i EU-geografisk kontekst?",
      options: [
        { id: "a", text: "Et klimafænomen, hvor vinde mødes over Alperne" },
        { id: "b", text: "Den proces, hvor fattigere EU-regioner indhenter rige regioners velstand, bl.a. via samhørighedsfonde" },
        { id: "c", text: "En demografisk proces, hvor fertiliteten stiger i alle EU-lande" },
        { id: "d", text: "En handelspolitisk aftale om toldsatser" },
      ],
      correctOptionId: "b",
      explanation:
        "Konvergens bruges om den politisk ønskede process, hvor fattigere regioner (fx Østeuropa) gradvist nærmer sig velstandsniveauet i de rigeste EU-regioner. EU's samhørighedsfonde og strukturfonde finansierer infrastruktur, uddannelse og erhvervsudvikling for at fremme dette.",
    },
    {
      id: "q2",
      prompt:
        "Hvad forårsagede den europæiske gældskrise 2010–2015, og hvilke lande var mest ramt?",
      options: [
        { id: "a", text: "Høje oliepriser — Norge og Danmark var mest ramt" },
        { id: "b", text: "For store statslige underskud og gæld, kombineret med manglende mulighed for valutadevaluering i eurozonen — Grækenland, Portugal, Spanien og Irland" },
        { id: "c", text: "Kinesisk konkurrence på eksportmarkeder — Frankrig og Tyskland" },
        { id: "d", text: "Tørke og landbrugskollaps — Polen og Ungarn" },
      ],
      correctOptionId: "b",
      explanation:
        "Lande som Grækenland og Portugal havde akkumuleret høj gæld og underskud. Da de finansielle markeder mistede tilliden, kunne disse lande ikke låne billigt. Problemet forstærkedes af euroen: de kunne ikke devaluere for at genvinde konkurrenceevne, og tilpasning skete i stedet via lønnedgang og nedskæringer.",
    },
    {
      id: "q3",
      prompt:
        "Hvilken klimatype dominerer i det vestlige Europa (fx Danmark, Storbritannien, Vestfrankrig)?",
      options: [
        { id: "a", text: "Mediterrant klima (Csa) med tørre somre" },
        { id: "b", text: "Kontinentalt klima (Dfb) med kolde vintre og varme somre" },
        { id: "c", text: "Atlantisk vestkystklima (Cfb) med milde vintre og moderate somre" },
        { id: "d", text: "Subtropisk klima (Cfa) med varme somre" },
      ],
      correctOptionId: "c",
      explanation:
        "Det atlantiske vestkystklima (Cfb i Köppens system) er karakteriseret ved milde vintre (ringe frost), moderate somre og regn fordelt over hele året. Det skyldes Golfstrømmens opvarmning af Nordatlanten og de fremherskende vestenvinde.",
    },
    {
      id: "q4",
      prompt:
        "Hvad er det overordnede demografiske problem i de fleste europæiske lande?",
      options: [
        { id: "a", text: "For høj fertilitet og befolkningseksplosion" },
        { id: "b", text: "Lav fertilitet under erstatningsniveauet, aldrende befolkning og pres på velfærdssystemerne" },
        { id: "c", text: "For stor ungdomspukkel og ungdomsarbejdsløshed" },
        { id: "d", text: "Kraftig udvandring til Nordamerika" },
      ],
      correctOptionId: "b",
      explanation:
        "Næsten alle EU-lande har fertilitetsrater under 2,1 — erstatningsniveauet. Det betyder befolkningstilbagegang på sigt og en stigende forsørgelsesbyrde, da færre unge skal bære omkostningerne for en voksende gruppe ældre. Migration er den vigtigste modevægt.",
    },
    {
      id: "q5",
      prompt:
        "Hvorfor fremskyndede Ruslands invasion af Ukraine i 2022 Europas energiomstilling?",
      options: [
        { id: "a", text: "Ukraine producerede atomkraft for hele Europa" },
        { id: "b", text: "Rusland leverede en stor del af Europas naturgas — sanktioner og politisk pres tvang EU til at søge alternative energikilder" },
        { id: "c", text: "Krigen ødelagde centrale solcelleanlæg i Ukraine" },
        { id: "d", text: "Vind- og vandkraftanlæg i Polen og Ukraina blev bombet" },
      ],
      correctOptionId: "b",
      explanation:
        "Rusland leverede 40–45 % af EU's naturgas. Efter invasionen i 2022 indførte EU sanktioner og besluttede at reducere afhængigheden — via LNG-import (primært fra USA), accelereret udbygning af sol og vind, og energieffektiviseringstiltag. Det er Europas hurtigste energipolitiske kursændring nogensinde.",
    },
  ],
};
