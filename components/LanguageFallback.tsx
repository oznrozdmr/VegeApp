'use client';

import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

interface LanguageFallbackProps {
  children: (t: typeof translations.tr) => React.ReactNode;
}

export default function LanguageFallback({ children }: LanguageFallbackProps) {
  try {
    const { t } = useLanguage();
    return <>{children(t)}</>;
  } catch (error) {
    // Fallback to Turkish translations during SSR
    return <>{children(translations.tr)}</>;
  }
} 