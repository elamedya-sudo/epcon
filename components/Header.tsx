"use client";

import React, { useState } from "react";
import { Phone, MapPin, Menu, X, ShieldCheck, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);

  const menuItems = [
    { name: "Ana Sayfa", href: "/" },
    {
      name: "Kurumsal",
      isDropdown: true,
      items: [
        { name: "Hakkımızda", href: "/hakkimizda" },
        { name: "Kalite Standartlarımız", href: "/hakkimizda#kalite" },
        { name: "Misyon & Vizyon", href: "/hakkimizda#misyon-vizyon" },
        { name: "Belgelerimiz", href: "/belgelerimiz" },
      ],
    },
    { name: "Pest Kontrol", href: "/pest-kontrol" },
    { name: "Fümigasyon", href: "/fumigasyon" },
    { name: "Sektörel İlaçlama", href: "/sektorel-ilaclama" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    // 1. ANA SARICI: Sayfa kaydıkça üstte sabit kalmasını sağlayan sticky yapı
    <header className="w-full sticky top-0 z-50 font-barlow bg-white shadow-md flex flex-col">
      
      {/* ── TOP STRIP (KAYBOLAN LACİVERT ÜST BANT) ── */}
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

      {/* ── MAIN NAVBAR (BEYAZ ANA MENÜ) ── */}
      <nav className="w-full bg-transparent h-20 px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center h-full py-2">
          <a href="/" className="flex items-center h-full">
            <img 
              src="/images/logo/epcon-logo.png" 
              alt="EPCON İlaçlama" 
              className="h-11 md:h-12 w-auto object-contain transition-all"
            />
          </a>
        </div>

        {/* Masaüstü Menü Linkleri */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 relative h-full">
          {menuItems.map((item, idx) => (
            item.isDropdown ? (
              <div key={idx} className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 text-sm font-medium text-text-mid hover:text-navy transition-colors tracking-wide py-8">
                  {item.name} <ChevronDown size={14} className="mt-0.5 transition-transform group-hover:rotate-180" />
                </button>
                {/* Açılır Menü (Desktop) */}
                <div className="absolute top-full left-0 w-56 bg-white border border-border rounded-b-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                  <div className="flex flex-col py-2">
                    {item.items?.map((subItem, subIdx) => (
                      <a 
                        key={subIdx} 
                        href={subItem.href}
                        className="px-5 py-3 text-sm text-text-mid hover:bg-slate-50 hover:text-pest-green transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={idx}
                href={item.href}
                className="text-sm font-medium text-text-mid hover:text-navy transition-colors tracking-wide flex items-center h-full"
              >
                {item.name}
              </a>
            )
          ))}
        </div>

        {/* Sağ Taraf CTA */}
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

      {/* ── MOBİL AÇILIR MENÜ ── */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-border shadow-xl lg:hidden z-50">
          <div className="flex flex-col p-6 space-y-2 max-h-[80vh] overflow-y-auto">
            {menuItems.map((item, idx) => (
              item.isDropdown ? (
                <div key={idx} className="flex flex-col border-b border-border/50 pb-2">
                  <button 
                    onClick={() => setIsCorporateOpen(!isCorporateOpen)}
                    className="flex items-center justify-between py-2 text-base font-semibold text-text-dark hover:text-pest-green transition-colors"
                  >
                    {item.name}
                    <ChevronDown size={18} className={`transition-transform duration-300 ${isCorporateOpen ? "rotate-180" : ""}`} />
                  </button>
                  {/* Mobil Dropdown İçeriği */}
                  <div className={`flex flex-col pl-4 overflow-hidden transition-all duration-300 ${isCorporateOpen ? "max-h-64 mt-2 opacity-100" : "max-h-0 opacity-0"}`}>
                    {item.items?.map((subItem, subIdx) => (
                      <a
                        key={subIdx}
                        href={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="py-2.5 text-sm text-text-mid hover:text-pest-green border-l-2 border-border pl-3"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-base font-semibold text-text-dark hover:text-pest-green transition-colors border-b border-border/50 pb-2"
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+905316901071"
                className="w-full bg-navy text-white text-center py-3 rounded-md font-medium text-sm flex items-center justify-center gap-2"
              >
                <Phone size={16} /> Hemen Ara: 0531 690 10 71
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}