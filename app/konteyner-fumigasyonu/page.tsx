import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  PackageSearch, 
  CheckCircle, 
  Target, 
  Clock, 
  ShieldAlert, 
  Lock, 
  ClipboardCheck, 
  FileText, 
  HelpCircle,
  Wind
} from 'lucide-react';

export const metadata = {
  title: "Konteyner Fumigasyonu | EPCON Fumigasyon",
  description: "Konteyner tipi, kapı contaları, yük yerleşimi, gaz dolaşımı, ürün niteliği, sıcaklık ve sevkiyat takvimi değerlendirilerek süreç planlanır."
};

export default function KonteynerPage() {
  const faqs = [
    {
      q: "Konteyner kapıları açılmadan gaz ölçümü yapılabilir mi?",
      a: "Evet. Konteynerlerdeki gaz konsantrasyonu, kapıları açmadan önce uygun noktalardan (havalandırma menfezleri veya özel problar aracılığıyla) yapılan ölçümlerle tespit edilebilir."
    },
    {
      q: "Konteyner fümigasyonu ne kadar sürer?",
      a: "İşlem süresi; taşınan yükün türüne, hedeflenen zararlıya ve fümigantın çeşidine bağlı olarak değişir. Genellikle maruz kalma süresi 24-72 saat arasındadır; buna ek olarak havalandırma süresi eklenir."
    },
    {
      q: "Gas Free (Gazdan Arındırma) belgesi ne zaman düzenlenir?",
      a: "Konteynerin içindeki gaz konsantrasyonu, insan sağlığına zararsız olan limit değerlerin altına indiği, uzman ekibimiz tarafından hassas ölçüm cihazlarıyla doğrulandıktan sonra düzenlenir."
    },
    {
      q: "Fümigasyon yüküme zarar verir mi?",
      a: "Fümigasyon yöntemleri, yükün niteliği ve ambalaj yapısı önceden analiz edilerek seçilir. Doğru dozajlama ile ürünün ticari niteliğinde bir kayıp yaşanmaz."
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <PackageSearch className="w-4 h-4" /> KONTEYNER • YÜK • ÖLÇÜM
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Konteyner Yüklerine Özel <span className="text-pest-green">Güvenli Fumigasyon</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              İthalat ve ihracat yüklerinde konteyner tipi, yükün niteliği, ambalaj ve istif yapısı, gaz dolaşımı ve işlem nedeni değerlendirilerek uygun fumigasyon planı hazırlanır.
            </p>
            <div className="pt-4">
              <Link href="/ucretsiz-teklif-al?type=konteyner" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block">
                Konteyner Fumigasyonu Teklifi Al
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ReferenceLogos />

      {/* 2. KRİTERLER & SÜREÇ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-8">Konteyner Değerlendirme Kriterleri</h2>
          <ul className="space-y-4">
            {["Konteyner tipi ve fiziksel durumu", "Kapı contaları ve olası sızıntı noktaları", "Yükün konteyner içindeki yerleşimi", "Ambalajın gaz geçirgenliği", "Hedef zararlı veya işlem nedeni", "Uygulama sahası ve operasyon takvimi", "Gazdan arındırma ve güvenli sevkiyata açma imkânı"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Target className="text-pest-green w-5 h-5 flex-shrink-0" />
                <span className="text-navy font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-navy text-white p-10 rounded-3xl">
          <h2 className="font-barlowCondensed text-3xl font-bold uppercase mb-8">Uygulama Süreci</h2>
          <div className="space-y-6">
            {["Konteyner ve yük bilgilerinin alınması", "Saha ve sızdırmazlık değerlendirmesi", "Uygun fumigant ve operasyon planının belirlenmesi", "İzolasyon, uyarı ve güvenlik tedbirleri", "Uygulama ve gerekli kontroller", "Kontrollü havalandırma ve son gaz ölçümü", "Kayıt ve sevkiyata hazırlık"].map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-pest-green text-navy font-bold flex items-center justify-center flex-shrink-0">{idx + 1}</div>
                <p className="text-white/90 mt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GÜVENLİK VE RAPORLAMA */}
      <section className="py-20 px-6 md:px-10 bg-slate-50 border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
            <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <ShieldAlert className="text-orange-500 w-8 h-8" /> Güvenlik Prosedürleri
            </h2>
            <p className="text-text-mid leading-relaxed mb-6">
              Fumigasyon altındaki konteynerler, uluslararası "Tehlike" ikazlarına tabidir. Konteyner açılmadan önce alan izolasyonu, uyarı levhalarının kontrolü ve gaz sızıntı testleri eksiksiz yapılmalıdır.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-navy">
                <Lock className="w-5 h-5 text-orange-500" /> Yetkisiz girişlere karşı saha güvenliği
              </li>
              <li className="flex items-center gap-3 text-sm text-navy">
                <Lock className="w-5 h-5 text-orange-500" /> Son ölçüm olmadan konteyner açılışı yapılmaz
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
            <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <ClipboardCheck className="w-8 h-8" /> Kayıt ve Raporlama
            </h2>
            <p className="text-text-mid leading-relaxed mb-6">
              Operasyon sonunda gümrük ve liman otoritesinin talep ettiği tüm yasal dokümanlar EPCON güvencesiyle düzenlenir.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-navy">
                <FileText className="w-5 h-5 text-pest-green" /> Fümigasyon İşlem Sertifikası
              </li>
              <li className="flex items-center gap-3 text-sm text-navy">
                <FileText className="w-5 h-5 text-pest-green" /> Gas Free (Gazdan Arındırma) Belgesi
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SIK SORULAN SORULAR */}
      <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
        <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy text-center uppercase mb-12 flex items-center justify-center gap-3">
          <HelpCircle className="text-pest-green w-8 h-8" /> Sık Sorulan Sorular
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-navy text-lg mb-3 flex items-start gap-3">
                <span className="text-pest-green font-black">Q.</span> {faq.q}
              </h3>
              <p className="text-text-mid text-sm leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ALT ÇAĞRI (CTA) */}
      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">
            Konteyner Yükleriniz İçin Teklif Alın
          </h2>
          <p className="text-lg font-medium mb-8">
            İthalat veya ihracat sevkiyatlarınızda konteyner tipi, içerik ve karantina gereklilikleri hakkında bilgi verin; teknik ekibimiz en uygun süreci planlasın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=konteyner" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Konteyner Fümigasyonu Teklifi Al
            </Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-transparent text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy/10 transition-colors border-2 border-navy">
              WhatsApp'tan Hemen Ulaşın
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}