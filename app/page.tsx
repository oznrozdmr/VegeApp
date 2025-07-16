
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-600" style={{ fontFamily: 'var(--font-pacifico)' }}>
            VegeApp
          </h1>
          <Link href="/auth">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer">
              Sign In
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=Fresh%20vibrant%20vegetables%20and%20herbs%20arranged%20beautifully%20on%20wooden%20cutting%20board%2C%20colorful%20bell%20peppers%2C%20leafy%20greens%2C%20tomatoes%2C%20natural%20lighting%2C%20clean%20kitchen%20background%2C%20healthy%20cooking%20concept%2C%20minimalist%20food%20photography&width=400&height=400&seq=hero1&orientation=squarish')`
      }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-4">
            Discover Plant-Based Recipes
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-md">
            Transform any recipe into delicious vegan or vegetarian alternatives
          </p>
          <Link href="/search">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer">
              Start Cooking
            </button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="grid gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <i className="ri-search-line text-green-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Recipe Search</h3>
            <p className="text-gray-600">Find recipes by ingredients you have at home</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-yellow-100">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <i className="ri-plant-line text-yellow-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Vegan Conversion</h3>
            <p className="text-gray-600">Convert any recipe to vegan or vegetarian instantly</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-100">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <i className="ri-heart-line text-red-500 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Save Favorites</h3>
            <p className="text-gray-600">Keep track of your favorite plant-based recipes</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-12">
        <div className="max-w-md mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start?</h3>
          <p className="text-green-100 mb-6">Join thousands of home cooks making delicious plant-based meals</p>
          <Link href="/auth">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
