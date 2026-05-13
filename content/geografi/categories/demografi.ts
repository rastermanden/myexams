import type { Category } from "@/lib/types";
import { demografi as demografiTopic } from "../demografi";

export const demografi: Category = {
  slug: "demografi",
  title: "Demografi",
  summary: "Befolkningsudvikling, migration og urbanisering med data og sammenligninger.",
  emoji: "👥",
  topics: [demografiTopic],
};
