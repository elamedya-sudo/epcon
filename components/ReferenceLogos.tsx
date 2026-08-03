"use client";

import React from "react";
import Link from "next/link";
import { FileBadge } from "lucide-react";

export default function ReferenceLogos() {
  const logos = [
    "/logolar/test/avek.png",
    "/logolar/test/donerci-bekirzade-logo-s12.png",
    "/logolar/test/dsv-solutions-seeklogo.png",
    "/logolar/test/dufry_logo.jpeg",
    "/logolar/test/DUNYA-LOGO-RBG-Large.png.webp",
    "/logolar/test/okyanus.jpg",
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

  const belgeler = [
    "TSE-HYB", 
    "BİYOSİDAL YETKİ", 
    "FÜMİGASYON", 
    "HUDUT VE SAHİLLER", 
    "BMSB"
  ];

  return (
    <section className="bg-surface-light pt-8 pb-10 border-b border-border overflow-hidden font-barlow">
      
      {/* ── BELGELERİMİZ (Mobilde Yatay Kaydırılabilir Rozetler) ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-10">
        <div className="flex items-center gap-3 md:gap-4 overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          <Link href="/belgelerimiz" className="flex items-center gap-2 flex-shrink-0 group pr-2">
            <FileBadge size={18} className="text-pest-green group-hover:scale-110 transition-transform" />
            <span className="text-[13px] md:text-sm font-bold text-navy uppercase tracking-wide group-hover:text-pest-green transition-colors">
              Yetki ve Belgelerimiz:
            </span>
          </Link>

          {belgeler.map((belge, idx) => (
            <Link 
              key={idx}
              href="/belgelerimiz"
              className="flex-shrink-0 h-9 px-4 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[11px] md:text-xs font-bold text-slate-600 shadow-sm hover:border-pest-green hover:text-pest-green transition-colors"
            >
              {belge}
            </Link>
          ))}
          
        </div>
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