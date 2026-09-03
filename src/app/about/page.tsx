import Image from "next/image";
import { siteDriveImageryDeck } from "@/data/drive-download-images";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export default function AboutPage() {
  const portraitImage = siteDriveImageryDeck[2 % siteDriveImageryDeck.length]!;

  return (
    <Container className="py-20">
      <FadeIn>
        <h1 className="font-serif text-4xl text-[var(--accent)] sm:text-5xl">A Varghese Design</h1>
      </FadeIn>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn>
          <div className="space-y-8 text-base leading-8 text-[var(--ink-soft)] sm:text-lg">
            <p>
              After a decade as a project manager in the biotechnology industry, AVD&apos;s principal designer started
              her design studio with a focus on efficient processes and a client-designer relationship that is built on
              trust, attention to detail, and an enjoyable process from start to finish.
            </p>
            <p>
              She has spent the last several years expanding her expertise and bringing thoughtful design to client
              homes that prioritizes function while beautifully representing the people who live there. She is gaining
              trust and a reputation for creating inviting homes that feel equal parts luxurious and liveable. Her
              approach to design is to thoughtfully create spaces that look beautiful and collected over time, not
              simply staged.
            </p>
            <p>
              She assists in every step of the project life cycle, including meeting with clients, creating custom
              design boards, sourcing products and materials, communication with trades and managing final home
              installations. Inspired by global architecture, natural elements, and colors that evoke emotions, her
              hands-on process for sourcing items unique to each family she works with and special attention on
              procuring items that are hand-made, functional, and tell a story are all aspects that she values while
              sharing her distinct point of view from each of her designs.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Image
            src={portraitImage}
            alt="A Varghese Design studio portrait"
            width={1200}
            height={1500}
            className="h-full min-h-[560px] w-full object-cover"
          />
        </FadeIn>
      </div>
    </Container>
  );
}
