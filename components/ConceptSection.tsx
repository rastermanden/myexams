import type { ConceptSection as ConceptSectionType, WorkedExample } from "@/lib/types";
import ImageWithCredit from "./ImageWithCredit";
import DocBlocks, { Figure } from "./latex/DocBlocks";
import { Tex } from "./latex/Tex";
import { toTex } from "@/lib/mathText";

/**
 * Et regneudtryk fra et eksempel. Er hele strengen et regnestykke,
 * sættes den med KaTeX; ellers står forfatterens tekst, som den er.
 */
function Expression({ text }: { text: string }) {
  if (text.includes("\n")) {
    // Opstillinger, hvor cifrene skal stå under hinanden.
    return (
      <span className="latex-scroll block whitespace-pre font-mono text-sm tabular-nums">
        {text}
      </span>
    );
  }

  const tex = toTex(text);
  // En formel har ingen orddelinger at brække ved, så på en smal skærm
  // scroller den vandret i stedet for at skubbe siden ud.
  if (tex)
    return (
      <span className="latex-scroll block">
        <Tex tex={tex} />
      </span>
    );
  return <>{text}</>;
}

function WorkedExampleCard({ example }: { example: WorkedExample }) {
  return (
    <figure className="m-0 rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-950/40 sm:p-4">
      <figcaption className="font-semibold text-zinc-900 dark:text-zinc-50">
        Eksempel: {example.title}
      </figcaption>
      <p className="mt-1 text-zinc-700 dark:text-zinc-300">{example.task}</p>

      <ol className="mt-3 list-decimal space-y-2 pl-5 sm:pl-6">
        {example.steps.map((step, index) => (
          <li key={index} className="text-zinc-900 dark:text-zinc-50">
            <Expression text={step.expression} />
            {step.explanation && (
              <span className="mt-1 block text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {step.explanation}
              </span>
            )}
          </li>
        ))}
      </ol>

      <p className="mt-4 font-semibold text-zinc-900 dark:text-zinc-50">
        Svar: <Expression text={example.result} />
      </p>
      {example.check && (
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Tjek: {example.check}
        </p>
      )}
    </figure>
  );
}

export default function ConceptSection({
  section,
  latex,
}: {
  section: ConceptSectionType;
  /** Sæt afsnittet med matematikfagets serif-typografi. */
  latex?: boolean;
}) {
  return (
    <section
      className={`grid gap-6 border-t border-zinc-200 py-6 dark:border-zinc-800 sm:py-8 ${
        // Sidespalten reserveres kun, når afsnittet faktisk har et billede.
        section.image ? "md:grid-cols-[1fr_minmax(0,18rem)]" : ""
      }`}
    >
      {/* Et grid-felt er som udgangspunkt mindst så bredt som sit bredeste
          barn. Uden `min-w-0` ville en lang formel eller en bred opstilling
          strække hele siden i stedet for at scrolle i sin egen ramme. */}
      <div className="min-w-0">
        <h2 className="mb-3 text-xl font-semibold tracking-tight text-balance text-zinc-900 dark:text-zinc-50 sm:text-2xl">
          {section.heading}
        </h2>

        <div className={latex ? "latex-doc" : undefined}>
          {section.body && (
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              {section.body}
            </p>
          )}

          {section.blocks && section.blocks.length > 0 && (
            <DocBlocks blocks={section.blocks} />
          )}

          {/* Figurerne skalerer eller scroller selv; en scroll-container
              med `justify-center` her ville lægge venstre kant uden for
              rækkevidde på en smal skærm. */}
          {section.figure && (
            <div className="my-5 flex justify-center">
              <Figure figure={section.figure} />
            </div>
          )}

          {section.examples && section.examples.length > 0 && (
            <div className="mt-5 grid gap-4">
              {section.examples.map((example, index) => (
                <WorkedExampleCard key={index} example={example} />
              ))}
            </div>
          )}
        </div>
      </div>
      {section.image && (
        <div className="md:pt-2">
          <ImageWithCredit image={section.image} />
        </div>
      )}
    </section>
  );
}
