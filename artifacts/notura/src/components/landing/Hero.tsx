import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LOGIN_URL } from "@/components/landing/constants";
import { GrainientButton } from "@/components/ui/grainient-button";
import GradientText from "@/components/ui/GradientText";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const DEMO_VIDEO_URL = "https://www.youtube.com/embed/Je15WkEaZ20";

// Paleta roxa Notura — começa e termina com a mesma cor para loop suave
const GRADIENT_COLORS = ["#9B8AFB", "#5341CD", "#C084FC", "#5341CD", "#9B8AFB"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36" id="hero">
      <div className="absolute inset-0 [background:var(--notura-bg-gradient-mesh)]" />
      <div className="absolute left-1/2 top-32 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[var(--notura-primary-glow)] blur-[120px] animate-pulse-slow" />

      <div className="page-shell relative z-10 pb-20 md:pb-28 lg:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr]"
        >
          {/* Coluna esquerda */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            <motion.h1
              variants={fadeInUp}
              className="max-w-2xl font-display text-5xl font-bold tracking-[-0.03em] text-zinc-950 md:text-[3.25rem] lg:text-[3.5rem] lg:leading-[1.15]"
            >
              {/* Linha 1 — texto normal */}
              Nunca mais perca{" "}

              {/* "decisões importantes" — GradientText animado */}
              <GradientText
                colors={GRADIENT_COLORS}
                animationSpeed={6}
                direction="horizontal"
                yoyo={true}
                className="inline font-display text-5xl font-bold tracking-[-0.03em] md:text-[3.25rem] lg:text-[3.5rem]"
              >
                decisões importantes
              </GradientText>

              {" "}de uma reunião
            </motion.h1>


            {/* AIDA Desejo */}
            <motion.p
              variants={fadeInUp}
              className="mt-3 max-w-xl text-base leading-relaxed text-zinc-500"
            >
              O Notura grava, transcreve e resume qualquer reunião com IA em português, inglês ou qualquer idioma e entrega action items prontos e tarefas no Kanban. Presencial ou remoto. Sem bot na call.
            </motion.p>

            {/* AIDA Ação */}
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-sm font-semibold text-[var(--notura-primary)]"
            >
              Comece em menos de 2 minutos. Sem configuração.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="mt-6">
              <GrainientButton href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
                Começar grátis
                <ArrowRight className="h-4 w-4" />
              </GrainientButton>
            </motion.div>

          </div>

          {/* Coluna direita — vídeo */}
          <motion.div
            variants={fadeInUp}
            className="w-full lg:self-center"
            id="hero-video"
          >
            <div className="overflow-hidden rounded-[16px] shadow-[0_20px_60px_rgba(83,65,205,0.18)]">
              <iframe
                src={DEMO_VIDEO_URL}
                title="Vídeo de demonstração do Notura"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="block aspect-video w-full"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}