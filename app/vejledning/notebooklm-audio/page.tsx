import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { religion } from "@/content/religion";

export const metadata = {
  title: "Vejledning: Lav lydoversigter til religion med NotebookLM · myexams",
  description:
    "Trin-for-trin vejledning til at få NotebookLM til at lave gode podcast-lydoversigter til mundtlig eksamen i religion. Hver religion på myexams har sin egen tilpassede prompt direkte på emnesiden.",
};

const TOPICS_WITH_PROMPTS = religion.categories
  .flatMap((c) => c.topics.map((t) => ({ category: c, topic: t })))
  .filter(({ topic }) => topic.audioPrompt);

const EMOJI_BY_SLUG: Record<string, string> = {
  kristendom: "✝️",
  islam: "☪️",
  joededom: "✡️",
  buddhisme: "☸️",
  naturreligioner: "🌿",
  "ninian-smart": "🧭",
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
          eksamensstof. Hver religion på myexams har sin egen tilpassede
          prompt direkte nederst på emnesiden — denne side forklarer
          hvordan du bruger dem.
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
              Find prompten på den emneside, du vil have en lyd til (se
              listen nedenfor). Kopier den, indsæt i Customize, og generér.
              Det tager 2–5 minutter.
            </li>
            <li>
              Når den er færdig, kan du afspille i browseren eller
              downloade som .wav til din telefon.
            </li>
          </ol>
        </div>
      </section>

      <section className="grid gap-6 border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div>
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Sådan er prompts&apos;ene bygget op
          </h2>
          <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
            Hver prompt er skrevet til ÉN religion og afspejler samme fokus
            som emnesiden — nøglefakta, retninger, centrale begreber,
            geografi, religionen i Danmark, ligheder og forskelle, Ninian
            Smarts syv dimensioner og aktuelle problemstillinger. Den
            specificerer målgruppe (gymnasieelev, STX-religion), længde
            (12–15 min), form (samtale mellem to værter på dansk), tone og
            beder til sidst om 3–4 tjek-spørgsmål, så lyden virker som
            aktiv eksamenstræning.
          </p>
        </div>
      </section>

      <section className="grid gap-4 border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div>
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Find prompten på emnesiden
          </h2>
          <p className="mb-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            Hver religion har sin egen prompt nederst på sin emneside,
            klar til at blive kopieret ind i NotebookLM.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {TOPICS_WITH_PROMPTS.map(({ category, topic }) => (
            <li key={topic.slug}>
              <Link
                href={`/religion/${category.slug}/${topic.slug}`}
                className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
              >
                <span className="text-2xl" aria-hidden>
                  {EMOJI_BY_SLUG[topic.slug] ?? "🎧"}
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {topic.title}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    Prompt nederst på emnesiden
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

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
          Vælg en religion og find prompten nederst på emnesiden.
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
