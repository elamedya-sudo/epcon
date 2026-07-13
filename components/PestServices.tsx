"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PestServices() {
  // Tasarımdaki zararlı türü verileri ve SEO odaklı sayfaların URL'leri (Brif Bölüm 4.7'den[cite: 6])
  const services = [
    { icon: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1fab3.svg", title: "Hamamböceği", desc: "Mutfak, depo, rögar ve ıslak alanlarda kaynağın tespiti ve hedefli uygulama.", link: "/hamambocegi-mucadelesi" },
    { icon: "🐀", title: "Fare ve Sıçan", desc: "İzleme, güvenli istasyonlar ve giriş noktalarının kontrolü.", link: "/fare-sican-mucadelesi" },
    { icon: "🛌", title: "Tahta Kurusu", desc: "Detaylı inceleme, hedefli uygulama ve takip kontrolü içeren program.", link: "/tahta-kurusu-mucadelesi" },
    { icon: "🐜", title: "Karınca", desc: "Koloni ve besin kaynaklarının kontrolüne yönelik iç/dış alan çözümleri.", link: "/karinca-mucadelesi" },
    { icon: "🦟", title: "Sivrisinek ve Karasinek", desc: "Üreme kaynağı, larva mücadelesi ve ergin uygulaması birleşik programı.", link: "/sivrisinek-karasinek-mucadelesi" },
    { icon: "🐞", title: "Kahverengi Kokarca", desc: "Bina çevrelerinde mevsimsel giriş noktası tespiti ve hedefe yönelik mücadele.", link: "/kahverengi-kokarca-mucadelesi" },
    { icon: "🐕", title: "Pire ve Kene", desc: "Konut, site ve hayvan yaşam alanlarında risk değerlendirmesine dayalı hizmet.", link: "/pire-kene-mucadelesi" },
    { icon: "📦", title: "Güve ve Depo Zararlıları", desc: "Gıda, tekstil ve depo alanlarında feromon izleme, teşhis ve çözümler.", link: "/guve-depo-zararlilari" },
    { icon: "🕷️", title: "Akrep ve Örümcek", desc: "Bina çevresi, bodrum ve giriş noktalarında risk azaltma ve kontrollü mücadele.", link: "/akrep-orumcek-mucadelesi" },
    { icon: "🐍", title: "Yılan ve Sürüngenler", desc: "Açık alanlarda barınma koşullarının azaltılması ve çevresel risk kontrolü.", link: "/yilan-surungen-kontrolu" },
  ];

  return (
    <section className="py-16 md:py-20 px-6 md:px-10 bg-[#f5f7ff] font-barlow">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-12">
          <p className="font-barlowCondensed text-xs font-semibold tracking-[0.12em] uppercase text-text-muted mb-2">
            HİZMETLERİMİZ
          </p>
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight leading-[1.1] mb-3">
            Hangi Zararlı İçin<br />Çözüm Arıyorsunuz?
          </h2>
          <p className="text-text-mid text-sm md:text-base max-w-2xl">
            Karşılaştığınız zararlı türünü seçerek belirtiler, riskli alanlar, EPCON mücadele yaklaşımı, hazırlık bilgileri ve teklif seçeneklerine ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {services.map((svc, index) => (
             // Kural: Kartın tamamı tıklanabilir olacak (Brif Bölüm 4.7[cite: 6])
            <Link
              key={index}
              href={svc.link}
              className="bg-white border border-border rounded-xl p-6 flex flex-col h-full cursor-pointer transition-all duration-300 hover:border-navy hover:shadow-xl group"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-slate-50 mb-4 group-hover:scale-110 group-hover:bg-pest-green/10 transition-transform duration-300">
                {svc.icon.includes("svg") ? (
                  <img src={svc.icon} alt={svc.title} className="w-7 h-7 drop-shadow-sm" />
                ) : (
                  <span className="text-2xl leading-none">{svc.icon}</span>
                )}
              </div>
              <h4 className="font-barlowCondensed text-lg font-bold text-navy mb-2 leading-tight">
                {svc.title}
              </h4>
              <p className="text-xs text-text-mid leading-relaxed flex-grow">
                {svc.desc}
              </p>
              
              {/* Kural: "Zararlıyı İncele →" butonu görünür olacak (Brif Bölüm 4.7[cite: 6]) */}
              <div className="mt-4 pt-4 border-t border-border/50 flex items-center text-xs font-bold text-navy group-hover:text-pest-green transition-colors">
                Zararlıyı İncele <ArrowRight size={14} className="ml-1" />
              </div>
            </Link>
          ))}
        </div>
        
        {/* Özel Kokarca Yönlendirmesi Notu (Bölüm 4.7 kuralı[cite: 6]) */}
        <div className="mt-8 bg-white border border-pest-green/30 rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
           <div>
              <h4 className="font-bold text-navy text-sm">Avustralya ihracatı için BMSB işlemi mi arıyorsunuz?</h4>
              <p className="text-xs text-text-mid">Kahverengi kokarca (BMSB) fümigasyonu ihracat işlemlerine özeldir.</p>
           </div>
           <Link href="/bmsb-fumigasyonu" className="whitespace-nowrap bg-pest-green hover:bg-pest-green-dark text-white text-xs font-bold px-5 py-2.5 rounded-md transition-colors flex items-center gap-1.5">
              BMSB İşlemini İncele <ArrowRight size={14} />
           </Link>
        </div>

      </div>
    </section>
  );
}