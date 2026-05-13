import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "myexams · Eksamenstræning",
  description:
    "Eksamenstræning til gymnasieelever — geografi, dansk litteratur og matematik med begrebsforklaringer og quizzer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 bg-white px-4 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950">
          Billeder via Wikimedia Commons · Indhold til eksamenstræning på gymnasieniveau
        </footer>
      </body>
    </html>
  );
}
