import { driveImageryForProject } from "@/data/drive-download-images";

const H = "/dallas king";
const M = "/malden charmer";
const B = "/boston colonial";
const T = "/Tennessee Historic Charmer";

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

/** Massachusetts Contemporary Cottage — photography from `public/boston colonial` (HEIC omitted). */
const bostonColonialSections = [
  {
    title: "Primary Bedroom",
    images: [`${B}/IMG_5966.jpeg`, `${B}/IMG_5969.jpg`],
  },
  {
    title: "Details",
    images: [
      `${B}/7D946835-AE55-4023-9FB5-31785470DDAF.JPG`,
      `${B}/IMG_6255.jpg`,
    ],
  },
  {
    title: "Nursery",
    images: [`${B}/IMG_3869.jpg`],
  },
] as const;

const bostonColonialGallery = bostonColonialSections.flatMap((section) => [...section.images]);

/** Tennessee Historic Row — photography from `public/Tennessee Historic Charmer` (HEIC omitted). */
const tennesseeHistoricSections = [
  {
    title: "Living Room",
    images: [`${T}/IMG_8230.jpg`, `${T}/IMG_5629.jpeg`],
  },
  {
    title: "Reading Nook",
    images: [`${T}/IMG_8375.jpg`, `${T}/IMG_8249.jpg`],
  },
  {
    title: "Study",
    images: [`${T}/IMG_8214.jpg`, `${T}/IMG_8195.jpg`],
  },
  {
    title: "Kitchen",
    images: [
      `${T}/IMG_8270.jpg`,
      `${T}/IMG_8323.jpg`,
      `${T}/IMG_8308.jpg`,
      `${T}/IMG_8300.jpg`,
    ],
  },
] as const;

const tennesseeHistoricGallery = tennesseeHistoricSections.flatMap((section) => [...section.images]);

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
  hidden?: boolean;
};

export const projects: Project[] = [
  {
    slug: "dallas-king-project",
    title: "Traditional Bones Meets Modern Charm",
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
      "Traditional Bones Meets Modern Charm pairs tailored furnishings with natural materials to create a warm and elevated atmosphere. Each room was designed to feel curated yet lived-in, with bespoke details that bring depth and character over time.",
  },
  {
    slug: "boston-colonial",
    title: "Massachusetts Contemporary Cottage",
    location: "Southborough, MA",
    category: "Full Home Styling",
    coverImage: `${B}/7D946835-AE55-4023-9FB5-31785470DDAF.JPG`,
    previewImages: [`${B}/IMG_5969.jpg`, `${B}/IMG_6255.jpg`],
    gallery: bostonColonialGallery,
    gallerySections: bostonColonialSections.map((section) => ({
      title: section.title,
      images: [...section.images],
    })),
    previewDescription:
      "A refreshed contemporary cottage with grounding color, refined millwork moments, and inviting family-first rooms.",
    fullDescription:
      "This Massachusetts Contemporary Cottage focused on thoughtful updates that feel both elevated and familiar. We shaped each room with layered neutrals, heritage forms, and strategic pops of color for depth and personality.",
  },
  {
    slug: "wellesley-contemporary-cottage",
    hidden: true,
    ...driveImageryForProject("wellesley-contemporary-cottage"),
    title: "Garden Escape",
    location: "Wellesley, MA",
    category: "New Build Interiors",
    previewDescription:
      "A contemporary cottage language with organic textures, creamy layers, and subtle sculptural moments.",
    fullDescription:
      "Garden Escape was designed around light, proportion, and comfort. We curated furniture and finishes that support everyday function while delivering a quietly luxurious atmosphere.",
  },
  {
    slug: "century-old-malden-charmer",
    title: "Century Old Roots",
    location: "Boston, MA",
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
    slug: "virginia-modern-farm-house",
    hidden: true,
    ...driveImageryForProject("virginia-modern-farm-house"),
    title: "DC Relaxed Living",
    location: "Chantilly, VA",
    category: "Renovation + Furnishing",
    previewDescription:
      "A clean-lined living story where rustic finishes meet modern silhouettes and a gentle, tonal palette.",
    fullDescription:
      "DC Relaxed Living reimagines a classic farmhouse footprint with restrained, modern forms. We layered matte finishes, warm wood tones, and handcrafted accents to preserve charm while elevating functionality across every room.",
  },
  {
    slug: "dallas-traditional-roots",
    title: "Tennessee Historic Row",
    location: "Chattanooga, TN",
    category: "Furnishing + Styling",
    coverImage: `${T}/IMG_8230.jpg`,
    previewImages: [`${T}/IMG_8270.jpg`, `${T}/IMG_8214.jpg`],
    gallery: tennesseeHistoricGallery,
    gallerySections: tennesseeHistoricSections.map((section) => ({
      title: section.title,
      images: [...section.images],
    })),
    previewDescription:
      "Historic references reimagined through tonal restraint, texture play, and a warm editorial point of view.",
    fullDescription:
      "Tennessee Historic Row blends classic architecture with modern ease. The design language relies on timeless profiles, tactile fabrics, and careful sourcing that gives each room a sense of story and permanence.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
