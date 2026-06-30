import React from "react";
import fs from "fs";
import path from "path";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FumigationSlider from "@/components/FumigationSlider";
import LeadHero from "@/components/LeadHero"; // Yeni akıllı form bileşenimizi çağırıyoruz

interface BlogPost {
  slug: string;
  title: string;
  image: string;
  content: string;
  category?: string;
}

export default async function FumigationPage() {
  const sliderImages = [
    "/images/fumigasyon/fumigasyon-resim.jpg", 
    "/images/fumigasyon/fumigasyon-resim2.jpg",
    "/images/fumigasyon/fumigasyon-resim3.jpg",
  ];

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
      
      {/* 1. BÖLÜM: YENİ LEAD HERO (Tasarımı Farklılaştırıldı) */}
      <LeadHero 
        reverseLayout={true} // Formu sola aldı!
        backgroundImage="/images/fumigasyon/fumigasyon-resim.jpg" // Arkaya gerçek fotoğrafı bastı!
        badgeText="Uluslararası Onaylı Fümigasyon"
        titleMain="Standartlara Uygun"
        titleHighlight="Fümigasyon"
        description={
          <>Zararlı organizmaları yumurta, larva ve ergin dahil tüm yaşam evrelerinde %100 kesinlikle yok eden, <strong className="text-white/85 font-normal">WHO onaylı ve sertifikalı</strong> profesyonel fümigasyon hizmeti.</>
        }
        mekanTurleri={["Gemi / Yat", "Konteyner", "Ahşap Palet", "Depo / Antrepo", "Silolar"]}
        features={[
          { icon: <span>🪲</span>, label: "Ahşap Kurdu" },
          { icon: <span>🐛</span>, label: "BMSB (Kokarca)" },
          { icon: <span>📦</span>, label: "Palet İlaçlama" }
        ]}
      />

      {/* 2. BÖLÜM: İÇERİK VE SLIDER (Orijinal haliyle korundu) */}
      <section className="py-16 md:py-20 px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sol Kolon: Metin */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-barlowCondensed text-3xl font-extrabold uppercase text-navy">
              Fümigasyon Nedir?
            </h2>
            <div className="prose prose-sm md:prose-base text-text-mid leading-relaxed">
              <p>
                Böcekleri (Yumurta, larva, nimf, pupa ve ergin dönemlerinde) ve diğer zararlı etmenleri (Nematod, mantar, bakteri gibi) öldürmek amacı ile kapalı bir ortamda (Belirli bir ısıda ve belirli miktarda) gaz halinde kimyasal bir madde (Fümigant) vermek ve belirli bir süre gazı bu ortamda tutma işlemidir.
              </p>
              <p>
                İlaçlar sindirim, solunum, kontakt(değme) yoluyla etki ederler. Fümigantlar solunum yoluyla etkili olurlar, oksidas, peroksidas gibi enzimleri etki ederek solunuma engel olurlar ya da sinir sistemini felç ederler.
              </p>
              <p>
                Fumigasyon işlemi, çeşitli alet ve ekipmanlarla gerçekleştirilen, canlının tüm yaşam evrelerini yok ederek ürünün korunmasını sağlayan bir yöntemdir.
              </p>
              <p>
                Depolanmış Ürün Zararları dikkate alındığında, insektisitlerin hiç biri ürün içerisinde bırakılan yumurtalara karşı etkin değildir. Bu canlıların üreme hızları ve her seferde meydana getirdikleri canlı sayısı, Üründe çok ciddi bir bulaşmaya götürecektir.
              </p>
            </div>
          </div>

          {/* Sağ Kolon: Slider */}
          <div className="lg:col-span-4 w-full">
            <FumigationSlider images={sliderImages} />
          </div>

        </div>
      </section>

      {/* 3. BÖLÜM: DİNAMİK ALT HİZMETLER & YAZILAR (JSON'dan çekilen bölüm korundu) */}
      <section className="bg-slate-50 py-16 px-6 md:px-10 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-barlowCondensed text-2xl font-bold uppercase text-navy mb-8 text-center md:text-left">
            Fümigasyon Hizmetlerimiz & İlgili Yazılar
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
                  <ArrowRight size={18} className="text-border group-hover:text-pest-green transition-colors transform group-hover:translate-x-1 flex-shrink-0" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-text-muted">
              Bu kategoriye ait dinamik yazı bulunamadı. Lütfen JSON dosyasındaki kategorileri kontrol edin.
            </div>
          )}
        </div>
      </section>

    </main>
  );
}