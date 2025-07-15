import { Button } from "@/components/ui/button";
import { ArrowRight, Megaphone, UploadCloud, PenSquare, Search, QrCode, Webhook, type LucideIcon } from "lucide-react";
import { Logo } from "./Logo";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import React from "react";
import { cn } from "@/lib/utils";

const dataSources: {
  name: string;
  icon: LucideIcon;
  style: React.CSSProperties;
}[] = [
  { name: "Meta Ads", icon: Megaphone, style: { top: '15%', left: '10%', animationDelay: '0s' } },
  { name: "Leads Importados", icon: UploadCloud, style: { top: '40%', left: '-5%', animationDelay: '0.5s' } },
  { name: "Leads Manuales", icon: PenSquare, style: { bottom: '20%', left: '15%', animationDelay: '1s' } },
  { name: "Buscador de Negocios", icon: Search, style: { bottom: '15%', right: '5%', animationDelay: '1.5s' } },
  { name: "QR y Links", icon: QrCode, style: { top: '55%', right: '-8%', animationDelay: '2s' } },
  { name: "Webhook", icon: Webhook, style: { top: '20%', right: '10%', animationDelay: '2.5s' } },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-32" style={{ perspective: '1000px' }}>
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-50"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70">
                El CRM con IA que potencia a tu equipo de ventas
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Centraliza, automatiza y convierte más, todo desde un solo lugar. Desbloquea el potencial que no sabías que tenías.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button size="lg" className="rounded-full px-8 group bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href="#contact">
                  Solicita una Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
               <Button size="lg" variant="outline" className="rounded-full px-8 border-primary/50 text-white hover:bg-primary/10 hover:text-white" asChild>
                <a href="#features">Ver Funcionalidades</a>
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]" style={{ transformStyle: 'preserve-3d' }}>
            {/* Orb */}
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px]" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <Logo className="w-full h-full" />
            </div>

             {/* Floating Data sources */}
            {dataSources.map((source) => {
              const Icon = source.icon;
              return (
                <TooltipProvider key={source.name} delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="absolute flex items-center justify-center h-12 w-12 bg-primary/20 backdrop-blur-sm rounded-full shadow-lg border border-primary/30 animate-float"
                        style={source.style}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-black/50 border-white/10 text-white backdrop-blur-sm">
                      <p>{source.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
