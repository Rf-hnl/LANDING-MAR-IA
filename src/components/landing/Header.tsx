"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#hero", label: "Inicio" },
    { href: "#benefits", label: "Beneficios" },
    { href: "#features", label: "Funcionalidades" },
    { href: "#how-it-works", label: "Cómo Funciona" },
    { href: "#pricing", label: "Precios" },
    { href: "#testimonials", label: "Testimonios" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold text-lg font-headline">MAR-IA</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Logo />
          <span className="font-bold text-lg font-headline ml-2">MAR-IA</span>
          <span className="sr-only">Toggle Menu</span>
        </Button>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile menu icon */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
          
          <nav className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
              <Link href="/admin/login">Iniciar Sesión</Link>
            </Button>
            <Button size="sm" className="rounded-full" asChild>
              <Link href="#contact">Únete Ahora</Link>
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background md:hidden">
          <nav className="container flex flex-col space-y-3 pb-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/60 transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="ghost" size="sm" asChild className="sm:hidden self-start">
              <Link href="/admin/login" onClick={() => setMobileMenuOpen(false)}>
                Iniciar Sesión
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
