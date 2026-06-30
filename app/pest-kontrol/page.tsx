import React from "react";
import LeadHero from "@/components/LeadHero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import PestServices from "@/components/PestServices";
import Testimonials from "@/components/Testimonials";
import References from "@/components/References";
import BottomCTA from "@/components/BottomCTA";
import { ArrowRight } from "lucide-react"; 
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  image: string;
  category?: string;
}

export default async function PestKontrolPage() {
  // Veritabanından Pest Kontrol ile ilgili hizmet/yazıları çek
  let pestPosts: BlogPost[] = [];
  try {
    const filePath = path.join(process.cwd(), "data", "post.json");
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const allPosts: BlogPost[] = JSON.parse(fileContents);
      pestPosts = allPosts.filter(post => post.category?.toLowerCase().includes("pest"));
    }
  } catch (error) { console.error(error); }

  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. LEAD HERO (Farklı tasarım anahtarlarıyla) */}
      <LeadHero 
        reverseLayout={false} // Pest kontrol için formu sağda bırakıyoruz
        badgeText="İstanbul · Profesyonel Pest Kontrol"
        titleMain="Kurumsal Çözümlerle"
        titleHighlight="Tam Koruma"
        description={
          <>İşletmenizi, fabrikanızı ve yaşam alanlarınızı zararlılardan koruyun. <strong className="text-white/85 font-normal">Ziraat Mühendislerimiz</strong> yönetiminde uygulanan entegre pest kontrol programı ile kalıcı ve garantili çözümler.</>
        }
        mekanTurleri={["Fabrika", "Depo / Antrepo", "Ofis / Plaza", "Restoran / Kafe", "Otel"]}
        features={[
          { icon: <span>📊</span>, label: "Analiz" },
          { icon: <span>🛡️</span>, label: "Fiziksel Önlemler" },
          { icon: <span>📋</span>, label: "Raporlama" }
        ]}
      />

      {/* 2. PEST KONTROL NEDİR? (Orijinal görsel ile) */}
      <section className="py-16 md:py-20 px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-barlowCondensed text-3xl font-extrabold uppercase text-navy">Pest Kontrol Nedir?</h2>
            <div className="prose prose-base text-text-mid leading-relaxed">
              <p>
                Pest Kontrol, haşere ve zararlı türlerinin işletme sahaları ve üretim alanlarına girmesinin engellenmesi ve kontrol altına alınmasını hedefleyen, tüm entegre haşere mücadele yöntemlerinin bir arada kullanıldığı faaliyetler bütünüdür.
              </p>
              <p>
                Entegre haşere mücadelesi yaklaşımında, haşerelerin biyolojisi, yaşayışı ve alışkanlıkları gibi bilimsel temellere dayalı kontrol yöntemleri kullanılır.
              </p>
              <p>
                Ulusal ve uluslararası denetimler profesyonel bir pest kontrol hizmeti almak gerektirir. Denetimin yarısı güvenilir bir pest kontrol hizmeti, diğer yarısı da bir tesisin ve pest kontrol şirketinin son denetimden bu yana tüm zararlı faaliyetlerinin kapsamlı, yazılı belgelerini sunma yeteneğidir. Zararlı kontrolünde başarı pest kontrol şirketiyle ortak bir iş birliği içerisinde çalışmayla mümkündür.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            {/* Eski sitedeki o meşhur dünya görseli */}
            <img src="/images/pest-kontrol-dunya-gorseli.jpg" alt="Entegre Pest Kontrol" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* 3. DİNAMİK YAZILAR */}
      <section className="bg-slate-50 py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-barlowCondensed text-2xl font-bold uppercase text-navy mb-10">Pest Kontrol & İlgili Hizmetler</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pestPosts.map((post, idx) => (
              <Link key={idx} href={`/${post.slug}`} className="bg-white p-6 rounded-xl border border-border hover:shadow-md transition-all text-left">
                <h4 className="font-bold text-navy hover:text-pest-green mb-2">{post.title}</h4>
                <span className="text-pest-green text-sm font-semibold flex items-center gap-1">İncele <ArrowRight size={14}/></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}