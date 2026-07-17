import React from 'react';
import Link from 'next/link';
import { Warehouse, Target, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "Depo ve Silo Fumigasyonu | EPCON Fumigasyon",
  description: "Ürün çeşidi, miktar, doluluk oranı, hacim, hedef zararlı, sıcaklık, sızdırmazlık ve havalandırma imkânları değerlendirilir."
};

export default function DepoSiloPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Warehouse className="w-4 h-4" /> DEPOLANMIŞ ÜRÜN ZARARLILARI
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Depo ve Silo Fumigasyonunda <span className="text-pest-green">Teknik Planlama</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Ürün çeşidi, miktar, doluluk oranı, hacim, hedef zararlı, sıcaklık, yapı sızdırmazlığı, komşu alanlar ve havalandırma imkânları değerlendirilerek uygulama planlanır.
            </p>
            <div className="pt-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block">Depo / Silo Fumigasyonu Teklifi Al</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6">Değerlendirilen Riskler</h2>
          <ul className="space-y-4 mb-8">
            {["Tahıl ve bakliyat ürünlerinde depo zararlısı aktivitesi", "Un, yem ve kuru gıda depolarında bulaşma riski", "Silo veya ürün yığınlarında yaygın aktivite", "Boş depo veya üretim alanında yapısal zararlı riski", "Lokal uygulamanın yeterli olmayacağı yoğunluklar"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Target className="text-pest-green w-5 h-5 flex-shrink-0" />
                <span className="text-navy font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-navy p-10 rounded-3xl text-white">
          <h2 className="font-barlowCondensed text-3xl font-bold uppercase mb-6">Teknik Değerlendirme Kriterleri</h2>
          <div className="grid grid-cols-2 gap-4">
            {["Ürün türü ve kullanım amacı", "Depo/silo hacmi ve doluluk", "Ürün sıcaklığı ve ortam", "Sızdırmazlık ve gaz dağılımı", "Yakın personel alanları", "Havalandırma imkânı", "Atık ve kalıntı yönetimi"].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm font-medium">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}