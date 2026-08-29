import type { ConceptSection as ConceptSectionType, WorkedExample } from "@/lib/types";
import ImageWithCredit from "./ImageWithCredit";
import DocBlocks from "./latex/DocBlocks";

function WorkedExampleCard({ example }: { example: WorkedExample }) {
  return (
    <figure className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950/40">
      <figcaption className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
        Eksempel: {example.title}
      </figcaption>
      <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{example.task}</p>

      <ol className="mt-3 space-y-3">
        {example.steps.map((step, index) => (
          <li key={index} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-xs font-semibold text-blue-700 dark:bg-blue-400/10 dark:text-blue-300"
            >
              {index + 1}
            </span>
            <span className="min-w-0">
              <span className="block overflow-x-auto whitespace-pre-wrap font-mono text-sm text-zinc-900 dark:text-zinc-50">
                {step.expression}
              </span>
              {step.explanation && (
                <span className="mt-1 block text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                  {step.explanation}
                </span>
              )}
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-4 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
        Svar: {example.result}
      </p>
      {example.check && (
        <p className="mt-2 text-xs leading-5 text-zinc-600 dark:text-zinc-400">Tjek: {example.check}</p>
      )}
    </figure>
  );
}

export default function ConceptSection({
  section,
}: {
  section: ConceptSectionType;
}) {
  return (
    <section
      className={`grid gap-6 border-t border-zinc-200 py-8 dark:border-zinc-800 ${
        // Sidespalten reserveres kun, når afsnittet faktisk har et billede.
        section.image ? "md:grid-cols-[1fr_minmax(0,18rem)]" : ""
      }`}
    >
      <div>
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {section.heading}
        </h2>
        {section.body && (
          <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
            {section.body}
          </p>
        )}

        {section.blocks && section.blocks.length > 0 && (
          <DocBlocks blocks={section.blocks} />
        )}

        {section.examples && section.examples.length > 0 && (
          <div className="mt-5 grid gap-4">
            {section.examples.map((example, index) => (
              <WorkedExampleCard key={index} example={example} />
            ))}
          </div>
        )}
      </div>
      {section.image && (
        <div className="md:pt-2">
          <ImageWithCredit image={section.image} />
        </div>
      )}
    </section>
  );
}
