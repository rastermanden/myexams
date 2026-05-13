import type { Topic } from "@/lib/types";

export const funktionerOgGrafer: Topic = {
  slug: "funktioner-og-grafer",
  title: "Funktioner og grafer",
  summary:
    "Få styr på funktionsbegrebet, aflæsning i koordinatsystemet og de vigtigste funktionstyper med en interaktiv grafdemo.",
  demoKey: "funktioner",
  sections: [
    {
      heading: "Funktionsbegrebet",
      body:
        "En funktion kobler hver x-værdi i definitionsmængden sammen med præcis én y-værdi i værdimængden. Når du arbejder med funktioner, undersøger du altså, hvordan input bliver omsat til output, og hvilke x-værdier der giver mening i den konkrete model.",
    },
    {
      heading: "Tre repræsentationer af samme funktion",
      body:
        "Den samme funktion kan beskrives som forskrift, tabel og graf. Forskiften viser regnereglen, tabellen gør det let at sammenligne enkelte værdier, og grafen giver overblik over vækst, toppunkt, skæringer og andre mønstre i koordinatsystemet.",
    },
    {
      heading: "Vigtige funktionstyper",
      body:
        "Lineære funktioner har formen y = ax + b og giver rette linjer. Andengradsfunktioner giver parabler med toppunkt og eventuelle nulpunkter. Eksponentialfunktioner har formen y = b·a^x og bruges til vækst og fald. Potens- og logaritmefunktioner dukker især op i gymnasiet, når man arbejder med skalaer, proportionalitet og omvendte sammenhænge.",
    },
    {
      heading: "Inverse, sammensatte og stykkevis definerede funktioner",
      body:
        "En invers funktion bytter rollerne mellem input og output, hvis funktionen er entydig. Sammensatte funktioner betyder, at outputtet fra én funktion sættes ind i en ny. Stykkevis definerede funktioner bruger forskellige regler på forskellige intervaller og ses ofte i prisstrukturer og andre virkelige modeller.",
    },
    {
      heading: "Bestem forskrift og brug modeller",
      body:
        "Når du får punkter eller en virkelighedsnær situation, skal du vælge en passende funktionstype og bestemme dens parametre. To punkter kan ofte bestemme en lineær funktion, mens data med konstant procentvis ændring peger på en eksponentialfunktion. Det er netop koblingen mellem tal, graf og fortolkning, der gør funktioner centrale i matematik.",
    },
  ],
  quiz: [
    {
      id: "q1",
      prompt: "Hvad betyder det, at en sammenhæng er en funktion?",
      options: [
        { id: "a", text: "At hver x-værdi passer til præcis én y-værdi" },
        { id: "b", text: "At hver y-værdi passer til præcis én x-værdi" },
        { id: "c", text: "At grafen altid er en ret linje" },
        { id: "d", text: "At alle x-værdier er positive" },
      ],
      correctOptionId: "a",
      explanation:
        "En funktion kræver, at hvert input x har netop ét output y. Flere x-værdier må gerne give samme y-værdi.",
    },
    {
      id: "q2",
      prompt: "Hvad fortæller parameteren b i en lineær funktion y = ax + b?",
      options: [
        { id: "a", text: "Hvor hurtigt funktionen vokser eller falder i procent" },
        { id: "b", text: "Skæringen med y-aksen" },
        { id: "c", text: "Parablens toppunkt" },
        { id: "d", text: "Hvor mange nulpunkter grafen har" },
      ],
      correctOptionId: "b",
      explanation:
        "Når x = 0, er y = b. Derfor er b skæringen med y-aksen i den lineære funktion.",
    },
    {
      id: "q3",
      prompt: "Hvilken funktionstype passer bedst til konstant procentvis vækst eller fald?",
      options: [
        { id: "a", text: "Andengradsfunktion" },
        { id: "b", text: "Lineær funktion" },
        { id: "c", text: "Eksponentialfunktion" },
        { id: "d", text: "Stykkevis defineret funktion" },
      ],
      correctOptionId: "c",
      explanation:
        "Konstant procentvis ændring beskrives af en eksponentialfunktion, fordi samme faktor ganges på for hvert skridt i x.",
    },
    {
      id: "q4",
      prompt: "Hvad viser en tabel for en funktion især?",
      options: [
        { id: "a", text: "De præcise sammenhørende værdier for udvalgte x-værdier" },
        { id: "b", text: "At funktionen nødvendigvis er invers" },
        { id: "c", text: "Kun funktionsværdien for x = 0" },
        { id: "d", text: "Hvordan man løser andengradsligninger" },
      ],
      correctOptionId: "a",
      explanation:
        "En tabel gør det let at aflæse konkrete punktpar (x, y), som også kan placeres i et koordinatsystem.",
    },
  ],
};
