import React from 'react';
import Link from 'next/link';
import { 
  Flame, 
  Wind, 
  PackageSearch, 
  Warehouse, 
  ArrowRight, 
  ShieldCheck,
  Target
} from 'lucide-react';

export const metadata = {
  title: "Fumigasyon ve İşlem Yöntemleri | EPCON Fumigasyon",
  description: "Sülfüril Florür, Metil Bromür, Alüminyum Fosfit ve Isıl İşlem yöntemlerimiz. Ürün, mevzuat ve hedef ülke şartlarına göre profesyonel teknik planlama."
};

export default function IslemYontemleriPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <ShieldCheck className="w-4 h-4"/> YETKİLİ UYGULAMA ALTYAPISI
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Fumigasyon ve <span className="text-pest-green">İşlem Yöntemlerimiz</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Her zararlı, ürün veya sevkiyat için aynı yöntem kullanılamaz. EPCON teknik ekibi; ürün yapısı, hedef ülke gereklilikleri, sıcaklık ve güncel mevzuata göre en uygun ve güvenli işlem yöntemini belirler.
            </p>
            <div className="pt-4">
              <Link className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center" href="/ucretsiz-teklif-al">
                Teknik Değerlendirme Talep Et
              </Link>
            </div>
          </div>
          {/* Çalışan Hero Görseli */}
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" alt="Fumigasyon ve İşlem Yöntemleri" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 2. BİLGİLENDİRME VE KURAL ALANI */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 bg-navy text-pest-green p-4 rounded-full">
            <Target className="w-10 h-10"/>
          </div>
          <div>
            <h2 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">Yöntem Seçimi Nasıl Yapılır?</h2>
            <p className="text-navy/80 leading-relaxed font-medium">
              Müşterilerimizin doğrudan bir gaz türü veya yöntem seçmesine gerek yoktur. Teknik ekibimiz; operasyon sahasını, ürünün fiziksel özelliklerini, maruz kalma süresini ve (varsa) ihracat yapılacak ülkenin biyogüvenlik (BMSB, ISPM 15 vb.) şartlarını değerlendirerek doğru yöntemi sizin adınıza planlar ve operasyonu kayıt altına alır.
            </p>
          </div>
        </div>
      </section>

      {/* 3. YÖNTEMLER VİTRİNİ (KARTLAR) */}
      <section className="pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Sülfüril Florür */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border group hover:border-pest-green transition-all flex flex-col">
            <Wind className="text-pest-green w-10 h-10 mb-6"/>
            <h3 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-4">
              Sülfüril Florür Fumigasyonu
            </h3>
            <p className="text-text-mid leading-relaxed mb-8 flex-grow">
              Uygun yük, konteyner, yapı ve kapalı hacimlerde konsantrasyon takibi ve gazdan arındırmayla planlanan yöntem. BMSB işlemleri ve spesifik ihracat yükleri için güncel metodolojiye göre değerlendirilir.
            </p>
            <Link className="text-pest-green font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase text-sm" href="/sulfuril-florur-fumigasyonu">
              Yöntemi İncele <ArrowRight className="w-5 h-5"/>
            </Link>
          </div>

          {/* Metil Bromür */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border group hover:border-pest-green transition-all flex flex-col">
            <PackageSearch className="text-pest-green w-10 h-10 mb-6"/>
            <h3 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-4">
              Metil Bromür Fumigasyonu
            </h3>
            <p className="text-text-mid leading-relaxed mb-8 flex-grow">
              Karantina ve ihracat gerekliliklerinde ürün ve mevzuat uygunluğu doğrulanarak planlanan yöntem. Özellikle ISPM 15 kapsamındaki ahşap ambalajlar ve belirli karantina yükleri için kontrollü uygulanır.
            </p>
            <Link className="text-pest-green font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase text-sm" href="/metil-bromur-fumigasyonu">
              Yöntemi İncele <ArrowRight className="w-5 h-5"/>
            </Link>
          </div>

          {/* Alüminyum Fosfit */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border group hover:border-pest-green transition-all flex flex-col">
            <Warehouse className="text-pest-green w-10 h-10 mb-6"/>
            <h3 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-4">
              Alüminyum Fosfit Fumigasyonu
            </h3>
            <p className="text-text-mid leading-relaxed mb-8 flex-grow">
              Depolanmış ürün, depo ve silo uygulamalarında ürün, sıcaklık, süre ve güvenlik esaslı yöntem. Uygun ortam koşullarında fosfin gazı oluşturan ve uzun süreli maruziyet gerektiren alanlar için planlanır.
            </p>
            <Link className="text-pest-green font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase text-sm" href="/aluminyum-fosfit-fumigasyonu">
              Yöntemi İncele <ArrowRight className="w-5 h-5"/>
            </Link>
          </div>

          {/* Isıl İşlem */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border group hover:border-pest-green transition-all flex flex-col">
            <Flame className="text-pest-green w-10 h-10 mb-6"/>
            <h3 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-4">
              Isıl İşlem (Gazsız Yöntem)
            </h3>
            <p className="text-text-mid leading-relaxed mb-8 flex-grow">
              Uygun ürün, yük veya ahşap ambalajın belirlenen sıcaklık ve süre şartlarında işlem gördüğü fumigant kullanılmayan yöntem. Isıya dayanıklı ürünler ve belirli BMSB gereklilikleri için değerlendirilir.
            </p>
            <Link className="text-pest-green font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase text-sm" href="/isil-islem">
              Yöntemi İncele <ArrowRight className="w-5 h-5"/>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. ALT ÇAĞRI (CTA) */}
      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">
            Yükünüze Uygun Yöntemi Birlikte Belirleyelim
          </h2>
          <p className="text-lg font-medium mb-8">
            Uygulama alanı, ürün, miktar veya ihracat rotası hakkında teknik bilgi paylaşın; uzman ekibimiz en güvenli ve mevzuata uygun işlem planını hazırlasın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg" href="/ucretsiz-teklif-al">
              Teknik Değerlendirme Talep Et
            </Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-transparent text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy/10 transition-colors border-2 border-navy">
              WhatsApp'tan Uzmana Sor
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}