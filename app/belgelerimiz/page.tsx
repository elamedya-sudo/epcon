"use client"; 

import React, { useState } from "react";
import Image from "next/image"; 
import Lightbox from "yet-another-react-lightbox"; 
import "yet-another-react-lightbox/styles.css"; 

export default function DocumentsPage() {
  const [index, setIndex] = useState(-1);

  const allDocuments = [
    { src: "/images/belgelerimiz/1b.jpg", title: "Ruhsatname", size: "y" },
    { src: "/images/belgelerimiz/2c-745x1024.jpg", title: "TSE Hizmet Yeterlilik", size: "d" },
    { src: "/images/belgelerimiz/2d-745x1024.jpg", title: "TSE Belgesi Devamı", size: "d" },
    { src: "/images/belgelerimiz/barcan-745x1024.jpg", title: "Barcan Sertifikası", size: "d" },
    { src: "/images/belgelerimiz/biyosidal-urun-izin-uygulama-belgesi.jpg", title: "Biyosidal Uygulama Yetkisi", size: "y" },
    { src: "/images/belgelerimiz/bmsb-sertifika-745x1024.jpg", title: "BMSB Sertifikası", size: "d" },
    { src: "/images/belgelerimiz/fumigasyon-ruhsat-745x1024.jpg", title: "Fümigasyon Ruhsatı", size: "d" },
    { src: "/images/belgelerimiz/hijyen-belgesi-745x1024.jpg", title: "Hijyen Eğitimi Belgesi", size: "d" },
    { src: "/images/belgelerimiz/hudut-ve-sahiller-yetki-belgesi.jpg", title: "Hudut ve Sahiller Yetki", size: "d" },
    { src: "/images/belgelerimiz/IMDG-SEREF.jpg", title: "IMDG Sertifikası", size: "y" },
    { src: "/images/belgelerimiz/iso-9001-745x1024.jpg", title: "ISO 9001:2015", size: "d" },
    { src: "/images/belgelerimiz/iso-10002-745x1024.jpg", title: "ISO 10002", size: "d" },
    { src: "/images/belgelerimiz/iso-14001-745x1024.jpg", title: "ISO 14001", size: "d" },
    { src: "/images/belgelerimiz/iso-22000-745x1024.jpg", title: "ISO 22000", size: "d" },
    { src: "/images/belgelerimiz/iso-30001-745x1024.jpg", title: "ISO 30001", size: "d" },
    { src: "/images/belgelerimiz/iso-45001-745x1024.jpg", title: "ISO 45001", size: "d" },
    { src: "/images/belgelerimiz/is-yeri-acma-ve-calisma-ruhsati.jpg", title: "İşyeri Çalışma Ruhsatı", size: "d" },
    { src: "/images/belgelerimiz/Marka-Yenileme-Belgesi-745x1024.jpg", title: "Marka Tescil", size: "d" },
    { src: "/images/belgelerimiz/Seref-KeleteliMesul-Mudurluk-Belgesi-745x1024.jpg", title: "Mesul Müdürlük", size: "d" },
    { src: "/images/belgelerimiz/seref-mesul-mudur-sertifikasi.jpg", title: "Mesul Müdür Sertifikası", size: "y" },
    { src: "/images/belgelerimiz/seref-methyl-bromur-745x1024.jpg", title: "Metil Bromür Yetkisi", size: "d" },
    { src: "/images/belgelerimiz/tse-2021-745x1024.jpg", title: "TSE Belgesi (2021)", size: "d" },
    { src: "/images/belgelerimiz/Untitled-1.jpg", title: "Üniversite Diploması", size: "y" },
  ];

  const slides = allDocuments.map((doc) => ({ src: doc.src }));

  return (
    <main className="flex flex-col min-h-screen bg-[#f5f7ff] font-barlow">
      
      {/* 1. ÜST MAVİ BANNER */}
      <section className="w-full bg-navy py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight mb-4 md:mb-0">
            Yetkinlik Belgelerimiz
          </h1>
          <div className="text-white/60 text-sm">
            <a href="/" className="hover:text-pest-green transition-colors">Anasayfa</a> 
            <span className="mx-2">/</span> 
            <span className="text-white">Belgelerimiz</span>
          </div>
        </div>
      </section>

      {/* 2. BELGELER GRID ALANI */}
      <section className="py-16 md:py-20 px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 grid-flow-dense">
          {allDocuments.map((doc, idx) => (
            <div
              key={idx}
              className={`bg-white border-2 border-border rounded-xl p-2 cursor-pointer transition-all duration-300 hover:border-navy hover:-translate-y-1 hover:shadow-lg group ${
                doc.size === "d" ? "row-span-2" : "row-span-1"
              }`}
              onClick={() => setIndex(idx)} 
            >
              <div className="relative w-full h-full min-h-[200px] overflow-hidden rounded-lg bg-slate-100 flex items-center justify-center">
                <Image
                  src={doc.src} 
                  alt={doc.title}
                  width={doc.size === "d" ? 745 : 1024} 
                  height={doc.size === "d" ? 1024 : 745}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  priority={idx < 4} 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 pt-6 text-white">
                  <h4 className="font-semibold text-xs md:text-sm uppercase tracking-tight">
                    {doc.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. POPUP GALERİ (LIGHTBOX) */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(0,0,0,.9)" } }}
      />
    </main>
  );
}