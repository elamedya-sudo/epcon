"use client";

import React, { useState } from "react";
import MainPestHero from "@/components/heros/MainPestHero"; // Orijinal hero geri geldi
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import PestServices from "@/components/PestServices";
import Testimonials from "@/components/Testimonials";
import References from "@/components/References";
import BottomCTA from "@/components/BottomCTA";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import postsData from "@/data/post.json";

export default function SektorelIlaclamaPage() {
  const [visibleCount, setVisibleCount] = useState(6);

  const ilaclamaPosts = postsData.filter((post: any) => 
    post.category ? post.category.toLocaleLowerCase('tr-TR').includes("ilaç") : false
  );

  return (
    <main className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HERO (Anasayfadaki Orijinal Hero) */}
      <MainPestHero />
      
      {/* 2. GÜVEN ŞERİDİ VE NASIL ÇALIŞIYORUZ */}
      <TrustBar />
      <HowItWorks />

      {/* 3. VURGULU TANITIM METNİ VE ARABA GÖRSELİ */}
      <section className="py-20 px-6 md:px-10 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy leading-tight">
              Ziraat Mühendislerinden oluşan uzman teknik kadromuzla hizmet vermekte ve birikimlerimizi sizinle paylaşmak arzusundayız.
            </h2>
            <p className="text-lg text-text-mid leading-relaxed">
              Ziraat Mühendislerimiz tarafından tasarlanan ve eğitimli teknisyenlerimiz tarafından uygulanan ilaçlama programımız haşere ve kemirgenleri etkin bir şekilde kontrol ederek ortadan kaldırmaktadır. Epcon uzmanları evinizin, iş yerinizin muhtelif bölgelerinde ve çevresinde inceleme yaparak haşere kaynağını bulur ve kontrol altına alır. Epcon Dünya Sağlık Örgütü (WHO) ve Sağlık Bakanlığı onaylı, insan sağlığını tehdit etmeyen kimyasal ve uygulama yöntemi kullanarak günlük yaşantınızı sekteye uğratmaz.
            </p>
          </div>
          <div className="flex justify-center">
             <div className="overflow-hidden rounded-xl border-4 border-pest-green shadow-xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
                <img 
                  src="/images/fumigasyon/fumigasyon-resim.jpg" 
                  alt="Epcon İlaçlama Aracı" 
                  className="w-full h-auto object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* 4. HANGİ HAŞEREDEN ŞİKAYETÇİSİNİZ? */}
      <PestServices />

      <Testimonials />

      {/* 6. BLOG YAZILARI */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto w-full">
        <h3 className="font-barlowCondensed text-3xl font-bold uppercase text-navy mb-12 text-center">
          İlaçlama & Haşere Rehberi
        </h3>
        
        {ilaclamaPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ilaclamaPosts.slice(0, visibleCount).map((post: any, idx: number) => (
                <Link 
                  key={idx} 
                  href={`/${post.slug}`} 
                  className="bg-white border border-border p-6 rounded-2xl hover:shadow-xl transition-all group"
                >
                  <div className="h-48 overflow-hidden rounded-lg mb-4 bg-slate-100">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="font-bold text-navy text-lg mb-2 group-hover:text-pest-green transition-colors">
                    {post.title}
                  </h4>
                  <span className="text-pest-green text-sm font-semibold flex items-center gap-1 mt-auto">
                    Devamını Oku <ArrowRight size={14}/>
                  </span>
                </Link>
              ))}
            </div>

            {visibleCount < ilaclamaPosts.length && (
              <div className="text-center mt-12">
                <button 
                  onClick={() => setVisibleCount(prev => prev + 6)}
                  className="bg-navy hover:bg-navy-dark text-white font-medium px-10 py-3 rounded-full transition-all"
                >
                  Devamını Yükle
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-10">
            <p className="text-text-muted">İlaçlama ile ilgili yazı bulunamadı.</p>
          </div>
        )}
      </section>

      <BottomCTA />

      {/* 5. REFERANSLAR */}
      <References />

    </main>
  );
}