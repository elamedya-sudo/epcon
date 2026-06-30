"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          // Değişiklik burada: right-24 (sola aldık), bottom-6 (hizaya getirdik)
          className="fixed bottom-6 right-24 z-40 w-14 h-14 bg-white text-navy border-2 border-navy rounded-full flex items-center justify-center shadow-lg hover:bg-navy hover:text-white transition-all duration-300 animate-bounce"
          aria-label="Yukarı Çık"
        >
          <ChevronUp size={28} />
        </button>
      )}
    </>
  );
}