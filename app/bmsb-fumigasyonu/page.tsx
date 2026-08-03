import React from 'react';
import Link from 'next/link';
import ReferenceLogos from "@/components/ReferenceLogos";
import { 
  ShieldCheck, 
  Ship, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Target,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: "BMSB Avustralya ve Yeni Zelanda Fümigasyon | EPCON Fumigasyon",
  description: "Avustralya ve Yeni Zelanda ihracatlarınız için akredite BMSB fümigasyonu. Kahverengi kokarca böceği (Brown Marmorated Stink Bug) tedbirleri ve BMSB sertifikası işlemleri."
};

export default function BmsbPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* ── 1. HERO ALANI (Sol Metin, Sağ Görsel - Mobil Optimizasyonlu) ── */}
      <section className="relative bg-navy pt-6 pb-12 px-6 md:py-24 md:px-10 overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Sol Kısım: Metinler */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-4 py-1.5 rounded-full text-[11px] md:text-sm uppercase tracking-wider border border-pest-green/30 mb-4 md:mb-6">
              <Ship className="w-4 h-4 hidden sm:block" /> AVUSTRALYA VE YENİ ZELANDA BMSB UYGULAMALARI
            </span>
            <h1 className="font-barlowCondensed text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-tight mb-4 md:mb-6">
              Avustralya ve Yeni Zelanda Sevkiyatları İçin <br className="hidden lg:block"/> <span className="text-pest-green">Akredite BMSB Fumigasyonu</span>
            </h1>
            <p className="text-sm md:text-lg text-white/80 font-light leading-relaxed max-w-2xl mb-6 md:mb-10">
              Kahverengi Kokarca Böceği (Brown Marmorated Stink Bug) riskine karşı; sevkiyat ülkesi, ürün sınıfı, yükleme tarihi, konteyner yapısı ve güncel BMSB sezon şartları değerlendirilerek uygulama, gazdan arındırma ve BMSB sertifikası kayıt süreci planlanır.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <Link href="/ucretsiz-teklif-al?type=bmsb" className="w-full sm:w-auto bg-pest-green text-navy font-bold text-[15px] md:text-lg px-8 py-3.5 md:py-4 rounded-lg hover:bg-white transition-colors shadow-lg text-center flex items-center justify-center">
                BMSB Teklif Talep Et
              </Link>
              <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white/10 text-white font-bold text-[15px] md:text-lg px-8 py-3.5 md:py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-center flex items-center justify-center">
                WhatsApp'tan Uzmana Sor
              </a>
            </div>
          </div>

          {/* Sağ Kısım: Görsel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative mt-4 lg:mt-0">
            {/* Görsel arkası yeşil parlama (glow) efekti */}
            <div className="absolute inset-0 bg-pest-green opacity-20 blur-[80px] rounded-full z-0"></div>
            
            {/* Şık çerçeveli görsel alanı */}
            <div className="relative z-10 w-full max-w-[450px] aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-navy-deeper">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1000&auto=format&fit=crop" 
                alt="Avustralya Yeni Zelanda BMSB Fumigasyonu İhracat" 
                className="w-full h-full object-cover block"
                loading="eager" 
              />
            </div>
          </div>

        </div>
      </section>

      <ReferenceLogos />

      {/* ── 2. BMSB HİZMET KAPSAMI VE SEO İÇERİĞİ ── */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-12">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-4">
            BMSB Fümigasyonu Neyi Kapsar?
          </h2>
          <p className="text-base md:text-lg text-navy/80 leading-relaxed mb-6">
            BMSB fümigasyonu, bina ve konutlarda görülen standart böcek ilaçlamasından tamamen farklı, uluslararası geçerliliğe sahip bir biyogüvenlik (karantina) işlemidir. <strong>Avustralya Tarım, Su ve Çevre Departmanı (DAFF)</strong> ve <strong>Yeni Zelanda Birincil Endüstriler Bakanlığı (MPI)</strong> tarafından uygulanan katı kurallar çerçevesinde gerçekleştirilir. 
            <br/><br/>
            Bu hizmet; hedef ülkenin biyogüvenlik gereklilikleri kapsamında, Türkiye'den sevk edilecek yüksek riskli (High Risk) ürün ve yüklerin onaylı yöntemlerle işleme tabi tutulmasını, AEI sertifikası ile kayıt altına alınmasını ve uluslararası standartlarda güvenli sevkiyata hazırlanmasını kapsar.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 mt-6">
            {[
              "Yük ve uygulama sahasının BMSB ön değerlendirmesi",
              "Bakanlık onaylı uygun işlem yönteminin belirlenmesi",
              "Alan veya yük izolasyonu ve operasyon güvenliği",
              "Kayıt ve gerekli AEI sertifika bilgilerinin hazırlanması",
              "Kontrollü gazdan arındırma ve son kalıntı ölçümleri",
              "Avustralya/Yeni Zelanda sevkiyat planıyla uyumlu koordinasyon"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-navy font-medium text-sm">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── 3. İŞLEM YÖNTEMLERİ VE SÜREÇ ── */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <Target className="text-pest-green w-6 h-6" /> BMSB İşlem Yöntemleri
            </h3>
            <p className="text-text-mid mb-6">Uygulanacak işlem yöntemi; ihraç edilecek ürünün cinsi, ambalaj yapısı, hava sıcaklığı, işlem tesisi, Avustralya ve Yeni Zelanda güncel şartları ile EPCON’un yetki kapsamına göre uzman ekibimiz tarafından belirlenir.</p>
            <div className="space-y-4">
              {[
                { t: "Sülfüril Florür Fümigasyonu", d: "Uygun yük ve kapalı hacimlerde, gaz konsantrasyonu takibi ve işlem sonu gazdan arındırma süreçleriyle uygulanan onaylı yöntem." },
                { t: "Metil Bromür Fümigasyonu", d: "Uluslararası karantina ve BMSB ihracat gereklilikleri kapsamında, ürün ve mevzuat uygunluğu doğrulanarak planlanan yöntem." },
                { t: "Isıl İşlem (Heat Treatment)", d: "Uygun ürün veya yüklerin, fümigant (gaz) kullanılmadan, belirlenen sıcaklık ve süre şartlarında ısıya maruz bırakıldığı yöntem." }
              ].map((m, i) => (
                <div key={i} className="bg-white p-5 border border-border rounded-xl hover:border-pest-green transition-colors">
                  <h4 className="font-bold text-navy mb-1">{m.t}</h4>
                  <p className="text-sm text-text-mid">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-navy p-8 rounded-2xl text-white shadow-lg">
              <h3 className="font-barlowCondensed text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                <FileText className="text-pest-green w-6 h-6" /> Akredite İşlem Süreci
              </h3>
              <ul className="space-y-4">
                {[
                  "Talep ve temel sevkiyat bilgilerinin alınması",
                  "Ürün, ambalaj ve sahanın BMSB risk ön değerlendirmesi",
                  "Uygun karantina işlem yöntemi ve operasyon planı",
                  "İzolasyon ve iş güvenliği tedbirlerinin uygulanması",
                  "Güncel DAFF/MPI metodolojisine göre fümigasyon",
                  "Gazdan arındırma (havalandırma) ve güvenlik ölçümü",
                  "BMSB Sertifikasının onayı ve sevkiyata hazırlık"
                ].map((step, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-white/90">
                    <span className="w-6 h-6 rounded-full bg-pest-green text-navy font-bold flex items-center justify-center flex-shrink-0">{idx + 1}</span> {step}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 p-5 rounded-xl flex items-start gap-3 shadow-sm">
              <AlertTriangle className="text-orange-500 w-6 h-6 flex-shrink-0" />
              <p className="text-sm text-navy/90 leading-relaxed">
                <strong className="text-orange-700">Güncellik Notu:</strong> Kahverengi Kokarca Böceği (BMSB) risk sezonu tarihleri, hedef ülkeler, yüksek riskli ürün grupları ve kabul edilen metodolojiler Avustralya ve Yeni Zelanda otoritelerince her sezon değiştirilebilir. Güncel şartlar operasyon öncesi tarafımızca teyit edilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. ALT CTA ── */}
      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">
            BMSB İhracat İşlemi Teklif Talebi
          </h2>
          <p className="text-lg font-medium mb-8">
            Avustralya veya Yeni Zelanda'ya göndereceğiniz ürün ve konteyner yükleme bilgilerinizi kısaca paylaşın. Akredite teknik ekibimiz uygun işlem yöntemi, güncel kurallar ve fiyatlandırma için sizinle hemen iletişime geçsin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/ucretsiz-teklif-al?type=bmsb" 
              className="w-full sm:w-auto bg-navy hover:bg-navy-deeper text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              BMSB Teklif Talebimi Gönder <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}