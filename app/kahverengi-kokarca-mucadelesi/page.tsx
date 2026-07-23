import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  ShieldAlert, 
  MapPin, 
  Search, 
  AlertTriangle, 
  Target, 
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Bug,
  Ship
} from 'lucide-react';

export const metadata = {
  title: "Kahverengi Kokarca Mücadelesi | Bina ve Yaşam Alanı | EPCON",
  description: "Kahverengi kokarca giriş noktası tespiti, mevsimsel risk analizi, fiziksel önlem ve hedefli uygulama hizmeti. BMSB ihracat sayfasına ayrı yönlendirme."
};

export default function KokarcaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <ShieldAlert className="w-4 h-4" /> MEVSİMSEL RİSK • GİRİŞ NOKTALARI • YAPISAL ÖNLEM
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Kahverengi Kokarcaya Karşı <span className="text-pest-green">Bina ve Yaşam Alanı Kontrolü</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Kahverengi kokarcanın bina girişleri, çatı ve cephe boşlukları ile kışlama alanları değerlendirilerek mevsimsel risk azaltma planı oluşturuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/ucretsiz-teklif-al?type=kokarca" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors text-center shadow-lg">
                Uygulama ve Teklif Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center border border-white/20">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.pexels.com/photos/68513/bug-sheet-insect-brown-68513.jpeg?q=80&w=1000&auto=format&fit=crop" alt="Kahverengi Kokarca Bina Kontrolü" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>
      <ReferenceLogos />
      {/* 2. KISA BİLGİ & BMSB YÖNLENDİRMESİ & RİSKLİ ALANLAR */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-center">
            <p className="text-lg text-navy font-medium leading-relaxed">
              Kahverengi kokarca, özellikle serin dönemlerde korunaklı alanlara girerek kışlama eğilimi gösterebilir. Pencere, kapı, çatı, cephe birleşimleri ve havalandırma boşlukları bina içi geçiş noktaları olabilir. Bu sayfa ev, bina, site ve işletmelerde görülen kokarca sorunlarına yöneliktir.
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-3xl border border-orange-200 flex flex-col justify-center items-start">
            <Ship className="text-orange-500 w-8 h-8 mb-4" />
            <h4 className="font-bold text-navy mb-2">Avustralya İhracatı İçin İşlem mi Arıyorsunuz?</h4>
            <p className="text-sm text-navy/80 mb-4">BMSB işlemleri ihracat ve hedef ülke sevkiyat şartlarına yönelik ayrı bir hizmettir.</p>
            <Link href="/bmsb-fumigasyonu" className="text-orange-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              BMSB Sayfasına Git <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <MapPin className="text-pest-green w-6 h-6" /> Nerelerde Görülür?
            </h3>
            <ul className="space-y-3">
              {[
                "Bina dış cepheleri ve güneş alan yüzeyler",
                "Pencere, kapı ve sineklik çevreleri",
                "Çatı, tavan arası ve cephe boşlukları",
                "Havalandırma ve tesisat açıklıkları",
                "Site, villa, depo ve işletmeler",
                "Tarım alanlarına yakın yapılar"
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
                "Pencere ve cephelerde toplu görülme",
                "Çatı veya tavan arasında aktivite",
                "Kapı ve pencere çevresinden giriş",
                "İç alanlarda mevsimsel yoğunluk",
                "Rahatsız edildiğinde belirgin koku",
                "Aynı noktalarda tekrar eden kümelenme"
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
                "Yaşam ve çalışma alanlarında rahatsızlık",
                "Kışlama döneminde bina içinde yoğun birikim",
                "Tarım ve bitkisel üretim alanlarında ürün zararı riski",
                "Yanlış ezme veya kontrolsüz müdahalede koku problemi"
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
                "Mevsim, çevre ve yoğunluk değerlendirilir.",
                "Bina dış cephesi ve giriş noktaları incelenir.",
                "Çatı, pencere, kapı ve havalandırma açıklıkları belirlenir.",
                "Sineklik, fitil ve fiziksel kapatma önerileri sunulur.",
                "Uygun alanlarda hedefli uygulama planlanır.",
                "Mevsimsel takip ve tekrar riskleri değerlendirilir."
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
                  "Giriş noktası ve cephe kontrolleri",
                  "Sineklik, fitil ve fiziksel izolasyon önerileri",
                  "Mekanik uzaklaştırma ve vakumlama önerileri",
                  "Uygun alanlarda hedefli biyosidal uygulamalar",
                  "Mevsimsel risk bilgilendirmesi",
                  "BMSB ihracat işlemlerine ayrı yönlendirme"
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
                Kokarcaların iç alanda ezilmesi yoğun kokuya neden olabilir. Uygulama sırasında açık gıdalar, çocuklar, evcil hayvanlar ve hassas yüzeyler korunmalıdır. Fiziksel kapatma işlemleri canlıların yoğun olarak içerde bulunduğu dönemde kontrollü planlanmalıdır.
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
            { q: "Kahverengi kokarca neden evlere girer?", a: "Serin dönemlerde korunaklı kışlama alanı aradığı için bina boşluklarına ve iç alanlara girebilir." },
            { q: "İç alanda ezmek doğru mudur?", a: "Ezildiğinde belirgin koku bırakabilir; güvenli mekanik uzaklaştırma tercih edilmelidir." },
            { q: "Bina kokarca mücadelesi ile BMSB ihracat işlemi aynı mıdır?", a: "Hayır. Bina mücadelesi yaşam alanındaki aktiviteye, BMSB işlemi ise hedef ülke sevkiyat şartlarına yöneliktir." }
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
              { title: "Kahverengi Kokarca Neden Evlere Girer?", href: "/kahverengi-kokarca-neden-evlere-girer" },
              { title: "Kokarcaya Karşı Bina Girişleri Nasıl Korunur?", href: "/kokarcaya-karsi-bina-girisleri" },
              { title: "BMSB İhracat İşlemleri Nedir?", href: "/bmsb-ihracat-islemleri-nedir" }
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
            Kokarca Giriş Noktalarını ve Mevsimsel Riski Değerlendirelim
          </h2>
          <p className="text-lg font-medium mb-8">
            Bina türü, konum ve görülen yoğunluk hakkında kısa bilgi paylaşın. Teknik ekibimiz fiziksel önlem ve uygun uygulama planı için sizinle iletişime geçsin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=kokarca" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
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