import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Yetki, Belge ve Üyeliklerimiz | EPCON",
  description: "EPCON'un sahip olduğu ruhsatlar, kalite belgeleri, mesleki üyelikler ve hizmet güvenceleri.",
};

export default function BelgelerimizPage() {
  
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

      {/* BÖLÜM 5.7 TABLO ALANI */}
      <section className="py-8 px-6 md:px-10 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-surface-light border border-border">
          
          <div className="p-6 md:p-8 border-b md:border-b border-border md:border-r">
            <h3 className="font-bold text-navy text-lg mb-3">YETKİ VE RUHSATLAR</h3>
            <p className="text-sm text-text-dark leading-relaxed">
              Biyosidal Ürün Uygulama İzin Belgesi; Fumigasyon Yetki Belgesi; Hudut ve Sahiller kapsamındaki yetki belgesi; Avustralya BMSB akreditasyonu.
            </p>
          </div>
          
          <div className="p-6 md:p-8 border-b border-border">
            <h3 className="font-bold text-navy text-lg mb-3">KALİTE BELGELERİ</h3>
            <p className="text-sm text-text-dark leading-relaxed">
              TSE Hizmet Yeterlilik Belgesi ve sahip olunan ISO yönetim sistemi belgeleri.
            </p>
          </div>
          
          <div className="p-6 md:p-8 border-b md:border-b-0 border-border md:border-r">
            <h3 className="font-bold text-navy text-lg mb-3">MESLEKİ ÜYELİK</h3>
            <p className="text-sm text-text-dark leading-relaxed">
              BİFUDER üyeliği; üyelik logolu ve doğrulanabilir biçimde gösterilir.
            </p>
          </div>
          
          <div className="p-6 md:p-8">
            <h3 className="font-bold text-navy text-lg mb-3">HİZMET GÜVENCESİ</h3>
            <p className="text-sm text-text-dark leading-relaxed">
              Varsa mesleki veya mali sorumluluk sigortası ayrı başlıkta gösterilir; üyelik gibi sunulmaz.
            </p>
          </div>
          
        </div>

        {/* Belge Kartı Standardı Notu (Yeşil Çerçeveli Alan) */}
        <div className="mt-8 bg-pest-green-light border border-pest-green p-6">
          <h4 className="font-bold text-pest-green mb-2">BELGE KARTI STANDARDI</h4>
          <p className="text-sm text-navy leading-relaxed">
            Her kartta belge adı, belge numarası, kapsamı, geçerlilik tarihi ve “Belgeyi İncele” bağlantısı bulunmalıdır. Belge adı resmî belgenin üzerindeki ifadeyle bire bir aynı olmalıdır.
          </p>
        </div>
      </section>

      {/* BELGE KARTLARI (Örnek Dizilim) */}
      <section className="py-12 px-6 md:px-10 max-w-5xl mx-auto w-full mb-20">
        <h2 className="font-bold text-2xl text-navy mb-8 border-b border-border pb-2">Belgelerimiz</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Örnek Belge Kartı 1 */}
          <div className="bg-white border border-border p-6 shadow-sm flex flex-col justify-between h-full">
            <div>
              <h3 className="font-bold text-navy mb-4 leading-tight">Biyosidal Ürün Uygulama İzin Belgesi</h3>
              <div className="text-sm text-text-dark space-y-2 mb-6">
                 <p><span className="font-semibold">Belge No:</span> BY-001</p>
                 <p><span className="font-semibold">Kapsam:</span> Halk Sağlığı Alanı</p>
                 <p><span className="font-semibold">Geçerlilik:</span> Süresiz</p>
              </div>
            </div>
            <Link href="#" className="text-navy font-bold text-sm underline hover:text-pest-green transition-colors">
              Belgeyi İncele →
            </Link>
          </div>

          {/* Örnek Belge Kartı 2 */}
          <div className="bg-white border border-border p-6 shadow-sm flex flex-col justify-between h-full">
            <div>
              <h3 className="font-bold text-navy mb-4 leading-tight">TSE Hizmet Yeterlilik Belgesi</h3>
              <div className="text-sm text-text-dark space-y-2 mb-6">
                 <p><span className="font-semibold">Belge No:</span> TSE-HYB-02</p>
                 <p><span className="font-semibold">Kapsam:</span> Haşere Kontrol</p>
                 <p><span className="font-semibold">Geçerlilik:</span> 2027</p>
              </div>
            </div>
            <Link href="#" className="text-navy font-bold text-sm underline hover:text-pest-green transition-colors">
              Belgeyi İncele →
            </Link>
          </div>

          {/* Örnek Belge Kartı 3 */}
          <div className="bg-white border border-border p-6 shadow-sm flex flex-col justify-between h-full">
            <div>
              <h3 className="font-bold text-navy mb-4 leading-tight">ISO 9001:2015</h3>
              <div className="text-sm text-text-dark space-y-2 mb-6">
                 <p><span className="font-semibold">Belge No:</span> ISO-9001</p>
                 <p><span className="font-semibold">Kapsam:</span> Kalite Yönetim Sistemi</p>
                 <p><span className="font-semibold">Geçerlilik:</span> 2028</p>
              </div>
            </div>
            <Link href="#" className="text-navy font-bold text-sm underline hover:text-pest-green transition-colors">
              Belgeyi İncele →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}