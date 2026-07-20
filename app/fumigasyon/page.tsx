import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { 
  ShieldCheck, 
  Wind, 
  Box, 
  Ship, 
  Warehouse, 
  PackageSearch, 
  Activity,
  Flame,
  CheckCircle,
  ArrowRight,
  ShieldAlert,
  Package
} from "lucide-react";

export const metadata = {
  title: "Fumigasyon Hizmetleri | Gaz Ölçümü ve Gazdan Arındırma | EPCON",
  description: "BMSB, ISPM 15, konteyner ve gemi fumigasyon hizmetleri. Güvenli izolasyon, kalıntı gaz ölçümü ve gazdan arındırma ile uluslararası sevkiyat güvenliği."
};

interface BlogPost {
  slug: string;
  title: string;
  image: string;
  content: string;
  category?: string;
}

export default async function FumigationPage() {
  let fumigationPosts: BlogPost[] = [];

  try {
    const rootPath = path.join(process.cwd(), "data", "post.json");
    const appPath = path.join(process.cwd(), "app", "data", "post.json");
    
    let filePath = "";
    if (fs.existsSync(rootPath)) filePath = rootPath;
    else if (fs.existsSync(appPath)) filePath = appPath;

    if (filePath) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const allPosts: BlogPost[] = JSON.parse(fileContents);
      
      fumigationPosts = allPosts.filter(
        (post) => 
          post.category?.toLowerCase() === "fümigasyon" || 
          post.category?.toLowerCase() === "fumigasyon"
      );
    }
  } catch (error) {
    console.error("Fümigasyon yazıları çekilirken hata oluştu:", error);
  }

  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. HERO ALANI */}
      <section className="relative bg-navy py-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-navy/80 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block bg-pest-green/20 text-pest-green font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider border border-pest-green/30 mb-6">
            FUMİGASYON • GAZ ÖLÇÜMÜ • GAZDAN ARINDIRMA • SEVKİYAT GÜVENLİĞİ
          </span>
          <h1 className="font-barlowCondensed text-4xl md:text-6xl font-extrabold uppercase text-white leading-tight mb-6 max-w-4xl mx-auto">
            Güvenli, Kontrollü ve <span className="text-pest-green">İzlenebilir Fumigasyon</span>
          </h1>
          <p className="text-lg text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            EPCON; ürün, yük, konteyner, depo, silo, gemi ve kapalı hacimlere yönelik fumigasyon hizmetlerini; insan sağlığı, çevre güvenliği, ürün bütünlüğü ve sevkiyat sürekliliğini esas alan kontrollü prosedürlerle gerçekleştirir. Uygulamalar tamamlandıktan sonra kontrollü havalandırma, gaz ölçümü ve gazdan arındırma işlemleri yapılarak yükler güvenli sevkiyata hazırlanır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al" className="bg-pest-green text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg">
              Teknik Değerlendirme Talep Et
            </Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20">
              WhatsApp'tan Uzmana Sor
            </a>
          </div>
        </div>
      </section>

      {/* 2. GÜVEN BANDI */}
      <section className="bg-pest-green py-4 px-6 relative z-20 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3 text-navy font-bold text-sm md:text-base">
          <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Fumigasyon Yetki Belgeli</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Hudut ve Sahiller Yetkili</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> BMSB Avustralya Akreditasyonlu</span>
          <span className="flex items-center gap-2"><Activity className="w-5 h-5" /> Gaz Ölçüm Ekipmanlı</span>
        </div>
      </section>

      {/* 3. FUMİGASYON NEDİR & GÜVENLİK */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="font-barlowCondensed text-3xl font-bold text-navy uppercase">Fumigasyon Nedir?</h2>
          <p className="text-text-mid leading-relaxed">
            Fumigasyon; kapalı veya uygun şekilde izole edilmiş bir alandaki zararlı organizmaların kontrolü amacıyla, gaz hâlindeki bir fumigantın belirlenen konsantrasyon ve süre boyunca uygulanması işlemidir.
          </p>
          <p className="text-text-mid leading-relaxed">
            Başarılı bir fumigasyon için hedef zararlının doğru belirlenmesi, alanın sızdırmazlığı, sıcaklık, doz, maruz kalma süresi ve gaz dağılımı birlikte değerlendirilir.
          </p>
        </div>
        <div className="bg-slate-50 border-l-4 border-orange-500 p-8 rounded-r-2xl shadow-sm space-y-6">
          <div>
            <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-2 flex items-center gap-2">
              <ShieldAlert className="text-orange-500 w-6 h-6" /> Güvenlik ve Gazdan Arındırma
            </h3>
            <p className="text-sm text-navy/80 leading-relaxed">
              Alan izolasyonu, yetkisiz girişin engellenmesi, uyarı işaretleri, kişisel koruyucu donanım, gaz konsantrasyon takibi ve kontrollü havalandırma süreçleri eksiksiz yönetilir. Alan veya yük, son gaz ölçümleriyle güvenli şartlar doğrulandıktan sonra kullanıma ya da sevkiyata açılır.
            </p>
          </div>
        </div>
      </section>

      {/* 4. ANA HİZMETLER (KARTLAR) */}
      <section className="py-20 px-6 md:px-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy text-center uppercase mb-12">
            Fumigasyon Hizmetlerimiz
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="w-8 h-8 text-pest-green" />, title: "BMSB Fumigasyonu", desc: "Avustralya ve ilgili hedef ülke gerekliliklerine yönelik işlem, kayıt ve güvenli sevkiyata hazırlık.", href: "/bmsb-fumigasyonu" },
              { icon: <Box className="w-8 h-8 text-pest-green" />, title: "ISPM 15 Hizmetleri", desc: "Ham ahşap ambalajların işlem, kayıt ve yetki kapsamına göre işaretleme süreci.", href: "/ispm-15-hizmetleri" },
              { icon: <PackageSearch className="w-8 h-8 text-pest-green" />, title: "Konteyner Fumigasyonu", desc: "Konteyner, yük, izolasyon, gaz ölçümü ve gazdan arındırma süreci.", href: "/konteyner-fumigasyonu" },
              { icon: <Ship className="w-8 h-8 text-pest-green" />, title: "Gemi ve Yat Fumigasyonu", desc: "Ambar, yaşam mahalli, depo ve uygun kapalı bölümlerde kontrollü uygulama.", href: "/gemi-yat-fumigasyonu" },
              { icon: <Warehouse className="w-8 h-8 text-pest-green" />, title: "Depo ve Silo Fumigasyonu", desc: "Depolanmış ürün zararlılarına karşı hacim ve ürün esaslı teknik planlama.", href: "/depo-silo-fumigasyonu" },
              { icon: <Package className="w-8 h-8 text-pest-green" />, title: "Ürün ve Yük Fumigasyonu", desc: "Ürün niteliği, ambalaj yapısı, hedef zararlı, kullanım amacı ve sevkiyat şartlarına göre uygunluğu değerlendirilen kontrollü fumigasyon hizmeti.", href: "/urun-yuk-fumigasyonu" },
              { icon: <Wind className="w-8 h-8 text-pest-green" />, title: "Gaz Ölçümü ve Arındırma", desc: "Kontrollü havalandırma, son gaz ölçümü ve güvenli kullanıma/sevkiyata açma.", href: "/gaz-olcumu-gazdan-arindirma" }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-border group hover:border-pest-green transition-all flex flex-col h-full">
                <div className="mb-4">{srv.icon}</div>
                <h3 className="font-barlowCondensed text-2xl font-bold text-navy uppercase mb-3">{srv.title}</h3>
                <p className="text-text-mid text-sm mb-6 flex-grow">{srv.desc}</p>
                <Link href={srv.href} className="text-pest-green font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Hizmeti İncele <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 7 ADIMDA FUMİGASYON SÜRECİ */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy text-center uppercase mb-16">
            7 Adımda Fumigasyon Süreci
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Teknik Değerlendirme", desc: "Ürün, yük, alan, hacim, hedef zararlı ve operasyon şartları incelenir." },
              { step: "02", title: "Uygulama Planı", desc: "Fumigant, doz, maruz kalma süresi ve ölçüm noktaları belirlenir." },
              { step: "03", title: "Hazırlık ve İzolasyon", desc: "Sızdırmazlık sağlanır, yetkisiz giriş engellenir ve uyarı alanları oluşturulur." },
              { step: "04", title: "Fumigant Uygulaması", desc: "Belirlenen yöntem ve güvenlik prosedürlerine göre uygulama yapılır." },
              { step: "05", title: "Konsantrasyon Takibi", desc: "Gerekli noktalarda gaz konsantrasyonu ve koşullar takip edilir." },
              { step: "06", title: "Havalandırma / Arındırma", desc: "Maruz kalma süresi sonunda kontrollü havalandırma yapılır." },
              { step: "07", title: "Son Ölçüm ve Raporlama", desc: "Kalıntı gaz ölçülür; işlem ve ölçüm bilgileri kayıt altına alınır." }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-pest-green/20 font-barlowCondensed text-6xl font-extrabold absolute -top-6 -left-2 z-0">{item.step}</div>
                <div className="relative z-10 pl-4 border-l-2 border-pest-green">
                  <h4 className="font-bold text-navy text-lg mb-2">{item.title}</h4>
                  <p className="text-text-mid text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. İŞLEM YÖNTEMLERİMİZ */}
      <section className="py-20 px-6 md:px-10 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold uppercase mb-12 text-center">
            Fumigasyon ve İşlem Yöntemlerimiz
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Sülfüril Florür Fumigasyonu", desc: "Uygun yük, konteyner, yapı ve kapalı hacimlerde konsantrasyon takibi ve gazdan arındırmayla planlanan yöntem.", href: "/sulfuril-florur-fumigasyonu" },
              { title: "Metil Bromür Fumigasyonu", desc: "Karantina ve ihracat gerekliliklerinde ürün ve mevzuat uygunluğu doğrulanarak planlanan yöntem.", href: "/metil-bromur-fumigasyonu" },
              { title: "Alüminyum Fosfit Fumigasyonu", desc: "Depolanmış ürün, depo ve silo uygulamalarında ürün, sıcaklık, süre ve güvenlik esaslı yöntem.", href: "/aluminyum-fosfit-fumigasyonu" },
              { title: "Isıl İşlem", desc: "Uygun ürün, yük veya ahşap ambalajın belirlenen sıcaklık ve süre şartlarında işlem gördüğü yöntem.", href: "/isil-islem" }
            ].map((method, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors flex flex-col">
                <Flame className="text-pest-green w-8 h-8 mb-4" />
                <h3 className="font-bold text-lg mb-3 flex-grow">{method.title}</h3>
                <p className="text-white/60 text-sm mb-6">{method.desc}</p>
                <Link href={method.href} className="text-pest-green text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                  Yöntemi İncele <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DİNAMİK ALT HİZMETLER VE BİLGİ MERKEZİ (JSON VERİSİ) */}
      <section className="py-20 px-6 md:px-10 bg-slate-50 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-barlowCondensed text-2xl font-bold uppercase text-navy mb-8 text-center md:text-left">
            Fumigasyon Uygulama Alanları ve Bilgi Merkezi
          </h3>
          
          {fumigationPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fumigationPosts.map((post, idx) => (
                <Link 
                  key={idx} 
                  href={`/${post.slug}`} 
                  className="bg-white border border-border p-5 rounded-xl hover:border-pest-green hover:shadow-lg transition-all group flex items-center justify-between"
                >
                  <span className="font-semibold text-navy group-hover:text-pest-green transition-colors line-clamp-2">
                    {post.title}
                  </span>
                  <ArrowRight className="w-5 h-5 text-border group-hover:text-pest-green transition-colors transform group-hover:translate-x-1 flex-shrink-0" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-text-muted bg-white rounded-xl border border-slate-200">
              Bu kategoriye ait dinamik SEO yazısı bulunamadı.
            </div>
          )}
        </div>
      </section>

      {/* 8. ALT CTA */}
      <section className="py-16 px-6 md:px-10 bg-pest-green text-navy text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase mb-6">
            GÜVENLİ VE KONTROLLÜ SEVKİYAT İÇİN
          </h2>
          <p className="text-lg font-medium mb-8">
            Uygulama alanı, ürün veya yük bilgilerinizi paylaşın; teknik ekibimiz ihracat ve karantina ihtiyacınızı değerlendirsin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ucretsiz-teklif-al" className="bg-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy-deeper transition-colors shadow-lg">
              Teknik Değerlendirme Talep Et
            </Link>
            <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="bg-transparent text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-navy/10 transition-colors border-2 border-navy">
              WhatsApp'tan Uzmana Sor
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}