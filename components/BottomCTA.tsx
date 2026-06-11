import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="bg-navy-deeper py-16 md:py-20 px-6 md:px-10 font-barlow text-center relative overflow-hidden">
      {/* Arka Plan Parlama Efekti */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pest-green/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-barlowCondensed text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight mb-4">
          Hâlâ Karar Veremediniz mi?
        </h2>
        <p className="text-white/70 mb-8 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Zaman kaybetmeyin. Uzman ekibimize ulaşın, haşere sorununuzu dinleyelim ve size en uygun kalıcı çözümü, garantili bir şekilde sunalım.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="tel:+905316901071" 
            className="w-full sm:w-auto bg-pest-green hover:bg-pest-green-dark text-white font-bold py-3.5 px-8 rounded-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg shadow-pest-green/20"
          >
            <Phone size={20} />
            Hemen Ara: 0531 690 10 71
          </a>
          <a 
            href="https://wa.me/905316901071" 
            target="_blank" 
            rel="noreferrer" 
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 border border-white/10"
          >
            <MessageCircle size={20} />
            WhatsApp'tan Yaz
          </a>
        </div>
      </div>
    </section>
  );
}