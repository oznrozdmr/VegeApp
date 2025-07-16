
'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNavigation from '../../components/BottomNavigation';
import { useLanguage } from '../../lib/LanguageContext';

export default function SearchPage() {
  let t;
  try {
    const languageContext = useLanguage();
    t = languageContext.t;
  } catch (error) {
    // Fallback to Turkish translations if context is not available
    const { translations } = require('../../lib/translations');
    t = translations.tr;
  }
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(['tomatoes', 'basil']);
  const [conversionType, setConversionType] = useState('vegan');
  const [likedRecipes, setLikedRecipes] = useState<number[]>([]);
  const [showLikeMessage, setShowLikeMessage] = useState(false);

  const popularIngredients = [
    'tomatoes', 'onions', 'garlic', 'basil', 'spinach', 'mushrooms',
    'bell peppers', 'carrots', 'broccoli', 'zucchini', 'lemon', 'ginger'
  ];

  const allRecipes = [
    {
      id: 1,
      title: 'Vegan Margherita Pizza',
      image: 'https://readdy.ai/api/search-image?query=Delicious%20vegan%20margherita%20pizza%20with%20cashew%20cheese%2C%20fresh%20basil%20leaves%2C%20cherry%20tomatoes%2C%20thin%20crust%2C%20wood-fired%20appearance%2C%20rustic%20wooden%20background%2C%20appetizing%20food%20photography&width=300&height=200&seq=pizza1&orientation=landscape',
      time: '35 min',
      difficulty: 'Medium',
      ingredients: ['tomatoes', 'basil', 'vegan cheese'],
      type: 'vegan'
    },
    {
      id: 2,
      title: 'Mediterranean Pasta',
      image: 'https://readdy.ai/api/search-image?query=Fresh%20Mediterranean%20pasta%20with%20cherry%20tomatoes%2C%20olives%2C%20fresh%20basil%2C%20olive%20oil%20drizzle%2C%20ceramic%20white%20bowl%2C%20natural%20lighting%2C%20healthy%20vegetarian%20meal%20photography&width=300&height=200&seq=pasta1&orientation=landscape',
      time: '20 min',
      difficulty: 'Easy',
      ingredients: ['tomatoes', 'basil', 'pasta', 'olives'],
      type: 'vegetarian'
    },
    {
      id: 3,
      title: 'Caprese Salad Bowl',
      image: 'https://readdy.ai/api/search-image?query=Fresh%20caprese%20salad%20with%20vegan%20mozzarella%20balls%2C%20ripe%20tomatoes%2C%20fresh%20basil%20leaves%2C%20balsamic%20glaze%2C%20white%20ceramic%20bowl%2C%20clean%20food%20photography%2C%20natural%20lighting&width=300&height=200&seq=salad1&orientation=landscape',
      time: '10 min',
      difficulty: 'Easy',
      ingredients: ['tomatoes', 'basil', 'vegan mozzarella'],
      type: 'vegan'
    },
    {
      id: 4,
      title: 'Mushroom Risotto',
      image: 'https://readdy.ai/api/search-image?query=Creamy%20mushroom%20risotto%20with%20fresh%20herbs%2C%20parmesan%20cheese%2C%20wild%20mushrooms%2C%20white%20bowl%2C%20elegant%20presentation%2C%20restaurant%20quality%20food%20photography&width=300&height=200&seq=risotto1&orientation=landscape',
      time: '45 min',
      difficulty: 'Hard',
      ingredients: ['mushrooms', 'garlic', 'onions'],
      type: 'vegetarian'
    },
    {
      id: 5,
      title: 'Spinach Curry',
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20green%20spinach%20curry%20with%20coconut%20milk%2C%20fresh%20spinach%20leaves%2C%20aromatic%20spices%2C%20traditional%20bowl%2C%20Indian%20cuisine%2C%20colorful%20food%20photography&width=300&height=200&seq=curry1&orientation=landscape',
      time: '25 min',
      difficulty: 'Medium',
      ingredients: ['spinach', 'garlic', 'ginger'],
      type: 'vegan'
    },
    {
      id: 6,
      title: 'Bell Pepper Stir Fry',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20bell%20pepper%20stir%20fry%20with%20mixed%20vegetables%2C%20soy%20sauce%20glaze%2C%20wok%20cooking%2C%20Asian%20cuisine%2C%20vibrant%20colors%2C%20healthy%20meal%20photography&width=300&height=200&seq=stirfry1&orientation=landscape',
      time: '15 min',
      difficulty: 'Easy',
      ingredients: ['bell peppers', 'onions', 'garlic'],
      type: 'vegan'
    }
  ];

  // Filter recipes based on search query, selected ingredients, and conversion type
  const getFilteredRecipes = () => {
    return allRecipes.filter(recipe => {
      // Filter by conversion type
      const typeMatch = recipe.type === conversionType;

      // Filter by search query
      const searchMatch = !searchQuery ||
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Filter by selected ingredients (recipe must contain at least one selected ingredient)
      const ingredientMatch = selectedIngredients.length === 0 ||
        selectedIngredients.some(selectedIng =>
          recipe.ingredients.some(recipeIng =>
            recipeIng.toLowerCase().includes(selectedIng.toLowerCase())
          )
        );

      return typeMatch && searchMatch && ingredientMatch;
    });
  };

  const searchResults = getFilteredRecipes();

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev =>
      prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const toggleLike = (recipeId: number) => {
    setLikedRecipes(prev => {
      const isLiked = prev.includes(recipeId);
      const newLiked = isLiked
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId];

      // Show message
      setShowLikeMessage(true);
      setTimeout(() => setShowLikeMessage(false), 2000);

      return newLiked;
    });
  };

  const handleConversionChange = (type: string) => {
    setConversionType(type);
    // Show brief conversion message
    setShowLikeMessage(true);
    setTimeout(() => setShowLikeMessage(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/dashboard">
              <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <i className="ri-arrow-left-line text-xl text-gray-600"></i>
              </button>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">{t.search.title}</h1>
          </div>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.search.placeholder}
              className="w-full px-4 py-3 pl-12 bg-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
            <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Conversion Type */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Dönüştür:</h2>
          <div className="flex gap-3">
            <button
              onClick={() => handleConversionChange('vegan')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer ${
                conversionType === 'vegan'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Vegan
            </button>
            <button
              onClick={() => handleConversionChange('vegetarian')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer ${
                conversionType === 'vegetarian'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Vegetarian
            </button>
          </div>
        </div>

        {/* Selected Ingredients */}
        {selectedIngredients.length > 0 && (
          <div className="mb-6">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Seçilen Malzemeler:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedIngredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {ingredient}
                  <button
                    onClick={() => toggleIngredient(ingredient)}
                    className="hover:bg-green-200 rounded-full p-1 cursor-pointer"
                  >
                    <i className="ri-close-line text-xs"></i>
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Popular Ingredients */}
        <div className="mb-8">
          <h3 className="text-md font-semibold text-gray-800 mb-3">Popüler Malzemeler:</h3>
          <div className="flex flex-wrap gap-2">
            {popularIngredients.map((ingredient) => (
              <button
                key={ingredient}
                onClick={() => toggleIngredient(ingredient)}
                className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer ${
                  selectedIngredients.includes(ingredient)
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {ingredient}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Tarif Sonuçları ({searchResults.length})
            </h2>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <i className="ri-filter-line text-gray-600"></i>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <i className="ri-sort-desc text-gray-600"></i>
              </button>
            </div>
          </div>

          {searchResults.length === 0 ? (
            <div className="text-center py-12">
              <i className="ri-search-line text-4xl text-gray-400 mb-4"></i>
              <h3 className="text-lg font-medium text-gray-600 mb-2">No recipes found</h3>
              <p className="text-gray-500 text-sm">Try adjusting your search terms or selected ingredients</p>
            </div>
          ) : (
            <div className="space-y-4">
              {searchResults.map((recipe) => (
                <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{recipe.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <i className="ri-time-line"></i>
                          {recipe.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="ri-star-line"></i>
                          {recipe.difficulty}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          recipe.type === 'vegan' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {recipe.type}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {recipe.ingredients.slice(0, 3).map((ingredient) => (
                            <span key={ingredient} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {ingredient}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleLike(recipe.id);
                          }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
                            likedRecipes.includes(recipe.id)
                              ? 'bg-red-100 text-red-600 hover:bg-red-200'
                              : 'bg-red-50 text-red-500 hover:bg-red-100'
                          }`}
                        >
                          <i className={likedRecipes.includes(recipe.id) ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Toast Message */}
      {showLikeMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            {likedRecipes.length > 0 ? 'Recipe saved to favorites!' : `Showing ${conversionType} recipes`}
          </div>
        </div>
      )}

      <BottomNavigation />
    </div>
  );
}
