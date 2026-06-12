import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { fadeInUp } from "@/lib/animations";

export function Newsletter() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-24">

      {/* Fundo roxo base */}
      <div className="absolute inset-0 bg-[#5341CD]" />

      {/* Camada de "silk" simulada com gradientes animados em CSS — sem R3F */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, #7B6FE8 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 20%, #9B8AFB 0%, transparent 55%),
            radial-gradient(ellipse 70% 50% at 50% 80%, #4333B8 0%, transparent 60%)
          `,
          animation: "silkShift 8s ease-in-out infinite alternate",
        }}
      />

      {/* Segunda camada para profundidade */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 100% 40% at 60% 60%, #C084FC 0%, transparent 50%),
            radial-gradient(ellipse 50% 70% at 10% 80%, #818CF8 0%, transparent 55%)
          `,
          animation: "silkShift 12s ease-in-out infinite alternate-reverse",
        }}
      />

      {/* Grain sutil */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Animação keyframe inline */}
      <style>{`
        @keyframes silkShift {
          0%   { transform: scale(1)    translate(0%,   0%); }
          33%  { transform: scale(1.08) translate(3%,  -2%); }
          66%  { transform: scale(0.96) translate(-2%,  4%); }
          100% { transform: scale(1.04) translate(1%,  -3%); }
        }
      `}</style>

      <div className="page-shell relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10"
        >
          {/* Copy */}
          <div className="text-center md:text-left">
            <p className="max-w-md text-lg leading-relaxed text-white md:text-xl">
              Quer receber{" "}
              <strong className="font-bold">dicas de produtividade em reuniões</strong>{" "}
              direto na sua caixa de entrada?
            </p>
          </div>

          {/* Formulário */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-2 text-center md:items-start md:text-left"
              >
                <p className="text-sm font-medium text-white/80">
                  Inscreva-se para receber dicas do{" "}
                  <span className="font-bold text-white">Notura</span> no seu e-mail
                </p>
                <p className="text-base font-semibold text-white">
                  ✓ Você está na lista!
                </p>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center gap-3 md:items-start">
                <p className="text-center text-sm font-medium text-white/80 md:text-left">
                  Inscreva-se para receber dicas do{" "}
                  <span className="font-bold text-white">Notura</span> no seu e-mail
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full flex-col gap-3 md:flex-row md:items-center"
                >
                  {/* Input maior */}
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu melhor e-mail"
                    className="h-40 w-full flex-1 rounded-full border border-white/20 bg-white/15 px-6 text-base text-white placeholder-white/50 outline-none backdrop-blur-sm transition focus:border-white/40 focus:bg-white/20 focus:ring-2 focus:ring-white/20"
                  />

                  {/* Botão — branco com texto roxo */}
                  <button
                    type="submit"
                    className="h-14 w-full rounded-full bg-white px-8 text-base font-bold text-[#5341CD] shadow-lg transition-all hover:bg-white/90 hover:shadow-xl active:scale-[0.98] md:w-auto md:whitespace-nowrap"
                  >
                    Inscreva-se
                  </button>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}