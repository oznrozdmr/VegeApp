
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Recipe {
  id: number;
  title: string;
  instructions: string[];
  ingredients: string[];
  time: string;
}

export default function CookingMode({ recipeId }: { recipeId: string }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showIngredients, setShowIngredients] = useState(false);

  const recipes: { [key: string]: Recipe } = {
    '1': {
      id: 1,
      title: 'Vegan Margherita Pizza',
      time: '35 min',
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
      ]
    },
    '2': {
      id: 2,
      title: 'Mediterranean Pasta',
      time: '20 min',
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
      ]
    },
    '3': {
      id: 3,
      title: 'Caprese Salad Bowl',
      time: '10 min',
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
      ]
    }
  };

  const recipe = recipes[recipeId] || recipes['1'];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = (minutes: number) => {
    setTimeLeft(minutes * 60);
    setIsTimerRunning(true);
  };

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimeLeft(0);
  };

  const nextStep = () => {
    if (currentStep < recipe.instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleStepComplete = () => {
    setCompletedSteps(prev => {
      const isCompleted = prev.includes(currentStep);
      return isCompleted
        ? prev.filter(step => step !== currentStep)
        : [...prev, currentStep];
    });
  };

  const isCurrentStepCompleted = completedSteps.includes(currentStep);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <Link href={`/recipe/${recipeId}`}>
            <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
          </Link>
          <div className="text-center">
            <h1 className="text-lg font-bold">{recipe.title}</h1>
            <p className="text-sm text-gray-400">Cooking Mode</p>
          </div>
          <button
            onClick={() => setShowIngredients(true)}
            className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer"
          >
            <i className="ri-list-check text-xl"></i>
          </button>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Progress</span>
            <span className="text-sm font-medium">
              {currentStep + 1} of {recipe.instructions.length}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / recipe.instructions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Timer */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-4">
              {timeLeft > 0 ? formatTime(timeLeft) : '00:00'}
            </div>
            <div className="flex justify-center gap-3 mb-4">
              <button
                onClick={() => startTimer(5)}
                className="bg-blue-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 cursor-pointer"
              >
                5 min
              </button>
              <button
                onClick={() => startTimer(10)}
                className="bg-blue-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 cursor-pointer"
              >
                10 min
              </button>
              <button
                onClick={() => startTimer(15)}
                className="bg-blue-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 cursor-pointer"
              >
                15 min
              </button>
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={toggleTimer}
                className="bg-green-600 px-6 py-2 rounded-xl font-medium hover:bg-green-700 cursor-pointer"
              >
                {isTimerRunning ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={resetTimer}
                className="bg-gray-600 px-6 py-2 rounded-xl font-medium hover:bg-gray-700 cursor-pointer"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Current Step */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
              {currentStep + 1}
            </div>
            <div>
              <h2 className="text-lg font-bold">Step {currentStep + 1}</h2>
              <p className="text-sm text-gray-400">
                {completedSteps.length} of {recipe.instructions.length} completed
              </p>
            </div>
          </div>
          <p className="text-lg leading-relaxed mb-6">
            {recipe.instructions[currentStep]}
          </p>

          {/* Step Actions */}
          <div className="flex gap-3">
            <button
              onClick={toggleStepComplete}
              className={`flex-1 py-3 px-4 rounded-xl font-medium cursor-pointer ${
                isCurrentStepCompleted
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {isCurrentStepCompleted ? 'Completed ' : 'Mark Complete'}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex-1 py-3 px-4 rounded-xl font-medium cursor-pointer ${
              currentStep === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === recipe.instructions.length - 1}
            className={`flex-1 py-3 px-4 rounded-xl font-medium cursor-pointer ${
              currentStep === recipe.instructions.length - 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {currentStep === recipe.instructions.length - 1 ? 'Finished!' : 'Next'}
          </button>
        </div>

        {/* Completion Message */}
        {currentStep === recipe.instructions.length - 1 && isCurrentStepCompleted && (
          <div className="mt-6 bg-green-900 border border-green-600 rounded-2xl p-6 text-center">
            <i className="ri-trophy-line text-4xl text-yellow-400 mb-3 block"></i>
            <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
            <p className="text-green-300 mb-4">You've completed cooking {recipe.title}!</p>
            <Link href="/dashboard">
              <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 cursor-pointer">
                Back to Dashboard
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Ingredients Modal */}
      {showIngredients && (
        <div className="fixed inset-0 bg-black/70 flex items-end z-50">
          <div className="bg-gray-800 rounded-t-3xl w-full max-w-md mx-auto p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Ingredients</h2>
              <button
                onClick={() => setShowIngredients(false)}
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-700 rounded-xl">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-sm"></i>
                  </div>
                  <span>{ingredient}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
