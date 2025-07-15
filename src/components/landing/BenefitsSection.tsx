import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrainCircuit, Wand2, MailCheck, Share2, FileText, Phone, type LucideIcon } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

const benefits: Benefit[] = [
  {
    title: "Obtención de Datos Centralizada",
    description: "Integra Meta Ads, Webhooks, QR y más para no perder ninguna oportunidad.",
    icon: Share2,
  },
  {
    title: "Valorización con IA",
    description: "Calcula el valor monetario y la puntuación de tus leads automáticamente.",
    icon: BrainCircuit,
  },
  {
    title: "Acciones Inteligentes",
    description: "Recibe recomendaciones de venta y genera mensajes de bienvenida con IA.",
    icon: Wand2,
  },
  {
    title: "Generación de Cotizaciones",
    description: "Crea cotizaciones personalizadas con IA o intégrate con PandaDoc.",
    icon: FileText,
  },
  {
    title: "Comunicación Directa",
    description: "Gestiona y prioriza llamadas para una primera conexión directa y efectiva.",
    icon: Phone,
  },
  {
    title: "Automatización de Tareas",
    description: "Ahorra tiempo automatizando seguimientos, emails de configuración y más.",
    icon: MailCheck,
  },
];

export function BenefitsSection() {
  return (
    <section id="features" className="py-12 sm:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Potencia tus Ventas con Acciones de IA</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground light:gray-500 md:text-xl/relaxed">
              Desde la obtención del dato hasta el cierre, MAR-IA te acompaña con inteligencia artificial.
            </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="relative flex flex-col items-center text-center p-6 bg-card rounded-lg border border-transparent transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)]">
                  <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground light:gray-500">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
