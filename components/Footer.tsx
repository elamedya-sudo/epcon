import React from "react";
// 1. DÜZELTME: Instagram'ı da import listesinden sildik. Artık sadece temel ikonlar var.
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Sektörel İlaçlama", href: "/sektorel-ilaclama" },
    { name: "Blog / Rehber", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const services = [
    { name: "Hamamböceği İlaçlama", href: "/pest-kontrol" },
    { name: "Akrep İlaçlama", href: "/pest-kontrol" },
    { name: "Pire & Bit İlaçlama", href: "/pest-kontrol" },
    { name: "Fümigasyon Hizmetleri", href: "/fumigasyon" },
    { name: "Mekan Dezenfeksiyonu", href: "/pest-kontrol" },
  ];

  return (
    <footer className="bg-navy-deeper text-white/70 font-barlow pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10">
          
          {/* 1. Sütun: Logo ve Kısa Açıklama */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <div className="bg-white/90 p-2 rounded-lg inline-block self-start">
              <img 
                src="/images/logo/epcon-logo.png" 
                alt="EPCON" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              TSE belgeli ve fümigasyon ruhsatlı uzman kadromuzla, İstanbul genelinde ev, villa ve kurumsal işletmeler için çevre dostu, kesin çözümlü ilaçlama hizmetleri sunuyoruz.
            </p>
            {/* Sosyal Medya İkonları */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram SVG Düzeltmesi */}
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pest-green hover:text-white flex items-center justify-center transition-colors text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook SVG */}
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pest-green hover:text-white flex items-center justify-center transition-colors text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Sütun: Hızlı Linkler */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-barlowCondensed text-base font-bold text-white uppercase tracking-wider">
              Kurumsal
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-pest-green transition-colors flex items-center gap-1 group">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Sütun: Popüler Hizmetler */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-barlowCondensed text-base font-bold text-white uppercase tracking-wider">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((svc) => (
                <li key={svc.name}>
                  <a href={svc.href} className="hover:text-pest-green transition-colors flex items-center gap-1">
                    {svc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Sütun: İletişim Bilgileri */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-barlowCondensed text-base font-bold text-white uppercase tracking-wider">
              İletişim Bilgileri
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-pest-green mt-0.5 flex-shrink-0" />
                <span className="text-white/60 leading-relaxed">
                  Ataşehir, İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-pest-green flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+902165057306" className="hover:text-white transition-colors">0216 505 73 06</a>
                  <a href="tel:+905316901071" className="hover:text-white transition-colors font-semibold">0531 690 10 71</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-pest-green flex-shrink-0" />
                <a href="mailto:info@epcon.com.tr" className="hover:text-white transition-colors">
                  info@epcon.com.tr
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Alt Telif ve İmza Satırı */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <div>
            &copy; {currentYear} <strong>EPCON İlaçlama</strong>. Tüm Hakları Saklıdır.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
            <span className="text-white/10">|</span>
            <a href="/cerez-politikasi" className="hover:text-white transition-colors">Çerez Politikası</a>
          </div>

          <div className="flex items-center gap-1">
            <span>Powered by</span>
            <a 
              href="https://www.eladesign.org" 
              target="_blank" 
              rel="noreferrer" 
              className="font-semibold text-white/50 hover:text-pest-green transition-colors flex items-center gap-0.5"
            >
              ELA Teknoloji ve Tasarım <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}