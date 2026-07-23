import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  Package, 
  CheckCircle, 
  Target, 
  Clock, 
  ShieldAlert, 
  Lock, 
  ClipboardCheck, 
  FileText, 
  HelpCircle 
} from 'lucide-react';

export const metadata = {
  title: "Ürün ve Yük Fumigasyonu | EPCON Fumigasyon",
  description: "Her ürünün fumiganta ve işlem koşullarına uygunluğu ayrı değerlendirilir. Ürün niteliği, kullanım amacı, alıcı ülke şartları ve sevkiyat takvimi dikkate alınır."
};

export default function UrunYukPage() {
  const faqs = [
    {
      q: "Her ürün fümige edilebilir mi?",
      a: "Hayır. 'Her ürün fümige edilir' şeklinde kesin ifadeler kullanılamaz. Fümigantın ürünle etkileşimi, ambalajın gaz geçirgenliği ve ürünün son kullanım amacı değerlendirilmelidir."
    },
    {
      q: "Gıda ürünlerinde kalıntı bırakır mı?",
      a: "İşlem sonrası belirlenen sürelerde ve doğru yöntemlerle (havalandırma, gazdan arındırma) uygulandığında fümigant gaz ortamdan tamamen uzaklaşır ve uluslararası gıda limitlerine (MRL) uygundur."
    },
    {
      q: "Karantina gerekliliği olan ihracat yüklerinde hangi evraklar verilir?",
      a: "İhracat yapılacak alıcı ülkenin gerekliliklerine göre (Örn: ISPM 15, BMSB, vb.) uluslararası geçerliliğe sahip Fümigasyon İşlem Sertifikası ve Gazdan Arındırma Belgeleri düzenlenir."
    },
    {
      q: "Ambalajlı ürünlerde gaz içeri nüfuz eder mi?",
      a: "Streç film veya hava almayan naylon gibi gaz geçirgenliği olmayan ambalajlarda fümigasyon başarısız olabilir. Bu nedenle işlem öncesi ambalaj analizleri yapılır ve gerekirse ürünlerin ambalajlarında yapısal delikler açılması talep edilir."
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
              <Package className="w-4 h-4" /> ÜRÜNE VE YÜKE ÖZEL PLANLAMA
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Ürün ve Ticari Yüklere Yönelik <span className="text-pest-green">Fumigasyon</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Her ürünün fumiganta, sıcaklığa ve işlem koşullarına uygunluğu ayrı değerlendirilir. Ürün niteliği, kullanım amacı, ambalaj, hedef zararlı, alıcı ülke şartları ve sevkiyat operasyonu birlikte ele alınır.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al?type=urun_yuk" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Ürün / Yük Fumigasyonu Teklifi Al
              </Link>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000&auto=format&fit=crop" alt="Ürün ve Yük Fümigasyonu" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      <ReferenceLogos />

      {/* 2. KİMLER İÇİN UYGUN & DEĞERLENDİRME KRİTERLERİ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Target className="text-pest-green w-7 h-7" /> Hizmetin Kapsamı
          </h2>
          <p className="text-navy/80 mb-6 leading-relaxed">
            İthalat, ihracat ve karantina zorunlulukları kapsamında; gıda üreticileri, lojistik firmaları, antrepolar ve endüstriyel üreticiler için yüke özel projelendirme yapılır.
          </p>
          <h3 className="font-bold text-navy mb-4">Uygulanabilir Yükler:</h3>
          <ul className="space-y-4">
            {[
              "Tarımsal ürünler ve depolanmış ürünler",
              "Ahşap ürünler, tomruk ve orman malzemeleri",
              "Makine, ekipman ve uygun ticari yükler",
              "İhracat, ithalat veya karantina gerekliliği bulunan yükler"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-navy font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-border p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Clock className="text-pest-green w-7 h-7" /> Uygulama Süreci
          </h2>
          <div className="space-y-5">
            {[
              { title: "Ürün ve Ambalaj Analizi", desc: "Ürünün cinsi, nem oranı ve ambalajın gaz geçirgenliği incelenir." },
              { title: "Fümigant ve Yöntem Seçimi", desc: "Ürüne zarar vermeyecek uygun fümigant türü, dozajı ve maruz kalma süresi belirlenir." },
              { title: "İzolasyon ve Güvenlik", desc: "Uygulama yapılacak çadır, konteyner veya depo tam sızdırmaz hale getirilir." },
              { title: "Gaz Uygulaması", desc: "İşlem başlatılır ve dışarıdan gaz ölçüm cihazlarıyla konsantrasyon takibi yapılır." },
              { title: "Gazdan Arındırma", desc: "İşlem sonrası havalandırma yapılarak yük güvenli sevkiyata hazırlanır." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-navy/10 text-navy font-bold flex items-center justify-center flex-shrink-0 mt-1">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-navy">{step.title}</h4>
                  <p className="text-sm text-text-mid mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GÜVENLİK VE RAPORLAMA */}
      <section className="py-20 px-6 md:px-10 bg-navy text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-orange-500/10 border border-orange-500/20 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-orange-400 uppercase mb-6 flex items-center gap-3">
              <ShieldAlert className="w-8 h-8" /> Ürün ve Çevre Güvenliği
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Yanlış fümigant seçimi veya dozajlaması ürünün kalite standartlarını (renk, koku, çimlenme) bozabilir. Bu sebeple işlem, sadece yetkili ziraat mühendisleri yönetiminde gerçekleştirilir.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Fümigasyon çadırı veya işlem alanı yetkisiz girişe tamamen kapatılır ve uyarı levhaları asılır.</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Yük, ancak havalandırma işlemi yapılıp son gaz ölçümü sıfırlandığında teslim edilir.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-pest-green uppercase mb-6 flex items-center gap-3">
              <ClipboardCheck className="w-8 h-8" /> Kayıt ve Sertifikasyon
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Özellikle ihracat yüklerinde hedef ülkenin gümrük prosedürlerine uygun, izlenebilir ve karekodlu uluslararası fümigasyon evrakları düzenlenir.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <FileText className="w-5 h-5 text-pest-green flex-shrink-0" /> Uluslararası Fümigasyon İşlem Sertifikası
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <FileText className="w-5 h-5 text-pest-green flex-shrink-0" /> Gazdan Arındırma (Gas Free) Belgesi
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <FileText className="w-5 h-5 text-pest-green flex-shrink-0" /> İşlem Dozaj ve Son Ölçüm Raporları
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
            Ürünleriniz İçin Fümigasyon Çözümü Alın
          </h2>
          <p className="text-lg font-medium mb-8">
            Yükünüzün cinsi, tonajı, ambalaj yapısı ve ihracat yapılacak hedef ülke bilgilerini paylaşın; teknik ekibimiz uygun işlemi planlayarak sizinle iletişime geçsin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=urun_yuk" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Teknik Değerlendirme Talep Et
            </Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-transparent text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy/10 transition-colors border-2 border-navy">
              WhatsApp'tan Operasyona Ulaşın
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}