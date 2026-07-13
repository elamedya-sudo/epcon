import React from "react";
import { CheckCircle2, Quote } from "lucide-react";

export const metadata = {
  title: "Hakkımızda | EPCON İlaçlama ve Pest Kontrol",
  description: "Ziraat mühendisleri yönetiminde; entegre pest kontrol, biyosidal uygulama ve fumigasyon alanında profesyonel çevre sağlığı kuruluşu.",
};

export default function HakkimizdaPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* SAYFA ÜSTÜ (Hero - Brifteki gibi lacivert kutu) */}
      <section className="bg-navy py-12 md:py-16 px-6 md:px-10 mt-10 max-w-5xl mx-auto w-full">
        <div className="text-left">
          <span className="text-pest-green font-bold tracking-wider text-sm md:text-base uppercase mb-2 block">
            EPCON ÇEVRE SAĞLIĞI SİSTEMLERİ
          </span>
          <h1 className="font-barlowCondensed text-3xl md:text-4xl font-extrabold uppercase text-white mb-2">
            HAKKIMIZDA
          </h1>
          <p className="text-white font-light text-base md:text-lg">
            Bilimsel yaklaşım, yetkili uygulama ve izlenebilir hizmet anlayışıyla profesyonel zararlı yönetimi.
          </p>
        </div>
      </section>

      {/* BİZ KİMİZ? */}
      <section className="py-12 px-6 md:px-10 max-w-5xl mx-auto w-full">
        <div className="mb-10">
          <span className="text-pest-green font-bold tracking-wider text-sm uppercase mb-4 block">
            BİZ KİMİZ?
          </span>
          <h2 className="font-bold text-2xl md:text-3xl text-navy mb-6">
            EPCON Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti.
          </h2>
          <div className="space-y-4 text-text-dark text-[15px] leading-relaxed">
            <p>
              EPCON Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti., 2011 yılından bu yana entegre zararlı yönetimi, biyosidal ürün uygulamaları, kemirgen kontrol sistemleri, fumigasyon ve gazdan arındırma alanlarında hizmet veren profesyonel bir çevre sağlığı kuruluşudur.
            </p>
            <p>
              Ziraat mühendisleri yönetimindeki teknik kadromuz; konutlardan ticari işletmelere, gıda ve sanayi tesislerinden depo, lojistik, havalimanı, kamu ve toplu yaşam alanlarına kadar farklı sektörlerin ihtiyaçlarına özel hizmet programları hazırlamaktadır.
            </p>
            <p>
              Hizmet yaklaşımımız yalnızca periyodik ilaç uygulamasına dayanmaz. Risk analizi, saha haritalaması, sürekli izleme, fiziksel ve mekanik önlemler, hedefe yönelik biyosidal müdahale, dijital raporlama, trend analizi ve sürekli iyileştirme süreçlerini bir bütün olarak yönetiriz.
            </p>
            <p>
              Uygulamalarımızda T.C. Sağlık Bakanlığı tarafından ruhsatlandırılmış biyosidal ürünler kullanılır. Ürün ve yöntem seçimi; hedef zararlı, alanın kullanım amacı, risk seviyesi, insan ve hayvan temas ihtimali ile ürün etiket talimatları dikkate alınarak yapılır.
            </p>
          </div>
        </div>

        {/* 4'lü Özellik Kartları (Brifteki tablo görünümü) */}
        <div className="grid grid-cols-1 md:grid-cols-4 bg-surface-light border border-border">
          <div className="p-6 border-b md:border-b-0 md:border-r border-border">
            <h3 className="font-bold text-navy mb-2">RİSK ODAKLI</h3>
            <p className="text-sm text-text-dark">Hizmet yöntemi ve sıklığı saha bulgularına göre belirlenir.</p>
          </div>
          <div className="p-6 border-b md:border-b-0 md:border-r border-border">
            <h3 className="font-bold text-navy mb-2">YETKİLİ</h3>
            <p className="text-sm text-text-dark">Uygulamalar gerekli yetki ve belgeler kapsamında gerçekleştirilir.</p>
          </div>
          <div className="p-6 border-b md:border-b-0 md:border-r border-border">
            <h3 className="font-bold text-navy mb-2">İZLENEBİLİR</h3>
            <p className="text-sm text-text-dark">Kontroller, uygulamalar ve saha bulguları dijital olarak kayıt altına alınır.</p>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-navy mb-2">SÜRDÜRÜLEBİLİR</h3>
            <p className="text-sm text-text-dark">Kimyasal kullanım ihtiyaç ve hedef zararlı esasına göre planlanır.</p>
          </div>
        </div>
      </section>

      {/* MİSYONUMUZ */}
      <section id="misyon" className="py-10 px-6 md:px-10 max-w-5xl mx-auto w-full">
        <h2 className="font-bold text-3xl text-navy mb-6">5.3 Misyonumuz</h2>
        <div className="bg-pest-green-light border border-pest-green p-6 mb-6">
          <p className="text-base text-navy leading-relaxed">
            İnsan sağlığı ve çevre güvenliğini gözeterek; entegre pest kontrol, biyosidal uygulama ve fumigasyon hizmetlerini bilimsel, mevzuata uygun, izlenebilir ve sürdürülebilir bir yaklaşımla sunmak.
          </p>
        </div>
        <p className="text-text-dark text-[15px] leading-relaxed">
          Bilimsel, yetkili ve izlenebilir zararlı yönetimi hizmetleri sunmak. İnsan sağlığını, çevre güvenliğini ve işletme sürekliliğini gözeterek; entegre pest kontrol, biyosidal uygulama, fumigasyon ve gazdan arındırma hizmetlerini ziraat mühendisleri yönetiminde, yürürlükteki mevzuata uygun ve sürdürülebilir bir yaklaşımla sunmak. Risk analizi, sürekli izleme, önleyici faaliyetler, hedefe yönelik müdahale, dijital raporlama ve sürekli iyileştirme süreçleriyle müşterilerimize güvenilir ve denetlenebilir çözümler sağlamak.
        </p>
      </section>

      {/* VİZYONUMUZ */}
      <section id="vizyon" className="py-10 px-6 md:px-10 max-w-5xl mx-auto w-full">
        <h2 className="font-bold text-3xl text-navy mb-6">5.4 Vizyonumuz</h2>
        <div className="bg-surface-light border border-navy p-6 mb-6">
          <p className="text-base text-navy leading-relaxed">
            Teknik yetkinliği, mühendislik yaklaşımı ve hizmet kalitesiyle zararlı yönetimi ve fumigasyon alanında Türkiye’de ve uluslararası pazarlarda güvenilir ve örnek gösterilen bir çözüm ortağı olmak.
          </p>
        </div>
        <p className="text-text-dark text-[15px] leading-relaxed">
          Zararlı yönetimi ve fumigasyon alanında güvenilir bir çözüm ortağı olmak. Teknik yetkinliği, mühendislik yaklaşımı, hizmet kalitesi ve yenilikçi uygulamalarıyla Türkiye’de ve uluslararası pazarlarda örnek gösterilen bir çevre sağlığı kuruluşu olmak. Entegre zararlı yönetimi, fumigasyon, BMSB, ISPM 15, gaz ölçümü ve gazdan arındırma alanlarında gelişen teknolojileri takip ederek; ölçülebilir, izlenebilir ve sürdürülebilir hizmet anlayışını sürekli geliştirmek.
        </p>
      </section>

      {/* KALİTE POLİTİKAMIZ */}
      <section id="kalite" className="py-10 px-6 md:px-10 max-w-5xl mx-auto w-full">
        <h2 className="font-bold text-3xl text-navy mb-6">5.5 Kalite politikamız</h2>
        <p className="text-text-dark text-[15px] mb-6">
          EPCON olarak kalite politikamız; insan sağlığı, çevre güvenliği, mevzuat uyumu, teknik yetkinlik, izlenebilirlik ve sürekli iyileştirme esaslarına dayanır.
        </p>
        
        <ul className="space-y-3">
          {[
            "Hizmetleri yürürlükteki mevzuata, yetki belgelerine ve ürün etiket talimatlarına uygun yürütmek.",
            "Risk analizi ve Entegre Zararlı Yönetimi yaklaşımını hizmet planlamasının temeline yerleştirmek.",
            "Yetkin personel, uygun ekipman ve ruhsatlı ürünlerle güvenli uygulama sağlamak.",
            "Kontrol, uygulama, ölçüm ve düzeltici faaliyetleri kayıt altına alarak izlenebilirlik sağlamak.",
            "Müşteri ihtiyaçlarını, sektör koşullarını ve operasyon sürekliliğini dikkate alan çözümler geliştirmek.",
            "Personelin eğitimini, teknik gelişimini ve iş sağlığı-güvenliği farkındalığını sürekli artırmak.",
            "Çevresel etkileri azaltmak; kimyasal kullanımı ihtiyaç, hedef zararlı ve risk seviyesine göre planlamak.",
            "Müşteri geri bildirimlerini değerlendirmek ve hizmet süreçlerini veriye dayalı olarak sürekli iyileştirmek.",
            "Fumigasyon uygulamalarında alan izolasyonu, gaz ölçümü, kontrollü havalandırma ve gazdan arındırmayı ayrılmaz güvenlik adımları olarak uygulamak.",
            "Hizmet gizliliğini, kayıt bütünlüğünü ve iş ortaklarının ticari bilgilerinin korunmasını sağlamak."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-navy font-bold mt-0.5">•</span>
              <span className="text-text-dark text-[15px] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* KURUCUMUZDAN */}
      <section id="kurucumuzdan" className="py-16 px-6 md:px-10 max-w-5xl mx-auto w-full mb-10">
        <h2 className="font-bold text-3xl text-navy mb-6">5.6 Kurucumuzdan</h2>
        <div className="bg-navy p-10 md:p-14 text-center">
          <p className="text-white text-lg md:text-xl italic font-light leading-relaxed mb-8">
            “Zararlı yönetiminde kalıcı başarı; doğru teşhis, risk analizi, düzenli izleme ve hedefe yönelik müdahalenin birlikte yönetilmesiyle sağlanır. EPCON olarak, ziraat mühendisleri yönetiminde; yetkili, izlenebilir ve sürdürülebilir hizmet anlayışıyla çalışıyoruz.”
          </p>
          <div className="flex flex-col items-center">
            <span className="text-pest-green font-bold text-lg md:text-xl tracking-wide mb-1">Şeref KELETELİ • Kurucu ve Genel Müdür • Ziraat Mühendisi</span>
          </div>
        </div>
      </section>

    </main>
  );
}