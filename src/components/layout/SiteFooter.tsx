import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--line)] py-10">
      <Container className="flex flex-col items-start justify-between gap-4 text-sm text-[var(--ink-soft)] md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} A Varghese Design</p>
        <Link
          href="https://www.instagram.com/avarghesedesign"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-[var(--accent)] underline underline-offset-4 decoration-[var(--accent)]/50 transition-opacity duration-300 hover:opacity-70"
        >
          Instagram
        </Link>
      </Container>
    </footer>
  );
}
