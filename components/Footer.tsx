import React from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Kurumsal", href: "/hakkimizda" },
    { name: "Entegre Zararlı Yönetimi", href: "/entegre-zararli-yonetimi" },
    { name: "Fumigasyon Hizmetleri", href: "/fumigasyon" },
    { name: "İlaçlama Hizmetleri", href: "/sektorel-ilaclama" },
    { name: "Blog / Rehber", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const services = [
    { name: "BMSB İhracat İşlemleri", href: "/bmsb-fumigasyonu" },
    { name: "ISPM 15 Ahşap Ambalaj", href: "/ispm-15-hizmetleri" },
    { name: "Villa İlaçlama", href: "/villa-ilaclama" },
    { name: "Bahçe ve Dış Alan İlaçlama", href: "/bahce-dis-alan-ilaclama" },
    { name: "Hamamböceği Mücadelesi", href: "/hamambocegi-mucadelesi" },
    { name: "Tahta Kurusu Mücadelesi", href: "/tahta-kurusu-mucadelesi" },
  ];

  return (
    <footer className="bg-navy-deeper text-white/70 font-barlow pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10">
          
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <div className="self-start">
              <h3 className="font-barlowCondensed text-xl font-bold text-white uppercase tracking-wider">
                EPCON Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti.
              </h3>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Hizmet yeterliliğini TSE belgesiyle kanıtlamış olan firmamız; fümigasyon ruhsatlı uzman kadrosuyla, İstanbul merkezli olarak Türkiye genelinde endüstriyel, ticari ve konut alanlarına yönelik profesyonel pest kontrol hizmetleri sunmaktadır.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pest-green hover:text-white flex items-center justify-center transition-colors text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pest-green hover:text-white flex items-center justify-center transition-colors text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-barlowCondensed text-base font-bold text-white uppercase tracking-wider">Kurumsal</h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-pest-green transition-colors flex items-center gap-1">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-barlowCondensed text-base font-bold text-white uppercase tracking-wider">Öne Çıkan Hizmetler</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((svc) => (
                <li key={svc.name}><a href={svc.href} className="hover:text-pest-green transition-colors flex items-center gap-1">{svc.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-barlowCondensed text-base font-bold text-white uppercase tracking-wider">İletişim Bilgileri</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-pest-green mt-0.5 flex-shrink-0" />
                <span className="text-white/60 leading-relaxed">Armağanevler Mahallesi Güngör Sokak No:89/A Ümraniye/İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-pest-green flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+902165057306" className="hover:text-white transition-colors">0216 505 73 06</a>
                  <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="hover:text-white transition-colors font-semibold">0531 690 10 71</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <div>&copy; {currentYear} <strong>EPCON Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti.</strong> Tüm Hakları Saklıdır.</div>
          
          <div className="flex items-center gap-4">
            <a href="/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
            <span className="text-white/10">|</span>
            <a href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <span className="text-white/10">|</span>
            <a href="/cerez-politikasi" className="hover:text-white transition-colors">Çerez Politikası</a>
          </div>

          <div className="flex items-center gap-1">
            <span>Powered by</span>
            <a href="https://www.eladesign.org" target="_blank" rel="noreferrer" className="font-semibold text-white/50 hover:text-pest-green transition-colors flex items-center gap-0.5">
              ELA Teknoloji ve Tasarım <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}