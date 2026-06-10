import MainPestHero from "@/components/heros/MainPestHero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import PestServices from "@/components/PestServices"; // Yeni bileşeni ekledik

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

      {/* 5. Bölüm: Müşteri Yorumları (Gelecek)
          6. Bölüm: Referanslar ve İstatistikler (Gelecek) 
          7. Bölüm: Footer Öncesi Son Çağrı (Gelecek)
      */}
    </main>
  );
}