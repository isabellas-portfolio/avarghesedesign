"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HERO_SLIDES = [
  {
    src: "/malden charmer/JoyelleWest_260330_009.jpg",
    alt: "Botanical powder room vanity with a vessel sink",
    position: "center 78%",
  },
  {
    src: "/dallas king/3Z4A3413.jpg",
    alt: "Kitchen with marble island and range",
    position: "center center",
  },
  {
    src: "/malden charmer/JoyelleWest_260330_007.jpg",
    alt: "Living room with fireplace and seating",
    position: "center center",
  },
  {
    src: "/dallas king/3Z4A3788.jpg",
    alt: "Curved staircase and entry foyer",
    position: "center 40%",
  },
  {
    src: "/dallas king/3Z4A3592.jpg",
    alt: "Round dining table with chandelier",
    position: "center center",
  },
  {
    src: "/dallas king/3Z4A3750.jpg",
    alt: "Sage green reading nook and window seat",
    position: "center 60%",
  },
  {
    src: "/dallas king/3Z4A3563.jpg",
    alt: "Moody study with desk and fireplace",
    position: "center 60%",
  },
] as const;

const INTERVAL_MS = 5600;
const FADE_SECONDS = 1.6;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {HERO_SLIDES.map((slide, i) => (
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: FADE_SECONDS, ease: "easeInOut" }}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-cover"
            style={{ objectPosition: slide.position }}
          />
        </motion.div>
      ))}
    </div>
  );
}
