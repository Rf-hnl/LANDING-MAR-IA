import { Bot, MessageSquare, TrendingUp, Users, Zap, BarChart3, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useTranslations } from 'next-intl';

export function FeaturesSection() {
  const t = useTranslations('features');
  
  const translatedFeatures = [
    {
      icon: Bot,
      titleKey: 'aiAutomation.title',
      descriptionKey: 'aiAutomation.description'
    },
    {
      icon: MessageSquare,
      titleKey: 'smartChat.title',
      descriptionKey: 'smartChat.description'
    },
    {
      icon: TrendingUp,
      titleKey: 'predictiveAnalysis.title',
      descriptionKey: 'predictiveAnalysis.description'
    },
    {
      icon: Users,
      titleKey: 'leadManagement.title',
      descriptionKey: 'leadManagement.description'
    },
    {
      icon: Zap,
      titleKey: 'instantResponse.title',
      descriptionKey: 'instantResponse.description'
    },
    {
      icon: BarChart3,
      titleKey: 'advancedMetrics.title',
      descriptionKey: 'advancedMetrics.description'
    },
    {
      icon: Shield,
      titleKey: 'premiumSecurity.title',
      descriptionKey: 'premiumSecurity.description'
    },
    {
      icon: Clock,
      titleKey: 'availability247.title',
      descriptionKey: 'availability247.description'
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-[700px] text-secondary-content md:text-xl/relaxed font-medium">
            {t('description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {translatedFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/40 bg-white/30 hover:bg-white/40 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{t(feature.titleKey)}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-content leading-relaxed font-medium">
                    {t(feature.descriptionKey)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}