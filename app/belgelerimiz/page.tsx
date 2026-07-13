"use client";

import React, { useState } from "react";
import { FileCheck, ShieldCheck, Award, FileText, ArrowRight, X } from "lucide-react";

export default function BelgelerimizPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gönderdiğin resimlerin birebir isimleri ve klasör yolları eklendi
  const belgeler = [
    {
      kategori: "YETKİ VE RUHSATLAR",
      icon: <ShieldCheck className="w-8 h-8 text-navy" />,
      items: [
        { 
          adi: "Biyosidal Ürün Uygulama İzin Belgesi", 
          no: "BY-001", kapsam: "Halk Sağlığı Alanı", tarih: "Geçerli", 
          imagePath: "/images/belgelerimiz/biyosidal-urun-izin-uygulama-belgesi.jpg" 
        },
        { 
          adi: "Fumigasyon Yetki Belgesi", 
          no: "2017/004", kapsam: "Zirai Fümigasyon Ruhsatı", tarih: "Geçerli", 
          imagePath: "/images/belgelerimiz/fumigasyon-ruhsat-745x1024.jpg" 
        },
        { 
          adi: "Hudut ve Sahiller Yetki Belgesi", 
          no: "35", kapsam: "Uluslararası Çalışan Taşıtlar", tarih: "Geçerli", 
          imagePath: "/images/belgelerimiz/hudut-ve-sahiller-yetki-belgesi.jpg" 
        },
        { 
          adi: "Avustralya BMSB Akreditasyonu", 
          no: "AEI-TR-XX", kapsam: "BMSB İhracat İşlemleri", tarih: "Güncel Sezon", 
          imagePath: "/images/belgelerimiz/bmsb-sertifika-745x1024.jpg" 
        }
      ]
    },
    {
      kategori: "KALİTE BELGELERİ",
      icon: <Award className="w-8 h-8 text-navy" />,
      items: [
        { 
          adi: "TSE Hizmet Yeterlilik Belgesi", 
          no: "34-HYB-5056", kapsam: "Haşere Kontrol Hizmetleri", tarih: "Geçerli", 
          imagePath: "/images/belgelerimiz/tse-2021-745x1024.jpg" 
        },
        { 
          adi: "ISO 9001:2015", 
          no: "9101925879", kapsam: "Kalite Yönetim Sistemi", tarih: "Geçerli", 
          imagePath: "/images/belgelerimiz/iso-9001-745x1024.jpg" 
        },
        { 
          adi: "ISO 14001:2015", 
          no: "9101925880", kapsam: "Çevre Yönetim Sistemi", tarih: "Geçerli", 
          imagePath: "/images/belgelerimiz/iso-14001-745x1024.jpg" 
        }
      ]
    },
    {
      kategori: "MESLEKİ ÜYELİK VE GÜVENCE",
      icon: <FileCheck className="w-8 h-8 text-navy" />,
      items: [
        { 
          adi: "BİFUDER Üyeliği", 
          no: "Üye", kapsam: "Biyosidal ve Fumigasyon Derneği", tarih: "Aktif Üye", 
          imagePath: "/images/belgelerimiz/bifuder-placeholder.jpg" // İleride eklenebilir
        },
        { 
          adi: "Mesleki Sorumluluk Sigortası", 
          no: "SGR-00", kapsam: "Hizmet ve Operasyon Güvencesi", tarih: "Geçerli", 
          imagePath: "/images/belgelerimiz/sigorta-placeholder.jpg" // İleride eklenebilir
        }
      ]
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* SAYFA BAŞLIĞI */}
      <section className="py-16 px-6 md:px-10 max-w-5xl mx-auto w-full">
        <h1 className="font-barlowCondensed text-4xl md:text-5xl font-extrabold uppercase text-navy mb-4 border-b border-border pb-4">
          YETKİ, BELGE VE MESLEKİ ÜYELİKLERİMİZ
        </h1>
        <p className="text-text-dark text-[15px] leading-relaxed">
          Hizmetlerimizi yürürlükteki mevzuat, yetki belgeleri, kalite yönetim sistemleri ve mesleki kuruluşlarla iş birliği içinde yürütüyoruz.
        </p>
      </section>

      {/* BELGELER LİSTESİ */}
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

      {/* POPUP (MODAL) EKRANI */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deeper/90 p-4" onClick={() => setSelectedImage(null)}>
          <div 
            className="relative max-w-3xl w-full h-auto max-h-[90vh] bg-white p-2 rounded-xl shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()} // Resme tıklayınca kapanmasını engeller
          >
            {/* Kapat Butonu */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:-right-12 bg-white text-navy hover:text-pest-green p-3 rounded-full shadow-lg transition-colors"
            >
              <X size={24} />
            </button>
            
            {/* Belge Resmi */}
            <div className="w-full h-full overflow-y-auto flex items-center justify-center">
               <img 
                 src={selectedImage} 
                 alt="Sertifika" 
                 className="max-w-full max-h-[85vh] object-contain rounded-lg"
                 onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x1131.png?text=Belge+Hen%C3%BCz+Y%C3%BCklenmedi'; 
                 }}
               />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}