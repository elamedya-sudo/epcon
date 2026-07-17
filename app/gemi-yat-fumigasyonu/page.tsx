import React from 'react';
import Link from 'next/link';
import { Ship, ShieldAlert, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "Gemi ve Yat Fumigasyonu | EPCON Fumigasyon",
  description: "Ambar, yaşam mahalli, depo, mutfak ve uygun teknik bölümler; hacim, havalandırma, mürettebat güvenliği ve operasyon takvimine göre değerlendirilir."
};

export default function GemiYatPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Ship className="w-4 h-4" /> DENİZCİLİKTE KONTROLLÜ FUMİGASYON
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Gemi, Yat ve Kapalı Bölümlerde <span className="text-pest-green">Fumigasyon</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Ambar, yaşam mahalli, depo, mutfak ve uygun teknik bölümler; hacim, havalandırma sistemi, mürettebat güvenliği, gaz geçiş riski ve gemi operasyon takvimi dikkate alınarak değerlendirilir.
            </p>
            <div className="pt-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block">Gemi / Yat Fumigasyonu Teklifi Al</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-4">Uygulama Alanları</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {["Yaşam mahalleri", "Yük ambarları", "Mutfak ve servis bölümleri", "Depolar", "Uygun makine ve teknik alanlar", "Diğer izole edilebilir kapalı hacimler"].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-50 border border-orange-200 p-8 rounded-2xl">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-4 flex items-center gap-3">
            <ShieldAlert className="text-orange-500 w-8 h-8" /> Denizcilikte Güvenlik
          </h2>
          <p className="text-navy/80 leading-relaxed">
            Uygulama alanı mürettebat ve yetkisiz girişten izole edilir. Havalandırma kanalları, komşu bölümlere gaz geçişi, kapalı hacim erişimi ve acil durum prosedürleri değerlendirilir. Alan ancak son ölçüm sonrasında kullanıma açılır.
          </p>
        </div>
      </section>
    </main>
  );
}