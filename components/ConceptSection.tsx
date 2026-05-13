import type { ConceptSection as ConceptSectionType } from "@/lib/types";
import ImageWithCredit from "./ImageWithCredit";

export default function ConceptSection({
  section,
}: {
  section: ConceptSectionType;
}) {
  return (
    <section className="grid gap-6 border-t border-zinc-200 py-8 dark:border-zinc-800 md:grid-cols-[1fr_minmax(0,18rem)]">
      <div>
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {section.heading}
        </h2>
        <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
          {section.body}
        </p>
      </div>
      {section.image && (
        <div className="md:pt-2">
          <ImageWithCredit image={section.image} />
        </div>
      )}
    </section>
  );
}
