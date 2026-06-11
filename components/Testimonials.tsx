import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  // Ekran görüntüsündeki (image_2.png) orijinal müşteri yorumları
  const reviews = [
    {
      name: "Ayşe K.",
      role: "Kadıköy - Ev İlaçlaması",
      text: "Çocuklarım için çok endişeliydim ama EPCON hem kokusuz hem de güvenli ürünler kullandı. Hamamböceği sorunu tamamen çözüldü. 3 aydır sorun yok.",
      rating: 5,
    },
    {
      name: "Mehmet D.",
      role: "Silivri - Villa İlaçlaması",
      text: "Yazlığımıza her sezon geliyorlar. Fiyat belli, saat belli, teknisyen profesyonel. Akrep problemi yaşıyorduk, artık tamamen rahatız.",
      rating: 5,
    },
    {
      name: "Selin Y.",
      role: "Ataşehir - Pire İlaçlaması",
      text: "Köpeğim için özel ilaç kullandılar, hiçbir yan etki olmadı. Pire sorunu ilk seferde çözüldü. Komşularıma da önerdim.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 md:px-10 bg-navy-deeper font-barlow">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Alanı */}
        <div className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <div>
            <p className="font-barlowCondensed text-xs font-semibold tracking-[0.12em] uppercase text-pest-green mb-2">
              Müşteri Yorumları
            </p>
            <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-[1.1]">
              ONLAR ANLATSIN
            </h2>
          </div>
          
          {/* Genel Değerlendirme Özeti (Masaüstü) */}
          <div className="hidden md:flex flex-col items-end">
            <div className="flex text-[#FFB800] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm font-bold text-white">Google'da 4.9/5 Ortalama Puan</span>
          </div>
        </div>

        {/* Yorum Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/5 rounded-xl p-8 relative transition-all duration-300 hover:shadow-[0_8px_30px_rgba(26,45,143,0.06)] hover:-translate-y-1 group"
            >
              {/* Yıldızlar */}
              <div className="flex text-[#FFB800] mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              
              {/* Yorum Metni */}
              <p className="text-sm text-white/70 leading-relaxed mb-8 italic relative z-10">
                "{review.text}"
              </p>
              
              {/* Müşteri Bilgisi */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <span className="text-xs text-white/60">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}