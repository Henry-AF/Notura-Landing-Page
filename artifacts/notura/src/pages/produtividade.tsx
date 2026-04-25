import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Clock,
  Zap,
  CheckCircle2,
  Bot,
  Sparkles,
  TrendingUp,
  Target,
  Mic,
  FileText,
  MessageSquare,
  Calendar as CalendarIcon,
  Play,
  Workflow,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    let startTime: number | null = null;
    let animationFrame: number;
    const updateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const currentVal = from + (to - from) * ease;
      setValue(currentVal);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      } else {
        setValue(to);
      }
    };
    animationFrame = requestAnimationFrame(updateValue);
    return () => cancelAnimationFrame(animationFrame);
  }, [to, from, duration, inView]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Resultados", href: "#resultados" },
    { label: "Depoimento", href: "#depoimento" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between h-16 md:h-18">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-sm">
            N
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-foreground">
            Notura
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Entrar
          </Link>
          <Button
            className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 h-9 px-5 text-sm"
            onClick={() => scrollTo("#cta")}
          >
            Começar grátis
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container px-4 pb-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="rounded-full bg-primary text-white mt-2"
                onClick={() => scrollTo("#cta")}
              >
                Começar grátis
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity1 = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-36 overflow-hidden flex flex-col items-center justify-center min-h-[92vh]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        style={{ y: y1, opacity: opacity1 }}
        className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center"
      >
        <Badge
          variant="outline"
          className="mb-8 rounded-full px-4 py-1.5 border-primary/30 text-primary bg-primary/5 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Produtividade Redefinida
        </Badge>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 max-w-5xl">
          Recupere{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-500 to-blue-500">
            <CountUp to={8} prefix="+" suffix="h" /> por semana
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          A IA que devolve o tempo da sua equipe. Transforme horas de reuniões e
          anotações manuais em{" "}
          <strong className="text-foreground">ações claras em minutos</strong>.
        </p>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
          <Button
            size="lg"
            className="rounded-full h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 text-base font-semibold group"
            onClick={() => {
              const el = document.querySelector("#cta");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Começar grátis
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-14 px-8 text-base font-semibold bg-background/50 backdrop-blur-sm border-border"
            onClick={() => {
              const el = document.querySelector("#como-funciona");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Play className="mr-2 w-4 h-4" fill="currentColor" />
            Ver em ação
          </Button>
        </div>

        <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Sem cartão de crédito
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Setup em 5 minutos
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Cancele quando quiser
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 hidden lg:flex items-center gap-3 p-4 rounded-2xl bg-background/60 backdrop-blur-xl border border-border shadow-2xl"
      >
        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold">Resumo gerado</p>
          <p className="text-xs text-muted-foreground">Há 2 minutos</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 hidden lg:flex items-center gap-3 p-4 rounded-2xl bg-background/60 backdrop-blur-xl border border-border shadow-2xl"
      >
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Target className="w-5 h-5 text-primary" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold">5 tarefas criadas</p>
          <p className="text-xs text-muted-foreground">Enviadas p/ WhatsApp</p>
        </div>
      </motion.div>
    </section>
  );
}

function ComparisonSection() {
  const semNotura = [
    { time: "09:00", title: "Reunião de Alinhamento", duration: "1h 30m", desc: "Anotações espalhadas em 3 docs diferentes" },
    { time: "10:30", title: "Escrever Ata", duration: "45m", desc: "Tentando lembrar o que foi decidido" },
    { time: "14:00", title: "Reunião com Cliente", duration: "1h", desc: "Foco dividido entre ouvir e anotar" },
    { time: "15:00", title: "Follow-up", duration: "30m", desc: "Enviando mensagens manuais cobrando status" },
  ];
  const comNotura = [
    { time: "09:00", title: "Reunião de Alinhamento", duration: "45m", desc: "Foco total na conversa", type: "meeting" },
    { time: "09:45", title: "Resumo + Tarefas geradas", duration: "Instantâneo", desc: "Enviado direto pro WhatsApp do time", type: "ai" },
    { time: "10:00", title: "Trabalho Profundo", duration: "2h 30m", desc: "Executando o que realmente importa", type: "work" },
    { time: "14:00", title: "Reunião com Cliente", duration: "45m", desc: "Com transcrição e tradução em tempo real", type: "meeting" },
    { time: "14:45", title: "Insights p/ CRM", duration: "Instantâneo", desc: "Dados estruturados pela IA", type: "ai" },
  ];

  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-6 rounded-full px-4 py-1.5 border-border text-muted-foreground">
            Antes vs. Depois
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            O fim do caos operacional
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Veja como uma semana típica se transforma quando a inteligência
            artificial cuida do trabalho invisível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8 opacity-70">
              <div className="w-3 h-3 rounded-full bg-zinc-400" />
              <h3 className="text-xl font-bold text-zinc-500">Sem Notura</h3>
            </div>
            <div className="space-y-4 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-800" />
              {semNotura.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 relative z-10 grayscale opacity-80"
                >
                  <div className="w-10 text-xs font-medium text-zinc-500 pt-3">
                    {item.time}
                  </div>
                  <Card className="flex-1 p-4 bg-zinc-200 dark:bg-zinc-800 text-zinc-500 border-transparent shadow-none">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold">{item.title}</h4>
                      <span className="text-xs opacity-70">{item.duration}</span>
                    </div>
                    <p className="text-sm opacity-70">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <h3 className="text-xl font-bold text-foreground">Com Notura</h3>
            </div>
            <div className="space-y-4 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-primary/20" />
              {comNotura.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4 relative z-10"
                >
                  <div className="w-10 text-xs font-medium text-muted-foreground pt-3">
                    {item.time}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`flex-1 p-4 rounded-xl border shadow-sm transition-all ${
                      item.type === "ai"
                        ? "bg-primary/10 border-primary/20 ring-1 ring-primary/10"
                        : item.type === "work"
                        ? "bg-blue-500/10 border-blue-500/20"
                        : "bg-background border-border"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4
                        className={`font-semibold ${
                          item.type === "ai"
                            ? "text-primary"
                            : item.type === "work"
                            ? "text-blue-500"
                            : "text-foreground"
                        }`}
                      >
                        {item.type === "ai" && (
                          <Sparkles className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                        )}
                        {item.title}
                      </h4>
                      <Badge
                        variant="secondary"
                        className="text-[10px] px-1.5 py-0 h-5"
                      >
                        {item.duration}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  const metrics = [
    { label: "Tempo gasto em ata", value: 73, prefix: "−", suffix: "%", color: "text-green-500", icon: Clock },
    { label: "Velocidade de execução", value: 4.2, prefix: "+", suffix: "x", decimals: 1, color: "text-blue-500", icon: Zap },
    { label: "Horas livres na semana", value: 12, prefix: "+", suffix: "h", color: "text-primary", icon: TrendingUp },
    { label: "Decisões registradas", value: 98, prefix: "", suffix: "%", color: "text-indigo-500", icon: Target },
  ];

  return (
    <section id="resultados" className="py-20 bg-background relative z-10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">
            Números que falam por si
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 h-full flex flex-col items-center text-center justify-center border-border/50 bg-secondary/20 hover:bg-secondary/50 transition-colors">
                <div
                  className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-background shadow-sm border border-border/50 ${metric.color}`}
                >
                  <metric.icon className="w-6 h-6" />
                </div>
                <div
                  className={`text-4xl md:text-5xl font-display font-bold tracking-tight mb-2 ${metric.color}`}
                >
                  <CountUp
                    to={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                  />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {metric.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LoopSection() {
  const steps = [
    { icon: Mic, label: "Reunião" },
    { icon: Bot, label: "IA Organiza" },
    { icon: FileText, label: "Tarefas" },
    { icon: MessageSquare, label: "WhatsApp" },
    { icon: CheckCircle2, label: "Execução" },
  ];

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
          O Fluxo Contínuo de Valor
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-xl mx-auto">
          Do áudio bruto à execução real, em menos de 60 segundos.
        </p>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary -translate-y-1/2 hidden md:block rounded-full" />
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-green-500 -translate-y-1/2 hidden md:block rounded-full"
            initial={{ right: "100%" }}
            whileInView={{ right: "0%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8 md:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.4 + 0.2, duration: 0.5, type: "spring" }}
                className="flex flex-col items-center bg-background px-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-background border-2 border-border shadow-xl flex items-center justify-center mb-4 relative group"
                >
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon
                    className={`w-8 h-8 md:w-10 md:h-10 ${
                      i === steps.length - 1 ? "text-green-500" : "text-primary"
                    }`}
                  />
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    whileInView={{ scale: 1.5, opacity: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.4 + 0.5, duration: 1 }}
                    className="absolute inset-0 rounded-2xl border-2 border-primary"
                  />
                </motion.div>
                <span className="font-semibold md:text-lg">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-zinc-950 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            De ruído a clareza
          </h2>
          <p className="text-lg text-zinc-400">
            A mágica acontece na extração do que importa. Alterne para ver a
            transformação.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-zinc-900 p-1 rounded-full flex relative">
              <motion.div
                className="absolute inset-y-1 w-[calc(50%-0.25rem)] bg-primary rounded-full"
                animate={{ left: isAfter ? "50%" : "0.25rem" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button
                onClick={() => setIsAfter(false)}
                className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  !isAfter ? "text-white" : "text-zinc-400"
                }`}
              >
                Transcrição Bruta
              </button>
              <button
                onClick={() => setIsAfter(true)}
                className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  isAfter ? "text-white" : "text-zinc-400"
                }`}
              >
                Resultado Notura
              </button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[340px] rounded-3xl overflow-hidden border border-zinc-800 bg-black shadow-2xl">
            <AnimatePresence mode="wait">
              {!isAfter ? (
                <motion.div
                  key="before"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-8 flex items-center justify-center"
                >
                  <p className="text-zinc-500 font-mono text-sm leading-relaxed max-w-2xl blur-[1px] hover:blur-none transition-all">
                    "...então acho que a gente devia focar no onboarding,
                    porque o João falou ontem que a taxa de drop tá meio alta,
                    né? Mas aí tem a questão da API de pagamentos que a Maria
                    tava vendo. Ah, João, você consegue terminar aquele doc
                    até sexta? A Maria disse que a API tá quase lá, mas
                    precisa de revisão. E o banner da home, a gente muda pra
                    azul ou deixa roxo mesmo? Enfim, vamos marcar outra call
                    na quarta pra ver tudo isso. Alguém anotou o lance do
                    banco de dados? Ah, depois eu vejo na gravação..."
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="after"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-8 bg-zinc-900/50 flex flex-col justify-center"
                >
                  <div className="space-y-6 max-w-2xl mx-auto w-full">
                    <div>
                      <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" /> Decisões Principais
                      </h4>
                      <ul className="space-y-2 text-sm text-zinc-300">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
                          Foco prioritário no fluxo de onboarding
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
                          Nova reunião de alinhamento marcada para Quarta-feira
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                        <Workflow className="w-5 h-5" /> Tarefas (Enviadas p/
                        WhatsApp)
                      </h4>
                      <ul className="space-y-3 text-sm">
                        <li className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <span>Finalizar documentação do Onboarding</span>
                          <Badge
                            variant="outline"
                            className="text-zinc-400 border-zinc-700"
                          >
                            João • Sex
                          </Badge>
                        </li>
                        <li className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center">
                          <span>Revisão final da API de Pagamentos</span>
                          <Badge
                            variant="outline"
                            className="text-zinc-400 border-zinc-700"
                          >
                            Maria
                          </Badge>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarVisualSection() {
  return (
    <section className="py-24 md:py-32 overflow-hidden relative bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl"
          >
            <Badge className="mb-6 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-none rounded-full px-4 py-1.5">
              Gestão de Tempo
            </Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Sua agenda, finalmente respirando.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Quando você elimina o tempo gasto organizando informações e
              cobrando tarefas, blocos inteiros da sua agenda são liberados
              para o que realmente importa: pensar, criar e liderar.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-medium">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="opacity-70 line-through">
                  Reuniões para alinhar a última reunião
                </span>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="opacity-70 line-through">
                  1 hora escrevendo ata
                </span>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Trabalho profundo sem interrupções</span>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Tempo livre para estratégia</span>
              </li>
            </ul>
          </motion.div>

          <div className="relative">
            <Card className="p-4 md:p-6 bg-secondary/50 border-border/50 shadow-2xl rounded-2xl overflow-hidden backdrop-blur-sm">
              <div className="flex gap-4 mb-4 items-center">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-sm font-medium opacity-50 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" /> Semana Atual
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2 h-[300px]">
                {[...Array(5)].map((_, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-2 relative">
                    <div className="text-center text-xs font-medium text-muted-foreground mb-2">
                      {["Seg", "Ter", "Qua", "Qui", "Sex"][colIndex]}
                    </div>
                    <motion.div
                      className="absolute top-8 left-0 right-0 bg-red-500/20 border border-red-500/30 rounded-md z-10"
                      initial={{ height: "120px" }}
                      whileInView={{ height: "40px" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, delay: colIndex * 0.1, ease: "circOut" }}
                    />
                    <motion.div
                      className="absolute top-[160px] left-0 right-0 bg-orange-500/20 border border-orange-500/30 rounded-md z-10"
                      initial={{ height: "80px" }}
                      whileInView={{ height: "0px", opacity: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, delay: colIndex * 0.1 + 0.2, ease: "circOut" }}
                    />
                    <motion.div
                      className="absolute top-[80px] left-0 right-0 bg-blue-500/20 border border-blue-500/30 rounded-md z-0 flex items-center justify-center overflow-hidden"
                      initial={{ height: "0px", opacity: 0 }}
                      whileInView={{ height: "120px", opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, delay: colIndex * 0.1 + 0.5, ease: "circOut" }}
                    >
                      <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 rotate-90 md:rotate-0 whitespace-nowrap">
                        Trabalho Profundo
                      </span>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-primary/10 border border-primary/20 rounded-md z-0 flex items-center justify-center"
                      initial={{ height: "0px", opacity: 0 }}
                      whileInView={{ height: "80px", opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, delay: colIndex * 0.1 + 0.8, ease: "circOut" }}
                    >
                      <span className="text-[10px] font-semibold text-primary">
                        Tempo Livre
                      </span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section id="depoimento" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8 flex justify-center">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Sparkles
                  key={star}
                  className="w-6 h-6 text-yellow-300 fill-yellow-300"
                />
              ))}
            </div>
          </div>
          <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-medium leading-tight mb-10">
            "A gente achava que precisava contratar mais pessoas. Descobrimos
            que só precisávamos organizar o ruído. O Notura devolveu a
            agilidade que tínhamos quando éramos apenas 5 pessoas."
          </h3>
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src="https://i.pravatar.cc/150?img=47"
              alt="Carolina Mendes"
              className="w-16 h-16 rounded-full border-4 border-white/20"
            />
            <div>
              <p className="font-bold text-lg">Carolina Mendes</p>
              <p className="text-primary-foreground/70">
                VP de Operações, TechNova
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="py-32 relative">
      <div className="container px-4 md:px-6">
        <Card className="max-w-5xl mx-auto bg-zinc-950 text-white border-zinc-800 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/30 rounded-full blur-[120px] pointer-events-none" />

          <div className="p-12 md:p-20 text-center relative z-10 flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Pronto para recuperar <br /> suas horas?
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl">
              Junte-se a mais de 2.000 equipes que pararam de perder tempo com
              atas, cobranças e follow-ups manuais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                className="rounded-full h-14 px-10 bg-white text-black hover:bg-zinc-200 text-lg font-bold shadow-2xl"
              >
                Começar agora — grátis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-10 border-zinc-700 text-white hover:bg-zinc-800 text-lg font-medium bg-transparent"
              >
                Falar com vendas
              </Button>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              Não requer cartão de crédito. Setup em 2 minutos. Cancele quando quiser.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold">
                N
              </div>
              <span className="font-display font-bold tracking-tight text-foreground">
                Notura
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A IA que transforma reuniões em ação. Resumos automáticos direto
              no WhatsApp da sua equipe.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Produto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/" className="hover:text-foreground transition-colors">Homepage</Link></li>
                <li><a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a></li>
                <li><a href="#resultados" className="hover:text-foreground transition-colors">Resultados</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Empresa</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Termos</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-muted-foreground">
            © 2024 Notura. Feito com amor no Brasil. 🇧🇷
          </p>
          <p className="text-sm text-muted-foreground">
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Produtividade() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background text-foreground selection:bg-primary/30">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <ComparisonSection />
        <MetricsSection />
        <LoopSection />
        <BeforeAfterSection />
        <CalendarVisualSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
