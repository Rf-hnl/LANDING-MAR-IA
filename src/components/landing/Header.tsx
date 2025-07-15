"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslations } from 'next-intl';

interface HeaderProps {
  onLanguageChange: (locale: 'es' | 'en') => void;
}

export function Header({ onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('navigation');

  const navItems = [
    { href: "#hero", label: t('home') },
    { href: "#benefits", label: t('benefits') },
    { href: "#features", label: t('features') },
    { href: "#how-it-works", label: t('howItWorks') },
    { href: "#pricing", label: t('pricing') },
    { href: "#testimonials", label: t('testimonials') },
    { href: "#faq", label: t('faq') },
    { href: "#contact", label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 border-b border-gray-200 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-bold text-lg font-headline text-gray-900">MAR-IA</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-gray-700 text-gray-600"
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
          <span className="font-bold text-lg font-headline ml-2 text-gray-900">MAR-IA</span>
          <span className="sr-only">Toggle Menu</span>
        </Button>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile menu icon */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </Button>
          </div>
          
          <nav className="flex items-center gap-2">
            <LanguageSelector onLanguageChange={onLanguageChange} />
            <ThemeToggle />
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-b border-gray-200 bg-white md:hidden">
          <nav className="container flex flex-col space-y-3 pb-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 transition-colors hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
