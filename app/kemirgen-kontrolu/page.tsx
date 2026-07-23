import React from 'react';
import Link from 'next/link'; // Link bileşeni import edildi
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  ShieldAlert, 
  AlertTriangle, 
  Crosshair, 
  MapPin, 
  Building2, 
  CheckCircle,
  Search,
  Activity 
} from 'lucide-react';

export const metadata = {
  title: "Kemirgen Kontrolü | Fare ve Sıçan Mücadelesi | EPCON",
  description: "Risk analizi, güvenli istasyonlar, mekanik kontrol, giriş noktası tespiti ve dijital raporlama ile profesyonel fare ve sıçan yönetimi."
};

export default function KemirgenKontroluPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <ShieldAlert className="w-4 h-4" /> KEMİRGEN İZLEME VE KONTROL PROGRAMI
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Fare ve Sıçan Risklerini <span className="text-pest-green">Kaynağında Yönetin</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              EPCON, fare ve sıçan aktivitesini yalnızca yem tüketimi üzerinden değil; giriş yolları, barınma alanları, besin kaynakları ve çevresel koşullarla birlikte değerlendirir. Risk esaslı istasyon yerleşimi, düzenli izleme, mekanik kontrol ve dijital raporlama ile alana özel kemirgen yönetim programları oluşturur.
            </p>
            {/* HERO BUTONLARI GÜNCELLENDİ */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/ucretsiz-teklif-al?type=kemirgen" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors text-center shadow-lg">
                Teknik Değerlendirme Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center border border-white/20">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.pexels.com/photos/69221/pexels-photo-69221.jpeg" alt="Kemirgen İzleme ve Kontrol" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      <ReferenceLogos />
      {/* 2. NEDEN ÖNEMLİDİR & AKTİVİTE BELİRTİLERİ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy uppercase">
            Kemirgen Kontrolü Neden Önemlidir?
          </h2>
          <p className="text-text-mid leading-relaxed text-lg">
            Fare ve sıçanlar; gıda ürünlerinde kontaminasyona, ambalaj ve ekipmanlarda hasara, elektrik tesisatlarında arızalara ve işletmelerde hijyen risklerine neden olabilir.
          </p>
          <div className="bg-slate-50 border-l-4 border-pest-green p-6 rounded-r-xl">
            <p className="text-navy font-medium">
              Kalıcı kontrol için yalnızca yemleme değil, aktivite kaynağının ve giriş yollarının da belirlenmesi gerekir.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <AlertTriangle className="text-orange-500 w-6 h-6" /> Sık Karşılaşılan Aktivite Belirtileri
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Dışkı ve idrar izleri",
              "Gece saatlerinde hareket sesleri",
              "Kemirilmiş ambalaj, kablo ve yapı malzemeleri",
              "Yuva ve barınma bulguları",
              "Duvar diplerinde sürtünme izleri",
              "Yem tüketimi ve ürün hasarı"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                <CheckCircle className="text-pest-green flex-shrink-0 w-5 h-5 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. UYGULAMA MODELİ */}
      <section className="py-20 px-6 md:px-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold text-navy uppercase mb-4">
              Uygulama Modeli
            </h2>
            <p className="text-text-mid max-w-2xl mx-auto text-lg">
              İşletmenizi kemirgen risklerine karşı korumak için tasarlanmış bütünleşik kontrol aşamalarımız.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: <Search className="w-7 h-7" />, title: "Keşif ve Risk Analizi" },
              { icon: <MapPin className="w-7 h-7" />, title: "Saha Haritalaması ve Numaralandırma" },
              { icon: <Activity className="w-7 h-7" />, title: "Yem Tüketimi ve Aktivite Takibi" },
              { icon: <Crosshair className="w-7 h-7" />, title: "Kilitli İstasyon ve Mekanik Kapan" },
              { icon: <Building2 className="w-7 h-7" />, title: "Giriş Noktaları ve Düzeltici Raporlama" }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center group hover:border-pest-green transition-colors relative">
                {idx !== 4 && <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-slate-200 z-0"></div>}
                
                <div className="w-14 h-14 bg-navy/5 text-navy group-hover:bg-pest-green group-hover:text-white rounded-full flex items-center justify-center mb-4 transition-colors relative z-10">
                  {step.icon}
                </div>
                <div className="w-6 h-6 rounded-full bg-pest-green text-white text-xs flex items-center justify-center font-bold absolute -top-3 -right-3 shadow-md border-2 border-white">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-navy text-sm uppercase">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HİZMET ALANLARI */}
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-8">Hizmet Verilen Alanlar</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Gıda Tesisleri", "Fabrikalar", "Depolar", "Lojistik Merkezleri", 
              "Havalimanları", "Oteller", "Hastaneler", "Eğitim Kurumları", 
              "Siteler", "Konutlar"
            ].map((alan, idx) => (
              <span key={idx} className="bg-slate-100 text-navy px-4 py-2 rounded-full text-sm font-medium border border-slate-200">
                {alan}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALT ÇAĞRI (CTA) - BUTONLAR GÜNCELLENDİ */}
      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">
            Kemirgen Riskini İzlenebilir Bir Programla Yönetin
          </h2>
          <p className="text-lg font-medium mb-8">
            Alanınıza özel istasyon yerleşimi, izleme sıklığı ve kontrol programı için teklif talep edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=kemirgen" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Kemirgen Kontrolü Talep Et
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