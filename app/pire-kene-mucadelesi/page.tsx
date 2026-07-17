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
  Bug
} from 'lucide-react';

export const metadata = {
  title: "Pire ve Kene Mücadelesi | İç ve Dış Alan | EPCON",
  description: "Ev, site, bahçe ve hayvan yaşam alanlarında pire ve kene risk değerlendirmesi, uygulama ve tekrar kontrolü. EPCON’dan teklif alın."
};

export default function PireKenePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Bug className="w-4 h-4" /> YAŞAM DÖNGÜSÜ • İÇ VE DIŞ ALAN • TEKRAR KONTROLÜ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Pire ve Kene Risklerine Karşı <span className="text-pest-green">Planlı Mücadele</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Hayvan hareketleri, çevresel kaynaklar, iç ve dış alan koşulları birlikte değerlendirilerek hedefe yönelik uygulama, hazırlık ve tekrar kontrolü planlıyoruz.
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
             <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1000&auto=format&fit=crop" alt="Pire ve Kene Mücadelesi" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 2. KISA BİLGİ & RİSKLİ ALANLAR */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 mb-12">
          <p className="text-lg text-navy font-medium leading-relaxed">
            Pire ve kene aktivitesi evcil veya sahipsiz hayvan hareketleri, bahçe ve peyzaj koşulları, bodrum-depo çevreleri ve tekstil yüzeyleriyle ilişkili olabilir. Yaşam döngüsünün farklı evreleri nedeniyle yalnızca görülen bireylere müdahale etmek yeterli olmayabilir; kaynak, çevre ve takip birlikte planlanmalıdır.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <MapPin className="text-pest-green w-6 h-6" /> Nerelerde Görülür?
            </h3>
            <ul className="space-y-3">
              {["Evcil hayvan bulunan evler", "Bahçe, çim ve peyzaj alanları", "Site ortak alanları", "Hayvan barınakları ve kulübeler", "Depo, bodrum ve otopark çevreleri", "Sahipsiz hayvanların yoğun bulunduğu alanlar"].map((item, idx) => (
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
              {["İnsan veya hayvan üzerinde fark edilen aktivite", "Evcil hayvan yatakları çevresinde hareketlilik", "Halı ve kumaş yüzeylerde sıçrayan küçük zararlılar", "Bahçe veya çalılık alanlarda kene görülmesi", "Tekrarlayan kaşınma ve şikâyet bildirimleri", "Hayvan dinlenme noktalarında yoğunluk"].map((item, idx) => (
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
              {["İnsan ve hayvanlarda rahatsızlık ve ısırılma riski", "Bazı kene türlerinde sağlık açısından vektör riski", "Yaşam alanlarında hızlı yayılma ve tekrar oluşma", "Site ve işletmelerde kullanıcı şikâyeti"].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                  <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. MÜCADELE YAKLAŞIMI VE YÖNTEMLER */}
      <section className="py-20 px-6 md:px-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-8 flex items-center gap-3">
              <Target className="text-pest-green w-8 h-8" /> EPCON Mücadele Yaklaşımı
            </h2>
            <div className="space-y-6">
              {[
                "Kaynak ve yoğunluk tespiti yapılır.",
                "Hayvan hareketleri ve dinlenme alanları değerlendirilir.",
                "İç ve dış alanlar birlikte incelenir.",
                "Tekstil, zemin ve peyzaj alanına uygun uygulama planlanır.",
                "Temizlik, süpürme, tekstil ve hayvan yönetimi talimatları verilir.",
                "Yaşam döngüsüne göre tekrar kontrolü yapılır."
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
                {["Hedefli iç alan yüzey uygulamaları", "Bahçe ve dış alan uygulamaları", "Mekanik temizlik ve vakum önerileri", "Tekstil yıkama ve eşya yönetimi", "Hayvan dinlenme noktalarının kontrolü", "Tekrar kontrolü ve şikâyet takibi"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-text-mid font-medium text-sm">
                    <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
              <h4 className="font-bold text-navy flex items-center gap-2 mb-2"><AlertTriangle className="text-orange-500 w-5 h-5" /> Güvenlik ve Uyarı</h4>
              <p className="text-sm text-navy/80 leading-relaxed">Evcil hayvanlar uygulama alanından çıkarılmalı; mama, su kapları ve oyuncaklar korunmalıdır. Hayvan üzerindeki tedaviler veteriner hekim tarafından değerlendirilmelidir. Isırılma veya sağlık şikâyetlerinde sağlık kuruluşuna başvurulmalıdır.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SSS */}
      <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
        <h3 className="font-barlowCondensed text-3xl font-bold text-navy text-center mb-10 uppercase">Sık Sorulan Sorular</h3>
        <div className="space-y-4">
          {[
            { q: "Pire neden tekrar görülebilir?", a: "Yaşam döngüsünün farklı evreleri çevrede bulunabilir; hazırlık, temizlik ve tekrar kontrolü önemlidir." },
            { q: "Sadece evcil hayvana uygulama yeterli olur mu?", a: "Çevresel alanlarda bulunan evreler nedeniyle hayvan ve yaşam alanı ayrı uzmanlıklar kapsamında birlikte ele alınmalıdır." },
            { q: "Kene görüldüğünde ne yapılmalı?", a: "Canlıya çıplak elle temas edilmemeli; sağlık riski veya ısırılma durumunda sağlık profesyoneline başvurulmalıdır." }
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

      {/* 5. İLGİLİ BLOG YAZILARI */}
      <section className="py-16 px-6 md:px-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy mb-8 uppercase">İlgili Yazılar</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Evde Pire Olduğu Nasıl Anlaşılır?", href: "/evde-pire-oldugu-nasil-anlasilir" },
              { title: "Pire Uygulaması Öncesi Hazırlık", href: "/pire-uygulamasi-oncesi-hazirlik" },
              { title: "Bahçelerde Kene Riskini Artıran Koşullar", href: "/bahcelerde-kene-riskini-artiran-kosullar" }
            ].map((blog, idx) => (
              <Link key={idx} href={blog.href} className="bg-white p-6 rounded-xl border border-border shadow-sm group hover:border-pest-green transition-all">
                <h4 className="font-bold text-navy mb-4 group-hover:text-pest-green transition-colors">{blog.title}</h4>
                <span className="text-pest-green text-sm font-bold flex items-center gap-1 group-hover:translate-x-2 transition-transform">Yazıyı İncele <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ALT ÇAĞRI (CTA) */}
      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">Pire ve Kene Kaynağını Birlikte Değerlendirelim</h2>
          <p className="text-lg font-medium mb-8">İç veya dış alanı, hayvan hareketini ve görülen yoğunluğu paylaşın. Teknik ekibimiz uygun hazırlık, uygulama ve tekrar kontrolü için sizinle iletişime geçsin.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">Uygulama ve Teklif Talep Et</Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-transparent text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy/10 transition-colors border-2 border-navy">WhatsApp'tan Uzmana Sor</a>
          </div>
        </div>
      </section>
    </main>
  );
}