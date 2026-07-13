import React from "react";
import Link from "next/link";
import { ArrowRight, Home, Building2, Ship } from "lucide-react";

export default function MainServices() {
  const services = [
    {
      title: "KONUT VE YAŞAM ALANLARI",
      desc: "Ev, villa, site ve ortak yaşam alanlarında; hedef zararlıya ve mekânın özelliklerine uygun, güvenlik tedbirleri gözetilerek profesyonel biyosidal uygulamalar gerçekleştiriyoruz.",
      link: "/ev-daire-ilaclama",
      icon: <Home className="w-10 h-10 text-pest-green group-hover:text-white transition-colors" />
    },
    {
      title: "ENTEGRE PEST KONTROL",
      desc: "Gıda, sanayi, sağlık, konaklama ve ticari işletmeler için risk analizi, düzenli izleme, hedefe yönelik müdahale ve dijital raporlama esaslı entegre pest kontrol hizmetleri sunuyoruz.",
      link: "/entegre-zararli-yonetimi",
      icon: <Building2 className="w-10 h-10 text-navy group-hover:text-white transition-colors" />
    },
    {
      title: "FUMİGASYON HİZMETLERİ",
      desc: "BMSB ve ISPM 15 kapsamındaki ihracat uygulamaları dâhil; ürün, yük, konteyner, depo ve silolara yönelik güvenli fumigasyon, gaz ölçümü, gazdan arındırma ve sevkiyata hazırlık hizmetleri sunuyoruz.",
      link: "/fumigasyon",
      icon: <Ship className="w-10 h-10 text-orange-500 group-hover:text-white transition-colors" />
    }
  ];

  return (
    <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto w-full font-barlow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((svc, idx) => (
          <Link 
            key={idx} 
            href={svc.link} 
            className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
          >
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors ${
              idx === 0 ? "bg-pest-green/10 group-hover:bg-pest-green" : 
              idx === 1 ? "bg-navy/10 group-hover:bg-navy" : 
              "bg-orange-500/10 group-hover:bg-orange-500"
            }`}>
              {svc.icon}
            </div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-4">
              {svc.title}
            </h3>
            <p className="text-text-mid mb-8 flex-grow text-[15px] leading-relaxed">
              {svc.desc}
            </p>
            <span className="font-bold text-navy group-hover:text-pest-green flex items-center gap-2 transition-colors text-sm uppercase tracking-wide">
              Hizmeti İncele <ArrowRight size={16} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}