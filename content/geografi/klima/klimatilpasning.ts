import type { Topic } from "@/lib/types";

export const klimatilpasning: Topic = {
  slug: "klimatilpasning",
  title: "Klimatilpasning og afbødning",
  summary:
    "Verden reagerer på klimaforandringer gennem to strategier: afbødning (reducere udledninger) og tilpasning (leve med konsekvenserne). Lær om Parisaftalen, vedvarende energi, carbon capture og klimaflugt.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Middelgrunden_wind_farm_2009.jpg?width=800",
    alt: "Middelgrunden havmøllepark udenfor København – symbol på vedvarende energi",
    credit: "Kim Hansen via Wikimedia Commons",
    license: "CC BY-SA 3.0",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Middelgrunden_wind_farm_2009.jpg",
  },
  sections: [
    {
      heading: "Tilpasning vs. afbødning",
      body:
        "Der er to overordnede tilgange til klimaforandringer: Afbødning (mitigation) handler om at reducere årsagerne – dvs. skære ned på drivhusgasudledninger og øge optaget af CO₂ fra atmosfæren. Eksempler er udfasning af fossile brændstoffer, skovrejsning og ændret landbrug. Tilpasning (adaptation) handler om at tilpasse sig de klimaforandringer, der allerede er uundgåelige – bygge diger, ændre afgrødevalg, flytte infrastruktur fra risikoområder og forberede sig på ekstremvejr. Begge strategier er nødvendige og komplementære. Jo mere afbødning nu, desto mindre tilpasning vil være nødvendig i fremtiden.",
    },
    {
      heading: "Parisaftalen",
      body:
        "Parisaftalen (vedtaget december 2015, trådt i kraft 2016) er en bindende FN-klimaaftale, hvor 196 lande har forpligtet sig til at begrænse den globale opvarmning til 'klart under 2 °C' og bestræbe sig på 1,5 °C over det præindustrielle niveau. Hvert land indsender 'Nationalt Bestemte Bidrag' (NDC) – planer for nationale udledningsreduktioner, der skal opjusteres hvert femte år. Parisaftalen erstattede Kyotoprotokollen og er den første universelle klimaaftale. En central mangel er, at den ikke har juridisk bindende straffe for manglende overholdelse. Aktuelle NDC'er er langt fra tilstrækkelige til 1,5 °C-målet.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Paris_Agreement_adoption.jpg?width=800",
        alt: "Vedtagelsen af Parisaftalen ved COP21 i Paris, december 2015",
        credit: "IISD/ENB via Wikimedia Commons",
        license: "CC BY-NC-SA 2.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Paris_Agreement_adoption.jpg",
      },
    },
    {
      heading: "Vedvarende energi",
      body:
        "Omstilling fra fossile brændstoffer til vedvarende energi er kernen i klimaafbødningen. Sol- og vindenergi er nu de billigste energikilder i historien og vokser eksponentielt. Globalt stod vedvarende energi i 2023 for ca. 30 % af verdens elproduktion. Danmark er et globalt foregangsland: i 2023 kom ca. 88 % af den danske elproduktion fra vind og sol. Offshore-vind – som Horns Rev og Anholt – er en dansk specialitet. Udfordringerne inkluderer energilagring (batteri­teknologi, brint), systembalancering og udbygning af elnet. Elektrifisering af transport, varme og industri er central i omstillingen.",
    },
    {
      heading: "Carbon capture og negativ udledning",
      body:
        "Carbon capture and storage (CCS) er teknologier til at fange CO₂ fra kraftvarme­anlæg eller direkte fra luften og lagre det geologisk. Direct Air Capture (DAC) fanger CO₂ direkte fra atmosfæren, men er stadig dyrt (over 300 USD/ton CO₂). Skov­planting og genopretning af kulstofrige økosystemer (vådområder, mangrover, tørv) er billigere naturbaserede løsninger. IPCC vurderer, at de fleste scenarier for 1,5 °C kræver negativ udledning – at vi fjerner mere CO₂, end vi udleder – i anden halvdel af dette århundrede. BECCS (bioenergi + CCS) diskuteres, men er kontroversiel pga. arealforbrug.",
    },
    {
      heading: "Klimaflugt og klimaretfærdighed",
      body:
        "Klimaforandringer driver mennesker fra hjem og hjemlande – det kaldes klimaflugt eller klimamigration. Lavtliggende øer (Tuvalu, Maldiverne) trues af havniveaustigning; Sahel-regionen rammes af tiltagende tørke; Bangladesh er udsat for cykloner og oversvømmelser. UNHCR vurderer, at klimabegivenheder allerede fordrev over 20 millioner mennesker om året i 2010'erne. Klimaretfærdighed handler om, at de mindst udviklede lande, der bidrager mindst til drivhusgas­udledningerne, er mest sårbare over for konsekvenserne. Loss and Damage-mekanismen (vedtaget COP27, 2022) er et første skridt mod at rige lande kompenserer sårbare nationer.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Flooding_in_South_Asia_2007.jpg?width=800",
        alt: "Oversvømmelse i Sydasien – en tiltagende klimarisiko",
        credit: "UN Photo via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Flooding_in_South_Asia_2007.jpg",
      },
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er forskellen på klimatilpasning og klimaafbødning?",
      options: [
        { id: "a", text: "Tilpasning er for rige lande; afbødning er for fattige lande" },
        { id: "b", text: "Afbødning reducerer årsagerne (udledninger); tilpasning håndterer konsekvenserne" },
        { id: "c", text: "Tilpasning fokuserer på CO₂; afbødning fokuserer på metan" },
        { id: "d", text: "Det er synonymer for den samme strategi" },
      ],
      correctOptionId: "b",
      explanation:
        "Afbødning (mitigation) reducerer drivhusgas­udledninger og øger CO₂-optag. Tilpasning (adaptation) handler om at leve med de uundgåelige konsekvenser. Begge er nødvendige og supplerer hinanden.",
    },
    {
      id: "q2",
      prompt: "Hvad er temperaturmålet i Parisaftalen?",
      options: [
        { id: "a", text: "Holde opvarmningen under 1 °C" },
        { id: "b", text: "Klart under 2 °C, med bestræbelse på 1,5 °C over præindustrielt niveau" },
        { id: "c", text: "Maksimalt 3 °C globalt frem mod 2100" },
        { id: "d", text: "Holde CO₂ under 500 ppm" },
      ],
      correctOptionId: "b",
      explanation:
        "Parisaftalen (2015) forpligter undertegnerne til at begrænse global opvarmning til 'klart under 2 °C' og bestræbe sig på at begrænse den til 1,5 °C i forhold til det præindustrielle niveau (1850–1900).",
    },
    {
      id: "q3",
      prompt: "Hvad er Direct Air Capture (DAC)?",
      options: [
        { id: "a", text: "En metode til at måle luftkvalitet med droner" },
        { id: "b", text: "En teknologi der fanger CO₂ direkte fra atmosfæren" },
        { id: "c", text: "Et system til at distribuere frisk luft i byer" },
        { id: "d", text: "Satellitbaseret klimaovervågning" },
      ],
      correctOptionId: "b",
      explanation:
        "DAC-anlæg bruger kemiske processer til at fange CO₂ direkte fra den omgivende luft. Det er endnu dyrt (~300+ USD/ton CO₂) og energikrævende, men ses som en nødvendig negativ-udledningsteknologi i mange 1,5 °C-scenarier.",
    },
    {
      id: "q4",
      prompt: "Hvad er 'NDC' i klimapolitisk sammenhæng?",
      options: [
        { id: "a", text: "Nordisk Drivhusgaskonvention" },
        { id: "b", text: "Nationalt Bestemt Bidrag – et lands plan for udledningsreduktioner under Parisaftalen" },
        { id: "c", text: "Negativ Dioxidkapacitet – et mål for CCS-kapacitet" },
        { id: "d", text: "Net-nul Dato for CO₂" },
      ],
      correctOptionId: "b",
      explanation:
        "NDC (Nationally Determined Contribution) er hvert lands plan for, hvordan de vil bidrage til Parisaftalens mål. De skal opdateres og styrkes hvert femte år. Nuværende NDC'er er ifølge IPCC ikke tilstrækkelige til at nå 1,5 °C.",
    },
    {
      id: "q5",
      prompt: "Hvad er 'Loss and Damage' i klimaforhandlingernes kontekst?",
      options: [
        { id: "a", text: "Forsikringsordning mod naturkatastrofer i EU" },
        { id: "b", text: "En mekanisme der anerkender, at rige lande bærer ansvar for klimaskader i sårbare lande" },
        { id: "c", text: "Et begreb for tab af biodiversitet pga. skovrydning" },
        { id: "d", text: "Et regnskabsprincip for CO₂-kredit-handel" },
      ],
      correctOptionId: "b",
      explanation:
        "Loss and Damage anerkender, at klimaforandringer forårsager tab og skader i sårbare lande, som ikke kan afbødes eller tilpasses. COP27 (2022) vedtog en fond, der skal kompensere de mest udsatte lande – et historisk skridt i klimaretfærdigheds-debatten.",
    },
    {
      id: "q6",
      prompt: "Hvad var ca. andelen af dansk elproduktion fra vind og sol i 2023?",
      options: [
        { id: "a", text: "Ca. 30 %" },
        { id: "b", text: "Ca. 55 %" },
        { id: "c", text: "Ca. 88 %" },
        { id: "d", text: "100 %" },
      ],
      correctOptionId: "c",
      explanation:
        "Danmark er et globalt foregangsland for vedvarende energi. I 2023 kom ca. 88 % af den danske elproduktion fra vind og sol, og Danmark har flere gange produceret mere vindkraft end det totale elforbrug. Offshore-vind er central.",
    },
  ],
};
