import type { MetadataRoute } from "next";
import { withBasePath } from "@/lib/basePath";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "myexams · Eksamenstræning",
    short_name: "myexams",
    description:
      "Eksamenstræning til gymnasieelever — geografi, dansk litteratur og matematik med begrebsforklaringer og quizzer.",
    start_url: withBasePath("/"),
    scope: withBasePath("/"),
    id: withBasePath("/"),
    display: "standalone",
    display_override: ["standalone", "minimal-ui"],
    orientation: "portrait",
    background_color: "#fafafa",
    theme_color: "#4f46e5",
    lang: "da",
    dir: "ltr",
    categories: ["education", "books"],
    icons: [
      {
        src: withBasePath("/icons/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: withBasePath("/icons/icon-192.png"),
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: withBasePath("/icons/icon-512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: withBasePath("/icons/icon-maskable-512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
