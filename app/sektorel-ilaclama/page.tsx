import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  Home, 
  Building, 
  Briefcase, 
  TreePine, 
  Leaf, 
  AlertOctagon, 
  ShieldCheck, 
  ArrowRight,
  ClipboardCheck,
  UserCheck,
  Info
} from 'lucide-react';

export const metadata = {
  title: "Profesyonel İlaçlama Hizmetleri | Konut, İşyeri ve Bahçe | EPCON",
  description: "Ev, villa, site, apartman, ofis ve bahçelere özel ziraat mühendisleri yönetiminde profesyonel ilaçlama ve bitki sağlığı uygulamaları."
};

export default function IlaclamaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI (Sol Metin, Sağ Görsel - Mobil Optimizasyonlu) */}
      <section className="relative bg-navy pt-6 pb-12 px-6 md:py-24 md:px-10 overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Sol Kısım: Metinler */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-block bg-pest-green/20 text-pest-green font-bold px-4 py-1.5 rounded-full text-[11px] md:text-sm uppercase tracking-wider border border-pest-green/30 mb-4 md:mb-6">
              KONUT • VİLLA • SİTE • İŞYERİ • BİTKİ SAĞLIĞI
            </span>
            <h1 className="font-barlowCondensed text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-tight mb-4 md:mb-6">
              Yaşam ve Çalışma Alanlarınıza Özel <br className="hidden lg:block"/> <span className="text-pest-green">Profesyonel İlaçlama</span>
            </h1>
            <p className="text-[13px] md:text-lg text-white/80 font-light leading-relaxed max-w-2xl mb-6 md:mb-10 line-clamp-4 md:line-clamp-none">
              Ev, villa, site, apartman, ofis, mağaza ve diğer yaşam veya çalışma alanlarında karşılaşılan zararlılara yönelik tek seferlik ve dönemsel uygulamalar gerçekleştiriyoruz. Bahçe ve peyzaj alanlarında ise bitki türü, zararlı veya hastalık belirtisi ve çevresel koşullar değerlendirilerek ziraat mühendisleri yönetiminde bitki sağlığı uygulamaları planlıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <Link href="/ucretsiz-teklif-al?type=ilaclama_genel" className="w-full sm:w-auto bg-pest-green text-navy font-bold text-[15px] md:text-lg px-6 md:px-8 py-3.5 md:py-4 rounded-lg hover:bg-white transition-colors shadow-lg text-center flex items-center justify-center">
                Uygulama Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white/10 text-white font-bold text-[15px] md:text-lg px-6 md:px-8 py-3.5 md:py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-center flex items-center justify-center">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>

          {/* Sağ Kısım: Görsel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative mt-4 lg:mt-0">
            {/* Görsel arkası yeşil parlama (glow) efekti */}
            <div className="absolute inset-0 bg-pest-green opacity-20 blur-[80px] rounded-full z-0"></div>
            
            {/* Şık çerçeveli görsel alanı */}
            <div className="relative z-10 w-full max-w-[450px] aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-navy-deeper">
              <img 
                src="/images/ilaclama/1.png" 
                alt="Profesyonel İlaçlama Uygulamaları" 
                className="w-full h-full object-cover block"
                loading="eager" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. GÜVEN BANDI */}
      <section className="bg-pest-green py-4 px-6 relative z-20 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3 text-navy font-bold text-sm md:text-base">
          <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> TSE-HYB Belgeli</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Biyosidal Uygulama İzinli</span>
          <span className="flex items-center gap-2"><UserCheck className="w-5 h-5" /> Ziraat Mühendisleri Yönetiminde</span>
          <span className="flex items-center gap-2"><ClipboardCheck className="w-5 h-5" /> Alana Özel Uygulama</span>
        </div>
      </section>

      <ReferenceLogos />

      {/* 3. HİZMET KARTLARI */}
      <section className="py-20 px-6 md:px-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Home className="w-8 h-8 text-pest-green" />, title: "Ev ve Daire İlaçlama", desc: "Hamamböceği, karınca, pire, tahta kurusu ve diğer ev zararlılarına yönelik mekâna özel uygulamalar.", href: "/ev-daire-ilaclama" },
              { icon: <Building className="w-8 h-8 text-pest-green" />, title: "Villa İlaçlama", desc: "İç alan, bahçe, bodrum, çatı, rögar ve bina çevresini birlikte değerlendiren kapsamlı hizmet.", href: "/villa-ilaclama" },
              { icon: <Building className="w-8 h-8 text-pest-green" />, title: "Site ve Apartman İlaçlama", desc: "Bloklar, ortak alanlar, otopark, çöp odaları, rögarlar, peyzaj ve teknik alan uygulamaları.", href: "/site-apartman-ilaclama" },
              { icon: <Briefcase className="w-8 h-8 text-pest-green" />, title: "İşyeri ve Ofis İlaçlama", desc: "Ofis, mağaza, depo ve ticari alanlarda çalışma düzenine uygun hedefli uygulamalar.", href: "/isyeri-ofis-ilaclama" },
              { icon: <TreePine className="w-8 h-8 text-pest-green" />, title: "Bahçe ve Dış Alan İlaçlama", desc: "Sivrisinek, karasinek, pire, kene ve dış alan zararlılarına yönelik mevsimsel uygulamalar.", href: "/bahce-dis-alan-ilaclama" },
              { icon: <Leaf className="w-8 h-8 text-pest-green" />, title: "Bitki Sağlığı Uygulamaları", desc: "Bahçe ve peyzaj bitkilerindeki zararlı ve hastalık belirtilerine yönelik ziraat mühendisi kontrollü uygulamalar.", href: "/bitki-ilaclama" },
              { icon: <AlertOctagon className="w-8 h-8 text-orange-500" />, title: "Acil Zararlı Müdahalesi", desc: "Ani veya yoğun aktivitede risk seviyesinin değerlendirilmesi ve uygun müdahale planı.", href: "/acil-zararli-mudahalesi" }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-border group hover:border-pest-green transition-all flex flex-col h-full">
                <div className="mb-4">{srv.icon}</div>
                <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">{srv.title}</h3>
                <p className="text-text-mid text-sm mb-6 flex-grow">{srv.desc}</p>
                <Link href={srv.href} className="text-pest-green font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Hizmeti İncele <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 4 ADIMDA UYGULAMA SÜRECİ & MÜHENDİSLİK YAKLAŞIMI */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy uppercase mb-10">
              4 Adımda Uygulama Süreci
            </h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Talep ve Ön Bilgilendirme", desc: "Mekân, alan büyüklüğü, zararlı veya bitki sorunu hakkında bilgi alınır." },
                { step: "2", title: "Teknik Değerlendirme", desc: "Uygun ürün, yöntem, uygulama alanı ve güvenlik tedbirleri belirlenir." },
                { step: "3", title: "Profesyonel Uygulama", desc: "Eğitimli personel tarafından plan ve ürün talimatlarına göre uygulama yapılır." },
                { step: "4", title: "Bilgilendirme ve Takip", desc: "Temizlik, alana giriş, koruyucu önlemler ve gerekirse takip bilgisi verilir." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-navy text-pest-green font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg">{item.title}</h4>
                    <p className="text-text-mid text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <UserCheck className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5" />
            <h3 className="font-barlowCondensed text-3xl font-bold uppercase mb-6 relative z-10">
              Ziraat Mühendisleri Yönetiminde Uygulama
            </h3>
            <p className="text-white/80 leading-relaxed mb-6 relative z-10">
              Her zararlı ve bitki problemi aynı yöntemle kontrol edilemez. EPCON teknik ekibi; hedef zararlıyı, mekânın özelliklerini, kullanım koşullarını ve çevresel riskleri değerlendirerek uygun uygulama yöntemini belirler.
            </p>
            <div className="bg-white/10 p-5 rounded-xl border border-white/20 relative z-10">
              <h4 className="font-bold flex items-center gap-2 mb-2 text-pest-green">
                <Info className="w-5 h-5" /> Güvenlik Önceliği
              </h4>
              <p className="text-sm text-white/90 leading-relaxed">
                Biyosidal uygulamalarda ilgili alana uygun ruhsatlı ürünler kullanılır. Uygulama öncesinde gerekli hazırlıklar, uygulama sonrasında ise alana giriş ve kullanım koşulları müşteriye açıkça açıklanır.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}