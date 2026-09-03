import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <section className="relative h-[70vh] min-h-[620px] overflow-hidden border-b border-[var(--line)]">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <Container className="absolute inset-x-0 bottom-18">
          <FadeIn>
            <Link
              href="/consultation"
              className="inline-flex rounded-full border border-white/80 px-8 py-3 text-xs uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-white hover:text-[var(--ink)]"
            >
              Book Consultation
            </Link>
          </FadeIn>
        </Container>
      </section>

      <Container className="py-24">
        <FadeIn>
          <section className="space-y-8">
            <div className="grid gap-6 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group block">
                  <div className="overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      width={1000}
                      height={760}
                      className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-4">
                    <h3 className="font-serif text-3xl">{project.title}</h3>
                    <p className="mt-1 text-sm text-[var(--ink-soft)]">{project.location}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/portfolio" className="text-xs uppercase tracking-[0.15em] text-[var(--accent)]">
              View all projects
            </Link>
          </section>
        </FadeIn>
      </Container>
    </div>
  );
}
