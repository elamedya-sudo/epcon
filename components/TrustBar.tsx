import React from "react";
import { Award, ShieldCheck, Ship, Globe, FileCheck } from "lucide-react";

export default function TrustBar() {
  // Brifteki (Bölüm 4.4) maddeler
  const trustItems = [
    {
      icon: <Award size={18} className="text-white" />,
      title: "TSE-HYB Belgeli",
      desc: "Belgelendirilmiş hizmet altyapısı."
    },
    {
      icon: <ShieldCheck size={18} className="text-white" />,
      title: "BİYOSİDAL UYGULAMA İZİNLİ",
      desc: "Yetkili biyosidal uygulama."
    },
    {
      icon: <FileCheck size={18} className="text-white" />,
      title: "FUMİGASYON YETKİ BELGELİ",
      desc: "Profesyonel fumigasyon."
    },
    {
      icon: <Ship size={18} className="text-white" />,
      title: "HUDUT VE SAHİLLER YETKİLİ",
      desc: "İlgili yönetmelik kapsamında."
    },
    {
      icon: <Globe size={18} className="text-white" />,
      title: "BMSB AVUSTRALYA AKREDİTASYONLU",
      desc: "Kayıtlı fumigasyon hizmeti."
    },
  ];

  return (
    <section className="w-full bg-pest-green py-5 px-6 md:px-10 font-barlow">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-y-6 gap-x-8 md:gap-x-12">
        {trustItems.map((item, index) => (
          <React.Fragment key={index}>
            {/* Güven Maddesi */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/15 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-inner">
                {item.icon}
              </div>
              <div className="flex flex-col">
                 <span className="text-white font-bold text-sm tracking-wide uppercase leading-tight">{item.title}</span>
                 <span className="text-white/70 text-xs hidden sm:block">{item.desc}</span>
              </div>
            </div>
            
            {/* Masaüstünde Maddeler Arasındaki Ayırıcı Çizgi */}
            {index < trustItems.length - 1 && (
              <div className="hidden lg:block w-[1px] h-8 bg-white/20 self-center" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}