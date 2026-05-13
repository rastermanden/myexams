// Renders the source SVGs in public/icons/ into the PNG sizes required by the
// PWA web app manifest and the iOS apple-touch-icon. Run with `node scripts/generate-pwa-icons.mjs`.
import { readFile, mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, "..");
const iconsDir = join(repo, "public", "icons");

const sourceIcon = await readFile(join(iconsDir, "icon.svg"));
const sourceMaskable = await readFile(join(iconsDir, "icon-maskable.svg"));

const targets = [
  { source: sourceIcon, out: join(iconsDir, "icon-192.png"), size: 192 },
  { source: sourceIcon, out: join(iconsDir, "icon-512.png"), size: 512 },
  { source: sourceMaskable, out: join(iconsDir, "icon-maskable-512.png"), size: 512 },
  { source: sourceIcon, out: join(iconsDir, "apple-touch-icon.png"), size: 180 },
];

await mkdir(iconsDir, { recursive: true });

for (const { source, out, size } of targets) {
  await sharp(source, { density: 384 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`wrote ${out} (${size}x${size})`);
}
