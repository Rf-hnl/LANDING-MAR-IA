import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="relative z-10 w-full border-b border-white/5 bg-black/20 backdrop-blur-xl">
      <div className="container flex h-20 items-center px-4 md:px-6">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold text-lg sm:inline-block font-headline">MAR-IA</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link href="#features" className="text-foreground/80 transition-colors hover:text-foreground">Funcionalidades</Link>
            <Link href="#process" className="text-foreground/80 transition-colors hover:text-foreground">Proceso</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
            <ThemeToggle />
            <Button variant="ghost" asChild>
                <Link href="#">Iniciar Sesión</Link>
            </Button>
            <Button className="rounded-full" asChild>
                <Link href="#contact">Únete Ahora</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
