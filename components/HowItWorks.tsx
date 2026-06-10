import React from "react";
import { PhoneCall, Search, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      icon: <PhoneCall size={24} />,
      title: "Bizi Arayın",
      desc: "Telefon veya WhatsApp ile ulaşın. Uzmanlarımız haşere türünü ve mekan büyüklüğünü değerlendirerek size en doğru çözümü önerir.",
    },
    {
      num: "2",
      icon: <Search size={24} />,
      title: "Ücretsiz Keşif",
      desc: "Belgeli teknisyenimiz evinize gelir, ücretsiz keşif yapar ve net bir fiyat sunar. Sürpriz maliyet yok, şeffaf fiyatlama.",
    },
    {
      num: "3",
      icon: <ShieldCheck size={24} />,
      title: "Profesyonel İlaçlama",
      desc: "TSE onaylı, aile ve evcil hayvan dostu ürünlerle ilaçlama yapılır. İşlem sonrası garanti belgesi verilir.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 md:px-10 font-barlow bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Alanı */}
        <div className="mb-10 md:mb-12">
          <p className="font-barlowCondensed text-xs font-semibold tracking-[0.12em] uppercase text-pest-green mb-2">
            Nasıl Çalışıyoruz
          </p>
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight leading-none">
            3 Adımda Haşeresiz Ev
          </h2>
        </div>

        {/* Grid Alanı (Kartlar) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white border border-border rounded-xl p-7 md:p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/5 transition-all duration-300 group"
            >
              {/* Arka Plan Numarası (Watermark) */}
              <span className="absolute right-4 top-2 font-barlowCondensed text-8xl font-extrabold text-navy opacity-[0.03] leading-none group-hover:scale-110 group-hover:opacity-5 transition-all duration-500 pointer-events-none">
                {step.num}
              </span>

              {/* İkon */}
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                {step.icon}
              </div>

              {/* Metinler */}
              <h3 className="font-barlowCondensed text-xl font-bold uppercase text-navy mb-2 tracking-wide">
                {step.title}
              </h3>
              <p className="text-sm text-text-mid leading-relaxed relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}