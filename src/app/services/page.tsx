import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const serviceItems = [
  {
    title: "Full Service Design",
    description:
      "AVD ensures an intimate and thoughtful experience every step of the way with her custom full-service design process. From the first paint swatch to the final selection of drapes, it is all in the details.",
  },
  {
    title: "Design Consultation",
    description:
      "For those designing their own homes or seeking professional guidance, consultations begin with a 30 minute call followed by three design concepts for each defined room.",
  },
  {
    title: "Procurement + Styling",
    description:
      "Through material sourcing, ordering, furniture design, trade communication, and finishing layers, each room is polished to feel elevated and uniquely personal.",
  },
];

export default function ServicesPage() {
  return (
    <Container className="py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Services"
          title="Refined Interior Design Services Built Around Your Home"
          description="Full-service design is ideal for clients seeking a hands-on process regardless of scale, with support from concept through final styling."
        />
      </FadeIn>

      <div className="mt-12 grid gap-7 md:grid-cols-3">
        {serviceItems.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.07}>
            <article className="h-full rounded-2xl border border-[var(--line)] bg-white/70 p-8">
              <h3 className="font-serif text-3xl text-[var(--ink)]">{service.title}</h3>
              <p className="mt-5 text-base leading-8 text-[var(--ink-soft)]">{service.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
