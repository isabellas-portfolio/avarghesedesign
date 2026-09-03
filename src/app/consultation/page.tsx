import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfT1fC5niGVu32wpFbMnU_UhH-NasU0DZHKdBVHx8TbP-zTMQ/viewform";

export default function ConsultationPage() {
  return (
    <Container className="py-20">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-4xl text-[var(--accent)] sm:text-5xl">Complimentary Consultation</h1>
          <p className="mt-8 text-base leading-8 text-[var(--ink-soft)] sm:text-lg">
            We love the gift of home and truly believe you can obtain your dream space in any stage of life.
          </p>
          <p className="mt-4 text-base leading-8 text-[var(--ink-soft)] sm:text-lg">
            If you&apos;re interested in working together, please fill out the questionnaire! We will reach out for a 30 minute free consultation to discuss your project.
          </p>
          <p className="mt-4 text-base leading-8 text-[var(--ink-soft)] sm:text-lg">
            Check us out on{" "}
            <a
              href="https://www.instagram.com/avarghesedesign"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[var(--accent)] underline underline-offset-4 decoration-[var(--accent)]/50 transition-colors duration-300 hover:text-[var(--accent-dark)]"
            >
              Instagram
            </a>{" "}
            to learn more!
          </p>

          <Link
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)] underline underline-offset-8 decoration-[var(--accent)]/40 transition-colors duration-300 hover:text-[var(--accent-dark)] active:text-[var(--accent-dark)]"
          >
            CLIENT QUESTIONNAIRE
          </Link>

          <p className="mt-10 text-sm text-[var(--ink-soft)]">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:AVargheseDesign@gmail.com"
              className="text-[var(--accent)] underline underline-offset-4 transition-colors duration-300 hover:text-[var(--accent-dark)]"
            >
              AVargheseDesign@gmail.com
            </a>
          </p>
        </div>
      </FadeIn>
    </Container>
  );
}
