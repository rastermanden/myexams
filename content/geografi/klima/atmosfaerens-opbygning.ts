import type { Topic } from "@/lib/types";

export const atmosfaerensOpbygning: Topic = {
  slug: "atmosfaerens-opbygning",
  title: "Atmosfærens opbygning",
  summary:
    "Jordens atmosfære er opdelt i lag med meget forskelligt indhold og temperaturprofil. Lær om troposfæren, stratosfæren, mesosfæren, termosfæren og ozonlaget.",
  hero: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Atmosphere_layers.jpg?width=800",
    alt: "Diagram over atmosfærens lag fra jordens overflade til rummet",
    credit: "NASA via Wikimedia Commons",
    license: "Public domain",
    sourcePage:
      "https://commons.wikimedia.org/wiki/File:Atmosphere_layers.jpg",
  },
  sections: [
    {
      heading: "Troposfæren – vejrets lag",
      body:
        "Troposfæren er det nederste og tættest befolkede lag af atmosfæren. Det strækker sig fra jordoverfladen til ca. 8–18 km (tykkest ved ækvator, tyndest ved polerne). Her finder næsten alt vejr sted: skyer, nedbør, vind og temperaturvariationer. Temperaturen falder normalt med ca. 6,5 °C pr. 1.000 meters stigning (miljølapserate). Troposfæren indeholder ca. 75 % af atmosfærens masse og næsten al vanddamp. Øverst er tropopausen – en temperaturinversion, der fungerer som naturlig 'låg' og forhindrer troposfærisk luft i at trænge op i stratosfæren under normale forhold.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Earth_atmosphere.jpg?width=800",
        alt: "Jordens atmosfære set fra Den Internationale Rumstation",
        credit: "NASA via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Earth_atmosphere.jpg",
      },
    },
    {
      heading: "Stratosfæren og ozonlaget",
      body:
        "Stratosfæren ligger fra ca. 12 km til 50 km over jordens overflade. Her stiger temperaturen med højden (temperaturen-inversion) – stik modsat troposfæren. Årsagen er ozonlaget, der befinder sig primært i 15–35 km's højde. Ozon (O₃) absorberer solens skadelige UV-B og UV-C stråling og omdanner den til varme. Uden ozonlaget ville intensiv UV-stråling ødelægge DNA i levende organismer. Stratosfæren er meget tør og stabil – jetfly flyver i den øverste del af stratosfæren (10–12 km) for at undgå turbulens fra troposfærens urolige vejr.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ozone_altitude_UV_graph.jpg?width=800",
        alt: "Graf over ozonlag og UV-absorption med altitude",
        credit: "Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Ozone_altitude_UV_graph.jpg",
      },
    },
    {
      heading: "Mesosfæren",
      body:
        "Mesosfæren strækker sig fra ca. 50 km til 85 km over jordoverfladen. Her falder temperaturen igen med stigende højde, og ved mesopaussen (ca. 85 km) kan den nå ned til –90 °C eller lavere – det koldeste sted i Jordens atmosfære. Meteorer brænder typisk op i mesosfæren, da luftmodstanden her er tilstrækkelig til at opvarme dem. Lysende natteskyer (noctilucent clouds) dannes i mesosfærens øverste del og er de højesteliggende skyer, vi kender.",
    },
    {
      heading: "Termosfæren og ionosfæren",
      body:
        "Termosfæren begynder ved ca. 85 km og strækker sig til over 600 km. Trods ekstremt lav lufttæthed er temperaturen her teoretisk set meget høj (over 1.000–2.000 °C) fordi energirige solpartikler ioniserer luftmolekylerne. Den International Rumstation (ISS) kredser i termosfæren i ca. 400 km's højde. En del af termosfæren overlapper med ionosfæren, som er rig på ioniserede partikler og reflekterer radiobolger – vigtig for langdistance-radio­kommunikation. Det er også her nordlyset (aurora borealis) dannes, når solvind interagerer med magnetfeltet.",
    },
    {
      heading: "Ozonlagets udtynding og genopretning",
      body:
        "I 1980'erne opdagede forskere et hul i ozonlaget over Antarktis, forårsaget af klorofluorkarboner (CFC'er) brugt i kølemidler og spraydåser. CFC-molekyler stiger op i stratosfæren, nedbrydes af UV-lys og frigiver klor-atomer, der katalytisk ødelægger ozonmolekyler. Montreal-protokollen (1987) forbød CFC'er globalt og betragtes som en af de mest vellykkede internationale miljøaftaler. Ozonlaget viser sig at komme sig langsomt – modeller forudsiger, at det er fuldt restitueret inden 2070. Det er et positivt eksempel på, at internationalt samarbejde kan løse globale miljøproblemer.",
      image: {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ozone_hole_2010.jpg?width=800",
        alt: "Satellitbillede af ozonhullet over Antarktis i 2010",
        credit: "NASA Goddard Space Flight Center via Wikimedia Commons",
        license: "Public domain",
        sourcePage:
          "https://commons.wikimedia.org/wiki/File:Ozone_hole_2010.jpg",
      },
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "I hvilket atmosfærelag finder næsten alt vejr (skyer, nedbør, vind) sted?",
      options: [
        { id: "a", text: "Stratosfæren" },
        { id: "b", text: "Mesosfæren" },
        { id: "c", text: "Troposfæren" },
        { id: "d", text: "Termosfæren" },
      ],
      correctOptionId: "c",
      explanation:
        "Troposfæren (0–ca. 12 km) indeholder 75 % af atmosfærens masse og næsten al vanddamp. Alle de kendte vejrfænomener foregår her.",
    },
    {
      id: "q2",
      prompt: "Hvad absorberer ozonlaget og derved beskytter livet på Jorden?",
      options: [
        { id: "a", text: "Synligt lys og infrarød stråling" },
        { id: "b", text: "UV-B og UV-C stråling fra Solen" },
        { id: "c", text: "Kosmisk stråling fra andre stjernesystemer" },
        { id: "d", text: "Mikrobølger og radiobølger" },
      ],
      correctOptionId: "b",
      explanation:
        "Ozon (O₃) i stratosfæren absorberer størstedelen af solens UV-B- og UV-C-stråling. Uden dette filter ville den energirige UV-stråling skade DNA og øge risikoen for hudkræft og forstyrre fotosyntese.",
    },
    {
      id: "q3",
      prompt: "Hvad er det koldeste sted i Jordens atmosfære?",
      options: [
        { id: "a", text: "Tropopausen (ca. 12 km's højde)" },
        { id: "b", text: "Mesopaussen (ca. 85 km's højde)" },
        { id: "c", text: "Stratopausen (ca. 50 km's højde)" },
        { id: "d", text: "Termopaussen (ca. 600 km's højde)" },
      ],
      correctOptionId: "b",
      explanation:
        "Mesopaussen øverst i mesosfæren (ca. 85 km) er det koldeste sted i atmosfæren med temperaturer ned til –90 °C og derunder. Temperaturen falder hele vejen op gennem mesosfæren.",
    },
    {
      id: "q4",
      prompt: "I hvilket lag kredser Den Internationale Rumstation (ISS)?",
      options: [
        { id: "a", text: "Stratosfæren" },
        { id: "b", text: "Mesosfæren" },
        { id: "c", text: "Termosfæren" },
        { id: "d", text: "Eksosfæren" },
      ],
      correctOptionId: "c",
      explanation:
        "ISS befinder sig ca. 400 km over jordens overflade, dvs. i termosfæren. Trods den meget lave lufttæthed er der nok luftmodstand til at ISS gradvist mister højde og regelmæssigt skal boostes op.",
    },
    {
      id: "q5",
      prompt: "Hvad forårsagede hullet i ozonlaget over Antarktis?",
      options: [
        { id: "a", text: "Forhøjede CO₂-koncentrationer" },
        { id: "b", text: "Klorofluorkarboner (CFC'er) fra kølemidler og spraydåser" },
        { id: "c", text: "Kernekraftudledninger fra Tjernobyl" },
        { id: "d", text: "Methangas fra kvæg og risdyrkning" },
      ],
      correctOptionId: "b",
      explanation:
        "CFC'er stiger op i stratosfæren, nedbrydes af UV-lys og frigiver kloratomer, der katalytisk nedbryder ozon. En kloratom kan ødelægge over 100.000 ozonmolekyler. Montreal-protokollen (1987) forbød CFC'er og har ført til gradvis genopretning.",
    },
    {
      id: "q6",
      prompt: "Hvorfor stiger temperaturen med højden i stratosfæren?",
      options: [
        { id: "a", text: "Fordi der er tyndere luft, som varmes hurtigere op" },
        { id: "b", text: "Fordi ozonlaget absorberer UV-stråling og frigiver varmen i stratosfæren" },
        { id: "c", text: "Fordi stratosfæren er tættere end troposfæren" },
        { id: "d", text: "Fordi vind transporterer varme fra ækvator opad" },
      ],
      correctOptionId: "b",
      explanation:
        "Ozonlaget absorberer solens UV-stråling og omdanner den til varme. Dette sker primært i stratosfæren, og eftersom mere ozon er koncentreret i de højere dele, stiger temperaturen med højden (temperaturinversion).",
    },
    {
      id: "q7",
      prompt: "Hvad er nordlyset (aurora borealis) forårsaget af?",
      options: [
        { id: "a", text: "Lydsrefleksioner i mesosfærens istråder" },
        { id: "b", text: "Solvindspartikler der interagerer med ionosfæren og Jordens magnetfelt" },
        { id: "c", text: "Kemisk reaktion mellem ozon og kvælstof i stratosfæren" },
        { id: "d", text: "Kosmisk stråling der rammer troposfærens vanddamp" },
      ],
      correctOptionId: "b",
      explanation:
        "Nordlyset opstår, når ladede partikler fra solvinden ledes af Jordens magnetfelt ned mod polerne og kolliderer med gasser i ionosfæren (termosfæren). Disse kollisioner exciterer gasatomer, der udsender lys i grønne, røde og blå farver.",
    },
  ],
};
