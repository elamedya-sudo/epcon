"use client";

import React, { useState } from "react";
import { FileCheck, ShieldCheck, Award, FileText, ArrowRight, X } from "lucide-react";

export default function BelgelerClient({ sanityDocs }: { sanityDocs: any[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Hibrit Mantık: Sabit belgeler ile Sanity'den gelen belgeleri birleştiriyoruz
  const belgeler = [
    {
      kategori: "YETKİ VE RUHSATLAR",
      icon: <ShieldCheck className="w-8 h-8 text-navy" />,
      items: [
        { adi: "Biyosidal Ürün Uygulama İzin Belgesi", no: "302060194/659", kapsam: "1. 2. 3. ve 4. Ana Grup", tarih: "20.01.2026", imagePath: "/images/belgelerimiz/yeni/20260122-biyosidal-urun-uygulama-izin-belgesi.png" },
        { adi: "Zirai Fümigasyon Ruhsatı", no: "2017-004", kapsam: "Fümigasyon İşlemleri", tarih: "09.12.2025", imagePath: "/images/belgelerimiz/yeni/2025120900-FUM-RUHSAT.png" },
        { adi: "Fümigasyon Operatör Belgesi", no: "86", kapsam: "Tarım ve Köyişleri Bakanlığı", tarih: "Geçerli", imagePath: "/images/belgelerimiz/2d-745-1024.jpg" },
        { adi: "Propestgas Güvenli ve Etkin Kullanım Belgesi", no: "86", kapsam: "Barcan", tarih: "Geçerli", imagePath: "/images/belgelerimiz/barcan-745x1024.jpg" },
        { adi: "Hudut ve Sahiller Yetki Belgesi", no: "35", kapsam: "Uluslararası Çalışan Taşıtlar", tarih: "Geçerli", imagePath: "/images/belgelerimiz/hudut-ve-sahiller-yetki-belgesi.jpg" },
        { adi: "Avustralya BMSB Akreditasyonu", no: "AEI-TR-XX", kapsam: "BMSB İhracat İşlemleri", tarih: "Güncel Sezon", imagePath: "/images/belgelerimiz/bmsb-sertifika-745x1024.jpg" },
        // Sanity'den gelen bu kategoriye ait belgeler:
        ...sanityDocs.filter(doc => doc.category === "YETKİ VE RUHSATLAR").map(doc => ({
          adi: doc.title, no: doc.documentNo, kapsam: doc.scope, tarih: doc.date, imagePath: doc.imagePath
        }))
      ]
    },
    {
      kategori: "KALİTE BELGELERİ",
      icon: <Award className="w-8 h-8 text-navy" />,
      items: [
        { adi: "TSE Hizmet Yeterlilik Belgesi", no: "34-HYB-5056", kapsam: "TS 8358 Haşere Mücadele Hizmetleri", tarih: "30.06.2027", imagePath: "/images/belgelerimiz/yeni/TSE-HYB-2027.png" },
        { adi: "ISO 9001:2015", no: "102025921", kapsam: "Kalite Yönetim Sistemi", tarih: "28.10.2026", imagePath: "/images/belgelerimiz/yeni/1.png" },
        { adi: "ISO 14001:2015", no: "102025922", kapsam: "Çevre Yönetim Sistemi", tarih: "28.10.2026", imagePath: "/images/belgelerimiz/yeni/2.png" },
        { adi: "ISO 22000:2018", no: "102025924", kapsam: "Gıda Güvenliği Yönetim Sistemi", tarih: "28.10.2026", imagePath: "/images/belgelerimiz/yeni/5.png" },
        { adi: "ISO 31000", no: "102025920", kapsam: "Risk Yönetim Sistemi", tarih: "28.10.2026", imagePath: "/images/belgelerimiz/yeni/3.png" },
        { adi: "ISO 45001:2018", no: "102025923", kapsam: "İş Sağlığı ve Güvenliği Yönetim Sistemi", tarih: "28.10.2026", imagePath: "/images/belgelerimiz/yeni/6.png" },
        { adi: "ISO 10002:2018", no: "102025925", kapsam: "Müşteri Memnuniyeti Yönetim Sistemi", tarih: "28.10.2026", imagePath: "/images/belgelerimiz/yeni/4.png" },
        // Sanity'den gelen bu kategoriye ait belgeler:
        ...sanityDocs.filter(doc => doc.category === "KALİTE BELGELERİ").map(doc => ({
          adi: doc.title, no: doc.documentNo, kapsam: doc.scope, tarih: doc.date, imagePath: doc.imagePath
        }))
      ]
    },
    {
      kategori: "MESLEKİ ÜYELİK VE GÜVENCE",
      icon: <FileCheck className="w-8 h-8 text-navy" />,
      items: [
        { adi: "BİFUDER Üyeliği", no: "Üye", kapsam: "Biyosidal ve Fumigasyon Derneği", tarih: "Aktif Üye", imagePath: "/images/belgelerimiz/bifuder2.png" },
        { adi: "Mesleki Sorumluluk Sigortası", no: "SGR-00", kapsam: "Hizmet ve Operasyon Güvencesi", tarih: "Geçerli", imagePath: "/images/belgelerimiz/sorumluluk.png" },
        // Sanity'den gelen bu kategoriye ait belgeler:
        ...sanityDocs.filter(doc => doc.category === "MESLEKİ ÜYELİK VE GÜVENCE").map(doc => ({
          adi: doc.title, no: doc.documentNo, kapsam: doc.scope, tarih: doc.date, imagePath: doc.imagePath
        }))
      ]
    }
  ];

  return (
    <>
      <section className="py-8 px-6 md:px-10 max-w-5xl mx-auto w-full mb-20">
        <div className="space-y-16">
          {belgeler.map((grup, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
                {grup.icon}
                <h2 className="font-barlowCondensed text-2xl md:text-3xl font-bold text-navy uppercase tracking-wide">
                  {grup.kategori}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {grup.items.map((belge, bIdx) => (
                  <div key={bIdx} className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full group cursor-pointer" onClick={() => setSelectedImage(belge.imagePath)}>
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <FileText className="w-8 h-8 text-pest-green group-hover:scale-110 transition-transform" />
                        <span className="bg-surface-light text-navy text-xs font-bold px-2.5 py-1 rounded">
                          {belge.tarih}
                        </span>
                      </div>
                      <h3 className="font-bold text-navy text-lg mb-2 leading-tight">
                        {belge.adi}
                      </h3>
                      <div className="text-sm text-text-mid space-y-1 mb-6">
                         <p><span className="font-medium text-text-dark">Kapsam:</span> {belge.kapsam}</p>
                         <p><span className="font-medium text-text-dark">Belge No:</span> {belge.no}</p>
                      </div>
                    </div>
                    
                    <button className="w-full text-center border border-border text-navy font-bold py-2.5 rounded-lg group-hover:bg-navy group-hover:text-white transition-colors text-sm flex items-center justify-center gap-2">
                      Belgeyi İncele <ArrowRight size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deeper/90 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-3xl w-full h-auto max-h-[90vh] bg-white p-2 rounded-xl shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 md:-right-12 bg-white text-navy hover:text-pest-green p-3 rounded-full shadow-lg transition-colors z-50">
              <X size={24} />
            </button>
            <div className="w-full h-full overflow-y-auto flex items-center justify-center relative">
               <div className="relative inline-block overflow-hidden rounded-lg">
                 <img src={selectedImage} alt="Sertifika" className="max-w-full max-h-[85vh] object-contain block select-none" onContextMenu={(e) => e.preventDefault()} onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x1131.png?text=Belge+Hen%C3%BCz+Y%C3%BCklenmedi'; }} />
                 <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none mix-blend-multiply opacity-20">
                    <div className="-rotate-45 flex flex-col items-center justify-center gap-12 md:gap-24 select-none">
                       <span className="text-3xl md:text-6xl font-black text-slate-800 tracking-widest whitespace-nowrap">www.epcon.com.tr</span>
                       <span className="text-3xl md:text-6xl font-black text-slate-800 tracking-widest whitespace-nowrap">www.epcon.com.tr</span>
                       <span className="text-3xl md:text-6xl font-black text-slate-800 tracking-widest whitespace-nowrap">www.epcon.com.tr</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}