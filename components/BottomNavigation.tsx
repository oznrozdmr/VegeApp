
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../lib/LanguageContext';

export default function BottomNavigation() {
  const pathname = usePathname();
  let t;
  try {
    const languageContext = useLanguage();
    t = languageContext.t;
  } catch (error) {
    // Fallback to Turkish translations if context is not available
    const { translations } = require('../lib/translations');
    t = translations.tr;
  }

  const navItems = [
    { href: '/dashboard', icon: 'ri-home-line', label: t.navigation.home },
    { href: '/search', icon: 'ri-search-line', label: t.navigation.search },
    { href: '/recipes', icon: 'ri-book-open-line', label: t.navigation.recipes },
    { href: '/profile', icon: 'ri-user-line', label: t.navigation.profile },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-pb">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-around py-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className={`flex flex-col items-center py-2 px-3 cursor-pointer ${
                pathname === item.href ? 'text-green-600' : 'text-gray-500'
              }`}>
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <span className="text-xs mt-1">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
