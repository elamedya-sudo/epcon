"use client";

import React, { useState, useEffect, useRef } from "react";

// Rakamları sıfırdan yukarı saydıran özel alt bileşen
const AnimatedNumber = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Kullanıcı bu alana geldiğinde (Scroll) animasyonu tetikler
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  // Sayma İşlemi (60fps Akıcılığında)
  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const duration = 2000; // Animasyonun süresi (2 saniye)
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Sayıların yavaşlayarak durması için easeOut animasyon formülü
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, end]);

  return <span ref={ref}>{count}</span>;
};

// Ana İstatistik Bandı
export default function AnimatedStats() {
  const stats = [
    { num: 25, label: "Yıllık Deneyim" },
    { num: 2500, label: "Mutlu Müşteri" },
    { num: 28175, label: "İş Bitirme" },
    { num: 100, label: "Hizmet Alanı" },
  ];

  return (
    <section className="bg-[#1f2128] py-16 px-6 md:px-10 text-white font-barlow">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
        {stats.map((stat, idx) => (
          <div key={idx} className={`flex flex-col space-y-2 ${idx === 3 ? 'border-r-0' : ''}`}>
            <span className="font-barlowCondensed text-5xl md:text-6xl font-extrabold text-white flex items-center justify-center">
              <AnimatedNumber end={stat.num} />
              {/* Havalı durması için + işaretini marka yeşili yaptık */}
              <span className="text-pest-green ml-1">+</span>
            </span>
            <span className="text-sm text-white/60 uppercase tracking-widest font-semibold">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}