import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  CheckCircle, 
  ShieldAlert, 
  Target,
  Info
} from 'lucide-react';

export const metadata = {
  title: "Ev ve Daire İlaçlama | EPCON",
  description: "Evinizde karşılaştığınız zararlının türünü, görüldüğü alanları ve yayılma riskini değerlendirerek ihtiyaca uygun uygulama yöntemi belirliyoruz."
};

export default function EvDaireIlaclamaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Home className="w-4 h-4" /> KONUTLARA ÖZEL BİYOSİDAL UYGULAMALAR
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Ev ve Dairenize Özel <span className="text-pest-green">Profesyonel İlaçlama</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Evinizde karşılaştığınız zararlının türünü, görüldüğü alanları ve yayılma riskini değerlendirerek ihtiyaca uygun uygulama yöntemi belirliyoruz. Uygulama öncesi hazırlık ve uygulama sonrası kullanım koşulları hakkında açık bilgilendirme yapıyoruz.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al?type=ev_daire" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Uygulama ve Teklif Talep Et
              </Link>
            </div>
          </div>
          {/* Çalışan Hero Görseli: Temiz ve güvenli ev ortamı */}
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop" alt="Ev ve Daire İlaçlama" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 2. ZARARLILAR VE YAKLAŞIM */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <ShieldAlert className="text-pest-green w-6 h-6" /> Evlerde Yaygın Zararlılar
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Hamamböceği",
              "Karınca",
              "Tahta kurusu",
              "Pire",
              "Gümüşçün",
              "Örümcek",
              "Fare",
              "Sivrisinek",
              "Kahverengi kokarca"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <Target className="text-pest-green w-6 h-6" /> Uygulama Yaklaşımı
            </h3>
            <div className="space-y-4">
              {[
                "Zararlı ve alan değerlendirmesi",
                "Jel, yem, çatlak-yarık veya hedefli yüzey yöntemi",
                "Kontrollü uygulama",
                "Havalandırma, temizlik ve takip bilgilendirmesi"
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-border flex items-center gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-navy/10 text-navy font-bold flex items-center justify-center flex-shrink-0">{idx + 1}</div>
                  <span className="font-medium text-navy">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl">
            <h4 className="font-bold text-navy flex items-center gap-2 mb-4">
              <Info className="text-orange-500 w-5 h-5" /> Uygulama Öncesi Hazırlık
            </h4>
            <ul className="space-y-2">
              {[
                "Açık gıdaların kaldırılması",
                "Uygulama alanlarına erişim",
                "Evcil hayvanların uzaklaştırılması",
                "Oyuncak ve kişisel eşyaların kaldırılması"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-navy/80 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>
      
      {/* 3. ALT ÇAĞRI (CTA) */}
      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">
            Evinize Özel Güvenli Çözüm
          </h2>
          <p className="text-lg font-medium mb-8">
            Evinizdeki zararlı sorununa uygun uygulama planı ve teklif almak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=ev_daire" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Uygulama ve Teklif Talep Et
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