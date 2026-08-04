import React from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from '@portabletext/react';
import { 
  CheckCircle2, 
  Quote, 
  Users, 
  ShieldCheck, 
  Microscope, 
  Briefcase, 
  Award,
  CheckCircle 
} from "lucide-react";

export const metadata = {
  title: "Hakkımızda ve Ekibimiz | EPCON",
  description: "Ziraat mühendisleri yönetiminde; ağırlıklı olarak endüstriyel temizlik, haşere ilaçlama ve personel destek hizmetleri sunan profesyonel kuruluş.",
};

export const revalidate = 60; // 60 saniyede bir güncellenir

export default async function HakkimizdaPage() {
  
  // Sanity'den verileri çekiyoruz
  let data = null;
  try {
    data = await client.fetch('*[_type == "aboutUs"][0]', {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Hakkımızda verisi çekilemedi:", error);
  }

  // --- FALLBACK (KORUMA) DEĞERLERİ ---
  // Panel boşsa veya silindiyse tasarım bozulmasın diye mevcut orjinal metinleri kullanıyoruz
  const heroSubtitle = data?.heroSubtitle || "EPCON ÇEVRE SAĞLIĞI SİSTEMLERİ";
  const heroTitle = data?.heroTitle || "HAKKIMIZDA VE EKİBİMİZ";
  const heroDescription = data?.heroDescription || "Bilimsel yaklaşım, yetkili uygulama ve izlenebilir hizmet anlayışıyla profesyonel yönetim.";
  
  const whoWeAreTitle = data?.whoWeAreTitle || "EPCON Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti.";
  
  const missionHighlight = data?.missionHighlight || "İnsan sağlığı ve çevre güvenliğini gözeterek; entegre pest kontrol, biyosidal uygulama ve fumigasyon hizmetlerini bilimsel, mevzuata uygun, izlenebilir ve sürdürülebilir bir yaklaşımla sunmak.";
  const missionText = data?.missionText || "Bilimsel, yetkili ve izlenebilir zararlı yönetimi hizmetleri sunmak. İnsan sağlığını, çevre güvenliğini ve işletme sürekliliğini gözeterek; endüstriyel temizlik, haşere ilaçlama, fumigasyon ve gazdan arındırma hizmetlerini ziraat mühendisleri yönetiminde, yürürlükteki mevzuata uygun ve sürdürülebilir bir yaklaşımla sunmak. Risk analizi, sürekli izleme, önleyici faaliyetler, hedefe yönelik müdahale, dijital raporlama ve sürekli iyileştirme süreçleriyle müşterilerimize güvenilir ve denetlenebilir çözümler sağlamak.";

  const visionHighlight = data?.visionHighlight || "Teknik yetkinliği, mühendislik yaklaşımı ve hizmet kalitesiyle zararlı yönetimi, temizlik ve fumigasyon alanında Türkiye’de ve uluslararası pazarlarda güvenilir ve örnek gösterilen bir çözüm ortağı olmak.";
  const visionText = data?.visionText || "Güvenilir bir çözüm ortağı olmak. Teknik yetkinliği, mühendislik yaklaşımı, hizmet kalitesi ve yenilikçi uygulamalarıyla Türkiye’de ve uluslararası pazarlarda örnek gösterilen bir çevre sağlığı kuruluşu olmak. Endüstriyel temizlik, entegre zararlı yönetimi, fumigasyon, BMSB, ISPM 15, gaz ölçümü ve gazdan arındırma alanlarında gelişen teknolojileri takip ederek; ölçülebilir, izlenebilir ve sürdürülebilir hizmet anlayışını sürekli geliştirmek.";

  const qualityIntro = data?.qualityIntro || "EPCON olarak kalite politikamız; insan sağlığı, çevre güvenliği, mevzuat uyumu, teknik yetkinlik, izlenebilirlik ve sürekli iyileştirme esaslarına dayanır.";
  
  const defaultQualityItems = [
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
  ];
  const qualityItems = data?.qualityItems?.length > 0 ? data.qualityItems : defaultQualityItems;

  const founderQuote = data?.founderQuote || "“Zararlı yönetiminde ve endüstriyel temizlik alanında kalıcı başarı; doğru teşhis, risk analizi, düzenli izleme ve hedefe yönelik müdahalenin birlikte yönetilmesiyle sağlanır. EPCON olarak, ziraat mühendisleri yönetiminde; yetkili, izlenebilir ve sürdürülebilir hizmet anlayışıyla çalışıyoruz.”";
  const founderName = data?.founderName || "Şeref KELETELİ";
  const founderTitle = data?.founderTitle || "Kurucu ve Genel Müdür • Ziraat Mühendisi";

  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* ── SAYFA ÜSTÜ (Hero) ── */}
      <section className="bg-navy py-12 md:py-16 px-6 md:px-10 mt-10 max-w-5xl mx-auto w-full">
        <div className="text-left">
          <span className="text-pest-green font-bold tracking-wider text-sm md:text-base uppercase mb-2 block">
            {heroSubtitle}
          </span>
          <h1 className="font-barlowCondensed text-3xl md:text-4xl font-extrabold uppercase text-white mb-2">
            {heroTitle}
          </h1>
          <p className="text-white font-light text-base md:text-lg">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* ── BİZ KİMİZ? ── */}
      <section className="py-12 px-6 md:px-10 max-w-5xl mx-auto w-full">
        <div className="mb-10">
          <span className="text-pest-green font-bold tracking-wider text-sm uppercase mb-4 block">
            BİZ KİMİZ?
          </span>
          <h2 className="font-bold text-2xl md:text-3xl text-navy mb-6">
            {whoWeAreTitle}
          </h2>
          <div className="space-y-4 text-text-dark text-[15px] leading-relaxed">
            {data?.whoWeAreText ? (
              <div className="prose prose-lg max-w-none prose-p:text-text-dark prose-p:text-[15px] prose-p:leading-relaxed">
                 <PortableText value={data.whoWeAreText} />
              </div>
            ) : (
              <>
                <p>EPCON Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti., 2011 yılından bu yana ağırlıklı olarak endüstriyel temizlik, haşere ilaçlama ve personel destek alanlarında faaliyet gösteren; bununla birlikte entegre zararlı yönetimi, biyosidal ürün uygulamaları ve fumigasyon çözümleri sunan profesyonel bir kuruluştur.</p>
                <p>Ziraat mühendisleri yönetimindeki teknik kadromuz; konutlardan ticari işletmelere, gıda ve sanayi tesislerinden depo, lojistik, havalimanı, kamu ve toplu yaşam alanlarına kadar farklı sektörlerin ihtiyaçlarına özel hizmet programları hazırlamaktadır.</p>
                <p>Hizmet yaklaşımımız yalnızca periyodik ilaç uygulamasına dayanmaz. Risk analizi, saha haritalaması, sürekli izleme, fiziksel ve mekanik önlemler, hedefe yönelik biyosidal müdahale, dijital raporlama, trend analizi ve sürekli iyileştirme süreçlerini bir bütün olarak yönetiriz.</p>
                <p>Uygulamalarımızda T.C. Sağlık Bakanlığı tarafından ruhsatlandırılmış biyosidal ürünler kullanılır. Ürün ve yöntem seçimi; hedef zararlı, alanın kullanım amacı, risk seviyesi, insan ve hayvan temas ihtimali ile ürün etiket talimatları dikkate alınarak yapılır.</p>
              </>
            )}
          </div>
        </div>

        {/* 4'lü Özellik Kartları (Tasarım Bozulmasın Diye Sabit) */}
        <div className="grid grid-cols-1 md:grid-cols-4 bg-surface-light border border-border mb-8">
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

      {/* ── OPERASYON VE YÖNETİM KADROMUZ ── */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto w-full bg-slate-50/50 rounded-[2.5rem] mb-12 border border-slate-100">
        <div className="text-center mb-14">
          <span className="text-pest-green font-bold tracking-wider text-sm uppercase mb-3 block">
            GÜCÜMÜZÜ UZMANLIĞIMIZDAN ALIYORUZ
          </span>
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold text-navy uppercase mb-4">
            Operasyon ve Yönetim Kadromuz
          </h2>
          <p className="text-text-mid max-w-2xl mx-auto text-base">
            Saha keşfinden son raporlamaya kadar sürecin her aşaması, ilgili departmanın akademik eğitimli ve sertifikalı uzman profesyonelleri tarafından titizlikle yönetilir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col items-start group hover:border-pest-green transition-colors shadow-sm hover:shadow-md">
            <div className="w-14 h-14 bg-navy text-pest-green rounded-2xl flex items-center justify-center mb-6 shadow-md"><Microscope className="w-8 h-8" /></div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">Ziraat Mühendisleri</h3>
            <p className="text-text-mid leading-relaxed mb-6">Zararlı tür teşhisi, IPM programlarının tasarlanması, dozaj ayarları ve bitki sağlığı doğrudan akademik eğitimli ziraat mühendislerimiz tarafından yönetilir.</p>
            <ul className="space-y-2 mt-auto">
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Biyosidal Ürün Uygulama Yöneticiliği</li>
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Risk ve Trend Analizi Raporlaması</li>
            </ul>
          </div>
          <div className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col items-start group hover:border-pest-green transition-colors shadow-sm hover:shadow-md">
            <div className="w-14 h-14 bg-navy text-pest-green rounded-2xl flex items-center justify-center mb-6 shadow-md"><ShieldCheck className="w-8 h-8" /></div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">Yetkili Fumigasyon Operatörleri</h3>
            <p className="text-text-mid leading-relaxed mb-6">Avustralya BMSB işlemleri, ISPM 15 ahşap ambalaj, konteyner ve gemi operasyonları gaz ölçüm uzmanlarımızca yürütülür.</p>
            <ul className="space-y-2 mt-auto">
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Gaz Ölçümü ve Arındırma Uzmanlığı</li>
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Uluslararası Karantina İşlemleri</li>
            </ul>
          </div>
          <div className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col items-start group hover:border-pest-green transition-colors shadow-sm hover:shadow-md">
            <div className="w-14 h-14 bg-navy text-pest-green rounded-2xl flex items-center justify-center mb-6 shadow-md"><Briefcase className="w-8 h-8" /></div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">Eğitimli Saha Teknisyenleri</h3>
            <p className="text-text-mid leading-relaxed mb-6">Saha haritalaması, istasyon kurulumu ve cihaz kontrolleri, TSE standartlarına hakim sertifikalı teknisyenlerimizce gerçekleştirilir.</p>
            <ul className="space-y-2 mt-auto">
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Biyosidal Ürün Uygulayıcı Sertifikası</li>
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> İş Sağlığı ve Güvenliği Eğitimi</li>
            </ul>
          </div>
          <div className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col items-start group hover:border-pest-green transition-colors shadow-sm hover:shadow-md">
            <div className="w-14 h-14 bg-navy text-pest-green rounded-2xl flex items-center justify-center mb-6 shadow-md"><Award className="w-8 h-8" /></div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">Müşteri İlişkileri ve Planlama</h3>
            <p className="text-text-mid leading-relaxed mb-6">İşletmenizin denetim takvimleri, acil müdahale talepleriniz ve evrak süreçleriniz uzmanlarımız tarafından takip edilir.</p>
            <ul className="space-y-2 mt-auto">
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Operasyon ve Randevu Koordinasyonu</li>
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Dijital Raporlama ve Evrak Yönetimi</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── MİSYONUMUZ ── */}
      <section id="misyon" className="py-8 px-6 md:px-10 max-w-5xl mx-auto w-full">
        <h2 className="font-bold text-3xl text-navy mb-6">Misyonumuz</h2>
        <div className="bg-pest-green-light border border-pest-green p-6 mb-6">
          <p className="text-base text-navy leading-relaxed">{missionHighlight}</p>
        </div>
        <p className="text-text-dark text-[15px] leading-relaxed whitespace-pre-line">
          {missionText}
        </p>
      </section>

      {/* ── VİZYONUMUZ ── */}
      <section id="vizyon" className="py-8 px-6 md:px-10 max-w-5xl mx-auto w-full">
        <h2 className="font-bold text-3xl text-navy mb-6">Vizyonumuz</h2>
        <div className="bg-surface-light border border-navy p-6 mb-6">
          <p className="text-base text-navy leading-relaxed">{visionHighlight}</p>
        </div>
        <p className="text-text-dark text-[15px] leading-relaxed whitespace-pre-line">
          {visionText}
        </p>
      </section>

      {/* ── KALİTE POLİTİKAMIZ ── */}
      <section id="kalite" className="py-8 px-6 md:px-10 max-w-5xl mx-auto w-full mb-8">
        <h2 className="font-bold text-3xl text-navy mb-6">Kalite Politikamız</h2>
        <p className="text-text-dark text-[15px] mb-6">{qualityIntro}</p>
        
        <ul className="space-y-3">
          {qualityItems.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-navy font-bold mt-0.5">•</span>
              <span className="text-text-dark text-[15px] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── SÜREKLİ EĞİTİM ── */}
      <section className="py-16 px-6 md:px-10 bg-navy text-white text-center w-full">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold uppercase">Sürekli Eğitim ve Gelişim</h2>
          <p className="text-white/80 leading-relaxed text-lg">
            Hizmet kalitemizin temelinde personelimizin sürekli eğitilmesi yatar. Teknolojik gelişmeler, yeni biyosidal formülasyonlar, uluslararası karantina standartları ve iş güvenliği yönetmelikleri kapsamında tüm ekibimiz periyodik olarak içi ve dış eğitimlere tabi tutulmaktadır.
          </p>
        </div>
      </section>

      {/* ── KURUCUMUZDAN ── */}
      <section id="kurucumuzdan" className="py-16 px-6 md:px-10 max-w-5xl mx-auto w-full mb-10">
        <h2 className="font-bold text-3xl text-navy mb-6 text-center md:text-left">Kurucumuzdan</h2>
        <div className="bg-surface-light border border-border p-10 md:p-14 text-center rounded-3xl relative">
          <Quote className="absolute top-6 left-6 text-navy/10 w-16 h-16" />
          <p className="text-navy text-lg md:text-xl italic font-light leading-relaxed mb-8 relative z-10 whitespace-pre-line">
            {founderQuote}
          </p>
          <div className="flex flex-col items-center">
            <span className="text-pest-green font-bold text-lg md:text-xl tracking-wide mb-1">{founderName}</span>
            <span className="text-text-mid text-sm font-semibold">{founderTitle}</span>
          </div>
        </div>
      </section>

    </main>
  );
}