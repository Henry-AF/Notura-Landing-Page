import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, Router as WouterRouter, Link } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Produtividade from "@/pages/produtividade";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Mic,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  FileText,
  Bot,
  ChevronLeft,
  ChevronRight,
  Play,
  Clock,
  TrendingUp,
  Users,
  Star,
  Check,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const queryClient = new QueryClient();

// ─── Reusable Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Scroll Reveal Wrapper ────────────────────────────────────────────────────

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay / 0.1}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Count Up ────────────────────────────────────────────────────────────────

function CountUp({
  to,
  from = 0,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setValue(from + (to - from) * ease);
      if (p < 1) raf = requestAnimationFrame(step);
      else setValue(to);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, from, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// ─── NavBar ───────────────────────────────────────────────────────────────────

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scroll = (id: string) => {
    setOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/30">
            N
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Notura
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {[
            ["Como funciona", "#como-funciona"],
            ["Benefícios", "#beneficios"],
            ["Números", "#numeros"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scroll(id)}
              className="hover:text-foreground transition-colors"
            >
              {label}
            </button>
          ))}
          <Link
            href="/produtividade"
            className="hover:text-foreground transition-colors"
          >
            Produtividade
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Entrar
          </a>
          <Button
            size="sm"
            className="rounded-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25 px-5"
            onClick={() => scroll("#cta")}
          >
            Começar grátis
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
              {[
                ["Como funciona", "#como-funciona"],
                ["Benefícios", "#beneficios"],
                ["Números", "#numeros"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scroll(id)}
                  className="text-left text-muted-foreground py-2"
                >
                  {label}
                </button>
              ))}
              <Link href="/produtividade" className="text-muted-foreground py-2">
                Produtividade
              </Link>
              <Button
                className="rounded-full bg-primary text-white mt-1"
                onClick={() => scroll("#cta")}
              >
                Começar grátis
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function MeetingCard({
  delay,
  title,
  tasks,
  x,
  y,
  rotate,
}: {
  delay: number;
  title: string;
  tasks: string[];
  x: string;
  y: string;
  rotate: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotate, left: x, top: y }}
      className="absolute w-52 bg-background/80 backdrop-blur-xl border border-border/80 rounded-2xl p-4 shadow-2xl"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
        </div>
        <span className="text-xs font-semibold text-foreground truncate">
          {title}
        </span>
      </div>
      <div className="space-y-1.5">
        {tasks.map((t, i) => (
          <div key={i} className="flex items-start gap-1.5">
            <Check className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
            <span className="text-[11px] text-muted-foreground leading-tight">
              {t}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex mb-8"
          >
            <Badge
              variant="outline"
              className="rounded-full px-5 py-2 border-primary/30 bg-primary/5 text-primary backdrop-blur-sm text-sm font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              IA que transforma reuniões em resultado
            </Badge>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-7"
          >
            {["Reuniões", "que viram"].map((word, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                custom={i}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              variants={fadeUp}
              custom={2}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-blue-500"
            >
              ação.
            </motion.span>
          </motion.h1>

          <Reveal delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Grave sua reunião. Em segundos, a IA gera resumo, tarefas e
              decisões — e envia direto para o WhatsApp da sua equipe.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  className="rounded-full h-14 px-9 bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/30 text-base font-bold group"
                  onClick={() =>
                    document
                      .querySelector("#demo")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Começar grátis
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-9 text-base font-semibold bg-background/50 backdrop-blur-sm border-border"
                  onClick={() =>
                    document
                      .querySelector("#como-funciona")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Play className="mr-2 w-4 h-4" fill="currentColor" />
                  Ver demonstração
                </Button>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.65}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              {[
                "Sem cartão de crédito",
                "Setup em 5 minutos",
                "Cancele quando quiser",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </motion.div>

        {/* Floating cards */}
        <div className="hidden lg:block relative h-72 mt-16 max-w-5xl mx-auto">
          <MeetingCard
            delay={0.9}
            title="Sync de Produto"
            tasks={[
              "Lançamento adiado 2 semanas",
              "Carlos: Aprovar budget",
              "Marina: Publicar vaga",
            ]}
            x="5%"
            y="10%"
            rotate={-4}
          />
          <MeetingCard
            delay={1.1}
            title="Reunião com Cliente"
            tasks={[
              "Proposta aprovada ✓",
              "Demo marcada p/ Quarta",
              "João: Enviar contrato",
            ]}
            x="33%"
            y="0%"
            rotate={1}
          />
          <MeetingCard
            delay={1.3}
            title="Planejamento Q3"
            tasks={[
              "Meta: R$1M ARR",
              "Equipe dobra em julho",
              "Novo produto em set.",
            ]}
            x="62%"
            y="12%"
            rotate={3}
          />
          {/* Connecting arrow animation */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "left center" }}
            className="absolute top-1/2 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-current rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Demo / Search Section ────────────────────────────────────────────────────

function DemoSection() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const placeholder = "Cole o link de uma reunião (Zoom, Meet, Teams)...";

  const handleSubmit = () => {
    if (!value.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setValue("");
  };

  return (
    <section id="demo" className="py-24 md:py-32 relative">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <Reveal>
          <Badge
            variant="outline"
            className="mb-6 rounded-full px-4 py-1.5 text-muted-foreground border-border"
          >
            Experimente agora
          </Badge>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Comece com uma reunião
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Cole o link de uma gravação ou faça upload do áudio. A IA cuida do
            resto em menos de 60 segundos.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <motion.div
            animate={
              focused
                ? { boxShadow: "0 0 0 4px hsl(var(--primary) / 0.15)" }
                : { boxShadow: "0 0 0 0px transparent" }
            }
            className="relative flex items-center rounded-2xl border border-border bg-background p-2 gap-2 transition-colors"
          >
            <div
              className={`flex items-center gap-3 flex-1 px-4 py-3 ${
                focused ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              <Mic
                className={`w-5 h-5 shrink-0 transition-colors ${
                  focused ? "text-primary" : ""
                }`}
              />
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder={placeholder}
                className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
              />
            </div>
            <Button
              onClick={handleSubmit}
              className="rounded-xl h-11 px-6 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25 shrink-0"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.span
                    key="done"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Processando...
                  </motion.span>
                ) : (
                  <motion.span
                    key="go"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    Analisar <ArrowRight className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </Reveal>

        {/* Quick options */}
        <Reveal delay={0.4}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="text-muted-foreground">Ou conecte direto:</span>
            {["Google Meet", "Zoom", "Microsoft Teams"].map((app) => (
              <motion.button
                key={app}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors bg-secondary/30"
              >
                {app}
              </motion.button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Benefits ─────────────────────────────────────────────────────────────────

function BenefitsSection() {
  const benefits = [
    {
      icon: Mic,
      color: "text-primary",
      bg: "bg-primary/10",
      title: "Grave sem preocupação",
      desc: "Foco total na conversa. O Notura captura e transcreve cada palavra com precisão, mesmo com sotaques e jargões técnicos.",
    },
    {
      icon: Bot,
      color: "text-violet-500",
      bg: "bg-violet-500/10",
      title: "IA que realmente entende",
      desc: "Não é apenas transcrição. A IA identifica decisões, tarefas e responsáveis — estruturando o caos em clareza acionável.",
    },
    {
      icon: MessageSquare,
      color: "text-green-500",
      bg: "bg-green-500/10",
      title: "Direto no WhatsApp",
      desc: "Resumo formatado e enviado automaticamente para o grupo da equipe. Ninguém precisa abrir mais um app.",
    },
    {
      icon: TrendingUp,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      title: "+8h por semana",
      desc: "Elimine atas manuais, follow-ups perdidos e reuniões sobre reuniões. Tempo devolvido para o que realmente importa.",
    },
    {
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      title: "Execução 4× mais rápida",
      desc: "Da reunião à ação em menos de 60 segundos. Tarefas com responsável e prazo, prontas para executar.",
    },
    {
      icon: FileText,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      title: "Histórico pesquisável",
      desc: "Toda decisão, toda tarefa, todo contexto. Busque por qualquer reunião passada e encontre exatamente o que foi combinado.",
    },
  ];

  return (
    <section id="beneficios" className="py-24 md:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <Badge
              variant="outline"
              className="mb-6 rounded-full px-4 py-1.5 border-border text-muted-foreground"
            >
              Diferenciais
            </Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-5">
              O fim do trabalho invisível
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Tudo que você fazia manualmente depois das reuniões. Agora
              acontece automaticamente.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Card className="p-7 h-full border-border/50 bg-background hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group cursor-default">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.2 }}
                    className={`w-12 h-12 rounded-2xl ${b.bg} flex items-center justify-center mb-5 ${b.color}`}
                  >
                    <b.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How it Works ─────────────────────────────────────────────────────────────

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Mic,
      title: "Grave a reunião",
      desc: "Use o app no celular, grave direto pelo navegador ou conecte com Zoom, Meet ou Teams. Sem configuração complicada.",
      color: "primary",
    },
    {
      number: "02",
      icon: Bot,
      title: "IA processa tudo",
      desc: "Em menos de 60 segundos, a IA transcreve, identifica participantes, extrai decisões e cria tarefas com responsáveis.",
      color: "violet",
    },
    {
      number: "03",
      icon: MessageSquare,
      title: "WhatsApp entrega",
      desc: "O resumo formatado vai direto para o grupo da equipe. Todos alinhados, sem esforço, sem abrir outro aplicativo.",
      color: "green",
    },
  ];

  const colorMap: Record<string, string> = {
    primary: "bg-primary/10 text-primary border-primary/20",
    violet: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    green: "bg-green-500/10 text-green-500 border-green-500/20",
  };

  const lineColorMap: Record<string, string> = {
    primary: "from-primary",
    violet: "from-violet-500",
    green: "from-green-500",
  };

  return (
    <section id="como-funciona" className="py-24 md:py-36 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal>
            <Badge
              variant="outline"
              className="mb-6 rounded-full px-4 py-1.5 border-border text-muted-foreground"
            >
              Como funciona
            </Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-5">
              Do áudio à ação
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">
                em 3 passos.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-[3.5rem] left-[16.67%] right-[16.67%] h-0.5 bg-border" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            style={{ transformOrigin: "left center" }}
            className="hidden md:block absolute top-[3.5rem] left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary via-violet-500 to-green-500"
          />

          <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center md:items-center">
                  <motion.div
                    whileInView={{ scale: [0.7, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
                    className={`w-16 h-16 rounded-2xl border-2 ${colorMap[step.color]} flex items-center justify-center mb-6 bg-background relative`}
                  >
                    <step.icon className="w-7 h-7" />
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center">
                      <span className="text-[10px] font-bold text-muted-foreground">
                        {step.number}
                      </span>
                    </div>
                  </motion.div>
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Numbers Section ──────────────────────────────────────────────────────────

function NumbersSection() {
  const stats = [
    { value: 2000, suffix: "+", label: "Equipes ativas", prefix: "" },
    { value: 73, suffix: "%", label: "Menos tempo em atas", prefix: "−" },
    { value: 8, suffix: "h", label: "Recuperadas por semana", prefix: "+" },
    { value: 98, suffix: "%", label: "Decisões registradas", prefix: "" },
  ];

  return (
    <section id="numeros" className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/10 rounded-full"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violet-500/10 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Resultados que falam por si
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Dados reais de equipes que pararam de perder tempo com trabalho
              invisível.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="font-display text-4xl md:text-6xl font-bold text-white mb-2">
                  <CountUp
                    to={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-zinc-400 text-sm font-medium">{stat.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <TestimonialCarousel />
      </div>
    </section>
  );
}

// ─── Testimonial Carousel ─────────────────────────────────────────────────────

const testimonials = [
  {
    text: "A gente achava que precisava contratar mais pessoas. Descobrimos que só precisávamos organizar o ruído. O Notura devolveu a agilidade que tínhamos quando éramos apenas 5 pessoas.",
    name: "Carolina Mendes",
    role: "VP de Operações, TechNova",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    text: "Paramos de ter reuniões sobre reuniões. Tudo que é decidido chega direto no WhatsApp do time. A execução ficou 3× mais rápida desde que adotamos o Notura.",
    name: "Pedro Almeida",
    role: "CEO, Construtora Almeida",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    text: "Eu era o cara que ficava 45 minutos escrevendo ata depois de cada call. Hoje, enquanto a reunião termina, o resumo já está no grupo. Não consigo imaginar trabalhar sem isso.",
    name: "Bruno Santos",
    role: "Head de Produto, Fintech X",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12">
        <div className="flex gap-1 mb-6">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-8"
          >
            "{testimonials[idx].text}"
          </motion.blockquote>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`author-${idx}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonials[idx].avatar}
                alt={testimonials[idx].name}
                className="w-12 h-12 rounded-full border-2 border-white/20"
              />
              <div>
                <p className="font-bold text-white">{testimonials[idx].name}</p>
                <p className="text-zinc-400 text-sm">{testimonials[idx].role}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/60 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/60 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}>
              <motion.div
                animate={{ width: i === idx ? 24 : 8 }}
                className="h-2 rounded-full bg-primary"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section id="cta" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-violet-500/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10 max-w-4xl mx-auto text-center">
        <Reveal>
          <Badge
            variant="outline"
            className="mb-8 rounded-full px-5 py-2 border-primary/30 bg-primary/5 text-primary"
          >
            Comece hoje
          </Badge>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Pare de anotar.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-blue-500">
              Comece a executar.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Mais de 2.000 equipes já pararam de perder tempo com atas e
            cobranças. Configure em 5 minutos e veja a diferença na primeira
            reunião.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="lg"
                className="rounded-full h-16 px-10 bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/30 text-lg font-bold group"
              >
                Começar agora — é grátis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-16 px-10 text-lg font-semibold bg-background/50 backdrop-blur-sm border-border"
              >
                Falar com vendas
              </Button>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <p className="mt-6 text-sm text-muted-foreground">
            Sem cartão de crédito · Setup em 5 minutos · Cancele quando quiser
          </p>
        </Reveal>

        {/* Social proof avatars */}
        <Reveal delay={0.55}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-background bg-muted overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Junte-se a +2.000 equipes eficientes
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-14 border-t border-border bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold">
                N
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                Notura
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A IA que transforma reuniões em ação. Resumos automáticos direto
              no WhatsApp da sua equipe.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Produto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button
                    onClick={() =>
                      document
                        .querySelector("#como-funciona")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-foreground transition-colors"
                  >
                    Como funciona
                  </button>
                </li>
                <li>
                  <Link
                    href="/produtividade"
                    className="hover:text-foreground transition-colors"
                  >
                    Produtividade
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Preços
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Empresa</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Termos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <p>© 2024 Notura. Feito com amor no Brasil. 🇧🇷</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────────

function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <DemoSection />
        <BenefitsSection />
        <HowItWorksSection />
        <NumbersSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

// ─── Router ───────────────────────────────────────────────────────────────────

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/produtividade" component={Produtividade} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
