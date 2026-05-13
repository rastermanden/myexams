import type { Topic } from "@/lib/types";

export const centralasien: Topic = {
  slug: "centralasien",
  title: "Centralasien",
  summary:
    "Kasakhstan, Kirgisistan, Tadsjikistan, Turkmenistan og Usbekistan — indlandsstater, stepper, ørkener, Silkevejen og stormagtsrivalisering.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Central_Asia_(orthographic_projection).svg?width=800",
    alt: "Centralasien fremhævet på en globus",
    credit: "Wikimedia Commons",
    license: "CC BY-SA 3.0",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Central_Asia_(orthographic_projection).svg",
  },
  sections: [
    {
      heading: "Geografisk beliggenhed & rumlig isolation",
      body:
        "Centralasien er verdens største indlandsregion uden kystadgang. De fem post-sovjetiske stater — Kasakhstan, Kirgisistan, Tadsjikistan, Turkmenistan og Usbekistan — dækker ca. 4 mio. km². Kasakhstan er verdens største kystløse land (2,7 mio. km²). Det Kaspiske Hav er teknisk set verdens største sø og er omgivet af Rusland, Kasakhstan, Azerbaijan, Iran og Turkmenistan. Manglen på havadgang er en fundamental geopolitisk og handelsmæssig begrænsning.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Central_Asia_relief_map.png?width=800",
        alt: "Reliefkort over Centralasien med bjerge og stepper",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Central_Asia_relief_map.png",
      },
    },
    {
      heading: "Klima, landforms & naturressourcer",
      body:
        "Centralasien har et udpræget kontinentalt klima (Dfa/Dfb/BS/BW) med ekstreme temperaturforskelle: sommertemperaturer over 40 °C i Karakum- og Kyzylkum-ørkenerne, vintertemperaturer ned til −40 °C i Kasakhstans stepper. Tien Shan- og Pamir-bjergkæderne i øst og syd hæver sig til over 7.000 m. Floderne Amu Darya og Syr Darya er regionale livsnerver. Regionen er rig på olie, gas (Turkmenistan har verdens fjerde største naturgasreserver) og mineraler (Kasakhstans uran udgør ~43 % af verdens produktion).",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pamir_mountains.jpg?width=800",
        alt: "Pamir-bjergene i Tadsjikistan",
        credit: "Wikimedia Commons",
        license: "CC BY-SA 3.0",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Pamir_mountains.jpg",
      },
    },
    {
      heading: "Aralsøens katastrofe",
      body:
        "Aralsøen var i 1960'erne verdens fjerde største sø med et areal på ca. 68.000 km². Sovjetisk planøkonomi omdirigererede vand fra de tilløbende floder (Amu Darya og Syr Darya) til bomuldsmarker — uden tanke for søens overlevelse. I 2007 var søen reduceret til under 10 % af sit oprindelige volumen. Det er en af verdens største menneskeskabte miljøkatastrofer: fiskeindustrien er forsvundet, klimaet i regionen er ændret, og pesticider og salt blæser ind over landbrugsjord. En nordlig rest (Lille Aralsø) er delvis genskabt i Kasakhstan.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aral_Sea_1989_2008.jpg?width=800",
        alt: "Sammenligning af Aralsøen 1989 og 2008",
        credit: "NASA via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Aral_Sea_1989_2008.jpg",
      },
    },
    {
      heading: "Silkevej, handel & geopolitik",
      body:
        "Centralasien lå historisk i midten af Silkevejene, der forbandt Kina med Europa og Mellemøsten. Kinas Belt and Road-initiativ (BRI) har genoplivet tanken: massive investeringer i jernbaner, veje og energiledninger gennemkrydser regionen. Rusland modvirker kinesisk indflydelse via Eurasian Economic Union (EAEU). USA og EU søger også indflydelse, delvist for at diversificere energiforsyningsveje uden om Rusland og Iran. Triple-rivalisering kaldet 'The New Great Game' (efter Stormagtsspillet i 1800-tallet) er en anerkendt analytisk ramme.",
    },
    {
      heading: "Befolkning, styreformer & udfordringer",
      body:
        "Centralasien er en region med autoritære eller semi-autoritære styrer (Freedom House: de fleste rangerer som 'Not Free'). Kirgisistan er den relative undtagelse med mere pluralistisk politik men hyppige magtskift. Islam er dominerende religion, og religiøs radikalisering har bekymret regionens regeringer og stormagt Rusland. Vandkonflikter (fx Kasakhstan vs. Kirgisistan/Tadsjikistan) er tilbagevendende. Klimaforandringer smelter gletschere i Tien Shan og Pamir, der er livsvagtigt for landbrugsvanding.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt:
        "Hvad forårsagede Aralsøens tørring?",
      options: [
        { id: "a", text: "Klimaforandringer og naturlig ørkendannelse" },
        { id: "b", text: "Sovjetisk omdirigering af tilløbsfloderne til bomuldsmarker" },
        { id: "c", text: "Massiv grundvandspumpning til byer i Kasakhstan" },
        { id: "d", text: "Tektonisk hævning af havbunden" },
      ],
      correctOptionId: "b",
      explanation:
        "Den sovjetiske planøkonomi byggede et gigantisk vandingssystem, der afledte vand fra Amu Darya og Syr Darya (Aralsøens to tilloebsfloder) til bomuldsmarker fra 1950'erne. Resultatet var katastrofalt: søen svandt til under 10 % af sit originalvolumen, og fiskeindustrien og det lokale klima blev ødelagt.",
    },
    {
      id: "q2",
      prompt:
        "Hvad er 'The New Great Game' i centralasiatisk kontekst?",
      options: [
        { id: "a", text: "En sportsbegivenhed arrangeret af den centralasiatiske union" },
        { id: "b", text: "Den geopolitiske rivalisering mellem Rusland, Kina, USA og andre om indflydelse i Centralasien — en parallel til 1800-tallets britisk-russiske rivalisering" },
        { id: "c", text: "En ny international fredstraktat for Centralasien" },
        { id: "d", text: "Et kinesisk-russisk militær-alliancesystem" },
      ],
      correctOptionId: "b",
      explanation:
        "I 1800-tallet konkurrerede det Britiske Imperium og Rusland om Afghanistan og Centralasien — kaldet 'The Great Game'. I dag gentages mønstret: Rusland, Kina, USA, EU, Tyrkiet og Iran konkurrerer om strategisk indflydelse, energikontrakter og handelsruter i de centralasiatiske stater.",
    },
    {
      id: "q3",
      prompt:
        "Kasakhstan er verdens største producent af hvad?",
      options: [
        { id: "a", text: "Palmeolie" },
        { id: "b", text: "Uran (~43 % af verdens produktion)" },
        { id: "c", text: "Lithium" },
        { id: "d", text: "Kul" },
      ],
      correctOptionId: "b",
      explanation:
        "Kasakhstan producerer ca. 43 % af verdens uranproduktion (2022) — mere end det dobbelte af det næst-største producent (Namibia). Landet har enorme kendte uranreserver og er en global nøglespiller for atomkraftindustrien.",
    },
    {
      id: "q4",
      prompt:
        "Hvad er en 'kystløs stat' (landlocked state), og hvad er de typiske konsekvenser for handel?",
      options: [
        { id: "a", text: "En stat, der ikke har adgang til søvand — påvirker ikke handel, da al handel kan foregå med fly" },
        { id: "b", text: "En stat uden havadgang — dyrere transport, afhængighed af nabolande for transitrettigheder og dermed dårligere udviklingsvilkår" },
        { id: "c", text: "En stat med for mange floder, der forhindrer vejforbindelser" },
        { id: "d", text: "En stat med udelukkende indlandshave" },
      ],
      correctOptionId: "b",
      explanation:
        "Kystløse stater som Kasakhstan, Usbekistan m.fl. mangler direkte havadgang og er afhængige af nabolandes transit-infrastruktur. Det øger transportomkostninger (typisk 30–40 % dyrere), sænker konkurrenceevnen og giver nabolandene politisk magt. FN's 'Vienna Programme of Action' (2014) adresserer specifikt dette problem.",
    },
    {
      id: "q5",
      prompt:
        "Hvad er Kinas Belt and Road-initiativs (BRI) funktion i Centralasien?",
      options: [
        { id: "a", text: "Et militæralliancesystem til erstatning for NATO" },
        { id: "b", text: "Massiv kinesisk investering i infrastruktur (jernbaner, veje, rørledninger) der kobler Centralasien til kinesiske markeder og konsoliderer kinesisk indflydelse" },
        { id: "c", text: "Et EU-finansieret miljøprogram mod desertifikation" },
        { id: "d", text: "En handelsaftale der giver Centralasien adgang til EU's indre marked" },
      ],
      correctOptionId: "b",
      explanation:
        "Kinas BRI ('den nye Silkevej') investerer massivt i infrastruktur i Centralasien — jernbaner, motorveje, energiledninger og havne — som en del af en strategi om at forbinde Kina med Europa og Afrika. Det øger Kinas handelsforbindelser og politiske indflydelse og udfordrer Ruslands traditionelle dominans i regionen.",
    },
  ],
};
