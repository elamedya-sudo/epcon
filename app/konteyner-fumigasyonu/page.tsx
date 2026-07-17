import React from 'react';
import Link from 'next/link';
import { PackageSearch, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Konteyner Fumigasyonu | EPCON Fumigasyon",
  description: "Konteyner tipi, kapı contaları, yük yerleşimi, gaz dolaşımı, ürün niteliği, sıcaklık ve sevkiyat takvimi değerlendirilerek süreç planlanır."
};

export default function KonteynerPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <PackageSearch className="w-4 h-4" /> KONTEYNER • YÜK • ÖLÇÜM
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Konteyner Yüklerine Özel <span className="text-pest-green">Güvenli Fumigasyon</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              İthalat ve ihracat yüklerinde konteyner tipi, yükün niteliği, ambalaj ve istif yapısı, gaz dolaşımı ve işlem nedeni değerlendirilerek uygun fumigasyon planı hazırlanır.
            </p>
            <div className="pt-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block">Konteyner Fumigasyonu Teklifi Al</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-8">Konteyner Değerlendirme Kriterleri</h2>
          <ul className="space-y-4">
            {["Konteyner tipi ve fiziksel durumu", "Kapı contaları ve olası sızıntı noktaları", "Yükün konteyner içindeki yerleşimi", "Ambalajın gaz geçirgenliği", "Hedef zararlı veya işlem nedeni", "Uygulama sahası ve operasyon takvimi", "Gazdan arındırma ve güvenli sevkiyata açma imkânı"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0" />
                <span className="text-navy font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-navy text-white p-10 rounded-3xl">
          <h2 className="font-barlowCondensed text-3xl font-bold uppercase mb-8">Uygulama Süreci</h2>
          <div className="space-y-6">
            {["Konteyner ve yük bilgilerinin alınması", "Saha ve sızdırmazlık değerlendirmesi", "Uygun fumigant ve operasyon planının belirlenmesi", "İzolasyon, uyarı ve güvenlik tedbirleri", "Uygulama ve gerekli kontroller", "Kontrollü havalandırma ve son gaz ölçümü", "Kayıt ve sevkiyata hazırlık"].map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-pest-green text-navy font-bold flex items-center justify-center flex-shrink-0">{idx + 1}</div>
                <p className="text-white/90 mt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}