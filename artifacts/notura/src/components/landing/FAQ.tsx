import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { fadeInUp } from "@/lib/animations";

const faqs = [
  {
    q: "O Notura é gratuito?",
    a: "Sim, o plano gratuito cobre as funcionalidades essenciais — transcrição, resumo e action items para até 5 reuniões por mês. Os planos pagos liberam reuniões ilimitadas, IA avançada e integração com Kanban.",
  },
  {
    q: "Funciona com reuniões presenciais?",
    a: "Sim. Basta abrir o app no celular e gravar a reunião presencialmente. Não é necessário nenhum bot ou integração com plataforma de videoconferência.",
  },
  {
    q: "Em quais idiomas funciona?",
    a: "O Notura transcreve e resume em português, inglês, espanhol e vários outros idiomas. A detecção é automática — basta gravar e o sistema identifica o idioma da reunião.",
  },
  {
    q: "Meus dados são seguros e conformes com a LGPD?",
    a: "Sim. Os dados são armazenados no Brasil, com criptografia em trânsito e em repouso. O Notura foi desenhado desde o início com conformidade à LGPD e pode ser contratado com DPA (Acordo de Processamento de Dados) para empresas.",
  },
  {
    q: "Funciona offline?",
    a: "A gravação funciona offline e sincroniza automaticamente quando a conexão for restabelecida. A transcrição e o resumo são processados na nuvem após a sincronização.",
  },
  {
    q: "Integra com outras ferramentas?",
    a: "Sim. O Notura integra com Slack, Notion, Jira, Linear e outros via API ou Zapier. Os action items podem ser exportados diretamente para o board do seu time.",
  },
];

export function FAQ() {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-24 md:py-28" ref={ref}>
      <div className="page-shell">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[280px_1fr]">

          {/* Título à esquerda — igual à referência */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="lg:pt-2"
          >
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-zinc-900 md:text-4xl">
              Perguntas frequentes
            </h2>
          </motion.div>

          {/* Lista de perguntas à direita */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            ref={ref}
          >
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              const isLast = index === faqs.length - 1;

              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-opacity hover:opacity-70"
                  >
                    <span className="text-base font-medium text-zinc-800 md:text-lg">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Resposta animada */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm leading-7 text-zinc-500 md:text-base">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Divisor laranja — igual à referência */}
                  {!isLast && (
                    <div className="h-px w-full bg-[#F5A623]/40" />
                  )}
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}