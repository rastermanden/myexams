import Link from "next/link";
import { getAllSubjects } from "@/content";
import SubjectCard from "@/components/SubjectCard";

export default function Home() {
  const subjects = getAllSubjects();
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-10 flex flex-col gap-2">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Eksamenstræning
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Vælg et fag og dyk ned i et emne. Hver emne forklarer kernebegreberne og
          afsluttes med en quiz, så du kan teste, om du har forstået stoffet.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <SubjectCard key={subject.slug} subject={subject} />
        ))}
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Studieteknik
        </h2>
        <Link
          href="/vejledning/notebooklm-audio"
          className="group flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
        >
          <span className="text-4xl" aria-hidden>
            🎧
          </span>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Lav lydoversigter til religion med NotebookLM
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Trin-for-trin-vejledning med færdige prompts til hver religion —
            kristendom, islam, jødedom, buddhisme, naturreligioner og Ninian
            Smarts dimensioner.
          </p>
          <span className="mt-auto text-xs font-medium text-zinc-500 dark:text-zinc-500">
            Vejledning · 6 prompts
          </span>
        </Link>
      </section>
    </div>
  );
}
