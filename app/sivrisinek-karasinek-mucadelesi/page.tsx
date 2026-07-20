import React from 'react';
import Link from 'next/link';
import { 
  Wind, 
  MapPin, 
  Droplets, 
  AlertTriangle, 
  Target, 
  CheckCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: "Sivrisinek ve Karasinek Mücadelesi | EFT Kontrolü | EPCON",
  description: "Üreme kaynağı, larva kontrolü, ergin mücadele ve EFT/UV cihaz takibiyle sivrisinek ve karasinek kontrolü. EPCON’dan teklif alın."
};

export default function SivrisinekKarasinekPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Wind className="w-4 h-4" /> ÜREME KAYNAĞI • LARVA KONTROLÜ • EFT TAKİBİ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Sivrisinek ve Karasineklere Karşı <span className="text-pest-green">Entegre Mücadele</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Uçan haşere problemlerini yalnızca ergin uygulamasıyla değil; üreme kaynakları, larva dönemleri, giriş noktaları ve EFT/UV cihaz verileriyle birlikte değerlendiriyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/ucretsiz-teklif-al?type=sivrisinek_karasinek" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors text-center shadow-lg">
                Uygulama ve Teklif Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center border border-white/20">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1518534107127-1fdf5690b205?q=80&w=1000&auto=format&fit=crop" alt="Profesyonel Uçan Haşere Kontrolü" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 2. KISA BİLGİ & RİSKLİ ALANLAR */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 mb-12">
          <p className="text-lg text-navy font-medium leading-relaxed">
            Sivrisinek, karasinek ve küçük sinek yoğunluğu çoğu zaman durgun su, organik atık, gider, drenaj, çöp alanı veya dış ortam girişleriyle ilişkilidir. Kalıcı azalma için kaynak, larva dönemi, ergin aktivitesi ve fiziksel giriş önlemleri birlikte yönetilmelidir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <MapPin className="text-pest-green w-6 h-6" /> Nerelerde Görülür?
            </h3>
            <ul className="space-y-3">
              {[
                "Çöp ve atık alanları",
                "Su birikintileri, rögar ve drenaj çevreleri",
                "Mutfak, yemekhane ve üretim alanları",
                "Bahçe, peyzaj ve sulama noktaları",
                "Hayvan barınakları",
                "Kapı, pencere ve mal kabul alanları"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                  <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <Droplets className="text-pest-green w-6 h-6" /> Varlık Belirtileri
            </h3>
            <ul className="space-y-3">
              {[
                "Belirli alanlarda yoğun uçuş",
                "Gider çevresinde küçük sinek aktivitesi",
                "EFT cihazlarında artan yakalama",
                "Durgun su alanlarında larva görülmesi",
                "Çöp ve organik atık çevresinde yoğunluk",
                "Kapı ve girişlerde sürekli hareketlilik"
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
                "Gıda ve üretim alanlarında kirlenme riski",
                "Çalışan ve kullanıcı konforunun bozulması",
                "Bazı türlerde halk sağlığı açısından vektör riski",
                "İşletmelerde denetim ve itibar sorunları"
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
                "Üreme kaynağı araştırılır.",
                "Su, gider, atık ve organik madde alanları kontrol edilir.",
                "Larva alanları belirlenerek uygun mücadele planlanır.",
                "Alan şartlarına göre hedefli ergin uygulaması yapılır.",
                "EFT cihazlarının konumu, çalışması ve levhaları kontrol edilir.",
                "Yakalama verileri trend analizine dönüştürülür."
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
                  "Larva mücadelesi",
                  "Hedefli yüzey uygulamaları",
                  "Alan/mevzuat uygunluğunda ULV",
                  "EFT/UV sinek tutucu kontrolleri",
                  "Yapışkan levha ve UV lamba takibi",
                  "Sineklik, hava perdesi yönetimi",
                  "Atık ve su kaynağı yönetimi"
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
                ULV veya yüzey uygulamalarında alanın kullanım amacı, gıda varlığı, çalışan trafiği ve etiket talimatları dikkate alınır. EFT cihazları açık ürünlerin üzerine veya dış ortam ışığıyla rekabet edecek uygunsuz noktalara yerleştirilmemelidir.
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
            { q: "Yalnızca ergin sineklere uygulama yapmak yeterli midir?", a: "Üreme kaynakları ve larva alanları devam ediyorsa yoğunluk tekrar oluşabilir; kaynak kontrolü temel unsurdur." },
            { q: "EFT cihazı problemi tamamen çözer mi?", a: "EFT önemli bir izleme ve yakalama aracıdır; temizlik, giriş kontrolü ve kaynak yönetimiyle birlikte kullanılmalıdır." },
            { q: "ULV her alanda uygulanır mı?", a: "Hayır. Alan kullanımı, hedef zararlı, güvenlik ve mevzuat uygunluğu değerlendirilerek karar verilir." }
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
              { title: "Küçük Sinekler Neden Oluşur?", href: "/kucuk-sinekler-neden-olusur" },
              { title: "Sivrisinek Üreme Kaynakları Nelerdir?", href: "/sivrisinek-ureme-kaynaklari" },
              { title: "Elektrikli Sinek Tutucu Cihazlar Nasıl Konumlandırılır?", href: "/eft-cihazlari-nasil-konumlandirilir" }
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
            Uçan Haşere Kaynağını ve Yoğunluğunu Birlikte Değerlendirelim
          </h2>
          <p className="text-lg font-medium mb-8">
            Sineklerin görüldüğü alan ve zaman aralığını paylaşın. Teknik ekibimiz kaynak kontrolü, EFT izleme ve uygulama planı için sizinle iletişime geçsin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=sivrisinek_karasinek" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
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