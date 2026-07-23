import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  AlertOctagon, 
  CheckCircle, 
  Clock,
  ShieldAlert,
  Target,
  PhoneCall,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: "Acil Zararlı Müdahalesi | Hızlı Çözüm | EPCON",
  description: "Ani gelişen yılan, akrep veya yoğun böcek baskınlarına karşı hızlı risk değerlendirmesi ve acil zararlı müdahale hizmeti."
};

export default function AcilMudahalePage() {
  const faqs = [
    {
      q: "Evimde yılan/akrep gördüm, uzman ekip gelene kadar ne yapmalıyım?",
      a: "Asla kendi başınıza yakalamaya veya öldürmeye çalışmayın. Canlının bulunduğu odayı terk edin, kapısını kapatın ve kapı altındaki boşluğu bir havlu veya bezle sıkıca kapatarak alanı izole edin. Ardından hemen bizimle iletişime geçin."
    },
    {
      q: "Acil müdahale ekibi ne kadar sürede ulaşır?",
      a: "Aciliyet durumuna (hedef canlının tehlike seviyesine) ve o anki operasyonel yoğunluğumuza göre en hızlı şekilde bölgeye sevk sağlanır. Bu süreçte uzmanlarımız telefonda almanız gereken ilk güvenlik tedbirlerini size aktaracaktır."
    },
    {
      q: "Sadece tehlikeli türler (yılan, akrep) için mi acil servisiniz var?",
      a: "Hayır. Örneğin bir üretim tesisinde aniden patlak veren güve istilası, kedi/köpek kaynaklı yoğun pire baskınları veya ticari akışı durduran her türlü ani haşere problemi için acil müdahale hizmeti sunuyoruz."
    },
    {
      q: "Marketten alacağım zehirli spreyler işe yarar mı?",
      a: "Ani gelişen yoğun istilalarda veya tehlikeli türlerde (yılan, akrep) market ilaçları durumu daha da kötüleştirebilir. Canlıyı agresifleştirebilir veya gizli alanlara (ulaşılamayacak noktalara) kaçmasına neden olabilirsiniz."
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-orange-500/30 shadow-sm">
              <AlertOctagon className="w-4 h-4" /> ANİ BASKIN • RİSK YÖNETİMİ • HIZLI AKSİYON
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Acil Zararlı <span className="text-orange-400">Müdahalesi</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              İşletmenizde, kargonuzda veya evinizde aniden ortaya çıkan tehlikeli türlere (yılan, akrep) veya ticari akışı durduran yoğun istila durumlarına karşı hızlı teknik destek ve müdahale sağlıyoruz.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al?type=acil_mudahale" className="bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors shadow-lg inline-block text-center flex items-center justify-center gap-2">
                Acil Müdahale <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center gap-2">
                <PhoneCall size={18} /> WhatsApp'tan Yaz
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-orange-500/20 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/30 z-10 mix-blend-multiply"></div>
             {/* Dış kaynaklı resim, hata almamak için img etiketiyle bırakıldı */}
             <img src="https://images.pexels.com/photos/4176299/pexels-photo-4176299.jpeg?q=80&w=1000&auto=format&fit=crop" alt="Acil Zararlı Müdahalesi" className="w-full h-full object-cover absolute inset-0 z-0" />
          </div>
        </div>
      </section>
      <ReferenceLogos />
      {/* 2. ACİL DURUM REHBERİ & SÜREÇ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <ShieldAlert className="text-orange-500 w-7 h-7" /> Ekip Gelene Kadar Ne Yapmalısınız?
          </h2>
          <p className="text-navy/80 mb-6 leading-relaxed">
            Tehlikeli bir canlı (yılan, akrep, zehirli örümcek) ile karşılaştığınızda can güvenliğiniz her şeyden önemlidir. Aşağıdaki adımları uygulayarak alanı izole edin:
          </p>
          <ul className="space-y-4">
            {[
              "Canlıya çıplak elle veya süpürge/sopa gibi amatör ekipmanlarla temas etmeye çalışmayın.",
              "Çocukları ve evcil hayvanları o alandan derhal uzaklaştırın.",
              "Canlının bulunduğu odayı veya depoyu terk edin, kapıyı kapatın ve kapı altını bezle sıkıştırın.",
              "Eğer güvenli bir mesafedeyseniz, tür tespiti için canlının net bir fotoğrafını çekin.",
              "WhatsApp üzerinden fotoğrafı göndererek uzman teknik ekibimizden görüş ve yönlendirme talep edin."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-orange-100">
                <CheckCircle className="text-orange-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-navy font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-border p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Clock className="text-navy w-7 h-7" /> Hızlı Reaksiyon Süreci
          </h2>
          <div className="space-y-5">
            {[
              { title: "İlk Temas ve Risk Analizi", desc: "Telefonda veya WhatsApp üzerinden tür tespiti yapılır ve almanız gereken anlık güvenlik tedbirleri aktarılır." },
              { title: "Alana İntikal", desc: "Mesai saatleri içerisinde operasyon programına göre uzman ekibimiz en hızlı şekilde bölgeye sevk edilir." },
              { title: "İzolasyon ve Arama", desc: "Ekibimiz koruyucu ekipmanlarla (KKD) donatılmış olarak alana girer, riskli bölgeleri tarar ve canlıyı tespit eder." },
              { title: "Profesyonel Müdahale", desc: "Özel yakalama aparatları (yılan maşası vb.) veya ani etkili biyosidal ürünlerle canlı/istila kontrol altına alınır." },
              { title: "Son Kontrol ve Güvenlik", desc: "Alan tamamen taranır, varsa yuvalanma noktaları imha edilir ve ortamın güvenli olduğu teyit edilir." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center flex-shrink-0 mt-1">
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

      {/* 3. TEHLİKELİ TÜRLER VE YOĞUN İSTİLALAR */}
      <section className="py-20 px-6 md:px-10 bg-navy text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-orange-400 uppercase mb-6 flex items-center gap-3">
              <Target className="w-8 h-8" /> Tehlikeli Tür Müdahalesi
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Özellikle sıcak aylarda kırsal alanlardan konutlara veya fabrikalara sızan zehirli türler hayati risk taşır. Fiziksel yakalama ve uzaklaştırma yöntemleri uygulanır.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <AlertOctagon className="w-5 h-5 text-orange-400 flex-shrink-0" /> Yılan ve sürüngen yakalama operasyonları
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <AlertOctagon className="w-5 h-5 text-orange-400 flex-shrink-0" /> Akrep, zehirli örümcek ve çiyan müdahaleleri
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <AlertOctagon className="w-5 h-5 text-orange-400 flex-shrink-0" /> Eşek arısı ve yaban arısı kovanı imhası
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-pest-green uppercase mb-6 flex items-center gap-3">
              <AlertOctagon className="w-8 h-8" /> Ani Yoğun İstila Müdahalesi
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Sadece zehirli türler değil, üretim hatlarını durduran veya yaşam alanlarını yaşanmaz hale getiren böcek patlamalarında da acil sisleme (ULV) ve şok uygulamalar yapılır.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0" /> Kedi/Köpek ölümü sonrası ani pire patlamaları
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0" /> İthalat/İhracat kargolarında böcek çıkması
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0" /> Gıda tesislerinde ani güve/sinek yoğunluğu
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SIK SORULAN SORULAR */}
      <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
        <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy text-center uppercase mb-12 flex items-center justify-center gap-3">
          <HelpCircle className="text-orange-500 w-8 h-8" /> Sık Sorulan Sorular
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-navy text-lg mb-3 flex items-start gap-3">
                <span className="text-orange-500 font-black">S.</span> {faq.q}
              </h3>
              <p className="text-text-mid text-sm leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ALT ÇAĞRI (CTA) */}
      <section className="py-16 px-6 md:px-10 bg-orange-500 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">
            Panik Yapmayın, Bizi Arayın
          </h2>
          <p className="text-lg font-medium mb-8 text-white/90">
            Acil durumlarda profesyonel ekibimiz hızlı yönlendirme ve teknik destek ile yanınızda. Güvenliğinizi riske atmadan hemen bize ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=acil_mudahale" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Acil Müdahale Talep Et
            </Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-transparent text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/10 transition-colors border-2 border-white">
              WhatsApp'tan Hemen Ulaşın
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}