
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { useLanguage } from '../../lib/LanguageContext';

export default function AuthPage() {
  let t;
  try {
    const languageContext = useLanguage();
    t = languageContext.t;
  } catch (error) {
    // Fallback to Turkish translations if context is not available
    const { translations } = require('../../lib/translations');
    t = translations.tr;
  }
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-green-600 cursor-pointer" style={{ fontFamily: 'var(--font-pacifico)' }}>
              VegeApp
            </h1>
          </Link>
          <Link href="/">
            <button className="text-gray-600 hover:text-gray-800 cursor-pointer">
              <i className="ri-close-line text-xl"></i>
            </button>
          </Link>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Toggle Buttons */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isLogin ? 'bg-green-500 text-white' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {t.auth.signIn}
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                !isLogin ? 'bg-green-500 text-white' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {t.auth.signUp}
            </button>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            {isLogin ? 'Hoş Geldiniz!' : 'VegeApp\'e Katılın'}
          </h2>

                    {/* Email Form */}
                    <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder={t.auth.email}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder={t.auth.password}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            {!isLogin && (
              <div>
                <input
                  type="password"
                  placeholder="Şifre Onayla"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            )}
            
            <Link href="/dashboard">
              <button
                type="button"
                className="w-full bg-green-500 text-white py-3 mt-4 px-4 rounded-xl font-medium mb-4 hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                {isLogin ? t.auth.signIn : t.auth.createAccount}
              </button>
            </Link>
          </form>

          {isLogin && (
            <div className="text-center mt-4 mb-4">
              <button className="text-green-600 hover:text-green-700 text-sm cursor-pointer">
                {t.auth.forgotPassword}
              </button>
            </div>
          )}

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

                    {/* Social Login Buttons */}
                    <div className="space-y-3 mb-6">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer" onClick={() => signIn("google")}>
              <i className="ri-facebook-fill text-xl"></i>
              Facebook ile Devam Et
            </button>
            <button className="w-full bg-red-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer" onClick={() => signIn("google")}>
              <i className="ri-google-fill text-xl"></i>
              {t.auth.signInWithGoogle}
            </button>
          </div>


        </div>
      </div>
    </div>
  );
}
