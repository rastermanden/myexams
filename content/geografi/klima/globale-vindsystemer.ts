import type { Topic } from "@/lib/types";

export const globaleVindsystemer: Topic = {
  slug: "globale-vindsystemer",
  title: "Globale vindsystemer",
  summary:
    "Jordens globale vindsystemer – fra passatvinde og Hadley-celler til vestevindbælter, polare østesvinde og jetstrømme – er afgørende for klimafordelingen på Jorden.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Earth_Global_Circulation_-_en.svg?width=800",
    alt: "Diagram over Jordens globale atmosfærecirkulation med Hadley-, Ferrel- og polarceller",
    credit: "Wikimedia Commons",
    license: "CC BY-SA 3.0",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Earth_Global_Circulation_-_en.svg",
  },
  sections: [
    {
      heading: "Hadleyceller og den tropiske cirkulation",
      body:
        "Jordens overordnede atmosfærecirkulation drives af ulige opvarmning fra Solen. Ved ækvator opvarmes luften kraftigt, stiger til vejrs og danner et permanent lavtryksbælte (ITCZ – Den Intertropiske Konvergenszone). Den varme luft spreder sig polært på store højder, afkøles og synker ved ca. 30° N og S og danner de subtropiske højtryks­bælter. Denne cirkulationscelle kaldes Hadley-cellen og er verdens stærkeste atmosfæriske cirkel. ITCZ's position skifter med årstiderne: den følger i grove træk solens zenith og er om sommeren nordfor ækvator og om vinteren syd for – dette styrer monsunen i mange tropiske egne.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hadley_cell.svg?width=800",
        alt: "Diagram over Hadley-cellen med opstigning ved ækvator og synkning ved 30°",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Hadley_cell.svg",
      },
    },
    {
      heading: "Passatvinde",
      body:
        "Passatvindene er de mest konstante vinde på Jorden. De blæser fra de subtropiske højtryks­bælter (ca. 30° N og S) mod ITCZ ved ækvator. Pga. Corioliseffekten afbøjes de til højre på den nordlige halvkugle og til venstre på den sydlige, hvilket giver nordøstpassater nord for ækvator og sydøstpassater syd for. Passatvindene var afgørende for sejlads og handel i den præindustrielle æra. De driver overfladestrømmene i det tropiske Atlanterhav og Stillehav og spiller en central rolle i ENSO-systemet (El Niño/La Niña).",
    },
    {
      heading: "Vestevindbæltet og Ferrel-cellen",
      body:
        "Mellem ca. 30° og 60° breddegrad ligger vestevindbæltet – vinde fra vest. De drives af Ferrel-cellen, en indirekte cirkulationscelle drevet af Hadley-cellen og polarcellen. I modsætning til passatvindene er vind i vestevindbæltet mere variabel og domineret af frontsystemer og extratropiske cykloner. I Danmark og Nordvesteuropa er vestenvindbæltet altdominerende: det meste af vores nedbør og stormsystemer kommer ind fra Atlanterhavet vestfra. Vestevindbæltet er stærkest i 40–60°, der historisk kaldtes 'de hylende halvtredsere' (Sydatlanten) pga. de voldsomme storme.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Coriolis_effect15.svg?width=800",
        alt: "Illustration af Corioliseffektens indflydelse på vinde på Jordens overflade",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Coriolis_effect15.svg",
      },
    },
    {
      heading: "Polare østenvinde og polarcellen",
      body:
        "I polærregionerne (ca. 60°–90°) dominerer polare østenvinde – vinde fra øst – drevet af polarcellen. Kold, tung luft synker over polerne og strømmer mod lavere breddegrader. Corioliseffekten drejer denne luftstrøm til øst, hvilket giver de karakteristiske østenvinde. Polarcellerne er svagere end Hadley-cellerne og er tæt forbundet med jetstrømmenes position. Vinterstid er det polare lavtryksområde (polarvirte­len) dominerende i Arktis. Når polarvirtelen er stærk, holdes den koldeste arktiske luft inde – når den er svag og instabil, kan arktisk luft bryde langt ned i tempererede zoner.",
    },
    {
      heading: "Jetstrømme",
      body:
        "Jetstrømme er smalle, hurtige luftstrømme på 9–12 km's højde (øverst i troposfæren) med hastigheder på 200–400 km/t. De opstår ved grænseflader mellem luftmasser med stor temperaturforskel. De to vigtigste er: 1) Den subtropiske jetstrøm ved ca. 30° og 2) Den polære jetstrøm ved ca. 60°. Vejrsystemer i vores breddegrader styres i høj grad af den polære jetstrøm – lavtrykkene følger dens bugtede bane (Rossby-bølger). Klimaforandringer ser ud til at svække den polære jetstrøm, hvilket giver mere svingende og fastlåste vejrmønstre med mere ekstreme hede- og kuldebølger.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jetstreamconfig.jpg?width=800",
        alt: "Diagram over den polære jetstrøms bane rundt om Nordpolen",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Jetstreamconfig.jpg",
      },
    },
    {
      heading: "Monsun",
      body:
        "Monsunen er et sæsonbestemt vindsystem drevet af temperaturforskelle mellem land og hav. Om sommeren opvarmes landmasser hurtigere end have, der opstår lavtryk over land og højtryk over hav – fugtladen luft blæser ind over land og giver kraftig sommermonsunregn. Om vinteren er det omvendt: kold tør luft blæser ud fra continent mod hav. Den indiske sommermonsun er verdens vigtigste monsun og leverer 70-80 % af Sydasiens nedbør på blot 4 måneder. Vestafrikas monsun og den østasiatiske monsun følger samme princip. Monsunens timing og styrke er kritisk for landbruget og vandforsyningen for milliarder af mennesker.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad er ITCZ, og hvor er den placeret?",
      options: [
        { id: "a", text: "Et havstrømsystem i det centrale Stillehav" },
        { id: "b", text: "Den Intertropiske Konvergenszone – et lavtryksbælte nær ækvator, hvor passatvinde mødes" },
        { id: "c", text: "Et iltfattigt lag i stratosfæren" },
        { id: "d", text: "Grænsen mellem den polære og subtropiske jetstrøm" },
      ],
      correctOptionId: "b",
      explanation:
        "ITCZ (Inter-Tropical Convergence Zone) er det lavtryksbælte nær ækvator, hvor nordøst- og sydøstpassatvinde mødes. Her stiger varm, fugtig luft kraftigt til vejrs og giver tropisk regn. ITCZ forskydes med årstiderne og styrer monsunen.",
    },
    {
      id: "q2",
      prompt: "Hvad driver passatvindene, og i hvilken retning blæser nordøstpassaten?",
      options: [
        { id: "a", text: "Jetstrømmene; fra nordvest" },
        { id: "b", text: "Hadley-cellen + Corioliseffekten; fra nordøst mod sydvest" },
        { id: "c", text: "Polarcellen; fra nord mod syd" },
        { id: "d", text: "Ferrel-cellen; fra sydøst mod nordvest" },
      ],
      correctOptionId: "b",
      explanation:
        "Luften synker i Hadley-cellens subtropiske højtryks­bælte og strømmer mod ITCZ ved ækvator. Corioliseffekten afbøjer den til højre (mod nordøst) på den nordlige halvkugle, hvilket giver nordøstpassaten.",
    },
    {
      id: "q3",
      prompt: "Hvad kendetegner vestevindbæltet (ca. 40–60° N og S)?",
      options: [
        { id: "a", text: "Konstante, stærke vinde fra øst" },
        { id: "b", text: "Hyppige, varierende vinde fra vest med frontpassager" },
        { id: "c", text: "Næsten vindstille vejr med tør, synkende luft" },
        { id: "d", text: "Kraftige opadstigende monsunsystemer" },
      ],
      correctOptionId: "b",
      explanation:
        "Vestevindbæltet domineres af varierende vinde fra vest og frontpassager. Ferrel-cellen driver disse vinde, og extratropiske cykloner (lavtryk) styrer vejret. Danmark og Nordvesteuropa ligger netop i dette bælte.",
    },
    {
      id: "q4",
      prompt: "Hvad er en jetstrøm?",
      options: [
        { id: "a", text: "En undervandsstrøm i det dybe Stillehav" },
        { id: "b", text: "En smal, hurtig luftstrøm på 9–12 km's højde i øverste troposfæren" },
        { id: "c", text: "Et stærkt opadstigende luftsøjle ved en tornado" },
        { id: "d", text: "Et havoverfladestrømsystem drevet af vind" },
      ],
      correctOptionId: "b",
      explanation:
        "Jetstrømme er smalle bånd af meget hurtig luft (200–400 km/t) øverst i troposfæren. De dannes ved stærke temperaturgradienter og styrer vejrsystemernes baner i tempererede breddegrader.",
    },
    {
      id: "q5",
      prompt: "Hvad er den primære drivkraft bag monsunen?",
      options: [
        { id: "a", text: "Jordskælv og pladetektonik" },
        { id: "b", text: "Sæsonbestemte temperaturforskelle mellem land og hav" },
        { id: "c", text: "Corioliseffektens skift ved ækvator" },
        { id: "d", text: "Solpletsaktivitetens 11-årige cyklus" },
      ],
      correctOptionId: "b",
      explanation:
        "Monsunen opstår fordi land opvarmes og afkøles hurtigere end hav. Om sommeren er der lavtryk over det hede land og højtryk over havet – fugtig havluft blæser ind og giver regn. Om vinteren omvender mønsteret sig.",
    },
    {
      id: "q6",
      prompt: "Hvad kaldes det, når den polære jetstrøm danner store bølgebevægelser (bugter)?",
      options: [
        { id: "a", text: "Hadley-bugt" },
        { id: "b", text: "Rossby-bølger" },
        { id: "c", text: "ENSO-oscillationer" },
        { id: "d", text: "Walker-cirkulation" },
      ],
      correctOptionId: "b",
      explanation:
        "Rossby-bølger (planetariske bølger) er de store, langsomme bugt­bevægelser i jetstrømmens bane. Når de er stærke og dybe, kan de trække arktisk luft langt sydpå eller skabe langvarige varme­bølger i vore breddegrader.",
    },
  ],
};
