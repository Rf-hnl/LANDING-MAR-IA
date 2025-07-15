import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "$49",
    period: "/mes/usuario",
    description: "Para equipos pequeños que empiezan a organizarse.",
    features: [
      "Hasta 500 leads",
      "Gestión de contactos",
      "Integración de email",
      "Soporte por email",
    ],
    isRecommended: false,
  },
  {
    name: "Profesional",
    price: "$99",
    period: "/mes/usuario",
    description: "Para equipos en crecimiento que buscan automatizar.",
    features: [
      "Todo en Básico",
      "Automatización de tareas",
      "Integración con WhatsApp",
      "Dashboards avanzados",
      "Soporte prioritario",
    ],
    isRecommended: true,
  },
  {
    name: "Empresa",
    price: "Custom",
    period: "",
    description: "Para grandes equipos con necesidades específicas.",
    features: [
      "Todo en Profesional",
      "Asistente IA ilimitado",
      "Integraciones a medida",
      "Manager de cuenta dedicado",
      "SLA personalizado",
    ],
    isRecommended: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-12 sm:py-24 lg:py-32 bg-card/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Un plan para cada necesidad</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Elige el plan que mejor se adapte al tamaño y objetivos de tu equipo.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.isRecommended ? 'border-primary shadow-lg' : ''}`}>
              <CardHeader>
                {plan.isRecommended && <div className="text-xs font-semibold text-primary mb-2">RECOMENDADO</div>}
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.isRecommended ? "default" : "outline"}>
                  {plan.name === 'Empresa' ? 'Contactar Ventas' : 'Empezar ahora'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
