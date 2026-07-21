"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type LangType = "TR" | "EN";

export interface LanguageContextType {
  lang: LangType;
  setLang: (lang: LangType) => void;
  t: (trText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangType>("TR");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const savedLang = localStorage.getItem("epcon_lang") as LangType;
      if (savedLang === "TR" || savedLang === "EN") {
        setLangState(savedLang);
      }
    } catch (error) {
      console.error("Local storage okunamadı:", error);
    }
  }, []);

  const setLang = (newLang: LangType) => {
    setLangState(newLang);
    try {
      localStorage.setItem("epcon_lang", newLang);
    } catch (error) {}
  };

  const t = (trText: string, enText: string) => {
    // Sayfa tam yüklenene kadar sunucuyla aynı olması için varsayılan dili döner (Hydration hatasını engeller)
    if (!isMounted) return trText;
    return lang === "EN" ? enText : trText;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage hook'u mutlaka LanguageProvider içinde kullanılmalıdır.");
  }
  return context;
}