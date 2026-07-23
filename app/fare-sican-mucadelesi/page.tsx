import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  ShieldCheck, 
  MapPin, 
  Search, 
  AlertTriangle, 
  Target, 
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Crosshair
} from 'lucide-react';

export const metadata = {
  title: "Fare ve Sıçan Mücadelesi | Kemirgen Kontrolü | EPCON",
  description: "Güvenli istasyon, mekanik kontrol, giriş noktası analizi ve dijital takip ile fare ve sıçan mücadelesi. EPCON’dan teklif alın."
};

export default function FareSicanPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Crosshair className="w-4 h-4" /> İZLEME • GÜVENLİ İSTASYON • GİRİŞ NOKTASI KONTROLÜ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Fare ve Sıçan Risklerine Karşı <span className="text-pest-green">Entegre Kontrol</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Kemirgen aktivitesini yalnızca yemleme ile değil; izleme, güvenli istasyon sistemleri, mekanik kontrol, yapısal risk analizi ve giriş noktası kontrolleriyle yönetiyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/ucretsiz-teklif-al?type=fare_sican" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors text-center shadow-lg">
                Uygulama ve Teklif Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center border border-white/20">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>
          {/* Çalışan Hero Görseli: Kemirgen istasyonu / Depo ortamı */}
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.pexels.com/photos/7180053/pexels-photo-7180053.jpeg?q=80&w=1000&auto=format&fit=crop" alt="Fare ve Sıçan Mücadelesi" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>
      <ReferenceLogos />
      {/* 2. KISA BİLGİ & RİSKLİ ALANLAR */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 mb-12">
          <p className="text-lg text-navy font-medium leading-relaxed">
            Fare ve sıçanlar besin, su ve barınma imkânı bulunan alanlara yerleşebilir. Kablo kanalları, boru geçişleri, kapı altları, depolar, atık alanları ve bina çevreleri önemli risk noktalarıdır. Kalıcı kontrol için görülen bireylere müdahalenin yanında giriş yolları, çevresel koşullar ve besin kaynakları birlikte değerlendirilmelidir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <MapPin className="text-pest-green w-6 h-6" /> Nerelerde Görülür?
            </h3>
            <ul className="space-y-3">
              {[
                "Depo ve gıda alanları",
                "Çöp ve atık toplama alanları",
                "Bina çevresi, bodrum ve otoparklar",
                "Şaft, boru geçişleri ve tesisat galerileri",
                "Mutfak, yemekhane ve teknik hacimler",
                "Peyzaj, fabrika ve lojistik tesisleri"
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
                "Dışkı ve idrar izleri",
                "Kemirilmiş ambalaj, ahşap veya kablolar",
                "Duvar kenarlarında sürtünme izleri",
                "Gece saatlerinde ses ve hareketlilik",
                "Toprak alanlarda yuva girişleri",
                "İstasyonlarda yem tüketimi veya kapan aktivitesi"
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
                "Gıda ve ürünlerde kirlenme riski",
                "Kablo, ekipman ve ambalajlarda fiziksel hasar",
                "Depo ve üretim alanlarında kalite kaybı",
                "Hızlı üreme ve farklı alanlara yayılma"
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
                "Aktivite belirtileri ve olası tür değerlendirilir.",
                "İç ve dış alan risk analizi yapılır.",
                "Kontrol noktaları numaralandırılarak yerleşim planı hazırlanır.",
                "Güvenli istasyonlar, canlı yakalama veya mekanik sistemler kullanılır.",
                "Giriş noktaları ve yapısal eksiklikler raporlanır.",
                "Yem tüketimi, yakalama ve aktivite verileri takip edilir."
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
                  "Kilitli ve sabitlenmiş kemirgen istasyonları",
                  "Mekanik kapanlar",
                  "Canlı yakalama sistemleri",
                  "Uygun alanlarda izleme ekipmanları",
                  "Giriş noktası ve yuvalanma kontrolleri",
                  "Çevresel risk ve atık yönetimi önerileri",
                  "Dijital istasyon kayıtları ve trend analizi"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-text-mid font-medium text-sm">
                    <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
              <h4 className="font-bold text-navy flex items-center gap-2 mb-2">
                <ShieldCheck className="text-orange-500 w-5 h-5" /> Güvenlik ve Uyarı
              </h4>
              <p className="text-sm text-navy/80 leading-relaxed">
                Kontrol ekipmanları çocuklar, evcil hayvanlar, ürünler ve işletme faaliyetleri dikkate alınarak yerleştirilir. Rodentisitler açık şekilde bırakılmaz; uygun ve güvenli istasyon sistemleri içinde, etiket ve mevzuat şartlarına göre kullanılır.
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
            { q: "Yalnızca yem bırakmak yeterli midir?", a: "Kalıcı kontrol için giriş noktaları, gıda kaynakları, atık yönetimi ve çevresel koşullar da değerlendirilmelidir." },
            { q: "İstasyonlar ne sıklıkla kontrol edilir?", a: "Kontrol sıklığı risk seviyesi, aktivite, saha yapısı ve hizmet planına göre belirlenir." },
            { q: "Kablo kemirme riski var mıdır?", a: "Kemirgenler kablo, ambalaj ve farklı malzemelerde hasara neden olabilir; teknik alanlar ayrıca kontrol edilmelidir." }
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
              { title: "Fare Eve Nereden Girer?", href: "/fare-eve-nereden-girer" },
              { title: "Fare ve Sıçan Arasındaki Farklar", href: "/fare-ve-sican-arasindaki-farklar" },
              { title: "Kemirgen İstasyonları Nasıl Çalışır?", href: "/kemirgen-istasyonlari-nasil-calisir" }
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
            Kemirgen Riskini Birlikte Değerlendirelim
          </h2>
          <p className="text-lg font-medium mb-8">
            Aktivite görülen alanı ve tesis özelliklerini paylaşın. Teknik ekibimiz uygun izleme, kontrol ve takip planı için sizinle iletişime geçsin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=fare_sican" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
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