"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en, ar, TranslationKey } from "../translations";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  t: TranslationKey;
  toggleLanguage: () => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar"); // Default to Arabic for Saudi Vision 2030 authenticity

  useEffect(() => {
    // Dynamically update document dir and lang attributes on the client side
    const html = document.documentElement;
    html.setAttribute("lang", language);
    html.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = language === "en" ? en : ar;
  const isRtl = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
