// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { hizmet, mekan, bocek, ilce, adSoyad, telefon, eposta, not } = data;

    // Ortam değişkenlerini kontrol et
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      return NextResponse.json({ success: false, error: 'Sunucu yapılandırma hatası' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: user,
        pass: pass,
      },
    });

    await transporter.sendMail({
      from: user,
      to: 'info@epcon.com.tr',
      subject: `Yeni Teklif Talebi: ${adSoyad}`,
      html: `
        <h3>Yeni Teklif Talebi</h3>
        <p><b>Hizmet:</b> ${hizmet}</p>
        <p><b>Mekan:</b> ${mekan}</p>
        <p><b>Haşere:</b> ${bocek}</p>
        <p><b>İlçe:</b> ${ilce}</p>
        <hr/>
        <p><b>Ad Soyad:</b> ${adSoyad}</p>
        <p><b>Telefon:</b> ${telefon}</p>
        <p><b>E-posta:</b> ${eposta}</p>
        <p><b>Not:</b> ${not}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail hatası:", error);
    return NextResponse.json({ success: false, error: 'Mail gönderilemedi' }, { status: 500 });
  }
}