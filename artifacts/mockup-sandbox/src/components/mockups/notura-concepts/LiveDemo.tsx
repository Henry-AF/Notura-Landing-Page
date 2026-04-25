import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Sparkles, CheckCircle2, Mic, Check, ArrowRight } from "lucide-react";

export function LiveDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Header fade out
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Stage 1: Raw
  const stage1Opacity = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.35], [0, 1, 1, 0]);
  const stage1Y = useTransform(scrollYProgress, [0.05, 0.15], [50, 0]);
  
  // Stage 2: AI
  const stage2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
  const stage2Scale = useTransform(scrollYProgress, [0.3, 0.4], [0.95, 1]);

  // Stage 3: Structured
  const stage3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const stage3Y = useTransform(scrollYProgress, [0.55, 0.65], [50, 0]);

  // Stage 4: WhatsApp
  const stage4Opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  return (
    <div className="relative bg-zinc-950 min-h-[500vh] text-zinc-50 font-sans selection:bg-zinc-800" ref={containerRef}>
      {/* Noise Texture */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Header */}
      <motion.header 
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-6 mix-blend-difference"
      >
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center">
            <Mic className="w-4 h-4" />
          </div>
          Notura
        </div>
        <button className="text-sm font-medium px-4 py-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">
          Começar grátis
        </button>
      </motion.header>

      {/* Hero / Opening Prompt */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        className="fixed inset-0 z-10 flex flex-col items-center justify-center p-6 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 max-w-3xl">
          O que aconteceu na sua última reunião?
        </h1>
        
        <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 text-left shadow-2xl flex items-start gap-4 mx-auto">
          <Sparkles className="w-6 h-6 text-zinc-500 shrink-0 mt-1" />
          <div className="font-mono text-zinc-400 text-lg md:text-xl">
            Resumo: Reunião de alinhamento com equipe de produto<span className="animate-pulse inline-block w-3 h-5 bg-zinc-400 ml-1 translate-y-1" />
          </div>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-2 text-zinc-500 animate-bounce mx-auto left-0 right-0 w-fit">
          <span className="text-sm">Assista o Notura processar</span>
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>
      </motion.div>

      {/* Stage 1: Raw Audio & Transcript */}
      <motion.div 
        style={{ opacity: stage1Opacity, y: stage1Y }}
        className="fixed inset-0 z-20 flex flex-col items-center justify-center p-6"
      >
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-zinc-500 text-sm mb-6 font-mono tracking-wider uppercase text-center">
            12:47 — Reunião de alinhamento • 3 participantes
          </div>
          
          <div className="h-24 md:h-32 w-full flex items-center gap-1 mb-12 justify-center overflow-hidden opacity-50">
            {Array.from({ length: 40 }).map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 md:w-2 bg-zinc-600 rounded-full"
                style={{
                  height: `${Math.max(10, Math.random() * 100)}%`,
                  animation: `pulse ${1 + Math.random()}s infinite alternate`
                }}
              />
            ))}
          </div>

          <div className="font-mono text-lg md:text-2xl text-zinc-400 leading-relaxed max-w-3xl mx-auto space-y-4">
            <p>
              <span className="text-zinc-600">João:</span> É, tipo, a gente precisa definir a... uhh... a data de lançamento da feature de relatórios.
            </p>
            <p>
              <span className="text-zinc-600">Maria:</span> Eu acho que dá pra sexta. Carlos, você consegue terminar o backend até lá?
            </p>
            <p>
              <span className="text-zinc-600">Carlos:</span> Hum, sim. Mas eu preciso que a Ana me passe os acessos da AWS hoje ainda.
            </p>
            <p>
              <span className="text-zinc-600">João:</span> Beleza. Então, decisão tomada: lançamento na sexta. Carlos, fica como sua tarefa, e Ana manda os acessos.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stage 2: AI Processing */}
      <motion.div 
        style={{ opacity: stage2Opacity, scale: stage2Scale }}
        className="fixed inset-0 z-20 flex flex-col items-center justify-center p-6"
      >
        <div className="w-full max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
          
          <div className="font-mono text-lg md:text-2xl text-zinc-700 leading-relaxed max-w-3xl mx-auto space-y-8 relative">
            <div className="relative">
              <span className="opacity-30">É, tipo, a gente precisa definir a... uhh... a data de lançamento da feature de relatórios.</span>
            </div>
            
            <div className="relative">
              <span className="opacity-30">Eu acho que dá pra </span>
              <span className="text-white relative z-10">
                sexta
                <span className="absolute -top-6 left-0 text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded uppercase tracking-widest border border-blue-500/30 whitespace-nowrap">
                  [Data]
                </span>
              </span>
              <span className="opacity-30">. Carlos, você consegue terminar o backend até lá?</span>
            </div>
            
            <div className="relative">
              <span className="opacity-30">Hum, sim. Mas eu preciso que a Ana me passe os acessos da AWS hoje ainda.</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded uppercase tracking-widest border border-amber-500/30">
                [Dependência]
              </span>
            </div>
            
            <div className="relative">
              <span className="opacity-30">Beleza. Então, </span>
              <span className="text-white relative z-10">
                decisão tomada: lançamento na sexta
                <span className="absolute -top-6 left-0 text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded uppercase tracking-widest border border-emerald-500/30 whitespace-nowrap">
                  [Decisão]
                </span>
              </span>
              <span className="opacity-30">. Carlos, fica como sua </span>
              <span className="text-white relative z-10">
                tarefa
                <span className="absolute -top-6 left-0 text-[10px] bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded uppercase tracking-widest border border-purple-500/30 whitespace-nowrap">
                  [Tarefa: @Carlos]
                </span>
              </span>
              <span className="opacity-30">, e Ana manda os acessos.</span>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-y-[-10deg] animate-pulse" />
        </div>
      </motion.div>

      {/* Stage 3: Structured Output */}
      <motion.div 
        style={{ opacity: stage3Opacity, y: stage3Y }}
        className="fixed inset-0 z-30 flex flex-col items-center justify-center p-6 bg-zinc-50 text-zinc-900"
      >
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-zinc-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Reunião de alinhamento</h2>
              <p className="text-zinc-500 text-sm">Resumo gerado por IA • 12:47</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-medium text-zinc-500 mb-4 uppercase text-xs tracking-wider">Tópicos Discutidos</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2 shrink-0" />
                  <span className="text-sm">Definição da data de lançamento da feature de relatórios.</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2 shrink-0" />
                  <span className="text-sm">Alinhamento de dependências entre frontend e backend.</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-medium text-emerald-600 mb-4 uppercase text-xs tracking-wider">Decisões</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-emerald-900">Lançamento da feature confirmado para sexta-feira.</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-medium text-purple-600 mb-4 uppercase text-xs tracking-wider">Próximos Passos</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center text-[10px] font-medium shrink-0">C</div>
                  <div>
                    <span className="text-sm font-medium text-purple-900 block">Terminar backend</span>
                    <span className="text-xs text-purple-600">Carlos • Até Sexta</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center text-[10px] font-medium shrink-0">A</div>
                  <div>
                    <span className="text-sm font-medium text-purple-900 block">Enviar acessos AWS</span>
                    <span className="text-xs text-purple-600">Ana • Hoje</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stage 4: WhatsApp Delivery */}
      <motion.div 
        style={{ opacity: stage4Opacity }}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center p-6 bg-zinc-950 text-white"
      >
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-3xl font-medium tracking-tight mb-12 text-center text-zinc-300">
            E então isso chega para sua equipe:
          </h2>
          
          <div className="bg-[#0b141a] rounded-3xl border-8 border-zinc-800 overflow-hidden shadow-2xl relative h-[500px] flex flex-col">
            <div className="bg-[#202c33] p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium">Equipe de Produto</div>
                <div className="text-xs text-zinc-400">3 participantes</div>
              </div>
            </div>
            
            <div className="flex-1 bg-[#0b141a] p-4 overflow-hidden flex flex-col gap-4 relative">
              <div className="absolute inset-0 opacity-5 bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-cover mix-blend-overlay" />
              
              <div className="bg-[#005c4b] rounded-lg p-3 text-sm self-end max-w-[85%] relative z-10 text-[#e9edef]">
                <div className="text-emerald-300 font-medium mb-1">Notura AI</div>
                <div className="font-bold mb-2">Resumo: Reunião de alinhamento</div>
                <div className="mb-2">
                  🎯 <span className="font-bold">Decisão:</span> Lançamento na sexta-feira.
                </div>
                <div className="mb-1">
                  📝 <span className="font-bold">Tarefas:</span>
                </div>
                <ul className="pl-4 mb-2 list-disc ml-2">
                  <li>@Carlos: Terminar backend (até sexta)</li>
                  <li>@Ana: Enviar acessos AWS (hoje)</li>
                </ul>
                <div className="text-[10px] text-[#8696a0] flex justify-end items-center gap-1 mt-1">
                  12:50 <span className="flex"><Check className="w-3 h-3 text-[#53bdeb]" /><Check className="w-3 h-3 text-[#53bdeb] -ml-2" /></span>
                </div>
              </div>

              <div className="bg-[#202c33] rounded-lg p-2 text-sm self-start relative z-10 text-[#e9edef] mt-2">
                <div className="text-purple-400 font-medium mb-1 text-xs">Carlos</div>
                Perfeito, já estou na task! 🚀
                <div className="text-[10px] text-[#8696a0] flex justify-end mt-1">
                  12:52
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <div className="absolute bottom-0 w-full h-[100vh] flex items-center justify-center bg-white text-zinc-950 z-50">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
            Conecte sua primeira reunião.
          </h2>
          <button className="px-8 py-4 bg-zinc-950 text-white rounded-full font-medium text-lg hover:bg-zinc-800 transition-transform hover:scale-105 active:scale-95">
            Começar grátis
          </button>
        </div>
      </div>
    </div>
  );
}
