import React from "react";

export default function PestServices() {
  // Tasarımdaki haşere verileri (Hamamböceği ve Pire için garanti SVG görsel kullanıyoruz)
  const services = [
    { 
      isImage: true, 
      icon: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1fab3.svg", 
      title: "Hamamböceği", 
      desc: "Mutfak ve banyo odaklı tam imha" 
    },
    { isImage: false, icon: "🦂", title: "Akrep", desc: "Villa ve müstakil ev uzmanı" },
    { isImage: false, icon: "🐜", title: "Karınca", desc: "İç ve dış alan tedavisi" },
    { isImage: false, icon: "🦟", title: "Sivrisinek", desc: "Bahçe ve iç mekan koruma" },
    { 
      isImage: true, 
      icon: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1fab2.svg", 
      title: "Pire & Bit", 
      desc: "Gizli ve zorlu alanlara özel" 
    },
    { isImage: false, icon: "🐀", title: "Fare & Sıçan", desc: "Mekanik tuzak ve ilaçlama" },
    { isImage: false, icon: "🦗", title: "Çekirge & Böcek", desc: "Mevsimsel koruma paketi" },
    { isImage: false, icon: "🕷️", title: "Örümcek", desc: "Köşe ve tavan tedavisi" },
  ];

  return (
    <section className="py-16 md:py-20 px-6 md:px-10 bg-[#f5f7ff] font-barlow">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-12">
          <p className="font-barlowCondensed text-xs font-semibold tracking-[0.12em] uppercase text-text-muted mb-2">
            Hizmetlerimiz
          </p>
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight leading-[1.1]">
            Hangi Haşereden<br />Şikayetçisiniz?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((svc, index) => (
            <div
              key={index}
              className="bg-white border-2 border-border rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:border-navy hover:bg-[#f5f7ff] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,45,143,0.1)] group"
            >
              <div className="flex items-center justify-center h-12 mb-3 group-hover:scale-125 transition-transform duration-300">
                {svc.isImage ? (
                  <img src={svc.icon} alt={svc.title} className="w-10 h-10 drop-shadow-sm" />
                ) : (
                  <span className="text-4xl leading-none">{svc.icon}</span>
                )}
              </div>
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