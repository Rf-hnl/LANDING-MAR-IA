"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'es', name: 'ES' },
  { code: 'en', name: 'EN' },
];

interface LanguageSelectorProps {
  onLanguageChange: (locale: 'es' | 'en') => void;
}

export default function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
  const t = useTranslations('common');
  const [currentLocale, setCurrentLocale] = useState<'es' | 'en'>('es');
  const [isClient, setIsClient] = useState(false);

  // Only run on client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
    const savedLocale = localStorage.getItem('locale') as 'es' | 'en';
    if (savedLocale) {
      setCurrentLocale(savedLocale);
    }
  }, []);

  const currentLanguage = languages.find(lang => lang.code === currentLocale);

  const switchLanguage = (newLocale: 'es' | 'en') => {
    setCurrentLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    onLanguageChange(newLocale);
  };

  if (!isClient) {
    return (
      <div className="relative">
        <Button variant="ghost" size="icon" className="border border-gray-300 hover:border-gray-400 bg-transparent">
          <span className="h-[1.2rem] w-[1.2rem] text-sm font-medium flex items-center justify-center text-gray-600">
            ES
          </span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="border border-gray-300 hover:border-gray-400 bg-transparent">
            <span className="h-[1.2rem] w-[1.2rem] text-sm font-medium flex items-center justify-center text-gray-600">
              {currentLanguage?.name}
            </span>
            <span className="sr-only">Toggle language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => switchLanguage(language.code as 'es' | 'en')}
              className={currentLocale === language.code ? 'bg-accent' : ''}
            >
              {language.name === 'ES' ? 'Español' : 'English'}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}