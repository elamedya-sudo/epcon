import React from "react";
import { client } from "@/sanity/lib/client"; 
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog & Rehber | EPCON İlaçlama",
  description: "Fümigasyon ve pest kontrol hakkında güncel bilgiler, uzman yazıları ve sektörel rehber.",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface BlogPost {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  category?: string;
}

export default async function BlogPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const currentCategory = typeof searchParams.cat === "string" ? searchParams.cat : "Tümü";

  let postsData: BlogPost[] = [];
  
  try {
    // SİHİR BURADA: Resim ve metin yoksa eskiyi al (coalesce mantığı)
    const query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      "image": coalesce(mainImage.asset->url, oldImageUrl),
      "category": categories[0]->title,
      "excerpt": coalesce(pt::text(body), oldContent)
    }`;
    
    postsData = await client.fetch(query);
  } catch (error) {
    console.error("Sanity veri çekme hatası:", error);
  }

  const uniqueCategories = Array.from(
    new Set(postsData.map((post) => post.category || "Genel"))
  );
  const allCategories = ["Tümü", ...uniqueCategories];

  const filteredPosts = currentCategory === "Tümü"
    ? postsData
    : postsData.filter((post) => (post.category || "Genel") === currentCategory);

  const getExcerpt = (text: string, length = 120) => {
    if (!text) return "";
    const cleanText = text.replace(/<[^>]+>/g, ""); 
    return cleanText.length > length ? cleanText.substring(0, length) + "..." : cleanText;
  };

  return (
    <main className="flex flex-col min-h-screen bg-slate-50 font-barlow">
      <section className="w-full bg-navy py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight mb-2">
              Blog & Rehber
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-xl">
              Fümigasyon uygulamaları, pest kontrol yöntemleri ve yasal mevzuatlar hakkında güncel makaleler.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-border pb-6">
          {allCategories.map((cat, idx) => (
            <Link 
              key={idx} 
              href={`/blog${cat === "Tümü" ? "" : `?cat=${encodeURIComponent(cat)}`}`}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                currentCategory === cat 
                  ? "bg-navy text-white shadow-md" 
                  : "bg-white border border-border text-text-mid hover:border-pest-green hover:text-pest-green"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <article key={idx} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-border">
                      <BookOpen size={48} strokeWidth={1} />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-pest-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {post.category || "Genel"}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-barlowCondensed text-xl font-bold uppercase text-navy mb-3 line-clamp-2 leading-tight group-hover:text-pest-green transition-colors">
                    <Link href={`/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-text-mid leading-relaxed mb-6 flex-grow">
                    {getExcerpt(post.excerpt)}
                  </p>
                  <Link href={`/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-pest-green transition-colors mt-auto">
                    Devamını Oku <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-border rounded-2xl">
            <h3 className="text-xl text-navy font-bold mb-2">Bu kategoride yazı bulunmuyor.</h3>
            <p className="text-text-muted">Seçtiğiniz filtreye uygun bir makale henüz eklenmemiş.</p>
          </div>
        )}
      </section>
    </main>
  );
}