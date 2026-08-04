"use client";

import React, { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X, ShieldCheck, ChevronDown, FileText, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Dışarıdan gelecek settings prop'unu tanımlıyoruz
export default function Header({ settings }: { settings?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [currentLang, setCurrentLang] = useState("TR");
  const pathname = usePathname();

  // Admin panelindeysek site menüsünü tamamen gizle
  if (pathname?.startsWith("/admin")) return null;

  // Sanity verilerini al, yoksa varsayılanları kullan
  const phone = settings?.phone || "0216 505 73 06";
  const whatsapp = settings?.whatsapp || "0533 234 43 88";
  
  const cleanTel = phone.replace(/\s+/g, "");
  const cleanWa = "90" + whatsapp.replace(/^0/, "").replace(/\s+/g, "");

  useEffect(() => {
    if (document.cookie.includes("googtrans=/tr/en")) setCurrentLang("EN");
    else if (document.cookie.includes("googtrans=/tr/ru")) setCurrentLang("RU");
    else if (document.cookie.includes("googtrans=/tr/de")) setCurrentLang("DE");
    else if (document.cookie.includes("googtrans=/tr/ar")) setCurrentLang("AR");
    else setCurrentLang("TR");
  }, []);

  const switchLanguage = (lang: "TR" | "EN" | "RU" | "DE" | "AR") => {
    if (lang === "TR") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
    } else {
      const targetLang = lang.toLowerCase();
      document.cookie = `googtrans=/tr/${targetLang}; path=/`;
      document.cookie = `googtrans=/tr/${targetLang}; domain=${window.location.hostname}; path=/`;
    }
    window.location.reload();
  };

  const toggleDropdown = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === idx ? null : idx);
  };

  const menuItems = [
    { name: "Kurumsal", href: "/hakkimizda", isDropdown: false },
    {
      name: "Pest Kontrol",
      mainHref: "/pest-kontrol",
      isDropdown: true,
      items: [
        { name: "Entegre Zararlı Yönetimi (IPM)", href: "/entegre-zararli-yonetimi" },
        { name: "Kemirgen Kontrolü", href: "/kemirgen-kontrolu" },
        { name: "Yürüyen Haşere Mücadelesi", href: "/yuruyen-hasere-mucadelesi" },
        { name: "Uçan Haşere Mücadelesi", href: "/ucan-hasere-mucadelesi" },
        { name: "Depo Zararlıları Yönetimi", href: "/depo-zararlilari-yonetimi" }
      ],
    },
    {
      name: "Fumigasyon",
      mainHref: "/fumigasyon",
      isDropdown: true,
      items: [
        { name: "Fumigasyon Hizmetleri", href: "/fumigasyon" },
        { name: "BMSB Fumigasyonu", href: "/bmsb-fumigasyonu" },
        { name: "Avustralya Khapra Böceği", href: "/avustralya-khapra-bocegi-tedbirleri" },
        { name: "ISPM 15 Ahşap Ambalaj", href: "/ispm-15-hizmetleri" },
        { name: "Konteyner Fumigasyonu", href: "/konteyner-fumigasyonu" },
        { name: "Gemi ve Yat Fumigasyonu", href: "/gemi-yat-fumigasyonu" },
        { name: "Depo ve Silo Fumigasyonu", href: "/depo-silo-fumigasyonu" },
        { name: "Ürün ve Yük Fumigasyonu", href: "/urun-yuk-fumigasyonu" },
        { name: "Gaz Ölçümü ve Arındırma", href: "/gaz-olcumu-gazdan-arindirma" },
        { name: "İşlem Yöntemlerimiz", href: "/fumigasyon-islem-yontemleri" },
      ],
    },
    {
      name: "İlaçlama",
      mainHref: "/sektorel-ilaclama",
      isDropdown: true,
      items: [
        { name: "İlaçlama Hizmetleri", href: "/sektorel-ilaclama" },
        { name: "Ev ve Daire İlaçlama", href: "/ev-daire-ilaclama" },
        { name: "Villa İlaçlama", href: "/villa-ilaclama" },
        { name: "Site ve Apartman", href: "/site-apartman-ilaclama" },
        { name: "İşyeri ve Ofis", href: "/isyeri-ofis-ilaclama" },
        { name: "Bahçe ve Dış Alan", href: "/bahce-dis-alan-ilaclama" },
        { name: "Bitki Sağlığı Uygulamaları", href: "/bitki-ilaclama" },
        { name: "Acil Zararlı Müdahalesi", href: "/acil-zararli-mudahalesi" },
      ],
    },
    { name: "Blog", href: "/blog", isDropdown: false },
    { name: "Referanslar", href: "/referanslar", isDropdown: false },
    { name: "İletişim", href: "/iletisim", isDropdown: false },
  ];

  return (
    <header className="w-full sticky top-0 z-50 font-barlow bg-white shadow-md flex flex-col notranslate">
      
      {/* ── 1. ÜST BANT (Sadece Anasayfada Görünecek) ── */}
      {pathname === "/" && (
        <div className="w-full bg-navy-deeper text-white/90 text-xs py-2.5 overflow-hidden border-b border-white/5 relative flex items-center">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes scroll {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
            .marquee-mobile {
              display: flex;
              white-space: nowrap;
              animation: scroll 15s linear infinite;
              padding-left: 10px;
            }
            @media (min-width: 768px) {
              .marquee-mobile {
                animation: none;
                width: 100%;
                justify-content: space-between;
                padding: 0 40px;
                margin: 0 auto;
                max-width: 80rem;
              }
            }
          `}} />
          
          <div className="marquee-mobile gap-6 md:gap-4 min-w-max translate">
            <div className="flex items-center gap-3 md:gap-4">
              <span>Hizmet Saatleri: Pzt-Cmt 08.00-20.00</span>
              <span className="hidden md:inline opacity-50">|</span>
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-pest-green" />
                İstanbul merkezli, Türkiye genelinde hizmet
              </span>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <span className="hidden md:inline opacity-50">|</span>
              <a href={`tel:${cleanTel}`} className="hover:text-white transition-colors notranslate">{phone}</a>
              <span className="opacity-50">|</span>
              <a href={`https://wa.me/${cleanWa}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors font-medium notranslate">
                WhatsApp: {whatsapp}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── 2. ANA MENÜ ── */}
      <nav className="w-full bg-transparent h-20 px-6 md:px-10 flex items-center justify-between">
        
        <div className="flex items-center h-full py-2">
          <Link href="/" className="flex items-center h-full">
            <img src="/images/logo/epcon-logo.png" alt="EPCON İlaçlama" className="h-11 md:h-12 w-auto object-contain transition-all" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-5 xl:gap-7 relative h-full translate">
          {menuItems.map((item, idx) => (
            item.isDropdown ? (
              <div key={idx} className="relative group h-full flex items-center">
                <Link href={item.mainHref || "#"} className="flex items-center gap-1 text-[15px] font-semibold text-text-mid hover:text-navy transition-colors tracking-wide py-8">
                  {item.name} <ChevronDown size={14} className="mt-0.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full left-0 w-64 bg-white border border-border rounded-b-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex flex-col py-2">
                    {item.items?.map((subItem, subIdx) => (
                      <Link key={subIdx} href={subItem.href} className="px-5 py-2.5 text-sm font-medium text-text-mid hover:bg-slate-50 hover:text-pest-green transition-colors">{subItem.name}</Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={idx} href={item.href || "#"} className="text-[15px] font-semibold text-text-mid hover:text-navy transition-colors tracking-wide flex items-center h-full">
                {item.name}
              </Link>
            )
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-3">
          
          <div className="flex items-center bg-slate-100 p-1 rounded-md border border-slate-200">
            {(["TR", "EN", "RU", "DE", "AR"] as const).map((lang) => (
              <button 
                key={lang}
                onClick={() => switchLanguage(lang)}
                className={`px-2 py-1 text-[11px] font-bold rounded transition-all outline-none ${currentLang === lang ? "bg-navy text-white shadow-sm" : "text-text-mid hover:text-navy"}`}
              >
                {lang}
              </button>
            ))}
          </div>

          <Link href="/belgelerimiz" className="bg-navy hover:bg-navy-deeper text-white text-sm font-bold px-5 py-2.5 rounded-md transition-all flex items-center gap-2 translate">
            <FileText size={16} /> Belgelerimiz
          </Link>
          <Link href="/ucretsiz-teklif-al" className="bg-pest-green hover:bg-pest-green-dark text-white text-sm font-bold px-6 py-2.5 rounded-md transition-all flex items-center gap-2 shadow-sm translate">
            <ShieldCheck size={18} /> Teklif Al
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-text-dark hover:text-navy outline-none">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* ── 3. MOBİL MENÜ ── */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-border shadow-xl lg:hidden z-50">
          <div className="flex flex-col p-5 space-y-1 max-h-[calc(100dvh-80px)] overflow-y-auto pb-8">
            
            <div className="flex flex-col gap-2 pb-3 border-b border-border/50 mb-1">
              <span className="text-[13px] font-bold text-navy flex items-center gap-2 translate">
                <Globe size={14} className="text-pest-green" /> Dil / Language
              </span>
              <div className="grid grid-cols-5 gap-1 bg-slate-100 p-1 rounded-md border border-slate-200 text-center">
                {(["TR", "EN", "RU", "DE", "AR"] as const).map((lang) => (
                  <button 
                    key={lang}
                    onClick={() => switchLanguage(lang)}
                    className={`py-1.5 text-xs font-bold rounded transition-all outline-none ${currentLang === lang ? "bg-navy text-white shadow-sm" : "text-text-mid"}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="translate flex flex-col">
              {menuItems.map((item, idx) => (
                item.isDropdown ? (
                  <div key={idx} className="flex flex-col border-b border-border/50 pb-1.5">
                    <div className="flex items-center justify-between py-1.5">
                      <Link href={item.mainHref || "#"} onClick={() => setIsOpen(false)} className="text-[15px] font-bold text-text-dark hover:text-pest-green transition-colors flex-grow">
                        {item.name}
                      </Link>
                      <button onClick={(e) => toggleDropdown(idx, e)} className="p-2 -mr-2 text-text-dark hover:text-pest-green">
                        <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === idx ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    <div className={`flex flex-col pl-4 overflow-hidden transition-all duration-300 ${activeDropdown === idx ? "max-h-[500px] mt-1 opacity-100" : "max-h-0 opacity-0"}`}>
                      {item.items?.map((subItem, subIdx) => (
                        <Link key={subIdx} href={subItem.href} onClick={() => setIsOpen(false)} className="py-2 text-[13px] font-medium text-text-mid hover:text-pest-green border-l-2 border-border pl-3">{subItem.name}</Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={idx} href={item.href || "#"} onClick={() => setIsOpen(false)} className="block py-2.5 text-[15px] font-bold text-text-dark hover:text-pest-green transition-colors border-b border-border/50">{item.name}</Link>
                )
              ))}
            </div>
            
            <div className="pt-4 flex flex-col gap-2 translate">
              <Link href="/belgelerimiz" className="w-full bg-navy text-white text-center py-2.5 rounded-md font-bold text-[15px]" onClick={() => setIsOpen(false)}>
                Belgelerimiz
              </Link>
              <Link href="/ucretsiz-teklif-al" className="w-full bg-pest-green text-white text-center py-2.5 rounded-md font-bold text-[15px]" onClick={() => setIsOpen(false)}>
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}