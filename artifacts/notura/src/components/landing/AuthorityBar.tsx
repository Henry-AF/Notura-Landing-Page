const LOGOS = ["Aster", "Fivve", "Clarity", "Orbit", "Venturi", "Nexa"];

export function AuthorityBar() {
  const duplicated = [...LOGOS, ...LOGOS];

  return (
    <section className="overflow-hidden border-y border-[var(--notura-violet-200)] bg-white py-5">
      <div className="page-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="shrink-0 text-center text-sm font-medium text-zinc-500 md:text-left">
          Usado por mais de 2.000 líderes que eliminaram o retrabalho pós-reunião
        </p>
        <div className="relative overflow-hidden md:max-w-[56rem]">
          <div className="flex min-w-max gap-3 animate-marquee pr-3">
            {duplicated.map((name, index) => (
              <div
                key={`${name}-${index}`}
                className="flex min-w-[8rem] items-center justify-center rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400 grayscale"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}