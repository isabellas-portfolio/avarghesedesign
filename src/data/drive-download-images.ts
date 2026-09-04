/**
 * Shared editorial imagery from `public/boston colonial`.
 * HEIC files are omitted so they work reliably with `next/image` in browsers.
 */
const DRIVE_FOLDER = "/boston colonial";

const DRIVE_DOWNLOAD_FILES = [
  "IMG_5966.jpeg",
  "IMG_5969.jpg",
  "IMG_6255.jpg",
  "IMG_3869.jpg",
  "7D946835-AE55-4023-9FB5-31785470DDAF.JPG",
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
