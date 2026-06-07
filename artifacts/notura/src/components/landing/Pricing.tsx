import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { LOGIN_URL } from "@/components/landing/constants";
import { useInView } from "@/hooks/useInView";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const plans = [
  {
    name: "Free",
    price: "R$ 0",
    subtitle: "Features essenciais para começar.",
    features: ["Resumos automáticos", "1 fluxo ativo", "Envio manual para WhatsApp"],
  },
  {
    name: "Pro",
    price: "R$ 39,90/mês",
    badge: "Favorito dos consultores",
    subtitle: "Automação diária para quem vive de reunião e follow-up.",
    features: ["IA avançada", "WhatsApp automático", "Integração com CRM", "Histórico ilimitado"],
    featured: true,
  },
  {
    name: "Unlimited",
    price: "R$ 59,90/mês",
    subtitle: "Para operações em escala e times maiores.",
    features: ["Tudo do Pro", "Múltiplos times", "Fluxos paralelos", "Prioridade no suporte"],
  },
];

export function Pricing() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="pricing" className="bg-white py-24 md:py-28" ref={ref}>
      <div className="page-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="notura-pill mb-6">Preços</p>
          <h2 className="notura-section-title">Escolha o ritmo de automação que sua operação precisa.</h2>
          <p className="notura-muted mt-5">Ancoragem simples: comece grátis, evolua para o fluxo que elimina o retrabalho pós-reunião.</p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--notura-violet-50)] px-5 py-2 text-sm font-semibold text-[var(--notura-primary)]">
            <Sparkles className="h-4 w-4" />
            7 dias grátis · Sem cartão de crédito
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`rounded-[var(--notura-radius-2xl)] border p-8 ${
                plan.featured
                  ? "scale-[1.02] border-[var(--notura-primary)] bg-[var(--notura-primary)] text-white shadow-[var(--notura-shadow-glow)]"
                  : "border-[var(--notura-violet-200)] bg-white text-zinc-950 shadow-[var(--notura-shadow-elevated)]"
              }`}
            >
              {plan.badge && (
                <div className="inline-flex rounded-full bg-white/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  {plan.badge}
                </div>
              )}
              <div className="mt-5">
                <p className={`font-display text-2xl font-bold ${plan.featured ? "text-white" : "text-zinc-950"}`}>{plan.name}</p>
                <p className={`mt-3 text-4xl font-black ${plan.featured ? "text-white" : "text-zinc-950"}`}>{plan.price}</p>
                <p className={`mt-3 text-sm leading-7 ${plan.featured ? "text-white/80" : "text-zinc-500"}`}>{plan.subtitle}</p>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-3 text-sm leading-7 ${plan.featured ? "text-white/88" : "text-zinc-600"}`}>
                    <Check className={`mt-1 h-4 w-4 shrink-0 ${plan.featured ? "text-white" : "text-[var(--notura-success)]"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-white text-[var(--notura-primary)]"
                    : "bg-[var(--notura-primary)] text-white"
                }`}
              >
                Começar agora
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}