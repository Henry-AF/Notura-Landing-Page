import React, { useState, useEffect } from "react";
import { 
  Search, Bell, Plus, CheckCircle2, Clock, Calendar, 
  Video, LayoutGrid, Settings, Link as LinkIcon, X, 
  FileText, ListTodo, ChevronRight, MessageSquare, Mic, 
  Smartphone, MoreHorizontal, ArrowRight, Check, Loader2, Sparkles
} from "lucide-react";

export function Dashboard() {
  const [showHint, setShowHint] = useState(true);

  // Mock data for the meetings
  const meetings = [
    {
      id: 1,
      title: "Sync Semanal • Equipe de Produto",
      date: "Segunda, 09:00",
      duration: "1h 23m",
      status: "done",
      tasks: 5,
      active: true,
    },
    {
      id: 2,
      title: "Call com Cliente Premium",
      date: "Segunda, 14:30",
      duration: "47m",
      status: "done",
      tasks: 3,
      active: false,
    },
    {
      id: 3,
      title: "Planejamento Q3",
      date: "Sexta, 10:00",
      duration: "2h 04m",
      status: "done",
      tasks: 11,
      active: false,
    },
    {
      id: 4,
      title: "Entrevista: Dev Sênior",
      date: "Quinta, 15:00",
      duration: "38m",
      status: "done",
      tasks: 2,
      active: false,
    },
    {
      id: 5,
      title: "Reunião de Vendas",
      date: "Quinta, 09:30",
      duration: "1h 12m",
      status: "processing",
      tasks: 0,
      active: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-slate-300 font-sans antialiased selection:bg-indigo-500/30">
      {/* App Shell Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 w-1/3">
          <div className="flex items-center gap-2 text-white font-medium">
            <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span>Notura</span>
          </div>
          <div className="h-4 w-px bg-white/10"></div>
          <div className="text-sm text-slate-400 flex items-center gap-1">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Workspace</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-200">Dashboard</span>
          </div>
        </div>

        <div className="flex-1 max-w-md">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
            <input 
              type="text" 
              placeholder="Buscar reuniões, decisões, tarefas..." 
              className="w-full bg-white/[0.03] border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all placeholder:text-slate-500 text-slate-200"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <kbd className="hidden sm:inline-flex items-center h-5 px-1.5 text-[10px] font-medium text-slate-500 bg-white/5 rounded border border-white/10">⌘</kbd>
              <kbd className="hidden sm:inline-flex items-center h-5 px-1.5 text-[10px] font-medium text-slate-500 bg-white/5 rounded border border-white/10">K</kbd>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 w-1/3">
          <button className="relative p-1.5 text-slate-400 hover:text-slate-200 transition-colors rounded-full hover:bg-white/5">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full ring-2 ring-[#0a0a0c]"></span>
          </button>
          <button className="text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5">
            Upgrade
          </button>
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] font-medium text-white shadow-sm ring-1 ring-white/10 cursor-pointer">
            VC
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-56 border-r border-white/5 bg-[#0d0e11] flex flex-col hidden md:flex">
          <div className="p-3 flex-1 space-y-0.5">
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-md bg-white/5 text-slate-200 text-sm font-medium transition-colors border border-white/5 shadow-sm">
              <div className="flex items-center gap-2.5">
                <Video className="w-4 h-4 text-indigo-400" />
                Reuniões
              </div>
              <span className="text-[10px] py-0.5 px-1.5 rounded-full bg-white/10 text-slate-300">12</span>
            </button>
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/5 text-sm font-medium transition-colors group">
              <div className="flex items-center gap-2.5">
                <ListTodo className="w-4 h-4 group-hover:text-slate-300 transition-colors" />
                Tarefas
              </div>
              <span className="text-[10px] py-0.5 px-1.5 rounded-full bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-slate-300 transition-colors">7</span>
            </button>
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/5 text-sm font-medium transition-colors group">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 group-hover:text-slate-300 transition-colors" />
                Resumos
              </div>
            </button>
            
            <div className="pt-6 pb-2 px-3">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Workspace</p>
            </div>
            
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/5 text-sm font-medium transition-colors group">
              <div className="flex items-center gap-2.5">
                <LinkIcon className="w-4 h-4 group-hover:text-slate-300 transition-colors" />
                Integrações
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
            </button>
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/5 text-sm font-medium transition-colors group">
              <div className="flex items-center gap-2.5">
                <Settings className="w-4 h-4 group-hover:text-slate-300 transition-colors" />
                Configurações
              </div>
            </button>
          </div>
          
          <div className="p-4 border-t border-white/5">
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/20 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-xs font-medium text-slate-200">Bot do WhatsApp</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed mb-2.5">Envie áudios direto no WhatsApp e receba resumos na hora.</p>
              <button className="text-[10px] font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
                Conectar número <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </aside>

        {/* Center Panel - List */}
        <main className="flex-1 flex flex-col min-w-[320px] border-r border-white/5 bg-[#0a0a0c]">
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-lg font-medium text-white tracking-tight">Suas Reuniões</h1>
              
              <div className="relative">
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-md transition-all shadow-sm flex items-center gap-2 border border-indigo-500/20 shadow-indigo-500/10">
                  <Plus className="w-4 h-4" />
                  Nova Gravação
                </button>
                
                {showHint && (
                  <div className="absolute top-full right-0 mt-3 w-64 bg-[#1e2028] border border-white/10 rounded-lg shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs text-slate-200 leading-relaxed">
                        Grave sua próxima reunião e o Notura organiza tudo automaticamente <ArrowRight className="inline-block w-3 h-3 text-indigo-400 ml-0.5" />
                      </p>
                      <button 
                        onClick={() => setShowHint(false)}
                        className="text-slate-500 hover:text-slate-300 transition-colors shrink-0 mt-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {/* Tooltip arrow */}
                    <div className="absolute -top-1.5 right-6 w-3 h-3 bg-[#1e2028] border-t border-l border-white/10 rotate-45"></div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1 flex-1 overflow-y-auto pr-2 -mr-2">
              {meetings.map((meeting) => (
                <div 
                  key={meeting.id}
                  className={`group flex items-center gap-4 p-3 rounded-lg border transition-all cursor-pointer ${
                    meeting.active 
                      ? "bg-white/[0.04] border-white/10 shadow-sm" 
                      : "border-transparent hover:bg-white/[0.02] hover:border-white/5"
                  }`}
                >
                  <div className="w-8 h-8 rounded bg-white/5 border border-white/5 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-slate-300 transition-colors">
                    {meeting.status === "processing" ? (
                      <Mic className="w-4 h-4" />
                    ) : (
                      <Video className="w-4 h-4" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-sm font-medium truncate mb-1 ${meeting.active ? "text-white" : "text-slate-200 group-hover:text-white transition-colors"}`}>
                      {meeting.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {meeting.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {meeting.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex items-center gap-4 text-xs">
                    {meeting.status === "processing" ? (
                      <div className="flex items-center gap-2 text-amber-500 bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20">
                        <Loader2 className="w-3 h-3 animate-spin" />
                        <span>Processando...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-emerald-400/90">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Resumo enviado</span>
                      </div>
                    )}
                    
                    {meeting.status !== "processing" && (
                      <div className="flex items-center gap-1.5 text-slate-400 w-20">
                        <ListTodo className="w-3.5 h-3.5" />
                        <span>{meeting.tasks} tarefas</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="shrink-0 pl-2">
                    {meeting.status === "processing" ? (
                      <div className="w-20 text-center text-xs text-slate-600 font-medium">—</div>
                    ) : (
                      <button className={`text-xs font-medium px-3 py-1.5 rounded-md transition-all ${
                        meeting.active
                          ? "bg-white/10 text-white"
                          : "text-slate-400 opacity-0 group-hover:opacity-100 hover:bg-white/10 hover:text-white"
                      }`}>
                        Ver resumo
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right Detail Panel */}
        <aside className="w-[480px] bg-[#0f1115] hidden xl:flex flex-col border-l border-white/5 shadow-[-8px_0_24px_-12px_rgba(0,0,0,0.5)] z-10 relative">
          <div className="p-6 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg font-medium text-white leading-tight mb-2">Sync Semanal • Equipe de Produto</h2>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Segunda, 09:00</span>
                  <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 1h 23m</span>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-200 transition-colors p-1 rounded hover:bg-white/5">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-medium px-2 py-1 rounded-md border border-emerald-500/20">
              <Smartphone className="w-3 h-3" />
              Enviado para WhatsApp ✓
            </div>
          </div>

          <div className="flex px-6 gap-6 border-b border-white/5 text-sm">
            <button className="text-white border-b-2 border-indigo-500 py-3 font-medium">Resumo</button>
            <button className="text-slate-500 hover:text-slate-300 py-3 font-medium transition-colors">Tarefas <span className="ml-1 text-[10px] bg-white/10 text-slate-300 px-1.5 py-0.5 rounded-full">5</span></button>
            <button className="text-slate-500 hover:text-slate-300 py-3 font-medium transition-colors">Transcrição</button>
          </div>

          <div className="p-6 flex-1 overflow-y-auto text-sm text-slate-300 leading-relaxed space-y-8">
            <section>
              <h3 className="text-white font-medium mb-3 flex items-center gap-2 text-xs uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                Tópicos Discutidos
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500/50 mt-1">•</span>
                  <span>Lançamento do novo app no Q3</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500/50 mt-1">•</span>
                  <span>Orçamento de marketing revisado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500/50 mt-1">•</span>
                  <span>Contratação de dev sênior para a equipe de infra</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-white font-medium mb-3 flex items-center gap-2 text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Decisões Tomadas
              </h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 bg-white/[0.02] p-2.5 rounded-md border border-white/5">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-emerald-400" />
                  </div>
                  <span>Lançamento adiado 2 semanas <span className="text-slate-500">(unânime)</span></span>
                </li>
                <li className="flex items-start gap-2.5 bg-white/[0.02] p-2.5 rounded-md border border-white/5">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-emerald-400" />
                  </div>
                  <span>Budget de Q3 aumentado em 15% para campanhas</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-white font-medium mb-3 flex items-center gap-2 text-xs uppercase tracking-wider">
                <ListTodo className="w-3.5 h-3.5 text-indigo-400" />
                Próximos Passos
              </h3>
              <div className="space-y-2">
                <div className="group flex items-center justify-between p-2 hover:bg-white/5 rounded-md transition-colors -mx-2 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-medium shrink-0">CA</div>
                    <span className="text-slate-200">Aprovar orçamento final</span>
                  </div>
                  <span className="text-xs text-slate-500">Sexta</span>
                </div>
                <div className="group flex items-center justify-between p-2 hover:bg-white/5 rounded-md transition-colors -mx-2 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px] font-medium shrink-0">MA</div>
                    <span className="text-slate-200">Publicar vaga dev sênior</span>
                  </div>
                  <span className="text-xs text-amber-500/80">Hoje</span>
                </div>
                <div className="group flex items-center justify-between p-2 hover:bg-white/5 rounded-md transition-colors -mx-2 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-medium shrink-0">JO</div>
                    <span className="text-slate-200">Preparar demo para cliente</span>
                  </div>
                  <span className="text-xs text-slate-500">Quarta</span>
                </div>
              </div>
            </section>
          </div>
          
          {/* Action buttons at bottom of panel */}
          <div className="p-4 border-t border-white/5 bg-[#0f1115] flex gap-2">
            <button className="flex-1 bg-white/5 hover:bg-white/10 text-white text-xs font-medium py-2 rounded-md transition-colors border border-white/5 flex items-center justify-center gap-2">
              <LinkIcon className="w-3.5 h-3.5" /> Copiar Link
            </button>
            <button className="flex-1 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 text-xs font-medium py-2 rounded-md transition-colors border border-indigo-500/20 flex items-center justify-center gap-2">
              <Smartphone className="w-3.5 h-3.5" /> Reenviar WhatsApp
            </button>
          </div>
        </aside>
      </div>

      {/* Bottom Marketing Bar */}
      <div className="bg-indigo-600 border-t border-indigo-700 p-2 text-center text-xs font-medium text-indigo-50 sticky bottom-0 z-50">
        <span className="inline-block mr-2">🎉</span> 
        Período de teste — 12 dias restantes • Upgrade para Pro e nunca perca um resumo.
        <a href="#" className="ml-3 underline decoration-indigo-400/50 hover:decoration-indigo-200 underline-offset-2 transition-colors">
          Ver planos
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
