import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  ShieldAlert, 
  MapPin, 
  Search, 
  AlertTriangle, 
  Target, 
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Bug
} from 'lucide-react';

export const metadata = {
  title: "Akrep ve Örümcek Mücadelesi | Bahçe ve Bina Kontrolü | EPCON",
  description: "Akrep ve örümcek barınma alanı, giriş noktası ve çevresel risk değerlendirmesiyle profesyonel kontrol hizmeti. EPCON’dan teklif alın."
};

export default function AkrepOrumcekPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Bug className="w-4 h-4" /> BARINMA ALANI • GİRİŞ NOKTASI • ÇEVRESEL RİSK
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Akrep ve Örümcek Risklerine Karşı <span className="text-pest-green">Kontrollü Müdahale</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Bina çevresi, bahçe, bodrum, taşlık alanlar ve yapısal giriş noktaları değerlendirilerek mekâna özel risk azaltma ve hedefli uygulama planı oluşturuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/ucretsiz-teklif-al?type=akrep_orumcek" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors text-center shadow-lg">
                Uygulama ve Teklif Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center border border-white/20">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.pexels.com/photos/33210386/pexels-photo-33210386.png?q=80&w=1000&auto=format&fit=crop" alt="Akrep ve Örümcek Mücadelesi" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>
      <ReferenceLogos />

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 mb-12">
          <p className="text-lg text-navy font-medium leading-relaxed">
            Akrep ve örümcekler; taş, odun, malzeme yığınları, çatlaklar, bodrumlar, teknik alanlar ve böcek yoğunluğu bulunan bölgelerde barınabilir. Mücadelede yalnızca görülen canlıya değil, barınma alanlarına, giriş noktalarına ve besin kaynağı olan diğer böceklere de odaklanılır.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <MapPin className="text-pest-green w-6 h-6" /> Nerelerde Görülür?
            </h3>
            <ul className="space-y-3">
              {["Bodrum, otopark ve teknik odalar", "Taş, odun ve malzeme yığınları", "Bahçe ve peyzaj alanları", "Depo, çatı ve tavan araları", "Duvar çatlakları, kapı ve pencere çevreleri", "Az kullanılan karanlık hacimler"].map((item, idx) => (
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
              {["Canlı akrep veya örümcek görülmesi", "Yoğun ağ oluşumu", "Taş ve malzeme altında aktivite", "Bodrum ve karanlık alanlarda tekrar eden görülme", "Böcek yoğunluğunun artması", "Çatlak ve giriş noktalarında hareketlilik"].map((item, idx) => (
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
              {["Akrep sokması ve bazı örümceklerde temas riski", "Kullanıcı ve çalışanlarda güvenlik endişesi", "Bahçe ve ortak alanlarda şikâyet artışı", "Diğer böcek yoğunluğuyla birlikte problemin sürmesi"].map((item, idx) => (
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
                "Tür ve riskli alan değerlendirilir.",
                "Barınma alanları ve giriş noktaları belirlenir.",
                "Taş, odun, atık ve malzeme birikimleri kontrol edilir.",
                "Besin kaynağı olabilecek diğer böcekler değerlendirilir.",
                "Uygun alanlarda hedefli uygulama yapılır.",
                "Yapısal ve çevresel önlem önerileri raporlanır."
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
                {["Hedefli yüzey ve çatlak-boşluk uygulamaları", "Mekanik temizlik ve ağ uzaklaştırma önerileri", "Kapı altı, pencere ve tesisat boşluğu kontrolleri", "Bahçe ve yapı çevresi risk azaltımı", "Diğer böceklerin kontrolü", "Takip ve tekrar kontrolü"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-text-mid font-medium text-sm">
                    <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
              <h4 className="font-bold text-navy flex items-center gap-2 mb-2"><AlertTriangle className="text-orange-500 w-5 h-5" /> Güvenlik ve Uyarı</h4>
              <p className="text-sm text-navy/80 leading-relaxed">Akrep veya tanımlanamayan riskli bir canlıya çıplak elle müdahale edilmemeli; çocuklar ve evcil hayvanlar alandan uzak tutulmalıdır. Sokma veya şüpheli temas durumunda acil sağlık hizmetine başvurulmalıdır.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
        <h3 className="font-barlowCondensed text-3xl font-bold text-navy text-center mb-10 uppercase">Sık Sorulan Sorular</h3>
        <div className="space-y-4">
          {[
            { q: "Örümceklerin artması başka bir soruna işaret eder mi?", a: "Yoğun böcek aktivitesi örümcekler için besin kaynağı oluşturabilir; diğer zararlılar da değerlendirilmelidir." },
            { q: "Bahçedeki taş ve odunlar risk oluşturur mu?", a: "Uzun süre hareket ettirilmeyen taş, odun ve benzeri malzemeler barınma alanı oluşturabilir." },
            { q: "Akrep görüldüğünde ne yapılmalı?", a: "Yaklaşılmamalı, çıplak elle müdahale edilmemeli ve profesyonel destek alınmalıdır." }
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
              { title: "Akrepler Evlere Nereden Girer?", href: "/akrepler-evlere-nereden-girer" },
              { title: "Bahçede Akrep Riskini Azaltma Yöntemleri", href: "/bahcede-akrep-riskini-azaltma-yontemleri" },
              { title: "Örümcek Yoğunluğu Neden Artar?", href: "/orumcek-yogunlugu-neden-artar" }
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
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">Akrep ve Örümcek Risk Alanlarını İnceleyelim</h2>
          <p className="text-lg font-medium mb-8">Canlının görüldüğü bölüm ve çevre koşullarını paylaşın. Teknik ekibimiz güvenli saha değerlendirmesi ve risk azaltma planı için sizinle iletişime geçsin.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=akrep_orumcek" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">Uygulama ve Teklif Talep Et</Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-transparent text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy/10 transition-colors border-2 border-navy">WhatsApp'tan Uzmana Sor</a>
          </div>
        </div>
      </section>
    </main>
  );
}