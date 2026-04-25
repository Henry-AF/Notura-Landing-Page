import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, Mic, Play, Check, Users, Clock, Zap, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CountUp = ({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    const duration = 2000;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * to));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [to]);

  return <span>{prefix}{count.toLocaleString("pt-BR")}{suffix}</span>;
};

export function Social() {
  const [activeTab, setActiveTab] = useState<"raw" | "structured">("raw");

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-50 font-sans selection:bg-indigo-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0f1e]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight">Notura</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
            <a href="#casos-de-uso" className="hover:text-white transition-colors">Casos de Uso</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
            <a href="#precos" className="hover:text-white transition-colors">Preços</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex text-slate-300 hover:text-white hover:bg-white/5">
              Entrar
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6">
              Começar Grátis
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Headline & Floating Quotes */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Junte-se à revolução da produtividade
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">+8 horas</span> por semana devolvidas à sua equipe
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                Pare de perder tempo com anotações manuais. O Notura transforma suas reuniões em resumos, tarefas e mensagens no WhatsApp instantaneamente.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 h-14 text-lg">
                  Testar Gratuitamente <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Floating Testimonial Cards */}
              <div className="relative mt-8 h-48 sm:h-32 hidden md:block">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-0 left-0 bg-[#131b2f] border border-white/10 p-3 rounded-2xl shadow-xl flex items-start gap-3 max-w-[280px]"
                >
                  <Avatar className="w-8 h-8 border border-indigo-500/30">
                    <AvatarFallback className="bg-indigo-900 text-indigo-200 text-xs">MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs text-slate-300 leading-snug">"Economizamos 40 horas no primeiro mês."</p>
                    <p className="text-[10px] text-slate-500 mt-1">Mariana R., Tech Lead</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-12 left-64 bg-[#131b2f] border border-white/10 p-3 rounded-2xl shadow-xl flex items-start gap-3 max-w-[280px]"
                >
                  <Avatar className="w-8 h-8 border border-emerald-500/30">
                    <AvatarFallback className="bg-emerald-900 text-emerald-200 text-xs">LC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs text-slate-300 leading-snug">"As tarefas vão direto pro Jira agora. Mágico."</p>
                    <p className="text-[10px] text-slate-500 mt-1">Lucas C., Product Manager</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Metric Counter */}
            <div className="relative lg:h-[600px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-violet-600/20 blur-[100px] rounded-full" />
              
              <div className="relative z-10 bg-[#131b2f]/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-md w-full text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/20 mb-6">
                  <Users className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-6xl md:text-7xl font-bold tracking-tighter mb-2 text-white">
                  <CountUp to={2847} />
                </h3>
                <p className="text-xl text-indigo-300 font-medium mb-8">equipes ativas</p>
                
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
                
                <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold mb-2">Impacto Real</p>
                <p className="text-3xl font-bold text-white mb-2">
                  <CountUp to={340000} suffix="+" />
                </p>
                <p className="text-slate-400">horas economizadas este mês</p>

                <div className="mt-8 flex justify-center -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Avatar key={i} className="w-10 h-10 border-2 border-[#131b2f]">
                      <AvatarFallback className={`bg-gradient-to-br from-indigo-500 to-violet-600 text-xs text-white`}>U{i}</AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#131b2f] bg-slate-800 flex items-center justify-center text-xs font-medium z-10">
                    +2k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Strip */}
        <section className="border-y border-white/5 bg-white/[0.02] py-10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mb-8">Usado por equipes de</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-bold tracking-tighter flex items-center gap-2"><div className="w-6 h-6 rounded-sm bg-current" /> AGÊNCIA NOVA</span>
              <span className="text-xl font-bold tracking-widest flex items-center gap-2"><Zap className="w-6 h-6" /> TECHSTART</span>
              <span className="text-xl font-serif italic flex items-center gap-2">Construtora Beta</span>
              <span className="text-xl font-black uppercase flex items-center gap-2"><div className="w-6 h-6 rounded-full border-4 border-current" /> Grupo Global</span>
              <span className="text-xl font-medium tracking-tight flex items-center gap-2">Fintech Labs</span>
            </div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="py-24 container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#131b2f] to-[#0d1324] border border-white/10 rounded-3xl p-8 md:p-16 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 text-indigo-500/10">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L16.41 14.426C16.891 13.067 17.514 12.186 18.28 11.782C19.046 11.378 20.064 11.176 21.333 11.176V4H14.153C13.255 7.158 12.59 9.873 12.158 12.146C11.727 14.419 11.295 17.371 10.864 21H14.017ZM6.166 21L8.558 14.426C9.039 13.067 9.663 12.186 10.428 11.782C11.194 11.378 12.213 11.176 13.481 11.176V4H6.302C5.404 7.158 4.739 9.873 4.307 12.146C3.876 14.419 3.444 17.371 3.013 21H6.166Z" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start">
              <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-indigo-500/30">
                <AvatarFallback className="bg-indigo-900 text-indigo-200 text-3xl font-bold">CM</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-2xl md:text-4xl font-medium leading-tight mb-8 text-white">
                  "Antes gastávamos 3 horas por reunião só em ata e follow-up. Hoje o Notura cuida de tudo em 2 minutos. É a ferramenta que mais gerou ROI pra gente neste ano."
                </blockquote>
                <div>
                  <div className="font-bold text-xl text-white">Carlos M.</div>
                  <div className="text-indigo-400 font-medium">Head of Operations, LogTech SA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Bar */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { stat: "-73%", label: "tempo em atas", icon: Clock },
              { stat: "+4.2x", label: "velocidade de execução", icon: Zap },
              { stat: "+12h", label: "livres por semana", icon: CheckCircle2 },
              { stat: "98%", label: "decisões registradas", icon: FileText }
            ].map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-[#131b2f]/50 border border-white/5 rounded-2xl">
                <metric.icon className="w-8 h-8 text-indigo-500 mb-4 opacity-80" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{metric.stat}</div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-black/20" id="como-funciona">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Como devolvemos seu tempo</h2>
              <p className="text-xl text-slate-400">Um processo invisível que transforma conversa em ação.</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto relative">
              {/* Connector line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/20 via-indigo-500/50 to-indigo-500/20 -translate-y-1/2 z-0" />
              
              {[
                { step: "1", title: "Reunião", desc: "Acontece normalmente no Meet, Zoom ou Teams.", icon: Mic },
                { step: "2", title: "IA Organiza", desc: "Transcreve e estrutura os pontos principais.", icon: Zap },
                { step: "3", title: "Tarefas", desc: "Delega as ações no seu gerenciador (Jira, Trello).", icon: CheckCircle2 },
                { step: "4", title: "WhatsApp", desc: "Envia o resumo no grupo da equipe.", icon: MessageSquare },
                { step: "5", title: "Execução", desc: "A equipe começa a trabalhar sem dúvidas.", icon: ArrowRight }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                  <div className="w-16 h-16 rounded-2xl bg-[#131b2f] border border-indigo-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]">
                    <item.icon className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div className="text-sm font-bold text-indigo-400 mb-2 tracking-widest uppercase">Passo {item.step}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After Toggle */}
        <section className="py-24 container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">A diferença é clara</h2>
            <p className="text-xl text-slate-400">Veja como o Notura estrutura a bagunça.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#131b2f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex border-b border-white/10 p-2">
              <button
                onClick={() => setActiveTab("raw")}
                className={`flex-1 py-4 text-center font-medium rounded-xl transition-all ${activeTab === "raw" ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"}`}
              >
                Transcrição Crua
              </button>
              <button
                onClick={() => setActiveTab("structured")}
                className={`flex-1 py-4 text-center font-medium rounded-xl transition-all ${activeTab === "structured" ? "bg-indigo-600 text-white shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]" : "text-slate-400 hover:text-white"}`}
              >
                Output Notura ✨
              </button>
            </div>
            <div className="p-8 md:p-12 min-h-[400px]">
              {activeTab === "raw" ? (
                <div className="space-y-4 font-mono text-sm text-slate-400">
                  <p>"É... bom, acho que a gente precisa ver aquela questão do layout do app. O João falou que o botão de comprar tá meio escondido."</p>
                  <p>"Sim, verdade. A Maria pode pegar isso pra ver amanhã? Tem que trocar a cor pra verde eu acho."</p>
                  <p>"Beleza, eu vejo isso. E sobre o banco de dados? O Pedro disse que tava lento."</p>
                  <p>"Ah sim, o Pedro vai otimizar as queries na sprint que vem. Ele disse que até sexta que vem entrega."</p>
                  <p>"Top. Alguém avisa o cliente dessas mudanças?"</p>
                  <p>"Deixa que eu aviso ele amanhã de manhã no grupo do whats."</p>
                </div>
              ) : (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                      <FileText className="w-5 h-5 text-indigo-400" /> Resumo
                    </h3>
                    <p className="text-slate-300">A equipe discutiu melhorias na conversão do app, performance do banco de dados e alinhamento de comunicação com o cliente.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400" /> Ações Definidas
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Alterar cor do botão de compra para verde</p>
                          <p className="text-sm text-slate-400">Responsável: Maria • Prazo: Amanhã</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Otimizar queries do banco de dados</p>
                          <p className="text-sm text-slate-400">Responsável: Pedro • Prazo: Sexta-feira</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Avisar cliente sobre mudanças de layout</p>
                          <p className="text-sm text-slate-400">Responsável: João • Prazo: Amanhã de manhã</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* More Testimonials Grid */}
        <section className="py-24 container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Equipes que já não vivem sem</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Minha equipe odiava fazer atas. Agora ninguém precisa fazer, e a qualidade da documentação aumentou absurdamente.",
                name: "Julia F.",
                role: "Diretora de Arte",
                color: "bg-pink-600",
                initials: "JF"
              },
              {
                quote: "O fluxo direto pro WhatsApp é genial. Saímos da reunião e o resumo já está no grupo dos stakeholders. Perfeito.",
                name: "Roberto S.",
                role: "CEO, Agência Digital",
                color: "bg-blue-600",
                initials: "RS"
              },
              {
                quote: "Reduzimos as falhas de comunicação em 90%. Tudo que é dito vira tarefa com responsável. Não tem como fugir.",
                name: "Amanda L.",
                role: "Scrum Master",
                color: "bg-orange-600",
                initials: "AL"
              }
            ].map((t, i) => (
              <Card key={i} className="bg-[#131b2f] border-white/10 hover:border-indigo-500/50 transition-colors">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6 text-indigo-500">
                    <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 18L16.41 11.426C16.891 10.067 17.514 9.186 18.28 8.782C19.046 8.378 20.064 8.176 21.333 8.176V1H14.153C13.255 4.158 12.59 6.873 12.158 9.146C11.727 11.419 11.295 14.371 10.864 18H14.017ZM6.166 18L8.558 11.426C9.039 10.067 9.663 9.186 10.428 8.782C11.194 8.378 12.213 8.176 13.481 8.176V1H6.302C5.404 4.158 4.739 6.873 4.307 9.146C3.876 11.419 3.444 14.371 3.013 18H6.166Z"/></svg>
                  </div>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className={`${t.color} text-white font-bold`}>{t.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-white">{t.name}</div>
                      <div className="text-sm text-slate-400">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Close */}
        <section className="py-24 container mx-auto px-4 md:px-6">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-center max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Junte-se a mais de 2.800 equipes</h2>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                Comece agora e veja a diferença na sua próxima reunião. Setup em 2 minutos. Cancele quando quiser.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-slate-100 rounded-full px-10 h-16 text-lg font-bold w-full sm:w-auto">
                  Começar Teste Grátis
                </Button>
                <p className="text-indigo-200 text-sm sm:ml-4">Nenhum cartão de crédito necessário</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-slate-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center grayscale">
              <Zap className="w-3 h-3 text-white fill-current" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-400">Notura</span>
          </div>
          <p>© 2024 Notura AI. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Social;
