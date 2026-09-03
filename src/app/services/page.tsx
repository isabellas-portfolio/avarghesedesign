import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServicesAccordion } from "@/components/services/ServicesAccordion";

export default function ServicesPage() {
  return (
    <Container className="py-20">
      <FadeIn>
        <h1 className="font-serif text-4xl text-[var(--accent)] sm:text-5xl">Services</h1>
      </FadeIn>

      <FadeIn>
        <ServicesAccordion />
      </FadeIn>

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
