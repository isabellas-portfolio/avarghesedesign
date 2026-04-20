/**
 * Imagery from `public/drive-download-20260420T223656Z-3-001/`.
 * HEIC files are omitted so they work reliably with `next/image` in browsers.
 */
const DRIVE_FOLDER = "/drive-download-20260420T223656Z-3-001";

const DRIVE_DOWNLOAD_FILES = [
  "F8B9CC96-8708-4378-9F1C-78E57090D2B3.jpg",
  "IMG_0105.PNG",
  "IMG_2594.jpeg",
  "IMG_2595.jpeg",
] as const;

export const driveDownloadPaths = DRIVE_DOWNLOAD_FILES.map((name) => `${DRIVE_FOLDER}/${name}`);

function seedFromSlug(slug: string) {
  return slug.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
}

function shuffle<T>(items: readonly T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = arr[i]!;
    arr[i] = arr[j]!;
    arr[j] = t;
  }
  return arr;
}

/** Hero / editorial slots — order changes on each dev server start or production build. */
export const siteDriveImageryDeck = shuffle(driveDownloadPaths);

export function driveImageryForProject(slug: string) {
  const seed = seedFromSlug(slug);
  const pool = driveDownloadPaths;
  const n = pool.length;
  return {
    coverImage: pool[seed % n]!,
    previewImages: [pool[(seed + 1) % n]!, pool[(seed + 2) % n]!],
    gallery: [0, 1, 2, 3, 4].map((k) => pool[(seed + k) % n]!),
  };
}
