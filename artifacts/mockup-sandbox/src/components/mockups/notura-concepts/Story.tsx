import React, { useEffect, useState } from "react";
import { Mic, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";

export function Story() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200">
      {/* Minimal Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white/80 backdrop-blur-md ${
          scrolled ? "py-4 border-b border-zinc-100" : "py-6"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold font-serif text-sm">
              N
            </div>
            <span className="font-semibold text-lg tracking-tight">Notura</span>
          </div>
          <Button variant="ghost" className="font-medium">
            Começar grátis
          </Button>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        {/* Section 1: The Problem */}
        <article className="max-w-2xl mx-auto mt-20">
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-12 text-zinc-900 leading-tight">
            Era uma quinta-feira.
          </h1>
          <div className="space-y-8 text-xl text-zinc-700 leading-[1.8] font-light">
            <p>
              Eram 16h. A reunião havia terminado há 45 minutos, mas Ana ainda
              estava olhando para a tela em branco.
            </p>
            <p>
              Ela sabia que precisava escrever a ata. Que precisava cobrar o
              Carlos sobre o orçamento. Que precisava avisar a Marina sobre a
              mudança de prazo. Mas tinha uma call em 20 minutos, e a memória já
              começava a falhar.
            </p>
          </div>

          <Separator className="my-16 bg-zinc-200" />

          <p className="text-xl text-zinc-700 leading-[1.8] font-light italic">
            Isso acontece em 87% das reuniões. O conhecimento gerado evapora
            antes de virar ação.
          </p>
        </article>

        {/* Section 2: The Product Reveal */}
        <section className="max-w-2xl mx-auto mt-32 text-center">
          <p className="text-2xl text-zinc-500 font-light mb-12">
            E se houvesse uma outra forma?
          </p>
          <div className="flex justify-center animate-in fade-in zoom-in duration-1000">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold font-serif text-3xl shadow-lg shadow-blue-600/20">
              N
            </div>
          </div>
        </section>

        {/* Section 3: The Contrast */}
        <section className="max-w-4xl mx-auto mt-32">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-8">
              <h3 className="font-serif text-2xl font-medium text-zinc-400">
                O que aconteceu
              </h3>
              <ul className="space-y-6 text-zinc-500">
                <li className="flex gap-4">
                  <span className="font-mono text-sm mt-1 w-12 shrink-0">16:05</span>
                  <span className="leading-relaxed">Reunião encerrada.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-sm mt-1 w-12 shrink-0">16:12</span>
                  <span className="leading-relaxed">Abriu doc em branco. Tentou lembrar dos acordos.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-sm mt-1 w-12 shrink-0">16:28</span>
                  <span className="leading-relaxed">Desistiu, decidiu que faria amanhã de manhã.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-sm mt-1 w-12 shrink-0">17:00</span>
                  <span className="leading-relaxed">A próxima call começa sem ela ter feito o follow-up da anterior.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="font-serif text-2xl font-medium text-blue-600">
                Com o Notura
              </h3>
              <ul className="space-y-6 text-zinc-900">
                <li className="flex gap-4">
                  <span className="font-mono text-sm mt-1 w-12 shrink-0 text-blue-600/70">16:05</span>
                  <span className="leading-relaxed">Reunião encerrada.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-sm mt-1 w-12 shrink-0 text-blue-600/70">16:06</span>
                  <span className="leading-relaxed font-medium">Notura gera o resumo, decisões e tarefas estruturadas.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-sm mt-1 w-12 shrink-0 text-blue-600/70">16:07</span>
                  <span className="leading-relaxed">Resumo enviado automaticamente para o grupo do WhatsApp.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-sm mt-1 w-12 shrink-0 text-blue-600/70">16:08</span>
                  <span className="leading-relaxed">Carlos já confirma que pegou a tarefa dele.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-sm mt-1 w-12 shrink-0 text-blue-600/70">17:00</span>
                  <span className="leading-relaxed">Call começa. Mente limpa, todos alinhados.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: The Product, In Context */}
        <article className="max-w-2xl mx-auto mt-40 space-y-16">
          <div className="flex gap-6 items-start">
            <Mic className="w-6 h-6 text-blue-600 shrink-0 mt-1.5" />
            <div className="space-y-3">
              <h4 className="font-medium text-xl">O Notura entende cada palavra.</h4>
              <p className="text-lg text-zinc-600 leading-[1.7] font-light">
                Não é só uma transcrição robótica. Ele entende o contexto do seu negócio, 
                ignora o bate-papo inicial sobre o clima e foca no que importa. Mesmo 
                com sotaques, barulho de fundo ou jargões da sua empresa, a inteligência 
                filtra o ruído.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <Sparkles className="w-6 h-6 text-blue-600 shrink-0 mt-1.5" />
            <div className="space-y-3">
              <h4 className="font-medium text-xl">A inteligência que organiza o caos.</h4>
              <p className="text-lg text-zinc-600 leading-[1.7] font-light">
                Esquecer quem ficou de fazer o quê é o maior ralo de dinheiro de uma empresa. 
                Nossa IA não apenas resume a reunião, ela extrai compromissos precisos, 
                define responsáveis e estrutura tudo de forma impossível de ignorar.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <MessageCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1.5" />
            <div className="space-y-3">
              <h4 className="font-medium text-xl">E vai parar onde sua equipe já está.</h4>
              <p className="text-lg text-zinc-600 leading-[1.7] font-light">
                Ninguém quer abrir mais um aplicativo. É por isso que o Notura entrega o 
                resultado pronto direto no WhatsApp da equipe. Sem fricção, sem links 
                complexos, apenas informação no lugar onde as pessoas realmente olham.
              </p>
            </div>
          </div>
        </article>

        {/* Section 5: Pull Quote */}
        <section className="mt-40 max-w-4xl mx-auto text-center px-4">
          <blockquote className="font-serif text-4xl md:text-5xl italic font-medium leading-tight text-zinc-900 mb-8">
            "Paramos de ter reuniões sobre reuniões."
          </blockquote>
          <cite className="text-zinc-500 text-lg not-italic">
            — Pedro A., CEO de uma construtora de 80 pessoas
          </cite>
        </section>

        {/* Section 6: Simple Numbers */}
        <article className="max-w-2xl mx-auto mt-40">
          <p className="text-2xl text-zinc-800 leading-[1.8] font-light">
            As equipes que usam o Notura recuperam em média <strong className="font-medium text-zinc-900">+8 horas por semana</strong>. 
            O tempo gasto em atas cai <strong className="font-medium text-zinc-900">73%</strong> na primeira semana. <strong className="font-medium text-zinc-900">98%</strong> das 
            decisões são registradas. E a velocidade de execução aumenta <strong className="font-medium text-zinc-900">4.2x</strong>.
          </p>
        </article>

        {/* Section 7: Closing */}
        <section className="max-w-2xl mx-auto mt-40 text-center pb-20">
          <div className="space-y-4 mb-12">
            <p className="text-xl text-zinc-600 font-light">
              Se você chegou até aqui, provavelmente reconhece a Ana.
            </p>
            <p className="text-2xl text-zinc-900 font-medium">
              Deixe o Notura cuidar das suas reuniões.
            </p>
          </div>
          
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-blue-600/20 transition-all hover:scale-105 mb-4">
            Começar grátis &rarr;
          </Button>
          <p className="text-sm text-zinc-400">
            Sem cartão de crédito. 5 minutos para configurar.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Story;
