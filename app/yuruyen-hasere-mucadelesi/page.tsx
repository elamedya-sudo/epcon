import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  ShieldAlert, 
  AlertTriangle, 
  Crosshair, 
  MapPin, 
  Building2, 
  CheckCircle,
  Search,
  Activity,
  ShieldCheck,
  Bug,
  Target,
  Shield 
} from 'lucide-react';

export const metadata = {
  title: "Yürüyen Haşere Mücadelesi | EPCON",
  description: "Hamamböceği, karınca ve diğer yürüyen zararlılara karşı tür teşhisi, hedefli biyosidal uygulama ve takip hizmetleri."
};

export default function YuruyenHaserePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <ShieldCheck className="w-4 h-4" /> HEDEFE YÖNELİK BİYOSİDAL UYGULAMALAR
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Yürüyen Haşerelere Karşı <span className="text-pest-green">Risk Odaklı Mücadele</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Hamamböceği, karınca ve diğer yürüyen zararlıların türünü, yoğunluğunu, giriş yollarını ve barınma alanlarını belirleyerek mekâna özel mücadele programları hazırlıyoruz. Uygulama yöntemi; hedef zararlı, alanın kullanım amacı ve risk seviyesi dikkate alınarak seçilir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/ucretsiz-teklif-al?type=yuruyen" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors text-center shadow-lg">
                Uygulama ve Teklif Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center border border-white/20">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.pexels.com/photos/4176541/pexels-photo-4176541.jpeg?q=80&w=1000&auto=format&fit=crop" alt="Yürüyen Haşere Mücadelesi" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      <ReferenceLogos />
      {/* KAPSAM VE RİSKLİ ALANLAR */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Bug className="text-pest-green w-6 h-6" /> Kapsanan Zararlılar
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {["Hamamböceği", "Karınca", "Gümüşçün", "Tesbih böceği", "Örümcek", "Akrep", "Kahverengi kokarca", "Diğer yürüyen zararlılar"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-text-mid font-medium text-sm">
                <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <MapPin className="text-orange-500 w-6 h-6" /> Riskli Alanlar
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Mutfak ve gıda alanları",
              "Lavabo, gider ve ıslak hacimler",
              "Depolar ve mal kabul alanları",
              "Rögar ve kanalizasyon bağlantıları",
              "Elektrik ve mekanik odalar",
              "Şaftlar, tesisat geçişleri, çatlaklar",
              "Bina çevresi ve peyzaj"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MÜCADELE YAKLAŞIMI VE GÜVENLİK */}
      <section className="py-20 px-6 md:px-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-8 flex items-center gap-3">
              <Target className="text-pest-green w-8 h-8" /> Mücadele Yaklaşımımız
            </h2>
            <div className="space-y-6">
              {[
                { title: "Tür ve Kaynak Tespiti", desc: "Uygulama öncesi saha analiz edilerek zararlının türü ve yoğunluk merkezleri belirlenir." },
                { title: "Fiziksel ve Hijyenik Önlemler", desc: "Zararlının barınma ve beslenme kaynaklarını ortadan kaldıracak yapısal öneriler sunulur." },
                { title: "Hedefe Yönelik Uygulamalar", desc: "Alana uygun şekilde jel, yem, çatlak-yarık ve hedefli yüzey uygulamaları gerçekleştirilir." },
                { title: "Monitör ve Takip Sistemi", desc: "Zararlı aktivitesini izlemek için yapışkan monitörler kullanılır, dış alan ve rögar bariyerleri oluşturulur." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-navy text-white font-bold flex items-center justify-center flex-shrink-0 mt-1">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{step.title}</h4>
                    <p className="text-text-mid text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-navy p-10 rounded-3xl text-white relative overflow-hidden">
            <Shield className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5" />
            <h3 className="font-barlowCondensed text-3xl font-bold uppercase mb-6 relative z-10">Güvenlik ve Ruhsatlı Ürünler</h3>
            <p className="text-white/80 leading-relaxed mb-6 relative z-10">
              T.C. Sağlık Bakanlığı tarafından ruhsatlandırılmış biyosidal ürünler; hedef zararlı, alan kullanımı ve etiket talimatlarına göre uygulanır. 
            </p>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20 relative z-10 text-sm">
              <strong>Önemli Not:</strong> Hazırlık, bekleme ve kullanım koşulları uygulama öncesinde müşterimize net bir şekilde bildirilir.
            </div>
          </div>
        </div>
      </section>

      {/* ALT ÇAĞRI (CTA) */}
      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">
            Yürüyen Haşere Sorununu Kaynağında Kontrol Altına Alın
          </h2>
          <p className="text-lg font-medium mb-8">
            Zararlı türüne ve alanın özelliklerine uygun mücadele programı talep edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=yuruyen" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
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