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
        <h1 className="font-barlowCondensed text-4xl md:text-5xl font-extrabold uppercase mb-4">
          Gizlilik ve KVKK Politikası
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Kişisel verilerinizin güvenliği ve gizliliği EPCON Çevre Sağlığı Sistemleri için en yüksek önceliğe sahiptir.
        </p>
      </section>

      <section className="py-16 px-6 md:px-10 max-w-4xl mx-auto text-text-dark space-y-8">
        
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <ShieldCheck className="w-8 h-8 text-pest-green" />
          <h2 className="text-2xl font-bold text-navy">1. Kişisel Verilerin Toplanması ve Amacı</h2>
        </div>
        <p className="leading-relaxed text-slate-600">
          EPCON Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti. olarak, web sitemiz (www.epcon.com.tr) üzerinden "Teklif Al" ve "İletişim" formları aracılığıyla paylaştığınız Ad, Soyad, Telefon, E-posta ve Adres (İlçe) bilgilerini 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında işlemekteyiz. Bu veriler yalnızca sizlere doğru fiyatlandırmayı sunabilmek, hizmet talebinizi karşılamak ve operasyonel süreçleri yönetmek amacıyla toplanmaktadır.
        </p>

        <h2 className="text-xl font-bold text-navy mt-8 mb-4">2. Verilerin Paylaşımı ve Üçüncü Taraflar</h2>
        <p className="leading-relaxed text-slate-600">
          Toplanan kişisel verileriniz, yasal zorunluluklar dışında hiçbir şekilde üçüncü şahıslara veya kurumlara satılamaz, kiralanamaz ve paylaşılamaz. Verileriniz yalnızca hizmetin gerçekleştirilmesi amacıyla EPCON bünyesindeki yetkili ziraat mühendisleri ve operasyon ekipleriyle paylaşılmaktadır.
        </p>

        <h2 className="text-xl font-bold text-navy mt-8 mb-4">3. Çerez (Cookie) Kullanımı</h2>
        <p className="leading-relaxed text-slate-600">
          Web sitemiz, ziyaretçi deneyimini artırmak ve sitemizin performansını analiz etmek amacıyla yasal standartlara uygun temel çerezler (cookies) kullanmaktadır. Bu çerezler üzerinden kişisel kimlik bilgileriniz (isim, soyisim vb.) takip edilemez. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman devre dışı bırakabilirsiniz.
        </p>

        <h2 className="text-xl font-bold text-navy mt-8 mb-4">4. Kullanıcı Hakları ve İletişim</h2>
        <p className="leading-relaxed text-slate-600">
          6698 sayılı KVKK 11. Madde uyarınca, verilerinizin işlenip işlenmediğini öğrenme, yanlış işlenmişse düzeltilmesini talep etme veya silinmesini isteme hakkına sahipsiniz. Bu konudaki taleplerinizi <strong>info@epcon.com.tr</strong> adresine mail yoluyla veya <strong>0216 505 73 06</strong> numaralı telefondan firmamıza ulaşarak iletebilirsiniz.
        </p>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-12 text-sm text-slate-500 text-center">
          Son Güncelleme Tarihi: Ocak 2026<br/>
          EPCON Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti.
        </div>
      </section>
    </main>
  );
}