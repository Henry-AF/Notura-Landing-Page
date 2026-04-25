import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, X, FileText, Bot, MessageCircle } from 'lucide-react';

export function Clean() {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const end = 8;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
        <div className="flex items-center gap-8">
          <span className="font-bold text-xl tracking-tight">Notura</span>
          <div className="hidden md:flex gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-zinc-900 transition-colors">Produto</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Preços</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Empresa</a>
          </div>
        </div>
        <button className="text-sm font-medium hover:text-zinc-600 transition-colors">
          Entrar
        </button>
      </nav>

      <main>
        {/* Hero */}
        <section className="px-6 py-24 md:py-32 max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 text-zinc-900 font-serif">
              Sua equipe não precisa de mais reuniões. Precisa de menos ruído.
            </h1>
            <p className="text-xl text-zinc-600 mb-12 leading-relaxed max-w-2xl">
              Grave suas reuniões. Receba resumos estruturados, tarefas e mensagens no WhatsApp automaticamente. 
              Sem esforço, sem anotações manuais.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#" className="text-indigo-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Começar grátis <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-5 py-2.5 border border-zinc-200 hover:border-zinc-300 rounded text-sm font-medium transition-colors">
                Ver demonstração
              </button>
            </div>
          </div>

          <div className="mt-24 p-8 border border-zinc-200 rounded bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-6 pb-6 border-b border-zinc-100">
              <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
              <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
              <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
            </div>
            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="font-medium mb-2">Resumo Executivo</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  A equipe concordou em antecipar o lançamento da v2.0 para o dia 15. O marketing precisa dos novos assets até sexta-feira. O gargalo atual é a aprovação do copy.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-3">Ação Necessária</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-zinc-600">
                    <div className="mt-0.5 w-4 h-4 border border-zinc-300 rounded-sm flex items-center justify-center text-[10px] bg-zinc-50">✓</div>
                    <span>@marcos Enviar relatórios de QA pendentes</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-zinc-600">
                    <div className="mt-0.5 w-4 h-4 border border-zinc-300 rounded-sm"></div>
                    <span>@julia Finalizar design das telas de pagamento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The +8h stat */}
        <section className="border-y border-zinc-200 py-16 px-6">
          <div className="max-w-5xl mx-auto flex items-start">
            <div className="border-l-2 border-indigo-600 pl-8">
              <div className="text-6xl md:text-8xl font-light tracking-tighter mb-4 text-zinc-900">
                +{count} horas
              </div>
              <p className="text-xl text-zinc-500 uppercase tracking-widest text-sm font-medium">
                por semana, em média, recuperadas com Notura.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold tracking-tight">O que o Notura faz</h2>
          </div>
          
          <div className="space-y-0">
            <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-12 border-t border-zinc-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center rounded">
                  <Bot className="w-5 h-5 text-zinc-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Transcrição Inteligente</h3>
                <p className="text-zinc-600 leading-relaxed max-w-xl">
                  Captura áudio de qualquer plataforma (Zoom, Meet, Teams). Reconhece múltiplos oradores com precisão impressionante, mesmo em ambientes ruidosos ou com sotaques fortes.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-12 border-t border-zinc-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center rounded">
                  <FileText className="w-5 h-5 text-zinc-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Extração de Estrutura</h3>
                <p className="text-zinc-600 leading-relaxed max-w-xl">
                  Transforma horas de conversa em um documento conciso. Identifica decisões, gargalos, próximos passos e atribui responsáveis automaticamente para cada tarefa.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-12 border-y border-zinc-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center rounded">
                  <MessageCircle className="w-5 h-5 text-zinc-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Distribuição Automática</h3>
                <p className="text-zinc-600 leading-relaxed max-w-xl">
                  Sincroniza com as ferramentas que sua equipe já usa. Envia resumos executivos via WhatsApp para lideranças e cria cards no Notion ou Jira para a equipe de execução.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Day Comparison */}
        <section className="py-24 px-6 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
              <div>
                <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-8">Sem Notura</h3>
                <ul className="space-y-6">
                  {[
                    "Anotações manuais durante a reunião",
                    "Esquecer de cobrar pendências",
                    "Gastar 30min escrevendo ata pós-reunião",
                    "Dificuldade em lembrar o que foi decidido",
                    "Informação presa no caderno de uma pessoa"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <X className="w-5 h-5 text-zinc-300 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-bold tracking-widest text-zinc-900 uppercase mb-8">Com Notura</h3>
                <ul className="space-y-6">
                  {[
                    "Foco 100% na conversa",
                    "Tarefas extraídas e atribuídas automaticamente",
                    "Resumo enviado no WhatsApp em 2 minutos",
                    "Acervo pesquisável de todas as decisões",
                    "Informação democratizada para a equipe"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-900 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Toggle */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
            <h2 className="text-3xl font-semibold tracking-tight">Do ruído à clareza</h2>
            <div className="flex items-center p-1 border border-zinc-200 rounded">
              <button 
                onClick={() => setActiveTab('before')}
                className={`px-4 py-1.5 text-sm font-medium rounded-sm transition-colors ${activeTab === 'before' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}
              >
                Transcrição Bruta
              </button>
              <button 
                onClick={() => setActiveTab('after')}
                className={`px-4 py-1.5 text-sm font-medium rounded-sm transition-colors ${activeTab === 'after' ? 'bg-indigo-50 text-indigo-700' : 'text-zinc-500 hover:text-zinc-900'}`}
              >
                Saída Notura
              </button>
            </div>
          </div>

          <div className="bg-zinc-50 border border-zinc-200 rounded p-6 md:p-10 font-mono text-sm leading-relaxed min-h-[300px]">
            {activeTab === 'before' ? (
              <div className="text-zinc-500 space-y-4">
                <p><strong>Carlos:</strong> Bom, pessoal, então sobre o design do app... a gente precisa mudar aquela cor verde, acho que tá muito chamativo.</p>
                <p><strong>Ana:</strong> É, concordo. A gente pode usar um azul mais escuro, talvez? O que vocês acham?</p>
                <p><strong>Pedro:</strong> Azul escuro é bom. Carlos, você consegue pedir pro time de design mandar umas 3 opções até amanhã de tarde?</p>
                <p><strong>Carlos:</strong> Amanhã de tarde é meio apertado, mas vejo com eles. E sobre o banco de dados da v2?</p>
                <p><strong>Ana:</strong> A migração acontece no fim de semana. Eu e o time de infra já alinhamos isso.</p>
                <p><strong>Pedro:</strong> Beleza. Fica como prioridade máxima então a migração, o design a gente vê depois se atrasar.</p>
              </div>
            ) : (
              <div className="text-zinc-900 space-y-8 font-sans">
                <div>
                  <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-zinc-500">Decisões</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Alterar cor principal do app de verde para azul escuro.</li>
                    <li>Migração do banco de dados confirmada para o fim de semana.</li>
                    <li>Prioridade: Migração do DB tem precedência sobre o design.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-zinc-500">Ações</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-zinc-200 rounded text-xs">@carlos</span>
                      <span>Solicitar 3 opções de azul escuro ao time de design (Prazo: Amanhã à tarde)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-zinc-200 rounded text-xs">@ana</span>
                      <span>Executar migração do DB com time de infra (Prazo: Fim de semana)</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Signal & Footer CTA */}
        <section className="py-24 px-6 border-t border-zinc-200 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-semibold tracking-tight mb-8">
              Pronto para ter reuniões úteis?
            </h2>
            <div className="flex flex-col items-center gap-6">
              <button className="px-8 py-3 bg-zinc-900 text-white rounded hover:bg-zinc-800 transition-colors font-medium">
                Criar conta gratuita
              </button>
              <a href="#" className="text-indigo-600 font-medium flex items-center gap-2 text-sm hover:underline">
                Gratuito para começar. Sem cartão de crédito. <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-12 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
        <div>© 2024 Notura. Radicalmente simples.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-900 transition-colors">Termos</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Contato</a>
        </div>
      </footer>
    </div>
  );
}

export default Clean;
