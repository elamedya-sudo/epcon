import React from "react";
import { client } from "@/sanity/lib/client";
import BelgelerClient from "./BelgelerClient";

export const metadata = {
  title: "Belgelerimiz | EPCON",
  description: "Yetki belgelerimiz, kalite sertifikalarımız ve ruhsatlarımız.",
};

// Sayfayı her 60 saniyede bir güncellenmeye zorluyoruz
export const revalidate = 60;

export default async function BelgelerimizPage() {
  let sanityDocs = [];

  try {
    const query = `*[_type == "certificate"] | order(_createdAt desc) {
      title,
      category,
      documentNo,
      scope,
      date,
      "imagePath": image.asset->url
    }`;
    sanityDocs = await client.fetch(query, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Belgeler Sanity'den çekilemedi:", error);
  }

  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      {/* SAYFA BAŞLIĞI */}
      <section className="py-16 px-6 md:px-10 max-w-5xl mx-auto w-full">
        <h1 className="font-barlowCondensed text-4xl md:text-5xl font-extrabold uppercase text-navy mb-4 border-b border-border pb-4">
          YETKİ, BELGE VE MESLEKİ ÜYELİKLERİMİZ
        </h1>
        <p className="text-text-dark text-[15px] leading-relaxed">
          Hizmetlerimizi yürürlükteki mevzuat, yetki belgeleri, kalite yönetim sistemleri ve mesleki kuruluşlarla iş birliği içinde yürütüyoruz.
        </p>
      </section>

      {/* DİNAMİK LİSTE (Client Component) */}
      <BelgelerClient sanityDocs={sanityDocs} />
    </main>
  );
}