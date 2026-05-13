import Image from "next/image";
import type { ImageRef } from "@/lib/types";

export default function ImageWithCredit({
  image,
  priority,
}: {
  image: ImageRef;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          unoptimized
          priority={priority}
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
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
