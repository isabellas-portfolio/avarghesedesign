"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <Link href={`/portfolio/${project.slug}`} className="group block">
        <div className="relative overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            width={1200}
            height={850}
            className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-200">{project.location}</p>
            <h3 className="mt-2 font-serif text-3xl">{project.title}</h3>
          </div>
        </div>
      </Link>
    </article>
  );
}
