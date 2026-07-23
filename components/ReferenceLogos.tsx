"use client";

import React from "react";
import Link from "next/link";
import { FileBadge } from "lucide-react";

export default function ReferenceLogos() {
  // Klasördeki tüm resimlerin isimleri tam eşleşecek şekilde eklendi
  const logos = [
    "/logolar/test/avek.png",
    "/logolar/test/donerci-bekirzade-logo-s12.png",
    "/logolar/test/dsv-solutions-seeklogo.png",
    "/logolar/test/dufry_logo.jpeg",
    "/logolar/test/DUNYA-LOGO-RBG-Large.png.webp",
    "/logolar/test/e9c1ef26-ed1f-4870-a47c-19d01c31b5cf-IMG_1827_2x.png",
    "/logolar/test/fenerbahce-spor-kulubu-seeklogo.png",
    "/logolar/test/image_1080.webp",
    "/logolar/test/images.png",
    "/logolar/test/images-2.png",
    "/logolar/test/ISG_YapimYatirim.jpg",
    "/logolar/test/isgairport-logo.png.webp",
    "/logolar/test/Logo(1).png",
    "/logolar/test/logo-white.png",
    "/logolar/test/nun-okullari.svg",
    "/logolar/test/papara.dfce43bb.svg",
    "/logolar/test/resimveheykel.jpeg",
    "/logolar/test/sisecam-seeklogo.png",
    "/logolar/test/tatlibak-light-logo.webp",
    "/logolar/test/tbmm-milli-saraylar-seeklogo.png",
    "/logolar/test/yesilay-yesilay-seeklogo.png",
    "/logolar/test/ytu-footer-logo.png",
    "/logolar/test/yumtat.jpg"
  ];

  return (
    <section className="bg-surface-light pt-8 pb-10 border-b border-border overflow-hidden font-barlow">
      
      {/* ── BELGELERİMİZ (Tıklanabilir Rozetler) ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <Link href="/belgelerimiz" className="group flex flex-wrap items-center justify-center gap-3 md:gap-4 transition-all">
          <span className="text-sm font-bold text-navy uppercase md:mr-2 flex items-center gap-2">
            <FileBadge size={18} className="text-pest-green" /> Yetki ve Belgelerimiz:
          </span>
          <div className="h-9 px-4 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[11px] md:text-xs font-bold text-slate-600 shadow-sm group-hover:border-pest-green transition-colors">TSE-HYB</div>
          <div className="h-9 px-4 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[11px] md:text-xs font-bold text-slate-600 shadow-sm group-hover:border-pest-green transition-colors">BİYOSİDAL YETKİ</div>
          <div className="h-9 px-4 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[11px] md:text-xs font-bold text-slate-600 shadow-sm group-hover:border-pest-green transition-colors">FÜMİGASYON</div>
          <div className="h-9 px-4 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[11px] md:text-xs font-bold text-slate-600 shadow-sm group-hover:border-pest-green transition-colors">HUDUT VE SAHİLLER</div>
          <div className="h-9 px-4 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[11px] md:text-xs font-bold text-slate-600 shadow-sm group-hover:border-pest-green transition-colors">BMSB</div>
        </Link>
      </div>

      {/* ── REFERANS LOGOLARI (Kayan Şerit) ── */}
      <div className="w-full relative flex items-center h-16 md:h-20">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-logos {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-logos {
            display: flex;
            width: max-content;
            /* Logolar çok olduğu için süreyi uzattık (60s) ki çok hızlı akıp göz yormasın */
            animation: scroll-logos 60s linear infinite; 
          }
          .animate-scroll-logos:hover {
            animation-play-state: paused;
          }
        `}} />
        
        {/* Kesintisiz döngü için logoları 2 kez render ediyoruz */}
        <div className="animate-scroll-logos items-center gap-12 md:gap-20 px-8">
          {[...logos, ...logos].map((logo, idx) => (
            <div 
              key={idx} 
              // En kritik ayar: Yükseklik sabit tutulur, genişlik orantılı uzar ancak max 160px ile sınırlandırılır.
              className="h-12 md:h-14 relative flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img 
                src={logo} 
                alt={`EPCON Kurumsal Referans ${idx}`} 
                className="h-full w-auto max-w-[140px] md:max-w-[160px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}