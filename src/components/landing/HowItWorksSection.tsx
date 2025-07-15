import { UserPlus, Combine, MailCheck, BarChart, type LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

export function HowItWorksSection() {
  const t = useTranslations('howItWorks');
  
  const translatedSteps = [
    {
      titleKey: 'step1.title',
      descriptionKey: 'step1.description',
      icon: UserPlus,
    },
    {
      titleKey: 'step2.title',
      descriptionKey: 'step2.description',
      icon: Combine,
    },
    {
      titleKey: 'step3.title',
      descriptionKey: 'step3.description',
      icon: MailCheck,
    },
    {
      titleKey: 'step4.title',
      descriptionKey: 'step4.description',
      icon: BarChart,
    },
  ];

  return (
    <section id="process" className="py-12 sm:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">{t('title')}</h2>
            <p className="mx-auto max-w-[700px] text-secondary-content md:text-xl/relaxed font-medium">
              {t('description')}
            </p>
        </div>
        <div className="relative">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {translatedSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-6 text-center space-y-4 relative bg-white/30 border">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-4 ring-8 ring-card">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">{t(step.titleKey)}</h3>
                  <p className="text-muted-content font-medium">{t(step.descriptionKey)}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
