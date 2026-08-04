import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import { client } from "@/sanity/lib/client"; // SANITY BAĞLANTISI EKLENDİ

const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "EPCON — Ev, Villa ve Site İlaçlaması | İstanbul",
  description: "TSE belgeli, fümigasyon ruhsatlı profesyonel ilaçlama hizmetleri.",
  // Google Search Console Doğrulaması
  verification: {
    google: "i7n6JIGEl5BncWFCKYUyRVNtWYLePkLnSIh_WIWdH6U",
  },
};

// COMPONENT ASYNC YAPILDI (Sunucu tarafında veri çekebilmek için)
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // HEADER İÇİN GENEL AYARLARI ÇEKİYORUZ (60 saniyede bir güncellenir)
  let settings = null;
  try {
    settings = await client.fetch('*[_type == "siteSettings"][0]', {}, { next: { revalidate: 60 } });
  } catch (e) {
    console.error("Layout ayarları çekilemedi:", e);
  }

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5KC74XTH');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${barlow.variable} ${barlowCondensed.variable} font-barlow antialiased bg-white text-text-dark relative`}>
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KC74XTH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* GOOGLE ANALYTICS (GA4) ENTEGRASYONU */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1PYDRGRGS4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1PYDRGRGS4');
          `}
        </Script>

        {/* GİZLİ ÇEVİRİ MOTORU (TR, EN, RU, DE, AR DESTEKLİ) */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'tr',
                includedLanguages: 'tr,en,ru,de,ar', 
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        {/* GİZLİ ÇEVİRİ MOTORU BİTİŞİ */}

        {/* SETTINGS VERİSİNİ HEADER'A PROP OLARAK YOLLUYORUZ */}
        <Header settings={settings} />
        {children}
        <Footer />
        <ScrollToTop />
        <FloatingButtons /> 
        <Analytics />
      </body>
    </html>
  );
}