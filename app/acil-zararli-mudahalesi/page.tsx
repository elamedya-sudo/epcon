import React from 'react';
import Link from 'next/link';
import { 
  AlertOctagon, 
  CheckCircle, 
  Clock,
  ShieldAlert
} from 'lucide-react';

export const metadata = {
  title: "Acil Zararlı Müdahalesi | Hızlı Çözüm | EPCON",
  description: "Ani gelişen yılan, akrep veya yoğun böcek baskınlarına karşı hızlı risk değerlendirmesi ve acil zararlı müdahale hizmeti."
};

export default function AcilMudahalePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-orange-500/30">
              <AlertOctagon className="w-4 h-4" /> ANİ BASKIN • RİSK YÖNETİMİ • HIZLI AKSİYON
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Acil Zararlı <span className="text-orange-400">Müdahalesi</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              İşletmenizde, kargonuzda veya evinizde aniden ortaya çıkan tehlikeli türlere (yılan, akrep) veya yoğun istila durumlarına (kedi/köpek sonrası yoğun pire, ürün sonrası güve patlaması) karşı hızlı teknik destek ve müdahale sağlıyoruz.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al?type=acil_mudahale" className="bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors shadow-lg inline-block text-center">
                Acil Müdahale Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20">
                WhatsApp'tan Hemen Yaz
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1000&auto=format&fit=crop" alt="Acil Zararlı Müdahalesi" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-orange-50 border border-orange-200 p-8 rounded-3xl shadow-sm">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <ShieldAlert className="text-orange-500 w-6 h-6" /> Ne Yapmalısınız?
          </h3>
          <ul className="space-y-4">
            {[
              "Şüpheli veya tehlikeli bir canlı (yılan, akrep vb.) görüldüğünde alanı boşaltın ve kapıyı kapatarak izole edin.",
              "Çocukları ve evcil hayvanları o alandan derhal uzaklaştırın.",
              "Canlıya çıplak elle veya amatör yöntemlerle temas etmeye çalışmayın.",
              "Eğer mümkünse ve güvenliyse canlının fotoğrafını çekin (Teşhis için önemlidir).",
              "WhatsApp üzerinden fotoğrafı göndererek uzman teknik görüş talep edin."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-navy font-medium text-sm">
                <CheckCircle className="text-orange-500 w-5 h-5 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white border border-border p-8 rounded-3xl">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-4 flex items-center gap-3">
              <Clock className="text-pest-green w-6 h-6" /> Hızlı Reaksiyon Süreci
            </h3>
            <p className="text-navy/80 leading-relaxed text-sm mb-4">
              Mesai saatleri içerisinde iletilen acil talepler, operasyon programımızın uygunluğuna göre en hızlı şekilde değerlendirilir. Hızlı risk analizi yapılarak alınması gereken ilk güvenlik önlemleri hakkında telefonda yönlendirme sağlanır ve uygun ekip bölgeye sevk edilir.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}