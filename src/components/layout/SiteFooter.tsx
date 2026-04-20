import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--line)] py-10">
      <Container className="flex flex-col items-start justify-between gap-4 text-sm text-[var(--ink-soft)] md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} A Varghese Design</p>
        <div className="flex items-center gap-5">
          <Link
            href="https://www.instagram.com/avarghesedesign"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-[var(--accent)]"
          >
            Instagram
          </Link>
          <Link href="/consultation" className="transition-colors duration-300 hover:text-[var(--accent)]">
            Complimentary Consultation
          </Link>
        </div>
      </Container>
    </footer>
  );
}
