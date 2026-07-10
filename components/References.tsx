import React from "react";
import Link from "next/link"; // Link bileşenini ekledik
import { Clapperboard, Cross, BedDouble, Landmark, Factory, BookOpenCheck, ShoppingBasket, PlaneTakeoff } from "lucide-react";

export default function References() {
  // Her bir kurum tipi için referanslar sayfasına yönlendirecek "link" parametreleri eklendi
  const placeholderBrands = [
    { icon: <Clapperboard size={32} />, name: "KULÜP", desc: "Süper Lig Futbol Kulübü", link: "/referanslar?kategori=Otel / Tesis / Spor" },
    { icon: <Cross size={32} />, name: "HASTANE", desc: "Özel Hastane Grubu", link: "/referanslar?kategori=Sağlık / Eğitim" },
    { icon: <BedDouble size={32} />, name: "OTEL", desc: "5 Yıldızlı Otel Zinciri", link: "/referanslar?kategori=Otel / Tesis / Spor" },
    { icon: <Landmark size={32} />, name: "BANKA", desc: "Ulusal Banka", link: "/referanslar" },
    { icon: <Factory size={32} />, name: "FABRİKA", desc: "Üretim Tesisi", link: "/referanslar?kategori=Fabrika / Üretim" },
    { icon: <BookOpenCheck size={32} />, name: "EĞİTİM", desc: "Üniversite Kampüsü", link: "/referanslar?kategori=Sağlık / Eğitim" },
    { icon: <ShoppingBasket size={32} />, name: "MARKET", desc: "Zincir Süpermarket", link: "/referanslar?kategori=Gıda / Tarım" },
    { icon: <PlaneTakeoff size={32} />, name: "HAVALİMANI", desc: "Lojistik Terminali", link: "/referanslar?kategori=Lojistik / Havacılık" },
  ];

  return (
    <section className="py-16 md:py-20 px-6 md:px-10 bg-white font-barlow">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Alanı */}
        <div className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <div>
            <p className="font-barlowCondensed text-xs font-semibold tracking-[0.12em] uppercase text-text-muted mb-2">
              REFERANSLARIMIZ
            </p>
            <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight leading-[1.1]">
              500'DEN FAZLA KURUMA<br />GÜVENİLİR HİZMET
            </h2>
            <p className="text-text-mid text-sm md:text-base leading-relaxed mt-3 max-w-xl">
              Türkiye'nin önde gelen kurumları 20 yıldır EPCON'a güveniyor.
            </p>
          </div>
        </div>

        {/* Referans Kartları Grid Alanı (div yerine Link kullanıldı) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
          {placeholderBrands.map((brand, index) => (
            <Link
              key={index}
              href={brand.link}
              className="bg-white border-2 border-border rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:border-navy hover:bg-[#f5f7ff] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,45,143,0.1)] group block"
            >
              <div className="flex items-center justify-center h-12 mb-3 text-text-mid group-hover:text-navy group-hover:scale-125 transition-all duration-300">
                {brand.icon}
              </div>
              <h4 className="font-barlowCondensed text-xl font-bold uppercase text-navy tracking-wide mb-1">
                {brand.name}
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                {brand.desc}
              </p>
            </Link>
          ))}
        </div>

        {/* İstatistik Kutuları */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          <div className="bg-white border border-border rounded-xl p-6 text-center">
            <span className="font-extrabold font-barlowCondensed text-4xl text-navy">500+</span>
            <p className="text-sm text-text-muted mt-1">Kurumsal Müşteri</p>
          </div>
          <div className="bg-white border border-border rounded-xl p-6 text-center">
            <span className="font-extrabold font-barlowCondensed text-4xl text-navy">20+</span>
            <p className="text-sm text-text-muted mt-1">Yıl Deneyim</p>
          </div>
          <div className="bg-white border border-border rounded-xl p-6 text-center">
            <span className="font-extrabold font-barlowCondensed text-4xl text-navy">4.9★</span>
            <p className="text-sm text-text-muted mt-1">Google Puanı</p>
          </div>
          <div className="bg-white border border-border rounded-xl p-6 text-center">
            <span className="font-extrabold font-barlowCondensed text-4xl text-navy">39/39</span>
            <p className="text-sm text-text-muted mt-1">İstanbul İlçesi</p>
          </div>
        </div>
      </div>
    </section>
  );
}