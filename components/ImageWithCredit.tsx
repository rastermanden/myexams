"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { ImageRef } from "@/lib/types";

function toSpecialFilePathUrl(fileName: string) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=800`;
}

function getFallbackUrls(image: ImageRef) {
  const urls = [image.url];

  if (!image.sourcePage) {
    return urls;
  }

  const fileMatch = image.sourcePage.match(/\/File:(.+)$/);
  if (!fileMatch) {
    return urls;
  }

  const decodedFileName = decodeURIComponent(fileMatch[1]);
  const candidates = [
    decodedFileName,
    decodedFileName.replaceAll("_", " "),
    decodedFileName.replaceAll(" ", "_"),
    decodedFileName
      .normalize("NFD")
      .replaceAll(/\p{Diacritic}/gu, "")
      .replaceAll("_", " "),
    decodedFileName
      .normalize("NFD")
      .replaceAll(/\p{Diacritic}/gu, "")
      .replaceAll(" ", "_"),
  ];

  for (const candidate of candidates) {
    const candidateUrl = toSpecialFilePathUrl(candidate);
    if (!urls.includes(candidateUrl)) {
      urls.push(candidateUrl);
    }
  }

  return urls;
}

export default function ImageWithCredit({
  image,
  priority,
}: {
  image: ImageRef;
  priority?: boolean;
}) {
  const sources = useMemo(() => getFallbackUrls(image), [image]);
  const [sourceIndex, setSourceIndex] = useState(0);

  return (
    <figure className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={sources[sourceIndex]}
          alt={image.alt}
          fill
          unoptimized
          priority={priority}
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
          onError={() => {
            setSourceIndex((currentIndex) =>
              currentIndex < sources.length - 1 ? currentIndex + 1 : currentIndex
            );
          }}
        />
      </div>
      <figcaption className="border-t border-zinc-200 px-4 py-2 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        {image.credit} · {image.license}
        {image.sourcePage && (
          <>
            {" · "}
            <a
              href={image.sourcePage}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              kilde
            </a>
          </>
        )}
      </figcaption>
    </figure>
  );
}
