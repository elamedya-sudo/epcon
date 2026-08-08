import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 1. BMSB Sayfasını Tam Karşılığına Yönlendiriyoruz (Güç Kaybı Önlenir)
      {
        source: '/bmsb-brown-marmorated-stink-bug-tedbirleri',
        destination: '/bmsb-fumigasyonu',
        permanent: true, // Kalıcı yönlendirme (301)
      },

      // 2. Eski WordPress /feed/ linklerini asıl sayfanın kendisine yönlendiriyoruz
      // Örn: /hamam-bocegi-ilaclama/feed -> /hamam-bocegi-ilaclama
      {
        source: '/:slug/feed',
        destination: '/:slug',
        permanent: true,
      },

      // 3. Eski Tema Çöplüğünü (wp-content) Anasayfaya Yönlendiriyoruz
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },

      // 4. Eski Portfolyo ve Yazar (Author) Sayfalarını Hakkımızda'ya veya Ana Sayfaya yolluyoruz
      {
        source: '/portfolio/:path*',
        destination: '/', 
        permanent: true,
      },
      {
        source: '/portfolio_cat/:path*',
        destination: '/', 
        permanent: true,
      },
      {
        source: '/author/:path*',
        destination: '/hakkimizda',
        permanent: true,
      },

      // 5. Eski İletişim / Hakkımızda vb. Linkleri Kurtarma
      {
        source: '/epcon/hakkimizda',
        destination: '/hakkimizda',
        permanent: true,
      },
      {
        source: '/covid-19-dezenfeksiyon',
        destination: '/sektorel-ilaclama', // Artık covid sayfası olmadığı için genel hizmetlere yolluyoruz
        permanent: true,
      }
    ];
  },
};

export default nextConfig;