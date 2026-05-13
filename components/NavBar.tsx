import Link from "next/link";

export default function NavBar() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          📖 myexams
        </Link>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          Eksamenstræning · gymnasium
        </span>
      </nav>
    </header>
  );
}
