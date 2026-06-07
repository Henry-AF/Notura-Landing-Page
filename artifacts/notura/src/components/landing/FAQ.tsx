import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { fadeInUp } from "@/lib/animations";

const faqs = [
  {
    q: "Notura é gratuito?",
    a: "Sim, o plano gratuito cobre as features essenciais. Os planos pagos liberam IA avançada e armazenamento ilimitado.",
  },
  {
    q: "Meus dados são seguros?",
    a: "Criptografia end-to-end e armazenamento na sua região. O fluxo foi desenhado com foco em conformidade com LGPD.",
  },
  {
    q: "Como começar?",
    a: "Crie sua conta em 30 segundos. Sem cartão de crédito necessário para iniciar o primeiro fluxo.",
  },
  {
    q: "Funciona offline?",
    a: "O app móvel funciona offline e sincroniza automaticamente quando a conexão voltar.",
  },
  {
    q: "Integra com meu CRM?",
    a: "Sim. Pipedrive, HubSpot, Salesforce e outros via Zapier ou API.",
  },
];

export function FAQ() {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 md:py-28" ref={ref}>
      <div className="page-shell max-w-4xl">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInUp} className="mx-auto max-w-3xl text-center">
          <p className="notura-pill mb-6">FAQ</p>
          <h2 className="notura-section-title">Perguntas frequentes</h2>
          <p className="notura-muted mt-5">Clareza sobre adoção, segurança e integração antes do primeiro resumo.</p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="overflow-hidden rounded-[28px] border border-[var(--notura-violet-200)] bg-white shadow-[var(--notura-shadow-elevated)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[var(--notura-violet-50)]"
                >
                  <span className="font-display text-lg font-bold text-zinc-950">{item.q}</span>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-[var(--notura-primary)] text-white" : "bg-[var(--notura-violet-50)] text-[var(--notura-primary)]"}`}>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm leading-7 text-zinc-500">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
