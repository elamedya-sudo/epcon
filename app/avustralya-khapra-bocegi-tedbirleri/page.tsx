import React from "react";
import Link from "next/link";
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  ShieldAlert, 
  Container, 
  Leaf, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  Info
} from "lucide-react";

export const metadata = {
  title: "Avustralya Khapra Böceği Tedbirleri | EPCON Fümigasyon",
  description: "Avustralya Khapra böceği (Trogoderma granarium) tedbirleri kapsamında yüksek riskli bitkisel ürünler ve zorunlu konteyner fümigasyon şartları.",
};

export default function KhapraBocegiPage() {
  const yuksekRiskliUrunler = [
    { tr: "Nohut", lat: "Cicer Arietinum" },
    { tr: "Kişniş Tohumu", lat: "Coriandrum Sativum" },
    { tr: "Kabak Çekirdeği", lat: "Cucurbita, Cucumis, Citrullus Spp." },
    { tr: "Kimyon Tohumu", lat: "Cuminum Cyminum" },
    { tr: "Kuru Biber / Kırmızı Biber", lat: "Capsicum Spp." },
    { tr: "Faba Fasulyesi", lat: "Vicia Faba" },
    { tr: "Rezene Tohumu", lat: "Foeniculum Vulgare" },
    { tr: "Mercimek", lat: "Lens Culinaris" },
    { tr: "Maş Fasulyesi, Börülce", lat: "Vigna Spp." },
    { tr: "Bezelye Tohumu", lat: "Pisum Sativum" },
    { tr: "Fıstık", lat: "Arachis Hypogaea" },
    { tr: "Güvercin Bezelye Tohumu", lat: "Cajanus Cajan" },
    { tr: "Pirinç", lat: "Oryza Sativa" },
    { tr: "Aspir Tohumu", lat: "Carthamus Tinctorius" },
    { tr: "Soya Fasulyesi", lat: "Glisin Max" },
    { tr: "Fasulye Tohumu", lat: "Phaseolus Spp." },
    { tr: "Kereviz Tohumu", lat: "Apium Graveolens" },
    { tr: "Buğday Tohumu", lat: "Triticum Spp." },
  ];

  const risksizUrunler = [
    "Ticari olarak üretilmiş dondurulmuş veya dondurularak kurutulmuş gıdalar (Sadece bozulabilir gıda maddeleri)",
    "Ticari olarak hazırlanmış ve perakende ambalajlanmış fırıncılık ve ekmek karışımları (Bütün tohumlar dahil)*",
    "Ticari olarak toz, kaba un veya pul haline getirilen ve 25 kg’a eşit veya daha küçük torbalarda paketlenmiş mallar (İrmik, buğday unu, kırmızı pul biber ve öğütülmüş baharatlar gibi tahıl unları)",
    "Ticari olarak hazırlanmış ve perakende paketlenmiş kahvaltılık gevrekler, hazır tahıl içecek karışımları, kuskus yemek karışımları ve atıştırmalık yiyecekler (Müsli barlar, granola barlar ve tam gıda barları/topları, iz karışımları gibi)*",
    "Malzemenin doğası orijinal ham formundan dönüştürülecek şekilde termal olarak işlenmiş, ticari olarak hazırlanmış ve paketlenmiş mallar, örneğin imbiklenmiş, beyazlatılmış, kavrulmuş, kızartılmış, kısmen kaynatılmış, kaynatılmış, şişirilmiş, maltlanmış veya pastörize edilmiş ürünler.",
    "Tohumlu veya tohumsuz ticari olarak hazırlanmış ve paketlenmiş bitki çayları (Gevşek yaprak ve çay poşetleri dahil)",
    "Formalin propionik asit fiksatif, formalin asetik asit alkol, Carnoy’s fiksatif veya etanol gibi kimyasal olarak işlenmiş ve korunmuş ürünler.",
    "Taze sebzeler",
    "Sebzelerden veya tohumlardan elde edilen yağlar",
    "Konserve veya salamura (Sirke veya alkolde olduğu gibi)",
    "Bitki araştırması için donmuş bitki örnekleri (Sıvı nitrojen kullanımı ve dondurarak kurutma dahil)",
    "Bitki bazlı ham maddelerden belirli bileşenler elde etmek için rafine edilmiş veya ekstrakte edilmiş mallar. (Örnekler arasında nişasta, lesitin, glüten, protein, selüloz, şekerler ve pigmentler bulunur.)"
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* ── 1. HERO ALANI (Metin Solda, Görsel Sağda) ── */}
      <section className="relative bg-navy py-20 lg:py-24 px-6 md:px-10 overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Sol Kısım: Metinler */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-4 py-1.5 rounded-full text-[11px] md:text-sm uppercase tracking-wider border border-pest-green/30 mb-6">
              <ShieldAlert size={16} /> ULUSLARARASI KARANTİNA VE FÜMİGASYON ŞARTLARI
            </span>
            
            <h1 className="font-barlowCondensed text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-tight mb-6">
              Avustralya <span className="text-pest-green">Khapra Böceği</span> Tedbirleri
            </h1>
            
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
              Avustralya, tarım alanları için ciddi bir risk oluşturan <span className="italic font-medium">Trogoderma granarium</span> (Khapra Böceği) tehdidini ülkesinden uzak tutmak amacıyla yüksek riskli bitkisel ürünler ve deniz konteynerleri ithalatında acil karantina önlemlerini hayata geçirmiştir.
            </p>
          </div>

          {/* Sağ Kısım: Khapra Böceği Görseli */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative mt-8 lg:mt-0">
            {/* Görselin arkasına hafif yeşil bir parlama (glow) efekti eklendi */}
            <div className="absolute inset-0 bg-pest-green opacity-10 blur-[80px] rounded-full z-0"></div>
            
            <img 
              src="/images/khapra-bocegi.png" 
              alt="Avustralya Khapra Böceği (Trogoderma granarium)" 
              className="w-full max-w-[350px] lg:max-w-[450px] h-auto object-contain drop-shadow-2xl relative z-10" 
            />
          </div>

        </div>
      </section>

      {/* ── 2. ZORUNLU İŞLEM BİLGİLENDİRMESİ ── */}
      <section className="py-16 md:py-20 px-6 md:px-10 max-w-5xl mx-auto">
        <div className="bg-surface-light border border-border rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center text-pest-green shrink-0 shadow-lg">
            <Container size={40} />
          </div>
          <div>
            <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-3">
              Deniz Konteynerleri İçin Acil Eylem Planı
            </h2>
            <p className="text-text-mid leading-relaxed text-base md:text-lg">
              Avustralya hükümeti, Khapra böceğinin ülkeye giriş riskini en aza indirmek için hedef riskli ülkelerden ihraç edilen yüksek riskli bitki ürünleri taşıyan konteynerlere katı kurallar getirmiştir.
            </p>
            <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
                <p className="text-red-900 font-medium text-sm md:text-base leading-relaxed">
                  Konteynerler, ihracattan <strong>en fazla 21 gün önce Methyl Bromür (Metil Bromür) fümigasyon işleminden</strong> geçmiş ve uygun <strong>AEI sertifikasına</strong> sahip olmalıdır. Bu gerekliliklere uyulmaması, varış noktasında konteynerin Avustralya'dan ihraç edilmesiyle (geri gönderilmesiyle) sonuçlanacaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. YÜKSEK RİSKLİ ÜRÜNLER (Izgara Tasarımı) ── */}
      <section className="py-16 px-6 md:px-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-pest-green font-bold tracking-widest text-sm uppercase mb-2 block">
              ZORUNLU FÜMİGASYON KAPSAMINDAKİLER
            </span>
            <h2 className="font-barlowCondensed text-3xl md:text-4xl font-extrabold uppercase text-navy tracking-tight flex items-center justify-center gap-3">
              <Leaf className="text-pest-green" size={32} /> Yüksek Riskli Bitki Ürünleri
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {yuksekRiskliUrunler.map((urun, index) => (
              <div key={index} className="bg-white border border-slate-200 p-5 rounded-xl hover:border-navy hover:shadow-md transition-all group">
                <h3 className="font-bold text-navy text-[15px] mb-1 group-hover:text-pest-green transition-colors">
                  {urun.tr}
                </h3>
                <p className="text-xs text-text-muted italic">
                  {urun.lat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. RİSKSİZ KABUL EDİLEN ÜRÜNLER (Liste Tasarımı) ── */}
      <section className="py-16 md:py-24 px-6 md:px-10 max-w-5xl mx-auto">
        <div className="mb-12 flex items-center gap-4 border-b border-border pb-6">
          <div className="w-12 h-12 bg-pest-green/20 rounded-lg flex items-center justify-center text-navy shrink-0">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h2 className="font-barlowCondensed text-3xl font-extrabold uppercase text-navy">
              Yüksek Riskli Olmayan Bitki Ürünleri
            </h2>
            <p className="text-sm text-text-muted mt-1">Aşağıdaki işlem görmüş veya ticari olarak paketlenmiş ürünler riskli grupta değerlendirilmez.</p>
          </div>
        </div>

        <div className="space-y-4">
          {risksizUrunler.map((madde, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-light transition-colors">
              <div className="mt-1 text-pest-green">
                <Info size={18} />
              </div>
              <p className="text-[15px] text-text-dark leading-relaxed">
                {madde}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-xs text-text-muted mt-8 italic text-right">
          * Belirtilen istisnai ürünler güncel Avustralya Biyogüvenlik standartlarına tabidir, sevkiyat öncesi teyit edilmesi önerilir.
        </p>
      </section>

      {/* ── 5. ÇAĞRI (Bottom CTA) ── */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-4xl font-extrabold uppercase text-white mb-4">
            Avustralya İhracatınız İçin Fümigasyon Hizmeti
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-8">
            BMSB ve Khapra Böceği önlemleri kapsamında, uluslararası geçerliliğe sahip AEI sertifikalı Methyl Bromür fümigasyon işlemleriniz için uzman kadromuzla iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/ucretsiz-teklif-al" 
              className="w-full sm:w-auto bg-pest-green hover:bg-pest-green-dark text-navy font-bold py-4 px-8 rounded-md transition-all flex items-center justify-center gap-2 text-sm tracking-wide shadow-lg"
            >
              Fümigasyon Teklifi Al <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── REFERANS LOGOLARI ŞERİDİ ── */}
      <ReferenceLogos />
      
    </main>
  );
}