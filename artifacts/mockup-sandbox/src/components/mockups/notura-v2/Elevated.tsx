import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Bot, 
  CheckCircle2, 
  Clock, 
  FileText, 
  MessageSquare, 
  Mic, 
  Play, 
  Users, 
  Zap,
  Sparkles,
  ChevronRight,
  BrainCircuit,
  Calendar,
  Check
} from 'lucide-react';

const AnimatedCounter = ({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let startTimestamp = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

export function Elevated() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [activeTab, setActiveTab] = useState<'raw' | 'structured'>('structured');

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Subtle Dot Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
             backgroundSize: '32px 32px' 
           }} 
      />
      
      {/* Global Ambient Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030712]/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium text-lg tracking-tight">Notura</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#solucao" className="hover:text-white transition-colors">Solução</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
            <a href="#comparativo" className="hover:text-white transition-colors">Comparativo</a>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors">
            Começar Grátis
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>A nova era da produtividade</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Reuniões que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                geram resultados.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-xl">
              O Notura transforma suas gravações em resumos estruturados, tarefas delegadas e mensagens de WhatsApp automaticamente. Pare de perder tempo com atas manuais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="h-12 px-6 rounded-full bg-indigo-600 text-white font-medium flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                Começar agora <ArrowRight className="w-4 h-4" />
              </button>
              <button className="h-12 px-6 rounded-full bg-white/5 text-white font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors border border-white/10">
                <Play className="w-4 h-4" /> Ver demonstração
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#030712] bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p>Junte-se a <strong className="text-slate-300">2.000+</strong> equipes ágeis</p>
            </div>
          </motion.div>

          {/* Hero Visual - Glassmorphism Product Card */}
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 blur-3xl rounded-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
              {/* Fake Window Header */}
              <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 text-xs font-medium text-slate-500 flex items-center gap-2">
                  <Mic className="w-3 h-3 text-red-400" /> Gravação finalizada
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Alinhamento de Produto Q3</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> Hoje, 14:00</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> 45 min</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-medium rounded-full border border-indigo-500/30">
                    Processado pela IA
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <h4 className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400"/> Decisões Principais
                    </h4>
                    <ul className="text-sm text-slate-400 space-y-2 pl-6 list-disc marker:text-slate-600">
                      <li>Lançamento da nova feature adiado para 15/10.</li>
                      <li>Orçamento de marketing aprovado (+20%).</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <h4 className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400"/> Próximos Passos
                    </h4>
                    <div className="space-y-2">
                      {[
                        { t: "Atualizar roadmap no Jira", a: "JD" },
                        { t: "Enviar email para stakeholders", a: "MR" }
                      ].map((task, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors group">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded border border-slate-600 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                              <Check className="w-3 h-3 text-transparent group-hover:text-indigo-500" />
                            </div>
                            <span className="text-sm text-slate-300">{task.t}</span>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-slate-700 text-[10px] font-medium text-white flex items-center justify-center">
                            {task.a}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating WhatsApp Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -right-6 -bottom-6 w-64 rounded-2xl bg-[#0b141a] border border-white/10 shadow-2xl overflow-hidden z-20"
            >
              <div className="bg-[#202c33] p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Notura Bot</div>
                  <div className="text-[10px] text-slate-400">online</div>
                </div>
              </div>
              <div className="p-4 space-y-3 bg-[#0b141a] bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')] bg-opacity-10">
                <div className="bg-[#202c33] rounded-lg rounded-tl-none p-3 text-sm text-slate-200 shadow-sm border border-white/5">
                  <p className="font-medium text-indigo-400 mb-1">Resumo: Alinhamento Q3</p>
                  <p className="text-xs text-slate-400 mb-2">2 decisões, 2 tarefas criadas.</p>
                  <p className="text-xs">João, você foi designado para: "Atualizar roadmap no Jira".</p>
                  <div className="text-[10px] text-slate-500 text-right mt-1">14:45</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Stats Bar */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { label: "Horas salvas", value: 8, suffix: "h+", sub: "por semana" },
              { label: "Precisão", value: 99, suffix: "%", sub: "em transcrições" },
              { label: "Integrações", value: 15, suffix: "+", sub: "ferramentas" },
              { label: "ROI Médio", value: 300, suffix: "%", sub: "no primeiro mês" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center px-4 py-4 md:py-0">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-slate-300">{stat.label}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section id="comparativo" className="relative py-32 px-6 z-10">
        <div className="absolute inset-0 bg-slate-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_50%)]" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-semibold tracking-wider text-xs uppercase mb-3 block">A diferença</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transforme ruído em clareza</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">De transcrições desorganizadas para resumos acionáveis em segundos.</p>
          </div>

          <div className="bg-[#0f172a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex border-b border-white/10 bg-black/20 p-2 gap-2">
              <button 
                onClick={() => setActiveTab('raw')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${activeTab === 'raw' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-slate-300 hover:bg-white/5'}`}
              >
                Transcrição Bruta (O que você tem)
              </button>
              <button 
                onClick={() => setActiveTab('structured')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${activeTab === 'structured' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-300 hover:bg-white/5'}`}
              >
                <Sparkles className="w-4 h-4" /> Formato Notura (O que você precisa)
              </button>
            </div>
            
            <div className="p-6 md:p-8 min-h-[400px] bg-gradient-to-b from-transparent to-black/10">
              <AnimatePresence mode="wait">
                {activeTab === 'raw' ? (
                  <motion.div
                    key="raw"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4 font-mono text-sm text-slate-400 leading-relaxed"
                  >
                    <p>00:01 [João]: Então, eh, pessoal, vamos começar. A pauta hoje é o lançamento da feature X.</p>
                    <p>00:15 [Maria]: Sim, eu acho que a gente devia atrasar um pouco porque a API de pagamentos ainda tá meio instável.</p>
                    <p>00:28 [João]: Verdade. Pra quando você acha?</p>
                    <p>00:32 [Maria]: Talvez pro dia 15 do mês que vem? Dia 15 de Outubro.</p>
                    <p>00:40 [Pedro]: Eu concordo. Mas precisamos avisar o time de marketing. Eles já tavam preparando a campanha.</p>
                    <p>00:55 [João]: Beleza, eu mando um email pra eles hoje à tarde alinhando isso. Pedro, você consegue pedir mais verba pra eles pra compensar o atraso?</p>
                    <p>01:10 [Pedro]: Consigo, vou pedir 20% a mais. A gente vê se eles aprovam.</p>
                    <p>01:15 [João]: Fechado.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="structured"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-indigo-400"/> Resumo Executivo
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        A equipe concordou em adiar o lançamento da Feature X para 15 de Outubro devido a instabilidades na API de pagamentos. Medidas compensatórias de marketing serão negociadas.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400"/> Decisões
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                          <li className="flex gap-2"><span className="text-slate-500">•</span> Lançamento Feature X adiado para 15/10</li>
                          <li className="flex gap-2"><span className="text-slate-500">•</span> Solicitação de +20% orçamento de marketing</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-amber-400"/> Tarefas
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-start justify-between bg-black/20 p-2 rounded-lg">
                            <span className="text-sm text-slate-300">Enviar email para Marketing sobre adiamento</span>
                            <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded">João</span>
                          </li>
                          <li className="flex items-start justify-between bg-black/20 p-2 rounded-lg">
                            <span className="text-sm text-slate-300">Solicitar aumento de 20% no orçamento</span>
                            <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded">Pedro</span>
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

      {/* Sem/Com Notura Day Comparison */}
      <section className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-[#050b14]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-indigo-400 font-semibold tracking-wider text-xs uppercase mb-3 block">Impacto Real</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Um dia na sua vida</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Sem Notura */}
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-[27px] w-px bg-slate-800" />
              <h3 className="text-xl font-semibold text-slate-400 mb-8 pl-16 opacity-50">Sem Notura</h3>
              
              <div className="space-y-8">
                {[
                  { time: "10:00", text: "Reunião de 1 hora.", icon: Users, alert: false },
                  { time: "11:00", text: "Você passa 30 min tentando decifrar suas próprias anotações apressadas.", icon: FileText, alert: true },
                  { time: "11:30", text: "Escreve e envia email de follow-up manualmente.", icon: MessageSquare, alert: true },
                  { time: "14:00", text: "Alguém pergunta no Slack: 'O que decidimos mesmo?' e você não acha a ata.", icon: Clock, alert: true },
                ].map((item, i) => (
                  <div key={i} className={`relative pl-16 ${item.alert ? 'opacity-70' : 'opacity-40'}`}>
                    <div className={`absolute left-0 top-1 w-14 h-6 bg-[#030712] flex items-center justify-center text-xs font-mono font-medium ${item.alert ? 'text-red-400' : 'text-slate-500'}`}>
                      {item.time}
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                      <p className="text-sm text-slate-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Com Notura */}
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-[27px] w-px bg-indigo-900/50" />
              <h3 className="text-xl font-semibold text-white mb-8 pl-16 flex items-center gap-2">
                Com Notura <Sparkles className="w-5 h-5 text-indigo-400" />
              </h3>
              
              <div className="space-y-8">
                {[
                  { time: "10:00", text: "Reunião de 1 hora. O Notura grava em background.", icon: Mic },
                  { time: "10:05", text: "Resumo, decisões e tarefas já estão no seu painel. Tudo categorizado.", icon: CheckCircle2, highlight: true },
                  { time: "10:06", text: "WhatsApp enviado automaticamente para os envolvidos com suas respectivas tarefas.", icon: Zap, highlight: true },
                  { time: "11:00", text: "Você foca em executar o trabalho, não em administrar o trabalho.", icon: BrainCircuit, highlight: true },
                ].map((item, i) => (
                  <div key={i} className="relative pl-16">
                    <div className="absolute left-0 top-1 w-14 h-6 bg-[#030712] flex items-center justify-center text-xs font-mono font-medium text-indigo-400">
                      {item.time}
                    </div>
                    <div className={`rounded-xl p-4 border ${item.highlight ? 'bg-indigo-900/20 border-indigo-500/30' : 'bg-slate-900/50 border-slate-800'}`}>
                      <p className={`text-sm ${item.highlight ? 'text-indigo-100' : 'text-slate-300'}`}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Diagram */}
      <section id="como-funciona" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-indigo-400 font-semibold tracking-wider text-xs uppercase mb-3 block">Como Funciona</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Automação invisível. <br/>Resultados visíveis.</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -translate-y-1/2 z-0" />
            
            {[
              { icon: Mic, title: "Conecta", desc: "Integra com Google Meet, Zoom ou Teams." },
              { icon: BrainCircuit, title: "Analisa", desc: "IA transcreve e entende o contexto." },
              { icon: FileText, title: "Estrutura", desc: "Cria resumos, decisões e tarefas." },
              { icon: Zap, title: "Delega", desc: "Atribui responsáveis automaticamente." },
              { icon: MessageSquare, title: "Notifica", desc: "Envia resumos via WhatsApp/Slack." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-[#0a101d] border border-white/5 hover:border-indigo-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-indigo-950 border border-indigo-500/30 flex items-center justify-center mb-4 text-indigo-400 shadow-[0_0_15px_rgba(79,70,229,0.2)]">
                  <step.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6 border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Pronto para focar no que <br/> realmente importa?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Junte-se a milhares de profissionais que pararam de fazer anotações e começaram a tomar decisões.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="h-14 px-8 rounded-full bg-white text-black font-semibold text-lg hover:bg-slate-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105">
              Começar Grátis
            </button>
            <p className="text-sm text-slate-500 font-medium">Não requer cartão de crédito.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 text-center text-sm text-slate-500 bg-black/50 backdrop-blur-md">
        <p>© 2024 Notura. Todos os direitos reservados. Feito com cuidado para equipes ágeis.</p>
      </footer>
    </div>
  );
}

export default Elevated;
