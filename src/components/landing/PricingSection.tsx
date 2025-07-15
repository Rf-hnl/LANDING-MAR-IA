import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useTranslations } from 'next-intl';

export function PricingSection() {
  const t = useTranslations('pricing');
  
  const translatedPlans = [
    {
      nameKey: 'basic.name',
      descriptionKey: 'basic.description',
      priceKey: 'basic.price',
      periodKey: 'basic.period',
      featuresKey: 'basic.features',
      ctaKey: 'basic.cta',
      isRecommended: false,
    },
    {
      nameKey: 'professional.name',
      descriptionKey: 'professional.description',
      priceKey: 'professional.price',
      periodKey: 'professional.period',
      featuresKey: 'professional.features',
      ctaKey: 'professional.cta',
      recommendedKey: 'professional.recommended',
      isRecommended: true,
    },
    {
      nameKey: 'enterprise.name',
      descriptionKey: 'enterprise.description',
      priceKey: 'enterprise.price',
      featuresKey: 'enterprise.features',
      ctaKey: 'enterprise.cta',
      isRecommended: false,
    },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-white">{t('title')}</h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed font-medium">
            {t('description')}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {translatedPlans.map((plan, index) => (
            <Card key={index} className={`flex flex-col bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow ${plan.isRecommended ? 'border-primary shadow-lg relative' : ''}`}>
              {plan.isRecommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {t(plan.recommendedKey!)}
                  </div>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">{t(plan.nameKey)}</CardTitle>
                <CardDescription className="text-gray-600">{t(plan.descriptionKey)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div className="text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{t(plan.priceKey)}</span>
                    {plan.periodKey && <span className="text-gray-600 font-medium ml-1">{t(plan.periodKey)}</span>}
                  </div>
                </div>
                <ul className="space-y-3">
                  {(t.raw(plan.featuresKey) as string[]).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button 
                  className="w-full" 
                  variant={plan.isRecommended ? "default" : "outline"}
                  size="lg"
                >
                  {t(plan.ctaKey)}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
