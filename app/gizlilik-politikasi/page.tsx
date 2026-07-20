import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: "Gizlilik Politikası ve KVKK Aydınlatma Metni | EPCON",
  description: "EPCON Çevre Sağlığı Sistemleri Gizlilik Politikası ve Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metni."
};

export default function GizlilikPolitikasiPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      <section className="bg-navy py-16 px-6 text-center text-white">
        <h1 className="font-barlowCondensed text-4xl md:text-5xl font-extrabold uppercase mb-4">Gizlilik ve KVKK Politikası</h1>
        <p className="text-white/80 max-w-2xl mx-auto">Kişisel verilerinizin güvenliği ve gizliliği EPCON Çevre Sağlığı Sistemleri için en yüksek önceliğe sahiptir.</p>
      </section>

      <section className="py-16 px-6 md:px-10 max-w-4xl mx-auto text-text-dark space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <ShieldCheck className="w-8 h-8 text-pest-green" />
          <h2 className="text-2xl font-bold text-navy">1. Kişisel Verilerin Toplanması ve Amacı</h2>
        </div>
        <p className="leading-relaxed text-slate-600">
          EPCON Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti. olarak, web sitemiz üzerinden paylaştığınız bilgileri 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında işlemekteyiz. Bu veriler yalnızca sizlere doğru fiyatlandırmayı sunabilmek, hizmet talebinizi karşılamak ve operasyonel süreçleri yönetmek amacıyla toplanmaktadır.
        </p>

        <h2 className="text-xl font-bold text-navy mt-8 mb-4">2. Verilerin Paylaşımı ve Üçüncü Taraflar</h2>
        <p className="leading-relaxed text-slate-600">
          Toplanan kişisel verileriniz, yasal zorunluluklar dışında hiçbir şekilde üçüncü şahıslara veya kurumlara satılamaz ve paylaşılamaz. Verileriniz yalnızca hizmetin gerçekleştirilmesi amacıyla bünyemizdeki yetkili ziraat mühendisleri ve operasyon ekipleriyle paylaşılmaktadır.
        </p>

        <h2 className="text-xl font-bold text-navy mt-8 mb-4">3. İletişim Formları ve Veri Güvenliği</h2>
        <p className="leading-relaxed text-slate-600">
          "Ücretsiz Teklif Al" formları aracılığıyla toplanan telefon, e-posta, isim ve tesis bilgileri, yüksek güvenlikli sunucularda barındırılır. Gönderim sırasında paylaştığınız özel veya operasyonel notlar gizlilik esasına bağlı kalınarak incelenir.
        </p>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-12 text-sm text-slate-500 text-center">
          Son Güncelleme Tarihi: 2026<br/>
          EPCON Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti.
        </div>
      </section>
    </main>
  );
}