import { UserPlus, Combine, MailCheck, BarChart, type LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    title: "1. Regístrate y Conecta",
    description: "Crea tu cuenta en minutos y conecta tus canales de comunicación como WhatsApp y email.",
    icon: UserPlus,
  },
  {
    title: "2. Centraliza y Organiza",
    description: "Importa y organiza todos tus leads en una única plataforma, sin perder información.",
    icon: Combine,
  },
  {
    title: "3. Automatiza Seguimientos",
    description: "Configura flujos de trabajo para enviar respuestas y recordatorios automáticamente.",
    icon: MailCheck,
  },
  {
    title: "4. Analiza y Mejora",
    description: "Usa nuestros dashboards para entender tus resultados y optimizar tu estrategia.",
    icon: BarChart,
  },
];

export function HowItWorksSection() {
  return (
    <section id="process" className="py-12 sm:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Empieza a vender en 4 simples pasos</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Nuestra plataforma está diseñada para ser intuitiva y fácil de implementar.
            </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2" aria-hidden="true"></div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="p-6 text-center space-y-4 relative bg-card border">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-4 ring-8 ring-card">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
