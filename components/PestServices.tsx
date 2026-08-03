"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PestServices() {
  const services = [
    { 
      icon: "https://images.pexels.com/photos/19294665/pexels-photo-19294665.jpeg?q=80&w=1000&auto=format&fit=crop", 
      title: "Hamamböceği", 
      desc: "Mutfak, depo, rögar ve ıslak alanlarda kaynağın tespiti ve hedefli uygulama.", 
      link: "/hamambocegi-mucadelesi" 
    },
    { 
      icon: "https://images.pexels.com/photos/7180053/pexels-photo-7180053.jpeg?q=80&w=1000&auto=format&fit=crop", 
      title: "Fare ve Sıçan", 
      desc: "İzleme, güvenli istasyonlar ve giriş noktalarının kontrolü.", 
      link: "/fare-sican-mucadelesi" 
    },
    { 
      icon: "https://images.unsplash.com/photo-1727198634627-645ef5356455?q=80&w=1000&auto=format&fit=crop", 
      title: "Tahta Kurusu", 
      desc: "Detaylı inceleme, hedefli uygulama ve takip kontrolü içeren program.", 
      link: "/tahta-kurusu-mucadelesi" 
    },
    { 
      icon: "https://images.pexels.com/photos/35702439/pexels-photo-35702439.jpeg?q=80&w=1000&auto=format&fit=crop", 
      title: "Karınca", 
      desc: "Koloni ve besin kaynaklarının kontrolüne yönelik iç/dış alan çözümleri.", 
      link: "/karinca-mucadelesi" 
    },
    { 
      icon: "https://images.pexels.com/photos/27178285/pexels-photo-27178285.jpeg?q=80&w=1000&auto=format&fit=crop", 
      title: "Sivrisinek ve Karasinek", 
      desc: "Üreme kaynağı, larva mücadelesi ve ergin uygulaması birleşik programı.", 
      link: "/sivrisinek-karasinek-mucadelesi" 
    },
    { 
      icon: "https://images.pexels.com/photos/68513/bug-sheet-insect-brown-68513.jpeg?q=80&w=1000&auto=format&fit=crop", 
      title: "Kahverengi Kokarca", 
      desc: "Bina çevrelerinde mevsimsel giriş noktası tespiti ve hedefe yönelik mücadele.", 
      link: "/kahverengi-kokarca-mucadelesi" 
    },
    { 
      icon: "https://images.unsplash.com/photo-1598788682862-839f3d4c4ed7?q=80&w=1000&auto=format&fit=crop", 
      title: "Pire ve Kene", 
      desc: "Konut, site ve hayvan yaşam alanlarında risk değerlendirmesine dayalı hizmet.", 
      link: "/pire-kene-mucadelesi" 
    },
    { 
      icon: "https://images.unsplash.com/photo-1737682170996-3eccc13a71ec?q=80&w=1000&auto=format&fit=crop", 
      title: "Güve ve Depo Zararlıları", 
      desc: "Gıda, tekstil ve depo alanlarında feromon izleme, teşhis ve çözümler.", 
      link: "/guve-depo-zararlilari" 
    },
    { 
      icon: "https://images.pexels.com/photos/33210386/pexels-photo-33210386.png?q=80&w=1000&auto=format&fit=crop", 
      title: "Akrep ve Örümcek", 
      desc: "Bina çevresi, bodrum ve giriş noktalarında risk azaltma ve kontrollü mücadele.", 
      link: "/akrep-orumcek-mucadelesi" 
    },
    { 
      icon: "https://images.pexels.com/photos/38571564/pexels-photo-38571564.jpeg?q=80&w=1000&auto=format&fit=crop", 
      title: "Yılan ve Sürüngenler", 
      desc: "Açık alanlarda barınma koşullarının azaltılması ve çevresel risk kontrolü.", 
      link: "/yilan-surungen-kontrolu" 
    },
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
            <Link
              key={index}
              href={svc.link}
              className="bg-white border border-border rounded-xl p-6 flex flex-col h-full cursor-pointer transition-all duration-300 hover:border-navy hover:shadow-xl group"
            >
              {/* Sabit boyutlu, yuvarlak kesimli fotoğraf alanı */}
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-slate-50 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-200 overflow-hidden shrink-0">
                <img 
                  src={svc.icon} 
                  alt={svc.title} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>

              <h4 className="font-barlowCondensed text-lg font-bold text-navy mb-2 leading-tight">
                {svc.title}
              </h4>
              <p className="text-xs text-text-mid leading-relaxed flex-grow">
                {svc.desc}
              </p>
              
              <div className="mt-4 pt-4 border-t border-border/50 flex items-center text-xs font-bold text-navy group-hover:text-pest-green transition-colors">
                Zararlıyı İncele <ArrowRight size={14} className="ml-1" />
              </div>
            </Link>
          ))}
        </div>
        
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