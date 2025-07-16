export type Locale = 'tr' | 'en';

export interface Translations {
  // Common
  common: {
    loading: string;
    error: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    close: string;
    back: string;
    next: string;
    previous: string;
    search: string;
    filter: string;
    sort: string;
    view: string;
    add: string;
    remove: string;
    yes: string;
    no: string;
    ok: string;
  };

  // Navigation
  navigation: {
    home: string;
    recipes: string;
    search: string;
    cooking: string;
    profile: string;
  };

  // Auth
  auth: {
    signIn: string;
    signOut: string;
    signUp: string;
    email: string;
    password: string;
    forgotPassword: string;
    rememberMe: string;
    signInWithGoogle: string;
    createAccount: string;
    alreadyHaveAccount: string;
    dontHaveAccount: string;
  };

  // Profile
  profile: {
    title: string;
    settings: string;
    notifications: string;
    darkMode: string;
    language: string;
    stats: {
      recipesSaved: string;
      recipesCreated: string;
      daysCooking: string;
    };
    actions: {
      myRecipes: string;
      myRecipesDesc: string;
      cookingHistory: string;
      cookingHistoryDesc: string;
      dietaryPreferences: string;
      dietaryPreferencesDesc: string;
      helpSupport: string;
      helpSupportDesc: string;
    };
    achievements: {
      firstRecipe: string;
      recipeMaster: string;
      veganExplorer: string;
      cookingStreak: string;
    };
  };

  // Recipes
  recipes: {
    title: string;
    searchRecipes: string;
    categories: string;
    popular: string;
    recent: string;
    favorites: string;
    myRecipes: string;
    ingredients: string;
    instructions: string;
    prepTime: string;
    cookTime: string;
    totalTime: string;
    servings: string;
    difficulty: string;
    difficultyLevels: {
      easy: string;
      medium: string;
      hard: string;
    };
    nutrition: {
      calories: string;
      protein: string;
      carbs: string;
      fat: string;
      fiber: string;
    };
    actions: {
      print: string;
      share: string;
      favorite: string;
      unfavorite: string;
      startCooking: string;
      stopCooking: string;
    };
  };

  // Cooking Mode
  cooking: {
    title: string;
    step: string;
    of: string;
    timer: string;
    pause: string;
    resume: string;
    nextStep: string;
    previousStep: string;
    finish: string;
    timeRemaining: string;
    completed: string;
  };

  // Search
  search: {
    title: string;
    placeholder: string;
    noResults: string;
    filters: string;
    categories: string;
    difficulty: string;
    time: string;
    ingredients: string;
    clearFilters: string;
  };

  // Dashboard
  dashboard: {
    title: string;
    welcome: string;
    todayRecipes: string;
    quickStart: string;
    recentActivity: string;
    recommendations: string;
    trending: string;
  };
}

export const translations: Record<Locale, Translations> = {
  tr: {
    common: {
      loading: 'Yükleniyor...',
      error: 'Hata',
      save: 'Kaydet',
      cancel: 'İptal',
      delete: 'Sil',
      edit: 'Düzenle',
      close: 'Kapat',
      back: 'Geri',
      next: 'İleri',
      previous: 'Önceki',
      search: 'Ara',
      filter: 'Filtrele',
      sort: 'Sırala',
      view: 'Görüntüle',
      add: 'Ekle',
      remove: 'Kaldır',
      yes: 'Evet',
      no: 'Hayır',
      ok: 'Tamam',
    },
    navigation: {
      home: 'Ana Sayfa',
      recipes: 'Tarifler',
      search: 'Ara',
      cooking: 'Pişirme',
      profile: 'Profil',
    },
    auth: {
      signIn: 'Giriş Yap',
      signOut: 'Çıkış Yap',
      signUp: 'Kayıt Ol',
      email: 'E-posta',
      password: 'Şifre',
      forgotPassword: 'Şifremi Unuttum',
      rememberMe: 'Beni Hatırla',
      signInWithGoogle: 'Google ile Giriş Yap',
      createAccount: 'Hesap Oluştur',
      alreadyHaveAccount: 'Zaten hesabınız var mı?',
      dontHaveAccount: 'Hesabınız yok mu?',
    },
    profile: {
      title: 'Profil',
      settings: 'Ayarlar',
      notifications: 'Bildirimler',
      darkMode: 'Karanlık Mod',
      language: 'Dil',
      stats: {
        recipesSaved: 'Kaydedilen Tarifler',
        recipesCreated: 'Oluşturulan Tarifler',
        daysCooking: 'Pişirme Günleri',
      },
      actions: {
        myRecipes: 'Tariflerim',
        myRecipesDesc: 'Kaydedilen ve oluşturulan tarifleri görüntüle',
        cookingHistory: 'Pişirme Geçmişi',
        cookingHistoryDesc: 'Pişirme yolculuğunuzu takip edin',
        dietaryPreferences: 'Beslenme Tercihleri',
        dietaryPreferencesDesc: 'Diyet ayarlarınızı özelleştirin',
        helpSupport: 'Yardım & Destek',
        helpSupportDesc: 'Yardım alın ve destek ile iletişime geçin',
      },
      achievements: {
        firstRecipe: 'İlk Tarif',
        recipeMaster: 'Tarif Ustası',
        veganExplorer: 'Vegan Kaşifi',
        cookingStreak: 'Pişirme Serisi',
      },
    },
    recipes: {
      title: 'Tarifler',
      searchRecipes: 'Tarif Ara',
      categories: 'Kategoriler',
      popular: 'Popüler',
      recent: 'Son Eklenenler',
      favorites: 'Favoriler',
      myRecipes: 'Tariflerim',
      ingredients: 'Malzemeler',
      instructions: 'Hazırlanışı',
      prepTime: 'Hazırlık Süresi',
      cookTime: 'Pişirme Süresi',
      totalTime: 'Toplam Süre',
      servings: 'Porsiyon',
      difficulty: 'Zorluk',
      difficultyLevels: {
        easy: 'Kolay',
        medium: 'Orta',
        hard: 'Zor',
      },
      nutrition: {
        calories: 'Kalori',
        protein: 'Protein',
        carbs: 'Karbonhidrat',
        fat: 'Yağ',
        fiber: 'Lif',
      },
      actions: {
        print: 'Yazdır',
        share: 'Paylaş',
        favorite: 'Favorilere Ekle',
        unfavorite: 'Favorilerden Çıkar',
        startCooking: 'Pişirmeye Başla',
        stopCooking: 'Pişirmeyi Durdur',
      },
    },
    cooking: {
      title: 'Pişirme Modu',
      step: 'Adım',
      of: '/',
      timer: 'Zamanlayıcı',
      pause: 'Duraklat',
      resume: 'Devam Et',
      nextStep: 'Sonraki Adım',
      previousStep: 'Önceki Adım',
      finish: 'Bitir',
      timeRemaining: 'Kalan Süre',
      completed: 'Tamamlandı',
    },
    search: {
      title: 'Arama',
      placeholder: 'Tarif ara...',
      noResults: 'Sonuç bulunamadı',
      filters: 'Filtreler',
      categories: 'Kategoriler',
      difficulty: 'Zorluk',
      time: 'Süre',
      ingredients: 'Malzemeler',
      clearFilters: 'Filtreleri Temizle',
    },
    dashboard: {
      title: 'Ana Sayfa',
      welcome: 'Hoş Geldiniz',
      todayRecipes: 'Bugünün Tarifleri',
      quickStart: 'Hızlı Başlangıç',
      recentActivity: 'Son Aktiviteler',
      recommendations: 'Öneriler',
      trending: 'Trend',
    },
  },
  en: {
    common: {
      loading: 'Loading...',
      error: 'Error',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      view: 'View',
      add: 'Add',
      remove: 'Remove',
      yes: 'Yes',
      no: 'No',
      ok: 'OK',
    },
    navigation: {
      home: 'Home',
      recipes: 'Recipes',
      search: 'Search',
      cooking: 'Cooking',
      profile: 'Profile',
    },
    auth: {
      signIn: 'Sign In',
      signOut: 'Sign Out',
      signUp: 'Sign Up',
      email: 'Email',
      password: 'Password',
      forgotPassword: 'Forgot Password',
      rememberMe: 'Remember Me',
      signInWithGoogle: 'Sign in with Google',
      createAccount: 'Create Account',
      alreadyHaveAccount: 'Already have an account?',
      dontHaveAccount: "Don't have an account?",
    },
    profile: {
      title: 'Profile',
      settings: 'Settings',
      notifications: 'Notifications',
      darkMode: 'Dark Mode',
      language: 'Language',
      stats: {
        recipesSaved: 'Recipes Saved',
        recipesCreated: 'Recipes Created',
        daysCooking: 'Days Cooking',
      },
      actions: {
        myRecipes: 'My Recipes',
        myRecipesDesc: 'View saved and created recipes',
        cookingHistory: 'Cooking History',
        cookingHistoryDesc: 'Track your cooking journey',
        dietaryPreferences: 'Dietary Preferences',
        dietaryPreferencesDesc: 'Customize your diet settings',
        helpSupport: 'Help & Support',
        helpSupportDesc: 'Get help and contact support',
      },
      achievements: {
        firstRecipe: 'First Recipe',
        recipeMaster: 'Recipe Master',
        veganExplorer: 'Vegan Explorer',
        cookingStreak: 'Cooking Streak',
      },
    },
    recipes: {
      title: 'Recipes',
      searchRecipes: 'Search Recipes',
      categories: 'Categories',
      popular: 'Popular',
      recent: 'Recent',
      favorites: 'Favorites',
      myRecipes: 'My Recipes',
      ingredients: 'Ingredients',
      instructions: 'Instructions',
      prepTime: 'Prep Time',
      cookTime: 'Cook Time',
      totalTime: 'Total Time',
      servings: 'Servings',
      difficulty: 'Difficulty',
      difficultyLevels: {
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard',
      },
      nutrition: {
        calories: 'Calories',
        protein: 'Protein',
        carbs: 'Carbs',
        fat: 'Fat',
        fiber: 'Fiber',
      },
      actions: {
        print: 'Print',
        share: 'Share',
        favorite: 'Add to Favorites',
        unfavorite: 'Remove from Favorites',
        startCooking: 'Start Cooking',
        stopCooking: 'Stop Cooking',
      },
    },
    cooking: {
      title: 'Cooking Mode',
      step: 'Step',
      of: 'of',
      timer: 'Timer',
      pause: 'Pause',
      resume: 'Resume',
      nextStep: 'Next Step',
      previousStep: 'Previous Step',
      finish: 'Finish',
      timeRemaining: 'Time Remaining',
      completed: 'Completed',
    },
    search: {
      title: 'Search',
      placeholder: 'Search recipes...',
      noResults: 'No results found',
      filters: 'Filters',
      categories: 'Categories',
      difficulty: 'Difficulty',
      time: 'Time',
      ingredients: 'Ingredients',
      clearFilters: 'Clear Filters',
    },
    dashboard: {
      title: 'Home',
      welcome: 'Welcome',
      todayRecipes: "Today's Recipes",
      quickStart: 'Quick Start',
      recentActivity: 'Recent Activity',
      recommendations: 'Recommendations',
      trending: 'Trending',
    },
  },
};

export function useTranslations(locale: Locale) {
  return translations[locale];
}

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
} 