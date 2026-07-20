import React from "react";
import { MapPin, Phone, Mail, Building2, Send, MessageCircle, Clock } from "lucide-react";

export const metadata = {
  title: "İletişim | EPCON",
  description: "EPCON Çevre Sağlığı Sistemleri iletişim bilgileri, adres, telefon, WhatsApp ve e-posta detayları.",
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
          
          {/* SOL KOLON: Şirket Bilgileri */}
          <div className="flex flex-col space-y-8">
            <div>
              <p className="font-barlowCondensed text-xs font-semibold tracking-[0.12em] uppercase text-pest-green mb-2">
                Bize Ulaşın
              </p>
              <h1 className="font-barlowCondensed text-3xl md:text-4xl font-extrabold uppercase text-navy tracking-tight mb-6">
                İletişim Bilgileri
              </h1>

              {/* Kısa Açıklama ve Ünvan Kartı */}
              <div className="bg-slate-50 border border-border rounded-xl p-6 md:p-8 mb-8">
                <p className="text-sm md:text-base text-navy/80 leading-relaxed mb-6">
                  Pest kontrol, fumigasyon, biyosidal uygulama ve bitki sağlığı hizmetleri hakkında bilgi ve teklif almak için bizimle iletişime geçebilirsiniz. Teknik ekibimiz talebinizi değerlendirerek sizinle iletişime geçecektir.
                </p>
                <div className="flex items-start gap-3 pt-6 border-t border-border">
                  <Building2 size={22} className="text-navy flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-text-muted block mb-1">Tam Firma Ünvanı</span>
                    <strong className="text-base text-navy block leading-snug">EPCON Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti.</strong>
                  </div>
                </div>
              </div>

              {/* İletişim Listesi */}
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pest-green/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-pest-green" />
                  </div>
                  <div className="mt-1">
                    <span className="text-xs text-text-muted block mb-0.5 font-bold uppercase tracking-wider">Adres</span>
                    <span className="text-base text-navy font-medium leading-relaxed">
                      Armağanevler Mahallesi Güngör Sokak<br />No:89/A Ümraniye/İstanbul
                    </span>
                  </div>
                </li>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pest-green/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-pest-green" />
                    </div>
                    <div className="mt-1 flex flex-col">
                      <span className="text-xs text-text-muted block mb-0.5 font-bold uppercase tracking-wider">Telefon</span>
                      <a href="tel:+902165057306" className="text-base text-navy font-bold hover:text-pest-green transition-colors">0216 505 73 06</a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pest-green/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={24} className="text-[#25d366]" />
                    </div>
                    <div className="mt-1 flex flex-col">
                      <span className="text-xs text-text-muted block mb-0.5 font-bold uppercase tracking-wider">WhatsApp</span>
                      <a href="https://wa.me/905316901071" target="_blank" rel="noreferrer" className="text-base text-navy font-bold hover:text-[#25d366] transition-colors">0531 690 10 71</a>
                    </div>
                  </li>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pest-green/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-pest-green" />
                    </div>
                    <div className="mt-1 flex flex-col">
                      <span className="text-xs text-text-muted block mb-0.5 font-bold uppercase tracking-wider">E-posta</span>
                      <a href="mailto:info@epcon.com.tr" className="text-base text-navy font-medium hover:text-pest-green transition-colors">info@epcon.com.tr</a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pest-green/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-pest-green" />
                    </div>
                    <div className="mt-1 flex flex-col">
                      <span className="text-xs text-text-muted block mb-0.5 font-bold uppercase tracking-wider">Çalışma Saatleri</span>
                      <span className="text-base text-navy font-medium">Pzt - Cmt: 08:00 - 20:00</span>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          {/* SAĞ KOLON: İletişim Formu */}
          <div className="bg-white border border-border shadow-xl shadow-slate-200/40 rounded-2xl p-8 lg:p-10 h-fit sticky top-28">
            <h3 className="font-barlowCondensed text-2xl font-bold uppercase text-navy mb-2">
              Bize Mesaj Gönderin
            </h3>
            <p className="text-sm text-text-muted mb-8">
              Lütfen formu eksiksiz doldurun, uzman ekibimiz en kısa sürede size geri dönüş yapacaktır.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input 
                    type="text" 
                    placeholder="Adınız Soyadınız" 
                    required
                    className="w-full bg-slate-50 border border-border rounded-lg px-4 py-3 text-sm text-navy focus:bg-white focus:outline-none focus:border-pest-green transition-colors placeholder:text-text-muted"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Telefon Numaranız" 
                    required
                    className="w-full bg-slate-50 border border-border rounded-lg px-4 py-3 text-sm text-navy focus:bg-white focus:outline-none focus:border-pest-green transition-colors placeholder:text-text-muted"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input 
                    type="email" 
                    placeholder="E-posta Adresiniz" 
                    className="w-full bg-slate-50 border border-border rounded-lg px-4 py-3 text-sm text-navy focus:bg-white focus:outline-none focus:border-pest-green transition-colors placeholder:text-text-muted"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Konu" 
                    required
                    className="w-full bg-slate-50 border border-border rounded-lg px-4 py-3 text-sm text-navy focus:bg-white focus:outline-none focus:border-pest-green transition-colors placeholder:text-text-muted"
                  />
                </div>
              </div>
              <div>
                <textarea 
                  rows={4}
                  placeholder="Mesajınız..." 
                  required
                  className="w-full bg-slate-50 border border-border rounded-lg px-4 py-3 text-sm text-navy focus:bg-white focus:outline-none focus:border-pest-green transition-colors placeholder:text-text-muted resize-none"
                ></textarea>
              </div>

              {/* KVKK Kutusu */}
              <div className="flex items-start gap-3 mt-2 bg-slate-50 p-3 rounded-lg border border-border/50">
                <input 
                  type="checkbox" 
                  id="kvkk" 
                  required 
                  className="mt-1 w-4 h-4 text-pest-green bg-white border-gray-300 rounded focus:ring-pest-green focus:ring-2 cursor-pointer flex-shrink-0" 
                />
                <label htmlFor="kvkk" className="text-[13px] text-text-mid leading-snug cursor-pointer">
                  Bilgileriniz güvendedir. Talebinizi göndererek <a href="/kvkk" className="text-navy font-semibold underline hover:text-pest-green transition-colors">KVKK Aydınlatma Metni</a>'ni okuduğumu ve kabul ettiğimi onaylıyorum.
                </label>
              </div>

              <button 
                type="submit" 
                className="bg-navy hover:bg-navy-dark text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 w-full mt-2"
              >
                <Send size={18} />
                Mesajımı Gönder
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}