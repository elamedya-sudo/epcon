import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { hizmet, mekan, bocek, ilce, adSoyad, firmaAdi, telefon, eposta, not, yaklasikAlan, eftCihazi, urunTuru } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const buildRow = (label: string, value: string | undefined) => {
      return value ? `<p style="margin:5px 0; color:#333;"><b>${label}:</b> ${value}</p>` : "";
    };

    // 1. YÖNETİCİ MAİLİ
    await transporter.sendMail({
      from: `"EPCON Sistem" <${process.env.EMAIL_USER}>`,
      to: 'epconcomtr@gmail.com', 
      subject: `Yeni Talep: ${hizmet} - ${adSoyad}`,
      html: `
        <div style="font-family: Arial, sans-serif; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; max-width: 600px;">
          <div style="background-color: #0F203C; padding: 20px; text-align: center;">
             <h2 style="color: #8DC63F; margin: 0;">YENİ WEB TALEBİ</h2>
          </div>
          <div style="padding: 20px;">
            <h3 style="color: #0F203C; border-bottom: 1px solid #eee; padding-bottom: 5px;">Müşteri Bilgileri</h3>
            ${buildRow("Ad Soyad", adSoyad)}
            ${buildRow("Firma Adı", firmaAdi)}
            ${buildRow("Telefon", telefon)}
            ${buildRow("E-posta", eposta)}
            ${buildRow("İlçe / Bölge", ilce)}
            
            <h3 style="color: #0F203C; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top:20px;">Hizmet Detayları</h3>
            ${buildRow("Talep Edilen Hizmet", hizmet)}
            ${buildRow("Mekan Türü", mekan)}
            ${buildRow("Hedef Zararlı", bocek)}
            ${buildRow("Ürün / Yük Türü", urunTuru)}
            ${buildRow("EFT / Ekipman", eftCihazi)}
            ${buildRow("Yaklaşık Alan", yaklasikAlan)}
            
            <div style="margin-top:20px; padding:15px; background:#f8f9fa; border-left:4px solid #8DC63F;">
              <b>Müşteri Notu:</b><br/>${not}
            </div>
          </div>
        </div>
      `,
    });

    // 2. MÜŞTERİYE OTOMATİK BİLGİLENDİRME
    if (eposta && eposta.includes("@")) {
      await transporter.sendMail({
        from: `"EPCON Çevre Sağlığı" <${process.env.EMAIL_USER}>`,
        to: eposta,
        subject: "Talebiniz Alındı - EPCON",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <p>Sayın <b>${adSoyad}</b>,</p>
            <p>Web sitemiz üzerinden iletmiş olduğunuz <strong>${hizmet}</strong> talebiniz teknik ekibimize ulaşmıştır. Ziraat mühendislerimiz alanınızı ve riskleri değerlendirerek en kısa sürede sizinle iletişime geçecektir.</p>
            <p>Bizi tercih ettiğiniz için teşekkür ederiz.</p>
            <p style="font-size: 12px; color: #666; margin-top:30px;">
              <b>EPCON Çevre Sağlığı Sistemleri</b><br/>
              0216 505 73 06 | www.epcon.com.tr
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}