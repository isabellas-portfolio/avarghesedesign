import Link from "next/link";
import { Container } from "@/components/ui/Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/consultation", label: "Consultation" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--bg)/92] backdrop-blur-md">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="font-serif text-lg tracking-[0.18em] text-[var(--ink)]">
          A VARGHESE DESIGN
        </Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)] md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors duration-300 hover:text-[var(--accent)]">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
