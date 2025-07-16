
'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNavigation from '../../components/BottomNavigation';

export default function ProfilePage() {
  const [showSettings, setShowSettings] = useState(false);

  const stats = [
    { label: 'Recipes Saved', value: '24', icon: 'ri-heart-line' },
    { label: 'Recipes Created', value: '8', icon: 'ri-book-open-line' },
    { label: 'Days Cooking', value: '45', icon: 'ri-calendar-line' }
  ];

  const achievements = [
    { title: 'First Recipe', icon: 'ri-trophy-line', earned: true },
    { title: 'Recipe Master', icon: 'ri-award-line', earned: true },
    { title: 'Vegan Explorer', icon: 'ri-plant-line', earned: false },
    { title: 'Cooking Streak', icon: 'ri-fire-line', earned: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Profile</h1>
          <button
            onClick={() => setShowSettings(true)}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer"
          >
            <i className="ri-settings-3-line text-gray-600"></i>
          </button>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Profile Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
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
              <h2 className="text-xl font-bold text-gray-800">Jane Doe</h2>
              <p className="text-gray-600">Plant-based cooking enthusiast</p>
              <p className="text-sm text-green-600 font-medium">Premium Member</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className={`${stat.icon} text-green-600`}></i>
                </div>
                <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
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
                  achievement.earned ? 'text-gray-800' : 'text-gray-500'
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
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:bg-gray-50">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-book-open-line text-green-600"></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">My Recipes</h3>
                <p className="text-sm text-gray-600">View saved and created recipes</p>
              </div>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </div>
          </Link>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:bg-gray-50">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="ri-history-line text-blue-600"></i>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Cooking History</h3>
              <p className="text-sm text-gray-600">Track your cooking journey</p>
            </div>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:bg-gray-50">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <i className="ri-heart-line text-purple-600"></i>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Dietary Preferences</h3>
              <p className="text-sm text-gray-600">Customize your diet settings</p>
            </div>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:bg-gray-50">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <i className="ri-question-line text-orange-600"></i>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Help & Support</h3>
              <p className="text-sm text-gray-600">Get help and contact support</p>
            </div>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50">
          <div className="bg-white rounded-t-3xl w-full max-w-md mx-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Settings</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer"
              >
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <i className="ri-notification-line text-gray-600"></i>
                  <span className="font-medium text-gray-800">Notifications</span>
                </div>
                <div className="w-12 h-6 bg-green-500 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <i className="ri-moon-line text-gray-600"></i>
                  <span className="font-medium text-gray-800">Dark Mode</span>
                </div>
                <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <i className="ri-global-line text-gray-600"></i>
                  <span className="font-medium text-gray-800">Language</span>
                </div>
                <span className="text-gray-600">English</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-6">
                <Link href="/">
                  <button className="w-full bg-red-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-red-600 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                    <i className="ri-logout-circle-line"></i>
                    Sign Out
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
