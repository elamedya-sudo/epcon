"use client";

import React from "react";
import Link from "next/link";
import { FileCheck } from "lucide-react";

export default function TrustBar() {
  const belgeler = [
    { label: "TSE-HYB", href: "/belgelerimiz" },
    { label: "BİYOSİDAL YETKİ", href: "/belgelerimiz" },
    { label: "FÜMİGASYON", href: "/belgelerimiz" },
    { label: "HUDUT VE SAHİLLER", href: "/belgelerimiz" },
    { label: "BMSB", href: "/belgelerimiz" },
  ];

  return (
    <section className="w-full bg-slate-50 border-b border-slate-200 py-4 font-barlow relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        
        {/* Yatay Kaydırma (Horizontal Scroll) Alanı */}
        {/* [&::-webkit-scrollbar]:hidden sınıfları çirkin kaydırma çubuğunu gizler ama kaydırma çalışmaya devam eder */}
        <div className="flex items-center gap-3 md:gap-4 overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* Başlık Kısmı (Sabit/Esnek) */}
          <div className="flex items-center gap-2 flex-shrink-0 pr-2">
            <FileCheck className="w-5 h-5 text-pest-green" />
            <span className="font-bold text-navy text-[13px] md:text-sm tracking-wide uppercase">
              YETKİ VE BELGELERİMİZ:
            </span>
          </div>

          {/* Belgeler (Tıklanabilir Kayan Haplar) */}
          {belgeler.map((belge, idx) => (
            <Link 
              key={idx} 
              href={belge.href}
              className="flex-shrink-0 bg-white border border-slate-200 text-text-dark hover:border-pest-green hover:text-pest-green text-xs font-bold px-4 py-2.5 rounded-full shadow-sm transition-all whitespace-nowrap flex items-center justify-center"
            >
              {belge.label}
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}