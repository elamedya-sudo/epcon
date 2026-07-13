"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function UcretsizTeklifAlPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    hizmet: "", mekan: "", bocek: "", ilce: "", adSoyad: "", telefon: "", eposta: "", not: ""
  });

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
    "İlaçlama": ["Daire", "Villa", "Site", "Bahçe"],
    "Pest Kontrol": ["Fabrika", "Depo", "Ofis", "Restoran"],
    "Fümigasyon": ["Gemi", "Konteyner", "Silo", "Ahşap Palet"]
  };
  
  const bocekler = ["Hamamböceği", "Akrep", "Karınca", "Fare", "Pire", "Diğer"];

  // MAİL GÖNDERME İŞLEMİNİ YAPAN ASIL FONKSİYON
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        alert("Teklif talebiniz başarıyla alındı! Uzmanlarımız en kısa sürede dönüş yapacaktır.");
        window.location.href = "/"; // İşlem bitince anasayfaya at
      } else {
        alert("Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      alert("Sistemsel bir bağlantı hatası oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6 font-barlow">
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border">
        
        {/* İlerleme ve Geri Butonu */}
        <div className="flex items-center mb-10 gap-4">
          {step > 1 && (
            <button onClick={() => setStep(step - 1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <ArrowLeft />
            </button>
          )}
          <div className="flex gap-2 flex-1">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`h-2 flex-1 rounded-full ${i <= step ? "bg-navy" : "bg-border"}`} />
            ))}
          </div>
        </div>

        {/* Adım 1: Hizmet */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy">Hangi hizmeti arıyorsunuz?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["İlaçlama", "Pest Kontrol", "Fümigasyon"].map(h => (
                <button key={h} onClick={() => { setFormData({...formData, hizmet: h}); setStep(2); }}
                  className="p-6 border-2 border-border rounded-2xl hover:border-navy hover:bg-slate-50 transition-all font-bold text-navy">{h}</button>
              ))}
            </div>
          </div>
        )}

        {/* Adım 2: Mekan */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy">Mekan türü nedir?</h2>
            <div className="grid grid-cols-2 gap-4">
              {mekanlar[formData.hizmet]?.map((m: string) => (
                <button key={m} onClick={() => { setFormData({...formData, mekan: m}); setStep(3); }}
                  className="p-4 border-2 border-border rounded-xl hover:bg-navy hover:text-white transition-all font-medium text-navy">{m}</button>
              ))}
            </div>
          </div>
        )}

        {/* Adım 3: Böcek */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy">Hangi haşere?</h2>
            <div className="grid grid-cols-2 gap-4">
              {bocekler.map(b => (
                <button key={b} onClick={() => { setFormData({...formData, bocek: b}); setStep(4); }}
                  className="p-4 border-2 border-border rounded-xl hover:bg-navy hover:text-white transition-all font-medium text-navy">{b}</button>
              ))}
            </div>
          </div>
        )}

        {/* Adım 4: İlçe */}
        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy">Hangi ilçedesiniz?</h2>
            <select className="w-full p-4 border-2 border-border rounded-xl outline-none focus:border-navy text-navy font-medium" onChange={(e) => { setFormData({...formData, ilce: e.target.value}); setStep(5); }}>
              <option value="">İlçe Seçin</option>
              {ISTANBUL_ILCELERI.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
        )}

        {/* Adım 5: İletişim (Artık handleSubmit fonksiyonuna bağlı) */}
        {step === 5 && (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-navy mb-6">İletişim Bilgileri</h2>
            <input className="w-full p-4 border-2 border-border rounded-xl outline-none focus:border-navy" placeholder="Ad Soyad" required onChange={e => setFormData({...formData, adSoyad: e.target.value})} />
            <input className="w-full p-4 border-2 border-border rounded-xl outline-none focus:border-navy" placeholder="Telefon" required onChange={e => setFormData({...formData, telefon: e.target.value})} />
            <input className="w-full p-4 border-2 border-border rounded-xl outline-none focus:border-navy" type="email" placeholder="E-posta" required onChange={e => setFormData({...formData, eposta: e.target.value})} />
            <textarea className="w-full p-4 border-2 border-border rounded-xl h-24 outline-none focus:border-navy" placeholder="Eklemek istediğiniz not (Opsiyonel)" onChange={e => setFormData({...formData, not: e.target.value})} />
            
            <button type="submit" disabled={isSubmitting} className="w-full bg-pest-green text-white py-4 rounded-xl font-bold hover:bg-pest-green-dark transition-all disabled:opacity-50">
              {isSubmitting ? "Gönderiliyor..." : "Teklifi Tamamla"}
            </button>
          </form>
        )}

      </div>
    </main>
  );
}