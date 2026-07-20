"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Bug, Wind, Building2, Home, CheckCircle2, MapPin } from "lucide-react";

function TeklifFormuIcerik() {
  const searchParams = useSearchParams();
  const formType = searchParams.get("type"); // URL'den parametreyi kesin olarak alır

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [kvkkOnay, setKvkkOnay] = useState(false);
  
  const [formData, setFormData] = useState({
    hizmet: "", mekan: "", bocek: "", ilce: "", adSoyad: "", firmaAdi: "", telefon: "", eposta: "", not: "",
    yaklasikAlan: "", eftCihazi: "", urunTuru: "", belirtiler: ""
  });

  // Parametre varsa doğrudan 5. adıma atla ve bilgileri doldur
  useEffect(() => {
    if (formType) {
      setStep(5);
      
      let otoHizmet = "Genel İlaçlama ve Pest Kontrol";
      let otoMekan = "";
      let otoBocek = "";

      if (formType === "ipm") otoHizmet = "Entegre Zararlı Yönetimi - IPM";
      else if (formType === "kemirgen") otoHizmet = "Kemirgen Kontrolü";
      else if (formType === "yuruyen") otoHizmet = "Yürüyen Haşere Kontrolü";
      else if (formType === "ucan") otoHizmet = "Uçan Haşere / EFT Kontrolü";
      else if (formType === "depo") otoHizmet = "Depo Zararlıları Yönetimi";
      else if (formType === "bmsb") otoHizmet = "BMSB İhracat İşlemleri";
      else if (formType === "ispm15") otoHizmet = "ISPM 15 Ahşap Ambalaj";
      else if (formType === "konteyner") otoHizmet = "Konteyner Fumigasyonu";
      else if (formType === "hamambocegi") { otoHizmet = "Böcek İlaçlama"; otoBocek = "Hamamböceği"; }
      else if (formType === "fare") { otoHizmet = "Kemirgen Kontrolü"; otoBocek = "Fare / Sıçan"; }
      else if (formType === "tahtakurusu") { otoHizmet = "Böcek İlaçlama"; otoBocek = "Tahta Kurusu"; }
      else if (formType === "karinca") { otoHizmet = "Böcek İlaçlama"; otoBocek = "Karınca"; }
      else if (formType === "sivrisinek") { otoHizmet = "Böcek İlaçlama"; otoBocek = "Sivrisinek / Karasinek"; }
      else if (formType === "kokarca") { otoHizmet = "Böcek İlaçlama"; otoBocek = "Kahverengi Kokarca"; }
      else if (formType === "pire") { otoHizmet = "Böcek İlaçlama"; otoBocek = "Pire / Kene"; }
      else if (formType === "akrep") { otoHizmet = "Böcek İlaçlama"; otoBocek = "Akrep / Örümcek"; }
      else if (formType === "yilan") { otoHizmet = "Risk Değerlendirmesi"; otoBocek = "Yılan / Sürüngen"; }
      else if (formType === "villa") { otoHizmet = "Villa İlaçlama"; otoMekan = "Villa"; }
      else if (formType === "site") { otoHizmet = "Site ve Apartman İlaçlama"; otoMekan = "Site / Apartman"; }
      else if (formType === "isyeri") { otoHizmet = "İşyeri ve Ofis İlaçlama"; otoMekan = "İşyeri / Ofis"; }
      else if (formType === "bahce") { otoHizmet = "Bahçe ve Dış Alan İlaçlama"; otoMekan = "Bahçe / Dış Alan"; }
      else if (formType === "acil") otoHizmet = "Acil Zararlı Müdahalesi";
      else if (formType === "bitki") { otoHizmet = "Bitki Sağlığı Uygulaması"; otoMekan = "Bahçe / Peyzaj"; }
      else if (formType === "ev") { otoHizmet = "Ev ve Daire İlaçlama"; otoMekan = "Ev / Daire"; }

      setFormData(prev => ({ ...prev, hizmet: otoHizmet, mekan: otoMekan, bocek: otoBocek }));
    }
  }, [formType]);

  const ISTANBUL_ILCELERI = [
    "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", 
    "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", 
    "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", 
    "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", 
    "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", 
    "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", 
    "Ümraniye", "Üsküdar", "Zeytinburnu"
  ];
  
  const mekanlar: any = {
    "İlaçlama": ["Ev / Daire", "Villa", "Site / Apartman", "Bahçe / Dış Alan"],
    "Pest Kontrol": ["Fabrika / Tesis", "Depo / Lojistik", "Ofis / İşyeri", "Otel / Restoran"],
    "Fümigasyon": ["Gemi / Yat", "Konteyner", "Silo / Depo", "Ahşap Palet (ISPM 15)"]
  };
  
  const bocekler = ["Hamamböceği", "Kemirgen (Fare/Sıçan)", "Uçan Haşere (Sinek)", "Tahtakurusu / Pire", "Depo Zararlısı", "Diğer / Bilmiyorum"];

  const getServiceIcon = (hizmet: string) => {
    if(hizmet === "İlaçlama") return <Home className="w-8 h-8 mb-3" />;
    if(hizmet === "Pest Kontrol") return <ShieldCheck className="w-8 h-8 mb-3" />;
    return <Wind className="w-8 h-8 mb-3" />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!kvkkOnay) {
      alert("Lütfen KVKK Aydınlatma Metni'ni onaylayın.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) setStep(6);
      else alert("Gönderim sırasında bir hata oluştu.");
    } catch (error) {
      alert("Sistemsel bir bağlantı hatası oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100 relative z-10 w-full">
      
      {/* Sadece parametresiz girilirse İlerleme Çubuğu */}
      {!formType && step < 6 && (
        <div className="flex items-center mb-10 gap-4">
          <button 
            onClick={() => setStep(step > 1 ? step - 1 : 1)} 
            className={`p-2 rounded-full transition-colors ${step > 1 ? 'hover:bg-slate-100 text-navy' : 'text-slate-300 cursor-not-allowed'}`}
            disabled={step === 1}
          >
            <ArrowLeft />
          </button>
          <div className="flex gap-2 flex-1">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`h-2 flex-1 rounded-full transition-all duration-300 ${i <= step ? "bg-pest-green" : "bg-slate-100"}`} />
            ))}
          </div>
          <span className="text-sm font-bold text-navy/50">{step} / 5</span>
        </div>
      )}

      {/* Adımlar 1-4 (Genel form) */}
      {!formType && step === 1 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="mb-8">
            <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy uppercase mb-2">Hangi hizmeti arıyorsunuz?</h2>
            <p className="text-text-mid">Size en doğru ekibi yönlendirebilmemiz için ana kategoriyi seçin.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["İlaçlama", "Pest Kontrol", "Fümigasyon"].map(h => (
              <button key={h} onClick={() => { setFormData({...formData, hizmet: h}); setStep(2); }}
                className="flex flex-col items-center justify-center p-6 border-2 border-slate-100 rounded-2xl hover:border-pest-green hover:bg-pest-green/5 hover:text-pest-green transition-all font-bold text-navy group"
              >
                <div className="text-navy group-hover:text-pest-green transition-colors">{getServiceIcon(h)}</div>
                {h}
              </button>
            ))}
          </div>
        </div>
      )}

      {!formType && step === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="mb-8">
            <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy uppercase mb-2">Mekân türü nedir?</h2>
            <p className="text-text-mid">Uygulama yapılacak alanın fiziksel yapısını belirtin.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mekanlar[formData.hizmet]?.map((m: string) => (
              <button key={m} onClick={() => { setFormData({...formData, mekan: m}); setStep(3); }}
                className="flex items-center gap-3 p-5 border-2 border-slate-100 rounded-2xl hover:border-pest-green hover:bg-pest-green/5 transition-all font-bold text-navy text-left"
              >
                <Building2 className="w-5 h-5 text-pest-green opacity-70" /> {m}
              </button>
            ))}
          </div>
        </div>
      )}

      {!formType && step === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="mb-8">
            <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy uppercase mb-2">Karşılaştığınız sorun nedir?</h2>
            <p className="text-text-mid">Hedef zararlıyı seçin. Bilmiyorsanız "Diğer" seçeneğiyle devam edebilirsiniz.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bocekler.map(b => (
              <button key={b} onClick={() => { setFormData({...formData, bocek: b}); setStep(4); }}
                className="flex items-center gap-3 p-5 border-2 border-slate-100 rounded-2xl hover:border-pest-green hover:bg-pest-green/5 transition-all font-bold text-navy text-left"
              >
                <Bug className="w-5 h-5 text-pest-green opacity-70" /> {b}
              </button>
            ))}
          </div>
        </div>
      )}

      {!formType && step === 4 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="mb-8">
            <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy uppercase mb-2">Hangi ilçedesiniz?</h2>
            <p className="text-text-mid">Hizmet ağımız şu an için İstanbul ve çevresini kapsamaktadır.</p>
          </div>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-pest-green w-6 h-6" />
            <select 
              className="w-full p-5 pl-14 border-2 border-slate-200 rounded-2xl outline-none focus:border-pest-green text-navy font-bold appearance-none bg-white cursor-pointer" 
              value={formData.ilce} onChange={(e) => setFormData({...formData, ilce: e.target.value})}
            >
              <option value="" disabled>Lütfen Bir İlçe Seçin...</option>
              {ISTANBUL_ILCELERI.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
          <button onClick={() => { if(!formData.ilce) alert("Lütfen ilçe seçin."); else setStep(5); }}
            className="w-full bg-navy text-white py-4 rounded-xl font-bold hover:bg-navy-deeper transition-all mt-4 flex items-center justify-center gap-2 shadow-lg"
          >
            İletişim Adımına Geç <ArrowLeft className="w-5 h-5 rotate-180" />
          </button>
        </div>
      )}

      {/* Adım 5: Otomatik Seçili Dinamik Form */}
      {step === 5 && (
        <form className="space-y-5 animate-fadeIn" onSubmit={handleSubmit}>
          <div className="mb-8">
            <h2 className="font-barlowCondensed text-3xl md:text-4xl font-bold text-navy uppercase mb-2">
              {formData.hizmet || "Teklif Talebi"}
            </h2>
            <p className="text-text-mid">Size en hızlı şekilde dönüş yapabilmemiz için iletişim bilgilerinizi girin.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-5">
            <input className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-pest-green text-navy font-medium placeholder:font-normal bg-slate-50 focus:bg-white transition-colors" placeholder="Adınız Soyadınız" required onChange={e => setFormData({...formData, adSoyad: e.target.value})} />
            <input className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-pest-green text-navy font-medium placeholder:font-normal bg-slate-50 focus:bg-white transition-colors" placeholder="Telefon Numaranız" required onChange={e => setFormData({...formData, telefon: e.target.value})} />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-5">
            <input className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-pest-green text-navy font-medium placeholder:font-normal bg-slate-50 focus:bg-white transition-colors" placeholder="Firma Adı (Opsiyonel)" onChange={e => setFormData({...formData, firmaAdi: e.target.value})} />
            <input className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-pest-green text-navy font-medium placeholder:font-normal bg-slate-50 focus:bg-white transition-colors" type="email" placeholder="E-posta Adresiniz" required onChange={e => setFormData({...formData, eposta: e.target.value})} />
          </div>

          <select className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-pest-green text-navy font-medium bg-slate-50 focus:bg-white transition-colors" required value={formData.ilce} onChange={(e) => setFormData({...formData, ilce: e.target.value})}>
            <option value="">Hizmetin İstendiği İlçe</option>
            {ISTANBUL_ILCELERI.map(i => <option key={i} value={i}>{i}</option>)}
          </select>

          {(formType === "ucan" || formType === "ipm") && (
            <input className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-pest-green text-navy font-medium placeholder:font-normal bg-slate-50 focus:bg-white transition-colors" placeholder="EFT (Sinek Tutucu) Cihazınız var mı? Adet?" onChange={e => setFormData({...formData, eftCihazi: e.target.value})} />
          )}

          {(formType === "depo" || formType === "bmsb" || formType === "ispm15" || formType === "konteyner") && (
            <input className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-pest-green text-navy font-medium placeholder:font-normal bg-slate-50 focus:bg-white transition-colors" placeholder="İşlem Görecek Ürün / Ambalaj Türü" onChange={e => setFormData({...formData, urunTuru: e.target.value})} />
          )}

          <textarea className="w-full p-4 border-2 border-slate-100 rounded-xl h-28 outline-none focus:border-pest-green text-navy font-medium placeholder:font-normal bg-slate-50 focus:bg-white transition-colors resize-none" placeholder="Karşılaştığınız sorunu veya tesisinizle ilgili ek detayları belirtin (Opsiyonel)" onChange={e => setFormData({...formData, not: e.target.value})} />
          
          <label className="flex items-start gap-3 mt-4 cursor-pointer group">
            <div className="relative flex items-start pt-1">
              <input type="checkbox" className="w-5 h-5 accent-pest-green cursor-pointer border-slate-300 rounded" required checked={kvkkOnay} onChange={(e) => setKvkkOnay(e.target.checked)} />
            </div>
            <span className="text-sm text-text-mid leading-snug">
              İletişim formunda verdiğim verilerimin, talebimin işleme alınması amacıyla <Link href="/gizlilik-politikasi" className="text-navy font-bold hover:text-pest-green underline">KVKK ve Gizlilik Politikası</Link> kapsamında işlenmesini onaylıyorum.
            </span>
          </label>

          <button type="submit" disabled={isSubmitting || !kvkkOnay} className="w-full bg-pest-green text-navy py-4 rounded-xl font-extrabold text-lg hover:bg-navy hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-xl mt-4">
            {isSubmitting ? "Gönderiliyor..." : "Teklif Talebimi Gönder"}
          </button>
        </form>
      )}

      {/* Adım 6: Başarı Ekranı */}
      {step === 6 && (
        <div className="text-center space-y-6 py-8 animate-fadeIn">
          <div className="w-20 h-20 bg-pest-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-pest-green" />
          </div>
          <h2 className="font-barlowCondensed text-4xl font-bold text-navy uppercase">Talebiniz Başarıyla Alındı!</h2>
          <p className="text-lg text-text-mid leading-relaxed max-w-md mx-auto">
            Sayın <strong>{formData.adSoyad}</strong>, talebiniz teknik ekibimize ulaştı. Ziraat mühendislerimiz alanı ve sorunu değerlendirip en kısa sürede sizinle iletişime geçecektir.
          </p>
          <div className="pt-6">
            <Link href="/" className="bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-navy-deeper transition-colors inline-block">Ana Sayfaya Dön</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function UcretsizTeklifAlPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6 font-barlow relative overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern-dots.svg')] bg-repeat z-0"></div>
      <Suspense fallback={<div className="max-w-2xl w-full mx-auto bg-white p-10 rounded-3xl shadow-xl text-center font-bold text-navy relative z-10">Form Yükleniyor...</div>}>
        <TeklifFormuIcerik />
      </Suspense>
    </main>
  );
}