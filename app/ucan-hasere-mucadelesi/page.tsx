import React from 'react';
import Link from 'next/link';
import { 
  Wind, 
  Droplets, 
  Bug, 
  CheckCircle, 
  Zap, 
  Target,
  BarChart
} from 'lucide-react';

export const metadata = {
  title: "Uçan Haşere Kontrolü | Sivrisinek ve Karasinek | EPCON",
  description: "Sivrisinek, karasinek ve küçük sinekler için kaynak tespiti, larva kontrolü, ULV ve izleme programları."
};

export default function UcanHaserePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Wind className="w-4 h-4" /> LARVA VE ERGİN DÖNEM KONTROLÜ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Uçan Haşerelere Karşı <span className="text-pest-green">Bütünleşik Kontrol</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Sivrisinek, karasinek ve küçük sinek risklerini yalnızca ergin uygulamalarıyla değil; üreme kaynaklarının tespiti, larva mücadelesi, fiziksel önlemler, izleme ve hedefe yönelik uygulamalarla birlikte yönetiyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/ucretsiz-teklif-al?type=ucan" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors text-center shadow-lg">
                Uygulama ve Teklif Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center border border-white/20">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.pexels.com/photos/31731152/pexels-photo-31731152.jpeg?q=80&w=1000&auto=format&fit=crop" alt="Uçan Haşere Kontrolü" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 2. ZARARLILAR VE ÜREME KAYNAKLARI */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Bug className="text-pest-green w-6 h-6" /> Kapsanan Zararlılar
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Sivrisinek", 
              "Karasinek", 
              "Küçük ev sinekleri", 
              "Drenaj ve gider sinekleri", 
              "Sirke sinekleri", 
              "Tatarcıklar"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-text-mid font-medium text-sm">
                <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Droplets className="text-orange-500 w-6 h-6" /> Üreme Kaynakları
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Durgun su birikintileri",
              "Rögar ve drenaj hatları",
              "Atık ve çöp alanları",
              "Organik ürün kalıntıları",
              "Giderler ve ıslak hacimler",
              "Süs havuzları",
              "Hayvan barınakları"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. YÖNETİM MODELİ */}
      <section className="py-20 px-6 md:px-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold text-navy uppercase mb-4">
            Yönetim Modeli
          </h2>
          <p className="text-text-mid max-w-2xl mx-auto text-lg">
            Sadece ergin sineklere değil, sorunun kaynağına inen çok yönlü uygulama aşamalarımız.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { title: "Üreme Kaynağı Tespiti", desc: "Su birikintileri, rögarlar ve atık alanları tespit edilerek haritalandırılır." },
            { title: "Larva Kontrolü", desc: "Ruhsat ve etiket kapsamına uygun olarak larva oluşumunu engelleyen biyosidal ürünler uygulanır." },
            { title: "Ergin Mücadelesi", desc: "Saha koşullarına göre rezidüel, lokal veya ULV (Soğuk Sisleme) uygulamaları gerçekleştirilir." },
            { title: "Fiziksel Önlem Önerileri", desc: "Sineklik, hava perdesi, giriş noktası yönetimi ve atık alanı iyileştirme raporları sunulur." }
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-border shadow-sm flex items-start gap-4 hover:border-pest-green transition-colors">
              <div className="w-10 h-10 rounded-full bg-navy text-white font-bold flex items-center justify-center flex-shrink-0 mt-1">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg">{step.title}</h4>
                <p className="text-text-mid text-sm mt-2 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EFT / UV CİHAZ İZLEME PROGRAMI */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Zap className="text-pest-green w-8 h-8" /> EFT Kontrol ve İzleme Programı
          </h2>
          <p className="text-text-mid leading-relaxed mb-6">
            EFT/UV sinek tutucu cihazlar, uçan haşere aktivitesini takip etmek ve yoğunluk değişimini erken aşamada görmek için kullanılan en önemli izleme araçlarıdır.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Cihaz numarası, konumu ve genel çalışma durumu",
              "UV lambalarının çalışma ve değişim ihtiyacının değerlendirilmesi",
              "Yapışkan levha doluluğu ve değişim tarihinin kontrolü",
              "Yakalama miktarının ve gözlenen uçan zararlı grupları",
              "Cihaz ve dönem bazında aktivite trendi",
              "Temizlik, bakım veya konum değişikliği önerileri"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-navy font-medium text-sm">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
          <div className="bg-pest-green/10 border border-pest-green/20 p-5 rounded-xl flex items-start gap-3">
            <BarChart className="text-navy w-6 h-6 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-navy mb-1">EFT Verilerinin Kullanımı</h4>
              <p className="text-navy/80 text-sm leading-relaxed">
                Yoğun yakalama görülen alanlarda üreme kaynağı araştırması, giriş noktası kontrolü, hijyen iyileştirmesi, cihaz konumunun güncellenmesi veya hedefe yönelik ek müdahale planlanır.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
           <img src="https://images.pexels.com/photos/36649487/pexels-photo-36649487.jpeg?q=80&w=1000&auto=format&fit=crop" alt="EFT Cihaz Kontrolü" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* 5. HİZMET ALANLARI */}
      <section className="py-16 px-6 md:px-10 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-8">Hizmet Verilen Alanlar</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Siteler", "Bahçeler", "Gıda Tesisleri", "Fabrikalar", 
              "Restoranlar", "Oteller", "Havalimanları", "Hastaneler", 
              "Atık Alanları", "Açık Oturma Alanları"
            ].map((alan, idx) => (
              <span key={idx} className="bg-slate-100 text-navy px-4 py-2 rounded-full text-sm font-medium border border-slate-200">
                {alan}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ALT ÇAĞRI (CTA) */}
      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">
            Larvadan Ergine Uçan Haşere Riskini Yönetin
          </h2>
          <p className="text-lg font-medium mb-8">
            Mevsimsel koşullara ve saha risklerine uygun program için teklif talep edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=ucan" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
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