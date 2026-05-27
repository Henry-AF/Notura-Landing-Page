import { NavBar, PricingSection, Footer } from "@/pages/produtividade";

export default function Planos() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background text-foreground selection:bg-primary/30">
      <NavBar />
      <main className="flex-1 pt-24 md:pt-28">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
