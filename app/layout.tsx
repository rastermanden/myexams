import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import PwaInit from "@/components/PwaInit";
import { withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "myexams · Eksamenstræning",
  description:
    "Eksamenstræning til gymnasieelever — geografi, dansk litteratur og matematik med begrebsforklaringer og quizzer.",
  applicationName: "myexams",
  manifest: withBasePath("/manifest.webmanifest"),
  icons: {
    icon: [
      { url: withBasePath("/icons/icon.svg"), type: "image/svg+xml" },
      {
        url: withBasePath("/icons/icon-192.png"),
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: withBasePath("/icons/icon-512.png"),
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: withBasePath("/icons/apple-touch-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "myexams",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <PwaInit />
        <NavBar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 bg-white px-4 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950">
          Billeder via Wikimedia Commons · Indhold til eksamenstræning på gymnasieniveau
        </footer>
      </body>
    </html>
  );
}
