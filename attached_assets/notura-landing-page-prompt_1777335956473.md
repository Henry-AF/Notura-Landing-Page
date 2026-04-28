# 🚀 Prompt: Landing Page Notura — Inspirada na WhatsForm

## Contexto

Crie uma **landing page completa** para o produto **Notura** em Next.js (App Router), usando Tailwind CSS com o design system já configurado no `tailwind.config.ts` colado abaixo. A página deve ser **inspirada estruturalmente** na landing page de referência da WhatsForm (imagem anexada), mas com identidade visual, copy e propósito completamente adaptados para a Notura.

---

## 📎 Referência visual (imagem anexada)

Analise cuidadosamente a imagem de referência da **WhatsForm landing page**. Extraia dela:

- **Estrutura de seções** (hero, como funciona, features, templates/exemplos, depoimento, FAQ, CTA final, footer)
- **Layout de cada seção** (proporcões, grid, hierarquia visual)
- **Padrões de componentes** (cards de feature, steps numerados, card de template com imagem + botões, accordion de FAQ, avatar stack, bolhas de chat/interação)
- **Fluxo narrativo da página** (problema → solução → prova social → call to action)

Replique essa **estrutura e lógica de persuasão**, mas com o conteúdo e identidade da Notura.

---

## 🎨 Design System da Notura

Use **exatamente** as cores e tokens do `tailwind.config.ts` abaixo. As cores principais da Notura são **roxo/violeta** — substitua todos os verdes do WhatsForm pelo roxo primário da Notura.

```ts
// tailwind.config.ts — Notura
const config = {
  theme: {
    extend: {
      colors: {
        notura: {
          primary: "#6851FF",
          "primary-light": "#8B7AFF",
          "primary-dark": "#5740EE",
          "primary-glow": "rgba(104,81,255,0.3)",
          secondary: "#BA2BF2",
          processing: "#E43790",
          bg: "rgb(var(--cn-bg) / <alpha-value>)",
          "bg-secondary": "rgb(var(--cn-bg2) / <alpha-value>)",
          surface: "rgb(var(--cn-surface) / <alpha-value>)",
          "surface-2": "rgb(var(--cn-surface2) / <alpha-value>)",
          ink: "rgb(var(--cn-ink) / <alpha-value>)",
          "ink-secondary": "rgb(var(--cn-ink2) / <alpha-value>)",
          muted: "rgb(var(--cn-muted) / <alpha-value>)",
          border: "rgb(var(--cn-border) / <alpha-value>)",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
        violet: {
          50: "#F5F3FF", 100: "#EDE9FE", 200: "#DDD6FE",
          300: "#C4B5FD", 400: "#A78BFA", 500: "#8B5CF6",
          600: "#7C3AED", 700: "#6D28D9", 800: "#5B21B6", 900: "#1E1B4B",
        },
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["56px", { fontWeight: "800", lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["40px", { fontWeight: "700", lineHeight: "1.2" }],
        "display-md": ["28px", { fontWeight: "600", lineHeight: "1.3" }],
        "display-sm": ["20px", { fontWeight: "600" }],
      },
      borderRadius: {
        xs: "6px", md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)", xl: "24px", "2xl": "32px", full: "9999px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(104, 81, 255, 0.25)",
        card: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
        elevated: "0 4px 12px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        "gradient-mesh": "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 40%, #FAF5FF 100%)",
        "gradient-violet": "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.4s cubic-bezier(0,0,0.2,1)",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
```

---

## 📝 Copy & Conteúdo da Notura

**O que é a Notura:** Uma plataforma de IA para anotações e gestão de conhecimento — captura, organiza e conecta suas ideias automaticamente usando inteligência artificial.

Use os seguintes textos como base (adapte o tom conforme necessário):

### Hero
- **Headline:** `Capture ideias. A IA organiza tudo.`
- **Subheadline:** `Notura transforma anotações brutas em conhecimento estruturado — automaticamente, sem esforço.`
- **CTA primário:** `Começar grátis →`
- **CTA secundário:** `Ver demonstração`
- **Social proof:** `+12.000 usuários organizando melhor suas ideias`

### Seção "Como funciona" (3 steps — igual à WhatsForm)
1. **Você captura** — Anote qualquer coisa: textos, links, áudios, imagens
2. **A IA processa** — Notura categoriza, conecta e resume automaticamente
3. **Você acessa** — Encontre qualquer ideia em segundos, em qualquer dispositivo

### Features (cards — igual à seção de features da WhatsForm)
- **Organização automática** — Sem pastas, sem tags manuais. A IA entende o contexto.
- **Conexões inteligentes** — Descubra relações entre notas que você não sabia que existiam.
- **Busca semântica** — Encontre pelo significado, não pela palavra exata.
- **Tradução automática** — Capture em qualquer idioma, acesse em português.
- **Sincronização em tempo real** — Todos os dispositivos, sempre atualizados.
- **Exportação flexível** — Markdown, PDF, Notion, Obsidian e mais.

### Seção de depoimento (igual ao "Our users love us")
- **Título:** `Nossos usuários adoram. Experimente você também!`
- **Depoimento:** *"Notura mudou completamente como eu processo informação. Antes eu perdia horas procurando anotações. Agora a IA faz isso por mim."* — **Rafael M., Product Manager**

### Templates / Casos de uso (cards com imagem — igual à seção de templates da WhatsForm)
- Reuniões de trabalho
- Estudos e pesquisa
- Planejamento pessoal
- Projetos criativos
- Aulas e cursos
- Leitura e curadoria

### FAQ
1. **Notura é gratuito?** → Sim, plano gratuito com features essenciais. Planos pagos desbloqueiam IA avançada e armazenamento ilimitado.
2. **Meus dados são seguros?** → Sim, criptografia end-to-end e armazenamento na sua região.
3. **Como começar?** → Crie sua conta em 30 segundos. Sem cartão de crédito.
4. **Funciona offline?** → Sim, o app móvel funciona offline e sincroniza quando voltar à internet.

### CTA Final
- **Título:** `Pronto para transformar suas anotações?`
- **Subtítulo:** `Junte-se a milhares de pessoas que já pensam melhor com Notura.`
- **CTA:** `Criar conta grátis →`

### Footer
- Links: Produto, Preços, Blog, Changelog, Status
- Links legais: Privacidade, Termos
- Tagline: `Notura — Pense melhor, lembre de tudo.`

---

## 🏗️ Estrutura de Componentes

Crie os seguintes componentes em `src/components/landing/`:

```
landing/
├── Navbar.tsx          # Logo + links + CTA pill (roxo, igual ao verde da WhatsForm)
├── Hero.tsx            # Headline + CTA + mockup animado + social proof avatars
├── HowItWorks.tsx      # 3 steps numerados com ícones e descrição
├── Features.tsx        # Grid de cards de features (2 colunas)
├── Testimonial.tsx     # Card de depoimento + badge de usuários
├── UseCases.tsx        # Grid de cards com imagem (6 casos de uso)
├── FAQ.tsx             # Accordion com radix-ui ou nativo
├── CTAFinal.tsx        # Seção final com gradiente roxo e CTA
└── Footer.tsx          # Links + social + tagline
```

A page principal em `src/app/page.tsx` importa e compõe todos esses componentes.

---

## 🎯 Especificações técnicas

### Estilo geral
- Fundo da página: `#F5F3FF` (violet-50) ou branco off-white — **não dark mode** nesta landing
- Cards: fundo branco `#FFFFFF`, borda `1px solid #DDD6FE` (violet-200), radius `16px`
- Botão primário: `bg-notura-primary` (#6851FF), branco, radius `full`, padding `12px 28px`
- Botão secundário: borda roxa, texto roxo, fundo transparente
- Seção "Como funciona" (passo 2): fundo roxo sólido `#6851FF` com texto branco (igual ao card verde da WhatsForm)
- Accent/destaque em headlines: `text-notura-primary`

### Animações (replicar o feel da WhatsForm)
- Hero mockup: `animate-float` (sobe e desce suavemente)
- Cards de feature: hover com `scale-[1.02]` e `shadow-elevated`
- Seções: `animate-fade-in` no scroll (use IntersectionObserver simples)
- Avatar stack: sobreposição de 4–5 avatares circulares roxos

### Navbar
- Logo: ícone SVG simples (estrela/constelação) + "Notura" em `font-display font-bold`
- Links: Produto ▾, Recursos, Preços, Blog
- CTA: pill roxo "Criar conta" (igual ao "Login" verde da WhatsForm)
- Sticky com `backdrop-blur-md bg-white/80` no scroll

### Hero mockup
- Simule uma interface de notas com cards de anotação flutuantes
- Use divs estilizados com sombra e conteúdo fake de notas
- Adicione uma "conexão" visual entre notas (linha ou seta SVG pontilhada)

### Seção de templates/casos de uso
- Replicar exatamente o grid 2x3 da WhatsForm
- Cada card: imagem placeholder com gradiente roxo, título, descrição curta, botões "Explorar →" e "Demo"

---

## ✅ Checklist de entrega

- [ ] Página responsiva (mobile-first)
- [ ] Todos os componentes criados em `src/components/landing/`
- [ ] `src/app/page.tsx` montando a página completa
- [ ] Nenhuma dependência nova além das já no projeto (radix, tailwind, next)
- [ ] Sem erros de TypeScript
- [ ] Navbar sticky funcional
- [ ] FAQ accordion abre/fecha
- [ ] Todas as cores usando tokens do `tailwind.config.ts` — sem hex hardcoded fora do config
- [ ] Hover states em todos os botões e cards interativos
- [ ] Seção hero com social proof (avatar stack + número de usuários)

---

## 📌 Notas importantes

1. **Analise a imagem de referência** antes de começar — ela é a principal fonte de verdade para layout e hierarquia.
2. Mantenha a **mesma lógica de persuasão** da WhatsForm: problema simples → solução clara → prova social → CTA.
3. O roxo `#6851FF` substitui o verde `#25D366` em **todos** os elementos de destaque.
4. Use `font-display` (Plus Jakarta Sans) para headlines e `font-body` (Inter) para texto corrido.
5. A seção "Translate to all languages" da WhatsForm deve virar "Capture em qualquer formato" — mostrando suporte a texto, áudio, imagem, link.
6. Nada de lorem ipsum — use o copy fornecido acima.
