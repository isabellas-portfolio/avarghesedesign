import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((p) => !p.hidden).slice(0, 3);

  return (
    <div>
      <section className="relative h-[70vh] min-h-[620px] overflow-hidden">
        <HeroSlideshow />
      </section>

      <div className="border-b border-[var(--line)] py-5 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <Link
            href="https://www.instagram.com/avarghesedesign"
            target="_blank"
            rel="noreferrer"
            className="text-xs uppercase tracking-[0.18em] font-medium text-[var(--accent)] underline underline-offset-4 decoration-[var(--accent)]/50 transition-opacity duration-300 hover:opacity-70"
          >
            Instagram
          </Link>
          <Link
            href="/consultation"
            className="text-xs uppercase tracking-[0.18em] font-medium text-[var(--accent)] underline underline-offset-4 decoration-[var(--accent)]/50 transition-opacity duration-300 hover:opacity-70"
          >
            Free Consultation
          </Link>
        </div>
      </div>

      <Container className="py-24">
        <FadeIn>
          <section className="space-y-8">
            <div className="grid gap-6 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      width={1000}
                      height={760}
                      className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <p className="text-xs uppercase tracking-[0.16em] text-neutral-200">{project.location}</p>
                      <h3 className="mt-2 font-serif text-2xl !text-white sm:text-3xl">{project.title}</h3>
                    </div>
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
