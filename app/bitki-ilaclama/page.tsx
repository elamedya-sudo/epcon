import React from 'react';
import Link from 'next/link';
import { 
  Leaf, 
  CheckCircle, 
  UserCheck,
  Search
} from 'lucide-react';

export const metadata = {
  title: "Bitki Sağlığı Uygulamaları | Ziraat Mühendisi Kontrollü | EPCON",
  description: "Bahçe, ağaç ve peyzaj bitkilerindeki zararlı ve hastalık belirtilerine yönelik, bitki sağlığı uzmanları tarafından planlanan koruyucu uygulamalar."
};

export default function BitkiIlaclamaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Leaf className="w-4 h-4" /> BİTKİ HASTALIKLARI • ZİRAİ ZARARLILAR • UZMAN KONTROLÜ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Bitki Sağlığı <span className="text-pest-green">Uygulamaları</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Bahçe ve peyzaj bitkilerinizdeki yaprak sararması, dökülme, kuruma veya doğrudan gözlenen bitki zararlılarına karşı (yaprak biti, kırmızı örümcek, külleme vb.) ziraat mühendislerimiz teşhis ve uygulama planı hazırlar.
            </p>
            <div className="pt-4">
              <Link href="/ucretsiz-teklif-al?type=bitki_sagligi" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Bitki Sağlığı Teklifi Al
              </Link>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1416879598553-30b6e2cdfb38?q=80&w=1000&auto=format&fit=crop" alt="Bitki Sağlığı ve Zirai Uygulama" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-white border border-border p-8 rounded-3xl shadow-sm">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Search className="text-pest-green w-6 h-6" /> Karşılaşılan Sorunlar
          </h3>
          <ul className="space-y-4">
            {[
              "Meyve ve süs ağaçlarında böceklenme (Yaprak bitleri, kabuklu bitler vb.)",
              "Mantar hastalıkları kaynaklı sararma, pas veya külleme",
              "Çim alanlarda gözlenen çim kurtları veya kök hastalıkları",
              "Mevsim geçişlerinde zayıflayan bitkilerin koruma ihtiyacı",
              "Sürgün, gövde ve yaprak yiyen tırtıl türleri"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-text-mid font-medium text-sm">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-6">
          <div className="bg-pest-green/10 border border-pest-green/20 p-8 rounded-3xl">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-4 flex items-center gap-3">
              <UserCheck className="text-pest-green w-6 h-6" /> Ziraat Mühendisliği Farkı
            </h3>
            <p className="text-navy/80 leading-relaxed text-sm mb-4">
              Bitki ilaçlaması, halk sağlığı pest kontrolünden farklı bir uzmanlıktır. Kullanılacak zirai ilaçların (pestisit), uygun oranlarda, doğru zamanda ve hedef bitkiye zarar vermeyecek kalibrasyonda uygulanması gerekir. Yanlış ürün kullanımı bitkinin kurumasına neden olabilir.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}