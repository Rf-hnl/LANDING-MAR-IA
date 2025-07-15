import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { DemoSection } from "@/components/landing/DemoSection";
import { LeadFormSection } from "@/components/landing/LeadFormSection";
import { Footer } from "@/components/landing/Footer";
import { FAQSection } from "@/components/landing/FAQSection";
import { CopyImprover } from "@/components/landing/CopyImprover";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent p-4 md:p-8">
      <div className="mx-auto w-full max-w-[90rem] flex-1 rounded-2xl bg-black/20 backdrop-blur-2xl border border-white/5 overflow-hidden flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <HeroSection />
          <BenefitsSection />
          <HowItWorksSection />
          <DemoSection />
          <FAQSection />
          <LeadFormSection />
        </main>
        <Footer />
        <CopyImprover />
      </div>
    </div>
  );
}
