import React from 'react';
import Link from 'next/link';
import { 
  TreePine, 
  CheckCircle, 
  Bug,
  ShieldCheck
} from 'lucide-react';

export const metadata = {
  title: "Bahçe ve Dış Alan İlaçlama | EPCON",
  description: "Sivrisinek, kene, pire, karınca gibi dış alan zararlılarına karşı peyzaj ve kullanım alanlarını koruyan mevsimsel ilaçlama hizmeti."
};

export default function BahceIlaclamaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <TreePine className="w-4 h-4" /> MEVSİMSEL RİSK • PEYZAJ KORUMASI • ÇEVRE GÜVENLİĞİ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Bahçe ve Dış Alan <span className="text-pest-green">İlaçlama</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Bahçe, avlu, peyzaj ve dış oturma alanlarınızda mevsimsel olarak artan sivrisinek, kene, pire, karınca, örümcek gibi zararlılara karşı koruyucu ve ortam huzurunu artırıcı uygulamalar yapıyoruz.
            </p>
            <div className="pt-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Bahçe İlaçlama Teklifi Al
              </Link>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1558904541-efa843a96f0a?q=80&w=1000&auto=format&fit=crop" alt="Bahçe ve Dış Alan İlaçlama" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Bug className="text-pest-green w-6 h-6" /> Hedef Zararlılar
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Sivrisinek ve karasinekler",
              "Kene ve pireler",
              "Karınca ve örümcekler",
              "Çıyan ve akrepler",
              "Uçkun ve yürüyen haşereler"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white border border-border p-8 rounded-3xl">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-4 flex items-center gap-3">
              <ShieldCheck className="text-pest-green w-6 h-6" /> Dış Alan Stratejisi
            </h3>
            <p className="text-navy/80 leading-relaxed text-sm mb-4">
              Dış alan ilaçlaması hava koşullarından etkilenir. Yağmurlu ve rüzgarlı havalarda uygulamanın etkisi azalacağı için hava durumu takip edilerek planlama yapılır. Ayrıca su birikintileri gibi larva üreme alanları tespit edilip kaynak kontrolü önerilir.
            </p>
            <p className="text-navy/80 leading-relaxed text-sm font-medium">
              Uygulama sonrası ürünün kuruma süresi (genellikle 2-3 saat) boyunca alanın evcil hayvanlardan ve çocuklardan uzak tutulması istenir.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}