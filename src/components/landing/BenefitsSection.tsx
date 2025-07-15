import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrainCircuit, Wand2, MailCheck, Share2, FileText, Phone, type LucideIcon } from "lucide-react";
import { useTranslations } from 'next-intl';

export function BenefitsSection() {
  const t = useTranslations('benefits');
  
  const translatedBenefits = [
    {
      titleKey: 'centralizedData.title',
      descriptionKey: 'centralizedData.description',
      icon: Share2,
    },
    {
      titleKey: 'aiValuation.title',
      descriptionKey: 'aiValuation.description',
      icon: BrainCircuit,
    },
    {
      titleKey: 'smartActions.title',
      descriptionKey: 'smartActions.description',
      icon: Wand2,
    },
    {
      titleKey: 'quoteGeneration.title',
      descriptionKey: 'quoteGeneration.description',
      icon: FileText,
    },
    {
      titleKey: 'directCommunication.title',
      descriptionKey: 'directCommunication.description',
      icon: Phone,
    },
    {
      titleKey: 'taskAutomation.title',
      descriptionKey: 'taskAutomation.description',
      icon: MailCheck,
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">{t('title')}</h2>
            <p className="mx-auto max-w-[700px] text-secondary-content md:text-xl/relaxed font-medium">
              {t('description')}
            </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {translatedBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="relative flex flex-col items-center text-center p-6 bg-white/30 rounded-lg border border-transparent transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)]">
                  <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t(benefit.titleKey)}</h3>
                  <p className="text-muted-content font-medium">{t(benefit.descriptionKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
