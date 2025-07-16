
'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNavigation from '../../../components/BottomNavigation';

interface Recipe {
  id: number;
  title: string;
  image: string;
  time: string;
  difficulty: string;
  servings: number;
  type: string;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  tags: string[];
}

export default function RecipeDetail({ recipeId }: { recipeId: string }) {
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('ingredients');
  const [showNutrition, setShowNutrition] = useState(false);

  const recipes: { [key: string]: Recipe } = {
    '1': {
      id: 1,
      title: 'Vegan Margherita Pizza',
      image: 'https://readdy.ai/api/search-image?query=Delicious%20vegan%20margherita%20pizza%20with%20cashew%20cheese%2C%20fresh%20basil%20leaves%2C%20cherry%20tomatoes%2C%20thin%20crust%2C%20wood-fired%20appearance%2C%20rustic%20wooden%20background%2C%20appetizing%20food%20photography&width=400&height=300&seq=pizza1detail&orientation=landscape',
      time: '35 min',
      difficulty: 'Medium',
      servings: 4,
      type: 'vegan',
      ingredients: [
        '1 pizza dough (store-bought or homemade)',
        '1/2 cup marinara sauce',
        '1 cup vegan mozzarella cheese, shredded',
        '2 large tomatoes, sliced',
        '1/4 cup fresh basil leaves',
        '2 tbsp olive oil',
        '1 tsp garlic powder',
        'Salt and pepper to taste'
      ],
      instructions: [
        'Preheat your oven to 475°F (245°C). If using a pizza stone, place it in the oven while preheating.',
        'Roll out the pizza dough on a floured surface to your desired thickness.',
        'Transfer the dough to a pizza pan or parchment paper if using a pizza stone.',
        'Brush the dough with olive oil and sprinkle with garlic powder.',
        'Spread the marinara sauce evenly over the dough, leaving a 1-inch border.',
        'Sprinkle the vegan mozzarella cheese over the sauce.',
        'Arrange the tomato slices on top of the cheese.',
        'Season with salt and pepper.',
        'Bake for 12-15 minutes until the crust is golden and cheese is melted.',
        'Remove from oven and immediately top with fresh basil leaves.',
        'Let cool for 2-3 minutes before slicing and serving.'
      ],
      nutrition: {
        calories: 285,
        protein: '12g',
        carbs: '38g',
        fat: '8g'
      },
      tags: ['vegan', 'italian', 'dinner', 'comfort food']
    },
    '2': {
      id: 2,
      title: 'Mediterranean Pasta',
      image: 'https://readdy.ai/api/search-image?query=Fresh%20Mediterranean%20pasta%20with%20cherry%20tomatoes%2C%20olives%2C%20fresh%20basil%2C%20olive%20oil%20drizzle%2C%20ceramic%20white%20bowl%2C%20natural%20lighting%2C%20healthy%20vegetarian%20meal%20photography&width=400&height=300&seq=pasta1detail&orientation=landscape',
      time: '20 min',
      difficulty: 'Easy',
      servings: 3,
      type: 'vegetarian',
      ingredients: [
        '12 oz whole wheat pasta',
        '2 cups cherry tomatoes, halved',
        '1/2 cup kalamata olives, pitted',
        '1/4 cup fresh basil, chopped',
        '3 cloves garlic, minced',
        '1/4 cup olive oil',
        '1/4 cup pine nuts',
        'Salt and pepper to taste',
        'Red pepper flakes (optional)'
      ],
      instructions: [
        'Cook pasta according to package directions until al dente. Reserve 1/2 cup pasta water.',
        'Heat olive oil in a large skillet over medium heat.',
        'Add minced garlic and cook for 1 minute until fragrant.',
        'Add cherry tomatoes and cook for 3-4 minutes until softened.',
        'Add olives and pine nuts, cook for another 2 minutes.',
        'Add cooked pasta to the skillet with a splash of pasta water.',
        'Toss everything together and season with salt, pepper, and red pepper flakes.',
        'Remove from heat and stir in fresh basil.',
        'Serve immediately with extra basil and olive oil if desired.'
      ],
      nutrition: {
        calories: 420,
        protein: '14g',
        carbs: '62g',
        fat: '16g'
      },
      tags: ['vegetarian', 'mediterranean', 'pasta', 'quick meal']
    },
    '3': {
      id: 3,
      title: 'Caprese Salad Bowl',
      image: 'https://readdy.ai/api/search-image?query=Fresh%20caprese%20salad%20with%20vegan%20mozzarella%20balls%2C%20ripe%20tomatoes%2C%20fresh%20basil%20leaves%2C%20balsamic%20glaze%2C%20white%20ceramic%20bowl%2C%20clean%20food%20photography%2C%20natural%20lighting&width=400&height=300&seq=salad1detail&orientation=landscape',
      time: '10 min',
      difficulty: 'Easy',
      servings: 2,
      type: 'vegan',
      ingredients: [
        '4 large ripe tomatoes, sliced',
        '8 oz vegan mozzarella, sliced',
        '1/4 cup fresh basil leaves',
        '3 tbsp balsamic glaze',
        '2 tbsp extra virgin olive oil',
        'Sea salt to taste',
        'Freshly ground black pepper',
        '2 cups mixed greens (optional)'
      ],
      instructions: [
        'Wash and slice the tomatoes into 1/4-inch thick rounds.',
        'Slice the vegan mozzarella into similar thickness.',
        'On a serving platter, arrange alternating slices of tomato and mozzarella.',
        'Tuck fresh basil leaves between the slices.',
        'Drizzle with olive oil and balsamic glaze.',
        'Season with sea salt and freshly ground pepper.',
        'If using mixed greens, arrange them around the tomato-mozzarella arrangement.',
        'Serve immediately at room temperature for best flavor.'
      ],
      nutrition: {
        calories: 210,
        protein: '8g',
        carbs: '12g',
        fat: '15g'
      },
      tags: ['vegan', 'salad', 'no-cook', 'summer']
    }
  };

  const recipe = recipes[recipeId] || recipes['1'];

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Image */}
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover object-top"
        />
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <Link href="/search">
            <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white cursor-pointer">
              <i className="ri-arrow-left-line text-xl text-gray-800"></i>
            </button>
          </Link>
          <div className="flex gap-2">
            <button 
              onClick={toggleLike}
              className={`w-10 h-10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer ${
                isLiked ? 'bg-red-100/90 text-red-600' : 'bg-white/90 text-gray-600'
              }`}
            >
              <i className={isLiked ? 'ri-heart-fill' : 'ri-heart-line'}></i>
            </button>
            <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white cursor-pointer">
              <i className="ri-share-line text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Recipe Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">{recipe.title}</h1>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <i className="ri-time-line"></i>
                {recipe.time}
              </span>
              <span className="flex items-center gap-1">
                <i className="ri-star-line"></i>
                {recipe.difficulty}
              </span>
              <span className="flex items-center gap-1">
                <i className="ri-group-line"></i>
                {recipe.servings} servings
              </span>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              recipe.type === 'vegan' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
            }`}>
              {recipe.type}
            </span>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {recipe.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>

          {/* Nutrition Button */}
          <button
            onClick={() => setShowNutrition(!showNutrition)}
            className="w-full bg-green-50 border border-green-200 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-green-100"
          >
            <span className="text-green-700 font-medium">Nutrition Info</span>
            <i className={`ri-arrow-${showNutrition ? 'up' : 'down'}-s-line text-green-700`}></i>
          </button>

          {showNutrition && (
            <div className="mt-3 bg-white rounded-xl p-4 border border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{recipe.nutrition.calories}</div>
                  <div className="text-gray-600">Calories</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{recipe.nutrition.protein}</div>
                  <div className="text-gray-600">Protein</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{recipe.nutrition.carbs}</div>
                  <div className="text-gray-600">Carbs</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{recipe.nutrition.fat}</div>
                  <div className="text-gray-600">Fat</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-6">
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'ingredients' ? 'bg-green-500 text-white' : 'text-gray-600'
            }`}
          >
            Ingredients
          </button>
          <button
            onClick={() => setActiveTab('instructions')}
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'instructions' ? 'bg-green-500 text-white' : 'text-gray-600'
            }`}
          >
            Instructions
          </button>
        </div>

        {/* Content */}
        {activeTab === 'ingredients' ? (
          <div className="space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <span className="text-gray-800">{ingredient}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-800 leading-relaxed">{instruction}</p>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-8">
          <Link href={`/cooking/${recipeId}`}>
            <button className="flex-1 bg-green-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-green-600 whitespace-nowrap cursor-pointer">
              Start Cooking
            </button>
          </Link>
          <button className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center hover:bg-gray-200 cursor-pointer">
            <i className="ri-printer-line"></i>
          </button>
          <button className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center hover:bg-gray-200 cursor-pointer">
            <i className="ri-shopping-cart-line"></i>
          </button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
