import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { fadeInUp } from "@/lib/animations";

const useCases = [
  {
    label: "Vendas",
    title: "Vendas",
    description:
      "Capture notas de calls de vendas, receba dicas de coaching em tempo real, automatize follow-ups e integre com seu CRM.",
    colors: ["#ff6b9d", "#ff9a3c", "#7c3aed"],
  },
  {
    label: "Educação",
    title: "Educação",
    description:
      "Grave aulas, discussões e sessões de estudo e transforme-as automaticamente em anotações pesquisáveis que você acessa a qualquer momento.",
    colors: ["#38bdf8", "#14b8a6", "#f9a8d4"],
  },
  {
    label: "Mídia",
    title: "Mídia",
    description:
      "Capture entrevistas e reuniões de produção e gere automaticamente transcrições, citações-chave e rascunhos prontos para publicação.",
    colors: ["#8b5cf6", "#3b82f6", "#ec4899"],
  },
  {
    label: "RH / Recrutamento",
    title: "RH / Recrutamento",
    description:
      "Obtenha suporte em tempo real durante entrevistas e transforme cada conversa em insights estruturados e compartilháveis sobre candidatos.",
    colors: ["#fb923c", "#fbbf24", "#7c3aed"],
  },
  {
    label: "Gestão",
    title: "Gestão",
    description:
      "De reuniões de planejamento a decisões estratégicas, o Notura registra tudo e mantém seu time alinhado automaticamente.",
    colors: ["#7c3aed", "#ea580c", "#ef4444"],
  },
];

export function UseCases() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = useCases[activeIndex];

  const orbStyle = useMemo(() => {
    const [first, second, third] = active.colors;
    return {
      background: `radial-gradient(circle at 30% 30%, ${first} 0%, transparent 40%), radial-gradient(circle at 70% 28%, ${second} 0%, transparent 42%), radial-gradient(circle at 50% 75%, ${third} 0%, transparent 44%), conic-gradient(from 180deg, ${first}, ${second}, ${third}, ${first})`,
      boxShadow: `0 0 80px ${first}55, 0 0 120px ${second}35, 0 0 160px ${third}25`,
    };
  }, [active.colors]);

  const goTo = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + useCases.length) % useCases.length);
  };

  return (
    <section id="usecases" className="bg-[#fcfcfe] py-[7.5rem] md:py-[8.5rem]" ref={ref}>
      <div className="page-shell">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#1a3bd4] md:text-5xl md:leading-[1.08]">
            Independente do que você faz, o Notura trabalha por você
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {useCases.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-[#5341CD] bg-[#5341CD]/10 text-[#5341CD] shadow-[0_8px_30px_rgba(83,65,205,0.15)]"
                      : "border-transparent bg-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-5xl px-6 py-6 md:px-16 md:py-10">
          <button
            type="button"
            onClick={() => goTo(-1)}
            aria-label="Caso anterior"
            className="absolute left-0 top-[8.5rem] z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#d7ddf6] bg-white/80 text-[#1a3bd4] transition-colors hover:bg-[#eef2ff] md:left-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => goTo(1)}
            aria-label="Próximo caso"
            className="absolute right-0 top-[8.5rem] z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#d7ddf6] bg-white/80 text-[#1a3bd4] transition-colors hover:bg-[#eef2ff] md:right-2"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center justify-center">
            <motion.div
              key={active.label}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              <div
                className="absolute inset-0 rounded-full blur-3xl transition-all duration-500"
                style={{ ...orbStyle, transform: "scale(1.18)", opacity: 0.48 }}
              />
              <div
                className="animate-morph-orb relative h-[17.5rem] w-[17.5rem] rounded-full transition-all duration-500"
                style={orbStyle}
              />
            </motion.div>

            <div className="mt-10 min-h-[13rem] max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-center"
                >
                  <h3 className="font-display text-2xl font-semibold text-[#1a3bd4] md:text-3xl">
                    {active.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#4b5563] md:text-base">
                    {active.description}
                  </p>
                  <button
                    type="button"
                    className="mt-8 inline-flex items-center justify-center rounded-full border border-[#5341CD] px-6 py-3 text-sm font-semibold text-[#5341CD] transition-all duration-300 hover:bg-[#5341CD] hover:text-white"
                  >
                    Saiba mais
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
