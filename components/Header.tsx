"use client";

import React, { useState } from "react";
import { Phone, MapPin, Menu, X, ShieldCheck } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Kurumsal sitemap yapımıza uygun menü elemanları
  const menuItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Pest Kontrol", href: "/hizmetlerimiz/pest-kontrol" },
    { name: "Fümigasyon", href: "/hizmetlerimiz/fumigasyon" },
    { name: "Sektörel İlaçlama", href: "/sektorel-ilaclama" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="w-full relative z-50 font-barlow">
      {/* ── TOP STRIP (ÜST BİLGİ ŞERİDİ) - MOBİLDE GİZLİ (hidden sm:flex) ── */}
      <div className="w-full bg-navy-deeper text-white/65 text-xs py-2.5 px-6 md:px-10 hidden sm:flex justify-between items-center gap-2 border-b border-white/5">
        <div className="flex items-center gap-4 md:gap-6">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Şu an müsait · Pzt–Cmt 08:00–20:00
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-pest-green" />
            İstanbul — Tüm İlçeler
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+902165057306" className="flex items-center gap-1 hover:text-white transition-colors">
            <Phone size={12} /> 0216 505 73 06
          </a>
          <a href="tel:+905316901071" className="flex items-center gap-1 hover:text-white transition-colors font-medium text-white/80">
            <Phone size={12} className="text-pest-green" /> 0531 690 10 71
          </a>
        </div>
      </div>

      {/* ── MAIN NAVBAR (ANA MENÜ) ── */}
      <nav className="w-full bg-white border-b border-border h-20 px-6 md:px-10 flex items-center justify-between sticky top-0 shadow-sm">
        {/* Logo Alanı */}
        <div className="flex items-center">
          <a href="/" className="font-barlowCondensed text-3xl font-extrabold tracking-tight text-navy uppercase">
            EP<span className="text-pest-green">CON</span>
          </a>
        </div>

        {/* Masaüstü Menü Linkleri */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-text-mid hover:text-navy transition-colors tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Sağ Taraf: Telefon & CTA Butonu */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex flex-col text-right hidden xl:flex">
            <span className="text-xs text-text-muted">7/24 Acil Hat</span>
            <a href="tel:+905316901071" className="text-sm font-bold text-navy">
              0531 690 10 71
            </a>
          </div>
          <a
            href="#form"
            className="bg-pest-green hover:bg-pest-green-dark text-white text-sm font-medium px-5 py-2.5 rounded-md transition-all transform hover:-translate-y-0.5 shadow-sm flex items-center gap-2"
          >
            <ShieldCheck size={16} />
            Ücretsiz Teklif Al
          </a>
        </div>

        {/* Mobil Hamburger Butonu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-text-dark hover:text-navy outline-none"
          aria-label="Menüyü Aç"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* ── MOBİL AÇILIR MENÜ (DRAWER) ── */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-border shadow-xl lg:hidden z-50">
          <div className="flex flex-col p-6 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-text-dark hover:text-pest-green transition-colors border-b border-border/50 pb-2"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:+905316901071"
                className="w-full bg-navy text-white text-center py-3 rounded-md font-medium text-sm flex items-center justify-center gap-2"
              >
                <Phone size={16} /> Hemen Ara: 0531 690 10 71
              </a>
              <a
                href="#form"
                onClick={() => setIsOpen(false)}
                className="w-full bg-pest-green text-white text-center py-3 rounded-md font-medium text-sm flex items-center justify-center"
              >
                Ücretsiz Teklif Al
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}