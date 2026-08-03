import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  Package, 
  CheckCircle, 
  AlertTriangle,
  Target,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: "ISPM 15 Metil Bromür Fumigasyonu | Ahşap Ambalaj | EPCON",
  description: "Palet, sandık, kasa, takoz ve uygun ham ahşap ambalajlara ISPM 15 kapsamında metil bromür fumigasyonu, kontrollü gazdan arındırma, ölçüm ve kayıt hizmeti."
};

export default function Ispm15Page() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* ── 1. HERO ALANI (Sol Metin, Sağ Görsel - Mobil Optimizasyonlu) ── */}
      <section className="relative bg-navy pt-6 pb-12 px-6 md:py-24 md:px-10 overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Sol Kısım: Metinler */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-4 py-1.5 rounded-full text-[11px] md:text-sm uppercase tracking-wider border border-pest-green/30 mb-4 md:mb-6">
              <Package className="w-4 h-4 hidden sm:block" /> AHŞAP AMBALAJ VE İHRACAT UYGUNLUĞU
            </span>
            <h1 className="font-barlowCondensed text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-tight mb-4 md:mb-6">
              ISPM 15 Kapsamında Ahşap Ambalajlara <br className="hidden lg:block"/> <span className="text-pest-green">Metil Bromür Fumigasyonu</span>
            </h1>
            <p className="text-sm md:text-lg text-white/80 font-light leading-relaxed max-w-2xl mb-6 md:mb-10">
              EPCON; ihracatta kullanılan uygun palet, sandık, kasa, takoz ve diğer ham ahşap ambalaj malzemelerine uluslararası geçerliliğe sahip ISPM 15 standartları kapsamında metil bromür fumigasyonu uygular.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <Link href="/ucretsiz-teklif-al?type=ispm15" className="w-full sm:w-auto bg-pest-green text-navy font-bold text-[15px] md:text-lg px-8 py-3.5 md:py-4 rounded-lg hover:bg-white transition-colors shadow-lg text-center flex items-center justify-center">
                ISPM 15 Teklifi Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white/10 text-white font-bold text-[15px] md:text-lg px-8 py-3.5 md:py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-center flex items-center justify-center">
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
                src="/images/fumigasyon/ismp-15.png" 
                alt="ISPM 15 Ahşap Ambalaj İlaçlaması" 
                className="w-full h-full object-cover block"
                loading="eager" 
              />
            </div>
          </div>

        </div>
      </section>

      <ReferenceLogos />

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-12">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-4">ISPM 15 Nedir?</h2>
          <p className="text-lg text-navy/80 leading-relaxed mb-4">
            ISPM 15, uluslararası ticarette kullanılan ahşap ambalaj malzemeleriyle taşınabilecek zararlı organizmaların yayılma riskini azaltmaya yönelik bitki sağlığı standardıdır. Web sitemizde "palet ilaçlama" yerine, kontrollü bir karantina işlemi olan "ISPM 15 kapsamında ahşap ambalajlara metil bromür fumigasyonu" ifadesi kullanılmaktadır.
          </p>
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border w-max">
            <span className="bg-navy text-white font-bold px-3 py-1 rounded">MB</span>
            <span className="text-sm font-medium text-navy">İşlem Kodu (Metil Bromür)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <Target className="text-pest-green w-6 h-6" /> Hangi Ambalajlar Değerlendirilebilir?
            </h3>
            <ul className="space-y-4">
              {[
                { t: "Paletler", d: "İhracatta kullanılan yeni veya uygun durumdaki ham ahşap paletler." },
                { t: "Sandık ve Kasalar", d: "Makine, ekipman ve ürün sevkiyatlarında kullanılan ambalajlar." },
                { t: "Takoz ve Destekler", d: "Yük sabitleme, destekleme amacıyla kullanılan ahşap parçalar." },
                { t: "Kullanılmış Ambalajlar", d: "Yapısal durumu ve önceki işaretleri teknik olarak değerlendirilenler." }
              ].map((item, idx) => (
                <li key={idx} className="bg-white border border-border p-4 rounded-xl">
                  <strong className="text-navy block mb-1">{item.t}</strong>
                  <span className="text-sm text-text-mid">{item.d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <ShieldCheck className="text-pest-green w-6 h-6" /> Güvenlik ve Gazdan Arındırma
            </h3>
            <p className="text-text-mid mb-6">Metil bromür fumigasyonu, yalnızca yetkili personel ve kontrollü uygulama sahasında yürütülmesi gereken profesyonel bir işlemdir.</p>
            <ul className="space-y-3">
              {[
                "Uygulama sahasının sınırlandırılması ve yetkisiz girişin engellenmesi",
                "Sızdırmazlık ve operasyon güvenliği kontrolleri",
                "Uygulama süresince gerekli saha kontrolleri",
                "İşlem sonunda kontrollü havalandırma ve gazdan arındırma",
                "Güvenli koşullar ölçümle doğrulanmadan kullanıma açılmaması"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-navy font-medium">
                  <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">İhracat Ahşap Ambalajlarınız İçin Uygun İşlem Planı</h2>
          <p className="text-lg font-medium mb-8">Palet, sandık, kasa veya diğer ahşap ambalaj bilgilerinizi paylaşın; teknik ekibimiz ISPM 15 kapsamında metil bromür fumigasyonu uygunluğunu değerlendirsin.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/ucretsiz-teklif-al?type=ispm15" className="w-full sm:w-auto bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg flex items-center justify-center gap-2">
              ISPM 15 Teklifi Talep Et <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}