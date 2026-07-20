import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  CheckCircle, 
  ShieldAlert, 
  Target,
  TreePine,
  Layers
} from 'lucide-react';

export const metadata = {
  title: "Villa İlaçlama Hizmetleri | İç ve Dış Alan | EPCON",
  description: "Villalar için iç alan, bahçe, çatı, bodrum ve peyzaj alanlarını kapsayan, ziraat mühendisleri yönetiminde profesyonel ilaçlama hizmeti."
};

export default function VillaIlaclamaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Home className="w-4 h-4" /> İÇ ALAN • BAHÇE • ÇATI • BODRUM
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Villanıza Özel <span className="text-pest-green">Bütünleşik İlaçlama</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Villalar; geniş iç hacimleri, peyzaj alanları ve farklı kat seviyeleriyle kompleks yapılardır. Zararlı problemlerine karşı yalnızca ev içini değil; bahçe, bodrum, çatı, otopark ve bina çevresini birlikte değerlendiriyoruz.
            </p>
            <div className="pt-4">
              <Link href="/ucretsiz-teklif-al?type=villa" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Villa İlaçlama Teklifi Al
              </Link>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" alt="Villa İlaçlama" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h3 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <Layers className="text-pest-green w-6 h-6" /> Kapsamlı Kontrol Alanları
            </h3>
            <div className="space-y-4">
              {[
                { t: "İç Alanlar", d: "Mutfak, banyo, yatak odaları, kiler ve teknik odalardaki zararlılara (hamamböceği, karınca vb.) yönelik hedefli uygulamalar." },
                { t: "Bahçe ve Peyzaj", d: "Sivrisinek, kene, pire, örümcek gibi dış alan zararlılarına karşı bariyer ve yüzey uygulamaları." },
                { t: "Alt Yapı ve Boşluklar", d: "Bodrum, çatı arası, rögarlar, tesisat geçişleri ve otoparklarda kemirgen ve böcek kontrolü." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-border shadow-sm">
                  <h4 className="font-bold text-navy mb-1">{step.t}</h4>
                  <p className="text-sm text-text-mid">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <TreePine className="text-pest-green w-6 h-6" /> Villa İlaçlama Yaklaşımımız
          </h3>
          <ul className="space-y-4">
            {[
              "Çevresel risklerin ve mevsimsel tehditlerin analizi",
              "Evcil hayvanlara, bitkilere ve çocuklara duyarlı yöntem seçimi",
              "İç alanda leke veya koku bırakmayan jel ve hedefli uygulamalar",
              "Dış alanda kalıcılık sağlayan kontrollü bariyer yöntemleri",
              "Çevre düzenlemesi ve izolasyon eksikliklerine dair raporlama"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-navy font-medium text-sm">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}