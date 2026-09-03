"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/consultation", label: "Consultation" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--bg)/92] backdrop-blur-md">
      <Container className="flex items-center justify-between py-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-serif text-lg tracking-[0.18em] text-[var(--ink)]"
        >
          A VARGHESE DESIGN
        </Link>

        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)] md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors duration-300 hover:text-[var(--accent)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[var(--ink)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className="relative flex h-3.5 w-5 flex-col justify-between" aria-hidden="true">
            <span
              className={`block h-px w-full bg-[var(--ink)] transition-transform duration-300 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span className={`block h-px w-full bg-[var(--ink)] transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-full bg-[var(--ink)] transition-transform duration-300 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--line)] md:hidden"
          >
            <nav className="bg-[var(--bg)] px-6 py-6">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-sm uppercase tracking-[0.18em] text-[var(--ink)] transition-colors duration-300 hover:text-[var(--accent)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
