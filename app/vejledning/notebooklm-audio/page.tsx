import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

type ReligionPrompt = {
  slug: string;
  title: string;
  emoji: string;
  intro: string;
  prompt: string;
};

const RELIGION_PROMPTS: ReligionPrompt[] = [
  {
    slug: "kristendom",
    title: "Kristendom",
    emoji: "✝️",
    intro:
      "Verdens største religion (~2,4 mia.). Fokuser på treenighed, frelse ved nåde (sola gratia/fide/scriptura), retningerne (katolsk, ortodoks, protestantisk), Det Store Skisma 1054, reformationen 1517, folkekirken i Danmark og Ninian Smarts syv dimensioner.",
    prompt: `Lav en audio-overview på dansk til en gymnasieelev (STX-religion) som forberedelse til mundtlig eksamen om kristendommen. Brug en samtaleform mellem to værter på 12–15 minutter, faglig men letforståelig.

Behandl præcis disse punkter i denne rækkefølge:
1) Nøglefakta: monoteistisk abrahamitisk religion, ~2,4 mia. tilhængere (verdens største), grundlagt i 1. årh. e.Kr., Jesus af Nazaret som Kristus/Messias, Bibelen (GT + NT), trosbekendelserne fra Nikæa/Konstantinopel 325/381.
2) Retninger: katolsk (~1,3 mia., paven), ortodoks (~220 mio.), protestantisk (~800-900 mio. — lutheransk, reformert, anglikansk, baptist, metodist, pinse). Forklar Det Store Skisma 1054 og reformationen 1517 (Luther).
3) Centrale begreber: treenighed, inkarnation, sola gratia / sola fide / sola scriptura, synd, nåde, dåb og nadver som sakramenter, eskatologi.
4) Geografi: kristendommens tyngdepunkt er flyttet fra det globale nord til det globale syd — Afrika syd for Sahara og Latinamerika vokser, Europa sekulariserer.
5) Kristendom i Danmark: folkekirken er evangelisk-luthersk og grundlovsfæstet (§4), ~71 % af befolkningen, Grundtvig og Kierkegaard som danske religionstænkere.
6) Ligheder og forskelle: fælles abrahamitisk arv (Abraham, Moses, Maria) med jødedom og islam, men skilt fra dem af treenigheden og kristologien. Kontrast til buddhismens non-teisme og naturreligionernes immanens.
7) Ninian Smarts syv dimensioner anvendt på kristendommen — kom kort ind på alle syv med konkrete eksempler (juleevangelium = mytisk-fortællende, treenighed = doktrinær, næstekærlighedsbud = etisk, dåb/nadver = rituel, pinseåndsdåb = erfaringsmæssig, folkekirkens struktur = social-institutionel, katedraler/ikoner = materiel).
8) Aktuelle problemstillinger: sekularisering i Vesten, vækst i syd, samkønnede vielser, kristne mindretal under pres i Mellemøsten.

Tone: rolig, forklarende, brug fagudtryk men forklar dem ved første brug. Brug korte eksempler frem for lange opremsninger. Afslut med 3–4 spørgsmål eleven bør kunne svare på.`,
  },
  {
    slug: "islam",
    title: "Islam",
    emoji: "☪️",
    intro:
      "Verdens næststørste religion (~1,9 mia.) og hurtigst voksende. Fokuser på tawhid, de fem søjler, sunni/shia/sufi, geografisk virkelighed (60 % i Asien-Stillehav, ikke arabisk), islam i Danmark og Smarts dimensioner.",
    prompt: `Lav en audio-overview på dansk til en gymnasieelev (STX-religion) som forberedelse til mundtlig eksamen om islam. Brug en samtaleform mellem to værter på 12–15 minutter, faglig men letforståelig.

Behandl præcis disse punkter i denne rækkefølge:
1) Nøglefakta: monoteistisk abrahamitisk religion grundlagt i 7. årh. e.Kr., Muhammad (570–632) som Guds sidste profet (khātam al-anbiyāʾ), Koranen åbenbaret 610–632, hadith og sunna, hijra i 622 som tidsregningens nulpunkt, ~1,9 mia. tilhængere.
2) Tawhid — Guds absolutte enhed — som den centrale læresætning. Forklar de fem søjler: shahāda, salāt, sawm, zakāt, hajj.
3) Retninger: sunni (~85-90 %) med fire klassiske retsskoler (hanafi, maliki, shafi'i, hanbali), shia (~10-15 %, dominerer Iran og Irak, mener lederskabet skulle være gået til Ali), og sufismen som mystisk tværgående strømning (dhikr, tariqa, ihsān).
4) Centrale begreber: sharia (vejen), fiqh (retsvidenskab), ulama, ummah, halal/haram, jihad (først og fremmest indre anstrengelse), kalifat vs. imamat.
5) Geografi — afliv myten om at islam = arabisk: ~60 % af verdens muslimer bor i Asien-Stillehavsregionen, Indonesien er verdens største muslimske land (~240 mio.), kun ~25 % i Mellemøsten/Nordafrika.
6) Islam i Danmark: ~320.000 muslimer (~5,5 %), største oprindelseslande Tyrkiet, Irak, Libanon, Pakistan, Somalia, Syrien. Hamad bin Khalifa Civilization Center i København, tildækningsforbuddet 2018, koranafbrændinger og blasfemilov 2023.
7) Ligheder og forskelle: deler Abraham, Moses (Musa), Jesus (ʿĪsā, profet og jomfrufødt — men ikke Gud), Maria (Maryam) med jødedom og kristendom. Afviser eksplicit treenigheden og Jesu korsfæstelse. Kontrast til buddhismens non-teisme.
8) Ninian Smarts syv dimensioner anvendt på islam — udfold alle syv med konkrete eksempler (Muhammads natterejse al-Isrāʾ = mytisk-fortællende, tawhid = doktrinær, halal/haram og sharia = etisk-juridisk, de fem daglige bønner = rituel, sufisk fana = erfaringsmæssig, ummah og moskéer = social-institutionel, Kaʿbaen, kalligrafi og kuppelarkitektur = materiel). Fremhæv at den rituelle dimension fylder usædvanlig meget — islam er først og fremmest noget man gør.
9) Aktuelle problemstillinger: integration i Vesten, hovedtørklædedebat, sunni-shia-rivalisering (Saudi-Arabien vs. Iran), islamisme vs. islamofobi, reform-islam.

Tone: præcis, ikke-essentialistisk. Brug arabisk-fagudtryk men oversæt dem. Afslut med 3–4 spørgsmål eleven bør kunne svare på.`,
  },
  {
    slug: "joededom",
    title: "Jødedom",
    emoji: "✡️",
    intro:
      "Den ældste abrahamitiske religion (~15 mio.). Fokuser på Tanakh og Talmud, halakha som handlingsreligion, ortodoks/konservativ/reform, diaspora og Shoah, jødedommen i Danmark (oktober 1943-redningen) og Smarts dimensioner.",
    prompt: `Lav en audio-overview på dansk til en gymnasieelev (STX-religion) som forberedelse til mundtlig eksamen om jødedommen. Brug en samtaleform mellem to værter på 12–15 minutter, faglig men letforståelig.

Behandl præcis disse punkter i denne rækkefølge:
1) Nøglefakta: den ældste abrahamitiske religion, opstod blandt israelitterne i Levanten i 2. årtusinde f.Kr. Stamfædre Abraham, Isak, Jakob; Moses og udgangen af Egypten; kongerne David og Salomon. Hellig skrift: Tanakh (Tora + Neviʾim + Ketuvim) + Talmud (Mishna + Gemara, ca. 500 e.Kr.). Shema Yisrael som trosbekendelse. ~15 mio. tilhængere — historisk decimeret af Holocaust (~6 mio. myrdet 1933–45).
2) Retninger: ortodoks (inkl. moderne-ortodoks og haredisk/ultraortodoks med chasidisme og litvisk yeshiva-tradition), konservativ jødedom, reformjødedom (1800-tallets Tyskland — kvindelige rabbinere). Sefardim, mizrahim og ashkenazim som kulturelle traditioner.
3) Centrale begreber: Tora, halakha (jødisk lov), 613 mitzvot, brit (pagten), tikkun olam (at reparere verden), shabbat, kashrut, bar/bat mitzva, kabbala, diaspora (galut/tfutza), Messias som endnu ikke kommet, Shoah.
4) Geografi: ~7,1 mio. i Israel og ~6,3 mio. i USA (tilsammen ~89 % af verdens jøder); resten primært Frankrig, Canada, Storbritannien, Argentina. Før Holocaust boede flertallet i Europa — i dag mindre end en tredjedel af før-krigs-tallet.
5) Jødedom i Danmark: ~6.000-8.000 jøder, synagogen i Krystalgade (1833), Det Jødiske Samfund (1684). Oktober 1943: civilsamfundet reddede ~7.200 jøder over Øresund — Danmark blandt få lande hvor flertallet overlevede Holocaust. Terrorangrebet ved synagogen 2015. Omskæringsdebat som eksistentiel.
6) Centralt: jødedommen er en ortopraksi — det er vigtigere hvad man GØR (mitzvot, halakha) end præcis hvad man tror. Det skiller jødedommen fra kristendommens doxa-fokus.
7) Ligheder og forskelle: deler Abraham, Moses, profeterne og store dele af GT/Koranen med kristendom og islam. Men: afviser Jesus som Messias og Guds søn, afviser treenigheden, afviser Muhammad som profet. Pesach er forløber for kristen påske.
8) Ninian Smarts syv dimensioner anvendt på jødedommen — udfold alle syv med konkrete eksempler (udgangen af Egypten = mytisk-fortællende, pagten og Maimonides' 13 trosartikler = doktrinær, de 613 mitzvot og kosher = etisk-juridisk, sabbat og seder = rituel, chasidisk gudsglæde og kabbalaens mystik = erfaringsmæssig, synagoge, rabbinat og staten Israel = social-institutionel, Tora-rulle, kippa, tallit, Klagemuren = materiel). Fremhæv at den etisk-juridiske dimension er særligt dominerende.
9) Aktuelle problemstillinger: stigende antisemitisme i Europa, Israel/Palæstina-konflikten, BDS-bevægelsen, IHRA-arbejdsdefinitionen, omskæringsdebat, haredim og militærtjeneste i Israel, Holocaust-erindring med færre øjenvidner.

Tone: respektfuld, præcis. Forklar hebraiske fagudtryk. Afslut med 3–4 spørgsmål eleven bør kunne svare på.`,
  },
  {
    slug: "buddhisme",
    title: "Buddhisme",
    emoji: "☸️",
    intro:
      "Non-teistisk religion (~520 mio.). Fokuser på De Fire Ædle Sandheder, Den Ottefoldige Vej, anicca/dukkha/anatta, karma og samsara, theravada/mahayana/vajrayana, mindfulness i Danmark og Smarts dimensioner.",
    prompt: `Lav en audio-overview på dansk til en gymnasieelev (STX-religion) som forberedelse til mundtlig eksamen om buddhismen. Brug en samtaleform mellem to værter på 12–15 minutter, faglig men letforståelig.

Behandl præcis disse punkter i denne rækkefølge:
1) Nøglefakta: non-teistisk religion grundlagt i Nordindien/Nepal i 5.-4. årh. f.Kr. af Siddhartha Gautama (~563–483 f.Kr.), kendt som Buddha — 'den opvågnede'. ~520 mio. tilhængere (verdens fjerdestørste). Hellig skrift: Tipitaka (theravada, pali) og mahayana-sutraer.
2) Kernelæren: De Fire Ædle Sandheder (lidelsen findes, har en årsag, kan ophøre, der findes en vej til ophør) og Den Ottefoldige Vej (rette syn, hensigt, tale, handling, levevis, anstrengelse, opmærksomhed, koncentration). De tre kendetegn ved tilværelsen: anicca (forgængelighed), dukkha (lidelse), anatta (ikke-selv).
3) Karma og samsara er fælles arvegods fra indisk tankegods — målet er nirvana (slukning af begær, had og uvidenhed; udgang af genfødslens kredsløb). Karma drives af cetanā (hensigt) — det er en intentionalitetsetik, ikke en mekanisk gengældelse.
4) Retninger: theravada ('de ældstes lære' — Sri Lanka, Myanmar, Thailand, Laos, Cambodja, arhat-idealet og vipassana). Mahayana (Kina, Korea, Japan, Vietnam, bodhisattva-idealet — inkluderer Rent Land, zen/chan og Nichiren). Vajrayana ('diamantfartøjet' — Tibet, Bhutan, Mongoliet, ritualer, mantraer, mandalaer, lærer-discipel-relationer, Dalai Lama).
5) Geografi: ~99 % af buddhister bor i Asien-Stillehavsregionen. Største: Kina (~245 mio.), Thailand (~65 mio.), Japan (~45 mio.), Myanmar (~38 mio.). Indien — buddhismens oprindelsessted — har i dag kun ~0,7 % buddhister.
6) Buddhisme i Danmark: ~20.000-25.000 buddhister, både asiatisk diaspora og dansk-konverteret. Tibetansk vajrayana via Karma Kagyu Buddhist Centre. Zen, theravada og vipassana repræsenteret. Mindfulness (Jon Kabat-Zinn, MBCT) er udbredt i skoler og sundhedsvæsen — diskutér om mindfulness er religiøst eller sekulært. Dalai Lamas Danmarks-besøg har udløst kinesiske protester.
7) Ligheder og forskelle: deler karma, samsara, dharma og meditation med hinduismen, men afviser de evige Vedaer, kasteordenen og atman-læren. Kontrast til de abrahamitiske religioner: non-teistisk (ingen skabergud), cyklisk tid (ikke lineær), frelsen er indsigt (prajna) — ikke nåde eller åbenbaring.
8) Ninian Smarts syv dimensioner anvendt på buddhismen — udfold alle syv med konkrete eksempler (Buddhas livshistorie og de fire syn = mytisk-fortællende, De Fire Ædle Sandheder, anatta og Nagarjunas tomhed = doktrinær, de fem leveregler og vinaya = etisk, meditation/vipassana/zazen = rituel, satori og opvågnen = erfaringsmæssig, sanghaen og dalai lama-institutionen = social-institutionel, stupaer, buddha-statuer, dharmachakra, mandalaer, thangkaer = materiel).
9) Aktuelle problemstillinger: Tibet-Kina og Dalai Lamas arvefølge, buddhistisk nationalisme og vold (Myanmar, Sri Lanka — afliv myten om buddhisme som rent pacifistisk), 'McMindfulness'-kritikken, Engaged Buddhism (Thich Nhat Hanh), kvindelige bhikkhuni-ordinationer.

Tone: præcis, undgå romantisering. Forklar at non-teisme ikke er ateisme. Afslut med 3–4 spørgsmål eleven bør kunne svare på.`,
  },
  {
    slug: "naturreligioner",
    title: "Naturreligioner",
    emoji: "🌿",
    intro:
      "Etniske/oprindelige religioner uden grundlægger eller hellig skrift (~400-450 mio.). Fokuser på animisme, shamanisme, polyteisme, eksempler (Yoruba, aboriginal Dreamtime, shinto, asatro), at begrebet selv er en vestlig konstruktion, og at Smarts model passer særligt godt her.",
    prompt: `Lav en audio-overview på dansk til en gymnasieelev (STX-religion) som forberedelse til mundtlig eksamen om naturreligioner. Brug en samtaleform mellem to værter på 12–15 minutter, faglig men letforståelig.

Behandl præcis disse punkter i denne rækkefølge:
1) Begrebsafklaring: 'naturreligion' er en vestlig samlebetegnelse — andre udtryk er etniske religioner, primale religioner, oprindelige religioner, indigenous religions. Diskutér at begrebet er en kategorial konstruktion med rødder i oplysningstidens evolutionistiske religionsteori (Tylor, Frazer), kritiseret af Talal Asad og J.Z. Smith som kolonial epistemologi.
2) Nøglefakta: ingen historisk grundlægger, ingen hellig kanontekst, typisk mundtligt overleveret, knyttet til specifikke folkeslag, landskaber og økosystemer. ~400-450 mio. udøvere (5-6 % af verden), men tal er usikre pga. synkretisme.
3) Centrale begreber: animisme (ånder/sjæl bebor naturen — Tylor 1871, nyere: Descolas alternative ontologi), shamanisme (specialist rejser i ekstase til åndeverdenen — ord fra tungus-saman), polyteisme, totemisme, forfædredyrkelse, mana (kraft), tapu/tabu, axis mundi, overgangsriter (van Gennep), trickster-figurer.
4) Varianter og eksempler — gå konkret igennem: afrikanske (Yoruba med orisha, Akan, Zulu, Dogon, San), amerindianske (Lakota, Navajo, Hopi, Inuit, Maya/Aztek), sibirisk shamanisme, australsk aboriginal religion med Dreamtime/Tjukurpa og Uluru, oceaniske (maori med atua, tapu, mana), asiatiske (shinto i Japan med kami og helligdomme; daoistisk folkereligion; bön i Tibet), synkretiske afro-amerikanske (vodou på Haiti, santería på Cuba, candomblé i Brasilien), og nyhedenske bevægelser (wicca, asatro).
5) Geografi: største koncentrationer i Kina (folkelig religion ~290 mio.), Afrika syd for Sahara, Indien (adivasi), Sydøstasien, Sibirien, Andesregionen og Amazonas, Nordamerika, Oceanien.
6) Naturreligioner i Danmark: Forn Sed Danmark (asatro) — officielt anerkendt trossamfund siden 2003, ~1.000 medlemmer, blot ved solhverv og jævndøgn til æser og vaner (Odin, Thor, Frej, Freja) rekonstrueret fra Edda og sagaerne. Forn Sed afgrænser sig udtrykkeligt fra højrenationalistisk brug af nordisk hedendom (Asatru Folk Assembly i USA). Grønlandsk inuit-religion og samisk religion som nordisk kontekst. Folkelige rester: solhverv, sankthansbål, majstang, varsler.
7) Ligheder og forskelle: skabelsesfortællinger og syndflodsmotivet deles med abrahamitiske religioner. Verdensaksen (Yggdrasil, ceiba, kalpavriksha) er tværkulturel. MEN: typisk polyteistiske/animistiske (immanens frem for transcendens), ingen hellig skrift, ingen mission, knyttet til folk og sted frem for universelt budskab. Cyklisk frem for lineær tid. Etikken handler om balance, fællesskab og respekt for naturen.
8) Ninian Smarts syv dimensioner — anvend dem særligt opmærksomt her, fordi Smart udviklede modellen netop for at kunne sammenligne religioner UDEN skrift på lige fod. Udfold alle syv med konkrete eksempler (trickster-fortællinger og Dreamtime = mytisk-fortællende, mana og tapu = doktrinær, sædvaneret og forfædre-respekt = etisk, shamanrejser og overgangsriter = rituel, trance og vision = erfaringsmæssig, stamme/klan/shaman som specialist = social-institutionel, totempæle, masker, trommer, Uluru = materiel — som ofte er særligt rig).
9) Aktuelle problemstillinger: repatriering af hellige genstande fra vestlige museer (NAGPRA 1990), Standing Rock som model for indigenous miljøaktivisme, FN's UNDRIP 2007, Amazonas-skovning truer skovfolks åndelige liv, kulturel appropriation (ayahuasca-turisme, smudging), højrenationalistisk misbrug af nordisk hedendom, neopaganisme i Vesten knyttet til økofeminisme og klimakrise.

Tone: metodisk omhyggelig, ikke-eksotiserende. Understreg pluraliteten — der findes ikke ÉN naturreligion. Afslut med 3–4 spørgsmål eleven bør kunne svare på.`,
  },
  {
    slug: "ninian-smart",
    title: "Ninian Smarts syv dimensioner",
    emoji: "🧭",
    intro:
      "Den fænomenologiske dimensionsmodel som tværgående analyseværktøj. Fokuser på baggrund, de syv (+1) dimensioner med eksempler, hvordan modellen bruges i en analyse, dens styrker og kritikken fra fx Talal Asad.",
    prompt: `Lav en audio-overview på dansk til en gymnasieelev (STX-religion) som forberedelse til mundtlig eksamen om Ninian Smarts dimensionsmodel. Brug en samtaleform mellem to værter på 12–15 minutter, faglig men letforståelig.

Behandl præcis disse punkter i denne rækkefølge:
1) Hvem var Ninian Smart? Skotsk religionsforsker (1927–2001), grundlagde det første sekulære religionsvidenskabelige institut i Storbritannien (Lancaster, 1967), senere UC Santa Barbara. Insisterede på ikke-konfessionel, komparativ religionsvidenskab. Hovedværk: The World's Religions (1989, opdateret 1998); senere Dimensions of the Sacred (1996) hvor den ottende dimension tilføjes.
2) Hvorfor en dimensionsmodel? Smart ville bryde med (a) den protestantisk-vestlige bias om at religion primært handler om tro/doktriner, og (b) den reduktive sociologiske antagelse om at religion blot er overbygning på økonomi. Modellen er fænomenologisk i Husserls forstand: den suspenderer spørgsmålet om sandhedsværdi (epoché) og beskriver komparativt. Den er deskriptiv, ikke normativ — alle religioner stilles på samme akser uden at kristendom bliver normen.
3) Udfold alle syv dimensioner med konkrete eksempler fra flere religioner pr. dimension:
   - Den mytisk-fortællende: skabelsen og Jesu opstandelse (kristendom), Muhammads natterejse (islam), udgangen af Egypten (jødedom), Buddhas opvågnen (buddhisme), Dreamtime (aboriginalreligion).
   - Den doktrinære-filosofiske: treenighed, tawhid, Maimonides' 13 trosartikler, De Fire Ædle Sandheder, mana/tapu.
   - Den etisk-juridiske: de ti bud, halakha og 613 mitzvot, sharia og fiqh, panca sila, sædvaneret og forfædre-respekt.
   - Den rituelle-praktiske: dåb og nadver, de fem daglige bønner og hajj, sabbat og seder, vipassana og zazen, shamanrejser og overgangsriter.
   - Den erfaringsmæssige-emotionelle: Paulus' omvendelse, sufi-fana, chasidisk gudsglæde, satori, trance og vision. Nævn Rudolf Ottos numinøse (mysterium tremendum et fascinans).
   - Den sociale-institutionelle: pavedømme og folkekirke, ulama og ummah, rabbinat og synagoge, sangha og dalai lama, stamme og klan.
   - Den materielle: katedraler og ikoner, moskéer og kalligrafi, Tora-rulle og tallit, stupaer og mandalaer, totempæle og Uluru.
4) Den ottende dimension: den politisk-økonomiske — tilføjet i Dimensions of the Sacred (1996). Eksempler: pavestatens historie, statskirkesystemer, kristen-demokratiske partier, hindutva, zakat og islamisk bankvæsen, zionismen, ortodoks-russisk symfoni.
5) Sådan bruger man modellen i en analyse: (1) vælg fænomen, (2) gå dimension for dimension med konkrete eksempler, (3) vurder dimensionernes indbyrdes VÆGT — hvilke dominerer, hvilke er svagt udfoldede, (4) sammenlign eventuelt med en anden religion på samme akser, (5) drag konklusioner. Pinsekirkelig vækkelsesgudstjeneste vs. katolsk messe er et godt eksempel på forskellig vægtning.
6) Modellen kan anvendes på sekulære ideologier — marxisme har mytisk-fortællende (klassekampens historie), doktrinær (Das Kapital), etisk (revolutionær solidaritet), rituel (1. maj), erfaringsmæssig (klassebevidsthed), social (partiet), materiel (røde faner) dimension. Det udfordrer sekulariseringstesens skarpe skel mellem religiøst og verdsligt.
7) Styrker: komparativ uden at være reduktiv, inkluderer ikke-doktrinære religioner (naturreligioner, buddhisme), operationel i undervisning, anvendelig på sekulære fænomener, fænomenologisk neutralitet.
8) Kritik — vigtig at have med til eksamen: modellen er statisk/deskriptiv, har stadig en vestlig forudsætning, risikerer mekanisk tjekliste-analyse, dimensionerne overlapper, magtdimensionen var oprindeligt undervægtet (derfor den 8.). Talal Asad (Genealogies of Religion, 1993) kritiserer fænomenologien for at forudsætte at 'religion' er en universel, transhistorisk størrelse — selve religionsbegrebet er en moderne vestlig konstruktion.
9) Eksamenspointe: modellen er et REDSKAB, ikke en sandhed. Vurder dimensionernes vægt i stedet for blot at udfylde syv kasser. Brug den til SAMMENLIGNINGER. Inddrag eventuelt den 8. dimension og forbind til Rudolf Otto, Mircea Eliade (det hellige/profane), Émile Durkheim (kollektivforestilling) og Talal Asad.

Tone: roligt forklarende, men ambitiøs faglig dybde. Afslut med 3–4 spørgsmål eleven bør kunne svare på.`,
  },
];

export const metadata = {
  title: "Vejledning: Lav lydoversigter til religion med NotebookLM · myexams",
  description:
    "Trin-for-trin vejledning til at få NotebookLM til at lave gode podcast-lydoversigter til mundtlig eksamen i religion — med færdige prompts til kristendom, islam, jødedom, buddhisme, naturreligioner og Ninian Smarts dimensioner.",
};

export default function NotebookLmAudioGuide() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Alle fag", href: "/" },
          { label: "Vejledninger" },
          { label: "Lyd til religion med NotebookLM" },
        ]}
      />

      <header className="mb-8 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          🎧 Studieteknik · Vejledning
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Lav lydoversigter til religion med NotebookLM
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          NotebookLM kan lave podcast-lignende lydoversigter af dit
          eksamensstof. Her er en trin-for-trin-vejledning og færdige prompts
          til hver religion på myexams, så lyden afspejler præcis det stof,
          siderne dækker.
        </p>
      </header>

      <section className="grid gap-6 border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div>
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Hvad er NotebookLM Audio Overview?
          </h2>
          <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
            NotebookLM er et gratis Google-værktøj, der bygger en
            &ldquo;notebook&rdquo; ud fra de kilder, du selv uploader (PDF&apos;er,
            Google Docs, hjemmesider, YouTube, tekst). Audio Overview
            genererer en samtale på 10–15 minutter mellem to AI-værter, der
            taler dansk og kan tilpasses med dine egne instruktioner. Det er
            ideelt til at lytte til eksamensstoffet i bus, til træning eller
            ved opvasken — særligt hvis du lærer godt ved at høre tingene
            forklaret i dialog.
          </p>
        </div>
      </section>

      <section className="grid gap-6 border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div>
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Sådan kommer du i gang
          </h2>
          <ol className="ml-5 list-decimal space-y-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <li>
              Gå til{" "}
              <a
                href="https://notebooklm.google.com"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
              >
                notebooklm.google.com
              </a>{" "}
              og log ind med din Google-konto.
            </li>
            <li>
              Opret en ny notebook og giv den et navn (fx
              &ldquo;Religion — kristendom&rdquo;).
            </li>
            <li>
              Tilføj kilder: kopier hele teksten fra den relevante side på
              myexams ind som &ldquo;Pasted text&rdquo;, og suppler gerne med
              lærebogskapitler, noter fra timen og andre relevante kilder.
              NotebookLM kan håndtere flere kilder samtidigt.
            </li>
            <li>
              I højre side åbner du &ldquo;Studio&rdquo; (eller
              &ldquo;Audio Overview&rdquo;) og klikker på{" "}
              <strong>Customize</strong> / <strong>Tilpas</strong>, før du
              genererer. Det er her du indsætter din prompt.
            </li>
            <li>
              Indsæt en af prompts&apos;ene nedenfor — den er allerede skrevet
              med samme fokus som siden på myexams. Tilpas evt. længden eller
              tonen.
            </li>
            <li>
              Generér. Det tager 2–5 minutter. Når den er færdig, kan du
              afspille i browseren eller downloade som .wav til din telefon.
            </li>
          </ol>
        </div>
      </section>

      <section className="grid gap-6 border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div>
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Sådan er en god prompt bygget op
          </h2>
          <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
            En NotebookLM-prompt fungerer bedst når den er konkret om{" "}
            <strong>målgruppen</strong> (gymnasieelev, STX-religion),{" "}
            <strong>længden</strong> (12–15 min),{" "}
            <strong>formen</strong> (samtale mellem to værter på dansk),{" "}
            <strong>indholdet</strong> (en nummereret liste over de
            delemner, der SKAL behandles og i hvilken rækkefølge),{" "}
            <strong>tonen</strong> (forklarende, fagudtryk oversættes) og{" "}
            <strong>afslutningen</strong> (3–4 tjek-spørgsmål så lyden
            virker som aktiv eksamenstræning). Prompts&apos;ene nedenfor
            følger denne struktur — kopier, indsæt og generér.
          </p>
        </div>
      </section>

      <section className="grid gap-6 border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div>
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Prompts til hver religion
          </h2>
          <p className="mb-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            Hver prompt er skrevet til ÉN religion og afspejler samme fokus
            som det tilsvarende emne på myexams — nøglefakta, retninger,
            centrale begreber, geografi, religionen i Danmark, ligheder og
            forskelle, Ninian Smarts syv dimensioner og aktuelle
            problemstillinger.
          </p>
          <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
            Husk at tilføje den tilsvarende myexams-side som kilde i din
            notebook, før du bruger prompten.
          </p>
        </div>
      </section>

      {RELIGION_PROMPTS.map((rp) => (
        <section
          key={rp.slug}
          className="grid gap-4 border-t border-zinc-200 py-8 dark:border-zinc-800"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              <span aria-hidden className="mr-2">
                {rp.emoji}
              </span>
              {rp.title}
            </h3>
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              {rp.intro}
            </p>
            <Link
              href={`/religion/verdensreligioner/${rp.slug}`}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400"
            >
              → Åbn {rp.title}-siden på myexams
            </Link>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Prompt — kopier ind i NotebookLM &gt; Customize
            </p>
            <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-6 text-zinc-800 dark:text-zinc-200">
              {rp.prompt}
            </pre>
          </div>
        </section>
      ))}

      <section className="grid gap-6 border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div>
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Tips til lytteoplevelsen
          </h2>
          <ul className="ml-5 list-disc space-y-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>Lyt aktivt:</strong> sæt farten ned første gang og pause
              ved hvert nyt fagbegreb. Anden gang kan du sætte den op til
              1,25–1,5x.
            </li>
            <li>
              <strong>Tag stikord:</strong> notér 5–10 nøglebegreber pr. lyd —
              dem du ville sige højt til mundtlig eksamen.
            </li>
            <li>
              <strong>Brug Smarts dimensioner som tjekliste:</strong> spørg
              dig selv efter hver lyd, om du kunne nævne et eksempel pr.
              dimension.
            </li>
            <li>
              <strong>Lav en lyd pr. religion:</strong> sammenlign bagefter
              — fælles myter, forskelle, og hvilke dimensioner der vægter
              tungest hvor.
            </li>
            <li>
              <strong>Faktatjek altid:</strong> NotebookLM holder sig
              normalt til dine kilder, men generative modeller kan tage fejl.
              Tjek tal og årstal mod myexams-siden eller læreren.
            </li>
            <li>
              <strong>Test dig selv bagefter:</strong> tag quizzen på det
              tilsvarende emne på myexams og se, om lyden hjalp.
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Klar til at gå i gang?
        </h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
          Vælg en religion ovenfor, kopiér prompten og indsæt den i
          NotebookLM. Husk at uploade myexams-siden som kilde først.
        </p>
        <Link
          href="/religion"
          className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Til religion-emnerne
        </Link>
      </div>
    </article>
  );
}
