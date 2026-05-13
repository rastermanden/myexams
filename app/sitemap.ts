import type { MetadataRoute } from "next";
import { getAllSubjects } from "@/content";

const SITE_URL = "https://rastermanden.github.io/myexams";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/vejledning/notebooklm-audio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  for (const subject of getAllSubjects()) {
    urls.push({
      url: `${SITE_URL}/${subject.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const category of subject.categories) {
      urls.push({
        url: `${SITE_URL}/${subject.slug}/${category.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });

      for (const topic of category.topics) {
        urls.push({
          url: `${SITE_URL}/${subject.slug}/${category.slug}/${topic.slug}`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.7,
        });
        urls.push({
          url: `${SITE_URL}/${subject.slug}/${category.slug}/${topic.slug}/quiz`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.5,
        });
      }
    }
  }

  return urls;
}
