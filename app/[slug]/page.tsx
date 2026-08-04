import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReferenceLogos from "@/components/ReferenceLogos";
import { client } from "@/sanity/lib/client"; 
import { PortableText } from '@portabletext/react';
import { 
  CheckCircle2, 
  HelpCircle, 
  Search, 
  ShieldCheck, 
  Wind, 
  FileText, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export const revalidate = 60; 

// --- SANITY YENİ YAZILARI İÇİN KURUMSAL TASARIM BİLEŞENLERİ ---
const RichTextComponents = {
  block: {
    h2: ({ children }: any) => <h2 className="text-3xl font-extrabold text-navy mt-10 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold text-navy mt-8 mb-4">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-xl font-bold text-navy mt-6 mb-3">{children}</h4>,
    normal: ({ children }: any) => <p className="text-lg text-text-mid leading-relaxed mb-5">{children}</p>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-pest-green pl-4 italic text-navy/70 my-6 bg-slate-50 p-4 rounded-r-lg">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-pest-green text-lg text-text-mid">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 marker:text-navy font-bold text-lg text-text-mid">{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-navy">{children}</strong>,
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-pest-green font-bold hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};
// -------------------------------------------------------------

interface BlogPost {
  slug: string;
  title: string;
  image: string | null;
  oldContent: string | null;
  body: any | null;
  category?: string;
  steps?: { title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
}

export default async function SinglePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: BlogPost | null = null;

  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      "image": coalesce(mainImage.asset->url, oldImageUrl),
      "category": categories[0]->title,
      oldContent,
      body
    }`;
    
    post = await client.fetch(query, { slug }, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Yazı Sanity'den çekilirken hata oluştu:", error);
  }

  if (!post) {
    notFound();
  }

  let formType = "genel";
  if (slug.includes("hamambocegi")) formType = "hamambocegi";
  else if (slug.includes("fare") || slug.includes("sican")) formType = "fare_sican";
  else if (slug.includes("tahta-kurusu")) formType = "tahta_kurusu";
  else if (slug.includes("karinca")) formType = "karinca";
  else if (slug.includes("sinek")) formType = "sivrisinek_karasinek";
  else if (slug.includes("pire") || slug.includes("kene")) formType = "pire_kene";
  else if (slug.includes("akrep") || slug.includes("ciyan")) formType = "akrep_orumcek";
  else if (slug.includes("yilan")) formType = "yilan_surungen";
  else if (slug.includes("bmsb")) formType = "bmsb";
  else if (slug.includes("konteyner")) formType = "konteyner";
  else if (slug.includes("ispm")) formType = "ispm15";
  else if (post.category?.toLowerCase().includes("fumigasyon")) formType = "urun_yuk";
  else if (post.category?.toLowerCase().includes("ilaçlama")) formType = "ilaclama_genel";

  const isFumigation = post.category?.toLowerCase().includes("fumigasyon");

  const defaultSteps = isFumigation ? [
    { title: "Keşif ve Risk Analizi", desc: "Zararlı türü, ürün yapısı ve izolasyon şartları incelenir." },
    { title: "Sızdırmazlık ve Güvenlik", desc: "İşlem alanı tamamen izole edilir ve güvenlik önlemleri alınır." },
    { title: "Gaz Uygulaması", desc: "Belirlenen dozda fümigant uygulanarak maruz kalma süresi başlatılır." },
    { title: "Havalandırma ve Raporlama", desc: "İşlem sonu gaz ölçümü yapılır ve uygunluk sertifikası düzenlenir." }
  ] : [
    { title: "Detaylı Keşif", desc: "Uzman ekibimiz alanda tür, yoğunluk ve yuvalanma tespiti yapar." },
    { title: "Teknik Planlama", desc: "Ortama, zararlıya ve insan sağlığına en uygun yöntem belirlenir." },
    { title: "Profesyonel Uygulama", desc: "Ziraat mühendislerimiz kontrolünde güvenli ilaçlama gerçekleştirilir." },
    { title: "İzleme ve Destek", desc: "Uygulama sonrası takip yapılır ve koruyucu önlemler hakkında bilgi verilir." }
  ];

  const defaultFaqs = isFumigation ? [
    { q: "İşlem ürünün kalitesine zarar verir mi?", a: "Hayır, doğru dozaj ve fümigant seçimi ile ürünün besin değeri, tadı veya çimlenme özelliği kesinlikle zarar görmez." },
    { q: "Uygulama süresi ne kadardır?", a: "Kullanılan gaza ve sıcaklığa bağlı olarak 24 saat ile 7 gün arasında değişebilen maruz kalma süreleri mevcuttur." },
    { q: "Gas Free (Gazdan Arındırma) onayı veriyor musunuz?", a: "Evet, işlem bitiminde yasal standartlara uygun gaz ölçümü yapılarak alanın güvenli olduğuna dair sertifika düzenlenir." }
  ] : [
    { q: "Kullanılan ilaçlar insan sağlığına zararlı mı?", a: "Kullandığımız tüm ürünler Sağlık Bakanlığı ve Dünya Sağlık Örgütü (WHO) onaylı olup, hedef dışı canlılara ve insanlara zarar vermez." },
    { q: "İlaçlama sonrası mekânı terk etmemiz gerekiyor mu?", a: "Uygulanan yönteme (jel, kokusuz sıvı vs.) göre bu durum değişir. Çoğu modern uygulamamızda alanı terk etmenize gerek kalmaz." },
    { q: "Kesin çözüm sağlıyor musunuz?", a: "Zararlının biyolojisine uygun entegre mücadele yöntemleri uyguladığımız için popülasyonu kaynağında, kalıcı olarak kontrol altına alıyoruz." }
  ];

  const renderSteps = post.steps || defaultSteps;
  const renderFaqs = post.faqs || defaultFaqs;

  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow pb-10">
      
      <section className="relative bg-navy py-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={post.image || "/images/hero-bg.jpg"} alt={post.title} className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/60" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center pt-8">
          <span className="inline-block bg-pest-green/20 text-pest-green font-bold px-4 py-1.5 rounded-full text-xs md:text-sm uppercase tracking-wider border border-pest-green/30 mb-6">
            {post.category || "Hizmet Detayı"}
          </span>
          <h1 className="font-barlowCondensed text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-tight mb-6">
            {post.title}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 -mt-10 relative z-20">
        
        <div className="lg:col-span-8 space-y-12">
          
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 prose prose-lg max-w-none text-text-mid prose-headings:font-barlowCondensed prose-headings:text-navy prose-headings:uppercase prose-a:text-pest-green">
            {/* Sanity'den gelen veriye özel yazdığımız kurumsal stili (RichTextComponents) uyguluyoruz */}
            {post.body && post.body.length > 0 ? (
              <PortableText value={post.body} components={RichTextComponents} />
            ) : post.oldContent ? (
              <div dangerouslySetInnerHTML={{ __html: post.oldContent }} />
            ) : null}
          </div>

          <div className="space-y-6">
            <h3 className="font-barlowCondensed text-3xl font-bold text-navy uppercase flex items-center gap-3 border-b border-slate-200 pb-4">
              <ShieldCheck className="text-pest-green w-8 h-8" /> 
              Profesyonel Uygulama Adımları
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {renderSteps.map((step, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl relative overflow-hidden group hover:border-pest-green transition-colors">
                  <div className="text-4xl font-black text-slate-200 absolute -right-2 -bottom-4 group-hover:text-pest-green/10 transition-colors">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-navy text-lg mb-2 relative z-10">{step.title}</h4>
                  <p className="text-sm text-text-mid relative z-10">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-barlowCondensed text-3xl font-bold text-navy uppercase flex items-center gap-3 border-b border-slate-200 pb-4">
              <HelpCircle className="text-pest-green w-8 h-8" /> 
              Sık Sorulan Sorular
            </h3>
            <div className="space-y-4">
              {renderFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-navy text-lg mb-3 flex items-start gap-3">
                    <span className="text-pest-green font-black">S.</span> {faq.q}
                  </h4>
                  <p className="text-text-mid text-sm leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="sticky top-28 space-y-6">
            
            <div className="bg-navy p-8 rounded-2xl shadow-xl text-center border-t-4 border-pest-green relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <ShieldAlert className="w-24 h-24 text-white" />
              </div>
              <h3 className="font-barlowCondensed text-3xl font-bold uppercase text-white mb-4 relative z-10">
                Bu Hizmet İçin <br/><span className="text-pest-green">Teklif Alın</span>
              </h3>
              <p className="text-white/70 text-sm mb-8 relative z-10">
                {post.title} konusunda ziraat mühendislerimizden profesyonel destek ve fiyatlandırma talep edin.
              </p>
              <Link 
                href={`/ucretsiz-teklif-al?type=${formType}`} 
                className="w-full bg-pest-green hover:bg-white text-navy font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 relative z-10"
              >
                Hızlı Teklif Formu <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm">
              <h4 className="font-barlowCondensed text-xl font-bold uppercase text-navy mb-4">
                Uzmanımıza Danışın
              </h4>
              <p className="text-sm text-text-mid mb-6">
                Sorununuzu detaylı anlatmak veya acil müdahale talep etmek için doğrudan iletişim kurabilirsiniz.
              </p>
              <div className="space-y-4">
                <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#25d366]/10 text-[#25d366] font-bold p-3 rounded-lg hover:bg-[#25d366] hover:text-white transition-colors">
                   <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                   </div>
                   0531 690 10 71
                </a>
                <a href="tel:+902165057306" className="flex items-center gap-3 bg-navy/5 text-navy font-bold p-3 rounded-lg hover:bg-navy hover:text-white transition-colors">
                   <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                   </div>
                   0216 505 73 06
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
      <ReferenceLogos />
    </main>
  );
}