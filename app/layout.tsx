import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Script from "next/script"; // Script import edildi
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${barlow.variable} ${barlowCondensed.variable} font-barlow antialiased bg-white text-text-dark relative`}>
        
        {/* GİZLİ ÇEVİRİ MOTORU BAŞLANGICI */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'tr',
                includedLanguages: 'en', // Sadece İngilizce'ye izin ver
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        {/* GİZLİ ÇEVİRİ MOTORU BİTİŞİ */}

        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <FloatingButtons /> 
      </body>
    </html>
  );
}