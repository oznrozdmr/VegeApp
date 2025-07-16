'use client';

import { useLanguage } from '../lib/LanguageContext';

export default function LanguageSelector() {
  let locale = 'tr' as 'tr' | 'en';
  let setLocale = (newLocale: 'tr' | 'en') => {};
  
  try {
    const languageContext = useLanguage();
    locale = languageContext.locale;
    setLocale = languageContext.setLocale;
  } catch (error) {
    // Fallback to Turkish if context is not available
    console.warn('Language context not available, using default Turkish');
  }

  const languages = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code as 'tr' | 'en')}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            locale === lang.code
              ? 'bg-green-100 text-green-700 border border-green-200'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span className="text-lg">{lang.flag}</span>
          <span className="text-sm font-medium">{lang.name}</span>
        </button>
      ))}
    </div>
  );
} 