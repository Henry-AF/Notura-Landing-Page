import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { fadeInUp } from "@/lib/animations";
import APP_MOCKUP_IMAGE from "@assets/home-mockup-new.png";

const featuresLeft = [
  {
    icon: "🎙️",
    title: "Captura automática",
    description: "Grave reuniões online ou presenciais sem precisar tomar notas.",
  },
  {
    icon: "🧠",
    title: "IA que entende o contexto",
    description: "Não apenas transcreve. O Notura identifica decisões, tarefas e insights.",
  },
  {
    icon: "📄",
    title: "Resumos instantâneos",
    description: "Receba um resumo executivo pronto para compartilhar.",
  },
];

const featuresRight = [
  {
    icon: "🔍",
    title: "Pesquisa sem limites",
    description: "Pergunte qualquer coisa sobre reuniões passadas e encontre respostas em segundos.",
  },
  {
    icon: "👥",
    title: "Trabalho colaborativo",
    description: "Compartilhe informações com equipes, clientes e parceiros.",
  },
  {
    icon: "📁",
    title: "Histórico organizacional",
    description: "Construa uma memória permanente da sua empresa.",
  },
];

export function Features() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="funcionalidades" className="bg-white py-24 md:py-32" ref={ref}>
      <div className="page-shell">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-zinc-900 md:text-5xl md:leading-[1.08]">
            Nunca mais saia de uma reunião<br />sem saber o que fazer
          </h2>
        </motion.div>

        {/* Grid: features esquerda | mockup centro | features direita */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto_1fr]">

          {/* Coluna esquerda */}
          <div className="flex flex-col gap-10">
            {featuresLeft.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 text-center md:items-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF0FF] text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-zinc-900">{feature.title}</h3>
                <p className="max-w-[220px] text-sm leading-relaxed text-zinc-500">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mockup central — iPhone frame */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow roxo atrás do telefone */}
              <div className="absolute inset-0 rounded-[40px] bg-[#5341CD] opacity-10 blur-3xl scale-110" />
              <img
                src={APP_MOCKUP_IMAGE}
                alt="App Notura no celular mostrando reuniões, resumos e tarefas"
                className="relative z-10 w-[260px] drop-shadow-2xl md:w-[300px]"
              />
            </div>
          </motion.div>

          {/* Coluna direita */}
          <div className="flex flex-col gap-10">
            {featuresRight.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 text-center md:items-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF0FF] text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-zinc-900">{feature.title}</h3>
                <p className="max-w-[220px] text-sm leading-relaxed text-zinc-500">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}