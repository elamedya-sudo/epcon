import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  Building, 
  CheckCircle, 
  Users, 
  ShieldCheck,
  MapPin,
  Clock,
  HelpCircle,
  ArrowRight,
  PhoneCall,
  ShieldAlert,
  Lock
} from 'lucide-react';

export const metadata = {
  title: "Site ve Apartman İlaçlama | Ortak Alan Uygulamaları | EPCON",
  description: "Site yönetimleri için ortak alanlar, otopark, sığınak, asansör boşlukları ve peyzaj alanlarında profesyonel ilaçlama hizmetleri."
};

export default function SiteApartmanPage() {
  const faqs = [
    {
      q: "Ortak alan ilaçlaması yapılırken daire içlerine böcek kaçar mı?",
      a: "Profesyonel uygulamalarımızda rögarlar, şaft boşlukları ve çöp odaları bariyerleyici ilaçlarla kontrol altına alındığı için dairelere kaçış engellenir. Ancak tam ve kesin bir izolasyon için, ortak alanlarla eş zamanlı olarak daire içlerinin de ilaçlanması en etkili çözümdür."
    },
    {
      q: "İlaçlama öncesi apartman/site sakinleri nasıl bilgilendiriliyor?",
      a: "Uygulamadan en az 48 saat önce, site yönetimine asansörlere ve panolara asılmak üzere; ilaçlamanın yapılacağı saati, kullanılacak ürünleri ve sakinlerin alması gereken basit önlemleri içeren detaylı bilgilendirme afişleri (ve dijital PDF formatları) teslim edilir."
    },
    {
      q: "Kullanılan ilaçlar bahçedeki evcil hayvanlara veya oynayan çocuklara zarar verir mi?",
      a: "Yeşil alan (bahçe) ve peyzaj ilaçlamalarında yüzeylerin kuruma süresi (yaklaşık 2-3 saat) boyunca alanın kullanılmaması istenir. Kuruma gerçekleştikten sonra çocukların veya evcil hayvanların alanı kullanmasında hiçbir sakınca yoktur."
    },
    {
      q: "Fiyatlandırma neye göre yapılıyor?",
      a: "Toplu yaşam alanlarında fiyatlandırma; blok sayısı, kat sayısı, kapalı/açık otopark büyüklüğü, sığınak/bodrum metrekareleri ve peyzaj alanının hacmine göre uzmanlarımızın yapacağı ücretsiz keşif veya mimari plan üzerinden belirlenir."
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Building className="w-4 h-4" /> YÖNETİM • ORTAK ALAN • PERİYODİK HİZMET
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Site ve Apartmanlara Yönelik <br/><span className="text-pest-green">Ortak Alan İlaçlama</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Toplu yaşam alanlarında bireysel müdahaleler sorunu çözmez. Bloklar, otopark, sığınak, çöp odaları, rögarlar ve peyzaj alanları site yönetimiyle koordineli olarak aynı anda, planlı bir şekilde ilaçlanmalıdır.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al?type=site_apartman" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center flex items-center justify-center gap-2">
                Site Yönetimi Teklifi Al <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center gap-2">
                <PhoneCall size={18} /> Uzmanla Görüş
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             {/* Dış kaynaklı Unsplash resmi bırakıldı */}
             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" alt="Site ve Apartman İlaçlama" className="w-full h-full object-cover absolute inset-0 z-0" />
          </div>
        </div>
      </section>
      <ReferenceLogos />
      {/* 2. KONTROL NOKTALARI VE SÜREÇ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <MapPin className="text-pest-green w-7 h-7" /> Kritik Ortak Alanlar
          </h2>
          <p className="text-navy/80 mb-6 leading-relaxed">
            Apartman ve sitelerde zararlıların ana üreme kaynakları genellikle göz önünde olmayan karanlık ve nemli bölgelerdir. Müdahalelerimiz tüm bu noktaları kapsar:
          </p>
          <ul className="space-y-4">
            {[
              "Bina girişleri, koridorlar ve merdiven boşlukları",
              "Sığınak, bodrum, kazan dairesi ve kömürlükler",
              "Çöp toplama alanları, çöp şutları ve havalandırma şaftları",
              "Rögar içleri, su tahliye kanalları ve drenajlar",
              "Kapalı otoparklar, asansör makine daireleri",
              "Bahçe, peyzaj alanları, süs havuzları ve kamelyalar"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-navy font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-border p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Clock className="text-pest-green w-7 h-7" /> Uygulama Süreci
          </h2>
          <div className="space-y-5">
            {[
              { title: "Keşif ve Fiyatlandırma", desc: "Sitenin fiziksel yapısı, blok sayısı ve metrekare bilgileri alınarak yönetime resmi teklif sunulur." },
              { title: "Bilgilendirme ve Koordinasyon", desc: "Site yönetimi ile tarih belirlenir ve sakinleri bilgilendirecek duyuru materyalleri iletilir." },
              { title: "Altyapı ve Rögar Müdahalesi", desc: "Zararlıların ana kaynağı olan rögar ve kanallar özel sıcak/soğuk sisleme makineleriyle ilaçlanır." },
              { title: "Ortak Alan Pülverizasyonu", desc: "Koridorlar, otoparklar ve sığınak alanlarında kokusuz sıvı ilaçlama ve jel/istasyon kurulumu yapılır." },
              { title: "Raporlama ve Evrak Teslimi", desc: "İşlem sonrası kullanılan ürünlerin EK-1 onay belgeleri ve hizmet sertifikası yönetime teslim edilir." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-navy/10 text-navy font-bold flex items-center justify-center flex-shrink-0 mt-1">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-navy">{step.title}</h4>
                  <p className="text-sm text-text-mid mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. YÖNETİM UYUMU VE YASAL ALTYAPI */}
      <section className="py-20 px-6 md:px-10 bg-navy text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-pest-green/10 border border-pest-green/20 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-pest-green uppercase mb-6 flex items-center gap-3">
              <Users className="w-8 h-8" /> Yönetimlerle Uyumlu Çalışma
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              Büyük sitelerde ilaçlama operasyonu ciddi bir organizasyon gerektirir. Sakinlerin günlük yaşamını aksatmamak ve şikayetleri minimize etmek için profesyonel bir süreç yürütülür.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Uygulama, site yönetiminin belirlediği ve trafiğin en az olduğu gün/saat dilimlerine göre esnek planlanır.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Blok içi ve merdiven boşluğu uygulamalarında ağır koku bırakan, sakinleri rahatsız edecek eski tip ilaçlar yerine Sağlık Bakanlığı onaylı kokusuz biyosidaller kullanılır.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-white uppercase mb-6 flex items-center gap-3">
              <ShieldCheck className="text-pest-green w-8 h-8" /> Yasal Evrak ve Sertifikasyon
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Site yönetimlerinin yasal sorumlulukları gereği, apartmanda yapılan tüm halk sağlığı uygulamalarının kayıt altında ve resmi belgeli olması zorunludur.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Lock className="w-5 h-5 text-pest-green flex-shrink-0" /> TSE Hizmet Yeterlilik Belgesi (HYB) ve İşlem Formları
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Lock className="w-5 h-5 text-pest-green flex-shrink-0" /> Sağlık Bakanlığı Biyosidal Uygulama İzin Belgeleri
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Lock className="w-5 h-5 text-pest-green flex-shrink-0" /> Ziraat Mühendisi onaylı Mesul Müdür Operasyon Raporu
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SIK SORULAN SORULAR */}
      <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
        <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy text-center uppercase mb-12 flex items-center justify-center gap-3">
          <HelpCircle className="text-pest-green w-8 h-8" /> Sık Sorulan Sorular
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-navy text-lg mb-3 flex items-start gap-3">
                <span className="text-pest-green font-black">Q.</span> {faq.q}
              </h3>
              <p className="text-text-mid text-sm leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ALT ÇAĞRI (CTA) */}
      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">
            Site Sakinlerinize Güven Verin
          </h2>
          <p className="text-lg font-medium mb-8">
            Toplu yaşam alanlarınızda haşere ve kemirgen problemlerini kökünden çözmek için profesyonel ilaçlama sözleşmenizi hemen oluşturalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=site_apartman" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Site/Apartman İlaçlama Teklifi Al
            </Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-transparent text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy/10 transition-colors border-2 border-navy">
              WhatsApp'tan Hemen Ulaşın
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}