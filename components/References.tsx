import React from "react";
import Link from "next/link";
import { Plane, Utensils, Factory, Package, BedDouble, HeartPulse, Building, Ship, ArrowRight } from "lucide-react";

export default function References() {
  // Brif 4.9 - Referans Sektörleri Tablosu
  const sectors = [
    { 
      icon: <Plane size={32} />, 
      name: "HAVALİMANI VE ULAŞIM", 
      desc: "Geniş ve kritik alanlara özel sürekli izleme.", 
      link: "/referanslar?kategori=Lojistik / Havacılık" 
    },
    { 
      icon: <Utensils size={32} />, 
      name: "GIDA VE ÜRETİM", 
      desc: "Denetim kriterlerine uygun entegre pest kontrol.", 
      link: "/referanslar?kategori=Gıda / Tarım" 
    },
    { 
      icon: <Factory size={32} />, 
      name: "SANAYİ TESİSLERİ", 
      desc: "Risk analizi ve dijital raporlama esaslı hizmet.", 
      link: "/referanslar?kategori=Fabrika / Üretim" 
    },
    { 
      icon: <Package size={32} />, 
      name: "DEPO VE LOJİSTİK", 
      desc: "Kemirgen, depo zararlıları ve fumigasyon çözümleri.", 
      link: "/referanslar?kategori=Lojistik / Havacılık" 
    },
    { 
      icon: <BedDouble size={32} />, 
      name: "OTEL VE KONAKLAMA", 
      desc: "Misafir ve işletme güvenliği odaklı uygulamalar.", 
      link: "/referanslar?kategori=Otel / Tesis / Spor" 
    },
    { 
      icon: <HeartPulse size={32} />, 
      name: "SAĞLIK VE EĞİTİM", 
      desc: "Hassas alanlara özel kontrollü mücadele.", 
      link: "/referanslar?kategori=Sağlık / Eğitim" 
    },
    { 
      icon: <Building size={32} />, 
      name: "SİTE VE TOPLU YAŞAM", 
      desc: "İç ve dış alanlara yönelik dönemsel hizmetler.", 
      link: "/referanslar" 
    },
    { 
      icon: <Ship size={32} />, 
      name: "İHRACAT VE FUMİGASYON", 
      desc: "BMSB, ISPM 15, gaz ölçümü ve gazdan arındırma.", 
      link: "/referanslar?kategori=Fumigasyon" 
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-slate-50 font-barlow">
      <div className="max-w-7xl mx-auto">
        
        {/* Başlık Alanı */}
        <div className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <div>
            <p className="font-barlowCondensed text-xs font-semibold tracking-[0.12em] uppercase text-pest-green mb-2">
              REFERANSLARIMIZ
            </p>
            <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight leading-[1.1]">
              Farklı Sektörlerde Güvenilir Hizmet
            </h2>
            <p className="text-text-mid text-sm md:text-base leading-relaxed mt-3 max-w-3xl">
              EPCON, 2011 yılından bu yana farklı sektörlerin ihtiyaçlarına özel; yetkili, izlenebilir ve sürdürülebilir pest kontrol, biyosidal uygulama ve fumigasyon hizmetleri sunmaktadır.
            </p>
          </div>
        </div>

        {/* Referans Sektör Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {sectors.map((sector, index) => (
            <Link
              key={index}
              href={sector.link}
              className="bg-white border border-border rounded-xl p-6 flex flex-col items-start text-left cursor-pointer transition-all duration-300 hover:border-navy hover:shadow-xl group"
            >
              <div className="text-navy mb-5 group-hover:text-pest-green transition-colors duration-300">
                {sector.icon}
              </div>
              <h4 className="font-barlowCondensed text-xl font-bold uppercase text-navy tracking-wide mb-2 leading-tight">
                {sector.name}
              </h4>
              <p className="text-[13px] text-text-mid leading-relaxed">
                {sector.desc}
              </p>
            </Link>
          ))}
        </div>

        {/* Alt Buton (CTA) */}
        <div className="text-center">
          <Link 
            href="/referanslar" 
            className="inline-flex items-center justify-center gap-2 border-2 border-navy hover:bg-navy hover:text-white text-navy font-bold py-3.5 px-8 rounded-md transition-all tracking-wide text-sm"
          >
            Tüm Referanslarımızı İnceleyin <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}