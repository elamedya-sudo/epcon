import React from 'react';
import Link from 'next/link';
import { 
  Warehouse, 
  Target, 
  CheckCircle, 
  ShieldAlert, 
  Clock, 
  Lock, 
  ClipboardCheck, 
  FileText, 
  HelpCircle 
} from 'lucide-react';

export const metadata = {
  title: "Depo ve Silo Fumigasyonu | EPCON Fumigasyon",
  description: "Ürün çeşidi, miktar, doluluk oranı, hacim, hedef zararlı, sıcaklık, sızdırmazlık ve havalandırma imkânları değerlendirilir."
};

export default function DepoSiloPage() {
  const faqs = [
    {
      q: "Uygulama ürünün (tahıl, bakliyat vb.) kalitesini bozar mı?",
      a: "Hayır. Doğru fümigant (örneğin Alüminyum Fosfit) uygun doz ve sıcaklıkta uygulandığında, ürünün tadında, kokusunda, besin değerinde veya tohumluk özelliğinde (çimlenme) bir bozulmaya neden olmaz."
    },
    {
      q: "Silo veya depolarda fümigasyon ne kadar sürer?",
      a: "Maruz kalma süresi fümigantın türüne, hedef zararlıya ve ortam sıcaklığına göre değişir. Özellikle Alüminyum Fosfit uygulamalarında ürün sıcaklığına bağlı olarak 3 ila 7 gün arasında bir maruz kalma süresi gerekebilir."
    },
    {
      q: "İşlem sırasında deponun diğer bölümlerinde çalışılabilir mi?",
      a: "Fümigasyon yapılan alan ve gaz geçiş riski taşıyan komşu bölgeler tamamen izole edilir. Teknik ekibimiz gaz ölçüm cihazlarıyla çalışma alanlarında risk olmadığını doğrulayana kadar bu bölgelerde çalışmaya izin verilmez."
    },
    {
      q: "İşlem sonrasında ürün üzerinde zehirli kalıntı kalır mı?",
      a: "İşlem sonrası belirlenen sürelerde ve doğru yöntemlerle yapılan havalandırma neticesinde fümigant gaz ortamdan tamamen uzaklaşır. Kalıntı bırakmayan fümigantlar kullanıldığı için uluslararası gıda limitlerine (MRL) uygundur."
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
              <Warehouse className="w-4 h-4" /> DEPOLANMIŞ ÜRÜN ZARARLILARI
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Depo ve Silo Fumigasyonunda <span className="text-pest-green">Teknik Planlama</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Ürün çeşidi, miktar, doluluk oranı, hacim, hedef zararlı, sıcaklık, yapı sızdırmazlığı, komşu alanlar ve havalandırma imkânları değerlendirilerek profesyonel uygulama planlanır.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al?type=depo" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Depo / Silo Fumigasyonu Teklifi Al
              </Link>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.pexels.com/photos/33678222/pexels-photo-33678222.jpeg?q=80&w=1000&auto=format&fit=crop" alt="Depo ve Silo Fumigasyonu" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 2. KİMLER İÇİN UYGUN & RİSKLER */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Target className="text-pest-green w-7 h-7" /> Hizmetin Kapsamı ve Riskler
          </h2>
          <p className="text-navy/80 mb-6 leading-relaxed">
            Tarım işletmeleri, tahıl siloları, un ve yem fabrikaları, gıda depoları ve antrepolarda görülen depo zararlılarına (güve, tahıl biti, un biti vb.) karşı ürün odaklı hacim uygulamalarıdır.
          </p>
          <h3 className="font-bold text-navy mb-4">Değerlendirilen Riskler:</h3>
          <ul className="space-y-4">
            {[
              "Tahıl ve bakliyat ürünlerinde depo zararlısı aktivitesi",
              "Un, yem ve kuru gıda depolarında bulaşma riski",
              "Silo veya ürün yığınlarında yaygın aktivite",
              "Boş depo veya üretim alanında yapısal zararlı riski",
              "Lokal uygulamanın yeterli olmayacağı yoğunluklar"
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
              { title: "Saha ve Kapasite Keşfi", desc: "Ürün türü, silo/depo hacmi, ürün sıcaklığı ve komşu alan riskleri analiz edilir." },
              { title: "Hazırlık ve Sızdırmazlık", desc: "Kapılar, havalandırma bacaları, çatlaklar ve ürün aktarım kanalları izole edilir." },
              { title: "Güvenlik Tedbirleri", desc: "Uyarı levhaları asılır, alan yetkisiz girişe tamamen kapatılır." },
              { title: "Gaz Uygulaması", desc: "Ürün ve hacim şartlarına göre hesaplanan dozda fümigant uygulanır." },
              { title: "Havalandırma ve Arındırma", desc: "Maruz kalma süresi sonunda mekanik veya doğal yollarla alan gazdan arındırılır." }
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
              <ShieldAlert className="w-8 h-8" /> Tesis ve Çevre Güvenliği
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Silo ve depolarda fümigantların yanlış kullanımı patlama veya çevre zehirlenmelerine yol açabilir. EPCON ekipleri, fümigantların ürün nemi ve sıcaklığıyla reaksiyonlarını hesaplayarak risksiz uygulamalar yürütür.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Gazın sızabileceği komşu üretim alanlarında ölçüm cihazlarıyla anlık takip yapılır.</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Tesis, son gaz ölçümü "0" ppm seviyesine inmeden çalışanlara açılmaz.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-pest-green uppercase mb-6 flex items-center gap-3">
              <ClipboardCheck className="w-8 h-8" /> Kayıt ve Denetim
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Uygulanan tüm işlemler, gıda denetim standartlarına (BRC, IFS, AIB vb.) ve tarım bakanlığı mevzuatlarına uygun olarak şeffaf şekilde raporlanır.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <FileText className="w-5 h-5 text-pest-green flex-shrink-0" /> Ürün ve Hacim Uygunluk Belgesi
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <FileText className="w-5 h-5 text-pest-green flex-shrink-0" /> Fümigasyon İşlem Sertifikası
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <FileText className="w-5 h-5 text-pest-green flex-shrink-0" /> Havalandırma ve Son Ölçüm Raporu
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
            Depo ve Silolarınız İçin Teknik Destek Alın
          </h2>
          <p className="text-lg font-medium mb-8">
            Ürün türünüz, deponuzun hacmi ve karşılaştığınız zararlı aktivitesi hakkında bilgi verin; teknik mühendislerimiz uygun çözüm ve fiyatlandırmayı hazırlasın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=depo" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Depo Fümigasyonu Teklifi Al
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