const METRICS = [
  "95%+ de precisão em português",
  "Action items automáticos",
  "Funciona presencial e remoto",
];

export function AuthorityBar() {
  return (
    <section className="border-y border-[#F0F0F0] bg-white py-6">
      <div className="page-shell grid grid-cols-1 gap-4 text-center sm:grid-cols-3 sm:gap-6">
        {METRICS.map((metric) => (
          <p key={metric} className="text-sm font-semibold text-zinc-700 md:text-base">
            {metric}
          </p>
        ))}
      </div>
    </section>
  );
}
