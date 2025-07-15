"use client";

import { useState, useEffect } from 'react';
import { HeroSection } from "@/components/landing/HeroSection";
import { DemoSection } from "@/components/landing/DemoSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { LeadFormSection } from "@/components/landing/LeadFormSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { IntlProvider } from 'next-intl';
import VisitTracker from '@/components/VisitTracker';

// Import messages
import esMessages from '../../messages/es.json';
import enMessages from '../../messages/en.json';

const messages = {
  es: esMessages,
  en: enMessages,
};

export default function LandingPage() {
  const [locale, setLocale] = useState<'es' | 'en'>('es');

  // Load locale from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as 'es' | 'en';
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  const handleLanguageChange = (newLocale: 'es' | 'en') => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.15),transparent_50%)] pointer-events-none"></div>
        <VisitTracker />
        <Header onLanguageChange={handleLanguageChange} />
        <main className="flex-1 relative z-10">
          <HeroSection />
          <DemoSection />
          <FeaturesSection />
          <BenefitsSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <LeadFormSection />
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </IntlProvider>
  );
}