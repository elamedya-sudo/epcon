import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Yeni eklediğimiz Footer'ı import ediyoruz

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
  description: "TSE belgeli, fümigasyon ruhsatlı profesyonel ilaçlama hizmetleri. Çocuk ve evcil hayvan dostu çözümler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${barlow.variable} ${barlowCondensed.variable} font-barlow antialiased bg-white text-text-dark`}>
        <Header />
        {children}
        <Footer /> {/* Footer tüm sayfaların en altında otomatik belirecek */}
      </body>
    </html>
  );
}