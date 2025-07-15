import { Bot, MessageSquare, TrendingUp, Users, Zap, BarChart3 } from "lucide-react";

const features = [
  { name: "Automatización IA", icon: Bot },
  { name: "Chat Inteligente", icon: MessageSquare },
  { name: "Análisis Predictivo", icon: TrendingUp },
  { name: "Gestión de Leads", icon: Users },
  { name: "Respuesta Instantánea", icon: Zap },
  { name: "Métricas Avanzadas", icon: BarChart3 },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-xl">
      <div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-8 sm:justify-between">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.name} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <Icon className="h-4 w-4" />
              <span className="font-medium text-xs tracking-wide">{feature.name}</span>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
