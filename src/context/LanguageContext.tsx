import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { ar } from '../locales/ar';
import { en } from '../locales/en';
import { fr } from '../locales/fr';

const translations = { ar, en, fr };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof ar;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('silent_patient_lang') as Language;
    return saved && ['ar', 'en', 'fr'].includes(saved) ? saved : 'ar';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('silent_patient_lang', lang);
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    if (isRTL) {
      document.body.classList.add('font-sans');
    }
  }, [language, isRTL]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
