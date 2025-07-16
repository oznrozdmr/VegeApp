'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, useTranslations } from './translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof useTranslations>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export function LanguageProvider({ children, initialLocale = 'tr' }: LanguageProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations(locale);

  useEffect(() => {
    setMounted(true);
    // Load locale from localStorage on mount
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'tr' || savedLocale === 'en')) {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Save locale to localStorage only after component is mounted
      localStorage.setItem('locale', locale);
    }
  }, [locale, mounted]);

  const value = {
    locale,
    setLocale,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 