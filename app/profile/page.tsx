
'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNavigation from '../../components/BottomNavigation';
import { useLanguage } from '../../lib/LanguageContext';
import LanguageSelector from '../../components/LanguageSelector';

export default function ProfilePage() {
  let t;
  try {
    const languageContext = useLanguage();
    t = languageContext.t;
  } catch (error) {
    // Fallback to Turkish translations if context is not available
    const { translations } = require('../../lib/translations');
    t = translations.tr;
  }
  const [showSettings, setShowSettings] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const stats = [
    { label: t.profile.stats.recipesSaved, value: '24', icon: 'ri-heart-line' },
    { label: t.profile.stats.recipesCreated, value: '8', icon: 'ri-book-open-line' },
    { label: t.profile.stats.daysCooking, value: '45', icon: 'ri-calendar-line' }
  ];

  const achievements = [
    { title: t.profile.achievements.firstRecipe, icon: 'ri-trophy-line', earned: true },
    { title: t.profile.achievements.recipeMaster, icon: 'ri-award-line', earned: true },
    { title: t.profile.achievements.veganExplorer, icon: 'ri-plant-line', earned: false },
    { title: t.profile.achievements.cookingStreak, icon: 'ri-fire-line', earned: false }
  ];

  return (
    <div className={`min-h-screen pb-20 ${darkModeEnabled ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`${darkModeEnabled ? 'bg-gray-800 shadow-gray-900' : 'bg-white shadow-sm'}`}>
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className={`text-xl font-bold ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>{t.profile.title}</h1>
          <button
            onClick={() => setShowSettings(true)}
            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${
              darkModeEnabled 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <i className={`ri-settings-3-line ${darkModeEnabled ? 'text-gray-300' : 'text-gray-600'}`}></i>
          </button>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Profile Info */}
        <div className={`${darkModeEnabled ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl p-6 shadow-sm border mb-6`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JD</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <i className="ri-vip-crown-line text-xs text-white"></i>
              </div>
            </div>
            <div className="flex-1">
              <h2 className={`text-xl font-bold ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>Jane Doe</h2>
              <p className={`${darkModeEnabled ? 'text-gray-300' : 'text-gray-600'}`}>Plant-based cooking enthusiast</p>
              <p className="text-sm text-green-600 font-medium">Premium Member</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className={`${stat.icon} text-green-600`}></i>
                </div>
                <div className={`text-lg font-bold ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>{stat.value}</div>
                <div className={`text-xs ${darkModeEnabled ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className={`${darkModeEnabled ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl p-6 shadow-sm border mb-6`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>Başarılar</h3>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className={`p-3 rounded-xl border ${
                  achievement.earned
                    ? 'bg-yellow-50 border-yellow-200'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  achievement.earned
                    ? 'bg-yellow-100 text-yellow-600'
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  <i className={achievement.icon}></i>
                </div>
                <h4 className={`text-sm font-medium ${
                  achievement.earned 
                    ? (darkModeEnabled ? 'text-white' : 'text-gray-800') 
                    : (darkModeEnabled ? 'text-gray-400' : 'text-gray-500')
                }`}>
                  {achievement.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <Link href="/recipes">
            <div className={`${darkModeEnabled ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-100 hover:bg-gray-50'} rounded-2xl p-4 shadow-sm border flex items-center gap-4 cursor-pointer`}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-book-open-line text-green-600"></i>
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>{t.profile.actions.myRecipes}</h3>
                <p className={`text-sm ${darkModeEnabled ? 'text-gray-300' : 'text-gray-600'}`}>{t.profile.actions.myRecipesDesc}</p>
              </div>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </div>
          </Link>

          <div className={`${darkModeEnabled ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-100 hover:bg-gray-50'} rounded-2xl p-4 shadow-sm border flex items-center gap-4 cursor-pointer`}>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="ri-history-line text-blue-600"></i>
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>{t.profile.actions.cookingHistory}</h3>
              <p className={`text-sm ${darkModeEnabled ? 'text-gray-300' : 'text-gray-600'}`}>{t.profile.actions.cookingHistoryDesc}</p>
            </div>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
          </div>

          <div className={`${darkModeEnabled ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-100 hover:bg-gray-50'} rounded-2xl p-4 shadow-sm border flex items-center gap-4 cursor-pointer`}>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <i className="ri-heart-line text-purple-600"></i>
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>{t.profile.actions.dietaryPreferences}</h3>
              <p className={`text-sm ${darkModeEnabled ? 'text-gray-300' : 'text-gray-600'}`}>{t.profile.actions.dietaryPreferencesDesc}</p>
            </div>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
          </div>

          <div className={`${darkModeEnabled ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-100 hover:bg-gray-50'} rounded-2xl p-4 shadow-sm border flex items-center gap-4 cursor-pointer`}>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <i className="ri-question-line text-orange-600"></i>
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>{t.profile.actions.helpSupport}</h3>
              <p className={`text-sm ${darkModeEnabled ? 'text-gray-300' : 'text-gray-600'}`}>{t.profile.actions.helpSupportDesc}</p>
            </div>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-end z-50"
          onClick={() => setShowSettings(false)}
        >
          <div 
            className={`${darkModeEnabled ? 'bg-gray-800' : 'bg-white'} rounded-t-3xl w-full max-w-md mx-auto p-6`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-bold ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>{t.profile.settings}</h2>
              <button
                onClick={() => setShowSettings(false)}
                className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                  darkModeEnabled 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <i className={`ri-close-line ${darkModeEnabled ? 'text-gray-300' : 'text-gray-600'}`}></i>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <i className={`ri-notification-line ${darkModeEnabled ? 'text-gray-300' : 'text-gray-600'}`}></i>
                  <span className={`font-medium ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>{t.profile.notifications}</span>
                </div>
                <div 
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${
                    notificationsEnabled ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    notificationsEnabled ? 'right-0.5' : 'left-0.5'
                  }`}></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <i className={`ri-moon-line ${darkModeEnabled ? 'text-gray-300' : 'text-gray-600'}`}></i>
                  <span className={`font-medium ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>{t.profile.darkMode}</span>
                </div>
                <div 
                  onClick={() => setDarkModeEnabled(!darkModeEnabled)}
                  className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${
                    darkModeEnabled ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    darkModeEnabled ? 'right-0.5' : 'left-0.5'
                  }`}></div>
                </div>
              </div>
              
              <div className="py-3">
                <div className="flex items-center gap-3 mb-3">
                  <i className={`ri-global-line ${darkModeEnabled ? 'text-gray-300' : 'text-gray-600'}`}></i>
                  <span className={`font-medium ${darkModeEnabled ? 'text-white' : 'text-gray-800'}`}>{t.profile.language}</span>
                </div>
                <LanguageSelector />
              </div>
              
              <div className={`border-t pt-4 mt-6 ${darkModeEnabled ? 'border-gray-700' : 'border-gray-200'}`}>
                <Link href="/">
                  <button className="w-full bg-red-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-red-600 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                    <i className="ri-logout-circle-line"></i>
                    {t.auth.signOut}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomNavigation />
    </div>
  );
}
