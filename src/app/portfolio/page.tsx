import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <Container className="py-20">
      <FadeIn>
        <h1 className="font-serif text-4xl text-[var(--accent)] sm:text-5xl">Selected Projects</h1>
      </FadeIn>

      <div className="mt-12 grid gap-8">
        {projects.filter((p) => !p.hidden).map((project) => (
          <FadeIn key={project.slug}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
