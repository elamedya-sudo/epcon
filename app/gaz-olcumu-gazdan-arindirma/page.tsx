import React from 'react';
import Link from 'next/link';
import { Wind, ShieldCheck, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "Gaz Ölçümü ve Gazdan Arındırma | EPCON Fumigasyon",
  description: "Fumigasyon süresi tamamlandıktan sonra kontrollü havalandırma, kör nokta kontrolleri ve kalıntı gaz ölçümleri gerçekleştirilerek güvenli açılış sağlanır."
};

export default function GazOlcumuPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Wind className="w-4 h-4" /> ÖLÇÜM • HAVALANDIRMA • GÜVENLİ AÇILIŞ
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Gazdan Arındırma ve <span className="text-pest-green">Güvenli Kullanıma Açma</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Fumigasyon süresi tamamlandıktan sonra kontrollü havalandırma, uygun ölçüm noktaları, kör bölge kontrolleri ve kalıntı gaz ölçümleriyle alanın veya yükün güvenli koşullarda açılması sağlanır.
            </p>
            <div className="pt-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block">Gaz Ölçümü / Gazdan Arındırma Talep Et</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase mb-4">Temel Güvenlik Aşaması</h2>
          <p className="text-lg text-text-mid leading-relaxed">
            Gazdan arındırma, fumigasyondan bağımsız sonradan eklenen bir hizmet değildir. İnsan sağlığı, saha güvenliği ve sevkiyatın güvenli biçimde devam edebilmesi için fumigasyon planının başından itibaren tasarlanması gereken temel aşamadır.
          </p>
          <ul className="space-y-4 mt-6">
            {["Kontrollü havalandırma planı", "Uygun noktalardan kalıntı gaz ölçümü", "Kör noktalar, yük içi ve kapalı bölümlerin kontrolü", "Güvenli açılış veya sevkiyat kararının kayıt altına alınması"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0" />
                <span className="text-navy font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-pest-green p-10 rounded-3xl text-navy">
          <h2 className="font-barlowCondensed text-3xl font-bold uppercase mb-6 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8" /> Güvenli Açılış Şartı
          </h2>
          <p className="text-lg font-medium leading-relaxed">
            Alan, konteyner veya yük yalnızca yetkili personel tarafından yapılan son gaz ölçümleri ve saha kontrolü sonucunda güvenli koşullar doğrulandıktan sonra kullanıma veya sevkiyata açılmalıdır.
          </p>
        </div>
      </section>
    </main>
  );
}