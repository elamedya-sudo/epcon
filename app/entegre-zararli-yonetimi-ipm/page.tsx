import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Search, Activity, FileText, CheckCircle, ArrowRight, Settings } from 'lucide-react';

export const metadata = {
  title: "Entegre Zararlı Yönetimi (IPM) | Kurumsal Pest Kontrol | EPCON",
  description: "Risk analizi, sürekli izleme, EFT kontrolleri, hedefe yönelik müdahale, dijital raporlama ve trend analiziyle işletmenize özel Entegre Zararlı Yönetimi hizmeti."
};

export default function IpmPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block bg-pest-green/20 text-pest-green font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30 mb-6">
            RİSK ANALİZİ • SÜREKLİ İZLEME • DİJİTAL RAPORLAMA
          </span>
          <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase text-white leading-tight mb-6 max-w-4xl mx-auto">
            Zararlı Risklerini Entegre Bir Yönetim Sistemiyle Kontrol Altına Alın
          </h1>
          <p className="text-lg text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            EPCON, işletmelerdeki zararlı risklerini yalnızca periyodik ilaçlama ile değil; keşif, risk analizi, saha haritalaması, düzenli izleme, önleyici faaliyetler, hedefe yönelik müdahale, dijital raporlama ve trend analiziyle yönetir. Ziraat mühendisleri yönetiminde hazırlanan IPM programları; işletmenin faaliyet alanına, yapısal özelliklerine, denetim gerekliliklerine ve mevcut zararlı risklerine göre özel olarak planlanır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg">
              IPM Teknik Değerlendirme Talep Et
            </Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20">
              WhatsApp'tan Uzmana Sor
            </a>
          </div>
        </div>
      </section>

      {/* 2. IPM NEDİR VE NEDEN GEREKLİDİR? */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-4">Entegre Zararlı Yönetimi Nedir?</h2>
          <p className="text-text-mid mb-6 leading-relaxed">
            Entegre Zararlı Yönetimi - IPM; zararlıların yalnızca görüldüğü anda ilaçlanmasına değil, alana giriş, barınma, beslenme ve çoğalma nedenlerinin belirlenmesine dayanan bütünleşik bir yönetim sistemidir. Fiziksel, mekanik, hijyenik, yapısal ve biyosidal yöntemler birlikte değerlendirilir.
          </p>
          <p className="text-text-mid leading-relaxed">
            IPM programının amacı, aktiviteyi erken aşamada belirlemek, tekrarlayan problemlerin kaynağını azaltmak, gereksiz biyosidal ürün kullanımını önlemek, kontrol faaliyetlerini ölçülebilir hâle getirmek ve denetime hazır bir kayıt sistemi oluşturmaktır.
          </p>
        </div>
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-4">Neden Gereklidir?</h3>
          <p className="text-text-mid mb-6 text-sm">
            Sorunun yalnızca görüldüğü noktaya yapılan uygulamalar çoğu zaman geçici sonuç verir. IPM yaklaşımı mevcut zararlıyı ve sorunun tekrarına neden olan koşulları birlikte yönetir:
          </p>
          <ul className="space-y-3">
            {[
              "Yapısal açıklıklar, kapı altları, şaftlar ve tesisat geçişleri",
              "Atık, çöp, su, nem ve drenaj kaynakları",
              "Gıda, hammadde ve ürün depolama koşulları",
              "Mal kabul, sevkiyat ve personel/operasyon hareketleri",
              "Peyzaj, bina çevresi ve komşu alan riskleri",
              "Geçmiş aktivite, denetim bulguları ve şikâyet kayıtları"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-navy font-medium text-sm">
                <CheckCircle className="text-pest-green flex-shrink-0" size={18} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. 7 ADIMDA EPCON IPM UYGULAMA MODELİ */}
      <section className="py-20 px-6 md:px-10 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-4">7 Adımda EPCON IPM Uygulama Modeli</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Risk analizinden sürekli iyileştirmeye kadar denetimlere tam uyumlu kurumsal yönetim sürecimiz.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Keşif ve Risk Analizi", desc: "İşletme faaliyeti, yapı, çevre, hijyen ve geçmiş aktivite birlikte değerlendirilir." },
              { step: "02", title: "Saha Haritalaması", desc: "Kritik kontrol noktaları, istasyonlar, monitörler, EFT ve feromon ekipmanları numaralandırılarak plana işlenir." },
              { step: "03", title: "İzleme ve Erken Uyarı", desc: "Zararlı aktivitesi düzenli kontroller ve izleme ekipmanlarından elde edilen verilerle takip edilir." },
              { step: "04", title: "Önleyici ve Fiziksel Tedbirler", desc: "Giriş, barınma, su, besin ve üreme kaynaklarının azaltılmasına yönelik iyileştirmeler planlanır." },
              { step: "05", title: "Hedefe Yönelik Müdahale", desc: "İhtiyaca göre mekanik, fiziksel, yemleme, jel, larva veya ruhsat/etiket kapsamındaki biyosidal yöntemler uygulanır." },
              { step: "06", title: "Dijital Raporlama", desc: "Bulgular, uygulamalar, ürün kullanımı, ekipman durumu ve düzeltici faaliyetler kayıt altına alınır." },
              { step: "07", title: "Trend Analizi ve İyileştirme", desc: "Veriler dönemsel karşılaştırılır; servis sıklığı, ekipman yerleşimi ve müdahale planı sonuçlara göre güncellenir." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                <div className="text-pest-green font-barlowCondensed text-4xl font-bold mb-3">{item.step}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IPM HİZMET KAPSAMI */}
      <section className="py-20 px-6 md:px-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy text-center uppercase mb-12">IPM Hizmet Kapsamı</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Kemirgen Kontrolü", desc: "Fare ve sıçan risklerine karşı istasyon, mekanik sistem, giriş noktası kontrolü.", href: "/kemirgen-kontrolu" },
              { title: "Yürüyen Haşere Kontrolü", desc: "Hamamböceği, karınca ve diğer yürüyen zararlılara karşı tür teşhisi, monitörler, kaynak kontrolü.", href: "/yuruyen-hasere-mucadelesi" },
              { title: "Uçan Haşere Kontrolü", desc: "Üreme kaynağı araştırması, larva/ergin mücadelesi, EFT/UV cihaz kontrolü.", href: "/ucan-hasere-mucadelesi" },
              { title: "Depo Zararlıları Yönetimi", desc: "Tür teşhisi, feromon izleme, ürün/depo kontrolü, trend analizi.", href: "/depo-zararlilari-yonetimi" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-border group hover:border-pest-green transition-colors">
                <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">{item.title}</h3>
                <p className="text-text-mid mb-4">{item.desc}</p>
                <Link href={item.href} className="text-pest-green font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Hizmeti İncele <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALT ÇAĞRI */}
      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">
            İŞLETMENİZE ÖZEL IPM PROGRAMI OLUŞTURALIM
          </h2>
          <p className="text-lg font-medium mb-8">
            Saha risklerinizi, mevcut zararlı aktivitesini, denetim ihtiyaçlarınızı ve hizmet beklentilerinizi değerlendirelim. İşletmenize uygun, ölçülebilir ve izlenebilir bir Entegre Zararlı Yönetimi programı hazırlayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              IPM Teknik Değerlendirme Talep Et
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