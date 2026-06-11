import React from "react";
import { notFound } from "next/navigation";
import { User, ShieldCheck } from "lucide-react";
import fs from "fs";
import path from "path";

type Params = Promise<{ slug: string }>;

interface BlogPost {
  slug: string;
  title: string;
  image: string;
  content: string;
  category?: string; // Kategori tip tanımını ekledik
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;

  let postsData: BlogPost[] = [];
  try {
    const rootPath = path.join(process.cwd(), "data", "post.json");
    const appPath = path.join(process.cwd(), "app", "data", "post.json");
    
    let filePath = "";
    if (fs.existsSync(rootPath)) filePath = rootPath;
    else if (fs.existsSync(appPath)) filePath = appPath;

    if (filePath) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      postsData = JSON.parse(fileContents);
    }
  } catch (error) {
    console.error("JSON okuma hatası:", error);
  }

  const post = postsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      {/* Üst Büyük Blog Başlık Alanı */}
      <section className="w-full bg-navy py-16 md:py-24 px-6 md:px-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-deeper/50 z-0" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          
          {/* DÜZELTME: Artık statik "Fümigasyon & Pest Kontrol Rehberi" veya "ARŞİV" yazmıyor, Gerçek Kategori yazıyor */}
          <span className="bg-pest-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {post.category || "Genel"}
          </span>
          
          <h1 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-white/60 text-xs md:text-sm pt-2">
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-pest-green" /> EPCON Uzman Kadrosu
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-pest-green" /> Onaylı Hizmet
            </span>
          </div>
        </div>
      </section>

      {/* Makale İçerik Alanı */}
      <section className="py-16 px-6 md:px-10 max-w-4xl mx-auto w-full">
        <div className="space-y-8">
          {post.image && (
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div 
            className="prose prose-slate md:prose-lg max-w-none text-text-mid leading-relaxed
              prose-headings:font-barlowCondensed prose-headings:uppercase prose-headings:text-navy prose-headings:font-bold
              prose-strong:text-navy prose-strong:font-bold
              prose-p:mb-5"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
    </main>
  );
}