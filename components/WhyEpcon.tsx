import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function WhyEpcon() {
  const trustBadges = [
    { title: "2011'DEN BERİ", desc: "Kurumsal hizmet" },
    { title: "ZİRAAT MÜHENDİSLERİ", desc: "Yönetiminde" },
    { title: "YETKİLİ VE BELGELİ", desc: "Uygulama altyapısı" },
    { title: "DİJİTAL", desc: "Raporlama ve izlenebilirlik" }
  ];

  const imageTags = [
    "İzleme ve Kontrol", 
    "Hedefe Yönelik Uygulama", 
    "Profesyonel Fumigasyon"
  ];

  return (
    <section className="bg-surface-light py-20 px-6 md:px-10 font-barlow">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Metin ve Rozetler */}
        <div>
          <span className="text-pest-green font-bold tracking-widest text-xs uppercase mb-3 block">
            NEDEN EPCON?
          </span>
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight mb-6 leading-tight">
            Mühendislik Yaklaşımıyla Entegre Zararlı Yönetimi
          </h2>
          <div className="space-y-4 text-text-mid text-[15px] leading-relaxed mb-10">
            <p>
              EPCON, yalnızca periyodik ilaçlama yapan bir uygulama firması değildir. Ziraat mühendisleri yönetiminde; zararlı türünü, aktivitenin kaynağını, giriş noktalarını ve çevresel riskleri değerlendirerek alana özel mücadele programları oluşturur.
            </p>
            <p>
              Uygulamalarımızda T.C. Sağlık Bakanlığı tarafından ruhsatlandırılmış biyosidal ürünler kullanılır. Ürün ve yöntem seçimi hedef zararlı, alanın kullanım amacı, risk seviyesi ve etiket talimatlarına göre yapılır. Tüm süreçler güvenlik tedbirleri, dijital raporlama ve sürekli iyileştirme yaklaşımıyla yönetilir.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="border-l-4 border-pest-green pl-4">
                <div className="text-lg font-bold text-navy mb-0.5">{badge.title}</div>
                <div className="text-sm text-text-muted">{badge.desc}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Görsel ve Etiketler */}
        <div className="relative">
          {/* Müşteri, buraya 3'lü gerçek bir kolaj görseli koyacak */}
          <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-white aspect-[4/3] flex items-center justify-center border-4 border-white">
             <img src="/images/kurumsal/epcon-kolaj.jpg" alt="EPCON Profesyonel İlaçlama" className="w-full h-full object-cover bg-slate-200" />
          </div>
          
          {/* Resim Üzeri Uçan Etiketler */}
          <div className="absolute -bottom-5 -left-5 z-20 flex flex-col gap-2">
            {imageTags.map((tag, idx) => (
              <div key={idx} className="bg-navy text-white text-xs font-bold px-4 py-2 rounded-md shadow-lg flex items-center gap-2">
                <CheckCircle2 size={14} className="text-pest-green" /> {tag}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}