import React from "react";

export default function PestServices() {
  // Tasarımdaki haşere verileri
  const services = [
    { icon: "🪳", title: "Hamamböceği", desc: "Mutfak ve banyo odaklı tam imha" },
    { icon: "🦂", title: "Akrep", desc: "Villa ve müstakil ev uzmanı" },
    { icon: "🐜", title: "Karınca", desc: "İç ve dış alan tedavisi" },
    { icon: "🦟", title: "Sivrisinek", desc: "Bahçe ve iç mekan koruma" },
    { icon: "🐛", title: "Pire & Bit", desc: "Evcil hayvan dostu çözüm" },
    { icon: "🐀", title: "Fare & Sıçan", desc: "Mekanik tuzak ve ilaçlama" },
    { icon: "🦗", title: "Çekirge & Böcek", desc: "Mevsimsel koruma paketi" },
    { icon: "🕷️", title: "Örümcek", desc: "Köşe ve tavan tedavisi" },
  ];

  return (
    <section className="py-16 md:py-20 px-6 md:px-10 bg-[#f5f7ff] font-barlow">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Alanı */}
        <div className="mb-10 md:mb-12">
          <p className="font-barlowCondensed text-xs font-semibold tracking-[0.12em] uppercase text-text-muted mb-2">
            Hizmetlerimiz
          </p>
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight leading-[1.1]">
            Hangi Haşereden<br />Şikayetçisiniz?
          </h2>
        </div>

        {/* Haşere Kartları Grid Alanı */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((svc, index) => (
            <div
              key={index}
              className="bg-white border-2 border-border rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:border-navy hover:bg-[#f5f7ff] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,45,143,0.1)] group"
            >
              <span className="text-4xl block mb-3 group-hover:scale-125 transition-transform duration-300">
                {svc.icon}
              </span>
              <h4 className="font-barlowCondensed text-lg font-bold uppercase text-navy tracking-wide mb-1">
                {svc.title}
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}