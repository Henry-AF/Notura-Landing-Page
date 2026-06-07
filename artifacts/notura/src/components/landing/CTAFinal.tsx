import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { LOGIN_URL } from "@/components/landing/constants";
import { useInView } from "@/hooks/useInView";
import { scaleIn } from "@/lib/animations";

export function CTAFinal() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="cta" className="bg-[var(--notura-violet-50)] py-24 md:py-28" ref={ref}>
      <div className="page-shell">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={scaleIn}
          className="relative overflow-hidden rounded-[var(--notura-radius-2xl)] px-6 py-12 text-center shadow-[var(--notura-shadow-glow)] md:px-10 md:py-18"
        >
          <div className="absolute inset-0 [background:var(--notura-bg-gradient-violet)]" />
          <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-10 right-0 h-64 w-64 rounded-full bg-[var(--notura-secondary)]/25 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white">
              <Sparkles className="h-4 w-4" />
              7 dias grátis · Sem cartão de crédito
            </div>
            <h2 className="mt-8 font-display text-4xl font-black tracking-tight text-white md:text-6xl">
              Pare de anotar. Comece a executar.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
              Você está a um passo de uma rotina sem retrabalho e com follow-up automático depois de cada reunião.
            </p>
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-10 inline-flex animate-pulse-slow items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[var(--notura-primary)]"
            >
              Experimentar Notura Gratuitamente
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
