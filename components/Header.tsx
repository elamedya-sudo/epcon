"use client";

import React, { useState } from "react";
import { Phone, MapPin, Menu, X, ShieldCheck, ChevronDown } from "lucide-react";
import Link from "next/link"; // Link eklendi

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (idx: number, e: React.MouseEvent) => {
    e.preventDefault(); // Ana linke gitmesini engellemek için
    setActiveDropdown(activeDropdown === idx ? null : idx);
  };

  // Ana menü kategorilerine 'mainHref' eklendi
  const menuItems = [
    {
      name: "Kurumsal",
      mainHref: "/hakkimizda", // Kurumsal tıklandığında Hakkımızda sayfasına gitsin
      isDropdown: true,
      items: [
        { name: "Hakkımızda", href: "/hakkimizda" },
        { name: "Misyon ve Vizyon", href: "/hakkimizda#misyon" }, 
        { name: "Kalite Politikamız", href: "/hakkimizda#kalite" },
        { name: "Yetki, Belge ve Üyeliklerimiz", href: "/belgelerimiz" },
        { name: "Kurucumuzdan", href: "/hakkimizda#kurucumuzdan" },
        { name: "Ekibimiz", href: "/ekibimiz" },
      ],
    },
    {
      name: "Pest Kontrol",
      mainHref: "/pest-kontrol", // Pest Kontrol ana sayfasına yönlendirme
      isDropdown: true,
      items: [
        { name: "Entegre Zararlı Yönetimi", href: "/entegre-zararli-yonetimi" },
        { name: "Kemirgen Kontrolü", href: "/kemirgen-kontrolu" },
        { name: "Yürüyen Haşere", href: "/yuruyen-hasere-mucadelesi" },
        { name: "Uçan Haşere", href: "/ucan-hasere-mucadelesi" },
        { name: "Depo Zararlıları", href: "/depo-zararlilari-yonetimi" },
        { name: "Zararlı Türleri", href: "/zararli-turleri" },
      ],
    },
    {
      name: "Fumigasyon",
      mainHref: "/fumigasyon", // Fumigasyon ana sayfasına yönlendirme
      isDropdown: true,
      items: [
        { name: "Fumigasyon Hizmetleri", href: "/fumigasyon" },
        { name: "BMSB", href: "/bmsb-fumigasyonu" },
        { name: "ISPM 15", href: "/ispm-15-hizmetleri" },
        { name: "Konteyner", href: "/konteyner-fumigasyonu" },
        { name: "Gemi ve Yat", href: "/gemi-yat-fumigasyonu" },
        { name: "Depo ve Silo", href: "/depo-silo-fumigasyonu" },
        { name: "Ürün ve Yük", href: "/urun-yuk-fumigasyonu" },
        { name: "Gaz Ölçümü ve Gazdan Arındırma", href: "/gaz-olcumu-gazdan-arindirma" },
        { name: "Fumigasyon ve İşlem Yöntemleri", href: "/fumigasyon-islem-yontemleri" },
      ],
    },
    {
      name: "İlaçlama",
      mainHref: "/sektorel-ilaclama", // İlaçlama ana sayfasına yönlendirme (veya sektörel-ilaçlama)
      isDropdown: true,
      items: [
        { name: "Ev ve Daire", href: "/ev-daire-ilaclama" },
        { name: "Villa", href: "/villa-ilaclama" },
        { name: "Site ve Apartman", href: "/site-apartman-ilaclama" },
        { name: "İşyeri ve Ofis", href: "/isyeri-ofis-ilaclama" },
        { name: "Bahçe ve Dış Alan", href: "/bahce-dis-alan-ilaclama" },
        { name: "Bitki Sağlığı", href: "/bitki-ilaclama" },
      ],
    },
    { name: "Belgelerimiz", href: "/belgelerimiz", isDropdown: false },
    {
      name: "Blog",
      mainHref: "/blog", // Blog ana sayfasına yönlendirme
      isDropdown: true,
      items: [
        { name: "Pest Kontrol", href: "/blog/pest-kontrol" },
        { name: "Fumigasyon", href: "/blog/fumigasyon" },
        { name: "İlaçlama", href: "/blog/ilaclama" },
        { name: "Bitki Sağlığı", href: "/blog/bitki-sagligi" },
        { name: "Sektörel Rehber", href: "/blog/sektorel-rehber" },
      ],
    },
    { name: "Referanslar", href: "/referanslar", isDropdown: false },
    { name: "İletişim", href: "/iletisim", isDropdown: false },
  ];

  return (
    <header className="w-full sticky top-0 z-50 font-barlow bg-white shadow-md flex flex-col">
      
      {/* ── 1. ÜST BANT ── */}
      <div className="w-full bg-navy-deeper text-white/80 text-xs py-2.5 px-4 md:px-10 flex overflow-x-auto whitespace-nowrap hide-scrollbar border-b border-white/5">
        <div className="flex items-center gap-4 min-w-max mx-auto md:mx-0 md:justify-between w-full">
          <div className="flex items-center gap-3 md:gap-4">
            <span>Hizmet Saatleri: Pzt-Cmt 08.00-20.00</span>
            <span className="opacity-50">|</span>
            <span className="flex items-center gap-1">
              <MapPin size={12} className="text-pest-green" />
              İstanbul merkezli, Türkiye genelinde hizmet
            </span>
          </div>
          <div className="flex items-center gap-3 md:gap-4 ml-4 md:ml-auto">
            <a href="tel:+902165057306" className="hover:text-white transition-colors">
              0216 505 73 06
            </a>
            <span className="opacity-50">|</span>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors font-medium">
              WhatsApp: 0531 690 10 71
            </a>
          </div>
        </div>
      </div>

      {/* ── 2. ANA MENÜ ── */}
      <nav className="w-full bg-transparent h-20 px-6 md:px-10 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center h-full py-2">
          <Link href="/" className="flex items-center h-full">
            <img 
              src="/images/logo/epcon-logo.png" 
              alt="EPCON İlaçlama" 
              className="h-11 md:h-12 w-auto object-contain transition-all"
            />
          </Link>
        </div>

        {/* Masaüstü Menü Linkleri */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 relative h-full">
          {menuItems.map((item, idx) => (
            item.isDropdown ? (
              <div key={idx} className="relative group h-full flex items-center">
                {/* Ana link tıklanabilir hale getirildi */}
                <Link 
                  href={item.mainHref || "#"} 
                  className="flex items-center gap-1 text-[15px] font-semibold text-text-mid hover:text-navy transition-colors tracking-wide py-8"
                >
                  {item.name} 
                  <ChevronDown size={14} className="mt-0.5 transition-transform group-hover:rotate-180" />
                </Link>
                
                {/* Açılır Menü (Masaüstü) */}
                <div className="absolute top-full left-0 w-64 bg-white border border-border rounded-b-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                  <div className="flex flex-col py-2">
                    {item.items?.map((subItem, subIdx) => (
                      <Link 
                        key={subIdx} 
                        href={subItem.href}
                        className="px-5 py-2.5 text-sm font-medium text-text-mid hover:bg-slate-50 hover:text-pest-green transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href || "#"}
                className="text-[15px] font-semibold text-text-mid hover:text-navy transition-colors tracking-wide flex items-center h-full"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Sağ Taraf CTA */}
        <div className="hidden sm:flex items-center">
          <Link
            href="/ucretsiz-teklif-al"
            className="bg-pest-green hover:bg-pest-green-dark text-white text-sm font-bold px-6 py-2.5 rounded-md transition-all transform hover:-translate-y-0.5 shadow-sm flex items-center gap-2"
          >
            <ShieldCheck size={18} />
            Teklif Al
          </Link>
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

      {/* ── 3. MOBİL AÇILIR MENÜ ── */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-border shadow-xl lg:hidden z-50">
          <div className="flex flex-col p-6 space-y-2 max-h-[75vh] overflow-y-auto">
            {menuItems.map((item, idx) => (
              item.isDropdown ? (
                <div key={idx} className="flex flex-col border-b border-border/50 pb-2">
                  <div className="flex items-center justify-between py-2">
                    {/* Ana link tıklanabilir yapıldı */}
                    <Link 
                      href={item.mainHref || "#"} 
                      onClick={() => setIsOpen(false)}
                      className="text-base font-bold text-text-dark hover:text-pest-green transition-colors flex-grow"
                    >
                      {item.name}
                    </Link>
                    {/* Oku tıklayınca menü açılır */}
                    <button 
                      onClick={(e) => toggleDropdown(idx, e)}
                      className="p-2 -mr-2 text-text-dark hover:text-pest-green transition-colors"
                    >
                      <ChevronDown size={18} className={`transition-transform duration-300 ${activeDropdown === idx ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  
                  {/* Mobil Dropdown İçeriği */}
                  <div className={`flex flex-col pl-4 overflow-hidden transition-all duration-300 ${activeDropdown === idx ? "max-h-[500px] mt-2 opacity-100" : "max-h-0 opacity-0"}`}>
                    {item.items?.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="py-2.5 text-sm font-medium text-text-mid hover:text-pest-green border-l-2 border-border pl-3"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.href || "#"}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-base font-bold text-text-dark hover:text-pest-green transition-colors border-b border-border/50"
                >
                  {item.name}
                </Link>
              )
            ))}
            
            <div className="pt-6 flex flex-col gap-3">
              <Link
                href="/ucretsiz-teklif-al"
                className="w-full bg-pest-green text-white text-center py-3 rounded-md font-bold text-base flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <ShieldCheck size={18} /> Teklif Al
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}