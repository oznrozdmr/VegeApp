
'use client';

import Link from 'next/link';
import BottomNavigation from '../../components/BottomNavigation';

export default function DashboardPage() {
  const recentRecipes = [
    {
      id: 1,
      title: 'Vegan Carbonara',
      image: 'https://readdy.ai/api/search-image?query=Creamy%20vegan%20pasta%20carbonara%20with%20cashew%20cream%20sauce%2C%20fresh%20herbs%2C%20nutritional%20yeast%2C%20elegant%20plating%20on%20white%20ceramic%20bowl%2C%20natural%20lighting%2C%20minimalist%20food%20photography&width=300&height=200&seq=recipe1&orientation=landscape',
      time: '25 min',
      difficulty: 'Easy'
    },
    {
      id: 2,
      title: 'Plant-Based Burger',
      image: 'https://readdy.ai/api/search-image?query=Delicious%20plant-based%20burger%20with%20lettuce%2C%20tomato%2C%20avocado%20on%20whole%20grain%20bun%2C%20crispy%20sweet%20potato%20fries%2C%20rustic%20wooden%20plate%2C%20natural%20lighting%2C%20appetizing%20food%20photography&width=300&height=200&seq=recipe2&orientation=landscape',
      time: '30 min',
      difficulty: 'Medium'
    }
  ];

  const categories = [
    { name: 'Breakfast', icon: 'ri-sun-line', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Lunch', icon: 'ri-restaurant-line', color: 'bg-green-100 text-green-600' },
    { name: 'Dinner', icon: 'ri-moon-line', color: 'bg-blue-100 text-blue-600' },
    { name: 'Desserts', icon: 'ri-cake-line', color: 'bg-red-100 text-red-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Good Morning!</h1>
            <p className="text-sm text-gray-600">What are you cooking today?</p>
          </div>
          <Link href="/profile">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center cursor-pointer">
              <i className="ri-user-line text-white text-lg"></i>
            </div>
          </Link>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Search Bar */}
        <Link href="/search">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6 cursor-pointer">
            <div className="flex items-center gap-3 text-gray-500">
              <i className="ri-search-line text-xl"></i>
              <span>Search recipes or ingredients...</span>
            </div>
          </div>
        </Link>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Browse Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <div key={category.name} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mb-3`}>
                  <i className={category.icon}></i>
                </div>
                <h3 className="font-medium text-gray-800">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Recipes */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Recipes</h2>
            <Link href="/recipes">
              <button className="text-green-600 text-sm font-medium cursor-pointer">
                View All
              </button>
            </Link>
          </div>
          <div className="space-y-4">
            {recentRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="flex">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-24 h-24 object-cover object-top"
                  />
                  <div className="flex-1 p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{recipe.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <i className="ri-time-line"></i>
                        {recipe.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-star-line"></i>
                        {recipe.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/search">
            <div className="bg-green-500 rounded-2xl p-4 text-white cursor-pointer">
              <i className="ri-search-line text-2xl mb-2 block"></i>
              <h3 className="font-semibold">Find Recipe</h3>
              <p className="text-sm opacity-90">Search by ingredients</p>
            </div>
          </Link>
          <Link href="/recipes">
            <div className="bg-yellow-400 rounded-2xl p-4 text-black cursor-pointer">
              <i className="ri-add-line text-2xl mb-2 block"></i>
              <h3 className="font-semibold">Add Recipe</h3>
              <p className="text-sm opacity-80">Save your creation</p>
            </div>
          </Link>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
