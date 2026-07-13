"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Building2, ShieldCheck, Ship, Utensils, Landmark, GraduationCap, Package } from "lucide-react";

// REFERANS VERİTABANI (A.Ş. ve Ltd. Şti. temizlendi, Milli Saraylar eklendi)
const referanslar = [
  // TARİHİ MEKANLAR & KAMU
  { isim: "Milli Saraylar Dolmabahçe Sarayı", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "Milli Saraylar Topkapı Sarayı", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "Milli Saraylar Yıldız Sarayı", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "Milli Saraylar Beylerbeyi Sarayı", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "Milli Saraylar Maslak Kasrı", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "Milli Saraylar Küçüksu Kasrı", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "Milli Saraylar Aynalı Kavak Kasrı", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "Milli Saraylar Edirne Sarayı", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "Milli Saraylar İslam Medeniyetleri Müzesi", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "Milli Saraylar Beykoz Cam ve Billur Müzesi", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "Milli Saraylar Resim ve Heykel Müzesi", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "Milli Saraylar Ankara Palas", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "Türkiye Yeşilay Cemiyeti", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "İBB Zabıta Müdürlüğü", kategori: "Tarihi Mekanlar / Kamu" },
  { isim: "Marmara Açık Ceza İnfaz Kurumu", kategori: "Tarihi Mekanlar / Kamu" },
  
  // GIDA & TARIM
  { isim: "Tab Gıda", kategori: "Gıda / Tarım" },
  { isim: "Köşkeroğlu Gıda", kategori: "Gıda / Tarım" },
  { isim: "Tatlıbak", kategori: "Gıda / Tarım" },
  { isim: "Arda Donuk Gıda", kategori: "Gıda / Tarım" },
  { isim: "Kumbasar Yumurta (Damla Gıda)", kategori: "Gıda / Tarım" },
  { isim: "Yumtat Yumurta", kategori: "Gıda / Tarım" },
  { isim: "Rençber Bakliyat", kategori: "Gıda / Tarım" },
  { isim: "May Tohum", kategori: "Gıda / Tarım" },
  { isim: "Loqo Global Gıda", kategori: "Gıda / Tarım" },
  { isim: "Yalçın Et Gıda", kategori: "Gıda / Tarım" },
  { isim: "Anisah Gıda", kategori: "Gıda / Tarım" },
  { isim: "Kökel Kahve Deposu", kategori: "Gıda / Tarım" },
  { isim: "Arabica Trade", kategori: "Gıda / Tarım" },
  { isim: "Hakmar", kategori: "Gıda / Tarım" },
  { isim: "Unkar Gıda", kategori: "Gıda / Tarım" },
  { isim: "HMS Host", kategori: "Gıda / Tarım" },
  { isim: "Ala Türk Mutfağı", kategori: "Gıda / Tarım" },
  
  // FABRİKA & ÜRETİM (Sanayi)
  { isim: "Şişecam", kategori: "Fabrika / Üretim" },
  { isim: "Paşabahçe Cam", kategori: "Fabrika / Üretim" },
  { isim: "Trakya Teneke Ambalaj", kategori: "Fabrika / Üretim" },
  { isim: "Milli Saraylar Hereke Halı ve Dokuma", kategori: "Fabrika / Üretim" },
  { isim: "Dost Plastik", kategori: "Fabrika / Üretim" },
  { isim: "Güçsan Plastik", kategori: "Fabrika / Üretim" },
  { isim: "İzvar Ambalaj", kategori: "Fabrika / Üretim" },
  { isim: "Verpak Ambalaj", kategori: "Fabrika / Üretim" },
  { isim: "Plasmerk Plastik", kategori: "Fabrika / Üretim" },
  { isim: "Enelkon Otomasyon", kategori: "Fabrika / Üretim" },
  { isim: "Metran Maden", kategori: "Fabrika / Üretim" },
  { isim: "Omco Kalıp", kategori: "Fabrika / Üretim" },

  // LOJİSTİK & HAVACILIK
  { isim: "İstanbul Sabiha Gökçen Havalimanı", kategori: "Lojistik / Havacılık" },
  { isim: "DSV Lojistik", kategori: "Lojistik / Havacılık" },
  { isim: "Galata Taşımacılık", kategori: "Lojistik / Havacılık" },
  { isim: "Rüya Lojistik", kategori: "Lojistik / Havacılık" },
  { isim: "Saybir Lojistik", kategori: "Lojistik / Havacılık" },
  { isim: "SAS Depolama Lojistik", kategori: "Lojistik / Havacılık" },
  { isim: "Birlog Nakliyat", kategori: "Lojistik / Havacılık" },
  { isim: "Akkar Nakliyat", kategori: "Lojistik / Havacılık" },
  
  // SAĞLIK & EĞİTİM
  { isim: "Optimal Klinik", kategori: "Sağlık / Eğitim" },
  { isim: "Mono Laboratuvar", kategori: "Sağlık / Eğitim" },
  { isim: "Clinodevice Sağlık Ürünleri", kategori: "Sağlık / Eğitim" },
  { isim: "Nun Okulları", kategori: "Sağlık / Eğitim" },
  { isim: "Cumhuriyet Anaokulu", kategori: "Sağlık / Eğitim" },
  { isim: "Nene Hatun Anaokulu", kategori: "Sağlık / Eğitim" },

  // OTEL, TESİS & TEKNOPARK
  { isim: "Fenerbahçe Şükrü Saracoğlu Stadyumu", kategori: "Otel / Tesis / Spor" },
  { isim: "Fenerbahçe Dereağzı Tesisleri", kategori: "Otel / Tesis / Spor" },
  { isim: "Fenerbahçe Can Bartu Tesisleri", kategori: "Otel / Tesis / Spor" },
  { isim: "Fenerbahçe Topuk Yaylası Tesisleri", kategori: "Otel / Tesis / Spor" },
  { isim: "SGC Hotel", kategori: "Otel / Tesis / Spor" },
  { isim: "Dalyan Club", kategori: "Otel / Tesis / Spor" },
  { isim: "Okyanus Fly", kategori: "Otel / Tesis / Spor" },
  { isim: "Opet Yavuztürk", kategori: "Otel / Tesis / Spor" },
  { isim: "YTÜ Teknopark", kategori: "Otel / Tesis / Spor" },
  { isim: "İstanbul Teknokent", kategori: "Otel / Tesis / Spor" },
  { isim: "Ursa Gemicilik ve Tersanecilik", kategori: "Otel / Tesis / Spor" }
];

const kategoriler = [
  { ad: "Tümü", ikon: <ShieldCheck size={18} /> },
  { ad: "Tarihi Mekanlar / Kamu", ikon: <Landmark size={18} /> },
  { ad: "Gıda / Tarım", ikon: <Utensils size={18} /> },
  { ad: "Fabrika / Üretim", ikon: <Building2 size={18} /> },
  { ad: "Lojistik / Havacılık", ikon: <Package size={18} /> },
  { ad: "Sağlık / Eğitim", ikon: <GraduationCap size={18} /> },
  { ad: "Otel / Tesis / Spor", ikon: <Ship size={18} /> }
];

function ReferenceContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("kategori") || "Tümü";
  const [seciliKategori, setSeciliKategori] = useState(initialCategory);

  useEffect(() => {
    if (searchParams.get("kategori")) {
      setSeciliKategori(searchParams.get("kategori") as string);
    }
  }, [searchParams]);

  const filtrelenmisReferanslar = seciliKategori === "Tümü" 
    ? referanslar 
    : referanslar.filter(ref => ref.kategori === seciliKategori);

  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-24 font-barlow">
      
      {/* 1. ÖNE ÇIKANLAR BÖLÜMÜ */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="font-barlowCondensed text-4xl md:text-5xl font-extrabold uppercase text-navy mb-4">
          Güveninize Layık Görüldük
        </h1>
        <p className="text-text-mid max-w-2xl mx-auto mb-12 text-lg">
          Uzman mühendis kadromuzla, Türkiye'nin en seçkin kurumlarına, tarihi yapılarına ve sanayi devlerine entegre pest kontrol çözümleri sunuyoruz.
        </p>
        
        {/* LOGOLAR (Şişecam yerine Teknopark eklendi) */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-xl md:text-2xl font-extrabold text-navy/50 uppercase tracking-widest">Fenerbahçe SK</div>
          <div className="text-xl md:text-2xl font-extrabold text-navy/50 uppercase tracking-widest">Sabiha Gökçen</div>
          <div className="text-xl md:text-2xl font-extrabold text-navy/50 uppercase tracking-widest">Teknopark</div>
          <div className="text-xl md:text-2xl font-extrabold text-navy/50 uppercase tracking-widest">Milli Saraylar</div>
          <div className="text-xl md:text-2xl font-extrabold text-navy/50 uppercase tracking-widest">Tab Gıda</div>
        </div>
      </section>

      {/* 2. FİLTRELEME VE LİSTE */}
      <section className="max-w-7xl mx-auto px-6">
        
        {/* Kategori Butonları */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {kategoriler.map((kat, idx) => (
            <button
              key={idx}
              onClick={() => setSeciliKategori(kat.ad)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                seciliKategori === kat.ad 
                  ? "bg-navy text-white shadow-lg" 
                  : "bg-white text-navy border border-border hover:border-navy hover:bg-slate-100"
              }`}
            >
              {kat.ikon}
              {kat.ad}
            </button>
          ))}
        </div>

        {/* Referans Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtrelenmisReferanslar.map((ref, index) => (
            <div 
              key={index} 
              className="bg-white p-5 rounded-xl border border-border flex items-center justify-between hover:shadow-lg hover:border-pest-green transition-all group"
            >
              <div>
                <h3 className="font-bold text-navy text-sm md:text-base leading-tight group-hover:text-pest-green transition-colors">
                  {ref.isim}
                </h3>
                <span className="text-xs text-text-muted mt-1 block">
                  {ref.kategori}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </section>
    </main>
  );
}

export default function ReferanslarPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-navy font-bold">Yükleniyor...</div>}>
      <ReferenceContent />
    </Suspense>
  );
}