import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Brødkrumme" className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="inline-flex items-center gap-1">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-zinc-900 dark:hover:text-zinc-100">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "font-medium text-zinc-900 dark:text-zinc-100" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast && <span aria-hidden>›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
