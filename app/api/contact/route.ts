import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Gelen dinamik veriler
    const { formTitle, customerName, customerEmail, fields } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    // Dinamik alanları HTML satırlarına çeviren fonksiyon
    const buildRow = (label: string, value: string) => {
      if (!value || value === "Belirtilmedi") return ""; // Boş olanları maile eklemiyoruz
      return `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666; width: 35%; font-size: 14px;"><b>${label}</b></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; color: #0F203C; font-size: 14px;">${value}</td>
        </tr>
      `;
    };

    const fieldsHtml = fields.map((f: any) => buildRow(f.label, f.value)).join('');

    // 1. YÖNETİCİ MAİLİ
    await transporter.sendMail({
      from: `"EPCON Sistem" <${process.env.EMAIL_USER}>`,
      to: 'epconcomtr@gmail.com', 
      subject: `Yeni Web Talebi: ${formTitle} - ${customerName}`,
      html: `
        <div style="font-family: Arial, sans-serif; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; max-width: 650px; margin: auto;">
          <div style="background-color: #0F203C; padding: 25px; text-align: center;">
             <h2 style="color: #8DC63F; margin: 0; text-transform: uppercase;">YENİ BİR TALEP ALDINIZ</h2>
             <p style="color: #ffffff; margin: 8px 0 0 0; font-size: 15px;">Form: <b>${formTitle}</b></p>
          </div>
          <div style="padding: 30px; background-color: #f8fafc;">
            <table style="width: 100%; border-collapse: collapse; background-color: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <tbody>
                ${fieldsHtml}
              </tbody>
            </table>
          </div>
        </div>
      `,
    });

    // 2. MÜŞTERİYE OTOMATİK BİLGİLENDİRME (Eğer E-posta girildiyse çalışır)
    if (customerEmail && customerEmail.includes("@")) {
      await transporter.sendMail({
        from: `"EPCON Çevre Sağlığı" <${process.env.EMAIL_USER}>`,
        to: customerEmail,
        subject: "Talebiniz Alındı - EPCON",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
            <p>Sayın <b>${customerName}</b>,</p>
            <p>Web sitemiz üzerinden doldurmuş olduğunuz <strong>${formTitle}</strong> tarafımıza başarıyla ulaşmıştır.</p>
            <p>Uzman mühendis ekibimiz, iletmiş olduğunuz bilgileri (tesis/mekan, alan, zararlı vb.) inceleyerek en kısa sürede sizinle iletişime geçecek ve çözüm sürecini planlayacaktır.</p>
            <p>Bizi tercih ettiğiniz için teşekkür ederiz.</p>
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
              <b style="color: #0F203C; font-size: 15px;">EPCON Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti.</b><br/>
              <span style="font-size: 13px; color: #666;">
                0216 505 73 06 | <a href="https://www.epcon.com.tr" style="color: #8DC63F; text-decoration: none;">www.epcon.com.tr</a>
              </span>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}