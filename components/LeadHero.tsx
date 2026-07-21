"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react';

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
  badgeText?: string;
  titleMain?: string;
  titleHighlight?: string;
  description?: React.ReactNode;
  features?: { icon: React.ReactNode; label: string }[];
  mekanTurleri?: string[];
  hizmetTurleri?: string[];
  backgroundImage?: string; 
  videoBackground?: string; 
  reverseLayout?: boolean;
}

export default function LeadHero({
  badgeText = "ENTEGRE PEST KONTROL • FUMİGASYON • BİYOSİDAL UYGULAMALAR",
  titleMain = "Zararlı Yönetiminde Yetkili,",
  titleHighlight = "İzlenebilir ve Sürdürülebilir Çözümler",
  description = "Ziraat mühendisleri yönetiminde; konut, ticari işletme, gıda ve endüstriyel tesislere özel risk analizi, düzenli izleme, hedefe yönelik müdahale ve dijital raporlama esaslı profesyonel pest kontrol ve fumigasyon hizmetleri sunuyoruz.",
  features = [
    { icon: <span className="font-bold">✓</span>, label: "2011'den Beri Kurumsal Hizmet" },
    { icon: <span className="font-bold">✓</span>, label: "Ziraat Mühendisleri Yönetiminde" },
    { icon: <span className="font-bold">✓</span>, label: "Dijital Raporlama ve İzlenebilirlik" }
  ],
  mekanTurleri = ["Ev / Daire", "Villa", "Site / Ortak Alan", "Ticari İşletme", "Fabrika / Endüstriyel Tesis", "Depo / Lojistik", "Fümigasyon Alanı"],
  hizmetTurleri = ["Entegre Pest Kontrol", "Konut İlaçlama", "Fümigasyon Hizmetleri", "Diğer"],
  backgroundImage,
  videoBackground,
  reverseLayout = false
}: LeadHeroProps) {
  
  const [isIlceOpen, setIsIlceOpen] = useState(false);
  const [ilceSearch, setIlceSearch] = useState("");
  const [selectedIlce, setSelectedIlce] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const adSoyad = (form.elements.namedItem("adSoyad") as HTMLInputElement).value;
    const telefon = (form.elements.namedItem("telefon") as HTMLInputElement).value;
    const mekan = (form.elements.namedItem("mekan") as HTMLSelectElement).value;
    const hizmet = (form.elements.namedItem("hizmet") as HTMLSelectElement).value;

    if (!selectedIlce) {
      alert("Lütfen bir ilçe seçiniz.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      formTitle: "Ana Sayfa Hızlı Teklif Talebi",
      customerName: adSoyad || "Değerli Müşterimiz",
      customerEmail: "Belirtilmedi",
      fields: [
        { label: "Ad Soyad", value: adSoyad },
        { label: "Telefon", value: telefon },
        { label: "İlçe / Konum", value: selectedIlce },
        { label: "Mekân Türü", value: mekan },
        { label: "Hizmet Türü", value: hizmet || "Hızlı Teklif (Ana Sayfa)" }
      ]
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        setIsSuccess(true);
        form.reset();
        setSelectedIlce("");
      } else {
        alert("Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      alert("Bağlantı hatası oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-navy-deeper overflow-hidden min-h-[86vh] px-6 py-16 md:px-10 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-barlow">
      
      {/* ── ARKA PLAN EFEKTLERİ ── */}
      {videoBackground ? (
        <div className="absolute inset-0 z-0 overflow-hidden bg-navy-deeper">
          {/* ÇÖZÜM BURADA: scale-[1.15] ile video büyütülüp kenarları kırpıldı */}
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-70 pointer-events-none transform scale-[1.15] origin-center">
            <source src={videoBackground} type="video/mp4" />
          </video>
          {/* Sola doğru koyu, sağa doğru şeffaf ana gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deeper/95 via-navy-deeper/50 to-transparent" />
          {/* ÇÖZÜM 2: Ne olur ne olmaz diye videonun alt kısmına hafif bir koyu filtre eklendi */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-deeper via-navy-deeper/80 to-transparent" />
        </div>
      ) : backgroundImage ? (
        <div className="absolute inset-0 z-0 bg-navy-deeper">
          <img src={backgroundImage} alt="Hero Background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deeper via-navy-deeper/80 to-navy-deeper/50" />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] z-0" />
          <div className="hidden lg:block absolute right-[-60px] top-[-80px] w-[55%] h-[130%] bg-gradient-to-br from-white/5 to-white/0 transform -skew-x-6 z-0" />
          <div className="absolute right-[10%] bottom-[-40px] w-[300px] h-[300px] rounded-full bg-pest-green opacity-20 blur-[60px] z-0" />
        </>
      )}

      {/* ── METİNLER ── */}
      <div className={`relative z-10 lg:col-span-7 space-y-6 order-1 ${reverseLayout ? 'lg:order-2 lg:pl-10' : 'lg:order-1'}`}>
        <div className="inline-flex items-center gap-2 border border-pest-green/30 bg-pest-green/10 rounded px-[14px] py-[5px]">
          <span className="w-2 h-2 rounded-full bg-pest-green animate-pulse" />
          <span className="font-barlowCondensed text-xs font-bold text-pest-green tracking-wider uppercase">
            {badgeText}
          </span>
        </div>

        <h1 className="font-barlowCondensed text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
          {titleMain} <br />
          <span className="text-pest-green">{titleHighlight}</span>
        </h1>

        <p className="text-base md:text-lg text-white/80 font-light max-w-[550px] leading-relaxed">
          {description}
        </p>

        {features && features.length > 0 && (
          <div className="flex flex-col gap-2 max-w-[550px] mt-2">
             {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-white/90 font-medium text-sm">
                  <div className="text-pest-green">{feature.icon}</div>
                  <span>{feature.label}</span>
                </div>
             ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3 items-center pt-4">
          <Link href="/ucretsiz-teklif-al" className="bg-pest-green hover:bg-pest-green-dark text-navy font-bold rounded-md px-8 py-4 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 tracking-wide text-sm shadow-md">
            Keşif ve Teklif Talep Et
          </Link>
          <a href="https://wa.me/905316901071" target="_blank" rel="noopener noreferrer" className="border border-white/20 hover:border-white/40 bg-transparent hover:bg-white/5 text-white font-bold rounded-md px-6 py-[15px] flex items-center gap-2 transition-all transform hover:-translate-y-0.5 text-sm">
            <MessageCircle size={18} className="text-[#25d366]"/>
            WhatsApp'tan Uzmana Sor
          </a>
        </div>
      </div>

      {/* ── FORM & BAŞARI ALANI ── */}
      <div className={`relative z-10 lg:col-span-5 w-full max-w-[480px] justify-self-center lg:justify-self-end bg-white rounded-xl p-7 md:p-8 shadow-2xl order-2 border border-slate-100 ${reverseLayout ? 'lg:order-1 lg:justify-self-start' : 'lg:order-2'}`}>
        
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 animate-in fade-in zoom-in duration-500">
             <div className="w-16 h-16 bg-pest-green/10 text-pest-green rounded-full flex items-center justify-center mb-2 shadow-inner">
                <CheckCircle2 size={36} />
             </div>
             <h3 className="font-barlowCondensed text-3xl font-bold text-navy uppercase tracking-wide">
                Talebiniz Alındı!
             </h3>
             <p className="text-sm text-text-mid leading-relaxed px-4">
                Uzman ekibimiz detayları inceleyip en kısa sürede vermiş olduğunuz numara üzerinden sizinle iletişime geçecektir.
             </p>
             <button 
                onClick={() => setIsSuccess(false)} 
                className="mt-6 font-bold text-navy text-sm hover:text-pest-green underline transition-colors"
             >
               Yeni Bir Talep Oluştur
             </button>
          </div>
        ) : (
          <>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase tracking-wide">
              TEKLİF TALEP ET
            </h3>
            <p className="text-sm text-text-mid mb-6 leading-relaxed">
              Bilgilerinizi bırakın; uzman ekibimiz ihtiyacınızı değerlendirerek sizinle iletişime geçsin.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input type="text" name="adSoyad" className="w-full border-2 border-border rounded-md px-[14px] py-[11px] text-sm text-text-dark bg-white outline-none focus:border-navy transition-colors placeholder:text-text-muted" placeholder="Adınız Soyadınız" required/>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input type="tel" name="telefon" className="w-full border-2 border-border rounded-md px-[14px] py-[11px] text-sm text-text-dark bg-white outline-none focus:border-navy transition-colors placeholder:text-text-muted" placeholder="Telefon" required/>
                </div>
                
                <div className="relative" ref={ilceRef}>
                  <div 
                    className="w-full border-2 border-border rounded-md px-[14px] py-[11px] text-sm bg-white outline-none focus:border-navy transition-colors cursor-pointer flex justify-between items-center"
                    onClick={() => setIsIlceOpen(!isIlceOpen)}
                  >
                    <span className={selectedIlce ? "text-text-dark" : "text-text-muted"}>
                      {selectedIlce || "İlçe Seçin"}
                    </span>
                    <span className="text-xs text-text-muted transition-transform duration-300" style={{ transform: isIlceOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                  </div>

                  {isIlceOpen && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-border rounded-md shadow-2xl max-h-60 overflow-y-auto">
                      <div className="sticky top-0 bg-slate-50 p-2 border-b border-border">
                        <input 
                          type="text" 
                          className="w-full border border-border rounded px-3 py-2 text-sm outline-none focus:border-pest-green transition-colors"
                          placeholder="İlçe ara..."
                          value={ilceSearch}
                          onChange={(e) => setIlceSearch(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
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
                                setIlceSearch(""); 
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

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <select name="mekan" required defaultValue="" className="w-full border-2 border-border rounded-md px-[14px] py-[11px] text-sm text-text-dark bg-white outline-none focus:border-navy transition-colors">
                    <option value="" disabled hidden>Mekân Türü</option>
                    {mekanTurleri.map((mekan, idx) => (
                      <option key={idx} value={mekan}>{mekan}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select name="hizmet" required defaultValue="" className="w-full border-2 border-border rounded-md px-[14px] py-[11px] text-sm text-text-dark bg-white outline-none focus:border-navy transition-colors">
                    <option value="" disabled hidden>Hizmet Türü</option>
                    {hizmetTurleri.map((hizmet, idx) => (
                      <option key={idx} value={hizmet}>{hizmet}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-navy hover:bg-navy-dark text-white font-medium rounded-md py-3.5 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 tracking-wide text-sm mt-2 disabled:opacity-60">
                {isSubmitting ? "Gönderiliyor..." : "Teklif Talebimi Gönder"}
              </button>
              
              <div className="text-center mt-3">
                <span className="text-[11px] text-text-muted leading-tight block">
                    Bilgileriniz güvendedir. Talebinizi göndererek <Link href="/kvkk" className="underline hover:text-navy">KVKK Aydınlatma Metni</Link>'ni onaylamış olursunuz.
                </span>
              </div>
            </form>
          </>
        )}

      </div>
    </section>
  );
}