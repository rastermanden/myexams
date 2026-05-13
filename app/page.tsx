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
    </div>
  );
}
