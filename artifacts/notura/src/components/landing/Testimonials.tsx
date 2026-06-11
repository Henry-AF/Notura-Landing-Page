import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const CATEGORIES = [
  "Todos",
  "Produtividade",
  "Reuniões",
  "Action items",
  "Transcrição",
  "Time",
];

const testimonials = [
  {
    name: "Rafael M.",
    role: "Product Manager",
    company: "Aster",
    quote:
      "Notura mudou completamente como eu processo informação. Antes eu perdia horas procurando anotações. Agora a IA faz isso por mim.",
    category: "Produtividade",
  },
  {
    name: "Camila L.",
    role: "Head de Operações",
    company: "Fivve",
    quote:
      "Os action items chegam no time antes mesmo de eu sair da sala. O retrabalho pós-reunião praticamente sumiu.",
    category: "Action items",
  },
  {
    name: "Thiago S.",
    role: "Diretor Comercial",
    company: "Orbit",
    quote:
      "A transcrição em português é impressionantemente precisa, mesmo com vários falantes ao mesmo tempo. Virou parte do nosso processo.",
    category: "Transcrição",
  },
  {
    name: "Ana Beatriz S.",
    role: "Head de Operações",
    company: "Clarity",
    quote:
      "O Notura eliminou completamente aquele e-mail de ata que ninguém lia. Agora o cliente recebe o resumo em menos de 5 minutos após a reunião.",
    category: "Reuniões",
  },
  {
    name: "Dr. Rafael T.",
    role: "Coordenador de TI",
    company: "Hospital Regional",
    quote:
      "Finalmente consigo registrar as decisões das reuniões de equipe clínica sem precisar designar um anotador. E ainda temos histórico pesquisável.",
    category: "Time",
  },
  {
    name: "Carolina M.",
    role: "Gerente de Projetos",
    company: "Ventur",
    quote:
      "Antes passava 30 minutos depois de cada reunião tentando lembrar o que foi decidido. Hoje o resumo chega antes de eu fechar a call.",
    category: "Reuniões",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <section
      id="testimonials"
      className="bg-white py-24 md:py-32"
      ref={ref}
    >
      <div className="page-shell">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-4xl font-bold tracking-[-0.03em] text-zinc-900 md:text-5xl">
            O que os usuários dizem
          </h2>
          <p className="mt-3 text-base text-zinc-500">
            Times reais. Resultados reais. Reuniões transformadas.
          </p>
        </motion.div>

        {/* Filtros de categoria */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "border-[#5341CD] bg-[#5341CD]/8 text-[#5341CD]"
                  : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 hover:text-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map(({ name, role, company, quote, category }) => (
            <motion.div
              key={name}
              variants={fadeInUp}
              className="flex flex-col rounded-2xl border border-[#F5A623]/30 bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#F5A623]/60 hover:shadow-[0_8px_32px_rgba(245,166,35,0.10)]"
            >
              {/* Aspas — laranja como na referência */}
              <span
                className="mb-4 font-serif text-4xl font-black leading-none"
                style={{ color: "#F5A623" }}
                aria-hidden="true"
              >
                "
              </span>

              {/* Texto do depoimento */}
              <blockquote className="flex-1 text-sm leading-7 text-zinc-600">
                {quote}
              </blockquote>

              {/* Nome — laranja como na referência */}
              <div className="mt-6 border-t border-zinc-100 pt-5">
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#F5A623" }}
                >
                  {name}
                </p>
                <p className="mt-0.5 text-xs text-zinc-400">
                  {role} · {company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}