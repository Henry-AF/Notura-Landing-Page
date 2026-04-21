import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, Router as WouterRouter, Link } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Produtividade from "@/pages/produtividade";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { Mic, Square, Check, CheckCheck, Clock, Settings, User, FileText, ArrowRight, Zap, RefreshCw, Smartphone, CheckCircle2, Play, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const queryClient = new QueryClient();

// --- Components ---

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/70 border-b border-white/10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold">N</div>
        <span className="font-display font-bold text-xl tracking-tight text-foreground">Notura</span>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <a href="#produto" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Produto</a>
        <Link href="/produtividade" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Produtividade</Link>
        <a href="#beneficios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Benefícios</a>
        <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Como funciona</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Entrar</a>
        <Button className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">Começar grátis</Button>
      </div>
    </nav>
  );
}

function PhoneMockup() {
  const [seconds, setSeconds] = useState(0);
  const [isRecording, setIsRecording] = useState(true);

  useEffect(() => {
    if (!isRecording) return;
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const waveBars = Array.from({ length: 40 });

  return (
    <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-zinc-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
        <div className="w-32 h-6 bg-zinc-800 rounded-b-3xl"></div>
      </div>

      {/* Screen Content */}
      <div className="absolute inset-0 bg-zinc-950 flex flex-col pt-12 pb-8 px-4 text-white">
        <div className="flex-1 flex flex-col items-center justify-center">
          
          <motion.div 
            animate={{ opacity: [1, 0.5, 1] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-500 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-medium uppercase tracking-wider">Gravando agora</span>
          </motion.div>

          <h2 className="text-2xl font-display font-medium text-center mb-2">Gravação em andamento</h2>
          
          <div className="text-5xl font-mono font-light text-zinc-400 mb-12 tracking-tight">
            {formatTime(seconds)}
          </div>

          <div className="w-full h-32 flex items-center justify-center gap-1 mb-12 relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            {waveBars.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: isRecording ? ["10%", `${Math.random() * 80 + 20}%`, "10%"] : "10%"
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.5 + Math.random() * 0.5,
                  delay: Math.random() * 0.2
                }}
                className="w-1.5 bg-primary rounded-full relative z-10"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center pb-6 relative z-10">
          <button 
            className="w-20 h-20 rounded-full border-4 border-zinc-800 flex items-center justify-center"
            onClick={() => setIsRecording(!isRecording)}
          >
            <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50">
              <Square className="w-5 h-5 text-white fill-white" />
            </div>
          </button>
        </div>
        <p className="text-center text-zinc-500 text-sm">Encerrar gravação</p>
      </div>

      {/* Glare effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
    </div>
  );
}

function WhatsAppBubble({ children, delay = 0, isRead = false }: { children: React.ReactNode, delay?: number, isRead?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95, originBottom: 1, originRight: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className="ml-auto w-fit max-w-[85%] bg-[#DCF8C6] dark:bg-[#005C4B] text-zinc-900 dark:text-zinc-100 p-3 rounded-2xl rounded-tr-sm shadow-sm relative group"
    >
      <div className="text-sm leading-relaxed whitespace-pre-wrap">{children}</div>
      <div className="flex justify-end items-center gap-1 mt-1 opacity-70">
        <span className="text-[10px]">10:42</span>
        {isRead ? (
          <CheckCheck className="w-3.5 h-3.5 text-blue-500 dark:text-[#53BDEB]" />
        ) : (
          <Check className="w-3.5 h-3.5" />
        )}
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors">
              ✨ A revolução das reuniões chegou
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              O resumo das reuniões para o WhatsApp em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">minutos</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Grave. A IA organiza. Sua equipe executa. Transforme áudio caótico em insights estruturados e ações claras, direto no grupo da equipe.
            </p>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
              <Button size="lg" className="rounded-full h-14 px-8 bg-foreground text-background hover:bg-foreground/90 shadow-xl dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 text-base font-semibold group">
                Testar gratuitamente
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base font-semibold bg-background/50 backdrop-blur-sm border-border">
                Ver demonstração
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden z-[${5-i}]`}>
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p>Junte-se a +2.000 líderes eficientes</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
            className="perspective-[1000px] flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TranscriptionSection() {
  const words = "Enquanto você fala, o Notura entende. Cada palavra é processada com precisão absoluta pela nossa inteligência artificial avançada. Sem perder o contexto. Sem esquecer detalhes.".split(" ");

  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden" id="produto">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            Transcreve no ritmo do seu pensamento
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A IA não apenas transcreve, mas compreende o jargão da sua empresa e o sotaque da sua equipe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          <Card className="p-8 border-border bg-background/50 backdrop-blur-sm shadow-xl min-h-[300px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-500 transform origin-left transition-transform duration-1000 group-hover:scale-x-100" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mic className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Gravando áudio...</p>
                <div className="flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <p className="text-xs text-muted-foreground">Ao vivo</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05 }
                  }
                }}
                className="text-xl md:text-2xl font-medium leading-relaxed"
              >
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className={`inline-block mr-1.5 ${['entende.', 'precisão', 'absoluta', 'inteligência', 'artificial'].includes(word) ? 'text-primary' : 'text-foreground/80'}`}
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-3 h-6 bg-primary ml-1 align-middle"
                />
              </motion.div>
            </div>
          </Card>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Reconhecimento de jargões</h3>
                <p className="text-muted-foreground">Aprende os termos específicos da sua indústria automaticamente.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Separação de locutores</h3>
                <p className="text-muted-foreground">Sabe exatamente quem disse o que, mesmo quando falam juntos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrganizeSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            Do caos à clareza estruturada
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A IA não faz apenas um resumo. Ela reestrutura a informação em tópicos, decisões e itens de ação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 h-full border-border/50 bg-background hover:border-primary/30 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="font-bold text-lg mb-4">Tópicos Discutidos</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span className="text-muted-foreground">Lançamento do novo app no Q3</span>
                </li>
                <li className="flex gap-2 items-start text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span className="text-muted-foreground">Orçamento de marketing</span>
                </li>
                <li className="flex gap-2 items-start text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span className="text-muted-foreground">Contratação de dev sênior</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 h-full border-border/50 bg-background hover:border-blue-500/30 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 relative z-10">
                <Settings className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="font-bold text-lg mb-4 relative z-10">Decisões Tomadas</h3>
              <ul className="space-y-3 relative z-10">
                <li className="flex gap-2 items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">Adiar o lançamento em 2 semanas</span>
                </li>
                <li className="flex gap-2 items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">Aumentar o budget em 15%</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 h-full border-border/50 bg-background hover:border-primary/30 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 ring-1 ring-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent pointer-events-none" />
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-4">Próximos Passos</h3>
              <ul className="space-y-4">
                <li className="bg-secondary p-3 rounded-lg text-sm border border-border">
                  <p className="font-medium text-foreground mb-1">Aprovar orçamento final</p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> Carlos</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Sexta</span>
                  </div>
                </li>
                <li className="bg-secondary p-3 rounded-lg text-sm border border-border">
                  <p className="font-medium text-foreground mb-1">Publicar vaga dev</p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> Marina</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Hoje</span>
                  </div>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppSection() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#25D366]/20 to-transparent blur-[100px] pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          <div>
            <Badge variant="outline" className="mb-6 rounded-full px-4 py-1 border-green-500/30 text-green-400 bg-green-500/10">
              O Momento Uau
            </Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-white">
              Direto no bolso da sua equipe.
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-8">
              Ninguém quer abrir mais um app para ler resumos. O Notura empacota o conhecimento e entrega no WhatsApp do grupo, formatado perfeitamente.
            </p>
            <ul className="space-y-4 mb-8">
              {['Formatação nativa maravilhosa', 'Envio automático pós-reunião', 'Acesso instantâneo para todos'].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-zinc-300 font-medium">{text}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-base h-14 px-8">
              Integrar WhatsApp agora
            </Button>
          </div>

          <div className="relative mx-auto w-full max-w-[360px] aspect-[9/19] bg-black/40 rounded-[40px] border-[8px] border-zinc-800 shadow-2xl p-4 overflow-hidden backdrop-blur-xl">
            {/* WA Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-zinc-800 mb-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <Users className="w-5 h-5 text-zinc-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Equipe de Produto</h4>
                <p className="text-xs text-zinc-500">Carlos, Marina, Você</p>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex flex-col space-y-4 pt-2">
              <div className="w-fit max-w-[80%] bg-zinc-800 p-3 rounded-2xl rounded-tl-sm text-sm text-zinc-300">
                Alguém anotou os combinados de hoje?
                <div className="text-[10px] text-zinc-500 mt-1">10:40</div>
              </div>

              <WhatsAppBubble delay={0.5} isRead={true}>
                <span className="font-bold">📝 Resumo: Sync Semanal</span>{'\n\n'}
                <span className="font-semibold">🎯 Decisões:</span>{'\n'}
                • Lançamento adiado para Q3{'\n'}
                • Budget de marketing +15%{'\n\n'}
                <span className="font-semibold">✅ Próximos Passos:</span>{'\n'}
                👉 @Carlos: Aprovar orçamento final (Sex){'\n'}
                👉 @Marina: Publicar vaga dev (Hoje){'\n\n'}
                <span className="italic text-xs opacity-70">Gerado por Notura ✨</span>
              </WhatsAppBubble>
            </div>
            
            {/* WA Input */}
            <div className="absolute bottom-4 left-4 right-4 h-12 rounded-full bg-zinc-800 flex items-center px-4">
              <div className="w-full text-sm text-zinc-500">Mensagem...</div>
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <Mic className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    { title: "Nunca mais perca uma ideia", desc: "A memória falha. O Notura lembra de cada palavra dita.", icon: <FileText className="w-6 h-6" /> },
    { title: "Reuniões mais produtivas", desc: "Foque na conversa, não nas anotações.", icon: <Users className="w-6 h-6" /> },
    { title: "Menos esforço manual", desc: "Economize horas por semana formatando atas e cobrando pessoas.", icon: <RefreshCw className="w-6 h-6" /> },
    { title: "Execução mais rápida", desc: "Da reunião para a ação em segundos, sem gargalos.", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 md:py-32 bg-background" id="beneficios">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            O fim do trabalho invisível
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-border/50 group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all text-muted-foreground duration-300">
                  {b.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-foreground">
            Pare de anotar.<br />Comece a executar.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Deixe o Notura cuidar das suas reuniões para você focar no que importa: liderar sua equipe e construir produtos incríveis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25 text-base font-semibold">
              Começar agora — É grátis
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base font-semibold bg-background">
              Falar com vendas
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-foreground flex items-center justify-center text-background text-xs font-bold">N</div>
          <span className="font-display font-bold tracking-tight text-foreground">Notura</span>
        </div>
        <p className="text-sm text-muted-foreground">© 2024 Notura. Feito com amor no Brasil.</p>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacidade</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Termos</a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background selection:bg-primary selection:text-white">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <TranscriptionSection />
        <OrganizeSection />
        <WhatsAppSection />
        <BenefitsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/produtividade" component={Produtividade} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
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

export default App;