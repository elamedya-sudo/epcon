import React from "react";
import { Quote, ChevronDown, CheckCircle2 } from "lucide-react";
import AnimatedStats from "@/components/AnimatedStats";

export const metadata = {
  title: "Hakkımızda | EPCON İlaçlama",
  description: "EPCON Çevre Sağlığı Sistemleri San. Ve Tic. Ltd. Şti. kurumsal bilgileri, kalite politikası, misyon ve vizyonumuz.",
};

export default function AboutPage() {
  // Kurum Logoları (Resimleri public/images/uyekurum/ klasörüne attığında buradaki yollarla eşleşecek)
  const partners = [
    "/images/uyekurum/114-ulusal-zehir-danisma-merkezi.webp",
    "/images/uyekurum/anadolu-sigorta-guvencesiyle-1.webp",
    "/images/uyekurum/aust.webp",
    "/images/uyekurum/halk-sagligi.webp",
    "/images/uyekurum/hudut-ve-sahiller.webp",
    "/images/uyekurum/tarim-bakanligi.webp",
    "/images/uyekurum/tse-hyp-1.webp",
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow overflow-hidden">
      
      {/* İnfite Scroll Animasyonu İçin CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}} />

      {/* 1. ÜST MAVİ BANNER */}
      <section className="w-full bg-navy py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight mb-4 md:mb-0">
            Hakkımızda
          </h1>
          <div className="text-white/60 text-sm">
            <a href="/" className="hover:text-pest-green transition-colors">Anasayfa</a> 
            <span className="mx-2">/</span> 
            <span className="text-white">Hakkımızda</span>
          </div>
        </div>
      </section>

      {/* 2. BİZ KİMİZ? BÖLÜMÜ */}
      <section className="py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <p className="font-barlowCondensed text-sm font-semibold tracking-[0.12em] uppercase text-text-muted">
              Biz Kimiz?
            </p>
            <h2 className="font-barlowCondensed text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              Epcon Çevre Sağlığı Sistemleri San. Ve Tic. Ltd. Şti.
            </h2>
            <div className="prose prose-sm text-text-mid leading-relaxed">
              <p>
                Haşere ve zararlıların denetimi engellenmesi ve kontrol altına alınması, konularında hizmet verebilmek amacıyla kurulmuştur.
              </p>
              <p className="mt-4">
                Firmamız, insan ve çevre sağlığı için oldukça önem taşıyan haşere ve zararlılara karşı mücadelede alışılagelmiş ilaçlama yöntemi yerine bilgi, araştırma, inceleme, fiziksel önlemlerin tespiti ve uygulanması, ekipman, gözlem, uygulama, raporlama, analiz ve eğitimden oluşan entegre pest kontrol sistemini en son teknolojiyi kullanarak, profesyonel bir yaklaşım içerisinde uygulamaktadır.
              </p>
              <p className="mt-4">
                Firmamız uygulamadaki bu farklı yaklaşımı sayesinde eğitim kurumları, hastane, otel, banka, fabrika, konut ve iş yerlerinin (Haşere ve zararlıların insan, gıda ve çevre sağlığını tehdit ettiği tüm alanlarda) haşere ve zararlılardan arındırılmasını sağlamaktadır.
              </p>
              <p className="mt-4">
                Teknik ekibimiz ziraat mühendislerinden oluşmakta ve düzenli eğitime tabi tutularak en modern araç ve ekipmanlarla hizmet sunmaktadır. Dünya Sağlık örgütü ( WHO ) ve Sağlık Bakanlığı onaylı, çevre ve insan sağlığına duyarlı kimyasallar kullanmaktadır.
              </p>
            </div>
          </div>
          
          {/* Temsili Teknoloji/Laboratuvar Görseli */}
          <div className="relative">
            <div className="absolute inset-0 bg-pest-green/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="/images/uyekurum/hak.webp" 
              alt="EPCON Laboratuvar ve Ar-Ge" 
              className="rounded-3xl shadow-xl relative z-10 object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </section>

      {/* 3. ÜYESİ OLDUĞUMUZ KURUMLAR (KAYAN BANT) */}
      <section className="py-16 border-t border-border bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-10">
          <h3 className="font-barlowCondensed text-2xl md:text-3xl font-extrabold uppercase text-navy">
            Üyesi Olduğumuz Kurumlar
          </h3>
        </div>
        
        {/* Kayan Slider Wrapper */}
        <div className="w-full overflow-hidden flex relative">
          <div className="w-[200%] flex items-center justify-around animate-scroll">
            {/* Logoları iki kez basıyoruz ki kesinti olmasın */}
            {[...partners, ...partners].map((logo, index) => (
              <div key={index} className="w-48 h-24 mx-4 bg-white border border-border/50 rounded-xl flex items-center justify-center p-4 shadow-sm grayscale hover:grayscale-0 transition-all duration-300">
                {/* DÜZELTME: Hata fırlatan onError metodu tamamen silindi */}
                <img 
                  src={logo} 
                  alt="Kurum Logosu" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. İRTİBATTA OLALIM & ALINTI BÖLÜMÜ */}
      <section className="py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h3 className="font-barlowCondensed text-3xl font-bold text-navy mb-4">
              İrtibatta Olalım!
            </h3>
            <p className="text-text-mid leading-relaxed text-sm">
              EPCON Çevre Sağlığı Sistemleri olarak bireysel ve kurumsal firmalara profesyonel ilaçlama hizmeti veriyoruz. İstanbul Ümraniye’de konuşlu firmamız Türkiye’de ilaçlama alanında uzman yetkinlik belgelerine sahip en iyi ilaçlama firmalarından biridir.
            </p>
          </div>
          
          <div className="bg-[#f5f7ff] p-8 md:p-10 rounded-2xl relative">
            <Quote size={60} className="absolute top-4 left-4 text-navy/5" />
            <p className="text-navy font-medium italic leading-relaxed relative z-10 mb-6">
              "Firmamızın uygulayacağı Entegre Pest Kontrol sistemi ,BRC (British Retail Consortium),IFS (International Food Standart), AIB(American Institute of Baking), ve TSE (Türk Standartları Enstitüsü) kalite yönetim sistemlerine ve uluslararası denetleme kuruluşlarının denetimlerine uygunluk taşımaktadır."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold font-barlowCondensed text-xl">
                ŞK
              </div>
              <div>
                <h4 className="font-bold text-navy">Şeref Keleteli</h4>
                <span className="text-xs text-text-muted uppercase tracking-wider font-semibold">Kurucumuz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. İSTATİSTİKLER (SİYAH BANT - HAREKETLİ) */}
      <AnimatedStats />

      {/* 6. MİSYON, VİZYON, KALİTE (KARTLAR VE AKORDEON) */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto w-full bg-white/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* MİSYON (ID ve Kaydırma Payı Eklendi) */}
          <div id="misyon-vizyon" className="scroll-mt-28 bg-white border border-border rounded-xl shadow-lg shadow-navy/5 overflow-hidden flex flex-col">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Misyonumuz" className="h-48 w-full object-cover" />
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-barlowCondensed text-2xl font-bold uppercase text-navy mb-4">Misyonumuz</h3>
              <p className="text-sm text-text-mid leading-relaxed mb-4 font-semibold">
                Uluslararası standartlarda hizmet veren bir Entegre Pest Control Şirketiyiz.
              </p>
              <p className="text-sm text-text-mid leading-relaxed">
                Sektörün ulaştığı en üst düzeyde, güvenilir, müşteri odaklı ve kaliteli hizmet veren, müşteri ve çalışan güvenliğini ön planda tutan, müşteri haklarına saygılı, çevreye duyarlı, nitelikli personel yetiştiren, yenilikçi ve sürekli kendini geliştiren Uluslararası standartlarda hizmet veren bir Entegre Pest Control Şirketiyiz.
              </p>
            </div>
          </div>

          {/* VİZYON */}
          <div className="bg-white border border-border rounded-xl shadow-lg shadow-navy/5 overflow-hidden flex flex-col">
            <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop" alt="Vizyonumuz" className="h-48 w-full object-cover" />
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-barlowCondensed text-2xl font-bold uppercase text-navy mb-4">Vizyonumuz</h3>
              <p className="text-sm text-text-mid leading-relaxed mb-4 font-semibold">
                Uluslararası alanda mükemmeliyet odaklı referans merkezi olmak.
              </p>
              <p className="text-sm text-text-mid leading-relaxed">
                Entegre Pest Kontrol alanında sunduğumuz hizmetin bilimselliği ve kalitesi ile ilklerin içinde yer almak, uluslararası alanda sektörün ulaştığı en üst düzeydeki uygulamaları takip ederek, mükemmeliyet odaklı referans merkezi olmak.
              </p>
            </div>
          </div>

          {/* KALİTE POLİTİKAMIZ (ID ve Kaydırma Payı Eklendi) */}
          <div id="kalite" className="scroll-mt-28 bg-white border border-border rounded-xl shadow-lg shadow-navy/5 overflow-hidden flex flex-col">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Kalite Politikamız" className="h-48 w-full object-cover" />
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-barlowCondensed text-2xl font-bold uppercase text-navy mb-4">Kalite Politikamız</h3>
              <p className="text-sm text-text-mid leading-relaxed mb-6">
                Çalışanlarımızın bilgi ve becerilerini artırarak <strong className="text-navy">nitelikli iş gücü</strong> yaratır; özverili birer çalışan olmalarını sağlarız.
              </p>
              
              {/* Native HTML Akordeon */}
              <details className="group mt-auto">
                <summary className="flex items-center justify-between font-bold text-sm text-navy bg-slate-50 border border-border p-4 rounded-lg cursor-pointer list-none hover:bg-slate-100 transition-colors">
                  Politikamız
                  <ChevronDown size={16} className="text-navy group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="mt-3 p-4 bg-white border border-border rounded-lg shadow-inner">
                  <ul className="space-y-3 text-xs text-text-mid">
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-pest-green flex-shrink-0 mt-0.5" /> Toplam kalite yönetimi anlayışını benimseriz ve paylaşırız.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-pest-green flex-shrink-0 mt-0.5" /> Müşterilerimize en iyi hizmeti sunarak yaşam kalitesini yükseltir, güvenliğini ve memnuniyetini her şeyin üzerinde tutarız.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-pest-green flex-shrink-0 mt-0.5" /> Müşteri Çalışanlarını bilinçlendirerek problemleri daha iyi değerlendirebilmelerini sağlarız.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-pest-green flex-shrink-0 mt-0.5" /> Ekip anlayışını benimseriz ve kurum bilincini yaşatırız.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-pest-green flex-shrink-0 mt-0.5" /> Çalışanlarımızın bilgi ve becerilerini artırarak nitelikli iş gücü yaratır; özverili birer çalışan olmalarını sağlarız.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-pest-green flex-shrink-0 mt-0.5" /> Sunduğumuz hizmeti sürekli geliştirerek sektörün gelişimine katkıda bulunuruz.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-pest-green flex-shrink-0 mt-0.5" /> Uluslararası standartlarda hizmet veren bir Entegre Pest Kontrol Şirketiyiz.</li>
                  </ul>
                </div>
              </details>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}