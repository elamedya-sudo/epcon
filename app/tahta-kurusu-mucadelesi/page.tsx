import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  Search,
  MapPin, 
  AlertTriangle, 
  Target, 
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Bed
} from 'lucide-react';

export const metadata = {
  title: "Tahta Kurusu Mücadelesi | Kontrol ve İlaçlama | EPCON",
  description: "Tahta kurusu tespiti, eşya hazırlığı, hedefli uygulama ve tekrar kontrolü. EPCON profesyonel tahta kurusu hizmetini inceleyin."
};

export default function TahtaKurusuPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Bed className="w-4 h-4" /> DETAYLI KONTROL • EŞYA HAZIRLIĞI • HEDEFLİ MÜDAHALE
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Profesyonel <span className="text-pest-green">Tahta Kurusu</span> Mücadelesi
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Yatak, baza, mobilya ve saklanma alanlarında yapılan ayrıntılı kontrolün ardından mekâna ve yoğunluğa uygun uygulama, hazırlık ve takip planı oluşturuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/ucretsiz-teklif-al?type=tahta_kurusu" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors text-center shadow-lg">
                Uygulama ve Teklif Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center border border-white/20">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>
          {/* Çalışan Hero Görseli: Otel Odası / Yatak */}
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop" alt="Profesyonel Tahta Kurusu Kontrolü" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>
      <ReferenceLogos />
      {/* 2. KISA BİLGİ & RİSKLİ ALANLAR */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 mb-12">
          <p className="text-lg text-navy font-medium leading-relaxed">
            Tahta kuruları yatak, baza, başlık, koltuk, mobilya birleşimleri, süpürgelikler ve dar çatlaklarda saklanabilir. Eşya, bavul ve insan hareketleriyle farklı alanlara taşınabilir. Başarılı mücadelede ayrıntılı kontrol, doğru hazırlık, eşyaların kontrolsüz taşınmaması ve planlı tekrar kontrolü önemlidir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <MapPin className="text-pest-green w-6 h-6" /> Nerelerde Görülür?
            </h3>
            <ul className="space-y-3">
              {[
                "Ev, daire ve villalar",
                "Otel, yurt ve konaklama tesisleri",
                "Misafirhane ve personel yatakhaneleri",
                "Bekleme, dinlenme ve ortak oturma alanları",
                "Gemi ve personel yaşam mahalleri",
                "İkinci el eşya bulunan alanlar"
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
                "Yatak ve mobilya çevresinde koyu noktalar",
                "Canlı birey, yumurta veya deri kalıntıları",
                "Yatak tekstillerinde küçük lekeler",
                "Baza, başlık ve mobilya birleşimlerinde aktivite",
                "Gece sonrasında fark edilen ısırık benzeri izler",
                "Kendine özgü yoğun koku - ileri vakalarda"
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
                "Uyku ve yaşam konforunun bozulması",
                "Otel ve tesislerde müşteri memnuniyeti ve itibar kaybı",
                "Eşya ve oda hareketleriyle farklı alanlara yayılma",
                "Yanlış hazırlık ve kontrolsüz ilaç kullanımında sorunun büyümesi"
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
                "Yatak, baza, başlık, koltuk ve yakın çevre ayrıntılı incelenir.",
                "Yoğunluk ve yayılma alanı belirlenir.",
                "Müşteriye mekâna özel yazılı hazırlık listesi iletilir.",
                "Hedefli uygulama, fiziksel temizlik ve eşya yönetimi planlanır.",
                "Odalar arasında eşya taşınması ve yayılma riski azaltılır.",
                "Uygun süre sonunda tekrar kontrolü yapılır."
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
                  "Ayrıntılı görsel ve fiziksel kontrol",
                  "Vakum ve mekanik temizlik önerileri",
                  "Çatlak, birleşim ve saklanma alanı uygulamaları",
                  "Alana uygun biyosidal yöntemler",
                  "Isıya uygun tekstil ve eşyalarda kontrollü sıcaklık önerileri",
                  "İzleme ve tekrar kontrolü"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-text-mid font-medium text-sm">
                    <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
              <h4 className="font-bold text-navy flex items-center gap-2 mb-2">
                <AlertTriangle className="text-orange-500 w-5 h-5" /> Güvenlik ve Eşya Hazırlığı
              </h4>
              <p className="text-sm text-navy/80 leading-relaxed">
                Eşyaların gelişigüzel başka odalara taşınması yayılmaya neden olabilir. Çamaşır, tekstil ve kişisel eşyalar için paketleme, yıkama veya ısı uygulaması talimatları müşteriye yazılı olarak iletilir. Isırık benzeri izler tek başına kesin teşhis değildir; sağlık şikâyetlerinde profesyonele başvurulmalıdır.
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
            { q: "Tahta kurusu yalnızca yatakta mı yaşar?", a: "Hayır. Mobilya, süpürgelik, duvar birleşimleri, priz çevresi ve farklı dar alanlarda saklanabilir." },
            { q: "Eşyaları atmak gerekir mi?", a: "Her eşyanın atılması gerekmez. Eşyanın durumu ve aktivite seviyesi teknik incelemeyle değerlendirilmelidir." },
            { q: "Tekrar kontrolü neden önemlidir?", a: "Saklanma alanları ve yaşam döngüsü nedeniyle uygulama sonrasında yeniden kontrol gerekebilir." }
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
              { title: "Tahta Kurusu Nasıl Anlaşılır?", href: "/tahta-kurusu-nasil-anlasilir" },
              { title: "Tahta Kurusu Uygulaması Öncesi Hazırlık", href: "/tahta-kurusu-uygulamasi-oncesi-hazirlik" },
              { title: "Tahta Kurusu Eşyalardan Nasıl Taşınır?", href: "/tahta-kurusu-esyalardan-nasil-tasinir" }
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
            Tahta Kurusu Riskini Ayrıntılı İnceleyelim
          </h2>
          <p className="text-lg font-medium mb-8">
            Mekân türü ve gözlemlediğiniz belirtiler hakkında kısa bilgi paylaşın. Teknik ekibimiz kontrol, hazırlık ve uygulama planı için sizinle iletişime geçsin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=tahta_kurusu" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
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