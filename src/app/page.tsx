import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteDriveImageryDeck } from "@/data/drive-download-images";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const [heroImage, aboutPreviewImage] = siteDriveImageryDeck;

  return (
    <div>
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <Image
          src={heroImage}
          alt="Elegant interior hero"
          width={1900}
          height={1100}
          className="h-[70vh] min-h-[620px] w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <Container className="absolute inset-x-0 bottom-18">
          <FadeIn>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--sand)]">
              Interior Design Studio
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Thoughtfully Collected Interiors That Feel Luxurious And Lived In
            </h1>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="rounded-full bg-[var(--accent)] px-8 py-3 text-xs uppercase tracking-[0.15em] text-[var(--bg)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b1a18]"
              >
                Explore Portfolio
              </Link>
              <Link
                href="/consultation"
                className="rounded-full border border-white/80 px-8 py-3 text-xs uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-white hover:text-[var(--ink)]"
              >
                Book Consultation
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Container className="space-y-28 py-24">
        <FadeIn>
          <SectionHeading
            eyebrow="A Varghese Design"
            title="Editorial Interiors Crafted For How You Live"
            description="A Varghese Design is a full-service interior design studio. From large-scale renovations, to a simple refresh and e-design, we will work with you to create a space you love with a unique AVD interpretation!"
          />
        </FadeIn>

        <FadeIn>
          <section className="space-y-8">
            <SectionHeading eyebrow="Featured Portfolio" title="Selected Homes" />
            <div className="grid gap-6 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl">
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

        <FadeIn>
          <section className="grid gap-10 rounded-3xl border border-[var(--line)] bg-white/60 p-10 md:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Services"
                title="A Full Journey From Concept To Installation"
                description="From design concepts and custom sourcing to project management and styling, our studio supports every detail with a hands-on approach."
              />
            </div>
            <div className="space-y-6 text-[var(--ink-soft)]">
              <p className="leading-8">
                We collaborate closely with each client to create a process that is intentional, efficient, and deeply personalized.
              </p>
              <Link href="/services" className="text-xs uppercase tracking-[0.15em] text-[var(--accent)]">
                Discover services
              </Link>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="grid gap-10 md:grid-cols-2">
            <Image
              src={aboutPreviewImage}
              alt="About A Varghese Design"
              width={1200}
              height={900}
              className="h-full min-h-[380px] w-full rounded-3xl object-cover"
            />
            <div className="self-center">
              <SectionHeading
                eyebrow="About"
                title="Design Rooted In Story, Function, And Craft"
                description="Our work balances luxurious restraint with livability, creating homes that feel beautifully collected over time."
              />
              <Link href="/about" className="mt-8 inline-block text-xs uppercase tracking-[0.15em] text-[var(--accent)]">
                Learn about our studio
              </Link>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="w-fit max-w-full rounded-3xl bg-[var(--accent)] px-8 py-10 text-[var(--bg)] md:px-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--sand)]">Complimentary Consultation</p>
            <h2 className="mt-3 max-w-md font-serif text-2xl leading-tight sm:text-3xl">
              Begin With A Free 30 Minute Consultation To Discuss Your Dream Home
            </h2>
            <Link
              href="/consultation"
              className="mt-6 inline-flex rounded-full bg-[var(--bg)] px-8 py-3 text-xs uppercase tracking-[0.15em] text-[var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Book now
            </Link>
          </section>
        </FadeIn>
      </Container>
    </div>
  );
}
