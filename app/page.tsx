import LeadHero from "@/components/LeadHero";
import TrustBar from "@/components/TrustBar";
import PestServices from "@/components/PestServices";
import Testimonials from "@/components/Testimonials";
import References from "@/components/References";
import BottomCTA from "@/components/BottomCTA";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Building2, Ship } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      
      {/* 1. MASTER HERO (Video Arka Planlı) */}
      <LeadHero 
        videoBackground="https://cdn.pixabay.com/video/2024/01/20/197489-905015030_large.mp4" // Şimdilik dışarıdan çekilen şık bir laboratuvar/kimya videosu. İleride kendi videonu buraya koyabilirsin.
        badgeText="Türkiye'nin Pest Kontrol Otoritesi"
        titleMain="Ziraat Mühendisleri Yönetiminde"
        titleHighlight="Tam Koruma"
        description={
          <>Eviniz, işletmeniz veya endüstriyel tesisiniz için <strong className="text-white/85 font-normal">WHO standartlarında, TSE belgeli ve garantili</strong> entegre haşere kontrol ve fümigasyon hizmetleri.</>
        }
        mekanTurleri={["Ev / Daire / Villa", "Site / Ortak Alan", "Fabrika / Üretim Tesisi", "Gemi / Konteyner / Silo", "Otel / Restoran / Kafe", "Ofis / İş Merkezi"]}
        features={[
          { icon: <span>🏆</span>, label: "20+ Yıl Deneyim" },
          { icon: <span>🔬</span>, label: "Ziraat Mühendisi Onaylı" },
          { icon: <span>🌍</span>, label: "Uluslararası Standart" }
        ]}
      />
      
      {/* 2. GÜVEN ŞERİDİ */}
      <TrustBar />

      {/* 3. ANA HİZMET SÜTUNLARI (Trafiği Dağıtma Merkezi) */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight mb-4">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="text-lg text-text-mid">
            Sorununuzun büyüklüğü ne olursa olsun, her mekana ve ihtiyaca özel garantili çözümler üretiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kart 1: Bireysel */}
          <Link href="/sektorel-ilaclama" className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-pest-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-pest-green transition-colors">
              <ShieldCheck className="w-10 h-10 text-pest-green group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">Bireysel İlaçlama</h3>
            <p className="text-text-mid mb-6 flex-grow">
              Ev, villa ve siteleriniz için ailenize ve evcil hayvanlarınıza zarar vermeyen, Sağlık Bakanlığı onaylı kokusuz ve garantili çözümler.
            </p>
            <span className="font-bold text-navy group-hover:text-pest-green flex items-center gap-2 transition-colors">
              Detaylı İncele <ArrowRight size={18} />
            </span>
          </Link>

          {/* Kart 2: Kurumsal */}
          <Link href="/pest-kontrol" className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-navy transition-colors">
              <Building2 className="w-10 h-10 text-navy group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">Kurumsal Pest Kontrol</h3>
            <p className="text-text-mid mb-6 flex-grow">
              Fabrika, otel, hastane ve gıda işletmeleri için yasal denetimlere (BRC, ISO vb.) uygun, raporlamalı entegre pest kontrol programı.
            </p>
            <span className="font-bold text-navy group-hover:text-pest-green flex items-center gap-2 transition-colors">
              Detaylı İncele <ArrowRight size={18} />
            </span>
          </Link>

          {/* Kart 3: Fümigasyon */}
          <Link href="/fumigasyon" className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
              <Ship className="w-10 h-10 text-orange-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">Fümigasyon Hizmetleri</h3>
            <p className="text-text-mid mb-6 flex-grow">
              Gemi, konteyner, ahşap palet ve silolar için uluslararası geçerliliğe sahip, WHO standartlarında profesyonel fümigasyon.
            </p>
            <span className="font-bold text-navy group-hover:text-pest-green flex items-center gap-2 transition-colors">
              Detaylı İncele <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </section>

      {/* 4. KURUMSAL VURGU (Neden Biz?) */}
      <section className="bg-navy py-20 px-6 md:px-10 overflow-hidden relative">
        {/* Arka plan dekoratif çizgileri */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-pest-green font-bold tracking-wider text-sm uppercase mb-3 block">Neden Epcon?</span>
            <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight mb-6">
              20 Yılı Aşkın Deneyim ve Mühendislik Yaklaşımı
            </h2>
            <div className="space-y-4 text-white/70 text-lg font-light leading-relaxed">
              <p>
                Sıradan bir ilaçlama firması değiliz. Bünyemizdeki Ziraat Mühendisleri ile haşerenin biyolojisini, kaynağını ve alışkanlıklarını bilimsel temellerle analiz ediyor, en doğru ve kalıcı çözümü üretiyoruz.
              </p>
              <p>
                Kullandığımız tüm ürünler <strong className="text-white font-medium">Sağlık Bakanlığı ve Dünya Sağlık Örgütü (WHO)</strong> onaylı olup, çevreye, çocuklarınıza ve evcil hayvanlarınıza zarar vermez. Sürpriz maliyetler çıkarmadan, %100 memnuniyet garantisiyle çalışıyoruz.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-pest-green pl-4">
                <div className="text-3xl font-extrabold text-white mb-1">500+</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Kurumsal Referans</div>
              </div>
              <div className="border-l-4 border-pest-green pl-4">
                <div className="text-3xl font-extrabold text-white mb-1">%100</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Memnuniyet Garantisi</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative z-10">
                <img src="/images/fumigasyon/fumigasyon-resim3.jpg" alt="Epcon Profesyonel İlaçlama" className="w-full h-auto object-cover" />
             </div>
             {/* Dekoratif kutu */}
             <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-pest-green rounded-2xl z-0 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* 5. HANGİ HAŞEREDEN ŞİKAYETÇİSİNİZ? (Hızlı Rehber) */}
      <PestServices />

      {/* 6. REFERANSLAR VE YORUMLAR */}
      <Testimonials />      
      <References />


      {/* 7. BOTTOM CTA */}
      <BottomCTA />
      
    </main>
  );
}