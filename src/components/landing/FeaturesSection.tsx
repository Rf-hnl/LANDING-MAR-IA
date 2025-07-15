import { Bot, MessageSquare, TrendingUp, Users, Zap, BarChart3, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const features = [
  {
    icon: Bot,
    title: "Automatización IA",
    description: "Automatiza respuestas y procesos con inteligencia artificial avanzada."
  },
  {
    icon: MessageSquare,
    title: "Chat Inteligente",
    description: "Conversaciones naturales que se adaptan al contexto de cada cliente."
  },
  {
    icon: TrendingUp,
    title: "Análisis Predictivo",
    description: "Predice tendencias y comportamientos para optimizar estrategias."
  },
  {
    icon: Users,
    title: "Gestión de Leads",
    description: "Captura, califica y gestiona leads de forma automática."
  },
  {
    icon: Zap,
    title: "Respuesta Instantánea",
    description: "Respuestas en tiempo real las 24 horas del día."
  },
  {
    icon: BarChart3,
    title: "Métricas Avanzadas",
    description: "Analíticas detalladas para tomar decisiones informadas."
  },
  {
    icon: Shield,
    title: "Seguridad Premium",
    description: "Protección de datos con los más altos estándares de seguridad."
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Tu asistente IA trabajando sin descanso para tu negocio."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 sm:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Funcionalidades Avanzadas
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground light:gray-500 md:text-xl/relaxed">
            Descubre todas las herramientas que MAR-IA pone a tu disposición para revolucionar tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/40 bg-card/50 hover:bg-card/80 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground light:gray-500 leading-relaxed">
                    {feature.description}
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