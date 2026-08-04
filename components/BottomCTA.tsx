import React from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export default async function BottomCTA() {
  let settings = null;
  try {
    settings = await client.fetch('*[_type == "siteSettings"][0]', {}, { next: { revalidate: 60 } });
  } catch (e) {
    console.error("CTA ayarları çekilemedi:", e);
  }

  const whatsapp = settings?.whatsapp || "0531 690 10 71";
  const cleanWa = "90" + whatsapp.replace(/^0/, "").replace(/\s+/g, "");

  return (
    <section className="bg-navy-deeper py-16 md:py-20 px-6 md:px-10 font-barlow text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pest-green/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight mb-4 leading-tight">
          İHTİYACINIZA ÖZEL ÇÖZÜMÜ<br />BİRLİKTE BELİRLEYELİM
        </h2>
        <p className="text-white/70 mb-8 text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto">
          Alanınızı, hedef zararlıyı ve mevcut riskleri değerlendirelim; ihtiyacınıza uygun pest kontrol, fumigasyon veya ilaçlama hizmet planını ve teklifimizi hazırlayalım.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/ucretsiz-teklif-al" 
            className="w-full sm:w-auto bg-pest-green hover:bg-pest-green-dark text-white font-bold py-4 px-8 rounded-md transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 tracking-wide text-sm"
          >
            <ShieldCheck size={18} />
            Keşif ve Teklif Talep Et
          </Link>
          <a 
            href={`https://wa.me/${cleanWa}`} 
            target="_blank" 
            rel="noreferrer" 
            className="w-full sm:w-auto border border-white/20 hover:border-white/40 bg-transparent hover:bg-white/5 text-white font-bold py-4 px-8 rounded-md transition-all flex items-center justify-center gap-2 text-sm tracking-wide"
          >
            <MessageCircle size={18} className="text-[#25d366]" />
            WhatsApp'tan Uzmana Sor
          </a>
        </div>
      </div>
    </section>
  );
}