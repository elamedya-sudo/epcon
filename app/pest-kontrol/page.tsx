import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Map, 
  Search, 
  Crosshair, 
  Smartphone, 
  TrendingUp, 
  Settings, 
  CheckCircle2,
  ArrowRight,
  Bug,
  Rat,
  Wind,
  Package,
  Factory,
  Plane,
  BedDouble,
  GraduationCap,
  Building,
  Building2,
  Store,
  MessageCircle,
  FileText
} from "lucide-react";

export const metadata = {
  title: "Pest Kontrol ve IPM | EPCON İlaçlama",
  description: "İşletmenize özel entegre zararlı yönetimi (IPM), risk analizi, dijital raporlama ve profesyonel pest kontrol hizmetleri.",
};

export default function PestKontrolPage() {
  const guvenAltyapisi = [
    { icon: <ShieldCheck size={24} />, text: "ZİRAAT MÜHENDİSLERİ YÖNETİMİNDE" },
    { icon: <Map size={24} />, text: "İŞLETMEYE ÖZEL RİSK PLANI" },
    { icon: <Smartphone size={24} />, text: "DİJİTAL SERVİS RAPORLARI" },
    { icon: <Wind size={24} />, text: "EFT KONTROL VE TAKİBİ" },
    { icon: <TrendingUp size={24} />, text: "TREND ANALİZİ" },
    { icon: <CheckCircle2 size={24} />, text: "YETKİLİ UYGULAMA EKİBİ" },
  ];

  const ipmAdimlari = [
    { no: "1", title: "Keşif ve Risk Analizi", desc: "Alan, faaliyet, zararlı bulguları ve yapısal/çevresel riskler değerlendirilir." },
    { no: "2", title: "Saha Haritalaması", desc: "Kritik kontrol noktaları ve izleme ekipmanları numaralandırılarak plana işlenir." },
    { no: "3", title: "İzleme ve Erken Uyarı", desc: "İstasyonlar, monitörler, feromonlar, EFT cihazları ve saha gözlemleri düzenli takip edilir." },
    { no: "4", title: "Önleyici ve Fiziksel Tedbirler", desc: "Giriş, barınma, su, gıda ve atık kaynaklarına yönelik iyileştirmeler planlanır." },
    { no: "5", title: "Hedefe Yönelik Müdahale", desc: "Gerekli alanlarda uygun fiziksel, mekanik veya biyosidal yöntem uygulanır." },
    { no: "6", title: "Dijital Raporlama", desc: "Bulgular, yapılan işlemler, ürün kullanımı ve düzeltici faaliyetler kaydedilir." },
    { no: "7", title: "Trend Analizi ve İyileştirme", desc: "Dönemsel sonuçlara göre hizmet planı, ekipman ve müdahale stratejisi güncellenir." },
  ];

  const raporlamaMaddeleri = [
    "İstasyon ve kontrol noktası kayıtları",
    "Zararlı aktivitesi, yem tüketimi ve yakalama verileri",
    "EFT cihazlarının çalışma durumu, UV lamba ve yapışkan levha kontrolleri",
    "Cihaz bazında uçan haşere yakalama miktarları ve dönemsel karşılaştırma",
    "Feromon tuzağı sonuçları",
    "Fotoğraflı saha bulguları",
    "Yapısal, hijyenik ve çevresel düzeltici faaliyet önerileri",
    "Dönemsel trend ve performans analizleri"
  ];

  const sektorler = [
    { icon: <Factory size={28} />, name: "Gıda üretimi" },
    { icon: <Settings size={28} />, name: "Fabrika ve sanayi" },
    { icon: <Package size={28} />, name: "Depo ve lojistik" },
    { icon: <Plane size={28} />, name: "Havalimanı ve terminaller" },
    { icon: <BedDouble size={28} />, name: "Otel ve konaklama" },
    { icon: <GraduationCap size={28} />, name: "Sağlık ve eğitim" },
    { icon: <Building size={28} />, name: "Kamu kurumları" },
    { icon: <Building2 size={28} />, name: "Site ve toplu yaşam" },
    { icon: <Store size={28} />, name: "Ticari işletmeler" },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy-deeper overflow-hidden px-6 py-20 md:px-10 md:py-28 text-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:30px_30px] z-0" />
        <div className="absolute right-[10%] bottom-[-40px] w-[300px] h-[300px] rounded-full bg-pest-green opacity-10 blur-[80px] z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 border border-pest-green/40 bg-pest-green/10 rounded px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-barlowCondensed text-xs md:text-sm font-semibold text-[#5dd88a] tracking-wider uppercase">
              ENTEGRE ZARARLI YÖNETİMİ • İZLEME • RAPORLAMA
            </span>
          </div>
          
          <h1 className="font-barlowCondensed text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.05] mb-6">
            Zararlı Risklerini Ölçülebilir ve <br className="hidden md:block" />
            <span className="text-pest-green">İzlenebilir Bir Sistemle Yönetin</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/70 font-light max-w-3xl leading-relaxed mb-10">
            EPCON, işletmenize özel pest kontrol programlarını; risk analizi, saha haritalaması, düzenli izleme, önleyici faaliyetler, hedefe yönelik müdahale ve dijital raporlama süreçleriyle yönetir.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center">
            <Link href="/ucretsiz-teklif-al" className="w-full sm:w-auto bg-pest-green hover:bg-pest-green-dark text-white font-bold rounded-md px-8 py-4 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 tracking-wide text-sm">
              <ShieldCheck size={18} /> IPM Teknik Değerlendirme Talep Et
            </Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-white/20 hover:border-white/45 bg-transparent hover:bg-white/5 text-white font-bold rounded-md px-8 py-4 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 text-sm">
              <MessageCircle size={18} className="text-[#25d366]"/> WhatsApp'tan Uzmana Sor
            </a>
          </div>
        </div>
      </section>

      {/* 2. GÜVEN VE HİZMET ALTYAPISI */}
      <section className="bg-surface-light border-b border-border py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {guvenAltyapisi.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3 p-4">
              <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-navy shadow-sm">
                {item.icon}
              </div>
              <span className="font-bold text-navy text-xs md:text-sm uppercase tracking-wide leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ANA HİZMET KARTLARI */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight">
            Ana Hizmet Alanlarımız
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vurgulu IPM Kartı */}
          <Link href="/entegre-zararli-yonetimi" className="md:col-span-2 bg-navy rounded-2xl p-8 md:p-12 text-white hover:shadow-2xl hover:shadow-navy/20 transition-all duration-300 group flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col items-start max-w-3xl">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-pest-green">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-barlowCondensed text-3xl md:text-4xl font-extrabold uppercase mb-4">
                ENTEGRE ZARARLI YÖNETİMİ (IPM)
              </h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                Risk analizi, saha haritalaması, sürekli izleme, önleyici faaliyetler, hedefe yönelik müdahale, dijital raporlama ve trend analizini tek yönetim sistemi altında birleştiren kurumsal pest kontrol programı.
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-pest-green group-hover:text-white transition-colors text-sm uppercase tracking-wide">
                IPM Hizmetini İncele <ArrowRight size={16} />
              </span>
            </div>
            <div className="hidden md:block opacity-10 group-hover:opacity-20 transition-opacity">
               <ShieldCheck size={180} />
            </div>
          </Link>

          {/* Diğer 4 Hizmet */}
          {[
            { title: "KEMİRGEN KONTROLÜ", icon: <Rat size={28} />, desc: "İstasyon, mekanik sistem, aktivite takibi ve giriş noktası kontrolüne dayalı kemirgen yönetimi.", link: "/kemirgen-kontrolu" },
            { title: "YÜRÜYEN HAŞERE KONTROLÜ", icon: <Bug size={28} />, desc: "Hamamböceği, karınca ve diğer yürüyen zararlılara karşı tür, yoğunluk ve kaynak odaklı mücadele programı.", link: "/yuruyen-hasere-mucadelesi" },
            { title: "UÇAN HAŞERE KONTROLÜ", icon: <Wind size={28} />, desc: "Üreme kaynağı tespiti, larva ve ergin mücadelesi, EFT/UV cihaz kontrolleri, yakalama takibi ve trend analizi.", link: "/ucan-hasere-mucadelesi" },
            { title: "DEPO ZARARLILARI YÖNETİMİ", icon: <Package size={28} />, desc: "Feromon izleme, tür teşhisi, ürün ve depo kontrolleri, trend analizi ve gerektiğinde fumigasyon değerlendirmesi.", link: "/depo-zararlilari-yonetimi" },
          ].map((hizmet, idx) => (
            <Link key={idx} href={hizmet.link} className="bg-white border border-border rounded-2xl p-8 hover:border-navy hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-surface-light rounded-lg flex items-center justify-center text-navy mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
                {hizmet.icon}
              </div>
              <h3 className="font-barlowCondensed text-xl font-bold uppercase text-navy mb-3">
                {hizmet.title}
              </h3>
              <p className="text-sm text-text-mid leading-relaxed mb-6">
                {hizmet.desc}
              </p>
              <span className="font-bold text-navy group-hover:text-pest-green flex items-center gap-2 transition-colors text-sm uppercase tracking-wide">
                Hizmeti İncele <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. 7 ADIMDA EPCON IPM MODELİ */}
      <section className="bg-slate-50 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-pest-green font-bold tracking-[0.15em] text-sm uppercase mb-3 block">UYGULAMA MODELİ</span>
            <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight">
              7 Adımda EPCON IPM Modeli
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ipmAdimlari.map((adim, index) => (
              <div key={index} className={`bg-white border border-border rounded-xl p-6 relative overflow-hidden group hover:border-pest-green hover:shadow-lg transition-all duration-300 ${index === 6 ? "md:col-span-2 lg:col-span-2" : ""}`}>
                <span className="absolute -right-4 -top-6 font-barlowCondensed text-9xl font-extrabold text-slate-100 group-hover:text-pest-green-light transition-colors pointer-events-none select-none z-0">
                  {adim.no}
                </span>
                <div className="relative z-10">
                  <h3 className="font-barlowCondensed text-xl font-bold uppercase text-navy mb-3 mt-4">
                    <span className="text-pest-green mr-2">{adim.no}.</span>{adim.title}
                  </h3>
                  <p className="text-sm text-text-mid leading-relaxed">
                    {adim.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DİJİTAL RAPORLAMA VE EFT İZLEME */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-pest-green font-bold tracking-[0.15em] text-sm uppercase mb-3 block">İZLENEBİLİRLİK</span>
            <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight mb-6 leading-tight">
              Dijital Raporlama ve EFT İzleme
            </h2>
            <p className="text-text-mid text-base leading-relaxed mb-8">
              Saha kontrollerinden elde edilen veriler, yalnızca servis yapıldığını göstermek için değil; aktiviteyi, tekrarlayan riskleri ve alınması gereken aksiyonları görünür hâle getirmek için kullanılır.
            </p>
            <ul className="space-y-4">
              {raporlamaMaddeleri.map((madde, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pest-green flex-shrink-0 mt-0.5" />
                  <span className="text-text-dark font-medium text-[15px] leading-relaxed">{madde}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-surface-light rounded-2xl overflow-hidden border border-border shadow-xl">
               <img src="/images/kurumsal/dijital-raporlama.jpg" alt="EPCON Dijital Raporlama Sistemi" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border hidden md:flex items-center gap-4">
               <div className="w-12 h-12 bg-pest-green-light rounded-full flex items-center justify-center text-pest-green">
                 <FileText size={24} />
               </div>
               <div>
                 <div className="font-bold text-navy">Gerçek Zamanlı Veri</div>
                 <div className="text-xs text-text-mid">Anlık saha haritası ve ölçüm</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HİZMET VERİLEN SEKTÖRLER */}
      <section className="bg-navy-deeper py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-barlowCondensed text-3xl md:text-4xl font-extrabold uppercase text-white tracking-tight">
              Hizmet Verilen Sektörler
            </h2>
          </div>
          
          {/* Izgara yapısı tam 3x3 (md:grid-cols-3) olacak şekilde düzeltildi */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {sektorler.map((sektor, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 text-center hover:bg-white/10 transition-colors flex flex-col items-center justify-center">
                <div className="text-pest-green mb-4">
                  {sektor.icon}
                </div>
                <div className="font-bold text-white text-sm md:text-base">
                  {sektor.name}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="bg-surface-light py-16 md:py-20 px-6 md:px-10 font-barlow text-center border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-navy tracking-tight mb-4">
            İŞLETMENİZE ÖZEL IPM PROGRAMI OLUŞTURALIM
          </h2>
          <p className="text-text-mid mb-8 text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto">
            Saha risklerinizi, denetim ihtiyaçlarınızı ve mevcut zararlı aktivitesini değerlendirelim; işletmenize uygun, ölçülebilir ve izlenebilir bir pest kontrol programı hazırlayalım.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/ucretsiz-teklif-al" 
              className="w-full sm:w-auto bg-pest-green hover:bg-pest-green-dark text-white font-bold py-4 px-8 rounded-md transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 tracking-wide text-sm shadow-lg shadow-pest-green/20"
            >
              <ShieldCheck size={18} />
              IPM Teknik Değerlendirme Talep Et
            </Link>
            <a 
              href="https://wa.me/905316901071" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto border-2 border-navy hover:bg-navy text-navy hover:text-white font-bold py-3.5 px-8 rounded-md transition-all flex items-center justify-center gap-2 text-sm tracking-wide"
            >
              <MessageCircle size={18} />
              WhatsApp'tan Uzmana Sor
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}