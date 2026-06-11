import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { fadeInUp } from "@/lib/animations";
import { LOGIN_URL } from "@/components/landing/constants";

const useCases = [
  {
    label: "Saúde",
    title: "Saúde",
    description:
      "Rounds, passagens de plantão e reuniões clínicas sem ata formal. O Notura transcreve atendimentos e reuniões de equipe, gerando resumos estruturados e prontos para o prontuário — rastreáveis e conformes à LGPD.",
    cta: "Começar grátis para clínicas",
    colors: ["#38bdf8", "#6366f1", "#34d399"],
  },
  {
    label: "Startups",
    title: "Startups",
    description:
      "Daily, sprint review e 1:1s terminam sem registro claro. Com o Notura, cada reunião vira um artefato de produto com decisões e action items prontos para o Linear, Jira ou Notion — sem copiar e colar.",
    cta: "Experimentar para startups",
    colors: ["#8b5cf6", "#5341CD", "#818cf8"],
  },
  {
    label: "RH",
    title: "RH / Recrutamento",
    description:
      "Entrevistas, feedbacks e PDIs ficam só na cabeça do recrutador. Transcrição automática com resumo estruturado — histórico completo de cada candidato, pesquisável e organizado.",
    cta: "Experimentar para RH",
    colors: ["#f472b6", "#fb923c", "#c084fc"],
  },
  {
    label: "Gestão pública",
    title: "Gestão pública",
    description:
      "Atas de reunião levam dias para serem produzidas e ninguém as lê. O Notura gera a ata automaticamente em segundos, no formato correto, assinável e arquivável.",
    cta: "Experimentar para gestão",
    colors: ["#34d399", "#38bdf8", "#a3e635"],
  },
  {
    label: "Consultoria",
    title: "Consultoria",
    description:
      "Reuniões com clientes geram tarefas que se perdem no e-mail. Cada reunião de projeto vira um relatório de status automático entregue ao cliente em minutos.",
    cta: "Experimentar para consultoria",
    colors: ["#fbbf24", "#f87171", "#fb923c"],
  },
];

export function UseCases() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = useCases[activeIndex];

  const orbStyle = useMemo(() => {
    const [first, second, third] = active.colors;
    return {
      background: `
        radial-gradient(circle at 30% 30%, ${first} 0%, transparent 40%),
        radial-gradient(circle at 70% 28%, ${second} 0%, transparent 42%),
        radial-gradient(circle at 50% 75%, ${third} 0%, transparent 44%),
        conic-gradient(from 180deg, ${first}, ${second}, ${third}, ${first})
      `,
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
          {/* Eyebrow */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--notura-primary)]">
            Para o seu segmento
          </p>

          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-zinc-900 md:text-5xl md:leading-[1.08]">
            Feito para como o seu time trabalha
          </h2>
          <p className="mt-4 text-base text-zinc-500">
            Veja como o Notura se adapta às necessidades do seu setor.
          </p>

          {/* Tabs */}
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
                      ? "border-[#5341CD] bg-[#5341CD] text-white shadow-[0_8px_30px_rgba(83,65,205,0.25)]"
                      : "border-transparent bg-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Orb + conteúdo */}
        <div className="relative mx-auto mt-16 max-w-5xl px-6 py-6 md:px-16 md:py-10">
          <button
            type="button"
            onClick={() => goTo(-1)}
            aria-label="Caso anterior"
            className="absolute left-0 top-[8.5rem] z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#d7ddf6] bg-white/80 text-[#5341CD] transition-colors hover:bg-[#eef2ff] md:left-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => goTo(1)}
            aria-label="Próximo caso"
            className="absolute right-0 top-[8.5rem] z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#d7ddf6] bg-white/80 text-[#5341CD] transition-colors hover:bg-[#eef2ff] md:right-2"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center justify-center">
            {/* Orb animado */}
            <motion.div
              key={active.label}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Glow externo */}
              <div
                className="absolute inset-0 rounded-full blur-3xl transition-all duration-500"
                style={{ ...orbStyle, transform: "scale(1.18)", opacity: 0.48 }}
              />
              {/* Esfera */}
              <div
                className="animate-morph-orb relative h-[17.5rem] w-[17.5rem] rounded-full transition-all duration-500"
                style={orbStyle}
              />
            </motion.div>

            {/* Conteúdo da tab */}
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
                  <h3 className="font-display text-2xl font-semibold text-zinc-900 md:text-3xl">
                    {active.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500 md:text-base">
                    {active.description}
                  </p>
                  <a
                    href={LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#5341CD] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#4333B8] hover:shadow-[0_8px_24px_rgba(83,65,205,0.3)]"
                  >
                    {active.cta}
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}