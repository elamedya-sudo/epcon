import React from "react";

// Sadece logoların yollarını tutan sadeleştirilmiş liste
const referansLogolari = [
  "/logolar/test/avek.png",
  "/logolar/test/donerci-bekirzade-logo-s12.png",
  "/logolar/test/dsv-solutions-seeklogo.png",
  "/logolar/test/dufry_logo.jpeg",
  "/logolar/test/DUNYA-LOGO-RBG-Large.png.webp",
  "/logolar/test/okyanus.jpg",
  "/logolar/test/fenerbahce-spor-kulubu-seeklogo.png",
  "/logolar/test/image_1080.webp",
  "/logolar/test/images.png",
  "/logolar/test/images-2.png",
  "/logolar/test/ISG_YapimYatirim.jpg",
  "/logolar/test/isgairport-logo.png.webp",
  "/logolar/test/Logo(1).png",
  "/logolar/test/logo-white.png",
  "/logolar/test/nun-okullari.svg",
  "/logolar/test/papara.dfce43bb.svg",
  "/logolar/test/resimveheykel.jpeg",
  "/logolar/test/sisecam-seeklogo.png",
  "/logolar/test/tatlibak-light-logo.webp",
  "/logolar/test/tbmm-milli-saraylar-seeklogo.png",
  "/logolar/test/yesilay-yesilay-seeklogo.png",
  "/logolar/test/ytu-footer-logo.png",
  "/logolar/test/yumtat.jpg"
];

export const metadata = {
  title: "Referanslarımız | EPCON Çevre Sağlığı",
  description: "Türkiye'nin en seçkin kurumlarına, tarihi yapılarına ve sanayi devlerine sunduğumuz entegre pest kontrol referanslarımız.",
};

export default function ReferanslarPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-24 font-barlow">
      
      {/* ── ÜST BAŞLIK ALANI ── */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-pest-green font-bold tracking-widest text-sm uppercase mb-3 block">
          KURUMSAL ÇÖZÜM ORTAKLARIMIZ
        </span>
        <h1 className="font-barlowCondensed text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-navy mb-6">
          Güveninize Layık Görüldük
        </h1>
        <p className="text-text-mid max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Uzman mühendis kadromuzla, Türkiye'nin en seçkin kurumlarına, tarihi yapılarına ve sanayi devlerine entegre pest kontrol ve fümigasyon çözümleri sunuyoruz.
        </p>
      </section>

      {/* ── REFERANS LOGOLARI (Izgara Tasarımı) ── */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {referansLogolari.map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex items-center justify-center aspect-[4/3] hover:border-pest-green hover:shadow-xl transition-all duration-300 group cursor-default"
            >
              <img
                src={logo}
                alt={`EPCON Çevre Sağlığı Referans ${index + 1}`}
                // Resimler orantılı sığdırılır, varsayılan olarak gri ve hafif saydamdır. 
                // Üzerine fare gelince (hover) netleşir ve renklenir.
                className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
      
    </main>
  );
}