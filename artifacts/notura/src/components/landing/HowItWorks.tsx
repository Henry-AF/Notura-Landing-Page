import { motion } from "framer-motion";
import { CheckCheck, ListTodo, Mic, Settings2 } from "lucide-react";
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
  {
    number: "4",
    title: "Tarefas vão pro Kanban",
    description: "Action items viram cards com responsável, prazo e status, prontos para execução.",
    icon: ListTodo,
  },
];

export function HowItWorks() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section id="como-funciona" className="bg-white py-24 md:py-28" ref={ref}>
      <div className="page-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="notura-pill mb-6">Como funciona</p>
          <h2 className="notura-section-title">Simples assim.</h2>
          <p className="notura-muted mt-5">
            Quatro etapas conectadas para transformar uma conversa comum em execução coordenada.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="absolute left-8 right-8 top-10 hidden border-t-2 border-dashed border-zinc-200 md:block" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid gap-5 md:grid-cols-4"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className={`relative rounded-[14px] border p-7 md:p-6 ${
                    step.featured
                      ? "border-[var(--notura-primary)] bg-[var(--notura-primary)] text-white shadow-[0_6px_24px_rgba(83,65,205,0.12)]"
                      : "border-[var(--notura-violet-200)] bg-white text-zinc-950 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-[14px] ${
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
