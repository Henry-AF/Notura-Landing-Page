import { useEffect, useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LOGIN_URL } from "@/components/landing/constants";
import { GrainientButton } from "@/components/ui/grainient-button";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,var(--notura-primary-dark)_0%,var(--notura-primary-light)_100%)] text-white shadow-[var(--notura-shadow-glow)]">
        <svg viewBox="0 0 48 48" aria-hidden="true" className="h-5 w-5" fill="none">
          <path d="M11 30 18 18l8 8 11-15" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11" cy="30" r="3" fill="currentColor" />
          <circle cx="18" cy="18" r="3" fill="currentColor" />
          <circle cx="26" cy="26" r="3" fill="currentColor" />
          <circle cx="37" cy="11" r="3" fill="currentColor" />
        </svg>
      </div>
      <span className="font-display text-xl font-bold tracking-tight text-zinc-950">Notura</span>
    </Link>
  );
}

const navLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-[var(--notura-violet-200)] bg-white/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="page-shell flex h-18 items-center justify-between py-3">
        <Brand />

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-[var(--notura-primary)]"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-[var(--notura-primary)]"
          >
            Entrar
          </a>
          <GrainientButton href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
            Começar grátis
          </GrainientButton>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-full border border-[var(--notura-violet-200)] bg-white/80 p-2 text-zinc-700 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[var(--notura-violet-200)] bg-white/95 md:hidden"
          >
            <div className="page-shell flex flex-col gap-2 py-4">
              {navLinks.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollTo(item.href)}
                  className="rounded-[20px] px-4 py-3 text-left text-sm font-medium text-zinc-700 transition-colors hover:bg-[var(--notura-violet-50)]"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[20px] px-4 py-3 text-left text-sm font-medium text-zinc-700 transition-colors hover:bg-[var(--notura-violet-50)]"
              >
                Entrar
              </a>
              <GrainientButton href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="mt-2 w-full">
                Começar grátis
              </GrainientButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
