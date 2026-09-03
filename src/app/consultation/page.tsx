import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ConsultationForm } from "./ConsultationForm";

export default function ConsultationPage() {
  return (
    <Container className="py-20">
      <FadeIn>
        <h1 className="font-serif text-4xl text-[var(--ink)] sm:text-5xl">Complimentary Consultation</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--ink-soft)] sm:text-lg">
          We love the gift of home and truly believe you can obtain your dream space in any stage of life. Email us
          now to book a FREE 30 minute consultation.
        </p>
      </FadeIn>

      <div className="mt-12 max-w-2xl">
        <FadeIn delay={0.06}>
          <ConsultationForm />
        </FadeIn>
      </div>
    </Container>
  );
}
