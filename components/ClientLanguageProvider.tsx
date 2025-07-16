'use client';

import { useEffect, useState } from 'react';
import { LanguageProvider } from '../lib/LanguageContext';

interface ClientLanguageProviderProps {
  children: React.ReactNode;
}

export default function ClientLanguageProvider({ children }: ClientLanguageProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a simple wrapper during SSR to avoid hydration issues
    return <>{children}</>;
  }

  return <LanguageProvider>{children}</LanguageProvider>;
} 