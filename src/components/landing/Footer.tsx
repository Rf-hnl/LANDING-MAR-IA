import { Diamond, CaseSensitive, Globe, Pin, Eye } from "lucide-react";

const partners = [
  { name: "Dreamure", icon: Diamond },
  { name: "SWITCH.WIN", icon: CaseSensitive },
  { name: "sphere", icon: Globe },
  { name: "PinSpace", icon: Pin },
  { name: "Visionix", icon: Eye },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-xl">
      <div className="container flex flex-wrap items-center justify-center gap-x-12 gap-y-6 py-8 sm:justify-between">
        {partners.map((partner) => {
          const Icon = partner.icon;
          return (
            <div key={partner.name} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              <Icon className="h-5 w-5" />
              <span className="font-semibold text-sm tracking-widest uppercase">{partner.name}</span>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
