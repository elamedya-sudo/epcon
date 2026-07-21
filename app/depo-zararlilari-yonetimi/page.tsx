import React from 'react';
import Link from 'next/link';
import { 
  Search, 
  LineChart, 
  PackageSearch, 
  Bug, 
  CheckCircle,
  AlertTriangle,
  Factory
} from 'lucide-react';

export const metadata = {
  title: "Depo Zararlıları Yönetimi ve Feromon İzleme | EPCON",
  description: "Depo ve ürün zararlıları için tür teşhisi, feromon izleme, trend analizi, hedefli uygulama ve fumigasyon hizmetleri."
};

export default function DepoZararlilariPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Search className="w-4 h-4" /> TÜR TEŞHİSİ • FEROMON İZLEME • TREND ANALİZİ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Depo ve Ürün Zararlılarını <span className="text-pest-green">İzlenebilir Bir Sistemle Yönetin</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Depolanmış ürün zararlılarını; tür teşhisi, feromon izleme, ürün ve alan kontrolleri, hijyen değerlendirmesi, hedefe yönelik uygulama ve gerektiğinde fumigasyon seçenekleriyle yönetiyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/ucretsiz-teklif-al?type=depo" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors text-center shadow-lg">
                Uygulama ve Teklif Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center border border-white/20">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>
          {/* Çalışan Hero Görseli: Depo / Lojistik */}
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.pexels.com/photos/36484131/pexels-photo-36484131.jpeg?q=80&w=1000&auto=format&fit=crop" alt="Depo Zararlıları Yönetimi" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 2. NEDEN ÖNEMLİDİR & YAYGIN ZARARLILAR */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy uppercase">
            Depo Zararlıları Kontrolü Neden Önemlidir?
          </h2>
          <p className="text-text-mid leading-relaxed text-lg">
            Depo zararlıları hammadde, yarı mamul, bitmiş ürün, ambalaj, makine ve depo alanlarında gelişebilir; ürün kaybı, kontaminasyon, kalite problemi ve denetim uygunsuzluğu oluşturabilir.
          </p>
          <div className="bg-slate-50 border-l-4 border-orange-500 p-6 rounded-r-xl flex items-start gap-4">
            <AlertTriangle className="text-orange-500 w-8 h-8 flex-shrink-0" />
            <p className="text-navy font-medium text-sm leading-relaxed">
              Bu zararlılar sadece ürünlerinizi değil, markanızın itibarını ve gıda güvenliği sertifikasyon süreçlerinizi (BRC, IFS vb.) de doğrudan tehdit eder. Erken teşhis ve feromon izleme kritik öneme sahiptir.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Bug className="text-pest-green w-6 h-6" /> Yaygın Karşılaşılan Zararlılar
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Un biti",
              "Kırma biti",
              "Pirinç biti",
              "Testereli böcek",
              "Kuru meyve güvesi",
              "Değirmen güvesi",
              "Tütün böceği",
              "Bakliyat ve tahıl zararlıları"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. MÜCADELE MODELİ VE SUNULAN HİZMETLER */}
      <section className="py-20 px-6 md:px-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7">
            <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-8 flex items-center gap-3">
              <PackageSearch className="text-pest-green w-8 h-8" /> Mücadele Modelimiz
            </h2>
            <div className="space-y-4">
              {[
                { title: "Tür Teşhisi", desc: "Zararlının biyolojik türünün nokta atışı teşhis edilmesi." },
                { title: "Feromon İzleme", desc: "Türe özel feromon tuzaklarıyla aktivitenin erken aşamada tespit edilmesi." },
                { title: "Kapsamlı Kontrol", desc: "Depo, üretim hattı ve ürün hareketlerinin detaylı şekilde incelenmesi." },
                { title: "Hijyen Değerlendirmesi", desc: "Yapısal eksikliklerin ve hijyen açıklarının tespit edilerek raporlanması." },
                { title: "Hedefli Müdahale", desc: "Gerektiğinde fiziksel, lokal biyosidal müdahale veya fumigasyon uygulaması." },
                { title: "Trend Analizi", desc: "Yakalama sonuçlarının dijital ortamda dönemsel olarak karşılaştırılması." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-navy/10 text-navy font-bold flex items-center justify-center flex-shrink-0 mt-1">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{step.title}</h4>
                    <p className="text-text-mid text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy p-8 rounded-2xl text-white shadow-lg">
              <h3 className="font-barlowCondensed text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                <Factory className="text-pest-green w-6 h-6" /> Sunulan Hizmetler
              </h3>
              <ul className="space-y-4">
                {[
                  "Feromon tuzakları kurulumu ve takibi",
                  "Tesis içi aktivite haritası oluşturma",
                  "Dijital trend ve denetim raporu",
                  "Depo, silo ve ürün fumigasyonu",
                  "Gaz ölçümü ve gazdan arındırma"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/90 font-medium text-sm">
                    <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-pest-green/10 p-6 rounded-2xl border border-pest-green/20">
              <div className="flex items-center gap-3 mb-3">
                <LineChart className="text-navy w-6 h-6" />
                <h4 className="font-bold text-navy">Proaktif Koruma</h4>
              </div>
              <p className="text-sm text-navy/80 leading-relaxed">
                Feromon izleme sistemleri, zararlı popülasyonu ekonomik zarar eşiğine ulaşmadan önce size müdahale etme şansı verir. Reaktif değil, proaktif (önleyici) bir yönetim modelidir.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. ALT ÇAĞRI (CTA) */}
      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">
            Ürün ve Depo Kayıplarını Risk Oluşmadan Önleyin
          </h2>
          <p className="text-lg font-medium mb-8">
            Zararlı teşhisi, feromon izleme, trend analizi veya fumigasyon ihtiyacı için teknik değerlendirme talep edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=depo" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
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