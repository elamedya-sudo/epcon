import React from 'react';
import Link from 'next/link';
import { 
  Wind, 
  CheckCircle, 
  Target,
  ShieldAlert
} from 'lucide-react';

export const metadata = {
  title: "Sülfüril Florür Fumigasyonu | EPCON Fumigasyon",
  description: "Sülfüril florür; uygun ürün, yük, konteyner, yapı veya kapalı hacimlerde konsantrasyon takibi ve gazdan arındırmayla planlanan yöntem."
};

export default function SulfurilFlorurPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Wind className="w-4 h-4" /> GAZ ÖLÇÜMÜ • KONSANTRASYON TAKİBİ • GAZDAN ARINDIRMA
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Sülfüril Florür <span className="text-pest-green">Fumigasyonu</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Sülfüril florür; uygun ürün, yük, konteyner, yapı veya kapalı hacimlerde hedef zararlı ve işlem şartlarına göre değerlendirilen gazlı fumigasyon yöntemlerinden biridir. Uygulama, sızdırmazlık, sıcaklık, gaz dağılımı, konsantrasyon takibi ve kontrollü gazdan arındırmayla birlikte planlanır.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Sülfüril Florür Teklifi Al
              </Link>
            </div>
            <p className="text-sm text-white/50">* Yöntemin uygunluğu teknik inceleme sonucunda belirlenir.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-12">
          <div>
            <h3 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <Target className="text-pest-green w-6 h-6" /> Değerlendirilebilen Alanlar
            </h3>
            <ul className="space-y-3">
              {[
                "EPCON’un güncel kapsamı dâhilinde BMSB işlemleri",
                "Konteyner ve ihracat yükleri",
                "Uygun ahşap ürün ve kapalı hacimler",
                "Gemi ve yat bölümleri",
                "Yapı ve belirli ürün uygulamaları"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                  <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <ShieldAlert className="text-orange-500 w-6 h-6" /> Güvenlik Şartları
            </h3>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl text-navy/80 text-sm leading-relaxed">
              Alan izolasyonu, yetkisiz girişin önlenmesi, uyarı levhaları, uygun kişisel koruyucu donanım, gaz kontrolleri ve kontrollü havalandırma birlikte uygulanır. Alan veya yük son ölçümle güvenli koşullar doğrulanmadan açılmaz.
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6">Planlama Kriterleri</h2>
          <div className="space-y-4">
            {[
              "Hedef zararlı",
              "Ürün veya malzeme uygunluğu",
              "Alan hacmi ve sızdırmazlığı",
              "Sıcaklık ve işlem süresi",
              "Gaz dağılımı ve ölçüm noktaları",
              "Havalandırma ve gazdan arındırma imkânı",
              "Hedef ülke veya resmî metodoloji şartları"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-border flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-navy/10 text-navy font-bold flex items-center justify-center flex-shrink-0">{idx + 1}</div>
                <span className="font-medium text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}