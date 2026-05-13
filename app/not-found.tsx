import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-24 text-center">
      <p className="text-6xl">🧭</p>
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Siden findes ikke
      </h1>
      <p className="text-zinc-600 dark:text-zinc-300">
        Det emne, du leder efter, er ikke tilgængeligt endnu.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Tilbage til forsiden
      </Link>
    </div>
  );
}
