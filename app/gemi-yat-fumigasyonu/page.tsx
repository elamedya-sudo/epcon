import React from 'react';
import Link from 'next/link';
import { 
  Ship, 
  ShieldAlert, 
  CheckCircle, 
  Anchor, 
  FileText, 
  HelpCircle, 
  Clock, 
  Lock, 
  ArrowRight,
  ClipboardCheck
} from 'lucide-react';

export const metadata = {
  title: "Gemi ve Yat Fumigasyonu | EPCON Fumigasyon",
  description: "Ambar, yaşam mahalli, depo, mutfak ve uygun teknik bölümler; hacim, havalandırma, mürettebat güvenliği ve operasyon takvimine göre değerlendirilir."
};

export default function GemiYatPage() {
  const faqs = [
    {
      q: "Gemi personeli içerideyken işlem yapılabilir mi?",
      a: "Hayır. Fümigasyon işlemi uygulanan kapalı bölümlerde ve riskli komşu alanlarda kesinlikle personel bulunamaz. İşlem öncesi tahliye prosedürleri katı bir şekilde uygulanır."
    },
    {
      q: "İşlem ne kadar sürer?",
      a: "Süre; geminin veya yatın hacmine, hedeflenen zararlı organizmaya ve kullanılacak fümigant türüne göre değişir. Genellikle gazlama, maruz bırakma ve havalandırma dahil olmak üzere süreç önceden detaylıca projelendirilir."
    },
    {
      q: "Uygulama sonrası hemen gemiye girilebilir mi?",
      a: "Hayır. Maruz kalma süresi bittikten sonra kontrollü havalandırma başlatılır. Gemiye veya ilgili bölüme giriş, ancak uzman ekibimizin hassas cihazlarla yapacağı 'son gaz ölçümü' sonrasında güvenli olduğu onaylandığında mümkündür."
    },
    {
      q: "Kabinlerdeki elektronik cihazlar zarar görür mü?",
      a: "Kullanılan gaza ve konsantrasyona bağlı olarak bazı cihazların izolasyonu veya alan dışına çıkarılması gerekebilir. Bu durum ön keşif sırasında teknik ekibimiz tarafından belirlenir ve tarafınıza raporlanır."
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
              <Ship className="w-4 h-4" /> DENİZCİLİKTE KONTROLLÜ FUMİGASYON
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Gemi, Yat ve Kapalı Bölümlerde <span className="text-pest-green">Fumigasyon</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Ambar, yaşam mahalli, depo, mutfak ve uygun teknik bölümler; hacim, havalandırma sistemi, mürettebat güvenliği, gaz geçiş riski ve gemi operasyon takvimi dikkate alınarak profesyonelce değerlendirilir.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al?type=gemi_yat" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Gemi / Yat Fumigasyonu Teklifi Al
              </Link>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.pexels.com/photos/12116619/pexels-photo-12116619.jpeg?q=80&w=1000&auto=format&fit=crop" alt="Gemi ve Yat Fümigasyonu" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 2. KİMLER İÇİN UYGUN & UYGULAMA ALANLARI */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Anchor className="text-pest-green w-7 h-7" /> Hizmetin Kapsamı
          </h2>
          <p className="text-navy/80 mb-6 leading-relaxed">
            Deniz araçlarında fümigasyon; armatörler, yat sahipleri, tersaneler, gemi acenteleri ve liman işletmeleri için uluslararası denizcilik kurallarına (IMO) ve yerel mevzuatlara uygun olarak sunulmaktadır.
          </p>
          <h3 className="font-bold text-navy mb-4">Uygulama Alanları:</h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {["Yaşam mahalleri", "Yük ambarları", "Mutfak ve servis bölümleri", "Depolar", "Uygun makine ve teknik alanlar", "Diğer izole edilebilir kapalı hacimler"].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0 mt-0.5" /> {item}
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
              { title: "Keşif ve Risk Analizi", desc: "Gemi planı incelenir, sızdırmazlık noktaları ve havalandırma planları kontrol edilir." },
              { title: "Mürettebat Tahliyesi", desc: "İşlem yapılacak alanlar ve riskli komşu hacimler tamamen boşaltılır." },
              { title: "İzolasyon ve Sızdırmazlık", desc: "Tüm kapı, lomboz ve havalandırma kanalları izole edilerek kilitlenir." },
              { title: "Gaz Uygulaması", desc: "Belirlenen dozda fümigant uygulanır ve maruz kalma süresi başlatılır." },
              { title: "Havalandırma ve Gazdan Arındırma", desc: "Süre bitiminde kontrollü havalandırma prosedürleri uygulanır." }
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
              <ShieldAlert className="w-8 h-8" /> Denizcilikte Güvenlik
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Gemilerde fümigasyon operasyonları kara tesislerine göre farklı riskler taşır. Uyarı levhalarının asılması, nöbetçi personel bilgilendirmesi, komşu bölümlere gaz geçiş riski ve acil durum prosedürleri titizlikle değerlendirilir.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Gemiye veya işlem alanına yetkisiz girişler tamamen engellenir.</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Alan, ancak son gaz ölçümü sıfır değerini gösterdikten sonra kullanıma açılır.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-pest-green uppercase mb-6 flex items-center gap-3">
              <ClipboardCheck className="w-8 h-8" /> Kayıt ve Raporlama
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Uluslararası liman otoriteleri ve gümrük birimleri tarafından talep edilen tüm yasal evraklar eksiksiz olarak düzenlenir. Operasyonun her adımı şeffaf bir şekilde belgelenir.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <FileText className="w-5 h-5 text-pest-green flex-shrink-0" /> Fümigasyon İşlem Sertifikası
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <FileText className="w-5 h-5 text-pest-green flex-shrink-0" /> Gazdan Arındırma (Gas Free) Belgesi
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <FileText className="w-5 h-5 text-pest-green flex-shrink-0" /> Ölçüm ve Uygunluk Raporları
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
            Geminiz İçin Profesyonel Çözüm
          </h2>
          <p className="text-lg font-medium mb-8">
            Gemi, yat veya deniz araçlarınızdaki kapalı alanların hacim, hedef zararlı ve operasyon takvimi bilgilerini paylaşın; size en uygun fümigasyon planını oluşturalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=gemi_yat" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Fümigasyon Teklifi Al
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