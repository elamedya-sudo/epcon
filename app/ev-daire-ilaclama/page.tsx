import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  CheckCircle, 
  ShieldAlert, 
  Target,
  Info,
  Clock,
  HelpCircle,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Lock
} from 'lucide-react';

export const metadata = {
  title: "Ev ve Daire İlaçlama | EPCON",
  description: "Evinizde karşılaştığınız zararlının türünü, görüldüğü alanları ve yayılma riskini değerlendirerek ihtiyaca uygun uygulama yöntemi belirliyoruz."
};

export default function EvDaireIlaclamaPage() {
  const faqs = [
    {
      q: "İlaçlama esnasında evden ayrılmamız gerekiyor mu?",
      a: "Uygulanacak yönteme göre değişiklik gösterir. Kokusuz jel veya kemirgen istasyon uygulamalarında evi terk etmenize gerek yoktur. Ancak sıvı pülverizasyon (püskürtme) yapılacaksa, uygulama esnasında ve sonrasındaki 2-4 saat boyunca evin boşaltılması ve ardından havalandırılması istenir."
    },
    {
      q: "İlaçlama sonrasında detaylı temizlik yapmalı mıyım?",
      a: "Hayır. Özellikle süpürgelik dipleri, dolap arkaları ve beyaz eşya altları gibi noktalara uygulanan ilaçların kalıcılığını koruması (rezidüel etki) için detaylı ıslak temizlik yapılmaması gerekir. Sadece orta alanlarda normal gündelik temizliğinizi yapabilirsiniz."
    },
    {
      q: "Evcil hayvanlarımız (kedi, köpek, kuş) için risk var mı?",
      a: "Kullandığımız ürünler Sağlık Bakanlığı ve WHO onaylıdır. Ancak uygulama öncesinde evcil hayvanların mama/su kapları kaldırılmalı ve ortamdan uzaklaştırılmalıdır. Sıvı uygulamalarda yüzeyler tamamen kuruyup ev havalandırıldıktan sonra evcil hayvanlarınızı güvenle içeri alabilirsiniz."
    },
    {
      q: "Hamamböcekleri için kesin çözüm sağlanıyor mu?",
      a: "Evet. Hamamböcekleri için yuva içindeki koloniyi de yok eden 'domino etkili' özel jel formülasyonlar kullanıyoruz. Bu yöntemle popülasyon kaynağında kurutularak kalıcı ve kesin çözüm elde edilir."
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
              <Home className="w-4 h-4" /> KONUTLARA ÖZEL BİYOSİDAL UYGULAMALAR
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Ev ve Dairenize Özel <br/><span className="text-pest-green">Profesyonel İlaçlama</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Evinizde karşılaştığınız zararlının türünü, yuvalanma alanlarını ve yayılma riskini değerlendirerek ailenize ve eşyalarınıza zarar vermeyen, ihtiyaca en uygun profesyonel uygulama yöntemini belirliyoruz.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al?type=ev_daire" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center flex items-center justify-center gap-2">
                Uygulama ve Teklif Talep Et <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center gap-2">
                <PhoneCall size={18} /> Uzmanla Görüş
              </a>
            </div>
          </div>
          {/* Çalışan Hero Görseli: Temiz ve güvenli ev ortamı */}
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop" alt="Ev ve Daire İlaçlama" className="w-full h-full object-cover absolute inset-0 z-0" />
          </div>
        </div>
      </section>

      {/* 2. ZARARLILAR VE UYGULAMA SÜRECİ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <ShieldAlert className="text-pest-green w-7 h-7" /> Evlerde Yaygın Zararlılar
          </h2>
          <p className="text-navy/80 mb-6 leading-relaxed">
            Ev ortamındaki ısı ve nemli noktalar (mutfak, banyo) zararlılar için ideal yaşam alanlarıdır. Müdahale ettiğimiz başlıca türler:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Hamamböceği (Kalorifer böceği)",
              "Karınca ve Gümüşçün",
              "Tahtakurusu ve Pire",
              "Fare (Ev ve Fındık faresi)",
              "Sivrisinek ve Uçkunlar",
              "Örümcek ve Akrep",
              "Kahverengi kokarca böceği",
              "Mutfak güveleri"
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
            <Clock className="text-pest-green w-7 h-7" /> Uygulama Yaklaşımı
          </h2>
          <div className="space-y-5">
            {[
              { title: "Zararlı ve Alan Değerlendirmesi", desc: "Uygulama öncesinde evinizdeki zararlının türü, yoğunluğu ve giriş noktaları uzmanlarımızca tespit edilir." },
              { title: "Yöntem Belirleme", desc: "Zararlı türüne göre leke/koku bırakmayan jel yem, kemirgen istasyonu veya hedefli sıvı pülverizasyon yöntemi seçilir." },
              { title: "Güvenli ve Hedefli Uygulama", desc: "Eşyalarınıza zarar vermeden, mutfak dolap arkaları, süpürgelikler ve banyo giderleri gibi yuvalanma noktalarına müdahale edilir." },
              { title: "Bilgilendirme ve Takip", desc: "İşlem sonrası evin ne kadar havalandırılacağı ve temizlikte nelere dikkat edileceği tarafınıza yazılı/sözlü olarak aktarılır." }
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

      {/* 3. HAZIRLIK VE GÜVENLİK */}
      <section className="py-20 px-6 md:px-10 bg-navy text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-orange-500/10 border border-orange-500/20 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-orange-400 uppercase mb-6 flex items-center gap-3">
              <Info className="w-8 h-8" /> Uygulama Öncesi Hazırlık
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              Sağlıklı ve güvenli bir ilaçlama deneyimi için uzman ekibimiz gelmeden önce yapmanız gereken bazı basit hazırlıklar bulunmaktadır:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></span> Mutfak tezgahındaki açık gıdaların dolaplara kaldırılması.
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></span> Çocuklara ait oyuncakların, emziklerin vs. kapalı kutulara konması.
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></span> Evcil hayvan mama ve su kaplarının ortamdan uzaklaştırılması.
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></span> Duvar diplerinin (süpürgeliklerin) ilaçlanabilmesi için hafif eşyaların çekilmesi.
              </li>
            </ul>
          </div>

          <div className="bg-pest-green/10 border border-pest-green/20 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-pest-green uppercase mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8" /> Aile ve Evcil Hayvan Güvenliği
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Ev içi uygulamalarımızda en büyük önceliğimiz, sizin ve sevdiklerinizin sağlığını riske atmadan kalıcı çözümler üretmektir.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <ShieldCheck className="w-5 h-5 text-pest-green flex-shrink-0" /> T.C. Sağlık Bakanlığı onaylı, solunum riski taşımayan ürünler.
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <ShieldCheck className="w-5 h-5 text-pest-green flex-shrink-0" /> Mobilya ve zeminlerde iz/leke bırakmayan özel formülasyonlar.
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <ShieldCheck className="w-5 h-5 text-pest-green flex-shrink-0" /> Çocuk ve evcil hayvanların ulaşamayacağı kontrollü istasyonlar.
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
                <span className="text-pest-green font-black">S.</span> {faq.q}
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
            Evinizde Huzuru Yeniden Sağlayın
          </h2>
          <p className="text-lg font-medium mb-8">
            Evinizdeki zararlı sorununuza yönelik uzman ziraat mühendislerimizden uygulama planı ve teklif almak için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=ev_daire" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
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