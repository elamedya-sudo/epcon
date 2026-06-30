"use client";

import React, { useState, useRef, useEffect } from 'react';

// 1. İSTANBUL İLÇELERİ LİSTESİ
const ISTANBUL_ILCELERI = [
  "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", 
  "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", 
  "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", 
  "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", 
  "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", 
  "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", 
  "Ümraniye", "Üsküdar", "Zeytinburnu"
];

interface LeadHeroProps {
  badgeText: string;
  titleMain: string;
  titleHighlight: string;
  description: React.ReactNode;
  features?: { icon: React.ReactNode; label: string }[];
  mekanTurleri?: string[];
  backgroundImage?: string; 
  videoBackground?: string; // YENİ EKLENEN VİDEO ANAHTARI
  reverseLayout?: boolean;
}

export default function LeadHero({
  badgeText,
  titleMain,
  titleHighlight,
  description,
  features,
  mekanTurleri = ["Daire", "Villa", "Site / Ortak Alan", "İş Yeri / Fabrika", "Depo / Antrepo"],
  backgroundImage,
  videoBackground, // YENİ EKLENDİ
  reverseLayout = false
}: LeadHeroProps) {
  
  const [isIlceOpen, setIsIlceOpen] = useState(false);
  const [ilceSearch, setIlceSearch] = useState("");
  const [selectedIlce, setSelectedIlce] = useState("");
  const ilceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ilceRef.current && !ilceRef.current.contains(event.target as Node)) {
        setIsIlceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredIlceler = ISTANBUL_ILCELERI.filter(ilce => 
    ilce.toLocaleLowerCase('tr-TR').includes(ilceSearch.toLocaleLowerCase('tr-TR'))
  );

  return (
    <section className="relative bg-navy-deeper overflow-hidden min-h-[86vh] px-6 py-16 md:px-10 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-barlow">
      
      {/* ── ARKA PLAN EFEKTLERİ VEYA GÖRSEL/VİDEO ── */}
      {videoBackground ? (
        <div className="absolute inset-0 z-0 overflow-hidden bg-navy-deeper">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-70 pointer-events-none"
          >
            <source src={videoBackground} type="video/mp4" />
          </video>
          {/* Siyah/beyaz yapan filtreyi kaldırdık ve gradient'i yumuşattık. 
              Soldan sağa doğru açılan hafif bir lacivert gölge bıraktık ki yazılar okunsun. */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deeper/90 via-navy-deeper/50 to-navy-deeper/30" />
        </div>
      ) : backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <img src={backgroundImage} alt="Hero Background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deeper via-navy-deeper/90 to-navy-deeper/80" />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:30px_30px] z-0" />
          <div className="hidden lg:block absolute right-[-60px] top-[-80px] w-[55%] h-[130%] bg-gradient-to-br from-navy to-navy-dark transform -skew-x-6 z-0 opacity-60" />
          <div className="absolute right-[10%] bottom-[-40px] w-[300px] h-[300px] rounded-full bg-pest-green opacity-5 blur-[60px] z-0" />
        </>
      )}

      {/* ── METİNLER ── */}
      <div className={`relative z-10 lg:col-span-7 space-y-6 order-1 ${reverseLayout ? 'lg:order-2 lg:pl-10' : 'lg:order-1'}`}>
        <div className="inline-flex items-center gap-2 border border-pest-green/40 bg-pest-green/10 rounded px-[14px] py-[5px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-barlowCondensed text-xs font-semibold text-[#5dd88a] tracking-wider uppercase">
            {badgeText}
          </span>
        </div>

        <h1 className="font-barlowCondensed text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.95]">
          {titleMain} <br />
          <span className="text-pest-green">{titleHighlight}</span>
        </h1>

        <p className="text-base md:text-lg text-white/60 font-light max-w-[500px] leading-relaxed">
          {description}
        </p>

        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-2 max-w-[550px]">
            {features.map((feature, idx) => (
              <span key={idx} className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/70 rounded px-3 py-1.5 text-sm transition-all hover:bg-pest-green/15 hover:border-pest-green/35 hover:text-[#5dd88a] cursor-default">
                {feature.icon}
                {feature.label}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3 items-center pt-2">
          <a href="tel:+905316901071" className="bg-pest-green hover:bg-pest-green-dark text-white font-medium rounded-md px-8 py-4 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 tracking-wide text-sm">
            Hemen Ara — Ücretsiz Keşif
          </a>
          <a href="https://wa.me/905316901071" target="_blank" rel="noopener noreferrer" className="border border-white/20 hover:border-white/45 bg-transparent hover:bg-white/5 text-white rounded-md px-6 py-[15px] flex items-center gap-2 transition-all transform hover:-translate-y-0.5 text-sm">
            <div className="w-[22px] h-[22px] bg-[#25d366] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">WA</span>
            </div>
            WhatsApp'tan Yaz
          </a>
        </div>
      </div>

      {/* ── FORM ALANI ── */}
      <div className={`relative z-10 lg:col-span-5 w-full max-w-[480px] justify-self-center lg:justify-self-end bg-white rounded-xl p-7 md:p-8 shadow-2xl order-2 ${reverseLayout ? 'lg:order-1 lg:justify-self-start' : 'lg:order-2'}`}>
        <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase tracking-wide">
          Ücretsiz Keşif Talep Et
        </h3>
        <p className="text-xs text-text-muted mb-5">Bilgilerinizi bırakın, sizi arayalım.</p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-medium text-text-mid mb-1 tracking-wider">Ad Soyad</label>
            <input type="text" className="w-full border-2 border-border rounded-md px-[14px] py-[11px] text-sm text-text-dark bg-white outline-none focus:border-navy transition-colors" placeholder="Adınız Soyadınız" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-text-mid mb-1 tracking-wider">Telefon</label>
              <input type="tel" className="w-full border-2 border-border rounded-md px-[14px] py-[11px] text-sm text-text-dark bg-white outline-none focus:border-navy transition-colors" placeholder="05XX XXX XX XX" />
            </div>
            
            {/* ── YENİ: ARAMALI İLÇE KUTUSU ── */}
            <div className="relative" ref={ilceRef}>
              <label className="block text-xs font-medium text-text-mid mb-1 tracking-wider">İlçe</label>
              <div 
                className="w-full border-2 border-border rounded-md px-[14px] py-[11px] text-sm bg-white outline-none focus:border-navy transition-colors cursor-pointer flex justify-between items-center"
                onClick={() => setIsIlceOpen(!isIlceOpen)}
              >
                <span className={selectedIlce ? "text-text-dark" : "text-text-muted"}>
                  {selectedIlce || "İlçe Ara/Seç"}
                </span>
                <span className="text-xs text-text-muted transition-transform duration-300" style={{ transform: isIlceOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
              </div>

              {isIlceOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-border rounded-md shadow-2xl max-h-60 overflow-y-auto">
                  <div className="sticky top-0 bg-slate-50 p-2 border-b border-border">
                    <input 
                      type="text" 
                      className="w-full border border-border rounded px-3 py-2 text-sm outline-none focus:border-pest-green transition-colors"
                      placeholder="İstanbul'da ilçe ara..."
                      value={ilceSearch}
                      onChange={(e) => setIlceSearch(e.target.value)}
                      onClick={(e) => e.stopPropagation()} // Inputa tıklanınca menünün kapanmasını engeller
                      autoFocus
                    />
                  </div>
                  <ul className="py-1">
                    {filteredIlceler.length > 0 ? (
                      filteredIlceler.map((ilce, idx) => (
                        <li 
                          key={idx} 
                          className="px-4 py-2 text-sm hover:bg-pest-green/10 hover:text-navy cursor-pointer transition-colors"
                          onClick={() => {
                            setSelectedIlce(ilce);
                            setIsIlceOpen(false);
                            setIlceSearch(""); // Seçim yapılınca aramayı sıfırla
                          }}
                        >
                          {ilce}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-3 text-sm text-text-muted text-center italic">Sonuç bulunamadı</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-text-mid mb-1 tracking-wider">Mekan Türü</label>
            <select className="w-full border-2 border-border rounded-md px-[14px] py-[11px] text-sm text-text-dark bg-white outline-none focus:border-navy transition-colors">
              <option value="">Seçin</option>
              {mekanTurleri.map((mekan, idx) => (
                <option key={idx} value={mekan}>{mekan}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="w-full bg-navy hover:bg-navy-dark text-white font-medium rounded-md py-3.5 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 tracking-wide text-sm mt-2">
            Teklif İste — Ücretsiz
          </button>
        </form>
      </div>
    </section>
  );
}