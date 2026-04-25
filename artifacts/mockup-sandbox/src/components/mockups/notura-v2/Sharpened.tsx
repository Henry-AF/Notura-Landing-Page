import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Mic, 
  FileText, 
  ListTodo, 
  MessageSquare, 
  Zap,
  ChevronRight,
  XCircle,
  FileAudio
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// CountUp Component
const CountUp = ({ to, suffix = "", prefix = "", decimals = 0 }: { to: number, suffix?: string, prefix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = to / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

export default function Sharpened() {
  const [showStructured, setShowStructured] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800 selection:text-white overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-zinc-100 text-zinc-950 flex items-center justify-center font-bold text-xl">N</div>
            <span className="font-semibold text-lg tracking-tight">Notura</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#solucao" className="hover:text-zinc-100 transition-colors">Solução</a>
            <a href="#como-funciona" className="hover:text-zinc-100 transition-colors">Como funciona</a>
            <a href="#comparativo" className="hover:text-zinc-100 transition-colors">Comparativo</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors hidden sm:block">Login</a>
            <Button className="bg-zinc-100 text-zinc-950 hover:bg-white rounded-full px-6 font-semibold">
              Começar Grátis
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pb-24 lg:pb-32 flex flex-col items-center text-center">
          <Badge variant="outline" className="border-zinc-800 text-zinc-400 mb-8 rounded-full px-4 py-1.5 backdrop-blur-sm bg-zinc-900/50">
            <Zap className="w-3.5 h-3.5 mr-2 text-yellow-500" />
            Nova versão 2.0 disponível
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-5xl mx-auto leading-[1.1]">
            Transforme reuniões em <span className="text-zinc-400">ações estruturadas.</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm md:text-base font-medium text-zinc-300 bg-zinc-900/60 px-4 py-2 rounded-full border border-zinc-800/50">
              <span className="text-white font-bold"><CountUp prefix="-" to={73} suffix="%" /></span> atas manuais
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base font-medium text-zinc-300 bg-zinc-900/60 px-4 py-2 rounded-full border border-zinc-800/50">
              <span className="text-white font-bold"><CountUp prefix="+" to={4.2} decimals={1} suffix="x" /></span> velocidade
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base font-medium text-zinc-300 bg-zinc-900/60 px-4 py-2 rounded-full border border-zinc-800/50">
              <span className="text-white font-bold"><CountUp prefix="+" to={12} suffix="h" /></span> livres / mês
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base font-medium text-zinc-300 bg-zinc-900/60 px-4 py-2 rounded-full border border-zinc-800/50">
              <span className="text-white font-bold"><CountUp to={98} suffix="%" /></span> decisões capturadas
            </div>
          </div>
          
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light">
            Recupere <span className="text-white font-medium">+8h por semana</span>. O Notura grava, transcreve e organiza suas chamadas em resumos, tarefas e mensagens prontas para envio.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full">
            <Button size="lg" className="h-14 px-8 rounded-full bg-zinc-100 text-zinc-950 hover:bg-white text-base font-semibold w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105">
              <Play className="w-5 h-5 mr-2 fill-zinc-950" />
              Ver em ação
            </Button>
            <a href="#" className="text-zinc-400 hover:text-white font-medium flex items-center group transition-colors">
              Falar com vendas <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Hero Visual: Product Card */}
          <div className="mt-20 w-full max-w-4xl mx-auto relative perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10 pointer-events-none" />
            <motion.div 
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden text-left mx-auto relative z-0 transform-gpu"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <div className="mx-auto text-xs font-medium text-zinc-500 flex items-center gap-2">
                  <Clock className="w-3 h-3" /> Sync de Alinhamento Q3
                </div>
              </div>
              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-zinc-400" />
                    Resumo Executivo
                  </h3>
                  <div className="space-y-3">
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      A equipe concordou em antecipar o lançamento da v2.0 para 15 de Outubro. O orçamento de marketing foi reajustado com foco em canais B2B, reduzindo Google Ads em 20%.
                    </p>
                    <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-800">
                      <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2 block">Decisões Chave</span>
                      <ul className="text-sm text-zinc-400 space-y-2">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Launch V2 em 15/Out</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Pivot B2B Marketing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                    <ListTodo className="w-5 h-5 text-zinc-400" />
                    Próximos Passos
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-md border border-zinc-700 flex items-center justify-center bg-zinc-900"><CheckCircle2 className="w-3 h-3 text-transparent" /></div>
                        <span className="text-sm text-zinc-300">Revisar copy da LP</span>
                      </div>
                      <Badge variant="outline" className="bg-zinc-900 border-zinc-700 text-zinc-400 text-xs">@lucas</Badge>
                    </div>
                    <div className="flex items-center justify-between bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-md border border-zinc-700 flex items-center justify-center bg-zinc-900"><CheckCircle2 className="w-3 h-3 text-transparent" /></div>
                        <span className="text-sm text-zinc-300">Aprovar budget Q3</span>
                      </div>
                      <Badge variant="outline" className="bg-zinc-900 border-zinc-700 text-zinc-400 text-xs">@marina</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Toggle Demo Section */}
        <section id="solucao" className="py-24 bg-zinc-900 border-y border-zinc-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Do caos à clareza em segundos</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Veja como o Notura transforma uma transcrição confusa em um documento acionável instantaneamente.</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="bg-zinc-950 p-1 rounded-full inline-flex border border-zinc-800">
                  <button 
                    onClick={() => setShowStructured(false)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!showStructured ? 'bg-zinc-800 text-white shadow' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    Transcrição Bruta
                  </button>
                  <button 
                    onClick={() => setShowStructured(true)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${showStructured ? 'bg-zinc-100 text-zinc-950 shadow' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    Output Estruturado
                  </button>
                </div>
              </div>

              <div className="bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-xl min-h-[400px] relative">
                {/* Raw Transcript */}
                <div className={`absolute inset-0 p-8 transition-opacity duration-500 ${!showStructured ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-800/50">
                    <FileAudio className="w-5 h-5 text-zinc-500" />
                    <span className="text-sm font-mono text-zinc-500">audio_recording_142.mp3</span>
                  </div>
                  <div className="space-y-4 font-mono text-sm text-zinc-400 leading-relaxed">
                    <p><span className="text-zinc-600">[00:12] João:</span> Então, tipo... a gente precisa ver aquela questão do prazo, né? Porque o cliente mandou email ontem reclamando.</p>
                    <p><span className="text-zinc-600">[00:25] Maria:</span> É, eu vi. Acho que a gente consegue entregar a primeira parte na sexta, mas a integração com a API vai ficar pra semana que vem.</p>
                    <p><span className="text-zinc-600">[00:40] João:</span> Beleza. Você avisa ele? E o Carlos, como tá aquela issue do banco?</p>
                    <p><span className="text-zinc-600">[00:48] Carlos:</span> Tá quase lá. Encontrei um bug chato na query, mas até amanhã resolvo. Preciso que o João valide o PR depois.</p>
                    <p><span className="text-zinc-600">[01:10] João:</span> Fechou. Vou colocar na minha lista. Mais alguma coisa gente?</p>
                  </div>
                </div>

                {/* Structured Output */}
                <div className={`absolute inset-0 p-8 bg-zinc-900 transition-opacity duration-500 ${showStructured ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                    <div>
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2"><FileText className="w-4 h-4 text-blue-400" /> Resumo</h4>
                      <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800">
                        <p className="text-sm text-zinc-300 leading-relaxed">
                          A equipe discutiu prazos de entrega e problemas técnicos. A primeira entrega será na sexta-feira, com a integração da API adiada para a próxima semana. O problema do banco de dados está sendo resolvido e precisa de revisão.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2"><ListTodo className="w-4 h-4 text-green-400" /> Ações</h4>
                      <div className="space-y-3">
                        <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full border border-zinc-700 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-zinc-200">Avisar cliente sobre novo cronograma (Sexta + API na prox. semana)</p>
                            <span className="text-xs text-zinc-500 mt-1 block">Responsável: Maria</span>
                          </div>
                        </div>
                        <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full border border-zinc-700 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-zinc-200">Corrigir bug na query e abrir PR</p>
                            <span className="text-xs text-zinc-500 mt-1 block">Responsável: Carlos • Prazo: Amanhã</span>
                          </div>
                        </div>
                        <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full border border-zinc-700 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-zinc-200">Validar PR do banco de dados</p>
                            <span className="text-xs text-zinc-500 mt-1 block">Responsável: João</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Diagram */}
        <section id="como-funciona" className="py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">O fluxo perfeito</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Integração invisível com sua rotina atual. Sem novos apps para aprender.</p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                {[
                  { icon: Mic, title: "1. Grava", desc: "Seu bot entra na call automaticamente" },
                  { icon: FileAudio, title: "2. Transcreve", desc: "Fala convertida em texto preciso" },
                  { icon: Zap, title: "3. Analisa", desc: "IA identifica tarefas e decisões" },
                  { icon: FileText, title: "4. Formata", desc: "Templates customizados pro seu time" },
                  { icon: MessageSquare, title: "5. Envia", desc: "Dispara pro WhatsApp ou Slack" }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg flex items-center justify-center mb-6 relative group hover:border-zinc-700 transition-colors">
                      <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-zinc-100 text-zinc-950 text-xs font-bold flex items-center justify-center shadow-sm">
                        {i + 1}
                      </div>
                      <step.icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-zinc-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparativo" className="py-24 bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">A matemática é simples</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Como é um dia típico de um líder de equipe com e sem Notura.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Sem Notura */}
              <div className="bg-zinc-950/50 rounded-2xl p-8 border border-zinc-900 grayscale-[0.8] opacity-60">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-red-950/30 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-500 line-through decoration-zinc-700">Sem Notura</h3>
                </div>
                
                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-px before:bg-zinc-800">
                  <div className="relative pl-10">
                    <div className="absolute left-2 top-2 w-2 h-2 rounded-full bg-zinc-700" />
                    <p className="text-sm font-medium text-zinc-500 mb-1">09:00 - Reunião de 1h</p>
                    <p className="text-xs text-zinc-600">Anotando no bloco de notas, perdendo foco da conversa.</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-2 top-2 w-2 h-2 rounded-full bg-zinc-700" />
                    <p className="text-sm font-medium text-zinc-500 mb-1">10:00 - Revisão das notas</p>
                    <p className="text-xs text-zinc-600">Tentando decifrar as próprias anotações confusas. +20 min.</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-2 top-2 w-2 h-2 rounded-full bg-zinc-700" />
                    <p className="text-sm font-medium text-zinc-500 mb-1">10:20 - Criação de tarefas</p>
                    <p className="text-xs text-zinc-600">Abrindo Jira/Asana, criando tickets manualmente. +15 min.</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-2 top-2 w-2 h-2 rounded-full bg-zinc-700" />
                    <p className="text-sm font-medium text-zinc-500 mb-1">10:35 - Follow-up</p>
                    <p className="text-xs text-zinc-600">Escrevendo email de resumo para a equipe. +10 min.</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-900">
                  <p className="text-sm text-red-400/70 font-medium">Custo: +45 minutos por reunião</p>
                </div>
              </div>

              {/* Com Notura */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-zinc-950" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Com Notura</h3>
                </div>
                
                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-px before:bg-zinc-800 z-10">
                  <div className="relative pl-10">
                    <div className="absolute left-[7px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-100 ring-4 ring-zinc-900" />
                    <p className="text-sm font-medium text-white mb-1">09:00 - Reunião de 1h</p>
                    <p className="text-xs text-zinc-400">Foco total na conversa. O Notura grava em background.</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-[7px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-100 ring-4 ring-zinc-900" />
                    <p className="text-sm font-medium text-white mb-1">10:00 - Fim da reunião</p>
                    <p className="text-xs text-zinc-400">Notura processa o áudio automaticamente.</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-[7px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-100 ring-4 ring-zinc-900" />
                    <p className="text-sm font-medium text-white mb-1">10:02 - Mágica acontece</p>
                    <p className="text-xs text-zinc-400">Resumo no Slack, tarefas no Asana. Zero cliques.</p>
                  </div>
                  <div className="relative pl-10 opacity-0 select-none">
                    <p className="text-sm font-medium text-white mb-1">-</p>
                    <p className="text-xs text-zinc-400">-</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-800 relative z-10">
                  <p className="text-sm text-green-400 font-medium">Economia: 43 minutos. Foco: 100%.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Pronto para afiar sua produtividade?</h2>
            <p className="text-xl text-zinc-400 mb-10 font-light">Junte-se a times de alta performance que já eliminaram o trabalho braçal das reuniões.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="h-14 px-10 rounded-full bg-zinc-100 text-zinc-950 hover:bg-white text-lg font-bold w-full sm:w-auto transition-transform hover:scale-105">
                Começar Grátis Agora
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-zinc-800 text-zinc-400 flex items-center justify-center font-bold text-xs">N</div>
            <span className="font-medium text-sm text-zinc-500">Notura © 2024</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Termos</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
