import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Bug, Search, Target, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Kahverengi Kokarca Mücadelesi | Bina ve Yaşam Alanı | EPCON",
  description: "Kahverengi kokarca giriş noktası tespiti, mevsimsel risk analizi, fiziksel önlem ve hedefli uygulama hizmeti."
};

export default function KokarcaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <span className="inline-block bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider mb-6">MEVSİMSEL RİSK • GİRİŞ NOKTALARI • YAPISAL ÖNLEM</span>
          <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight mb-6">Kahverengi Kokarcaya Karşı <span className="text-pest-green">Bina ve Yaşam Alanı Kontrolü</span></h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">Kahverengi kokarcanın bina girişleri, çatı ve cephe boşlukları ile kışlama alanları değerlendirilerek mevsimsel risk azaltma planı oluşturuyoruz.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white shadow-lg transition-colors">Uygulama ve Teklif Talep Et</Link>
            <Link href="/bmsb-fumigasyonu" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20">BMSB İhracat İşlemi mi Arıyorsunuz?</Link>
          </div>
        </div>
      </section>
      {/* ... İçerik yapısı dokümana uygun devam eder ... */}
    </main>
  );
}