import React from 'react';
import Link from 'next/link';
import { 
  Wind, 
  CheckCircle, 
  Target, 
  Clock, 
  ShieldAlert, 
  Lock, 
  ClipboardCheck, 
  FileText, 
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export const metadata = {
  title: "Gaz Ölçümü ve Gazdan Arındırma | EPCON Fumigasyon",
  description: "Fumigasyon süresi tamamlandıktan sonra kontrollü havalandırma, kör nokta kontrolleri ve kalıntı gaz ölçümleri gerçekleştirilerek güvenli açılış sağlanır."
};

export default function GazOlcumuPage() {
  const faqs = [
    {
      q: "İthalatla gelen fümigeli bir konteyneri kendim açabilir miyim?",
      a: "Kesinlikle hayır. Üzerinde fümigasyon uyarı levhası bulunan veya fümige edildiği bilinen kapalı hacimler (konteyner, ambar vb.), uzman ekip tarafından gaz ölçümü yapılıp 'Gas Free' (Gazdan Arındırma) onayı verilmeden asla açılmamalıdır."
    },
    {
      q: "Gazdan arındırma işlemi ne kadar sürer?",
      a: "Süre; kullanılan fümigantın türüne, yükün ambalaj yapısına, hava sıcaklığına ve alanın havalandırma kapasitesine göre değişiklik gösterir. Doğal havalandırmanın yetersiz olduğu durumlarda mekanik havalandırma sistemleri devreye sokulur."
    },
    {
      q: "Gas Free (Gazdan Arındırma) belgesi zorunlu mu?",
      a: "Evet. Özellikle gümrük sahalarında, liman operasyonlarında ve iş sağlığı güvenliği denetimlerinde, fümige edilmiş bir yükün güvenle tahliye edilebilmesi için yetkili kurumlarca düzenlenmiş Gazdan Arındırma Belgesi ibraz edilmek zorundadır."
    },
    {
      q: "Ölçümler hangi cihazlarla yapılıyor?",
      a: "Kalıntı gaz ölçümleri; ppm (milyonda bir) düzeyinde hassasiyetle ölçüm yapabilen, periyodik kalibrasyonları tamamlanmış profesyonel dijital gaz dedektörleri ve kolorimetrik tüpler kullanılarak gerçekleştirilir."
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
              <Wind className="w-4 h-4" /> ÖLÇÜM • HAVALANDIRMA • GÜVENLİ AÇILIŞ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Gazdan Arındırma ve <span className="text-pest-green">Güvenli Kullanıma Açma</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Fumigasyon süresi tamamlandıktan sonra kontrollü havalandırma, uygun ölçüm noktaları, kör bölge kontrolleri ve kalıntı gaz ölçümleriyle alanın veya yükün güvenli koşullarda açılması sağlanır.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al?type=gaz_olcumu" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Gaz Ölçümü / Arındırma Talep Et
              </Link>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.pexels.com/photos/36826989/pexels-photo-36826989.jpeg?q=80&w=1000&auto=format&fit=crop" alt="Gaz Ölçümü ve Gazdan Arındırma" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 2. KİMLER İÇİN UYGUN & KAPSAM */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Target className="text-pest-green w-7 h-7" /> Temel Güvenlik Aşaması
          </h2>
          <p className="text-navy/80 mb-6 leading-relaxed">
            Gazdan arındırma, fumigasyondan bağımsız sonradan eklenen bir hizmet değildir. İnsan sağlığı, saha güvenliği ve sevkiyatın güvenli biçimde devam edebilmesi için fumigasyon planının başından itibaren tasarlanması gereken temel aşamadır.
          </p>
          <h3 className="font-bold text-navy mb-4">Hizmet Alanları:</h3>
          <ul className="space-y-4">
            {[
              "İthalatla gelen fümigasyonlu konteynerler",
              "Limanlara yanaşan transit gemi ambarları",
              "Fümigasyon süresi dolmuş depo ve silolar",
              "Karantina sahalarındaki ticari yükler"
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
              { title: "Saha İzolasyon Kontrolü", desc: "Yetkisiz kişilerin alanda olmadığından emin olunur." },
              { title: "Kontrollü Havalandırma", desc: "Doğal veya mekanik fan sistemleriyle gaz tahliyesi başlatılır." },
              { title: "Kalıntı Gaz Ölçümü", desc: "Uygun cihazlarla farklı derinliklerden ve kör noktalardan ölçüm alınır." },
              { title: "Yük İçi Kontroller", desc: "Özellikle ambalajlı ürünlerde gaz hapsolup olmadığı test edilir." },
              { title: "Güvenli Açılış Onayı", desc: "Ölçüm değerleri sıfırlandığında alan güvenli kullanıma açılır." }
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

      {/* 3. GÜVENLİK VE RAPORLAMA */}
      <section className="py-20 px-6 md:px-10 bg-navy text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-orange-500/10 border border-orange-500/20 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-orange-400 uppercase mb-6 flex items-center gap-3">
              <ShieldAlert className="w-8 h-8" /> Güvenli Açılış Şartı
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Alan, konteyner veya yük yalnızca yetkili personel tarafından yapılan son gaz ölçümleri ve saha kontrolü sonucunda güvenli koşullar doğrulandıktan sonra kullanıma veya sevkiyata açılmalıdır.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Operatörler, işlem sırasında tam yüz maskesi ve uygun filtre/solunum tüpü (SCBA) kullanır.</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Fümigasyon tehlike uyarı levhaları, ancak tüm ölçümler bittikten sonra yetkili ekip tarafından kaldırılır.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-pest-green uppercase mb-6 flex items-center gap-3">
              <ClipboardCheck className="w-8 h-8" /> Raporlama ve "Gas Free"
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Liman otoriteleri, gümrük memurları veya depo personeli, gazdan arındırılmış alana girmeden önce yasal olarak uygunluk sertifikası görmek zorundadır.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <ShieldCheck className="w-5 h-5 text-pest-green flex-shrink-0" /> Gazdan Arındırma (Gas Free) Belgesi
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <FileText className="w-5 h-5 text-pest-green flex-shrink-0" /> Son Kalıntı Gaz Ölçüm Raporu
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <FileText className="w-5 h-5 text-pest-green flex-shrink-0" /> Gümrük Uygunluk Evrakları
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
            Sevkiyatınızı Bekletmeyin
          </h2>
          <p className="text-lg font-medium mb-8">
            Liman, gümrük veya kendi deponuzda bulunan fümigeli yüklerinizin güvenle açılması ve "Gas Free" raporu düzenlenmesi için profesyonel destek alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=gaz_olcumu" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Ölçüm ve Arındırma Talep Et
            </Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-transparent text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy/10 transition-colors border-2 border-navy">
              WhatsApp'tan Operasyona Ulaşın
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}