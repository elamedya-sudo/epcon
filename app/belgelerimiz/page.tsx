"use client";

import React, { useState } from "react";
import { FileCheck, ShieldCheck, Award, FileText, ArrowRight, X } from "lucide-react";

export default function BelgelerimizPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gönderdiğin yeni resimler, belge numaraları ve geçerlilik tarihleri ile güncellenmiş liste
  const belgeler = [
    {
      kategori: "YETKİ VE RUHSATLAR",
      icon: <ShieldCheck className="w-8 h-8 text-navy" />,
      items: [
        { 
          adi: "Biyosidal Ürün Uygulama İzin Belgesi", 
          no: "302060194/659", kapsam: "1. 2. 3. ve 4. Ana Grup", tarih: "20.01.2026", 
          imagePath: "/images/belgelerimiz/yeni/20260122-biyosidal-urun-uygulama-izin-belgesi.png" 
        },
        { 
          adi: "Zirai Fümigasyon Ruhsatı", 
          no: "2017-004", kapsam: "Fümigasyon İşlemleri", tarih: "09.12.2025", 
          imagePath: "/images/belgelerimiz/yeni/2025120900-FUM-RUHSAT.png" 
        },
        { 
          adi: "Fümigasyon Operatör Belgesi", 
          no: "86", kapsam: "Tarım ve Köyişleri Bakanlığı", tarih: "Geçerli", 
          imagePath: "/images/belgelerimiz/2d-745-1024.jpg" 
        },
        { 
          adi: "Propestgas Güvenli ve Etkin Kullanım Belgesi", 
          no: "86", kapsam: "Barcan", tarih: "Geçerli", 
          imagePath: "/images/belgelerimiz/barcan-745x1024.jpg" 
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
          no: "34-HYB-5056", kapsam: "TS 8358 Haşere Mücadele Hizmetleri", tarih: "30.06.2027", 
          imagePath: "/images/belgelerimiz/yeni/TSE-HYB-2027.png" 
        },
        { 
          adi: "ISO 9001:2015", 
          no: "102025921", kapsam: "Kalite Yönetim Sistemi", tarih: "28.10.2026", 
          imagePath: "/images/belgelerimiz/yeni/1.png" 
        },
        { 
          adi: "ISO 14001:2015", 
          no: "102025922", kapsam: "Çevre Yönetim Sistemi", tarih: "28.10.2026", 
          imagePath: "/images/belgelerimiz/yeni/2.png" 
        },
        { 
          adi: "ISO 22000:2018", 
          no: "102025924", kapsam: "Gıda Güvenliği Yönetim Sistemi", tarih: "28.10.2026", 
          imagePath: "/images/belgelerimiz/yeni/5.png" 
        },
        { 
          adi: "ISO 31000", 
          no: "102025920", kapsam: "Risk Yönetim Sistemi", tarih: "28.10.2026", 
          imagePath: "/images/belgelerimiz/yeni/3.png" 
        },
        { 
          adi: "ISO 45001:2018", 
          no: "102025923", kapsam: "İş Sağlığı ve Güvenliği Yönetim Sistemi", tarih: "28.10.2026", 
          imagePath: "/images/belgelerimiz/yeni/6.png" 
        },
        { 
          adi: "ISO 10002:2018", 
          no: "102025925", kapsam: "Müşteri Memnuniyeti Yönetim Sistemi", tarih: "28.10.2026", 
          imagePath: "/images/belgelerimiz/yeni/4.png" 
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
          imagePath: "/images/belgelerimiz/bifuder2.png" 
        },
        { 
          adi: "Mesleki Sorumluluk Sigortası", 
          no: "SGR-00", kapsam: "Hizmet ve Operasyon Güvencesi", tarih: "Geçerli", 
          imagePath: "/images/belgelerimiz/sorumluluk.png" 
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
            onClick={(e) => e.stopPropagation()} 
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