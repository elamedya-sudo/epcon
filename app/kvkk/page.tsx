import React from "react";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "KVKK Aydınlatma Metni | EPCON İlaçlama",
  description: "Kişisel verilerinizin işlenmesi ve korunmasına dair aydınlatma metnimiz.",
};

export default function KVKKPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-24 font-barlow">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border">
        
        <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
          <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center text-navy">
            <ShieldCheck size={28} />
          </div>
          <h1 className="font-barlowCondensed text-3xl md:text-4xl font-extrabold uppercase text-navy tracking-tight">
            KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİ AYDINLATMA METNİ
          </h1>
        </div>

        <div className="prose prose-base md:prose-lg text-text-mid max-w-none space-y-6">
          <p>
            <strong>EPCON Çevre Sağlığı Hizmetleri</strong> ("Şirket" veya "EPCON") olarak, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu bilinçle, Şirket olarak ürün ve hizmetlerimizden faydalanan kişiler dahil, Şirket ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")'na uygun olarak işlenerek, muhafaza edilmesine büyük önem atfetmekteyiz.
          </p>

          <h3 className="text-xl font-bold text-navy mt-8 mb-4">1. Veri Sorumlusunun Kimliği</h3>
          <p>
            KVKK uyarınca, web sitemiz (www.epcon.com.tr) ve sunduğumuz hizmetler kapsamında paylaştığınız kişisel verileriniz, veri sorumlusu sıfatıyla EPCON tarafından aşağıda belirtilen kapsamda değerlendirilecektir.
          </p>

          <h3 className="text-xl font-bold text-navy mt-8 mb-4">2. Kişisel Verilerin İşlenme Amacı</h3>
          <p>Toplanan kişisel verileriniz (Ad, Soyad, Telefon, E-posta, Adres/İlçe bilgileri vb.);</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tarafımızdan sunulan ilaçlama, pest kontrol ve fümigasyon hizmetlerinden faydalanabilmeniz için gerekli çalışmaların iş birimlerimiz tarafından yapılması,</li>
            <li>Ücretsiz teklif süreçlerinin yürütülmesi ve hizmet taleplerinizin karşılanması,</li>
            <li>Müşteri ilişkileri yönetimi süreçlerinin planlanması ve icrası,</li>
            <li>Şirketimizin ve Şirketimizle iş ilişkisi içerisinde olan ilgili kişilerin hukuki, teknik ve ticari-iş güvenliğinin temini amaçlarıyla işlenmektedir.</li>
          </ul>

          <h3 className="text-xl font-bold text-navy mt-8 mb-4">3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h3>
          <p>
            Toplanan kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, iş ortaklarımıza, kanunen yetkili kamu kurumlarına ve özel kişi/kuruluşlara (hizmet kalitesini artırmak amacıyla sunucu, altyapı ve yazılım hizmeti alınan yurt içi/yurt dışı teknoloji firmalarına) KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar çerçevesinde aktarılabilecektir.
          </p>

          <h3 className="text-xl font-bold text-navy mt-8 mb-4">4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h3>
          <p>
            Kişisel verileriniz, web sitemizdeki iletişim ve teklif formları, çağrı merkezimiz, e-posta kanalları ve yüz yüze görüşmeler aracılığıyla sözlü, yazılı veya elektronik ortamda toplanmaktadır. Bu veriler, KVKK Madde 5/2-c (Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması) ve Madde 5/2-f (Veri sorumlusunun meşru menfaatleri) hukuki sebeplerine dayanılarak işlenmektedir.
          </p>

          <h3 className="text-xl font-bold text-navy mt-8 mb-4">5. İlgili Kişinin Hakları (KVKK Madde 11)</h3>
          <p>Kişisel veri sahipleri olarak;</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
            <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme ve eksik/yanlış işlenmişse düzeltilmesini isteme haklarına sahipsiniz.</li>
          </ul>
          
          <p className="mt-8 pt-6 border-t border-border text-sm">
            Taleplerinizi info@epcon.com.tr e-posta adresine yazılı olarak iletebilirsiniz. Başvurunuz, talebinizin niteliğine göre en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırılacaktır.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/" className="px-6 py-3 bg-slate-100 text-navy font-bold rounded-lg hover:bg-slate-200 transition-colors">
            Anasayfaya Dön
          </Link>
        </div>
      </div>
    </main>
  );
}