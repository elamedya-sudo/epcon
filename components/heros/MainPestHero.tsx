"use client";

import React from 'react';

export default function MainPestHero() {
  return (
    <section className="relative bg-navy-deeper overflow-hidden min-h-[86vh] px-6 py-16 md:px-10 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-barlow">
      {/* Arka Plan Efektleri */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:30px_30px] z-0" />
      <div className="hidden lg:block absolute right-[-60px] top-[-80px] w-[55%] h-[130%] bg-gradient-to-br from-navy to-navy-dark transform -skew-x-6 z-0 opacity-60" />
      <div className="absolute right-[10%] bottom-[-40px] w-[300px] h-[300px] rounded-full bg-pest-green opacity-5 blur-[60px] z-0" />

      {/* Sol Alan: Metinler ve Rozetler */}
      <div className="relative z-10 lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 border border-pest-green/40 bg-pest-green/10 rounded px-[14px] py-[5px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-barlowCondensed text-xs font-semibold text-[#5dd88a] tracking-wider uppercase">
            İstanbul · Profesyonel Haşere Kontrolü
          </span>
        </div>

        <h1 className="font-barlowCondensed text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.95]">
          Yaşam alanınızda <br />
          <span className="text-pest-green">haşereye son!</span>
        </h1>

        <p className="text-base md:text-lg text-white/60 font-light max-w-[500px] leading-relaxed">
          Ev, villa ve siteniz için <strong className="text-white/85 font-normal">TSE belgeli, fümigasyon ruhsatlı</strong> profesyonel ilaçlama. Çocuklarınız ve evcil hayvanlarınız için güvenli ürünler, aynı gün hizmet.
        </p>

        {/* Haşere Hapları (Pills) */}
        <div className="flex flex-wrap gap-2 max-w-[550px]">
          {/* Hamamböceği */}
          <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/70 rounded px-3 py-1.5 text-sm transition-all hover:bg-pest-green/15 hover:border-pest-green/35 hover:text-[#5dd88a] cursor-default">
            <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1fab3.svg" alt="Hamamböceği" className="w-4 h-4" />
            Hamamböceği
          </span>
          {/* Akrep */}
          <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/70 rounded px-3 py-1.5 text-sm transition-all hover:bg-pest-green/15 hover:border-pest-green/35 hover:text-[#5dd88a] cursor-default">
            <span>🦂</span> Akrep
          </span>
          {/* Karınca */}
          <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/70 rounded px-3 py-1.5 text-sm transition-all hover:bg-pest-green/15 hover:border-pest-green/35 hover:text-[#5dd88a] cursor-default">
            <span>🐜</span> Karınca
          </span>
          {/* Sivrisinek */}
          <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/70 rounded px-3 py-1.5 text-sm transition-all hover:bg-pest-green/15 hover:border-pest-green/35 hover:text-[#5dd88a] cursor-default">
            <span>🦟</span> Sivrisinek
          </span>
          {/* Pire & Bit */}
          <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/70 rounded px-3 py-1.5 text-sm transition-all hover:bg-pest-green/15 hover:border-pest-green/35 hover:text-[#5dd88a] cursor-default">
            <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1fab2.svg" alt="Pire" className="w-4 h-4" />
            Pire & Bit
          </span>
          {/* Fare */}
          <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/70 rounded px-3 py-1.5 text-sm transition-all hover:bg-pest-green/15 hover:border-pest-green/35 hover:text-[#5dd88a] cursor-default">
            <span>🐀</span> Fare
          </span>
        </div>

        {/* CTA Butonları */}
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

      {/* Sağ Alan: Ücretsiz Keşif Form Kartı */}
      <div className="relative z-10 lg:col-span-5 w-full max-w-[480px] justify-self-center lg:justify-self-end bg-white rounded-xl p-7 md:p-8 shadow-2xl">
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
            <div>
              <label className="block text-xs font-medium text-text-mid mb-1 tracking-wider">İlçe</label>
              <select className="w-full border-2 border-border rounded-md px-[14px] py-[11px] text-sm text-text-dark bg-white outline-none focus:border-navy transition-colors">
                <option value="">Seçin</option>
                <option>Ataşehir</option>
                <option>Kadıköy</option>
                <option>Üsküdar</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-text-mid mb-1 tracking-wider">Mekan Türü</label>
            <select className="w-full border-2 border-border rounded-md px-[14px] py-[11px] text-sm text-text-dark bg-white outline-none focus:border-navy transition-colors">
              <option value="">Seçin</option>
              <option>Daire</option>
              <option>Villa</option>
              <option>Site / Ortak Alan</option>
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