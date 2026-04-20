import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <Container className="py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Portfolio"
          title="Gallery-First View Of Collected Residential Projects"
          description="Browse featured interiors at a glance, expand each preview for additional imagery and details, then dive into the full project story."
        />
      </FadeIn>

      <div className="mt-12 grid gap-8">
        {projects.map((project) => (
          <FadeIn key={project.slug}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
