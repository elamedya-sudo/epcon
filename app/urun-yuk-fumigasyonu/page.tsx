import React from 'react';
import Link from 'next/link';
import { Package, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "Ürün ve Yük Fumigasyonu | EPCON Fumigasyon",
  description: "Her ürünün fumiganta ve işlem koşullarına uygunluğu ayrı değerlendirilir. Ürün niteliği, kullanım amacı, alıcı ülke şartları ve sevkiyat takvimi dikkate alınır."
};

export default function UrunYukPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Package className="w-4 h-4" /> ÜRÜNE VE YÜKE ÖZEL PLANLAMA
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Ürün ve Ticari Yüklere Yönelik <span className="text-pest-green">Fumigasyon</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Her ürünün fumiganta, sıcaklığa ve işlem koşullarına uygunluğu ayrı değerlendirilir. Ürün niteliği, kullanım amacı, ambalaj, hedef zararlı, alıcı ülke şartları ve sevkiyat operasyonu birlikte ele alınır.
            </p>
            <div className="pt-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block">Ürün / Yük Fumigasyonu Teklifi Al</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6">Uygunluk Neden Önemlidir?</h2>
          <p className="text-navy/80 leading-relaxed mb-4">
            Fumigantın ürünle etkileşimi, ambalajın gaz geçirgenliği, ürünün son kullanım amacı, alıcı ülke koşulları ve güvenli gazdan arındırma imkânı birlikte değerlendirilmelidir. "Her ürün fumige edilir" şeklinde kesin ifadeler kullanılmaz.
          </p>
          <ul className="space-y-3 mt-6">
            {["Tarımsal ürünler ve depolanmış ürünler", "Ahşap ürün ve malzemeler", "Makine, ekipman ve uygun ticari yükler", "İhracat, ithalat veya karantina gerekliliği bulunan yükler"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-navy font-medium">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}