import React from 'react';
import Link from 'next/link';
import { 
  Building, 
  CheckCircle, 
  Users, 
  ShieldCheck,
  MapPin
} from 'lucide-react';

export const metadata = {
  title: "Site ve Apartman İlaçlama | Ortak Alan Uygulamaları | EPCON",
  description: "Site yönetimleri için ortak alanlar, otopark, sığınak, asansör boşlukları ve peyzaj alanlarında profesyonel ilaçlama hizmetleri."
};

export default function SiteApartmanPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Building className="w-4 h-4" /> YÖNETİM • ORTAK ALAN • PERİYODİK HİZMET
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Site ve Apartmanlara Yönelik <span className="text-pest-green">Ortak Alan İlaçlama</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Toplu yaşam alanlarında bireysel müdahaleler sorunu çözmez. Bloklar, otopark, sığınak, çöp odaları, rögarlar ve peyzaj alanları site yönetimiyle koordineli olarak aynı anda ilaçlanmalıdır.
            </p>
            <div className="pt-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Site/Apartman İlaçlama Teklifi Al
              </Link>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" alt="Site ve Apartman İlaçlama" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-white border border-border p-8 rounded-3xl shadow-sm">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <MapPin className="text-pest-green w-6 h-6" /> Ortak Alan Kontrol Noktaları
          </h3>
          <ul className="space-y-4">
            {[
              "Bina girişleri, koridorlar ve merdiven boşlukları",
              "Sığınak, bodrum, kazan dairesi ve depolar",
              "Çöp toplama alanları ve şaftlar",
              "Rögar, drenaj ve tesisat geçişleri",
              "Otoparklar ve teknik odalar",
              "Bahçe, yeşil alan ve süs havuzları çevresi"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-text-mid font-medium text-sm">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-4 flex items-center gap-3">
              <Users className="text-pest-green w-6 h-6" /> Yönetimlerle Uyumlu Çalışma
            </h3>
            <p className="text-navy/80 leading-relaxed text-sm mb-4">
              İlaçlama öncesi site sakinlerine asılmak üzere bilgilendirme afişleri/notları site yönetimine iletilir. Uygulama, sakinlerin günlük yaşamını en az etkileyecek takvimde planlanır.
            </p>
            <div className="bg-navy p-4 rounded-xl text-white text-sm font-medium flex items-center gap-3">
              <ShieldCheck className="text-pest-green w-6 h-6 flex-shrink-0" />
              TSE Belgeli, sağlık bakanlığı ruhsatlı ve profesyonel ekip.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}