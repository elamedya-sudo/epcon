import React from "react";
import LeadHero from "@/components/LeadHero";
import TrustBar from "@/components/TrustBar";
import MainServices from "@/components/MainServices";
import WhyEpcon from "@/components/WhyEpcon";
import PestServices from "@/components/PestServices";
import Testimonials from "@/components/Testimonials";
import References from "@/components/References";
import BottomCTA from "@/components/BottomCTA";
import ReferenceLogos from "@/components/ReferenceLogos";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HERO ALANI (Video kaynağı geri eklendi) */}
      <LeadHero 
        videoBackground="/videos/epcon-hy.mp4"
      />
      <ReferenceLogos />


      {/* 3. ÜÇ ANA HİZMET KARTI (Konut, IPM, Fümigasyon) */}
      <MainServices />

      {/* 4. NEDEN EPCON? (Mühendislik Yaklaşımı ve 3'lü Gerçek Görsel) */}
      <WhyEpcon />

      {/* 5. ZARARLI TÜRLERİ KARTLARI (Tıklanabilir SEO Linkli Kartlar) */}
      <PestServices />

      {/* 6. MÜŞTERİ DENEYİMLERİ (Yalnızca Gerçek Yorumlar) */}
      <Testimonials />

      {/* 7. REFERANS SEKTÖRLERİ */}
      <References />

      {/* 8. ALT GÜVEN KARTLARI */}
      <section className="bg-surface-light py-10 md:py-14 border-b border-border font-barlow">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl md:text-2xl font-extrabold text-navy font-barlowCondensed tracking-wide mb-1">2011'DEN BERİ</span>
            <span className="text-sm text-text-muted">Kurumsal hizmet</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl md:text-2xl font-extrabold text-navy font-barlowCondensed tracking-wide mb-1">ZİRAAT MÜHENDİSLERİ</span>
            <span className="text-sm text-text-muted">Yönetiminde</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl md:text-2xl font-extrabold text-navy font-barlowCondensed tracking-wide mb-1">TÜRKİYE GENELİ</span>
            <span className="text-sm text-text-muted">Hizmet ağı</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl md:text-2xl font-extrabold text-navy font-barlowCondensed tracking-wide mb-1">DİJİTAL</span>
            <span className="text-sm text-text-muted">Raporlama ve izlenebilirlik</span>
          </div>
        </div>
      </section>

      {/* 9. ALT TEKLİF ÇAĞRISI (Bottom CTA) */}
      <BottomCTA />
      
    </main>
  );
}