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
    "BMSB AKREDİTASYONU",
    "ISO 9001",
    "ISO 14001"
  ];

  // Kusursuz bir sonsuz döngü (infinite scroll) için dizileri uzatıyoruz. 
  // CSS animasyonu -50%'ye kaydığı için en az 2 ekran genişliğini doldurması gerekir.
  const kayanBelgeler = [...belgeler, ...belgeler, ...belgeler, ...belgeler, ...belgeler, ...belgeler];
  const kayanLogolar = [...logos, ...logos];

  return (
    <section className="bg-surface-light pt-8 pb-12 border-b border-border overflow-hidden font-barlow">
      
      {/* ── ORTAK ANİMASYON STİLLERİ ── */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-track {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-track {
          display: flex;
          width: max-content;
          /* 60s her iki şeridin de senkronize akmasını sağlar */
          animation: scroll-track 60s linear infinite; 
        }
        .animate-scroll-track:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* ── ÜST BAŞLIK ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-6 flex justify-center md:justify-start">
        <Link href="/belgelerimiz" className="flex items-center gap-2 group">
          <FileBadge size={20} className="text-pest-green group-hover:scale-110 transition-transform" />
          <span className="text-sm md:text-base font-bold text-navy uppercase tracking-wide group-hover:text-pest-green transition-colors">
            Yetki, Belge ve Referanslarımız
          </span>
        </Link>
      </div>

      {/* ── 1. ŞERİT: BELGELER (Sola Kayan) ── */}
      <div className="w-full relative flex items-center h-12 mb-6">
        <div className="animate-scroll-track items-center gap-4 px-4">
          {kayanBelgeler.map((belge, idx) => (
            <Link 
              key={idx}
              href="/belgelerimiz"
              className="flex-shrink-0 h-9 px-5 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[11px] md:text-xs font-bold text-slate-600 shadow-sm hover:border-pest-green hover:text-pest-green transition-colors cursor-pointer"
            >
              {belge}
            </Link>
          ))}
        </div>
      </div>

      {/* ── 2. ŞERİT: LOGOLAR (Sola Kayan, Aynı Hızda) ── */}
      <div className="w-full relative flex items-center h-16 md:h-20 mt-4">
        <div className="animate-scroll-track items-center gap-12 md:gap-20 px-8">
          {kayanLogolar.map((logo, idx) => (
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