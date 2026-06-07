import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Clock3, ListChecks } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { slideInLeft, slideInRight } from "@/lib/animations";

export function PainDiagnosis() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  const beforeItems = [
    { icon: Clock3, text: "Horas gastas remontando o que foi decidido" },
    { icon: ListChecks, text: "Tarefas soltas entre WhatsApp, CRM e memória" },
    { icon: AlertTriangle, text: "Alinhamentos perdidos logo após a call" },
  ];

  return (
    <section className="bg-[var(--notura-violet-50)] py-24 md:py-28" ref={ref}>
      <div className="page-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="notura-pill mb-6">Diagnóstico operacional</p>
          <h2 className="notura-section-title">Sua memória não deveria ser o gargalo da sua empresa.</h2>
          <p className="notura-muted mt-5">
            A diferença entre uma reunião comum e uma operação que realmente executa aparece nos 15 minutos seguintes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="rounded-[var(--notura-radius-2xl)] border border-red-100 bg-red-50 p-8"
          >
            <div className="flex items-center gap-3 text-red-500">
              <AlertTriangle className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.16em]">Antes</p>
            </div>
            <h3 className="mt-4 font-display text-3xl font-bold text-zinc-950">Tudo depende de quem conseguiu anotar.</h3>
            <div className="mt-8 space-y-4">
              {beforeItems.map(({ icon: ItemIcon, text }) => {
                return (
                  <div key={text} className="flex items-start gap-3 rounded-[24px] bg-white/70 p-4 text-sm text-zinc-600">
                    <ItemIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="rounded-[var(--notura-radius-2xl)] border border-[var(--notura-violet-200)] bg-white p-8 shadow-[var(--notura-shadow-elevated)]"
          >
            <div className="flex items-center gap-3 text-[var(--notura-primary)]">
              <CheckCircle2 className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.16em]">Depois</p>
            </div>
            <h3 className="mt-4 font-display text-3xl font-bold text-zinc-950">A conversa vira entrega, delegação e clareza.</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Resumo estruturado", "Ata pronta com decisões e contexto"],
                ["Tarefas delegadas", "Próximos passos atribuídos sem retrabalho"],
                ["WhatsApp acionado", "Equipe recebe o resumo no canal certo"],
                ["CRM atualizado", "Histórico e follow-up registrados em segundos"],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[24px] border border-[var(--notura-violet-200)] bg-[var(--notura-violet-50)] p-4">
                  <p className="text-sm font-semibold text-zinc-950">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{copy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}