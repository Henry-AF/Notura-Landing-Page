import { motion } from "framer-motion";
import aiVideoChat from "@assets/ai-video-chat.mp4";
import recordScreen from "@assets/record-screen.png";
import resumoScreen from "@assets/resumo-screen.png";
import { useInView } from "@/hooks/useInView";

const cardTransition = (index: number) => ({ duration: 0.55, delay: index * 0.08, ease: [0, 0, 0.2, 1] as const });

const sectionFont = { fontFamily: '"Poppins", sans-serif' };

const cardClass = "overflow-hidden rounded-[30px] bg-[linear-gradient(145deg,#ffffff_0%,#f5f2ff_100%)] p-8 shadow-[0_14px_40px_rgba(17,24,39,0.05)] md:p-9";

export function Features() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="features" className="bg-[#F7F7F5] py-24 md:py-28" ref={ref}>
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto mb-6 inline-flex rounded-full bg-[#ede9ff] px-4 py-2 text-xs font-medium tracking-[0.01em] text-[#5341CD]" style={sectionFont}>
            Produto em construção
          </p>
          <h2 className="mx-auto max-w-2xl text-[2rem] font-extrabold leading-[1.08] text-[#1a1535] md:text-[3rem]" style={sectionFont}>
            Tudo o que o Notura faz depois que a conversa termina.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] font-normal leading-8 text-[#6b6890] md:text-base" style={sectionFont}>
            Uma grade de recursos pensada para transformar áudio bruto em contexto, tarefas, CRM atualizado e execução distribuida.
          </p>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <div className="flex flex-col gap-6">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={cardTransition(0)}
              className={`${cardClass} min-h-[620px] xl:min-h-[720px]`}
            >
              <h3 className="max-w-sm text-[1.7rem] font-bold leading-[1.18] text-[#1a1535] xl:text-[1.95rem]" style={sectionFont}>
                Pergunte qualquer coisa ao Notura
              </h3>
              <p className="mt-3 max-w-md text-[0.92rem] leading-[1.72] text-[#6b6890]" style={sectionFont}>
                O AI Chat busca em todas as suas reuniões para responder perguntas, criar follow-ups, relatorios e resumos instantaneos.
              </p>

              <div className="relative mt-8 flex min-h-[420px] items-end justify-center xl:min-h-[500px]">
                <div className="absolute inset-x-8 bottom-4 top-12 rounded-full bg-[radial-gradient(circle,_rgba(83,65,205,0.12)_0%,rgba(83,65,205,0)_72%)] blur-3xl" />
                <div className="relative z-10 w-[17rem] rounded-[32px] bg-white/92 p-3 shadow-[0_20px_60px_rgba(83,65,205,0.10)] xl:w-[18.5rem]">
                  <div className="absolute left-1/2 top-3 h-1.5 w-20 -translate-x-1/2 rounded-full bg-[#ddd7ff]" />
                  <video
                    src={aiVideoChat}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="mt-3 block aspect-[9/19.5] w-full rounded-[24px] object-cover object-top shadow-[0_16px_48px_rgba(83,65,205,0.10)]"
                  >
                    Seu navegador nao suporta reproducao de video.
                  </video>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={cardTransition(2)}
              className={`${cardClass} min-h-[380px] xl:min-h-[420px]`}
            >
              <h3 className="max-w-md text-[1.45rem] font-bold leading-[1.2] text-[#1a1535]" style={sectionFont}>
                Resumos instantaneos em que voce pode confiar
              </h3>
              <p className="mt-3 max-w-md text-[0.9rem] leading-[1.7] text-[#6b6890]" style={sectionFont}>
                Cada reuniao vira um resumo claro com decisoes, itens de acao e proximos passos.
              </p>

              <div className="relative mt-8 rounded-[26px] bg-white/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(83,65,205,0.06),transparent_58%)] blur-3xl" />
                <img
                  src={resumoScreen}
                  alt="Dashboard do Notura com resumo estruturado da reuniao"
                  className="relative z-10 block w-full rounded-[18px] object-cover shadow-[0_16px_48px_rgba(83,65,205,0.10)]"
                />
              </div>
            </motion.article>
          </div>

          <div className="flex flex-col gap-6">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={cardTransition(1)}
              className={`${cardClass} min-h-[420px] xl:min-h-[360px]`}
            >
              <h3 className="max-w-sm text-[1.35rem] font-bold leading-[1.22] text-[#1a1535]" style={sectionFont}>
                Grave direto do seu computador
              </h3>
              <p className="mt-3 max-w-md text-[0.88rem] leading-[1.68] text-[#6b6890]" style={sectionFont}>
                Capture reunioes do Mac ou Windows sem adicionar um bot a call.
              </p>

              <div className="mt-6 rounded-[24px] bg-white/82 p-4 shadow-[0_10px_30px_rgba(83,65,205,0.06)]">
                <div className="mb-3 flex items-center gap-2 px-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                </div>
                <img
                  src={recordScreen}
                  alt="Aplicativo do Notura gravando a reuniao no desktop"
                  className="block w-full rounded-[18px] object-cover shadow-[0_16px_48px_rgba(83,65,205,0.10)] [transform:perspective(900px)_rotateY(-3deg)]"
                />
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={cardTransition(3)}
              className={`${cardClass} min-h-[500px] xl:min-h-[620px]`}
            >
              <h3 className="max-w-sm text-[1.55rem] font-bold leading-[1.18] text-[#1a1535]" style={sectionFont}>
                Transcricao em tempo real, sem ruido operacional
              </h3>
              <p className="mt-3 max-w-md text-[0.9rem] leading-[1.72] text-[#6b6890]" style={sectionFont}>
                Veja as palavras surgindo com identificacao de multiplos falantes, contexto e prioridades enquanto a conversa ainda esta acontecendo.
              </p>

              <div className="mt-8 rounded-[26px] bg-[linear-gradient(180deg,#f7f5ff_0%,#ffffff_100%)] p-5 shadow-[0_12px_36px_rgba(83,65,205,0.06)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#5341CD]" />
                    <span className="text-sm font-medium text-[#554f78]" style={sectionFont}>Ao vivo</span>
                  </div>
                  <span className="rounded-full bg-[#ede9ff] px-3 py-1 text-xs font-medium text-[#5341CD]" style={sectionFont}>
                    4 falantes
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    ["Rafael", "Precisamos revisar as metricas antes do fechamento e alinhar follow-up com o time comercial.", "#e4dcff"],
                    ["Marina", "Perfeito. Vou consolidar os pontos principais e disparar as pendencias ainda hoje.", "#dcecff"],
                    ["Pedro", "Ja deixo o CRM preparado para receber os proximos passos e os responsaveis da reuniao.", "#fde8d8"],
                  ].map(([speaker, text, color]) => (
                    <div key={speaker} className="rounded-[18px] bg-white/88 px-4 py-3 shadow-[0_8px_24px_rgba(83,65,205,0.04)]">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-[#4d4672]" style={{ backgroundColor: color as string, ...sectionFont }}>
                          {speaker.slice(0, 2).toUpperCase()}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[#1a1535]" style={sectionFont}>{speaker}</p>
                          <p className="mt-1 text-[0.86rem] leading-6 text-[#6b6890]" style={sectionFont}>{text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
