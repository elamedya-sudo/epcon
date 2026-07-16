import React from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  MapPin, 
  AlertTriangle, 
  Target, 
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Search
} from 'lucide-react';

export const metadata = {
  title: "Hamamböceği Mücadelesi | Profesyonel İlaçlama | EPCON",
  description: "Hamamböceği tür ve kaynak tespiti, jel uygulaması, gider-rögar kontrolü ve takip hizmeti. EPCON’dan uygulama ve teklif talep edin."
};

export default function HamambocekPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <ShieldAlert className="w-4 h-4" /> TÜR TESPİTİ • KAYNAK KONTROLÜ • HEDEFE YÖNELİK UYGULAMA
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Profesyonel <span className="text-pest-green">Hamamböceği</span> Mücadelesi
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Hamamböceği problemlerinde zararlının türü, yoğunluğu, saklanma alanları ve yayılma kaynakları değerlendirilerek mekâna özel mücadele ve takip planı oluşturuyoruz.
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
          {/* Çalışan Hero Görseli: Temiz mutfak / Uygulama alanı */}
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1584820927498-cafe4c238b99?q=80&w=1000&auto=format&fit=crop" alt="Profesyonel Hamamböceği Kontrolü" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 2. KISA BİLGİ & RİSKLİ ALANLAR */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 mb-12">
          <p className="text-lg text-navy font-medium leading-relaxed">
            Hamamböcekleri sıcak, nemli, karanlık ve besin kaynaklarına yakın alanlarda barınabilir. Giderler, rögar bağlantıları, mutfak ekipmanlarının arkaları, motor bölümleri, tesisat geçişleri ve çatlaklar sık karşılaşılan saklanma alanlarıdır. Görülen tek bir birey, yakın çevrede daha fazla aktivite bulunabileceğini gösterebilir; bu nedenle yalnızca görülen noktaya değil, kaynağa ve yayılma yollarına odaklanılır.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <MapPin className="text-pest-green w-6 h-6" /> Nerelerde Görülür?
            </h3>
            <ul className="space-y-3">
              {[
                "Mutfak ve yemekhaneler",
                "Restoran, kafe ve gıda üretim alanları",
                "Banyo, tuvalet, gider ve rögar çevreleri",
                "Elektrikli cihazların ve tezgâhların arkaları",
                "Depolar, şaftlar ve teknik alanlar",
                "Ev, apartman, otel ve işyerleri"
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
                "Gece saatlerinde görülen canlı bireyler",
                "Dolap, tezgâh ve cihaz çevresinde hareketlilik",
                "Küçük koyu dışkı izleri",
                "Yumurta paketleri veya deri kalıntıları",
                "Yoğun durumlarda belirgin koku",
                "Yapışkan monitörlerde yakalama"
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
                "Gıda ve temas yüzeylerinde kirlenme riski",
                "İşletmelerde hijyen, kalite ve itibar kaybı",
                "Komşu alanlara ve ekipman boşluklarına yayılma",
                "Hızlı çoğalma nedeniyle sorunun kısa sürede büyümesi"
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
                "Tür ve yoğunluk tespiti yapılır.",
                "Gider, rögar, tesisat geçişleri ve saklanma alanları kontrol edilir.",
                "Gerekli alanlarda yapışkan monitörlerle aktivite takibi yapılır.",
                "Alana uygun jel, çatlak-boşluk veya hedefli uygulama planlanır.",
                "Temizlik, nem, gıda ve yapısal riskler raporlanır.",
                "Gerekli süre sonunda tekrar kontrolü ve takip planı uygulanır."
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
                  "Jel yem uygulamaları",
                  "Çatlak ve boşluk uygulamaları",
                  "Yapışkan izleme monitörleri",
                  "Hedefe yönelik rezidüel uygulamalar",
                  "Gider ve rögar kontrolleri",
                  "Fiziksel giriş noktalarının belirlenmesi",
                  "Dijital servis ve aktivite kayıtları"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-text-mid font-medium text-sm">
                    <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
              <h4 className="font-bold text-navy flex items-center gap-2 mb-2">
                <AlertTriangle className="text-orange-500 w-5 h-5" /> Güvenlik ve Hazırlık
              </h4>
              <p className="text-sm text-navy/80 leading-relaxed">
                Uygulama yöntemine göre açık gıdaların kaldırılması, mutfak yüzeylerinin boşaltılması ve evcil hayvanlara ait mama-su kaplarının korunması istenebilir. Hazırlık ve alana yeniden giriş bilgileri uygulama öncesinde müşteriye yazılı olarak bildirilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SSS (Sık Sorulan Sorular) */}
      <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
        <h3 className="font-barlowCondensed text-3xl font-bold text-navy text-center mb-10 uppercase">
          Sık Sorulan Sorular
        </h3>
        <div className="space-y-4">
          {[
            { q: "Tek uygulama yeterli olur mu?", a: "Yoğunluk, tür, komşu alanlardan geçiş ve yapısal koşullara göre tekrar kontrolü gerekebilir." },
            { q: "Jel uygulaması kokar mı?", a: "Jel uygulamaları küçük ve hedefli noktalara yapılır. Kullanılacak yöntem saha değerlendirmesine göre belirlenir ve tamamen kokusuzdur." },
            { q: "Hamamböcekleri giderlerden gelebilir mi?", a: "Gider, rögar ve tesisat bağlantıları önemli geçiş alanları olabilir; altyapı bağlantıları da değerlendirilmelidir." }
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

      {/* 5. İLGİLİ BLOG YAZILARI (Doküman Kuralı: En Fazla 3 Adet) */}
      <section className="py-16 px-6 md:px-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy mb-8 uppercase">İlgili Yazılar</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Hamamböceği Neden Olur?", href: "/blog/hamambocegi-neden-olur" },
              { title: "Alman ve Amerikan Hamamböceği Arasındaki Farklar", href: "/blog/alman-amerikan-hamambocegi-farklari" },
              { title: "Hamamböceği Jel Uygulaması Nasıl Çalışır?", href: "/blog/hamambocegi-jel-uygulamasi-nasil-calisir" }
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
            Hamamböceği Probleminizi Kaynağında Değerlendirelim
          </h2>
          <p className="text-lg font-medium mb-8">
            Alanınız ve karşılaştığınız sorun hakkında kısa bilgi paylaşın. Teknik ekibimiz uygun uygulama ve takip planı için sizinle iletişime geçsin.
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