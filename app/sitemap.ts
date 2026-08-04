import { MetadataRoute } from 'next';
// fs ve path modüllerini sildik, yerine Sanity client'ımızı ekledik
import { client } from "@/sanity/lib/client"; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Sitenizin ana URL'sini buraya yazın
  const baseUrl = 'https://www.epcon.com.tr';

  // 1. STATİK SAYFALARIMIZ
  const staticRoutes = [
    '',
    '/hakkimizda',
    '/ekibimiz',
    '/belgelerimiz',
    '/referanslar',
    '/iletisim',
    '/ucretsiz-teklif-al',
    '/gizlilik-politikasi',
    '/kvkk',
    '/cerez-politikasi',
    '/entegre-zararli-yonetimi-ipm',
    '/kemirgen-kontrolu',
    '/yuruyen-hasere-mucadelesi',
    '/ucan-hasere-mucadelesi',
    '/depo-zararlilari-yonetimi',
    '/fumigasyon',
    '/bmsb-fumigasyonu',
    '/ispm-15-hizmetleri',
    '/konteyner-fumigasyonu',
    '/gemi-yat-fumigasyonu',
    '/depo-silo-fumigasyonu',
    '/urun-yuk-fumigasyonu',
    '/gaz-olcumu-gazdan-arindirma',
    '/fumigasyon-islem-yontemleri',
    '/sulfuril-florur-fumigasyonu',
    '/metil-bromur-fumigasyonu',
    '/aluminyum-fosfit-fumigasyonu',
    '/isil-islem',
    '/ilaclama',
    '/ev-daire-ilaclama',
    '/villa-ilaclama',
    '/site-apartman-ilaclama',
    '/isyeri-ofis-ilaclama',
    '/bahce-dis-alan-ilaclama',
    '/bitki-ilaclama',
    '/acil-zararli-mudahalesi',
    '/hamambocegi-mucadelesi',
    '/fare-sican-mucadelesi',
    '/tahta-kurusu-mucadelesi',
    '/karinca-mucadelesi',
    '/sivrisinek-karasinek-mucadelesi',
    '/kahverengi-kokarca-mucadelesi',
    '/pire-kene-mucadelesi',
    '/guve-depo-zararlilari',
    '/akrep-orumcek-mucadelesi',
    '/yilan-surungen-kontrolu',
    '/blog'
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8, // Ana sayfa önceliği 1, diğerleri 0.8
  }));

  // 2. DİNAMİK YAZILAR (Sanity'den Okuma)
  let dynamicUrls: MetadataRoute.Sitemap = [];
  
  try {
    // Sadece slug ve son güncellenme tarihini almamız sitemap için yeterli
    const query = `*[_type == "post"] {
      "slug": slug.current,
      _updatedAt
    }`;
    
    // İşlemi build alırken engellememesi için await ekledik
    const posts = await client.fetch(query);
    
    dynamicUrls = posts.map((post: any) => ({
      url: `${baseUrl}/${post.slug}`, 
      lastModified: new Date(post._updatedAt || new Date()), // Sanity'den gelen gerçek tarih
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Sitemap oluşturulurken Sanity okuma hatası:", error);
  }

  return [...staticUrls, ...dynamicUrls];
}