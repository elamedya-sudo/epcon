"use client";

import React, { useState } from "react";
import { FileCheck, ShieldCheck, Award, FileText, ArrowRight, X } from "lucide-react";

export default function BelgelerimizPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Belge kartı standardına uygun veri dizisi (imagePath'leri gerçek dosya yollarınızla değiştirin)
  const belgeler = [
    {
      kategori: "YETKİ VE RUHSATLAR",
      icon: <ShieldCheck className="w-8 h-8 text-navy" />,
      items: [
        { adi: "Biyosidal Ürün Uygulama İzin Belgesi", no: "BY-001", kapsam: "Halk Sağlığı Alanında İlaçlama", tarih: "Geçerli", imagePath: "/images/belgeler/biyosidal-izin.jpg" },
        { adi: "Fumigasyon Yetki Belgesi", no: "FM-002", kapsam: "Profesyonel Fümigasyon Uygulamaları", tarih: "Geçerli", imagePath: "/images/belgeler/fumigasyon-yetki.jpg" },
        { adi: "Hudut ve Sahiller Yetki Belgesi", no: "HS-003", kapsam: "Gemi ve Liman Uygulamaları", tarih: "Geçerli", imagePath: "/images/belgeler/hudut-sahiller.jpg" },
        { adi: "Avustralya BMSB Akreditasyonu", no: "AEI-TR-XX", kapsam: "BMSB İhracat İşlemleri", tarih: "Güncel Sezon", imagePath: "/images/belgeler/bmsb-akreditasyon.jpg" }
      ]
    },
    {
      kategori: "KALİTE BELGELERİ",
      icon: <Award className="w-8 h-8 text-navy" />,
      items: [
        { adi: "TSE Hizmet Yeterlilik Belgesi", no: "TSE-HYB", kapsam: "Haşere Kontrol Hizmetleri", tarih: "Geçerli", imagePath: "/images/belgeler/tse-hyb.jpg" },
        { adi: "ISO 9001:2015", no: "ISO-9001", kapsam: "Kalite Yönetim Sistemi", tarih: "Geçerli", imagePath: "/images/belgeler/iso-9001.jpg" },
        { adi: "ISO 14001:2015", no: "ISO-14001", kapsam: "Çevre Yönetim Sistemi", tarih: "Geçerli", imagePath: "/images/belgeler/iso-14001.jpg" }
      ]
    },
    {
      kategori: "MESLEKİ ÜYELİK VE GÜVENCE",
      icon: <FileCheck className="w-8 h-8 text-navy" />,
      items: [
        { adi: "BİFUDER Üyeliği", no: "Üye", kapsam: "Biyosidal ve Fumigasyon Derneği", tarih: "Aktif Üye", imagePath: "/images/belgeler/bifuder-uyelik.jpg" },
        { adi: "Mesleki Sorumluluk Sigortası", no: "SGR-00", kapsam: "Hizmet ve Operasyon Güvencesi", tarih: "Geçerli", imagePath: "/images/belgeler/mesleki-sigorta.jpg" }
      ]
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-slate-50 font-barlow">
      
      {/* BAŞLIK ALANI */}
      <section className="bg-navy py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-barlowCondensed text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight mb-4">
            YETKİ, KALİTE VE MESLEKİ ÜYELİKLERİMİZ
          </h1>
          <p className="text-white/80 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
            Hizmetlerimizi yürürlükteki mevzuat, yetki belgeleri, kalite yönetim sistemleri ve mesleki kuruluşlarla iş birliği içinde yürütüyoruz.
          </p>
        </div>
      </section>

      {/* BELGELER LİSTESİ */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto w-full">
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
                  <div key={bIdx} className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <FileText className="w-8 h-8 text-pest-green" />
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
                    
                    {/* Belgeyi İncele Butonu - Popup'ı tetikler */}
                    <button 
                      onClick={() => setSelectedImage(belge.imagePath)}
                      className="w-full text-center border border-border text-navy font-bold py-2.5 rounded-lg group-hover:bg-navy group-hover:text-white transition-colors text-sm flex items-center justify-center gap-2"
                    >
                      Belgeyi İncele <ArrowRight size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP (MODAL) EKRANI */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-4xl w-full h-auto max-h-[90vh] bg-white p-2 rounded-xl shadow-2xl">
            {/* Kapat Butonu */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:-right-12 bg-white text-navy hover:text-pest-green p-2 rounded-full shadow-lg transition-colors"
            >
              <X size={24} />
            </button>
            
            {/* Belge Resmi */}
            <div className="w-full h-full overflow-y-auto">
               <img 
                 src={selectedImage} 
                 alt="Belge" 
                 className="w-full h-auto object-contain rounded-lg"
                 onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x1131.png?text=Belge+G%C3%B6rseli+Y%C3%BCkleniyor'; // Hata durumunda yer tutucu görsel
                 }}
               />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}