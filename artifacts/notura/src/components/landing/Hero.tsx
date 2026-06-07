import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { LOGIN_URL } from "@/components/landing/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import heroResumoMockup from "@assets/resumo-mockup-new.png";

export function Hero() {
  const scrollToDemo = () => document.querySelector("#live-demo")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36" id="hero">
      <div className="absolute inset-0 [background:var(--notura-bg-gradient-mesh)]" />
      <div className="absolute left-1/2 top-32 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[var(--notura-primary-glow)] blur-[120px] animate-pulse-slow" />
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="absolute right-[7%] top-[260px] z-0 w-[250px] xl:w-[300px] 2xl:w-[340px]"
        >
          <div className="rounded-[34px]">
            <img
              src={heroResumoMockup}
              alt="Mockup lateral do resumo inteligente do Notura"
              className="block w-full rounded-[26px] object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="page-shell relative z-10 pb-20 md:pb-28 lg:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-6xl flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp} className="notura-pill mb-8">
            <Sparkles className="h-4 w-4" />
            Mais de 1.200 reuniões resumidas esta semana
          </motion.div>

          <motion.h1 variants={fadeInUp} className="max-w-5xl font-display text-5xl font-black tracking-[-0.04em] text-zinc-950 md:text-[4rem] lg:text-[4.75rem] lg:leading-[1.02]">
            Transforme conversas em decisões executivas automaticamente.
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-6 max-w-3xl text-lg leading-8 text-zinc-500 md:text-xl">
            Pare de apenas transcrever reuniões. O Notura usa inteligência estratégica para gerar atas, delegar tarefas e atualizar seu CRM em segundos.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="notura-button-primary text-base">
              Receber meu primeiro resumo grátis
              <ArrowRight className="h-4 w-4" />
            </a>
            <button type="button" onClick={scrollToDemo} className="notura-button-secondary bg-white/80 text-base backdrop-blur-sm">
              <Play className="h-4 w-4" />
              Ver em ação
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
