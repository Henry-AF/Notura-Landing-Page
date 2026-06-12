import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Users, Building2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { LOGIN_URL } from "@/components/landing/constants";

const PLANS = [
  {
    id: "free",
    name: "Free",
    subtitle: "Teste agora. Sem cartão. Sem compromisso.",
    icon: Sparkles,
    iconColor: "#9598A8",
    iconBg: "rgba(149,152,168,0.12)",
    priceMonthly: "R$ 0",
    priceAnnual: "R$ 0",
    period: "/mes",
    savingsBadge: null as string | null,
    badge: null as string | null,
    badgeColor: null as string | null,
    highlight: false,
    cta: "Testar agora — é grátis",
    ctaVariant: "ghost" as const,
    href: LOGIN_URL,
    features: [
      "3 reuniões grátis",
      "Resumo automatico no WhatsApp",
      "Tarefas no kanban",
      "Decisoes registradas",
      "Sem precisar de cartao",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    subtitle: "Para quem já viu o valor e quer escalar.",
    icon: Users,
    iconColor: "#10B981",
    iconBg: "rgba(16,185,129,0.12)",
    priceMonthly: "R$ 49",
    priceAnnual: "R$ 39",
    period: "/mes",
    savingsBadge: "economize 30%" as string | null,
    badge: null as string | null,
    badgeColor: null as string | null,
    highlight: false,
    cta: "Plano atual",
    ctaVariant: "ghost" as const,
    href: LOGIN_URL,
    features: [
      "30 reuniões por mês",
      "Resumo + decisoes no WhatsApp",
      "Tarefas automaticas no kanban",
      "Suporte por e-mail",
      "Cancele quando quiser",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    subtitle: "Até 100 reuniões por mês com execução máxima.",
    icon: Zap,
    iconColor: "#6851FF",
    iconBg: "rgba(104,81,255,0.15)",
    priceMonthly: "R$ 99",
    priceAnnual: "R$ 69",
    period: "/mes",
    savingsBadge: "economize 30%" as string | null,
    badge: "Mais popular" as string | null,
    badgeColor: "#6851FF" as string | null,
    highlight: true,
    cta: "Quero o Pro — começar agora",
    ctaVariant: "primary" as const,
    href: LOGIN_URL,
    features: [
      "100 reuniões por mês",
      "Resumo + decisoes + kanban automatico",
      "Suporte direto no WhatsApp",
      "Chatbot de IA para consulta",
      "Portal do cliente incluído",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "Operação grande, necessidades específicas.",
    icon: Building2,
    iconColor: "#06B6D4",
    iconBg: "rgba(6,182,212,0.12)",
    priceMonthly: "Consultar",
    priceAnnual: "Consultar",
    period: "",
    savingsBadge: null as string | null,
    badge: "Atendimento consultivo" as string | null,
    badgeColor: "#06B6D4" as string | null,
    highlight: false,
    cta: "Falar com a equipe",
    ctaVariant: "teal" as const,
    href: "mailto:contato@notura.com.br",
    features: [
      "Limite personalizado",
      "Usuarios ilimitados",
      "Onboarding assistido",
      "Integracoes personalizadas",
      "SLA e suporte prioritario",
    ],
  },
];

export function Pricing() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="planos" className="bg-[#F8F8FC] py-24 md:py-28" ref={ref}>
      <div className="page-shell">

        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mx-auto mb-8 max-w-xl text-center"
        >
          <h2 className="font-display text-4xl font-bold tracking-[-0.03em] text-zinc-900 md:text-5xl">
            Escolha seu plano
          </h2>
          <p className="mt-3 text-base text-zinc-500">
            Atualize a qualquer momento. Cancele quando quiser.
          </p>
        </motion.div>

        {/* Toggle mensal / anual */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mb-2 flex justify-center"
        >
          <div className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                !isAnnual
                  ? "bg-[#5341CD] text-white shadow-sm"
                  : "text-[#5341CD] hover:text-[#4333B8]"
              }`}
            >
              Mensal
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                isAnnual
                  ? "bg-[#5341CD] text-white shadow-sm"
                  : "text-[#5341CD] hover:text-[#4333B8]"
              }`}
            >
              Anual — economize 30%
            </button>
          </div>
        </motion.div>

        {/* Sub-label */}
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mb-10 text-center text-sm text-zinc-400"
        >
          {isAnnual
            ? "Cobrado anualmente. A selecao e mantida entre paginas e checkouts."
            : "Cobrado mensalmente. A selecao e mantida entre paginas e checkouts."}
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const showSavings = isAnnual && plan.savingsBadge;

            return (
              <motion.div
                key={plan.id}
                variants={fadeInUp}
                className="relative flex flex-col rounded-2xl bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  border: plan.highlight
                    ? "2px solid rgba(104,81,255,0.4)"
                    : "1px solid #E5E7EB",
                  background: plan.highlight
                    ? "rgba(104,81,255,0.03)"
                    : "#FFFFFF",
                }}
              >
                {/* Badge topo */}
                {plan.badge && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-sm"
                    style={{ background: plan.badgeColor ?? "#5341CD" }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Ícone */}
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: plan.iconBg }}
                >
                  <Icon className="h-5 w-5" style={{ color: plan.iconColor }} />
                </div>

                {/* Nome */}
                <p className="mt-4 text-base font-semibold text-zinc-800">
                  {plan.name}
                </p>
                <p className="mt-1 text-xs leading-5 text-zinc-400">
                  {plan.subtitle}
                </p>

                {/* Preço */}
                <div className="mt-5">
                  {showSavings && (
                    <span className="mb-2 inline-block rounded-full bg-[#5341CD]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#5341CD]">
                      {plan.savingsBadge}
                    </span>
                  )}
                  <div className="flex items-end gap-1">
                    <span
                      className="font-display font-bold text-zinc-900"
                      style={{
                        fontSize: plan.id === "enterprise" ? "2rem" : "2.25rem",
                        lineHeight: 1,
                      }}
                    >
                      {price}
                    </span>
                    {plan.period && (
                      <span className="mb-1 text-sm text-zinc-400">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0"
                        style={{
                          color:
                            plan.id === "enterprise"
                              ? "#06B6D4"
                              : plan.highlight
                              ? "#6851FF"
                              : "#10B981",
                        }}
                      />
                      <span className="text-[13px] leading-snug text-zinc-600">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 flex w-full items-center justify-center rounded-full py-2.5 text-sm font-bold transition-all active:scale-[0.97] ${
                    plan.ctaVariant === "primary"
                      ? "bg-[#5341CD] text-white shadow-[0_4px_14px_rgba(83,65,205,0.35)] hover:bg-[#4333B8]"
                      : plan.ctaVariant === "teal"
                      ? "border border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4]/5"
                      : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Rodapé */}
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mt-8 text-center text-xs text-zinc-400"
        >
          Pagamento seguro ·{" "}
          {isAnnual ? "Cobrado anualmente" : "Cobrado mensalmente"} · Cancele a
          qualquer momento
        </motion.p>
      </div>
    </section>
  );
}