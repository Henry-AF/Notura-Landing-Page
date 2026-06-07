import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function CountUp({ target, suffix = "", duration = 1500 }: { target: number; suffix?: string; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.3);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, inView, target]);

  return (
    <span ref={ref}>
      {Math.round(value).toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="testimonials" className="bg-[var(--notura-violet-50)] py-24 md:py-28" ref={ref}>
      <div className="page-shell">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <motion.div variants={fadeInUp} className="rounded-[var(--notura-radius-2xl)] bg-white p-8 shadow-[var(--notura-shadow-elevated)]">
            <p className="notura-pill mb-6">Prova social</p>
            <h2 className="notura-section-title text-left">Quem usa a Notura ganha velocidade sem perder contexto.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] bg-[var(--notura-violet-50)] p-4">
                <p className="text-3xl font-black text-zinc-950"><CountUp target={2000} suffix="+" /></p>
                <p className="mt-2 text-sm text-zinc-500">usuários ativos</p>
              </div>
              <div className="rounded-[24px] bg-[var(--notura-violet-50)] p-4">
                <p className="text-3xl font-black text-zinc-950"><CountUp target={1200} /></p>
                <p className="mt-2 text-sm text-zinc-500">reuniões por semana</p>
              </div>
              <div className="rounded-[24px] bg-[var(--notura-violet-50)] p-4">
                <p className="text-3xl font-black text-zinc-950"><CountUp target={10} suffix="h" /></p>
                <p className="mt-2 text-sm text-zinc-500">economizadas por semana</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="rounded-[var(--notura-radius-2xl)] border border-[var(--notura-violet-200)] bg-[linear-gradient(180deg,var(--notura-violet-50)_0%,white_100%)] p-8 shadow-[var(--notura-shadow-elevated)]">
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-6 font-display text-2xl font-semibold leading-10 text-zinc-950 md:text-[2rem]">
              “Notura mudou completamente como eu processo informação. Antes eu perdia horas procurando anotações. Agora a IA faz isso por mim.”
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--notura-primary)] text-lg font-bold text-white">
                RM
              </div>
              <div>
                <p className="font-display text-lg font-bold text-zinc-950">Rafael M.</p>
                <p className="text-sm text-zinc-500">Product Manager</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}