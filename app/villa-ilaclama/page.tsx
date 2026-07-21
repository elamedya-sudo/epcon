import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  CheckCircle, 
  ShieldAlert, 
  Target,
  TreePine,
  Layers,
  Clock,
  HelpCircle,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Lock
} from 'lucide-react';

export const metadata = {
  title: "Villa İlaçlama Hizmetleri | İç ve Dış Alan | EPCON",
  description: "Villalar için iç alan, bahçe, çatı, bodrum ve peyzaj alanlarını kapsayan, ziraat mühendisleri yönetiminde profesyonel ilaçlama hizmeti."
};

export default function VillaIlaclamaPage() {
  const faqs = [
    {
      q: "Villamda evcil hayvanım var, ilaçlama zarar verir mi?",
      a: "Kullandığımız ürünler Sağlık Bakanlığı ve WHO onaylıdır. İç alanlarda genellikle evcil hayvanlara zararsız kokusuz jel formülasyonlar tercih edilir. Bahçe ilaçlamasında ise ürün kuruyana kadar (yaklaşık 2-3 saat) evcil hayvanınızın dışarı çıkarılmaması güvenliği sağlamak için yeterlidir."
    },
    {
      q: "Sadece bahçeyi ilaçlatmam yeterli olur mu?",
      a: "Bahçedeki zararlılar (karınca, kırkayak, fare, örümcek) mevsim geçişlerinde besin ve sıcaklık arayışıyla mutlaka iç alanlara, bodruma veya çatı aralarına yönelir. Tam ve kesin koruma için iç ve dış alanların eş zamanlı entegre ilaçlanmasını öneriyoruz."
    },
    {
      q: "İlaçlama sonrası villadan ayrılmamız veya temizlik yapmamız gerekiyor mu?",
      a: "Kokusuz sıvı pülverizasyon ve jel uygulamalarında villayı terk etmenize gerek yoktur. Leke veya koku bırakmadığı için kapsamlı bir genel temizlik (özellikle süpürgelik diplerinde) yapmamanız, ilacın kalıcılığını koruması açısından daha faydalıdır."
    },
    {
      q: "Hangi sıklıkla villa ilaçlaması yaptırmalıyım?",
      a: "Villaların yeşil alan yoğunluğuna ve bulunduğu bölgenin nem/sıcaklık oranına göre değişmekle birlikte, özellikle bahar ve yaz aylarında dışarıdan gelen kene, pire, sivrisinek gibi risklere karşı periyodik bakım (IPM) takvimi oluşturulması en güvenli yöntemdir."
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
              <Home className="w-4 h-4" /> İÇ ALAN • BAHÇE • ÇATI • BODRUM
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Villanıza Özel <br/><span className="text-pest-green">Bütünleşik İlaçlama</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Villalar; geniş iç hacimleri, peyzaj alanları ve farklı kat seviyeleriyle kompleks yapılardır. Zararlı problemlerine karşı yalnızca ev içini değil; bahçe, bodrum, çatı, otopark ve bina çevresini bütüncül bir stratejiyle koruma altına alıyoruz.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al?type=villa" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center flex items-center justify-center gap-2">
                Villa Teklifi Al <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center gap-2">
                <PhoneCall size={18} /> Uzmana Danış
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             {/* Dış Kaynaklı Unsplash Resmi (Değiştirilmedi) */}
             <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" alt="Villa İlaçlama" className="w-full h-full object-cover absolute inset-0 z-0" />
          </div>
        </div>
      </section>

      {/* 2. KONTROL ALANLARI VE SÜREÇ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Layers className="text-pest-green w-7 h-7" /> Kapsamlı Kontrol
          </h2>
          <p className="text-navy/80 mb-6 leading-relaxed">
            Müstakil yapıların zararlılara karşı zafiyeti fazladır. Dışarıdan içeriye doğru çok katmanlı bir bariyer (IPM) sistemi kuruyoruz:
          </p>
          <div className="space-y-4">
            {[
              { t: "İç Alanlar (Yaşam Alanı)", d: "Mutfak, banyo, yatak odaları ve kiler gibi gıda/nem noktalarında hamamböceği, karınca gibi yürüyen haşerelere karşı hedefli ve kokusuz uygulamalar." },
              { t: "Bahçe ve Peyzaj (Dış Alan)", d: "Sivrisinek, kene, pire, örümcek gibi dış alan zararlılarına karşı bitki dokusuna zarar vermeyen özel yüzey/larva uygulamaları." },
              { t: "Altyapı ve Gizli Boşluklar", d: "Bodrum, çatı arası, rögarlar, garaj ve tesisat şaftlarında sıçan/fare popülasyonunu kaynağında kesen istasyon kurulumları." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-pest-green transition-colors">
                <div className="text-5xl font-black text-slate-100 absolute -right-4 -bottom-4 group-hover:text-pest-green/10 transition-colors">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-navy mb-1 relative z-10">{step.t}</h4>
                <p className="text-sm text-text-mid relative z-10">{step.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-border p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Clock className="text-pest-green w-7 h-7" /> Uygulama Süreci
          </h2>
          <div className="space-y-5">
            {[
              { title: "Risk Analizi ve Keşif", desc: "Ziraat mühendislerimiz villanızın konumu, yeşil alan yoğunluğu ve altyapı risklerini değerlendirir." },
              { title: "İç Alan Hedefli Müdahale", desc: "Yaşam alanlarında koku bırakmayan, eşyalarınıza zarar vermeyen jel yemleme ve bariyer pülverizasyonu yapılır." },
              { title: "Dış Alan İzolasyonu", desc: "Bina çevresine, duvar diplerine ve bahçeye dışarıdan girişi engelleyecek kalıcı çevre bariyeri oluşturulur." },
              { title: "Kemirgen İstasyon Kurulumu", desc: "Rögar, otopark ve bahçe köşelerine dış etkenlere dayanıklı karekodlu kemirgen yemleme monitörleri yerleştirilir." },
              { title: "Raporlama ve İzleme", desc: "Kullanılan biyosidallerin listesi, güvenlik süreleri ve periyodik takip takvimi tarafınıza rapor olarak sunulur." }
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

      {/* 3. AİLE GÜVENLİĞİ VE YAKLAŞIM */}
      <section className="py-20 px-6 md:px-10 bg-navy text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-pest-green/10 border border-pest-green/20 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-pest-green uppercase mb-6 flex items-center gap-3">
              <TreePine className="w-8 h-8" /> Profesyonel Yaklaşım
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              Müstakil yaşantınızın konforunu ve mahremiyetinizi ön planda tutarak, gün içi akışınızı bozmadan operasyonel süreçleri yönetiyoruz.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Eşyalarınızı taşımanıza veya mutfak dolaplarınızı tamamen boşaltmanıza gerek bırakmayan mikro enjeksiyon yöntemleri tercih edilir.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Yalnızca ilaçlama yapmakla kalınmaz, eve zararlı girişine neden olan izolasyon eksiklikleri tespit edilip tarafınıza raporlanır.</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-orange-400 uppercase mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8" /> Çocuk ve Evcil Hayvan Güvenliği
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Ev içi ve bahçe uygulamalarımızda en büyük önceliğimiz, sizin ve ailenizin can güvenliğidir.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <ShieldAlert className="w-5 h-5 text-orange-400 flex-shrink-0" /> Sağlık Bakanlığı onaylı, solunumla zarar vermeyen ürünler
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <ShieldAlert className="w-5 h-5 text-orange-400 flex-shrink-0" /> Evcil hayvanların ulaşamayacağı noktalara hedeflenen jel uygulamaları
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <ShieldAlert className="w-5 h-5 text-orange-400 flex-shrink-0" /> Kemirgen istasyonlarında çocuk/pet kilitli kapalı sistemler
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
            Müstakil Hayatın Keyfini Çıkarın
          </h2>
          <p className="text-lg font-medium mb-8">
            Evinizin, bahçenizin ve ailenizin güvenliğini riske atmadan; haşere ve kemirgen sorunlarınızı kalıcı olarak çözmek için ziraat mühendislerimizden teklif alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=villa" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Villa İlaçlama Teklifi Al
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