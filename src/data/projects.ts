import { driveImageryForProject } from "@/data/drive-download-images";

const H = "/dallas king";
const M = "/malden charmer";
const B = "/boston colonial";

/** Dallas King — remaining unique photos, grouped as a walk through the house. */
const dallasKingSections = [
  {
    title: "Entry",
    images: [`${H}/3Z4A3788.jpg`, `${H}/3Z4A3796.jpg`],
  },
  {
    title: "Living Room",
    images: [`${H}/3Z4A3909.jpg`, `${H}/3Z4A3887.jpg`],
  },
  {
    title: "Dining",
    images: [`${H}/3Z4A3592.jpg`, `${H}/3Z4A3441.jpg`],
  },
  {
    title: "Kitchen",
    images: [
      `${H}/3Z4A3413.jpg`,
      `${H}/3Z4A3377-Edit.jpg`,
      `${H}/3Z4A3434.jpg`,
      `${H}/3Z4A3880-jpg.jpg`,
    ],
  },
  {
    title: "Study",
    images: [`${H}/3Z4A3563.jpg`, `${H}/3Z4A3577-jpg.jpg`, `${H}/3Z4A3551.jpg`],
  },
  {
    title: "Reading Nook",
    images: [`${H}/3Z4A3750.jpg`, `${H}/3Z4A3737.jpg`, `${H}/3Z4A3765.jpg`],
  },
  {
    title: "Mudroom",
    images: [`${H}/3Z4A3626-Edit.jpg`],
  },
  {
    title: "Powder Room",
    images: [`${H}/3Z4A3852.jpg`],
  },
  {
    title: "Primary Bath",
    images: [
      `${H}/3Z4A3651-Edit.jpg`,
      `${H}/3Z4A3689.jpg`,
      `${H}/3Z4A3706.jpg`,
      `${H}/3Z4A3711.jpg`,
    ],
  },
] as const;

const dallasKingGallery = dallasKingSections.flatMap((section) => [...section.images]);

/** Century Old Malden Charmer — photography from `public/malden charmer`. */
const maldenCharmerSections = [
  {
    title: "Living Room",
    images: [`${M}/JoyelleWest_260330_007.jpg`],
  },
  {
    title: "Dining",
    images: [`${M}/JoyelleWest_260330_005.jpg`],
  },
  {
    title: "Kitchen",
    images: [
      `${M}/JoyelleWest_260330_004.jpg`,
      `${M}/JoyelleWest_260330_001.jpg`,
      `${M}/JoyelleWest_260330_002.jpg`,
    ],
  },
  {
    title: "Bath",
    images: [`${M}/JoyelleWest_260330_011.jpg`, `${M}/JoyelleWest_260330_009.jpg`],
  },
] as const;

const maldenCharmerGallery = maldenCharmerSections.flatMap((section) => [...section.images]);

/** Boston Colonial — photography from `public/boston colonial` (HEIC omitted for web). */
const bostonColonialSections = [
  {
    title: "Living Room",
    images: [`${B}/F8B9CC96-8708-4378-9F1C-78E57090D2B3.jpg`],
  },
  {
    title: "Kitchen",
    images: [`${B}/IMG_2594.jpeg`, `${B}/IMG_2595.jpeg`],
  },
  {
    title: "Bath",
    images: [`${B}/IMG_0105.PNG`],
  },
] as const;

const bostonColonialGallery = bostonColonialSections.flatMap((section) => [...section.images]);

export type GallerySection = {
  title: string;
  images: string[];
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  coverImage: string;
  previewImages: string[];
  gallery: string[];
  gallerySections?: GallerySection[];
  previewDescription: string;
  fullDescription: string;
};

export const projects: Project[] = [
  {
    slug: "dallas-king-project",
    title: "Dallas King Project",
    location: "Dallas, TX",
    category: "Full Service Design",
    coverImage: `${H}/3Z4A3377-Edit.jpg`,
    previewImages: [`${H}/3Z4A3788.jpg`, `${H}/3Z4A3750.jpg`],
    gallery: dallasKingGallery,
    gallerySections: dallasKingSections.map((section) => ({
      title: section.title,
      images: [...section.images],
    })),
    previewDescription:
      "Layered textures and soft contrast define this Dallas residence, balancing polished details with spaces built for daily living.",
    fullDescription:
      "The Dallas King Project pairs tailored furnishings with natural materials to create a warm and elevated atmosphere. Each room was designed to feel curated yet lived-in, with bespoke details that bring depth and character over time.",
  },
  {
    slug: "virginia-modern-farm-house",
    ...driveImageryForProject("virginia-modern-farm-house"),
    title: "Virginia Modern Farm House",
    location: "Northern Virginia",
    category: "Renovation + Furnishing",
    previewDescription:
      "A clean-lined farmhouse story where rustic finishes meet modern silhouettes and a gentle, tonal palette.",
    fullDescription:
      "This project reimagines a classic farmhouse footprint with restrained, modern forms. We layered matte finishes, warm wood tones, and handcrafted accents to preserve charm while elevating functionality across every room.",
  },
  {
    slug: "century-old-malden-charmer",
    title: "Century Old Malden Charmer",
    location: "Malden, MA",
    category: "Historic Home Refresh",
    coverImage: `${M}/JoyelleWest_260330_001.jpg`,
    previewImages: [`${M}/JoyelleWest_260330_007.jpg`, `${M}/JoyelleWest_260330_011.jpg`],
    gallery: maldenCharmerGallery,
    gallerySections: maldenCharmerSections.map((section) => ({
      title: section.title,
      images: [...section.images],
    })),
    previewDescription:
      "A historic New England home restored with a collected perspective that honors original architecture.",
    fullDescription:
      "For this century-old property, we emphasized preservation and refinement. Rich textiles, updated lighting, and custom millwork bridge timeless details with a fresh, livable rhythm for a young family.",
  },
  {
    slug: "wellesley-contemporary-cottage",
    ...driveImageryForProject("wellesley-contemporary-cottage"),
    title: "Wellesley Contemporary Cottage",
    location: "Wellesley, MA",
    category: "New Build Interiors",
    previewDescription:
      "A contemporary cottage language with organic textures, creamy layers, and subtle sculptural moments.",
    fullDescription:
      "The Wellesley Contemporary Cottage was designed around light, proportion, and comfort. We curated furniture and finishes that support everyday function while delivering a quietly luxurious atmosphere.",
  },
  {
    slug: "boston-colonial",
    title: "Boston Colonial",
    location: "Boston, MA",
    category: "Full Home Styling",
    coverImage: `${B}/IMG_2594.jpeg`,
    previewImages: [
      `${B}/F8B9CC96-8708-4378-9F1C-78E57090D2B3.jpg`,
      `${B}/IMG_0105.PNG`,
    ],
    gallery: bostonColonialGallery,
    gallerySections: bostonColonialSections.map((section) => ({
      title: section.title,
      images: [...section.images],
    })),
    previewDescription:
      "A refreshed colonial with grounding color, refined millwork moments, and inviting family-first rooms.",
    fullDescription:
      "This Boston Colonial project focused on thoughtful updates that feel both elevated and familiar. We shaped each room with layered neutrals, heritage forms, and strategic pops of color for depth and personality.",
  },
  {
    slug: "dallas-traditional-roots",
    ...driveImageryForProject("dallas-traditional-roots"),
    title: "Dallas Traditional Roots",
    location: "Dallas, TX",
    category: "Furnishing + Styling",
    previewDescription:
      "Traditional references reimagined through tonal restraint, texture play, and a warm editorial point of view.",
    fullDescription:
      "Dallas Traditional Roots blends classic architecture with modern ease. The design language relies on timeless profiles, tactile fabrics, and careful sourcing that gives each room a sense of story and permanence.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
