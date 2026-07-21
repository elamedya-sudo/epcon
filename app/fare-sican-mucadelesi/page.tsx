import React from 'react';
import Link from 'next/link';
import { 
  Leaf, 
  CheckCircle, 
  Target, 
  Clock, 
  ShieldAlert, 
  Lock, 
  ClipboardCheck, 
  FileText, 
  HelpCircle,
  UserCheck
} from 'lucide-react';

export const metadata = {
  title: "Bitki Sağlığı Uygulamaları | Ziraat Mühendisi Kontrollü | EPCON",
  description: "Bahçe, ağaç ve peyzaj bitkilerindeki zararlı ve hastalık belirtilerine yönelik, bitki sağlığı uzmanları tarafından planlanan koruyucu uygulamalar."
};

export default function BitkiIlaclamaPage() {
  const faqs = [
    {
      q: "Ağaçlarımdaki yaprak sararmasının nedeni her zaman böcek midir?",
      a: "Hayır. Yaprak sararmaları veya kurumalar sadece böceklerden (yaprak biti, kırmızı örümcek vb.) kaynaklanmaz. Mantar (fungal) hastalıkları, besin (mineral) eksikliği veya yanlış sulama gibi fizyolojik sorunlar da buna yol açabilir. Bu yüzden doğru teşhis Ziraat Mühendislerimiz tarafından yapılır."
    },
    {
      q: "Kullanılan zirai ilaçlar evcil hayvanlarıma zarar verir mi?",
      a: "Bitki koruma ürünleri (zirai ilaçlar) uygulanırken ve uygulama sonrasındaki belirli bir süre (ürün etiketine bağlı olarak) alan evcil hayvanlardan izole edilmelidir. Mühendislerimiz güvenli giriş süresi hakkında size detaylı bilgi verecektir."
    },
    {
      q: "Zirai ilaçlamayı (Bitki Koruma) kendim yapabilir miyim?",
      a: "Yanlış ilaç, yanlış zamanlama veya hatalı doz kullanımı bitkinizde 'fitotoksisiteye' (bitki zehirlenmesi ve yanması) yol açabilir. Ayrıca arılar gibi hedef dışı faydalı canlılara zarar verebilirsiniz. Bu işlem mutlaka Tarım Bakanlığı yetkili personelleri tarafından yapılmalıdır."
    },
    {
      q: "Hangi alanlardaki bitkilere müdahale ediyorsunuz?",
      a: "Site ve apartman bahçeleri, villalar, fabrika peyzaj alanları, seralar, meyve bahçeleri ve tüm yeşil alanlardaki ağaç, çim ve süs bitkilerine yönelik koruyucu/tedavi edici ilaçlama hizmeti sunuyoruz."
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
              <Leaf className="w-4 h-4" /> HASTALIKLAR • ZARARLILAR • UZMAN KONTROLÜ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Bitki Sağlığı <span className="text-pest-green">Uygulamaları</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Bahçe ve peyzaj bitkilerinizdeki yaprak sararması, dökülme, kuruma veya doğrudan gözlenen bitki zararlılarına karşı (yaprak biti, kırmızı örümcek, külleme vb.) ziraat mühendislerimiz teşhis ve uygulama planı hazırlar.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al?type=bitki_sagligi" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Bitki Sağlığı Teklifi Al
              </Link>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             {/* Yerel webp görseli buraya eklendi */}
             <img src="/images/ilaclama/bitki-ilaclama.jpg" alt="Bitki Sağlığı ve Zirai Uygulama" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 2. KARŞILAŞILAN SORUNLAR & SÜREÇ */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <Target className="text-pest-green w-7 h-7" /> Karşılaşılan Sorunlar
          </h2>
          <p className="text-navy/80 mb-6 leading-relaxed">
            Meyve ağaçları, peyzaj bitkileri ve çim alanlarda; mevsimsel değişiklikler, yanlış bakım veya bulaş yoluyla çeşitli hastalık ve zararlılar ortaya çıkabilir.
          </p>
          <ul className="space-y-4">
            {[
              "Meyve ve süs ağaçlarında böceklenme (Yaprak bitleri, kabuklu bitler vb.)",
              "Mantar (Fungal) hastalıkları kaynaklı sararma, pas veya külleme",
              "Çim alanlarda gözlenen çim kurtları veya kök hastalıkları",
              "Mevsim geçişlerinde zayıflayan bitkilerin koruma ihtiyacı",
              "Sürgün, gövde ve yaprak yiyen tırtıl türleri"
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
              { title: "Sahada Teşhis ve Keşif", desc: "Ziraat mühendislerimiz bitkideki hastalığın veya zararlının türünü yerinde teşhis eder." },
              { title: "Zirai Ürün Seçimi", desc: "Sorunun çözümüne yönelik en uygun insektisit, fungusit veya besin takviyesi belirlenir." },
              { title: "Çevre ve Saha Güvenliği", desc: "Uygulama yapılacak alan rüzgar ve hava şartlarına göre güvenlik çemberine alınır." },
              { title: "Hassas İlaçlama", desc: "Bitkinin yapısına zarar vermeyecek (fitotoksisite oluşturmayacak) basınç ve pülverizasyon teknikleriyle ilaçlama yapılır." },
              { title: "Sonuç ve İzleme", desc: "Belirli periyotlarla alan kontrol edilir, hastalık/zararlı aktivitesinin durduğu doğrulanır." }
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

      {/* 3. UZMANLIK VE BİLİNÇLİ MÜDAHALE */}
      <section className="py-20 px-6 md:px-10 bg-navy text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-pest-green/10 border border-pest-green/20 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-pest-green uppercase mb-6 flex items-center gap-3">
              <UserCheck className="w-8 h-8" /> Ziraat Mühendisliği Farkı
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              Bitki ilaçlaması, kapalı alanlardaki halk sağlığı pest kontrolünden (hamamböceği, fare vb.) tamamen farklı bir uzmanlıktır. Ev ilaçlamasında kullanılan ürünler bitkilere sıkılmaz.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Kullanılacak zirai ilaçların (pestisit), uygun oranlarda, doğru zamanda ve doğru pH değerleriyle hazırlanması şarttır.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pest-green flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/90">Ziraat Mühendislerimiz bitkinin gelişim evresini (çiçeklenme, meyve tutumu vb.) dikkate alarak takvim oluşturur.</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 p-8 rounded-2xl">
            <h2 className="font-barlowCondensed text-3xl font-bold text-orange-400 uppercase mb-6 flex items-center gap-3">
              <ShieldAlert className="w-8 h-8" /> Çevresel Risk ve Güvenlik
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Yanlış ürün, yanlış dozaj ve bilinçsiz kalibrasyon bitkinizi iyileştirmek yerine kurumasına neden olabilir. Aynı zamanda doğadaki faydalı böceklere zarar verebilirsiniz.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Lock className="w-5 h-5 text-orange-400 flex-shrink-0" /> Arılara zarar vermeyen özel uygulamalar
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Lock className="w-5 h-5 text-orange-400 flex-shrink-0" /> Fitotoksisite (Bitki zehirlenmesi) risk yönetimi
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Lock className="w-5 h-5 text-orange-400 flex-shrink-0" /> Rüzgar hızı ve sıcaklık kontrolleri
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
            Bahçeniz ve Bitkileriniz İçin Teşhis İsteyin
          </h2>
          <p className="text-lg font-medium mb-8">
            Bitkilerinizdeki sararma, kuruma veya böceklenme sorunlarını bize bildirin; uzman ziraat mühendislerimiz gerekli teşhisi koyup doğru uygulamayı planlasın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al?type=bitki_sagligi" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Bitki Sağlığı Uygulaması Talep Et
            </Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-transparent text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy/10 transition-colors border-2 border-navy">
              WhatsApp'tan Ziraat Mühendisine Danışın
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}