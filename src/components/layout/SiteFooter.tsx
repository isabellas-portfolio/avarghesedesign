import Link from "next/link";
import { Container } from "@/components/ui/Container";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--line)] py-10">
      <Container className="flex flex-col items-start justify-between gap-4 text-sm text-[var(--ink-soft)] md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} A Varghese Design</p>
        <Link
          href="https://www.instagram.com/avarghesedesign"
          target="_blank"
          rel="noreferrer"
          aria-label="A Varghese Design on Instagram"
          className="inline-flex flex-col items-center gap-2 text-[var(--accent)] transition-opacity duration-300 hover:opacity-70"
        >
          <InstagramIcon className="h-9 w-9" />
          <span className="text-sm font-medium uppercase tracking-[0.16em] underline underline-offset-4 decoration-[var(--accent)]/50">
            Instagram
          </span>
        </Link>
      </Container>
    </footer>
  );
}
