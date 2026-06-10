import React from "react";
import { Award, ClipboardCheck, Clock, Leaf, Zap } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      icon: <Award size={18} className="text-white" />,
      text: "TSE-HYB Belgeli",
    },
    {
      icon: <ClipboardCheck size={18} className="text-white" />,
      text: "Fümigasyon Ruhsatlı",
    },
    {
      icon: <Clock size={18} className="text-white" />,
      text: "20+ Yıl Deneyim",
    },
    {
      icon: <Leaf size={18} className="text-white" />,
      text: "Aile & Evcil Hayvan Dostu İlaç",
    },
    {
      icon: <Zap size={18} className="text-white" />,
      text: "Aynı Gün Hizmet",
    },
  ];

  return (
    <section className="w-full bg-pest-green py-5 px-6 md:px-10 font-barlow">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-y-4 gap-x-6 md:gap-x-10 lg:gap-x-12">
        {trustItems.map((item, index) => (
          <React.Fragment key={index}>
            {/* Güven Maddesi */}
            <div className="flex items-center gap-3 text-white/90 text-sm font-medium tracking-wide">
              <div className="w-9 h-9 bg-white/15 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-inner">
                {item.icon}
              </div>
              <span className="whitespace-nowrap">{item.text}</span>
            </div>

            {/* Masaüstünde Maddeler Arasındaki Ayırıcı Çizgi */}
            {index < trustItems.length - 1 && (
              <div className="hidden lg:block w-[1px] h-6 bg-white/20 self-center" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}