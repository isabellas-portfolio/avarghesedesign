import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const serviceItems = [
  {
    title: "Full Service Design",
    description:
      "AVD ensures an intimate and thoughtful experience every step of the way with her custom full-service design process. From the first paint swatch to the final selection of drapes, it is all in the details — including design concepts, project management, trade communication, procurement, furniture design, and styling.",
  },
  {
    title: "Design Consultation",
    description:
      "For those designing their own homes or seeking professional guidance, consultations begin with a 30 minute call followed by three design concepts for each defined room.",
  },
];

export default function ServicesPage() {
  return (
    <Container className="py-20">
      <FadeIn>
        <h1 className="font-serif text-4xl text-[var(--ink)] sm:text-5xl">Services</h1>
      </FadeIn>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        {serviceItems.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.07}>
            <article>
              <h2 className="font-serif text-3xl text-[var(--ink)]">{service.title}</h2>
              <p className="mt-5 text-base leading-8 text-[var(--ink-soft)]">{service.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <Link
          href="/consultation"
          className="mt-14 inline-block text-xs uppercase tracking-[0.15em] text-[var(--accent)]"
        >
          Inquire
        </Link>
      </FadeIn>
    </Container>
  );
}
