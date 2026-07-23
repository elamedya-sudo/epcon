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
  title: "BMSB Fumigasyonu | EPCON Fumigasyon",
  description: "Sevkiyat ülkesi, ürün sınıfı, yükleme tarihi, konteyner yapısı ve güncel BMSB sezon şartları değerlendirilerek uygulama, gazdan arındırma ve kayıt süreci planlanır."
};

export default function BmsbPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Ship className="w-4 h-4" /> AVUSTRALYA BMSB UYGULAMALARI
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Avustralya Sevkiyatları İçin <span className="text-pest-green">Akredite BMSB Fumigasyonu</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Sevkiyat ülkesi, ürün sınıfı, yükleme tarihi, konteyner yapısı ve güncel BMSB sezon şartları değerlendirilerek uygulama, gazdan arındırma ve kayıt süreci planlanır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/ucretsiz-teklif-al?type=bmsb" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors text-center shadow-lg">
                BMSB Teklif Talep Et
              </Link>
            </div>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1000&auto=format&fit=crop" alt="BMSB Fumigasyonu İhracat" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      <ReferenceLogos />
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-12">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-4">BMSB Hizmeti Neyi Kapsar?</h2>
          <p className="text-lg text-navy/80 leading-relaxed mb-6">
            Bu hizmet, bina ve konutlarda görülen kahverengi kokarca mücadelesinden farklıdır. BMSB ihracat işlemleri; hedef ülkenin biyogüvenlik gereklilikleri kapsamında sevk edilecek ürün ve yüklerin kabul edilen bir yöntemle işleme tabi tutulmasını, kayıt altına alınmasını ve güvenli sevkiyata hazırlanmasını kapsar.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Yük ve uygulama sahasının ön değerlendirmesi",
              "Uygun işlem yönteminin belirlenmesi",
              "Alan veya yük izolasyonu ve operasyon güvenliği",
              "Kayıt ve gerekli sertifika bilgilerinin hazırlanması",
              "Kontrollü gazdan arındırma ve son ölçümler",
              "Sevkiyat planıyla uyumlu operasyon koordinasyonu"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-navy font-medium text-sm">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
              <Target className="text-pest-green w-6 h-6" /> BMSB İşlem Yöntemleri
            </h3>
            <p className="text-text-mid mb-6">Yöntem; ürün, ambalaj, sıcaklık, işlem tesisi, hedef ülke şartları ve EPCON’un güncel kayıt kapsamına göre teknik ekip tarafından belirlenir.</p>
            <div className="space-y-4">
              {[
                { t: "Sülfüril Florür", d: "Uygun yük ve kapalı hacimlerde gaz konsantrasyonu takibi ve gazdan arındırmayla uygulanan yöntem." },
                { t: "Metil Bromür", d: "Karantina ve ihracat gereklilikleri kapsamında ürün ve mevzuat uygunluğu doğrulanarak planlanan yöntem." },
                { t: "Isıl İşlem", d: "Uygun ürün veya yüklerin belirlenen sıcaklık ve süre şartlarında işlem gördüğü fumigant kullanılmayan yöntem." }
              ].map((m, i) => (
                <div key={i} className="bg-white p-5 border border-border rounded-xl">
                  <h4 className="font-bold text-navy mb-1">{m.t}</h4>
                  <p className="text-sm text-text-mid">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-navy p-8 rounded-2xl text-white">
              <h3 className="font-barlowCondensed text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                <FileText className="text-pest-green w-6 h-6" /> BMSB İşlem Süreci
              </h3>
              <ul className="space-y-4">
                {[
                  "Talep ve temel sevkiyat bilgilerinin alınması",
                  "Ürün, ambalaj ve sahanın ön değerlendirmesi",
                  "Uygun işlem yöntemi ve operasyon planı",
                  "İzolasyon ve güvenlik tedbirlerinin uygulanması",
                  "Güncel metodoloji ve kayıt şartlarına göre işlem",
                  "Gazdan arındırma ve son güvenlik ölçümü",
                  "Kayıtların tamamlanması ve sevkiyata hazırlık"
                ].map((step, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                    <span className="w-6 h-6 rounded-full bg-pest-green text-navy flex items-center justify-center flex-shrink-0">{idx + 1}</span> {step}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-5 rounded-xl flex items-start gap-3">
              <AlertTriangle className="text-orange-500 w-6 h-6 flex-shrink-0" />
              <p className="text-sm text-navy/80"><strong>Güncellik Notu:</strong> BMSB risk sezonu, hedef ülkeler, ürün grupları ve kabul edilen metodolojiler her sezon değişebilir. Güncel şartlar operasyon öncesi teyit edilir.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">BMSB İşlemi Teklif Talebi</h2>
          <p className="text-lg font-medium mb-8">Avustralya veya ilgili hedef ülkeye göndereceğiniz ürün ve yük bilgilerini kısaca paylaşın. Teknik ekibimiz uygun işlem yöntemi ve fiyatlandırma için sizinle iletişime geçsin.</p>
          <Link href="/ucretsiz-teklif-al?type=bmsb" className="inline-block bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">BMSB Teklif Talebimi Gönder</Link>
        </div>
      </section>
    </main>
  );
}