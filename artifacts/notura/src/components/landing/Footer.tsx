import { Link } from "wouter";

const footerColumns = {
  Produto: ["Recursos", "Preços", "Changelog", "Status"],
  Empresa: ["Blog", "Sobre", "Contato"],
  Legal: ["Privacidade", "Termos"],
};

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="page-shell py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
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
              <span className="font-display text-xl font-bold tracking-tight text-white">Notura</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
              Notura transforma reuniões em memória operacional para times que precisam decidir rápido e executar melhor.
            </p>
          </div>

          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">{title}</p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-500">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>Notura — Pense melhor, lembre de tudo.</p>
          <div className="flex items-center gap-3">
            {"XLI".split("").map((item) => (
              <a key={item} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-white/75 transition-colors hover:border-white/30 hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
