import React from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  CheckCircle, 
  Target,
  Monitor
} from 'lucide-react';

export const metadata = {
  title: "İşyeri ve Ofis İlaçlama | EPCON",
  description: "Ofis, mağaza, depo ve ticari alanlarda iş akışını aksatmadan mesai dışı planlanabilen, kokusuz ve hedefli profesyonel ilaçlama hizmeti."
};

export default function IsyeriOfisPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Briefcase className="w-4 h-4" /> MESAİ DIŞI UYGULAMA • KOKUSUZ • GÜVENLİ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              İşyeri ve Ofislere Yönelik <span className="text-pest-green">Profesyonel İlaçlama</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Ticari alanlardaki zararlı problemleri itibar kaybına, personel rahatsızlığına ve teknik arızalara neden olabilir. İş akışınızı aksatmadan, elektronik ekipmanlara zarar vermeyen ve koku bırakmayan hedefli yöntemler uyguluyoruz.
            </p>
            <div className="pt-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                İşyeri İlaçlama Teklifi Al
              </Link>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" alt="Ofis ve İşyeri İlaçlama" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Target className="text-pest-green w-6 h-6" /> Ofislere Özel Yaklaşım
          </h3>
          <ul className="space-y-4">
            {[
              "Mesai saatleri dışında veya işleyişi engellemeyecek esnek çalışma saatleri.",
              "Çalışan sağlığını riske atmayan Sağlık Bakanlığı ruhsatlı ürünler.",
              "Kokusuz ve leke bırakmayan jel ve özel solüsyon uygulamaları.",
              "Mutfak, dinlenme alanları, arşiv ve teknik hacimlerin detaylı kontrolü.",
              "Zararlı girişini engelleyecek yapısal önerilerin yönetime raporlanması."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-navy font-medium text-sm">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="bg-orange-50 border border-orange-200 p-8 rounded-3xl">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-4 flex items-center gap-3">
              <Monitor className="text-orange-500 w-6 h-6" /> Elektronik Ekipman Güvenliği
            </h3>
            <p className="text-navy/80 leading-relaxed text-sm mb-4">
              Özellikle server (sunucu) odaları, kablo kanalları, bilgisayar ve pos cihazı altları hamamböceği ve kemirgenlerin sıcaklık nedeniyle tercih ettiği alanlardır. Bu alanlarda sıvı ürünler yerine ekipman güvenliğini koruyan jel, yem ve monitörler tercih edilir.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}