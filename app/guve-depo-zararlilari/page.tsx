import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  PackageSearch, 
  MapPin, 
  Search, 
  AlertTriangle, 
  Target, 
  CheckCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: "Güve ve Depo Zararlıları Mücadelesi | EPCON",
  description: "Tür teşhisi, feromon izleme, depo hijyeni, trend analizi ve fumigasyon değerlendirmesiyle güve ve depo zararlıları yönetimi."
};

export default function GuveDepoPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <PackageSearch className="w-4 h-4" /> TÜR TEŞHİSİ • FEROMON İZLEME • TREND ANALİZİ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Güve ve Depolanmış Ürün Zararlılarına Karşı <span className="text-pest-green">Profesyonel Yönetim</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Ürün, ambalaj, depo koşulları ve zararlı türü birlikte değerlendirilerek izleme, kaynak kontrolü, trend analizi ve gerektiğinde fumigasyon seçenekleri planlanır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/ucretsiz-teklif-al?type=guve_depo" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors text-center shadow-lg">
                Uygulama ve Teklif Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center border border-white/20">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=1000&auto=format&fit=crop" alt="Depo Zararlıları Mücadelesi" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>
      <ReferenceLogos />
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 mb-12">
          <p className="text-lg text-navy font-medium leading-relaxed">
            Gıda güveleri, un biti, tahıl biti ve diğer depolanmış ürün zararlıları ürün, hammadde, ambalaj ve depo boşluklarında gelişebilir. Başarılı yönetim için tür teşhisi, ürün kaynağının belirlenmesi, feromon izleme, hijyen ve stok yönetimi birlikte ele alınmalıdır.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <MapPin className="text-pest-green w-6 h-6" /> Nerelerde Görülür?
            </h3>
            <ul className="space-y-3">
              {["Tahıl, bakliyat, un ve yem depoları", "Kuru gıda üretim ve stok alanları", "Market, mağaza ve restoran depoları", "Silo ve hammadde kabul alanları", "Üretim hatları ve ekipman boşlukları", "Evlerde kuru gıda dolapları"].map((item, idx) => (
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
              {["Uçan güve veya küçük böcekler", "Ürün içinde larva, böcek veya kabuk kalıntıları", "Ambalaj yüzeylerinde delik", "Ağlanma, topaklanma veya ürün döküntüsü", "Feromon tuzaklarında yakalama artışı", "Belirli raf veya ürün grubunda yoğunluk"].map((item, idx) => (
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
              {["Ürün kaybı ve kalite bozulması", "Hammadde ve bitmiş ürüne çapraz yayılma", "Üretim ve depolamada denetim uygunsuzluğu", "Müşteri şikâyeti ve marka itibarı kaybı"].map((item, idx) => (
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
                "Zararlı türü teşhis edilir.",
                "Ürün, ambalaj ve depo alanı kontrol edilir.",
                "Feromon tuzakları uygun noktalara yerleştirilir.",
                "Tuzak bazında yakalama ve trend verileri takip edilir.",
                "Depo hijyeni, ürün döküntüsü ve stok rotasyonu değerlendirilir.",
                "Yoğunluk ve ürün uygunluğuna göre fumigasyon teknik değerlendirmesi yapılır."
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
                {["Feromon izleme tuzakları", "Görsel ve fiziksel ürün kontrolleri", "Hedefli yüzey uygulamaları", "Temizlik ve hijyen önerileri", "Ürün ayrıştırma ve stok rotasyonu", "Uygun koşullarda fumigasyon", "Dijital trend analizi"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-text-mid font-medium text-sm">
                    <CheckCircle className="text-pest-green w-4 h-4 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
              <h4 className="font-bold text-navy flex items-center gap-2 mb-2"><AlertTriangle className="text-orange-500 w-5 h-5" /> Güvenlik ve Uyarı</h4>
              <p className="text-sm text-navy/80 leading-relaxed">Ürün bulunan alanlarda biyosidal uygulama kararı ürün güvenliği, etiket, mevzuat ve proses şartlarına göre verilir. Kontamine veya şüpheli ürünler işletmenin kalite ve gıda güvenliği prosedürlerine göre ayrılmalıdır.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
        <h3 className="font-barlowCondensed text-3xl font-bold text-navy text-center mb-10 uppercase">Sık Sorulan Sorular</h3>
        <div className="space-y-4">
          {[
            { q: "Feromon tuzakları zararlıyı tamamen yok eder mi?", a: "Feromon tuzakları öncelikle tür ve yoğunluk takibinde kullanılır; tek başına bütün problemi ortadan kaldıran yöntem değildir." },
            { q: "Fumigasyon her durumda gerekli midir?", a: "Hayır. Ürün, yoğunluk, yayılım, sıcaklık ve depo koşulları değerlendirilerek karar verilir." },
            { q: "Şüpheli ürün ne yapılmalıdır?", a: "İşletmenin kalite ve gıda güvenliği prosedürlerine göre karantinaya alınmalı ve teknik incelemeye tabi tutulmalıdır." }
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
              { title: "Gıda Güvesi Nasıl Anlaşılır?", href: "/gida-guvesi-nasil-anlasilir" },
              { title: "Un Biti ve Tahıl Zararlıları", href: "/un-biti-ve-tahil-zararlilari" },
              { title: "Feromon Tuzakları Ne İşe Yarar?", href: "/feromon-tuzaklari-ne-ise-yarar" }
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
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">Depo Zararlısını ve Ürün Kaynağını Değerlendirelim</h2>
          <p className="text-lg font-medium mb-8">Ürün türü, depo yapısı ve gözlemlediğiniz belirtileri paylaşın. Teknik ekibimiz izleme, kontrol ve gerekiyorsa fumigasyon değerlendirmesi için sizinle iletişime geçsin.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=guve_depo" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">Uygulama ve Teklif Talep Et</Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-transparent text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy/10 transition-colors border-2 border-navy">WhatsApp'tan Uzmana Sor</a>
          </div>
        </div>
      </section>
    </main>
  );
}