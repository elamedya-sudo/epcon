import React from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  CheckCircle, 
  Target,
  Monitor,
  Clock,
  HelpCircle,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Lock
} from 'lucide-react';

export const metadata = {
  title: "İşyeri ve Ofis İlaçlama | EPCON",
  description: "Ofis, mağaza, depo ve ticari alanlarda iş akışını aksatmadan mesai dışı planlanabilen, kokusuz ve hedefli profesyonel ilaçlama hizmeti."
};

export default function IsyeriOfisPage() {
  const faqs = [
    {
      q: "İlaçlama yapılırken ofiste çalışmaya devam edilebilir mi?",
      a: "Eğer sadece 'Jel İlaçlama' (hamamböceği veya karınca için) ve 'Kemirgen İstasyon' kurulumu yapılıyorsa alanı terk etmenize veya çalışmayı durdurmanıza gerek yoktur. Ancak kokusuz sıvı ilaçlama yapılacaksa, alanın birkaç saat boş kalması ve havalandırılması gerekir."
    },
    {
      q: "Bilgisayarlarımız ve Server (Sunucu) odası zarar görür mü?",
      a: "Kesinlikle hayır. Elektronik cihazların yoğun olduğu server odaları, kablo kanalları ve pos cihazı altlarında sıvı ilaçlama yapılmaz. Bu alanlar için neme ve elektroniğe zarar vermeyen özel jel formülasyonlar ve monitörler kullanılır."
    },
    {
      q: "İlaçlama sonrası ofiste koku veya eşyalarda leke kalır mı?",
      a: "Hayır. Ofis uygulamalarında Sağlık Bakanlığı onaylı, su bazlı ve tamamen kokusuz biyosidal ürünler tercih edilir. Mobilyalarınızda, halılarınızda veya evraklarınızda herhangi bir leke, iz veya koku oluşmaz."
    },
    {
      q: "Uygulamayı mesai saatleri dışında yaptırabilir miyiz?",
      a: "Evet. İş akışınızın aksamaması bizim için önceliklidir. İlaçlama operasyonumuzu ofisinizin kapalı olduğu akşam saatlerine, gece vardiyasına veya hafta sonlarına planlayabiliyoruz."
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
              <Briefcase className="w-4 h-4" /> MESAİ DIŞI UYGULAMA • KOKUSUZ • GÜVENLİ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              İşyeri ve Ofislere Yönelik <br/><span className="text-pest-green">Profesyonel İlaçlama</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Ticari alanlardaki zararlı problemleri itibar kaybına, personel rahatsızlığına ve teknik arızalara neden olabilir. İş akışınızı aksatmadan, elektronik ekipmanlara zarar vermeyen ve koku bırakmayan hedefli yöntemler uyguluyoruz.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al?type=isyeri_ofis" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center flex items-center justify-center gap-2">
                İşyeri Teklifi Al <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center gap-2">
                <PhoneCall size={18} /> Uzmanla Görüş
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             {/* Dış kaynaklı Unsplash resmi */}
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" alt="Ofis ve İşyeri İlaçlama" className="w-full h-full object-cover absolute inset-0 z-0" />
          </div>
        </div>
      </section>

      {/* 2. OFİSLERE ÖZEL YAKLAŞIM VE SÜREÇ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Target className="text-pest-green w-7 h-7" /> Ofislere Özel Yaklaşım
          </h2>
          <p className="text-navy/80 mb-6 leading-relaxed">
            Ofisler, kalabalık personel yapısı ve yoğun gıda tüketimi (mutfak/dinlenme alanları) nedeniyle zararlılar için cazip hedeflerdir. Ticari itibarınızı korumak için özel bir protokol izliyoruz:
          </p>
          <ul className="space-y-4">
            {[
              "Mutfak, dinlenme alanları ve arşivlerin detaylı taranması.",
              "Kokusuz, leke bırakmayan ve su bazlı ürün tercihleri.",
              "Çalışan sağlığını riske atmayan Sağlık Bakanlığı ruhsatlı ürünler.",
              "Zararlı girişini engelleyecek yapısal sorunların (çatlak, boşluk) raporlanması.",
              "Periyodik bakım (IPM) ile sorunun kalıcı olarak engellenmesi."
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
            <Clock className="text-pest-green w-7 h-7" /> Operasyon Süreci
          </h2>
          <div className="space-y-5">
            {[
              { title: "Risk Analizi ve Planlama", desc: "Ziraat mühendislerimiz çalışma ortamınızı inceleyerek zararlı türünü ve yoğunluğunu tespit eder." },
              { title: "Esnek Zaman Çizelgesi", desc: "İş akışınızı kesintiye uğratmamak adına uygulamalar mesai dışı (akşam, hafta sonu) olarak planlanır." },
              { title: "Güvenli ve Hedefli İlaçlama", desc: "Sıvı pülverizasyon, jel yemleme veya kemirgen monitör kurulumu gibi alana en uygun kombinasyon uygulanır." },
              { title: "Havalandırma ve Temizlik Uyarıları", desc: "İşlem sonrası ne kadar süre sonra alana girileceği ve temizlik prosedürleri yetkiliye aktarılır." },
              { title: "Dijital Raporlama", desc: "Yapılan işlemler, kullanılan ürünler ve karekodlu istasyon takipleri dijital olarak tarafınıza raporlanır." }
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

      {/* 3. ELEKTRONİK EKİPMAN GÜVENLİĞİ VE BİLİNÇLİ MÜDAHALE */}
      <section className="py-20 px-6 md:px-10 bg-navy text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-orange-500/10 border border-orange-500/20 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-orange-400 uppercase mb-6 flex items-center gap-3">
              <Monitor className="w-8 h-8" /> Elektronik Ekipman Güvenliği
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              Özellikle server (sunucu) odaları, kablo kanalları, bilgisayar kasaları, yazıcılar ve pos cihazı altları hamamböceği ve farelerin sıcaklık nedeniyle yuvalanmayı en çok sevdiği alanlardır.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Bu hassas alanlarda cihazları bozabilecek veya kısa devre yaptıracak **sıvı ürünler kesinlikle kullanılmaz.**</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Ekipman güvenliğini koruyan, cihazların içine zerk edilebilen mikroskobik damlalar halindeki **özel jel yemler** tercih edilir.</span>
              </li>
            </ul>
          </div>

          <div className="bg-pest-green/10 border border-pest-green/20 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-pest-green uppercase mb-6 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8" /> İş Sağlığı ve Güvenliği (İSG)
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Kurumsal firmaların yasal denetim süreçleri için gerekli olan tüm dökümantasyon ve yasal altyapı EPCON güvencesi altındadır.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0" /> Sağlık Bakanlığı Biyosidal Uygulama İzin Belgesi
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0" /> EK-1 (Kullanılan İlaçların Listesi) ve MSDS Formları
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0" /> Karekod destekli kemirgen gözlem istasyonları
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
            İş Akışınız Aksamasın
          </h2>
          <p className="text-lg font-medium mb-8">
            Personelinizi ve ticari itibarınızı korumak için ofis ortamına özel kokusuz ve güvenli ilaçlama planınızı hemen oluşturalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=isyeri_ofis" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Ofis İlaçlama Teklifi Al
            </Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-transparent text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy/10 transition-colors border-2 border-navy">
              WhatsApp'tan Bize Ulaşın
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}