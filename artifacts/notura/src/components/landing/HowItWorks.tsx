import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: "1",
    badge: "PASSO 1",
    title: "Grave a reunião",
    description: "Qualquer dispositivo, qualquer idioma, sem alterar o fluxo que seu time já usa.",
    image: "/assets/step-1-grava.png",
    offset: false,
  },
  {
    number: "2",
    badge: "PASSO 2",
    title: "Receba o resumo",
    description: "O resumo estruturado chega pronto para toda a equipe agir sem retrabalho.",
    image: "/assets/step-2-resumo.png",
    offset: true,
  },
  {
    number: "3",
    badge: "PASSO 3",
    title: "Tarefas vão pro Kanban",
    description: "Action items viram cards com responsável, prazo e status, prontos para execução.",
    image: "/assets/step-3-kanban.png",
    offset: false,
  },
  {
    number: "4",
    badge: "PASSO 4",
    title: "A IA organiza tudo",
    description: "Tópicos, decisões, tarefas e alertas surgem em segundos com contexto executivo.",
    image: "/assets/step-4-ia.png",
    offset: true,
  },
];

const PLACEHOLDER_COLORS = [
  "from-violet-400 to-indigo-500",
  "from-purple-400 to-violet-600",
  "from-indigo-400 to-blue-500",
  "from-violet-500 to-purple-700",
];

export function HowItWorks() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="como-funciona" className="bg-white py-24 md:py-28" ref={ref}>
      <div className="page-shell">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="font-display text-4xl font-normal tracking-tight text-zinc-900 md:text-5xl">
            Como usar o Notura?
          </h2>
        </div>

        {/* Mobile: coluna única | Desktop: grid 4 colunas com offset */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
          className="flex flex-col gap-10 md:grid md:grid-cols-4 md:gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${step.offset ? "md:mt-14" : "md:mt-0"}`}
            >
              {/* Badge — roxo #5341CD */}
              <div className="mb-2.5">
                <span className="inline-flex items-center rounded-full bg-[#5341CD] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  {step.badge}
                </span>
              </div>

              {/* Título sempre acima no mobile, lógica de offset no desktop */}
              <h3 className="mb-3 font-display text-xl font-bold leading-snug text-zinc-900 md:text-[1.15rem]">
                {step.title}
              </h3>

              {/* Imagem */}
              <div className="relative overflow-hidden rounded-2xl bg-zinc-100 shadow-[0_2px_16px_rgba(0,0,0,0.08)]">
                <div className="aspect-[4/3] md:aspect-[3/4]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                {/* Placeholder gradiente — fallback */}
                <div
                  className={`absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br ${PLACEHOLDER_COLORS[index]}`}
                >
                  <span className="font-display text-6xl font-black text-white/20">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Descrição */}
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}