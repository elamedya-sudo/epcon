import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  // Brifteki kural: Konut, Kurumsal Pest Kontrol ve Fumigasyon/Lojistik dağılımı[cite: 5].
  // Brifteki kural: Abartılı vaatler ("%100 bitti") kullanılmamalı[cite: 5].
  const reviews = [
    {
      name: "Ayşe K.",
      role: "Ev İlaçlama - Kadıköy",
      text: "Ziraat mühendislerinin süreci yönetmesi güven verdi. Karınca ve böcek kaynağını tespit edip hedefe yönelik bir uygulama yaptılar. Çocuklu bir ev olduğumuz için güvenlik uyarıları çok profesyoneldi.",
      rating: 5,
    },
    {
      name: "Burak Y.",
      role: "Gıda Üretim Tesisi - Pest Kontrol",
      text: "İşletmemizin denetim süreçleri için EPCON ile çalışıyoruz. İstasyon kontrolleri, dijital raporlama ve uçan haşere cihazı (EFT) takipleri son derece düzenli. Kök neden analizleri işimizi çok kolaylaştırıyor.",
      rating: 5,
    },
    {
      name: "Cem T.",
      role: "Lojistik Depo - Fümigasyon",
      text: "İhracat konteynerlerimiz için BMSB ve gaz ölçüm hizmetlerini EPCON'dan alıyoruz. İzolasyon, gazdan arındırma ve sertifikasyon süreçlerini sevkiyat takvimimize uygun, eksiksiz bir şekilde yürütüyorlar.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-navy font-barlow">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center flex flex-col items-center">
          <p className="font-barlowCondensed text-xs font-semibold tracking-[0.12em] uppercase text-pest-green mb-2">
            MÜŞTERİ DENEYİMLERİ
          </p>
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-[1.1] mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-2xl">
            Konut, işletme, endüstriyel tesis ve fumigasyon hizmetlerimiz hakkında müşterilerimizin gerçek değerlendirmeleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-8 transition-all duration-300 hover:bg-white/10"
            >
              <div className="flex text-[#FFB800] mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              
              <p className="text-[15px] text-white/80 leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pest-green/20 flex items-center justify-center font-bold text-pest-green text-lg border border-pest-green/30">
                  {review.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm">{review.name}</span>
                  <span className="text-xs text-white/50">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Puanı ve Buton (Brifte dinamik ve butonlu olması istenmişti)[cite: 5] */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-white/10">
           <div className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/40px-Google_%22G%22_logo.svg.png" alt="Google" className="w-6 h-6" />
              <span className="text-white font-bold text-lg">4,9/5</span>
              <div className="flex text-[#FFB800]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
           </div>
           <a 
            href="https://share.google/Uc4LyXAqntDAZTNos" 
            target="_blank"
            rel="noreferrer"
            className="border-2 border-white/20 hover:border-white text-white text-sm font-bold px-6 py-2.5 rounded-md transition-colors"
           >
             Google Yorumlarını İncele
           </a>
        </div>
      </div>
    </section>
  );
}