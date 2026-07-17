import React from 'react';
import Link from 'next/link';
import { 
  Package, 
  CheckCircle, 
  AlertTriangle,
  Target,
  ShieldCheck
} from 'lucide-react';

export const metadata = {
  title: "ISPM 15 Metil Bromür Fumigasyonu | Ahşap Ambalaj | EPCON",
  description: "Palet, sandık, kasa, takoz ve uygun ham ahşap ambalajlara ISPM 15 kapsamında metil bromür fumigasyonu, kontrollü gazdan arındırma, ölçüm ve kayıt hizmeti."
};

export default function Ispm15Page() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Package className="w-4 h-4" /> AHŞAP AMBALAJ VE İHRACAT UYGUNLUĞU
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-5xl font-extrabold uppercase leading-tight">
              ISPM 15 Kapsamında Ahşap Ambalajlara <span className="text-pest-green">Metil Bromür Fumigasyonu</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              EPCON; ihracatta kullanılan uygun palet, sandık, kasa, takoz ve diğer ham ahşap ambalaj malzemelerine ISPM 15 kapsamında metil bromür fumigasyonu uygular.
            </p>
            <div className="pt-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block">
                ISPM 15 Metil Bromür Teklifi Talep Et
              </Link>
            </div>
          </div>
        </div>
      </section>

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
          <Link href="/ucretsiz-teklif-al" className="inline-block bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">ISPM 15 Metil Bromür Teklifi Talep Et</Link>
        </div>
      </section>
    </main>
  );
}