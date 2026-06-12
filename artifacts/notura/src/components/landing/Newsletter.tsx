import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      {/* Fundo gradiente roxo — igual ao roxo da marca */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, #EEF0FF 0%, #C4B5FD 35%, #9B8AFB 60%, #DDD8F5 100%)",
        }}
      />

      {/* Ruído de textura sutil — replica o grain da referência */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="page-shell relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
        >
          {/* Lado esquerdo — copy */}
          <div>
            <p className="max-w-md text-lg leading-relaxed text-zinc-900 md:text-xl">
              Quer receber{" "}
              <strong className="font-bold">dicas de produtividade em reuniões</strong>{" "}
              direto na sua caixa de entrada?
            </p>
          </div>

          {/* Lado direito — formulário */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-1"
              >
                <p className="text-sm font-medium text-zinc-800">
                  Inscreva-se para receber dicas do{" "}
                  <span className="font-bold">Notura</span> no seu e-mail
                </p>
                <p className="text-base font-semibold text-zinc-900">
                  ✓ Você está na lista!
                </p>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-zinc-800">
                  Inscreva-se para receber dicas do{" "}
                  <span className="font-bold">Notura</span> no seu e-mail
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu melhor e-mail"
                    className="h-12 flex-1 rounded-full border border-zinc-900/15 bg-white/80 px-5 text-sm text-zinc-900 placeholder-zinc-400 outline-none backdrop-blur-sm transition focus:border-zinc-900/30 focus:ring-2 focus:ring-zinc-900/10"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition-all hover:bg-zinc-800 hover:shadow-lg active:scale-[0.98]"
                  >
                    Inscreva-se
                    <ArrowRight className="h-4 w-4" />
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
