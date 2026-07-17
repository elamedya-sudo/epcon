import React from 'react';
import Link from 'next/link';
import { 
  Flame, 
  CheckCircle, 
  Target,
  FileText
} from 'lucide-react';

export const metadata = {
  title: "Isıl İşlem Yöntemi | EPCON Fumigasyon",
  description: "Uygun ürün, yük veya ahşap ambalajın belirlenen sıcaklık ve süre şartlarında işlem gördüğü fumigant kullanılmayan yöntem."
};

export default function IsilIslemPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Flame className="w-4 h-4" /> FUMİGANT KULLANILMAYAN İŞLEM YÖNTEMİ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Isıl İşlem <span className="text-pest-green">Yöntemi</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Isıl işlem; uygun ürün, yük veya ahşap ambalaj malzemesinin belirlenen sıcaklık ve süre koşullarında kontrollü biçimde işlem görmesini sağlayan, fumigant kullanılmayan bir yöntemdir. Uygunluk; ürünün ısıya dayanımı, yük yerleşimi, sensör konumları, sıcaklık dağılımı ve güncel resmî metodolojiye göre değerlendirilir.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Isıl İşlem Teklifi Al
              </Link>
            </div>
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
                "ISPM 15 kapsamında ahşap ambalaj uygulamaları",
                "Uygun ürün ve ticari yükler",
                "Isıya dayanıklı ahşap ve malzemeler"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                  <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-4 flex items-center gap-3">
              <FileText className="text-pest-green w-6 h-6" /> Kritik Uyarı
            </h3>
            <p className="text-navy/80 leading-relaxed text-sm">
              Isıl işlemde sıcaklığın yükün tüm kritik noktalarına ulaşması ve gerekli süre boyunca korunması önemlidir. Sensör verileri, işlem süresi ve kayıtlar izlenebilir biçimde tutulmalıdır. BMSB veya ISPM 15 ifadesi yalnızca ilgili güncel metodoloji ve yetki kapsamı doğrulandığında kullanılmalıdır.
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6">Planlama Kriterleri</h2>
          <div className="space-y-4">
            {[
              "Ürün ve ambalajın ısıya uygunluğu",
              "Yük boyutu ve istif düzeni",
              "Hedef çekirdek veya ortam sıcaklığı",
              "Sıcaklık sensörlerinin yerleşimi",
              "Süre ve sıcaklık kayıtlarının izlenebilirliği",
              "Uygulama tesisi ve yetki kapsamı"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-border flex items-center gap-3 shadow-sm">
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