import React from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  MapPin, 
  Search, 
  AlertTriangle, 
  Target, 
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Bug
} from 'lucide-react';

export const metadata = {
  title: "Karınca Mücadelesi | İç ve Dış Alan Uygulaması | EPCON",
  description: "Karınca kolonisi, hareket yolu, giriş noktası ve besin kaynaklarına yönelik profesyonel karınca mücadelesi. EPCON’dan teklif alın."
};

export default function KarincaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Bug className="w-4 h-4" /> KOLONİ TESPİTİ • HAREKET YOLU • YEMLEME
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Karınca Kolonilerine Karşı <span className="text-pest-green">Hedefe Yönelik Mücadele</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Karıncaların yalnızca görüldüğü yüzeylere değil; hareket yollarına, yuva alanlarına, besin ve su kaynaklarına odaklanan iç ve dış alan uygulamaları planlıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors text-center shadow-lg">
                Uygulama ve Teklif Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center border border-white/20">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>
          {/* Çalışan Hero Görseli */}
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1582283995166-512185d3fdd1?q=80&w=1000&auto=format&fit=crop" alt="Profesyonel Karınca Kontrolü" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 2. KISA BİLGİ & RİSKLİ ALANLAR */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 mb-12">
          <p className="text-lg text-navy font-medium leading-relaxed">
            Karıncalar çatlaklar, duvar boşlukları, peyzaj alanları ve yapı çevresindeki yuvalardan iç alanlara girebilir. Besin ve su kaynaklarına ulaşmak için düzenli hareket yolları oluştururlar. Sadece görülen bireylere yüzeysel müdahale, koloninin devam etmesi nedeniyle geçici sonuç verebilir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <MapPin className="text-pest-green w-6 h-6" /> Nerelerde Görülür?
            </h3>
            <ul className="space-y-3">
              {[
                "Mutfak ve gıda hazırlama alanları",
                "Pencere, kapı ve balkon çevreleri",
                "Bahçe, peyzaj ve kaldırım kenarları",
                "Duvar çatlakları ve tesisat boşlukları",
                "Depo, üretim ve ticari alanlar",
                "Elektrik ve teknik hacimler"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                  <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <Search className="text-pest-green w-6 h-6" /> Varlık Belirtileri
            </h3>
            <ul className="space-y-3">
              {[
                "Düzenli karınca yolları",
                "Gıda ve su kaynakları çevresinde kümelenme",
                "Çatlaklardan sürekli giriş-çıkış",
                "Bahçede veya kaldırımda yuva girişleri",
                "Belirli saatlerde artan hareketlilik",
                "Kanatlı karınca görülmesi"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                  <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <AlertTriangle className="text-orange-500 w-6 h-6" /> Oluşturduğu Riskler
            </h3>
            <ul className="space-y-3">
              {[
                "Gıda ve yüzeylerde kirlenme riski",
                "Üretim ve hizmet alanlarında hijyen sorunu",
                "Koloninin farklı bölümlere yayılması",
                "Bazı türlerde ekipman ve yapı boşluklarında yuvalanma"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                  <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. MÜCADELE YAKLAŞIMI VE YÖNTEMLER */}
      <section className="py-20 px-6 md:px-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-8 flex items-center gap-3">
              <Target className="text-pest-green w-8 h-8" /> EPCON Mücadele Yaklaşımı
            </h2>
            <div className="space-y-6">
              {[
                "Karınca türü ve hareket yolu değerlendirilir.",
                "İç ve dış alan yuva kaynakları araştırılır.",
                "Besin ve su kaynakları kontrol edilir.",
                "Uygun alanlarda yemleme sistemi planlanır.",
                "Giriş noktaları ve dış alan yuvaları için hedefli müdahale yapılır.",
                "Aktivite azalışı ve koloni hareketi takip edilir."
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-navy text-white font-bold flex items-center justify-center flex-shrink-0 mt-1">
                    {idx + 1}
                  </div>
                  <p className="text-navy font-medium mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6">Kullanılan Yöntemler</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Jel veya yemleme uygulamaları",
                  "Hedefli çatlak-boşluk uygulamaları",
                  "Dış alan yuva kontrolleri",
                  "Fiziksel giriş noktası önerileri",
                  "Gıda, nem ve temizlik kaynağı yönetimi",
                  "Takip ve aktivite kayıtları"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-text-mid font-medium text-sm">
                    <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
              <h4 className="font-bold text-navy flex items-center gap-2 mb-2">
                <AlertTriangle className="text-orange-500 w-5 h-5" /> Güvenlik ve Uyarı
              </h4>
              <p className="text-sm text-navy/80 leading-relaxed">
                Yem ve biyosidal ürünler çocukların, evcil hayvanların ve gıdaların temas etmeyeceği hedefli noktalara uygulanır. Açık gıdalar korunmalı; uygulama noktaları temizlenmemeli veya yer değiştirilmemelidir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SSS */}
      <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
        <h3 className="font-barlowCondensed text-3xl font-bold text-navy text-center mb-10 uppercase">
          Sık Sorulan Sorular
        </h3>
        <div className="space-y-4">
          {[
            { q: "Sprey sıkmak karınca sorununu çözer mi?", a: "Görülen bireylerin uzaklaştırılması koloniyi ortadan kaldırmayabilir; koloni ve hareket yolları değerlendirilmelidir." },
            { q: "Karıncalar neden tekrar gelir?", a: "Besin, su, yuva ve giriş koşulları devam ettiği sürece aktivite tekrarlanabilir." },
            { q: "Yem uygulaması ne kadar sürede etki eder?", a: "Süre tür, koloni büyüklüğü, tüketim ve çevresel koşullara göre değişir; sonuç takip kontrolüyle değerlendirilir." }
          ].map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm flex items-start gap-4">
              <HelpCircle className="text-pest-green w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-navy mb-2">{faq.q}</h4>
                <p className="text-text-mid text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. İLGİLİ BLOG YAZILARI */}
      <section className="py-16 px-6 md:px-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy mb-8 uppercase">İlgili Yazılar</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Karınca Eve Neden Girer?", href: "/blog/karinca-eve-neden-girer" },
              { title: "Karınca Yuvası Nasıl Tespit Edilir?", href: "/blog/karinca-yuvasi-nasil-tespit-edilir" },
              { title: "Karınca Jel ve Yem Uygulaması Nasıl Çalışır?", href: "/blog/karinca-jel-ve-yem-uygulamasi-nasil-calisir" }
            ].map((blog, idx) => (
              <Link key={idx} href={blog.href} className="bg-white p-6 rounded-xl border border-border shadow-sm group hover:border-pest-green transition-all">
                <h4 className="font-bold text-navy mb-4 group-hover:text-pest-green transition-colors">{blog.title}</h4>
                <span className="text-pest-green text-sm font-bold flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                  Yazıyı İncele <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ALT ÇAĞRI (CTA) */}
      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">
            Karınca Kolonisini ve Giriş Noktalarını Değerlendirelim
          </h2>
          <p className="text-lg font-medium mb-8">
            Karıncaların görüldüğü alanı ve yoğunluğu kısaca paylaşın. Teknik ekibimiz uygun yemleme, uygulama ve takip planı için sizinle iletişime geçsin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
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