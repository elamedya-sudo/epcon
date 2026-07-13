import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { hizmet, mekan, bocek, ilce, adSoyad, telefon, eposta, not } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // epconcomtr@gmail.com
        pass: process.env.EMAIL_PASS, // 16 haneli uygulama şifresi
      },
    });

    // 1. MAİL: SİZE (YÖNETİCİYE) GİDEN BİLDİRİM
    await transporter.sendMail({
      from: `"EPCON Web" <${process.env.EMAIL_USER}>`,
      to: 'epconcomtr@gmail.com', // İstediğiniz adres
      subject: `Yeni Teklif Talebi: ${adSoyad}`,
      html: `
        <h3>Yeni Teklif Talebi Geldi</h3>
        <p><b>Müşteri:</b> ${adSoyad}</p>
        <p><b>Telefon:</b> ${telefon}</p>
        <p><b>E-posta:</b> ${eposta}</p>
        <hr/>
        <p><b>Hizmet:</b> ${hizmet}</p>
        <p><b>Mekan:</b> ${mekan}</p>
        <p><b>Haşere:</b> ${bocek}</p>
        <p><b>İlçe:</b> ${ilce}</p>
        <p><b>Not:</b> ${not}</p>
      `,
    });

    // 2. MAİL: MÜŞTERİYE GİDEN OTOMATİK BİLGİLENDİRME (Auto-Reply)
    await transporter.sendMail({
      from: `"EPCON Çevre Sağlığı" <${process.env.EMAIL_USER}>`,
      to: eposta, // Müşterinin girdiği mail adresi
      subject: "Teklif Talebiniz Alındı - EPCON",
      html: `
        <h3>Sayın ${adSoyad},</h3>
        <p>EPCON Çevre Sağlığı Sistemleri olarak teklif talebinizi aldık. Ziraat mühendislerimiz en kısa sürede talebinizi inceleyip sizinle iletişime geçecektir.</p>
        <p><b>Talebiniz:</b> ${hizmet}</p>
        <br/>
        <p>İlginiz için teşekkür ederiz.<br/>
        <b>EPCON Ekibi</b><br/>
        <a href="https://www.epcon.com.tr">www.epcon.com.tr</a></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return NextResponse.json({ success: false, error: 'Mail gönderilemedi' }, { status: 500 });
  }
}