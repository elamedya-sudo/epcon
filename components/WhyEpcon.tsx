"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

export default function WhyEpcon() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Kayan resimlerin yolları
  const images = [
    "/images/ana/slayt-1.jpg",
    "/images/ana/slayt-2.jpg",
    "/images/ana/slayt-3.jpg",
    "/images/ana/slayt-4.jpg"
  ];

  // 4 saniyede bir resimleri otomatik kaydıran efekt
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4000ms = 4 saniye
    return () => clearInterval(timer);
  }, [images.length]);

  const trustBadges = [
    { title: "2011'DEN BERİ", desc: "Kurumsal hizmet" },
    { title: "ZİRAAT MÜHENDİSLERİ", desc: "Yönetiminde" },
    { title: "YETKİLİ VE BELGELİ", desc: "Uygulama altyapısı" },
    { title: "DİJİTAL", desc: "Raporlama ve izlenebilirlik" }
  ];

  const imageTags = [
    "İzleme ve Kontrol", 
    "Hedefe Yönelik Uygulama", 
    "Profesyonel Fumigasyon"
  ];

  return (
    <section className="bg-surface-light py-20 px-6 md:px-10 font-barlow">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Metin ve Rozetler */}
        <div>
          <span className="text-pest-green font-bold tracking-widest text-xs uppercase mb-3 block">
            NEDEN EPCON?
          </span>
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight mb-6 leading-tight">
            Mühendislik Yaklaşımıyla Entegre Zararlı Yönetimi
          </h2>
          <div className="space-y-4 text-text-mid text-[15px] leading-relaxed mb-10">
            <p>
              EPCON, yalnızca periyodik ilaçlama yapan bir uygulama firması değildir. Ziraat mühendisleri yönetiminde; zararlı türünü, aktivitenin kaynağını, giriş noktalarını ve çevresel riskleri değerlendirerek alana özel mücadele programları oluşturur.
            </p>
            <p>
              Uygulamalarımızda T.C. Sağlık Bakanlığı tarafından ruhsatlandırılmış biyosidal ürünler kullanılır. Ürün ve yöntem seçimi hedef zararlı, alanın kullanım amacı, risk seviyesi ve etiket talimatlarına göre yapılır. Tüm süreçler güvenlik tedbirleri, dijital raporlama ve sürekli iyileştirme yaklaşımıyla yönetilir.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="border-l-4 border-pest-green pl-4">
                <div className="text-lg font-bold text-navy mb-0.5">{badge.title}</div>
                <div className="text-sm text-text-muted">{badge.desc}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Görsel Slider ve Etiketler */}
        <div className="relative">
          {/* Kayar Görsel Alanı */}
          <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-white aspect-[4/3] flex border-4 border-white">
             <div 
               className="flex w-full h-full transition-transform duration-700 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
             >
               {images.map((src, idx) => (
                 <img 
                   key={idx}
                   src={src} 
                   alt={`EPCON Profesyonel İlaçlama ${idx + 1}`} 
                   className="w-full h-full object-cover flex-shrink-0 bg-slate-200" 
                 />
               ))}
             </div>

             {/* Slider Noktaları (Görsellerin altındaki küçük göstergeler) */}
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
               {images.map((_, idx) => (
                 <button 
                   key={idx} 
                   onClick={() => setCurrentIndex(idx)}
                   aria-label={`Slayta git ${idx + 1}`}
                   className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-pest-green' : 'bg-white/60 hover:bg-white'}`}
                 />
               ))}
             </div>
          </div>
          
          {/* Resim Üzeri Uçan Etiketler (Sabit kalırlar) */}
          <div className="absolute -bottom-5 -left-5 z-20 flex flex-col gap-2 pointer-events-none">
            {imageTags.map((tag, idx) => (
              <div key={idx} className="bg-navy text-white text-xs font-bold px-4 py-2 rounded-md shadow-lg flex items-center gap-2">
                <CheckCircle2 size={14} className="text-pest-green" /> {tag}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}