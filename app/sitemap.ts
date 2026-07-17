import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
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

  // 2. DİNAMİK YAZILAR (JSON'dan Okuma)
  let dynamicUrls: MetadataRoute.Sitemap = [];
  
  try {
    const rootPath = path.join(process.cwd(), "data", "post.json");
    const appPath = path.join(process.cwd(), "app", "data", "post.json");
    
    let filePath = "";
    if (fs.existsSync(rootPath)) filePath = rootPath;
    else if (fs.existsSync(appPath)) filePath = appPath;

    if (filePath) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const posts = JSON.parse(fileContents);
      
      dynamicUrls = posts.map((post: any) => ({
        // Not: Link yapınız /yazi ise burayı `${baseUrl}/${post.slug}` olarak ayarlayabilirsiniz.
        url: `${baseUrl}/${post.slug}`, 
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error("Sitemap oluşturulurken JSON okuma hatası:", error);
  }

  return [...staticUrls, ...dynamicUrls];
}