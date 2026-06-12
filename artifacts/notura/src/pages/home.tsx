import { AuthorityBar } from "@/components/landing/AuthorityBar";
import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Navbar } from "@/components/landing/Navbar";
import { Newsletter } from "@/components/landing/Newsletter";
import { Pricing } from "@/components/landing/Pricing";
import { SocialProofFullWidth } from "@/components/landing/social-proof-full-width";
import { Testimonials } from "@/components/landing/Testimonials";
import { UseCases } from "@/components/landing/UseCases";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-[var(--notura-violet-50)] text-foreground selection:bg-[var(--notura-primary-glow)]">
      <Navbar />
      <main>
        <Hero />
        <SocialProofFullWidth />
        <AuthorityBar />
        <Features />
        <UseCases />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
