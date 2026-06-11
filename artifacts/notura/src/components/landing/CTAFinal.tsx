import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { LOGIN_URL } from "@/components/landing/constants";
import { Grainient } from "@/components/ui/grainient";
import { useInView } from "@/hooks/useInView";
import { scaleIn } from "@/lib/animations";

export function CTAFinal() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="cta" className="bg-[#F4F4F8] px-4 py-16 md:py-24" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={scaleIn}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[24px]"
      >
        <Grainient className="absolute inset-0" />

        <div className="relative z-10 flex flex-col items-center gap-6 px-8 py-16 text-center md:px-16 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            7 dias grátis · Sem cartão de crédito
          </div>

          <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Pare de anotar.
            <br />
            Comece a executar.
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
            Você está a um passo de uma rotina sem retrabalho e com follow-up automático depois de cada reunião.
          </p>

          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/25 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          >
            Experimentar Notura Gratuitamente
            <ArrowRight className="h-4 w-4" />
          </a>

          <p className="text-sm text-white/50">
            🔒 Dados armazenados no Brasil · Conforme LGPD
          </p>
        </div>
      </motion.div>
    </section>
  );
}
