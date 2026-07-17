import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  ShieldCheck, 
  Microscope, 
  Briefcase, 
  Award,
  CheckCircle
} from 'lucide-react';

export const metadata = {
  title: "Uzman Ekibimiz | Ziraat Mühendisleri ve Operatörler | EPCON",
  description: "Ziraat mühendisleri, belgeli fumigasyon operatörleri ve eğitimli saha teknisyenlerinden oluşan EPCON profesyonel pest kontrol ekibi."
};

export default function EkibimizPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <span className="inline-flex items-center gap-2 bg-pest-green/20 text-pest-green font-bold px-3 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30">
              <Users className="w-4 h-4" /> PROFESYONEL KADRO • YETKİ BELGELİ UZMANLAR
            </span>
            <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              Gücümüzü <span className="text-pest-green">Uzmanlığımızdan</span> Alıyoruz
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              EPCON Çevre Sağlığı Sistemleri; entegre zararlı yönetimi ve fumigasyon operasyonlarını, alanında akademik eğitim almış ziraat mühendisleri ve uluslararası yetki belgelerine sahip saha operatörleriyle yürütmektedir.
            </p>
            <div className="pt-4">
              <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg inline-block text-center">
                Uzman Ekibimizden Teklif Alın
              </Link>
            </div>
          </div>
          {/* Çalışan Hero Görseli: Kurumsal ekip / Laboratuvar veya Saha */}
          <div className="hidden md:block rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative min-h-[400px]">
             <div className="absolute inset-0 bg-navy/20 z-10"></div>
             <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" alt="EPCON Uzman Ekibi" className="w-full h-full object-cover absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 2. EKİP KATEGORİLERİ (Departman Bazlı) */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold text-navy uppercase mb-4">
            Operasyon ve Yönetim Kadromuz
          </h2>
          <p className="text-text-mid max-w-2xl mx-auto text-lg">
            Saha keşfinden son raporlamaya kadar sürecin her aşaması, ilgili departmanın uzman profesyonelleri tarafından yönetilir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Ziraat Mühendisleri */}
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col items-start group hover:border-pest-green transition-colors">
            <div className="w-14 h-14 bg-navy text-pest-green rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <Microscope className="w-8 h-8" />
            </div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">Ziraat Mühendisleri</h3>
            <p className="text-text-mid leading-relaxed mb-6">
              Zararlı tür teşhisi, IPM (Entegre Zararlı Yönetimi) programlarının tasarlanması, kullanılacak biyosidal ürünlerin dozaj ayarları ve bitki sağlığı uygulamaları doğrudan akademik eğitimli ziraat mühendislerimiz tarafından planlanır ve denetlenir.
            </p>
            <ul className="space-y-2 mt-auto">
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Biyosidal Ürün Uygulama Yöneticiliği</li>
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Risk ve Trend Analizi Raporlaması</li>
            </ul>
          </div>

          {/* Fumigasyon Operatörleri */}
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col items-start group hover:border-pest-green transition-colors">
            <div className="w-14 h-14 bg-navy text-pest-green rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">Yetkili Fumigasyon Operatörleri</h3>
            <p className="text-text-mid leading-relaxed mb-6">
              Avustralya BMSB işlemleri, ISPM 15 ahşap ambalaj işaretlemeleri, konteyner ve gemi fumigasyon operasyonları; Tarım ve Orman Bakanlığı ile Hudut ve Sahiller yetkilerine sahip, gaz ölçüm ve izolasyon konularında uzman operatörlerimizce yürütülür.
            </p>
            <ul className="space-y-2 mt-auto">
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Gaz Ölçümü ve Gazdan Arındırma Uzmanlığı</li>
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Uluslararası Karantina İşlemleri</li>
            </ul>
          </div>

          {/* Saha Teknisyenleri */}
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col items-start group hover:border-pest-green transition-colors">
            <div className="w-14 h-14 bg-navy text-pest-green rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">Eğitimli Saha Teknisyenleri</h3>
            <p className="text-text-mid leading-relaxed mb-6">
              Saha haritalaması, istasyon kurulumu, jel ve yüzey uygulamaları ile cihaz (EFT) kontrolleri, TSE standartlarına ve iş güvenliği kurallarına hakim sertifikalı teknisyenlerimiz tarafından titizlikle gerçekleştirilir.
            </p>
            <ul className="space-y-2 mt-auto">
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Biyosidal Ürün Uygulayıcı Sertifikası</li>
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> İş Sağlığı ve Güvenliği Eğitimi</li>
            </ul>
          </div>

          {/* Operasyon ve Müşteri İlişkileri */}
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col items-start group hover:border-pest-green transition-colors">
            <div className="w-14 h-14 bg-navy text-pest-green rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">Müşteri İlişkileri ve Planlama</h3>
            <p className="text-text-mid leading-relaxed mb-6">
              İşletmenizin denetim takvimleri, acil müdahale talepleriniz, sertifika ve evrak süreçleriniz merkez ofisimizdeki planlama uzmanlarımız tarafından takip edilir. Tüm süreç boyunca karşınızda kurumsal bir muhatap bulursunuz.
            </p>
            <ul className="space-y-2 mt-auto">
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Operasyon ve Randevu Koordinasyonu</li>
              <li className="flex items-center gap-2 text-sm text-navy font-medium"><CheckCircle className="w-4 h-4 text-pest-green" /> Dijital Raporlama ve Evrak Yönetimi</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 3. EĞİTİM VE KALİTE POLİTİKASI VURGUSU */}
      <section className="py-16 px-6 md:px-10 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold uppercase">Sürekli Eğitim ve Gelişim</h2>
          <p className="text-white/80 leading-relaxed">
            Hizmet kalitemizin temelinde personelimizin sürekli eğitilmesi yatar. Teknolojik gelişmeler, yeni biyosidal formülasyonlar, uluslararası karantina standartları ve iş güvenliği yönetmelikleri kapsamında tüm ekibimiz periyodik olarak içi ve dış eğitimlere tabi tutulmaktadır.
          </p>
        </div>
      </section>

    </main>
  );
}