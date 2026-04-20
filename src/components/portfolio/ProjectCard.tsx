"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white/80 shadow-[0_10px_40px_rgba(45,35,28,0.08)]">
      <div className="group relative">
        <Image
          src={project.coverImage}
          alt={project.title}
          width={1200}
          height={850}
          className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <p className="text-xs uppercase tracking-[0.16em] text-neutral-200">{project.location}</p>
          <h3 className="mt-2 font-serif text-3xl">
            <Link
              href={`/portfolio/${project.slug}`}
              className="inline-block rounded-sm outline-offset-4 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80"
            >
              {project.title}
            </Link>
          </h3>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <p className="text-sm uppercase tracking-[0.14em] text-[var(--accent)]">{project.category}</p>
        <p className="text-base leading-7 text-[var(--ink-soft)]">{project.previewDescription}</p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="rounded-full border border-[var(--line-strong)] px-5 py-2.5 text-xs uppercase tracking-[0.16em] text-[var(--ink)] transition-colors duration-300 hover:bg-[var(--evergreen)] hover:text-[var(--bg)]"
          >
            {expanded ? "See less" : "See more"}
          </button>
          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-2.5 text-xs uppercase tracking-[0.16em] text-[var(--bg)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b1a18]"
          >
            View full project
          </Link>
        </div>

        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                {project.previewImages.map((image) => (
                  <Image
                    key={image}
                    src={image}
                    alt={`${project.title} preview`}
                    width={700}
                    height={500}
                    className="h-52 w-full rounded-xl object-cover"
                  />
                ))}
              </div>
              <p className="pt-4 text-sm leading-7 text-[var(--ink-soft)]">{project.previewDescription}</p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </article>
  );
}
