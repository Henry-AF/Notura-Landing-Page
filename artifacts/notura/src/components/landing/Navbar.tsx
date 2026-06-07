import { useEffect, useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { LOGIN_URL } from "@/components/landing/constants";

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

const productLinks = [
  { label: "Como funciona", href: "#how-it-works" },
  { label: "Demonstração", href: "#live-demo" },
];

const navLinks = [
  { label: "Recursos", href: "#features" },
  { label: "Preços", href: "#pricing" },
  { label: "Blog", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setProductOpen(false);
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
          <div className="relative">
            <button
              type="button"
              onClick={() => setProductOpen((value) => !value)}
              className="flex items-center gap-1 text-sm font-medium text-zinc-600 transition-colors hover:text-[var(--notura-primary)]"
            >
              Produto
              <ChevronDown className={`h-4 w-4 transition-transform ${productOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {productOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full mt-3 w-48 rounded-[24px] border border-[var(--notura-violet-200)] bg-white p-2 shadow-[var(--notura-shadow-elevated)]"
                >
                  {productLinks.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => scrollTo(item.href)}
                      className="flex w-full items-center justify-between rounded-[18px] px-3 py-2 text-left text-sm text-zinc-600 transition-colors hover:bg-[var(--notura-violet-50)] hover:text-[var(--notura-primary)]"
                    >
                      {item.label}
                      <Sparkles className="h-3.5 w-3.5" />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="notura-button-primary">
            Criar conta
          </a>
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
              {productLinks.concat(navLinks).map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollTo(item.href)}
                  className="rounded-[20px] px-4 py-3 text-left text-sm font-medium text-zinc-700 transition-colors hover:bg-[var(--notura-violet-50)]"
                >
                  {item.label}
                </button>
              ))}
              <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="notura-button-primary mt-2 w-full">
                Criar conta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
