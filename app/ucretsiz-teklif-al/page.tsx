"use client";

import React, { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const ISTANBUL_ILCELERI = [
  "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"
];

const FORM_CONFIG: any = {
  // 1. GENEL FORM (Parametre olmadan gelenler için)
  genel: {
    title: "Genel Teklif ve İletişim Talebi",
    btn: "TALEBİMİ GÖNDER",
    fields: [
      { id: "adSoyad", label: "Ad Soyad / Firma Adı", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "eposta", label: "E-posta", type: "email", required: false },
      { id: "ilce", label: "İlçe / Konum", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "hizmet", label: "İlgilendiğiniz Hizmet", type: "select", required: true, options: ["Pest Kontrol / İlaçlama", "Fümigasyon Hizmetleri", "BMSB / İhracat İşlemleri", "Bitki Sağlığı Uygulamaları", "Acil Müdahale", "Diğer / Bilmiyorum"] },
      { id: "not", label: "Mesajınız / Açıklama", type: "textarea", required: false }
    ]
  },
  
  // 2. DİĞER TÜM FORMLAR
  ipm: { 
    title: "IPM Teknik Değerlendirme Talebi", 
    btn: "IPM TEKNİK DEĞERLENDİRME TALEBİMİ GÖNDER", 
    fields: [
      { id: "firma", label: "Firma Adı", type: "text", required: true },
      { id: "yetkili", label: "Yetkili Adı Soyadı", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "eposta", label: "E-posta", type: "email", required: true },
      { id: "sektor", label: "Sektör / Tesis Türü", type: "select", required: true, options: ["Gıda üretim", "Fabrika/üretim", "Depo/lojistik", "Havalimanı/terminal", "Otel", "Sağlık", "Eğitim", "Restoran/yemekhane", "AVM/ticari işletme", "Site/rezidans", "Kamu", "Diğer"] },
      { id: "uygulamaYeri", label: "Uygulama Yeri (İl, ilçe veya tesis adı)", type: "text", required: true },
      { id: "alan", label: "Yaklaşık Alan / Tesis Bilgisi", type: "text", required: true },
      { id: "hizmetIhtiyaci", label: "Hizmet İhtiyacı", type: "select", options: ["Teknik ekip değerlendirsin", "Yeni IPM programı", "Periyodik pest kontrol", "Mevcut sistem değerlendirmesi", "Denetim/dokümantasyon", "Dijital raporlama/trend", "EFT kontrolü", "Mevcut probleme müdahale"] },
      { id: "zararli", label: "Karşılaşılan Zararlı / Risk", type: "select", required: true, options: ["Kemirgen", "Yürüyen haşere", "Uçan haşere", "Depo zararlısı", "Pire/kene", "Tahta kurusu", "Birden fazla", "Önleyici hizmet", "Bilmiyorum", "Diğer"] }
    ]
  },
  kemirgen: { 
    title: "Kemirgen Kontrolü Teklif Talebi", 
    btn: "KEMİRGEN KONTROLÜ TALEBİMİ GÖNDER", 
    fields: [
      { id: "firma", label: "Firma Adı veya Ad Soyad", type: "text", required: true },
      { id: "yetkili", label: "Yetkili Adı Soyadı", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "eposta", label: "E-posta", type: "email", required: true },
      { id: "tesis", label: "Tesis / Mekân Türü", type: "select", required: true, options: ["Ev", "Site", "İşyeri", "Fabrika", "Depo", "Gıda tesisi", "Diğer"] },
      { id: "uygulamaYeri", label: "Uygulama Yeri (İl, ilçe veya tesis adı)", type: "text", required: true },
      { id: "yaklasikAlan", label: "Yaklaşık Alan", type: "text", required: true },
      { id: "belirtiler", label: "Görülen Belirtiler", type: "select", options: ["Canlı kemirgen", "Dışkı", "Kemirilmiş ambalaj/kablo", "Gece sesi", "İstasyon aktivitesi", "Bilmiyorum", "Diğer"] },
      { id: "icDis", label: "İç Alan / Dış Alan", type: "select", required: true, options: ["İç alan", "Dış alan", "Her ikisi"] }
    ]
  },
  yuruyen: { 
    title: "Yürüyen Haşere Kontrolü Teklif Talebi", 
    btn: "YÜRÜYEN HAŞERE KONTROLÜ TALEBİMİ GÖNDER", 
    fields: [
      { id: "firmaAdSoyad", label: "Firma Adı veya Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "eposta", label: "E-posta", type: "email", required: true },
      { id: "tesis", label: "Tesis / Mekân Türü", type: "select", required: true, options: ["Ev", "Villa", "Site", "İşyeri", "Restoran", "Fabrika", "Depo", "Diğer"] },
      { id: "uygulamaYeri", label: "Uygulama Yeri (İl, ilçe veya tesis adı)", type: "text", required: true },
      { id: "yaklasikAlan", label: "Yaklaşık Alan", type: "text", required: true },
      { id: "zararli", label: "Karşılaşılan Zararlı", type: "select", required: true, options: ["Hamamböceği", "Karınca", "Gümüşçün", "Örümcek", "Akrep", "Diğer", "Bilmiyorum"] },
      { id: "bolum", label: "Sorunun Görüldüğü Bölüm", type: "select", required: true, options: ["Mutfak", "Gider/rögar", "Depo", "Teknik alan", "Bahçe", "Diğer"] }
    ]
  },
  ucan: { 
    title: "Uçan Haşere ve EFT Kontrol Talebi", 
    btn: "UÇAN HAŞERE / EFT TALEBİMİ GÖNDER", 
    fields: [
      { id: "firmaAdSoyad", label: "Firma Adı veya Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "eposta", label: "E-posta", type: "email", required: true },
      { id: "tesis", label: "Tesis / Mekân Türü", type: "select", required: true, options: ["Gıda tesisi", "Restoran", "Otel", "Depo", "Fabrika", "Site", "Diğer"] },
      { id: "uygulamaYeri", label: "Uygulama Yeri (İl, ilçe veya tesis adı)", type: "text", required: true },
      { id: "yaklasikAlan", label: "Yaklaşık Alan", type: "text", required: true },
      { id: "zararli", label: "Karşılaşılan Uçan Zararlı", type: "select", required: true, options: ["Karasinek", "Sivrisinek", "Küçük sinek", "Güve", "Diğer", "Bilmiyorum"] },
      { id: "eftVarmi", label: "EFT Cihazı Bulunuyor mu?", type: "select", required: true, options: ["Evet", "Hayır", "Bilmiyorum"] },
      { id: "eftAdet", label: "EFT Cihaz Adedi", type: "number", required: true },
      { id: "hizmet", label: "Talep Edilen Hizmet", type: "select", options: ["Uçan haşere kontrolü", "EFT kontrolü", "EFT kurulumu/yerleşim planı", "Yapışkan levha", "UV lamba", "Trend analizi", "Teknik ekip değerlendirsin"] }
    ]
  },
  depo: { 
    title: "Depo Zararlıları Yönetimi Teklif Talebi", 
    btn: "DEPO ZARARLILARI TALEBİMİ GÖNDER", 
    fields: [
      { id: "firmaAdSoyad", label: "Firma Adı / Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "eposta", label: "E-posta", type: "email", required: false },
      { id: "ilce", label: "İlçe / Konum", type: "text", required: true },
      { id: "tesisTuru", label: "Tesis Türü", type: "select", required: true, options: ["Depo / Antrepo", "Tahıl Silosu", "Fabrika / Üretim Alanı", "Diğer"] },
      { id: "urunTipi", label: "Depolanan Ürün Cinsi", type: "text", required: true },
      { id: "hedefZararli", label: "Karşılaşılan Zararlı Türü", type: "text", required: false },
      { id: "hacim", label: "Tahmini Alan / Hacim", type: "text", required: true },
      { id: "not", label: "Ek Açıklama", type: "textarea", required: false }
    ]
  },
  hamambocegi: { 
    title: "Hamamböceği Mücadelesi Teklif Talebi", 
    btn: "HAMAMBÖCEĞİ TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "select", options: ["Ev/Daire", "Villa", "Site/Apartman", "İşyeri/Ofis", "Restoran/Kafe", "Fabrika/Üretim", "Depo", "Bahçe/Dış Alan", "Diğer"], required: true },
      { id: "zararli", label: "Zararlı Türü", type: "text", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  fare_sican: { 
    title: "Fare ve Sıçan Mücadelesi Teklif Talebi", 
    btn: "FARE / SIÇAN TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "select", options: ["Ev/Daire", "Villa", "Site/Apartman", "İşyeri/Ofis", "Restoran/Kafe", "Fabrika/Üretim", "Depo", "Bahçe/Dış Alan", "Diğer"], required: true },
      { id: "zararli", label: "Zararlı Türü", type: "text", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  tahta_kurusu: { 
    title: "Tahta Kurusu Mücadelesi Teklif Talebi", 
    btn: "TAHTA KURUSU TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "select", options: ["Ev/Daire", "Villa", "Site/Apartman", "İşyeri/Ofis", "Restoran/Kafe", "Fabrika/Üretim", "Depo", "Bahçe/Dış Alan", "Diğer"], required: true },
      { id: "zararli", label: "Zararlı Türü", type: "text", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  karinca: { 
    title: "Karınca Mücadelesi Teklif Talebi", 
    btn: "KARINCA TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "select", options: ["Ev/Daire", "Villa", "Site/Apartman", "İşyeri/Ofis", "Restoran/Kafe", "Fabrika/Üretim", "Depo", "Bahçe/Dış Alan", "Diğer"], required: true },
      { id: "zararli", label: "Zararlı Türü", type: "text", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  sivrisinek_karasinek: { 
    title: "Sivrisinek ve Karasinek Mücadelesi Teklif Talebi", 
    btn: "SİVRİSİNEK / KARASİNEK TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "select", options: ["Ev/Daire", "Villa", "Site/Apartman", "İşyeri/Ofis", "Restoran/Kafe", "Fabrika/Üretim", "Depo", "Bahçe/Dış Alan", "Diğer"], required: true },
      { id: "zararli", label: "Zararlı Türü", type: "text", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  kokarca: { 
    title: "Kahverengi Kokarca Mücadelesi Teklif Talebi", 
    btn: "KAHVERENGİ KOKARCA TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "select", options: ["Ev/Daire", "Villa", "Site/Apartman", "İşyeri/Ofis", "Restoran/Kafe", "Fabrika/Üretim", "Depo", "Bahçe/Dış Alan", "Diğer"], required: true },
      { id: "zararli", label: "Zararlı Türü", type: "text", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  pire_kene: { 
    title: "Pire ve Kene Mücadelesi Teklif Talebi", 
    btn: "PİRE / KENE TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "select", options: ["Ev/Daire", "Villa", "Site/Apartman", "İşyeri/Ofis", "Restoran/Kafe", "Fabrika/Üretim", "Depo", "Bahçe/Dış Alan", "Diğer"], required: true },
      { id: "zararli", label: "Zararlı Türü", type: "text", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  guve_depo: { 
    title: "Güve ve Depo Zararlıları Teklif Talebi", 
    btn: "DEPO ZARARLISI TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "select", options: ["Ev/Daire", "Villa", "Site/Apartman", "İşyeri/Ofis", "Restoran/Kafe", "Fabrika/Üretim", "Depo", "Bahçe/Dış Alan", "Diğer"], required: true },
      { id: "zararli", label: "Zararlı Türü", type: "text", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  akrep_orumcek: { 
    title: "Akrep ve Örümcek Mücadelesi Teklif Talebi", 
    btn: "AKREP / ÖRÜMCEK TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "select", options: ["Ev/Daire", "Villa", "Site/Apartman", "İşyeri/Ofis", "Restoran/Kafe", "Fabrika/Üretim", "Depo", "Bahçe/Dış Alan", "Diğer"], required: true },
      { id: "zararli", label: "Zararlı Türü", type: "text", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  yilan_surungen: { 
    title: "Yılan ve Sürüngen Risk Değerlendirme Talebi", 
    btn: "RİSK DEĞERLENDİRME TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "select", options: ["Ev/Daire", "Villa", "Site/Apartman", "İşyeri/Ofis", "Restoran/Kafe", "Fabrika/Üretim", "Depo", "Bahçe/Dış Alan", "Diğer"], required: true },
      { id: "zararli", label: "Zararlı Türü", type: "text", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  ev_daire: { 
    title: "Ev ve Daire İlaçlama Teklif Talebi", 
    btn: "EV / DAİRE TEKLİF TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "text", required: true },
      { id: "hizmet", label: "Hizmet Türü", type: "text", required: true },
      { id: "zararli", label: "Karşılaşılan Sorun", type: "select", required: true, options: ["Hamamböceği", "Karınca", "Pire", "Fare", "Diğer", "Bilmiyorum"] },
      { id: "alan", label: "Yaklaşık Alan", type: "text", required: false },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  villa: { 
    title: "Villa İlaçlama Teklif Talebi", 
    btn: "VİLLA İLAÇLAMA TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "text", required: true },
      { id: "hizmet", label: "Hizmet Türü", type: "text", required: true },
      { id: "zararli", label: "Karşılaşılan Sorun", type: "select", required: true, options: ["Hamamböceği", "Karınca", "Pire", "Fare", "Diğer", "Bilmiyorum"] },
      { id: "alan", label: "Yaklaşık Alan", type: "text", required: false },
      { id: "icDis", label: "İç / Dış Alan", type: "select", required: true, options: ["İç alan", "Dış alan", "Her ikisi"] },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  site_apartman: { 
    title: "Site ve Apartman İlaçlama Teklif Talebi", 
    btn: "SİTE / APARTMAN TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad / Yönetim Yetkilisi", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "eposta", label: "E-posta", type: "email", required: false },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "text", required: true },
      { id: "hizmet", label: "Hizmet Türü", type: "text", required: true },
      { id: "blok", label: "Blok / Ortak Alan Bilgisi", type: "text", required: false },
      { id: "zararli", label: "Karşılaşılan Sorun", type: "select", required: true, options: ["Hamamböceği", "Karınca", "Pire", "Fare", "Diğer", "Bilmiyorum"] },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  isyeri_ofis: { 
    title: "İşyeri ve Ofis İlaçlama Teklif Talebi", 
    btn: "İŞYERİ / OFİS TALEBİMİ GÖNDER", 
    fields: [
      { id: "firmaAdSoyad", label: "Firma / Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "eposta", label: "E-posta", type: "email", required: false },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "text", required: true },
      { id: "hizmet", label: "Hizmet Türü", type: "text", required: true },
      { id: "zararli", label: "Karşılaşılan Sorun", type: "select", required: true, options: ["Hamamböceği", "Karınca", "Pire", "Fare", "Diğer", "Bilmiyorum"] },
      { id: "alan", label: "Yaklaşık Alan", type: "text", required: false },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  bahce_dis_alan: { 
    title: "Bahçe ve Dış Alan İlaçlama Teklif Talebi", 
    btn: "BAHÇE / DIŞ ALAN TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad / Firma", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "text", required: true },
      { id: "hizmet", label: "Hizmet Türü", type: "text", required: true },
      { id: "zararli", label: "Karşılaşılan Sorun", type: "select", required: true, options: ["Sivrisinek", "Karasinek", "Pire/Kene", "Diğer", "Bilmiyorum"] },
      { id: "alan", label: "Yaklaşık Alan", type: "text", required: false },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  bitki_sagligi: { 
    title: "Bitki Sağlığı Uygulaması Teklif Talebi", 
    btn: "BİTKİ SAĞLIĞI TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad / Firma", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "hizmet", label: "Hizmet Türü", type: "text", required: true },
      { id: "bitkiTuru", label: "Bitki / Ağaç Türü", type: "text", required: false },
      { id: "alanTuru", label: "Alan Türü", type: "select", required: true, options: ["Bahçe", "Peyzaj", "Tarla", "Site", "Diğer"] },
      { id: "zararliBelirti", label: "Gözlenen Zararlı / Belirti", type: "text", required: true },
      { id: "alan", label: "Yaklaşık Alan / Bitki Adedi", type: "text", required: false },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  acil_mudahale: { 
    title: "Acil Zararlı Müdahale Talebi", 
    btn: "ACİL MÜDAHALE TALEBİMİ GÖNDER", 
    fields: [
      { id: "adSoyad", label: "Ad Soyad / Firma", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "text", required: true },
      { id: "hizmet", label: "Hizmet Türü", type: "text", required: true },
      { id: "zararli", label: "Karşılaşılan Zararlı", type: "select", required: true, options: ["Yılan", "Akrep", "Örümcek", "Diğer", "Bilmiyorum"] },
      { id: "sorunAlani", label: "Sorunun Görüldüğü Alan", type: "text", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: true }
    ]
  },
  bmsb: {
    title: "BMSB İhracat Fümigasyonu Talebi",
    btn: "BMSB TALEBİMİ GÖNDER",
    fields: [
      { id: "firmaAdSoyad", label: "Firma / Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe / Konum", type: "text", required: true },
      { id: "hedefUlke", label: "Hedef Ülke", type: "select", required: true, options: ["Avustralya", "Yeni Zelanda", "Diğer"] },
      { id: "urunTipi", label: "Yük / Ürün Tipi", type: "text", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  konteyner: {
    title: "Konteyner Fümigasyonu Teklif Talebi",
    btn: "KONTEYNER TALEBİMİ GÖNDER",
    fields: [
      { id: "firmaAdSoyad", label: "Firma / Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe / Uygulama Yeri", type: "text", required: true },
      { id: "konteynerTuru", label: "Konteyner Türü", type: "select", required: true, options: ["20'lik Konteyner", "40'lık Konteyner", "Diğer"] },
      { id: "adet", label: "Konteyner Adedi", type: "number", required: true },
      { id: "urunTipi", label: "İçindeki Yük / Ürün", type: "text", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  ispm15: {
    title: "ISPM 15 Ahşap Ambalaj İşareti Talebi",
    btn: "ISPM 15 TALEBİMİ GÖNDER",
    fields: [
      { id: "firmaAdSoyad", label: "Firma / Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe / Uygulama Yeri", type: "text", required: true },
      { id: "ambalajTuru", label: "Ahşap Ambalaj Türü", type: "select", required: true, options: ["Ahşap Palet", "Ahşap Sandık", "Ahşap Kasa", "Kablo Makarası", "Diğer"] },
      { id: "adet", label: "Tahmini Adet", type: "number", required: true },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  ilaclama_genel: {
    title: "İlaçlama ve Pest Kontrol Talebi",
    btn: "TEKLİF TALEBİMİ GÖNDER",
    fields: [
      { id: "adSoyad", label: "Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "ilce", label: "İlçe", type: "select", options: ISTANBUL_ILCELERI, required: true },
      { id: "mekan", label: "Mekân Türü", type: "select", options: ["Ev/Daire", "Villa", "Site/Apartman", "İşyeri/Ofis", "Fabrika/Depo", "Bahçe/Dış Alan", "Diğer"], required: true },
      { id: "zararli", label: "Karşılaşılan Zararlı", type: "select", required: true, options: ["Hamamböceği", "Karınca", "Pire/Kene", "Fare/Sıçan", "Uçan Haşere", "Tahta Kurusu", "Diğer", "Bilmiyorum"] },
      { id: "not", label: "Kısa Açıklama", type: "textarea", required: false }
    ]
  },
  gemi_yat: {
    title: "Gemi ve Yat Fumigasyonu Talebi",
    btn: "FÜMİGASYON TALEBİMİ GÖNDER",
    fields: [
      { id: "firmaAdSoyad", label: "Acente / Şirket / Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "eposta", label: "E-posta", type: "email", required: true },
      { id: "gemiAdi", label: "Gemi / Yat Adı", type: "text", required: true },
      { id: "liman", label: "Bulunduğu Liman / Tersane", type: "text", required: true },
      { id: "islemBolumu", label: "İşlem Yapılacak Bölüm", type: "select", required: true, options: ["Yük Ambarı", "Yaşam Mahalli", "Mutfak / Kiler", "Makine / Teknik Alan", "Tüm Gemi", "Diğer"] },
      { id: "hacim", label: "Tahmini Hacim / Tonaj", type: "text", required: false },
      { id: "not", label: "Operasyon Notu / Mesajınız", type: "textarea", required: false }
    ]
  },
  urun_yuk: {
    title: "Ürün ve Yük Fumigasyonu Talebi",
    btn: "ÜRÜN / YÜK TALEBİMİ GÖNDER",
    fields: [
      { id: "firmaAdSoyad", label: "Firma / İhracatçı Adı", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "eposta", label: "E-posta", type: "email", required: false },
      { id: "ilce", label: "İlçe / Yükün Bulunduğu Yer", type: "text", required: true },
      { id: "urunCinsi", label: "Yük / Ürün Cinsi", type: "text", required: true },
      { id: "ambalaj", label: "Ambalaj Şekli", type: "select", required: true, options: ["Dökme", "Bigbag / Çuval", "Koli / Palet", "Ahşap Sandık", "Diğer"] },
      { id: "miktar", label: "Miktar / Tonaj", type: "text", required: true },
      { id: "hedefUlke", label: "İhracat Edilecek Ülke (Varsa)", type: "text", required: false },
      { id: "not", label: "Ek Açıklama", type: "textarea", required: false }
    ]
  },
  gaz_olcumu: {
    title: "Gaz Ölçümü ve Arındırma Talebi",
    btn: "ÖLÇÜM TALEBİMİ GÖNDER",
    fields: [
      { id: "firmaAdSoyad", label: "Firma / Gümrükçü / Ad Soyad", type: "text", required: true },
      { id: "telefon", label: "Telefon", type: "tel", required: true },
      { id: "eposta", label: "E-posta", type: "email", required: false },
      { id: "ilce", label: "Bulunduğu Liman / Gümrük / Adres", type: "text", required: true },
      { id: "alanTuru", label: "İşlem Yapılacak Alan", type: "select", required: true, options: ["İthalat Konteyneri", "Gemi Ambarı", "Fümigeli Depo / Silo", "Diğer Ticari Yük"] },
      { id: "fumigant", label: "Kullanılan Fümigant (Biliniyorsa)", type: "select", required: false, options: ["Alüminyum Fosfit", "Metil Bromür", "Sülfüril Florür", "Bilmiyorum"] },
      { id: "adet", label: "Konteyner / Ambar Adedi", type: "number", required: true },
      { id: "not", label: "Operasyon Notu", type: "textarea", required: false }
    ]
  }
};

function FormContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const type = (typeParam && FORM_CONFIG[typeParam]) ? typeParam : "genel";
  const config = FORM_CONFIG[type];
  
  const [formData, setFormData] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // OTOMATİK DOLDURMA
  useEffect(() => {
    const defaultValues: any = {
      hamambocegi: { zararli: "Hamamböceği" },
      fare_sican: { zararli: "Fare / Sıçan" },
      tahta_kurusu: { zararli: "Tahta Kurusu" },
      karinca: { zararli: "Karınca" },
      sivrisinek_karasinek: { zararli: "Sivrisinek / Karasinek" },
      kokarca: { zararli: "Kahverengi Kokarca" },
      pire_kene: { zararli: "Pire / Kene" },
      guve_depo: { zararli: "Güve / Depo Zararlısı" },
      akrep_orumcek: { zararli: "Akrep / Örümcek" },
      yilan_surungen: { zararli: "Yılan / Sürüngen" },
      ev_daire: { mekan: "Ev / Daire", hizmet: "Ev ve Daire İlaçlama" },
      villa: { mekan: "Villa", hizmet: "Villa İlaçlama" },
      site_apartman: { mekan: "Site / Apartman", hizmet: "Site ve Apartman İlaçlama" },
      isyeri_ofis: { mekan: "İşyeri / Ofis", hizmet: "İşyeri ve Ofis İlaçlama" },
      bahce_dis_alan: { mekan: "Bahçe / Dış Alan", hizmet: "Bahçe ve Dış Alan İlaçlama" },
      bitki_sagligi: { hizmet: "Bitki Sağlığı Uygulaması" },
      acil_mudahale: { mekan: "Acil Müdahale", hizmet: "Acil Zararlı Müdahale" },
    };
    
    if (type && defaultValues[type]) {
      setFormData(defaultValues[type]);
    } else {
      setFormData({});
    }
  }, [type]);

  if (!config) return <div className="p-10 text-center text-navy font-bold">Form tanımlanmamış.</div>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submittedFields = config.fields.map((f: any) => ({
      label: f.label,
      value: formData[f.id] || "Belirtilmedi"
    }));

    const customerName = formData.adSoyad || formData.firmaAdSoyad || formData.yetkili || formData.firma || "Değerli Müşterimiz";
    const customerEmail = formData.eposta || "";

    const payload = {
      formTitle: config.title,
      customerName,
      customerEmail,
      fields: submittedFields
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        alert("Gönderim sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
      }
    } catch (error) {
      alert("Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) return (
    <div className="max-w-xl mx-auto text-center py-20 px-6 bg-white rounded-3xl border border-slate-100 shadow-xl">
      <CheckCircle2 className="mx-auto w-16 h-16 text-pest-green mb-4"/>
      <h2 className="text-2xl font-bold text-navy">Talebiniz iletilmiştir.</h2>
      <p className="mt-2 text-text-mid">Uzman ekibimiz detayları inceleyip en kısa sürede sizinle iletişime geçecektir.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 md:p-12 bg-white rounded-3xl border border-slate-100 shadow-xl space-y-6">
      <div className="border-b border-slate-100 pb-6 mb-8">
        <h2 className="text-2xl font-extrabold text-navy uppercase tracking-tight">{config.title}</h2>
      </div>
      
      {config.fields.map((f: any) => (
        <div key={f.id} className="space-y-1">
          <label className="block text-sm font-semibold text-navy/80 ml-1">{f.label} {f.required && <span className="text-pest-green">*</span>}</label>
          {f.type === "select" ? (
            <select 
              required={f.required} 
              value={formData[f.id] || ""}
              onChange={e => setFormData({...formData, [f.id]: e.target.value})}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-pest-green focus:ring-2 focus:ring-pest-green/20 outline-none transition-all"
            >
              <option value="">Seçiniz...</option>
              {f.options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          ) : f.type === "textarea" ? (
             <textarea 
              value={formData[f.id] || ""}
              onChange={e => setFormData({...formData, [f.id]: e.target.value})}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-pest-green focus:ring-2 focus:ring-pest-green/20 outline-none transition-all h-32 resize-none" 
              placeholder={f.label}
             />
          ) : (
            <input 
              type={f.type} 
              required={f.required} 
              value={formData[f.id] || ""}
              onChange={e => setFormData({...formData, [f.id]: e.target.value})}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-pest-green focus:ring-2 focus:ring-pest-green/20 outline-none transition-all placeholder:text-slate-400" 
              placeholder={f.label} 
            />
          )}
        </div>
      ))}

      <div className="flex items-center gap-3 pt-4">
        <input type="checkbox" id="kvkk" required className="w-5 h-5 accent-pest-green cursor-pointer flex-shrink-0" />
        <label htmlFor="kvkk" className="text-sm text-text-mid">
          Bilgilerim güvendedir. <Link href="/kvkk" target="_blank" rel="noopener noreferrer" className="text-navy font-bold underline hover:text-pest-green transition-colors">KVKK Aydınlatma Metni'ni</Link> okudum ve onaylıyorum.
        </label>
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full bg-pest-green text-white py-5 rounded-2xl font-bold text-lg hover:bg-navy transition-all shadow-lg hover:shadow-xl disabled:opacity-70">
        {isSubmitting ? "Gönderiliyor..." : config.btn}
      </button>
    </form>
  );
}

// HATA ÇÖZÜMÜ BURADA: Suspense bileşenine fallback eklendi.
export default function UcretsizTeklifAlPage() { 
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <Suspense fallback={<div className="text-center font-bold text-navy py-20">Form Yükleniyor...</div>}>
        <FormContent />
      </Suspense>
    </main>
  ); 
}