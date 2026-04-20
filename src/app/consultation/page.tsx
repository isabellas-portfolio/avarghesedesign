import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ConsultationForm } from "./ConsultationForm";

export default function ConsultationPage() {
  return (
    <Container className="py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Complimentary Consultation"
          title="Let&apos;s Design Your Dream Space"
          description="We love the gift of home and truly believe you can obtain your dream space in any stage of life. Email us now to book a FREE 30 minute consultation."
        />
      </FadeIn>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.95fr]">
        <FadeIn>
          <div className="space-y-9 rounded-3xl border border-[var(--line)] bg-white/70 p-9">
            <section>
              <h3 className="font-serif text-3xl">Full Service Design</h3>
              <p className="mt-4 leading-8 text-[var(--ink-soft)]">
                AVD ensures an intimate and thoughtful experience every step of the way with her custom full-service
                design process —From the first paint swatch to the final selection of drapes, it&apos;s all in the
                details for us.
              </p>
              <p className="mt-4 leading-8 text-[var(--ink-soft)]">
                Full-service design is a great fit for those seeking a hands-on approach to their project regardless
                of the scale. Through this service, we offer design concepts, project management, trade communication,
                procurement, ordering, furniture design, and styling to ensure you enjoy the process of making your
                space beautiful and uniquely you.
              </p>
            </section>
            <section>
              <h3 className="font-serif text-3xl">Design Consultation</h3>
              <p className="mt-4 leading-8 text-[var(--ink-soft)]">
                For those designing their own homes or seeking professional guidance, a consultation service is
                available. We begin with a 30 minute consultation and then we will provide 3 design concepts for each
                defined room, offering ideas for furnishings, room layout, materials, and final touches.
              </p>
            </section>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <ConsultationForm />
        </FadeIn>
      </div>
    </Container>
  );
}
