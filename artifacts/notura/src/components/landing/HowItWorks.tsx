import { motion } from "framer-motion";
import { CheckCheck, Mic, Settings2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: "1",
    title: "Grave a reunião",
    description: "Qualquer dispositivo, qualquer idioma, sem alterar o fluxo que seu time já usa.",
    icon: Mic,
  },
  {
    number: "2",
    title: "A IA organiza tudo",
    description: "Tópicos, decisões, tarefas e alertas surgem em segundos com contexto executivo.",
    icon: Settings2,
    featured: true,
  },
  {
    number: "3",
    title: "Receba no WhatsApp",
    description: "O resumo estruturado chega pronto para toda a equipe agir sem retrabalho.",
    icon: CheckCheck,
  },
];

export function HowItWorks() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section id="how-it-works" className="bg-white py-24 md:py-28" ref={ref}>
      <div className="page-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="notura-pill mb-6">Atenção convertida em processo</p>
          <h2 className="notura-section-title">Simples assim.</h2>
          <p className="notura-muted mt-5">
            Três etapas conectadas para transformar uma conversa comum em execução coordenada.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="absolute left-8 right-8 top-10 hidden h-[2px] bg-zinc-100 md:block" />
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
            className="absolute left-8 right-8 top-10 hidden h-[2px] origin-left bg-[linear-gradient(90deg,var(--notura-primary)_0%,var(--notura-secondary)_60%,var(--notura-success)_100%)] md:block"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid gap-5 md:grid-cols-3"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className={`relative rounded-[var(--notura-radius-2xl)] border p-7 md:p-8 ${
                    step.featured
                      ? "border-[var(--notura-primary)] bg-[var(--notura-primary)] text-white shadow-[var(--notura-shadow-glow)]"
                      : "border-[var(--notura-violet-200)] bg-white text-zinc-950 shadow-[var(--notura-shadow-elevated)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-[24px] ${
                        step.featured ? "bg-white/14 text-white" : "bg-[var(--notura-violet-50)] text-[var(--notura-primary)]"
                      }`}
                    >
                      <Icon className={`h-6 w-6 ${step.number === "1" ? "animate-pulse" : ""}`} />
                    </div>
                    <span className={`font-display text-5xl font-black ${step.featured ? "text-white/25" : "text-zinc-200"}`}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold">{step.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${step.featured ? "text-white/78" : "text-zinc-500"}`}>{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
