import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  TreePine, 
  CheckCircle, 
  Bug,
  ShieldCheck,
  Clock,
  HelpCircle,
  ArrowRight,
  PhoneCall,
  Target,
  Lock
} from 'lucide-react';

export const metadata = {
  title: "Bahçe ve Dış Alan İlaçlama | EPCON",
  description: "Sivrisinek, kene, pire, karınca gibi dış alan zararlılarına karşı peyzaj ve kullanım alanlarını koruyan mevsimsel ilaçlama hizmeti."
};

export default function BahceIlaclamaPage() {
  const faqs = [
    {
      q: "İlaçlama sonrası bahçeye ne zaman çıkabiliriz?",
      a: "Kullanılan ürünün kuruma süresine bağlı olarak (genellikle 2-3 saat), alanın çocuklardan ve evcil hayvanlardan izole edilmesi gerekir. Uzmanlarımız işlem sonrası size tam giriş saatini bildirecektir."
    },
    {
      q: "Yağmurlu havalarda dış alan ilaçlaması yapılır mı?",
      a: "Dış alan uygulamalarında hava durumu çok önemlidir. Yağmur, ilacın yüzeyden yıkanmasına neden olacağı için şiddetli yağış ve fırtınalı günlerde uygulama yapılmaz, uygun hava şartlarına ertelenir."
    },
    {
      q: "Sivrisinekler için sadece ilaçlama yeterli midir?",
      a: "Sivrisinek kontrolünde kalıcı çözüm için kaynağın kurutulması gerekir. Bahçenizdeki açık su birikintileri, saksı altlıkları, eski lastikler veya süs havuzları gibi larva üreme alanları tespit edilip biyosidal larvasit uygulamalarıyla desteklenmelidir."
    },
    {
      q: "Bahçe ilaçlaması bitkilerime zarar verir mi?",
      a: "Kullandığımız dış alan halk sağlığı ürünleri, doğrudan bitkileri kurutmak amacı taşımaz. Ancak bitki hastalıkları (zirai zararlılar) için farklı, halk sağlığı (kene, sivrisinek) için farklı yöntemler uygulandığından ziraat mühendislerimiz bitkilerinize zarar gelmemesi için doğru dozu ve yöntemi ayarlar."
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
              <TreePine className="w-4 h-4" /> MEVSİMSEL RİSK • PEYZAJ KORUMASI • ÇEVRE GÜVENLİĞİ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Bahçe ve Dış Alan <span className="text-pest-green">İlaçlama</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Bahçe, avlu, peyzaj ve dış oturma alanlarınızda mevsimsel olarak artan sivrisinek, kene, pire, karınca ve örümcek gibi zararlılara karşı koruyucu, ortam huzurunu artırıcı profesyonel uygulamalar yapıyoruz.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al?type=bahce_dis_alan" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center flex items-center justify-center gap-2">
                Dış Alan Teklifi Al <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center gap-2">
                <PhoneCall size={18} /> Uzmana Danış
              </a>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             {/* Dış kaynaklı Pexels resmi */}
             <img src="https://images.pexels.com/photos/23121630/pexels-photo-23121630.jpeg?q=80&w=1000&auto=format&fit=crop" alt="Bahçe ve Dış Alan İlaçlama" className="w-full h-full object-cover absolute inset-0 z-0" />
          </div>
        </div>
      </section>
      <ReferenceLogos />
      {/* 2. ZARARLILAR VE STRATEJİ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Bug className="text-pest-green w-7 h-7" /> Hedef Zararlılar
          </h2>
          <p className="text-navy/80 mb-6 leading-relaxed">
            Dış alanlar, özellikle bahar ve yaz aylarında ısı ve nem artışıyla birlikte zararlıların üreme ve saklanma merkezine dönüşür. Mücadele ettiğimiz başlıca türler:
          </p>
          <ul className="space-y-4">
            {[
              "Sivrisinek, yakarca ve karasinekler",
              "Kene ve pireler (Evcil hayvan riskleri)",
              "Karınca kolonileri ve örümcekler",
              "Çıyan, akrep ve yürüyen haşereler",
              "Çim ve bitki köklerine zarar veren larvalar"
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
              { title: "Keşif ve Larva Kontrolü", desc: "Ziraat mühendislerimiz su birikintisi, gübrelik veya organik atık noktalarını tespit eder." },
              { title: "Mekanik ve Fiziksel İzolasyon", desc: "Varsa budama ihtiyaçları veya su drenaj eksiklikleri raporlanarak kaynak yok edilir." },
              { title: "Çevre ve Saha Güvenliği", desc: "Uygulama yapılacak bahçe rüzgar şartlarına göre güvenlik altına alınır, uyarı levhaları asılır." },
              { title: "Profesyonel İlaçlama", desc: "Motorlu pülverizatör veya ULV cihazlarıyla hedef zararlıya yönelik rezidüel (kalıcı) sıvı uygulama yapılır." },
              { title: "Sonuç ve İzleme", desc: "Alan kuruma süresine kadar izole edilir. Rutin takip takvimi oluşturulur." }
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

      {/* 3. ÇEVRESEL RİSK VE GÜVENLİK */}
      <section className="py-20 px-6 md:px-10 bg-navy text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-pest-green/10 border border-pest-green/20 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-pest-green uppercase mb-6 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8" /> Dış Alan Stratejisi
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              Dış alan ilaçlaması, kapalı mekanlardan farklı olarak hava koşullarından (rüzgar, yağmur, güneş ışığı) doğrudan etkilenir. 
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Yağmurlu ve aşırı rüzgarlı havalarda ilacın etkisi kaybolacağı için hava durumu takibi yapılarak operasyon planlanır.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Güneşin en yoğun olduğu öğle saatleri yerine, genellikle haşere aktivitesinin arttığı akşamüstü veya sabah erken saatler tercih edilir.</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-orange-400 uppercase mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8" /> Evcil Hayvan ve Çocuk Güvenliği
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Bahçede kullanılan biyosidal ürünler, kurumadan önce temas edilmemesi gereken profesyonel formüller içerir.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Target className="w-5 h-5 text-orange-400 flex-shrink-0" /> Uygulama esnasında alan tamamen boşaltılır.
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Target className="w-5 h-5 text-orange-400 flex-shrink-0" /> İlaçlanan yüzeyler kuruyana kadar (yaklaşık 2-3 saat) evcil hayvanlar bahçeye çıkarılmamalıdır.
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Target className="w-5 h-5 text-orange-400 flex-shrink-0" /> Kedi/köpek kulübeleri veya mama kapları uygulama öncesi alandan kaldırılır.
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
            Bahçenizin Keyfini Çıkarın
          </h2>
          <p className="text-lg font-medium mb-8">
            Peyzaj ve dış kullanım alanlarınızda kene, pire, sivrisinek veya karınca endişesi olmadan güvenle vakit geçirmek için profesyonel ilaçlama planınızı hemen oluşturalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=bahce_dis_alan" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Bahçe İlaçlama Teklifi Al
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