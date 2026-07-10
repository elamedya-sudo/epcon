import React from "react";
import { Cookie } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Çerez Politikası | EPCON İlaçlama",
  description: "Web sitemizde kullanılan çerezler ve yönetim politikamız.",
};

export default function CerezPolitikasiPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-24 font-barlow">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border">
        
        <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
          <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center text-navy">
            <Cookie size={28} />
          </div>
          <h1 className="font-barlowCondensed text-3xl md:text-4xl font-extrabold uppercase text-navy tracking-tight">
            ÇEREZ (COOKIE) POLİTİKASI
          </h1>
        </div>

        <div className="prose prose-base md:prose-lg text-text-mid max-w-none space-y-6">
          <p>
            <strong>EPCON Çevre Sağlığı Hizmetleri</strong> olarak, web sitemizi (www.epcon.com.tr) ziyaretiniz sırasında deneyiminizi geliştirmek, sitemizin verimli çalışmasını sağlamak ve hizmetlerimizi iyileştirmek amacıyla çerezler (cookies) kullanmaktayız. 
          </p>

          <h3 className="text-xl font-bold text-navy mt-8 mb-4">1. Çerez (Cookie) Nedir?</h3>
          <p>
            Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcılar aracılığıyla cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır. İnternet sitesinin cihazınızı tanımasını ve tercihlerinizi (dil, konum vb.) hatırlamasını sağlar.
          </p>

          <h3 className="text-xl font-bold text-navy mt-8 mb-4">2. Hangi Çerezleri Kullanıyoruz?</h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Zorunlu Çerezler:</strong> Web sitemizin düzgün çalışması ve özelliklerinden tam olarak faydalanabilmeniz için kesinlikle gerekli olan çerezlerdir. Bu çerezler engellendiğinde sitenin bazı bölümleri çalışmayabilir.
            </li>
            <li>
              <strong>Performans ve Analiz Çerezleri:</strong> Ziyaretçilerin web sitemizi nasıl kullandığını analiz etmek (hangi sayfaların daha çok ziyaret edildiği, hata mesajı alınıp alınmadığı vb.) amacıyla kullanılır. Bu çerezler kimliğinizi tespit etmez, anonim veriler toplar.
            </li>
            <li>
              <strong>İşlevsellik Çerezleri:</strong> Sitemizi tekrar ziyaret ettiğinizde tercihlerinizin hatırlanmasını sağlayarak size daha kişiselleştirilmiş bir deneyim sunar.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-navy mt-8 mb-4">3. Çerezlerin Kullanım Amaçları</h3>
          <p>Web sitemizde çerezler şu amaçlarla kullanılmaktadır:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sitenin teknik olarak düzgün ve güvenli bir şekilde çalışmasını sağlamak,</li>
            <li>Ziyaretçilerin siteyi kullanım alışkanlıklarını analiz ederek performansı artırmak,</li>
            <li>Daha hızlı ve gelişmiş bir kullanıcı deneyimi sunmak.</li>
          </ul>

          <h3 className="text-xl font-bold text-navy mt-8 mb-4">4. Çerezleri Nasıl Yönetebilirsiniz?</h3>
          <p>
            Birçok web tarayıcısı, çerezleri otomatik olarak kabul edecek şekilde ayarlanmıştır. Tarayıcınızın ayarlarını değiştirerek çerezleri reddedebilir veya cihazınıza çerez gönderildiğinde uyarı almayı tercih edebilirsiniz. Ancak çerezleri devre dışı bırakmanız halinde, sitemizin bazı fonksiyonlarının tam olarak çalışmayabileceğini belirtmek isteriz.
          </p>
          <p>Sık kullanılan tarayıcıların çerez yönetim adımları:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li><strong>Google Chrome:</strong> Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler ve diğer site verileri</li>
            <li><strong>Safari:</strong> Tercihler &gt; Gizlilik &gt; Çerezleri Engelle</li>
            <li><strong>Mozilla Firefox:</strong> Seçenekler &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Site Verileri</li>
          </ul>

          <p className="mt-8 pt-6 border-t border-border text-sm">
            Bu politika, teknolojik ve hukuki gelişmelere bağlı olarak güncellenebilir. Çerez politikamızla ilgili tüm sorularınız için info@epcon.com.tr adresinden bizimle iletişime geçebilirsiniz.
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