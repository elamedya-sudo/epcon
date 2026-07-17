import React from 'react';
import Link from 'next/link';
import { 
  PackageSearch, 
  CheckCircle, 
  AlertTriangle,
  FileText
} from 'lucide-react';

export const metadata = {
  title: "Metil Bromür Fumigasyonu | EPCON Fumigasyon",
  description: "Metil bromür, belirli karantina ve ihracat gereklilikleri kapsamında değerlendirilen fumigasyon yöntemlerinden biridir."
};

export default function MetilBromurPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <PackageSearch className="w-4 h-4" /> KARANTİNA • İHRACAT • KONTROLLÜ UYGULAMA
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Metil Bromür <span className="text-pest-green">Fumigasyonu</span>
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Metil bromür, belirli karantina ve ihracat gereklilikleri kapsamında değerlendirilen fumigasyon yöntemlerinden biridir. Uygulama; ürün uygunluğu, sıcaklık, hedef ülke şartları, güncel mevzuat ve EPCON’un yetki kapsamı doğrulandıktan sonra planlanır.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Metil Bromür Teklifi Al
              </Link>
            </div>
            <p className="text-sm text-white/50">* Uygulama yalnızca ürün, metodoloji ve mevzuat uygunluğu doğrulandıktan sonra planlanır.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-white border border-border p-8 rounded-3xl shadow-sm">
          <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-6 flex items-center gap-3">
            <FileText className="text-pest-green w-6 h-6" /> Kullanım Alanları
          </h3>
          <ul className="space-y-4">
            {[
              "Karantina amaçlı uygulamalar",
              "Belirli ihracat yükleri",
              "EPCON’un güncel kapsamı dâhilinde BMSB işlemleri",
              "Uygun ürün ve ahşap ambalaj uygulamaları (ISPM 15)",
              "Resmî işlem şartı bulunan yükler"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-text-mid font-medium text-sm">
                <CheckCircle className="text-pest-green w-5 h-5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-4 flex items-center gap-3">
              Uygunluk ve Mevzuat
            </h3>
            <p className="text-navy/80 leading-relaxed text-sm">
              Metil bromür her ürün ve alan için uygun değildir. Çevresel etkileri ve kullanım kısıtları nedeniyle yalnızca izin verilen amaç, ürün ve metodoloji kapsamında; yetkili personel ve kayıtlı operasyonla uygulanmalıdır.
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 p-8 rounded-3xl">
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-4 flex items-center gap-3">
              <AlertTriangle className="text-orange-500 w-6 h-6" /> Güvenlik Aşamaları
            </h3>
            <p className="text-navy/80 leading-relaxed text-sm">
              İşlem sahası izole edilir, yetkisiz giriş engellenir, kaçak ve konsantrasyon kontrolleri yapılır. Maruz kalma süresi sonunda kontrollü havalandırma ve gazdan arındırma gerçekleştirilir; yük veya alan son ölçümler doğrulanmadan açılmaz.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}