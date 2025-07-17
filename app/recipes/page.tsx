
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BottomNavigation from '../../components/BottomNavigation';
import { useLanguage } from '../../lib/LanguageContext';

export default function RecipesPage() {
  let t;
  try {
    const languageContext = useLanguage();
    t = languageContext.t;
  } catch (error) {
    // Fallback to Turkish translations if context is not available
    const { translations } = require('../../lib/translations');
    t = translations.tr;
  }
  const [activeTab, setActiveTab] = useState('saved');
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    prepTime: '',
    difficulty: 'Kolay',
    ingredients: '',
    instructions: '',
    image: ''
  });
  const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const savedRecipes = [
    {
      id: 1,
      title: 'Vegan Carbonara',
      image: 'https://readdy.ai/api/search-image?query=Creamy%20vegan%20pasta%20carbonara%20with%20cashew%20cream%20sauce%2C%20fresh%20herbs%2C%20nutritional%20yeast%2C%20elegant%20plating%20on%20white%20ceramic%20bowl%2C%20natural%20lighting%2C%20minimalist%20food%20photography&width=300&height=200&seq=recipe3&orientation=landscape',
      time: '25 min',
      difficulty: 'Easy',
      saved: true
    },
    {
      id: 2,
      title: 'Plant-Based Burger',
      image: 'https://readdy.ai/api/search-image?query=Delicious%20plant-based%20burger%20with%20lettuce%2C%20tomato%2C%20avocado%20on%20whole%20grain%20bun%2C%20crispy%20sweet%20potato%20fries%2C%20rustic%20wooden%20plate%2C%20natural%20lighting%2C%20appetizing%20food%20photography&width=300&height=200&seq=recipe4&orientation=landscape',
      time: '30 min',
      difficulty: 'Medium',
      saved: true
    },
    {
      id: 3,
      title: 'Quinoa Buddha Bowl',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20quinoa%20buddha%20bowl%20with%20roasted%20vegetables%2C%20avocado%2C%20chickpeas%2C%20tahini%20dressing%2C%20fresh%20herbs%2C%20healthy%20meal%20prep%2C%20natural%20lighting%2C%20clean%20food%20photography&width=300&height=200&seq=recipe5&orientation=landscape',
      time: '20 min',
      difficulty: 'Easy',
      saved: true
    }
  ];

  const [myRecipes, setMyRecipes] = useState([
    {
      id: 4,
      title: 'Grandmas Veggie Stew',
      image: 'https://readdy.ai/api/search-image?query=Hearty%20vegetable%20stew%20with%20carrots%2C%20potatoes%2C%20celery%2C%20herbs%20in%20rustic%20pot%2C%20comfort%20food%2C%20homemade%20cooking%2C%20warm%20lighting%2C%20cozy%20kitchen%20atmosphere&width=300&height=200&seq=recipe6&orientation=landscape',
      time: '45 min',
      difficulty: 'Medium',
      saved: false
    },
    {
      id: 5,
      title: 'Green Smoothie Bowl',
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20green%20smoothie%20bowl%20topped%20with%20granola%2C%20berries%2C%20coconut%20flakes%2C%20chia%20seeds%2C%20mint%20leaves%2C%20healthy%20breakfast%2C%20colorful%20presentation%2C%20natural%20lighting&width=300&height=200&seq=recipe7&orientation=landscape',
      time: '10 min',
      difficulty: 'Easy',
      saved: false
    }
  ]);

  const currentRecipes = activeTab === 'saved' ? savedRecipes : myRecipes;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.title.trim() || !formData.ingredients.trim() || !formData.instructions.trim()) {
      alert('Lütfen tüm gerekli alanları doldurun!');
      return;
    }

    // Create new recipe
    const newRecipe = {
      id: Date.now(), // Simple ID generation
      title: formData.title,
      image: formData.image || 'https://readdy.ai/api/search-image?query=Delicious%20vegan%20recipe%20with%20fresh%20ingredients%2C%20colorful%20vegetables%2C%20healthy%20meal%2C%20natural%20lighting%2C%20appetizing%20food%20photography&width=300&height=200&seq=newrecipe&orientation=landscape',
      time: formData.prepTime,
      difficulty: formData.difficulty,
      saved: false
    };

    // Add to my recipes (in a real app, this would be saved to a database)
    setMyRecipes(prev => [...prev, newRecipe]);
    
    // Reset form and close modal
    setFormData({
      title: '',
      prepTime: '',
      difficulty: 'Kolay',
      ingredients: '',
      instructions: '',
      image: ''
    });
    setShowAddForm(false);
    setActiveTab('my'); // Switch to "My Recipes" tab to show the new recipe
    
    // Show success message
    alert('Tarif başarıyla eklendi!');
  };

  const handleShareRecipe = (recipe: any) => {
    const shareData = {
      title: recipe.title,
      text: `${recipe.title} tarifini VegeApp'te keşfedin!`,
      url: `${window.location.origin}/recipe/${recipe.id}`
    };

    // Try to use native Web Share API
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      navigator.share(shareData)
        .then(() => {
          console.log('Tarif başarıyla paylaşıldı!');
        })
        .catch((error) => {
          console.log('Paylaşım iptal edildi:', error);
        });
    } else {
      // Fallback: copy to clipboard
      const shareText = `${recipe.title}\n\nBu lezzetli tarifi VegeApp'te bulabilirsiniz: ${window.location.origin}/recipe/${recipe.id}`;
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText)
          .then(() => {
            alert('Tarif linki panoya kopyalandı!');
          })
          .catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = shareText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Tarif linki panoya kopyalandı!');
          });
      } else {
        // Final fallback
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Tarif linki panoya kopyalandı!');
      }
    }
  };

  const handleMoreOptions = (recipe: any) => {
    setSelectedRecipe(recipe);
    setShowMoreOptions(true);
  };

  const handleToggleFavorite = (recipe: any) => {
    // Toggle favorite status
    if (recipe.saved) {
      // Remove from saved
      alert(`${recipe.title} favorilerden çıkarıldı`);
    } else {
      // Add to saved
      alert(`${recipe.title} favorilere eklendi`);
    }
  };

  const handleEditRecipe = (recipe: any) => {
    alert(`${recipe.title} düzenleme özelliği yakında gelecek!`);
  };

  const handleDeleteRecipe = (recipe: any) => {
    if (confirm(`${recipe.title} tarifini silmek istediğinizden emin misiniz?`)) {
      // Remove from my recipes
      setMyRecipes(prev => prev.filter(r => r.id !== recipe.id));
      alert('Tarif silindi!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-800">{t.recipes.title}</h1>
            <button
              onClick={() => setShowAddForm(true)}
              className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer"
            >
              <i className="ri-add-line text-xl"></i>
            </button>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'saved' ? 'bg-green-500 text-white' : 'text-gray-600'
              }`}
            >
              Kaydedilen ({savedRecipes.length})
            </button>
            <button
              onClick={() => setActiveTab('my')}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'my' ? 'bg-green-500 text-white' : 'text-gray-600'
              }`}
            >
              Tariflerim ({myRecipes.length})
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Recipe Grid */}
        <div className="space-y-4">
          {currentRecipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow mb-4">
                <div className="relative">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle like functionality here
                    }}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white cursor-pointer"
                  >
                    <i className={`${recipe.saved ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'}`}></i>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{recipe.title}</h3>
                  <div className="flex items-center justify-between">
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
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleShareRecipe(recipe);
                        }}
                        className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer"
                      >
                        <i className="ri-share-line text-sm"></i>
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleMoreOptions(recipe);
                        }}
                        className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer"
                      >
                        <i className="ri-more-line text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {currentRecipes.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-book-open-line text-2xl text-gray-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {activeTab === 'saved' ? 'Henüz kaydedilen tarif yok' : 'Henüz tarif oluşturulmadı'}
            </h3>
            <p className="text-gray-600 mb-6">
              {activeTab === 'saved'
                ? 'Keşfetmeye başlayın ve favori tariflerinizi kaydedin!'
                : 'İlk tarifinizi oluşturun ve toplulukla paylaşın!'}
            </p>
            <button
              onClick={() => activeTab === 'saved' ? null : setShowAddForm(true)}
              className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 whitespace-nowrap cursor-pointer"
            >
              {activeTab === 'saved' ? 'Tarifleri Keşfet' : 'Tarif Ekle'}
            </button>
          </div>
        )}
      </div>

      {/* Add Recipe Modal */}
      {showAddForm && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-end z-50"
          onClick={() => setShowAddForm(false)}
        >
          <div 
            className="bg-white rounded-t-3xl w-full max-w-md mx-auto p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Yeni Tarif Ekle</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer"
              >
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tarif Adı</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Tarif adını girin"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tarif Resmi</label>
                <div className="space-y-3">
                  {formData.image && (
                    <div className="relative">
                      <img
                        src={formData.image}
                        alt="Recipe preview"
                        className="w-full h-32 object-cover rounded-xl border border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={() => handleInputChange('image', '')}
                        className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                      >
                        <i className="ri-close-line text-xs"></i>
                      </button>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <input
                      type="url"
                      value={formData.image}
                      onChange={(e) => handleInputChange('image', e.target.value)}
                      placeholder="Resim URL'si ekleyin (isteğe bağlı)"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 flex items-center gap-2"
                    >
                      <i className="ri-image-add-line"></i>
                      <span className="text-sm">Yükle</span>
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            const result = event.target?.result as string;
                            handleInputChange('image', result);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hazırlık Süresi</label>
                  <input
                    type="text"
                    value={formData.prepTime}
                    onChange={(e) => handleInputChange('prepTime', e.target.value)}
                    placeholder="20 dk"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zorluk</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowDifficultyDropdown(!showDifficultyDropdown)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-left pr-8 cursor-pointer"
                    >
                      {formData.difficulty}
                    </button>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    
                    {showDifficultyDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg z-10">
                        {['Kolay', 'Orta', 'Zor'].map((difficulty) => (
                          <button
                            key={difficulty}
                            type="button"
                            onClick={() => {
                              handleInputChange('difficulty', difficulty);
                              setShowDifficultyDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl"
                          >
                            {difficulty}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Malzemeler</label>
                <textarea
                  value={formData.ingredients}
                  onChange={(e) => handleInputChange('ingredients', e.target.value)}
                  placeholder="Malzemelerinizi listeleyin..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hazırlanışı</label>
                <textarea
                  value={formData.instructions}
                  onChange={(e) => handleInputChange('instructions', e.target.value)}
                  placeholder="Pişirme adımlarını açıklayın..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-green-600 whitespace-nowrap cursor-pointer"
              >
                Tarifi Kaydet
              </button>
            </form>
          </div>
        </div>
      )}

      {/* More Options Modal */}
      {showMoreOptions && selectedRecipe && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-end z-50"
          onClick={() => setShowMoreOptions(false)}
        >
          <div 
            className="bg-white rounded-t-3xl w-full max-w-md mx-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">{selectedRecipe.title}</h2>
              <button
                onClick={() => setShowMoreOptions(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer"
              >
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => {
                  handleToggleFavorite(selectedRecipe);
                  setShowMoreOptions(false);
                }}
                className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 cursor-pointer"
              >
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <i className={`${selectedRecipe.saved ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-red-500'}`}></i>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-800">
                    {selectedRecipe.saved ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedRecipe.saved ? 'Bu tarifi favorilerden kaldır' : 'Bu tarifi favorilerinize ekleyin'}
                  </p>
                </div>
              </button>

              <button
                onClick={() => {
                  handleEditRecipe(selectedRecipe);
                  setShowMoreOptions(false);
                }}
                className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 cursor-pointer"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-edit-line text-blue-500"></i>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-800">Düzenle</h3>
                  <p className="text-sm text-gray-600">Tarif bilgilerini düzenleyin</p>
                </div>
              </button>

              <button
                onClick={() => {
                  handleDeleteRecipe(selectedRecipe);
                  setShowMoreOptions(false);
                }}
                className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-red-50 cursor-pointer"
              >
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <i className="ri-delete-bin-line text-red-500"></i>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-800">Sil</h3>
                  <p className="text-sm text-gray-600">Bu tarifi kalıcı olarak silin</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNavigation />
    </div>
  );
}
