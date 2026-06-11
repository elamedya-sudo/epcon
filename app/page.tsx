import MainPestHero from "@/components/heros/MainPestHero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import PestServices from "@/components/PestServices";
import Testimonials from "@/components/Testimonials";
import References from "@/components/References";
import BottomCTA from "@/components/BottomCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* 1. Bölüm: Hero ve Ücretsiz Keşif Formu */}
      <MainPestHero />
      
      {/* 2. Bölüm: TSE ve Ruhsat Güven Şeridi */}
      <TrustBar />

      {/* 3. Bölüm: Nasıl Çalışıyoruz (3 Adımda Haşeresiz Ev) */}
      <HowItWorks />

      {/* 4. Bölüm: Haşere Türleri / Hizmetler */}
      <PestServices />

      {/* 5. Bölüm: Müşteri Yorumları */}
      <Testimonials />

      {/* 6. Bölüm: Referans Logoları */}
      <References />

      {/* 7. Bölüm: Kapanış / Aksiyon Çağrısı */}
      <BottomCTA />
    </main>
  );
}