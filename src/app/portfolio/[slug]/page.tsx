import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getProjectBySlug, projects } from "@/data/projects";
import { FadeIn } from "@/components/ui/FadeIn";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found | A Varghese Design" };
  }

  return {
    title: `${project.title} | A Varghese Design`,
    description: project.previewDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="py-16">
      <FadeIn>
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Project Portfolio</p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight sm:text-6xl">{project.title}</h1>
        <p className="mt-4 text-sm uppercase tracking-[0.14em] text-[var(--ink-soft)]">
          {project.location} · {project.category}
        </p>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--ink-soft)]">{project.fullDescription}</p>
      </FadeIn>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {project.gallery.map((image, index) => (
          <FadeIn key={image} delay={index * 0.03}>
            <Image
              src={image}
              alt={`${project.title} gallery image ${index + 1}`}
              width={1400}
              height={1000}
              className={`w-full rounded-2xl object-cover ${index % 3 === 0 ? "h-[460px]" : "h-[360px]"}`}
            />
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
