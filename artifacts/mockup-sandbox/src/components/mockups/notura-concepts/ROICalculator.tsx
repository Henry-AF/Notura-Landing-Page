import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { 
  Calculator, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  XCircle,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(8);
  const [meetingsPerWeek, setMeetingsPerWeek] = useState(6);
  const [avgDuration, setAvgDuration] = useState(1.5);
  const hourlyRate = 100; // Fixed R$100/h for simplicity

  // Calculations
  const hoursPerMonth = teamSize * meetingsPerWeek * avgDuration * 4;
  const costPerMonth = hoursPerMonth * hourlyRate;
  const costPerYear = costPerMonth * 12;

  const savingsPercent = 0.73; // Notura recovers 73%
  const hoursSavedPerMonth = hoursPerMonth * savingsPercent;
  const savingsPerYear = costPerYear * savingsPercent;

  const maxHours = 50 * 20 * 3 * 4; // Max possible hours

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-green-500/30 selection:text-green-200">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-slate-950">
              <Sparkles className="w-5 h-5" />
            </div>
            Notura
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
              Entrar
            </Button>
            <Button className="bg-green-600 hover:bg-green-500 text-white border-0 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              Começar grátis
            </Button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero / Calculator */}
        <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Inputs */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                  Calcule o que reuniões custam à sua equipe.
                </h1>
                <p className="text-xl text-slate-400">
                  Ajuste os valores abaixo para ver o impacto financeiro das reuniões e quanto tempo você pode recuperar.
                </p>
              </div>

              <div className="space-y-8 bg-slate-900/50 p-8 rounded-2xl border border-slate-800/60">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-slate-300 font-medium">Pessoas na equipe</label>
                    <span className="text-2xl font-bold text-white">{teamSize}</span>
                  </div>
                  <Slider
                    value={[teamSize]}
                    onValueChange={(val) => setTeamSize(val[0])}
                    min={1}
                    max={50}
                    step={1}
                    className="[&_[role=slider]]:bg-white [&_[role=slider]]:border-white"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-slate-300 font-medium">Reuniões por semana</label>
                    <span className="text-2xl font-bold text-white">{meetingsPerWeek}</span>
                  </div>
                  <Slider
                    value={[meetingsPerWeek]}
                    onValueChange={(val) => setMeetingsPerWeek(val[0])}
                    min={1}
                    max={20}
                    step={1}
                    className="[&_[role=slider]]:bg-white [&_[role=slider]]:border-white"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-slate-300 font-medium">Duração média (horas)</label>
                    <span className="text-2xl font-bold text-white">{avgDuration.toFixed(1)}h</span>
                  </div>
                  <Slider
                    value={[avgDuration]}
                    onValueChange={(val) => setAvgDuration(val[0])}
                    min={0.5}
                    max={3}
                    step={0.5}
                    className="[&_[role=slider]]:bg-white [&_[role=slider]]:border-white"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Live Results */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-[2rem] blur-xl opacity-100 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-slate-900 border border-green-500/30 rounded-3xl p-8 shadow-2xl overflow-hidden flex flex-col gap-8">
                {/* Glow effect at top */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-slate-400">Horas desperdiçadas/mês</span>
                      <span className="text-3xl font-bold text-slate-100">{Math.round(hoursPerMonth)}h</span>
                    </div>
                    <Progress value={(hoursPerMonth / maxHours) * 100} className="h-2 bg-slate-800" indicatorClassName="bg-amber-500" />
                  </div>

                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-slate-400">Custo estimado/mês</span>
                      <span className="text-3xl font-bold text-slate-100">{formatCurrency(costPerMonth)}</span>
                    </div>
                    <Progress value={(costPerMonth / (maxHours * hourlyRate)) * 100} className="h-2 bg-slate-800" indicatorClassName="bg-red-500" />
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 space-y-2">
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Custo anual</p>
                  <p className="text-5xl md:text-6xl font-black text-white tracking-tight">
                    {formatCurrency(costPerYear)}
                  </p>
                </div>

                <div className="bg-green-950/30 border border-green-900/50 rounded-2xl p-6">
                  <p className="text-slate-300 mb-2">
                    O Notura automatiza resumos e tarefas, recuperando <strong className="text-green-400">73%</strong> desse tempo.
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-400">Você economiza</span>
                    <span className="text-3xl font-bold text-green-500">{formatCurrency(savingsPerYear)}/ano</span>
                  </div>
                </div>

                <Button className="w-full h-14 text-lg bg-green-600 hover:bg-green-500 text-white border-0 shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-[1.02]">
                  Recuperar essas horas agora <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How savings work */}
        <section className="bg-slate-900/50 border-y border-slate-800/60 py-12">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/50">
              <div className="flex-shrink-0 mt-1">
                <XCircle className="w-5 h-5 text-red-500/70" />
              </div>
              <div>
                <p className="text-slate-400 line-through decoration-red-500/30 decoration-2">Atas manuais (45 min)</p>
                <div className="flex items-center gap-2 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-green-400 font-medium">Geradas em segundos</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/50">
              <div className="flex-shrink-0 mt-1">
                <XCircle className="w-5 h-5 text-red-500/70" />
              </div>
              <div>
                <p className="text-slate-400 line-through decoration-red-500/30 decoration-2">Follow-ups perdidos</p>
                <div className="flex items-center gap-2 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-green-400 font-medium">Enviados pro WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/50">
              <div className="flex-shrink-0 mt-1">
                <XCircle className="w-5 h-5 text-red-500/70" />
              </div>
              <div>
                <p className="text-slate-400 line-through decoration-red-500/30 decoration-2">"O que foi decidido?"</p>
                <div className="flex items-center gap-2 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-green-400 font-medium">Registrado e pesquisável</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-300">
              Equipes como a sua economizam em média <span className="text-green-400">8h por semana</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Nossas reuniões agora são 20 minutos mais curtas, e ninguém precisa se preocupar em anotar.", author: "Diretor de Operações" },
              { text: "O fato das tarefas irem direto pro WhatsApp mudou o jogo. A taxa de execução dobrou.", author: "Tech Lead" },
              { text: "Pela primeira vez em anos, sei exatamente o que foi acordado com cada cliente.", author: "Head de Vendas" }
            ].map((quote, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative">
                <div className="text-green-500/20 absolute top-4 left-4 text-4xl font-serif">"</div>
                <p className="text-slate-300 mb-6 relative z-10 pt-4">"{quote.text}"</p>
                <p className="text-sm font-medium text-slate-500">{quote.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Walkthrough */}
        <section className="py-24 bg-slate-900/30 border-t border-slate-800/60">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">Como o Notura recupera seu tempo</h2>
            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-800 via-green-500/30 to-slate-800"></div>
              
              <div className="relative text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-slate-900 border-2 border-slate-700 rounded-2xl flex items-center justify-center relative z-10 shadow-xl text-slate-300">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">1. Você Grava</h3>
                <p className="text-slate-400">Basta dar o play no início da reunião, presencial ou online.</p>
              </div>

              <div className="relative text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-slate-900 border-2 border-green-500/50 rounded-2xl flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(34,197,94,0.2)] text-green-400">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">2. A IA Organiza</h3>
                <p className="text-slate-400">O Notura extrai os pontos-chave, decisões e quem faz o quê.</p>
              </div>

              <div className="relative text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-slate-900 border-2 border-slate-700 rounded-2xl flex items-center justify-center relative z-10 shadow-xl text-slate-300">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">3. WhatsApp Entrega</h3>
                <p className="text-slate-400">Resumo e tarefas chegam automaticamente para a equipe.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-12 rounded-[3rem] border border-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-green-500/5 blur-3xl rounded-full"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Pronto para parar de desperdiçar dinheiro?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Baseado no seu time de <strong className="text-white">{teamSize}</strong> pessoas, você pode economizar <strong className="text-green-400">{Math.round(hoursSavedPerMonth / 4)}h por semana</strong> começando hoje.
              </p>
              <Button className="h-14 px-8 text-lg bg-green-600 hover:bg-green-500 text-white border-0 shadow-lg shadow-green-900/20">
                Comece seu período gratuito
              </Button>
              <p className="text-sm text-slate-500">
                14 dias grátis. Não requer cartão de crédito.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Simple Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Notura. Feito para equipes mais produtivas.</p>
      </footer>
    </div>
  );
}
