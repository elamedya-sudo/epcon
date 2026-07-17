import React from 'react';
import Link from 'next/link';
import { 
  Warehouse, 
  CheckCircle, 
  Target,
  ShieldAlert
} from 'lucide-react';

export const metadata = {
  title: "Alüminyum Fosfit Fumigasyonu | EPCON Fumigasyon",
  description: "Alüminyum fosfit, uygun ortam koşullarında fosfin gazı oluşturan ve depolanmış ürün zararlılarının kontrolünde değerlendirilebilen bir fumiganttır."
};

export default function AluminyumFosfitPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Warehouse className="w-4 h-4" /> DEPOLANMIŞ ÜRÜN • SİLO • FOSFİN GAZI
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Alüminyum Fosfit <span className="text-pest-green">Fumigasyonu</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Alüminyum fosfit, uygun ortam koşullarında fosfin gazı oluşturan ve depolanmış ürün zararlılarının kontrolünde değerlendirilebilen bir fumiganttır. Uygulama; ürün, sıcaklık, nem, süre, sızdırmazlık, gaz dağılımı ve saha güvenliği koşulları birlikte değerlendirilerek planlanır.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Alüminyum Fosfit Teklifi Al
              </Link>
            </div>
            <p className="text-sm text-white/50">* Uygunluk; ürün niteliği, saha koşulları, süre ve güvenlik gereklilikleri değerlendirilerek belirlenir.</p>
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
                "Tahıl ve bakliyat ürünleri",
                "Depolar ve silolar",
                "Ürün yığınları",
                "Çuvallı veya uygun paletli ürünler",
                "Depolanmış ürün zararlısı riski bulunan uygun kapalı alanlar"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                  <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <ShieldAlert className="text-orange-500 w-6 h-6" /> Güvenlik ve Atık Yönetimi
            </h3>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl text-navy/80 text-sm leading-relaxed">
              Alüminyum fosfit uygulamalarında alan izolasyonu, yetkisiz girişin önlenmesi, uygun gaz ölçümü, kontrollü havalandırma ve reaksiyon sonrası kalıntıların güvenli yönetimi temel aşamalardır. Ürün, alan ve operasyon uygunluğu doğrulanmadan uygulama planlanmamalıdır.
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6">Planlama Kriterleri</h2>
          <div className="space-y-4">
            {[
              "Ürün türü ve son kullanım amacı",
              "Miktar ve ürün hacmi",
              "Ürün ve ortam sıcaklığı",
              "Alan sızdırmazlığı",
              "Uygulama için ayrılabilen süre",
              "Gaz ölçümü ve havalandırma imkânı",
              "Yakın çalışma alanları ve güvenlik mesafeleri"
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