import React from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  MapPin, 
  Search, 
  AlertTriangle, 
  Target, 
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Leaf
} from 'lucide-react';

export const metadata = {
  title: "Yılan ve Sürüngen Risk Kontrolü | Çevresel Önlem | EPCON",
  description: "Bahçe ve tesislerde yılan riskine karşı çevresel değerlendirme, kemirgen kontrolü, fiziksel önlem ve güvenli risk azaltma hizmeti."
};

export default function YilanSurungenPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Leaf className="w-4 h-4" /> ÇEVRESEL RİSK • FİZİKSEL ÖNLEM • KEMİRGEN KONTROLÜ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Yılan ve Sürüngen Risklerine Karşı <span className="text-pest-green">Çevresel Kontrol</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Bahçe, peyzaj, bina çevresi ve açık alanlardaki barınma, besin ve giriş koşulları değerlendirilerek güvenli risk azaltma planı oluşturuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors text-center shadow-lg">
                Uygulama ve Teklif Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center border border-white/20">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1000&auto=format&fit=crop" alt="Yılan ve Sürüngen Kontrolü" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 mb-12">
          <p className="text-lg text-navy font-medium leading-relaxed">
            Yılanların ve bazı sürüngenlerin görülmesi; yoğun bitki örtüsü, taş ve malzeme yığınları, su kaynakları, boşluklar veya kemirgen aktivitesiyle ilişkili olabilir. Hizmetin temel amacı kontrolsüz kimyasal kullanım değil; çevresel risklerin azaltılması, giriş noktalarının belirlenmesi ve güvenli fiziksel önlemlerin planlanmasıdır.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <MapPin className="text-pest-green w-6 h-6" /> Nerelerde Görülür?
            </h3>
            <ul className="space-y-3">
              {["Bahçe ve peyzaj alanları", "Yoğun çalılık ve yüksek ot bulunan bölgeler", "Taş, odun, palet ve malzeme yığınları", "Dere, kanal ve su kaynakları çevresi", "Boş arazi ve tesis sınırları", "Bina temel, bodrum ve kemirgen aktivitesi bulunan alanlar"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                  <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <Search className="text-pest-green w-6 h-6" /> Varlık Belirtileri
            </h3>
            <ul className="space-y-3">
              {["Canlı yılan veya sürüngen görülmesi", "Deri değişim kalıntıları", "Bahçe ve çevrede kemirgen yoğunluğu", "Kontrolsüz çalılık ve otlanma", "Duvar, temel veya kapı boşlukları", "Taş, palet ve malzeme birikimi"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                  <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <AlertTriangle className="text-orange-500 w-6 h-6" /> Oluşturduğu Riskler
            </h3>
            <ul className="space-y-3">
              {["İnsan ve evcil hayvan güvenliği açısından temas riski", "Site ve işletmelerde kullanıcı endişesi", "Kemirgen ve çevresel risklerin birlikte büyümesi", "Uygunsuz müdahalede canlıya ve kişilere zarar verme riski"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                  <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-8 flex items-center gap-3">
              <Target className="text-pest-green w-8 h-8" /> EPCON Mücadele Yaklaşımı
            </h2>
            <div className="space-y-6">
              {[
                "Alan ve çevre koşulları değerlendirilir.",
                "Olası barınma ve geçiş noktaları belirlenir.",
                "Kemirgen aktivitesi ve besin kaynağı riski kontrol edilir.",
                "Ot, çalı ve malzeme birikimleri için düzenleme önerilir.",
                "Bina giriş ve temel boşlukları tespit edilir.",
                "Fiziksel bariyer, çevre düzenleme ve güvenli bildirim planı hazırlanır."
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-navy text-white font-bold flex items-center justify-center flex-shrink-0 mt-1">{idx + 1}</div>
                  <p className="text-navy font-medium mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6">Kullanılan Yöntemler</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {["Çevresel risk analizi", "Kemirgen kontrolü", "Ot ve çalı yönetimi önerileri", "Taş, odun ve malzeme istifinin düzenlenmesi", "Kapı altı, temel ve duvar boşluklarının kapatılması", "Uygun fiziksel bariyer önerileri"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-text-mid font-medium text-sm">
                    <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
              <h4 className="font-bold text-navy flex items-center gap-2 mb-2"><AlertTriangle className="text-orange-500 w-5 h-5" /> Güvenlik ve Uyarı</h4>
              <p className="text-sm text-navy/80 leading-relaxed">Yılan görüldüğünde yaklaşılmamalı, yakalanmaya veya öldürülmeye çalışılmamalı; çevredeki kişiler ve evcil hayvanlar güvenli mesafeye alınmalıdır. Acil tehlike durumunda ilgili belediye, itfaiye veya yetkili yaban hayatı birimleriyle iletişime geçilmelidir.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
        <h3 className="font-barlowCondensed text-3xl font-bold text-navy text-center mb-10 uppercase">Sık Sorulan Sorular</h3>
        <div className="space-y-4">
          {[
            { q: "Yılan görülmesi kemirgen problemiyle ilişkili olabilir mi?", a: "Kemirgenler besin kaynağı oluşturabilir; çevredeki kemirgen aktivitesi mutlaka değerlendirilmelidir." },
            { q: "Kimyasal uygulama tek başına çözüm müdür?", a: "Çevre düzenlemesi, barınma alanlarının azaltılması, kemirgen kontrolü ve fiziksel önlemler temel unsurlardır." },
            { q: "Yılan görüldüğünde ilk ne yapılmalıdır?", a: "Güvenli mesafe korunmalı, alan boşaltılmalı ve yetkili müdahale birimlerine haber verilmelidir." }
          ].map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm flex items-start gap-4">
              <HelpCircle className="text-pest-green w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-navy mb-2">{faq.q}</h4>
                <p className="text-text-mid text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy mb-8 uppercase">İlgili Yazılar</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Bahçede Yılan Görülmesini Artıran Koşullar", href: "/bahcede-yilan-gorulmesini-artiran-kosullar" },
              { title: "Yılan Görüldüğünde Ne Yapılmalı?", href: "/yilan-goruldugunde-ne-yapilmali" },
              { title: "Kemirgen Aktivitesi ve Yılan Riski", href: "/kemirgen-aktivitesi-ve-yilan-riski" }
            ].map((blog, idx) => (
              <Link key={idx} href={blog.href} className="bg-white p-6 rounded-xl border border-border shadow-sm group hover:border-pest-green transition-all">
                <h4 className="font-bold text-navy mb-4 group-hover:text-pest-green transition-colors">{blog.title}</h4>
                <span className="text-pest-green text-sm font-bold flex items-center gap-1 group-hover:translate-x-2 transition-transform">Yazıyı İncele <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">Çevresel Yılan Riskini Birlikte Değerlendirelim</h2>
          <p className="text-lg font-medium mb-8">Görülme noktası, çevre koşulları ve varsa kemirgen aktivitesi hakkında bilgi paylaşın. Teknik ekibimiz risk azaltma ve fiziksel önlem planı için sizinle iletişime geçsin.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">Uygulama ve Teklif Talep Et</Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-transparent text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy/10 transition-colors border-2 border-navy">WhatsApp'tan Uzmana Sor</a>
          </div>
        </div>
      </section>
    </main>
  );
}