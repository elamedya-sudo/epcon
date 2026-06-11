import React from "react";
import { MapPin, Phone, Mail, Building2, FileText, Send } from "lucide-react";

export const metadata = {
  title: "İletişim | EPCON İlaçlama",
  description: "EPCON Çevre Sağlığı Sistemleri iletişim bilgileri, adres, telefon ve e-posta detayları.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-barlow">
      
      {/* 1. ÜST BÖLÜM: Harita (Tam Genişlik) */}
      <section className="w-full h-[400px] bg-slate-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5211705759625!2d29.1168711!3d41.0138525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8610d247acf%3A0xb0a3ee72311a8281!2zRVBDT04gw4dFVlJFIFNBxJ5MScSeSQ!5e0!3m2!1str!2str!4v1781161485023!5m2!1str!2str"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="EPCON Lokasyon"
        ></iframe>
      </section>

      {/* 2. ALT BÖLÜM: İletişim Bilgileri ve Form Grid */}
      <section className="py-16 md:py-20 px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* SOL KOLON: Şirket Bilgileri ve Metinler */}
          <div className="flex flex-col space-y-8">
            <div>
              <p className="font-barlowCondensed text-xs font-semibold tracking-[0.12em] uppercase text-pest-green mb-2">
                Bize Ulaşın
              </p>
              <h1 className="font-barlowCondensed text-3xl md:text-4xl font-extrabold uppercase text-navy tracking-tight mb-6">
                İletişim & Şirket Bilgileri
              </h1>
              
              {/* Künye Kartı */}
              <div className="bg-slate-50 border border-border rounded-xl p-6 space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Building2 size={20} className="text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-text-muted block mb-0.5">Ünvan</span>
                    <strong className="text-sm text-navy">EPCON Çevre Sağlığı Sistemleri San. Tic. Ltd. Şti.</strong>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText size={20} className="text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-text-muted block mb-0.5">Ticari Sicil Numarası</span>
                    <strong className="text-sm text-navy">770133</strong>
                  </div>
                </div>
              </div>

              {/* İletişim Listesi */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pest-green/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-pest-green" />
                  </div>
                  <div className="mt-2 text-sm text-text-mid leading-relaxed">
                    Armağanevler Mahallesi Güngör sokak<br />No:89/A Ümraniye/İstanbul
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pest-green/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-pest-green" />
                  </div>
                  <div className="flex flex-col text-sm text-text-mid">
                    <a href="tel:+905316901071" className="hover:text-navy transition-colors">+90 (531) 690 1071</a>
                    <a href="tel:+902165057306" className="hover:text-navy transition-colors">+90 (216) 505 7306</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pest-green/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-pest-green" />
                  </div>
                  <a href="mailto:info@epcon.com.tr" className="text-sm text-text-mid hover:text-navy transition-colors">
                    info@epcon.com.tr
                  </a>
                </li>
              </ul>
            </div>

            {/* Hakkımızda Metinleri */}
            <div className="prose prose-sm text-text-mid leading-relaxed pt-6 border-t border-border">
              <p>
                <strong>Epcon Çevre Sağlığı Sistemleri San. Ve Tic. Ltd. Şti.</strong> Haşere ve zararlıların denetimi engellenmesi ve kontrol altına alınması konularında hizmet verebilmek amacıyla kurulmuştur.
              </p>
              <p className="mt-4">
                Firmamız, insan ve çevre sağlığı için oldukça önem taşıyan haşere ve zararlılara karşı mücadelede alışılagelmiş ilaçlama yöntemi yerine bilgi, araştırma, inceleme, fiziksel önlemlerin tespiti ve uygulanması, ekipman, gözlem, uygulama, raporlama, analiz ve eğitimden oluşan entegre pest kontrol sistemini en son teknolojiyi kullanarak, profesyonel bir yaklaşım içerisinde uygulamaktadır.
              </p>
              <p className="mt-4">
                Firmamız uygulamadaki bu farklı yaklaşımı sayesinde eğitim kurumları, hastane, otel, banka, fabrika, konut ve iş yerlerinin (Haşere ve zararlıların insan, gıda ve çevre sağlığını tehdit ettiği tüm alanlarda) haşere ve zararlılardan arındırılmasını sağlamaktadır.
              </p>
              <p className="mt-4">
                Teknik ekibimiz ziraat mühendislerinden oluşmakta ve düzenli eğitime tabi tutularak en modern araç ve ekipmanlarla hizmet sunmaktadır. Dünya Sağlık Örgütü (WHO) ve Sağlık Bakanlığı onaylı, çevre ve insan sağlığına duyarlı kimyasallar kullanmaktadır.
              </p>
              <p className="mt-4">
                Firmamızın uygulayacağı Entegre Pest Kontrol sistemi; BRC (British Retail Consortium), IFS (International Food Standard), AIB (American Institute of Baking) ve TSE (Türk Standartları Enstitüsü) kalite yönetim sistemlerine ve uluslararası denetleme kuruluşlarının denetimlerine uygunluk taşımaktadır.
              </p>
            </div>
          </div>

          {/* SAĞ KOLON: İletişim Formu */}
          <div className="bg-slate-50 border border-border rounded-2xl p-8 lg:p-10 h-fit sticky top-28">
            <h3 className="font-barlowCondensed text-2xl font-bold uppercase text-navy mb-2">
              Mesaj Göndermek İster misiniz?
            </h3>
            <p className="text-sm text-text-muted mb-8">
              Yetkililerimiz tüm mesajları titizlikle incelemekte ve geri dönüş yapmaktadır.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input 
                    type="text" 
                    placeholder="Adınız Soyadınız" 
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pest-green focus:ring-1 focus:ring-pest-green transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Telefon Numaranız" 
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pest-green focus:ring-1 focus:ring-pest-green transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input 
                    type="email" 
                    placeholder="E-posta Adresiniz" 
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pest-green focus:ring-1 focus:ring-pest-green transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Konu" 
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pest-green focus:ring-1 focus:ring-pest-green transition-colors"
                  />
                </div>
              </div>
              <div>
                <textarea 
                  rows={5}
                  placeholder="Mesajınız..." 
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pest-green focus:ring-1 focus:ring-pest-green transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="bg-pest-green hover:bg-pest-green-dark text-white font-bold py-3.5 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 w-full md:w-auto"
              >
                <Send size={18} />
                Gönder
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}