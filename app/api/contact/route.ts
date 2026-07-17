import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { hizmet, mekan, bocek, ilce, adSoyad, telefon, eposta, not } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // ── DİNAMİK ALAN KONTROLLERİ ──
    const epostaSatiri = eposta && eposta !== "Belirtilmedi" ? `<p style="margin:5px 0; color:#333;"><b>E-posta:</b> ${eposta}</p>` : "";
    const bocekSatiri = bocek && bocek !== "Belirtilmedi" && bocek !== "Diğer / Bilmiyorum" ? `<p style="margin:5px 0; color:#333;"><b>Hedef / Haşere:</b> ${bocek}</p>` : "";
    const notSatiri = not && not !== "Belirtilmedi" ? `<p style="margin:5px 0; color:#333; background:#f8f9fa; padding:10px; border-left:4px solid #8DC63F;"><b>Not:</b> ${not}</p>` : "";

    // 1. MAİL: SİZE (YÖNETİCİYE) GİDEN BİLDİRİM
    await transporter.sendMail({
      from: `"EPCON Sistem" <${process.env.EMAIL_USER}>`,
      to: 'epconcomtr@gmail.com', 
      subject: `Yeni Teklif: ${hizmet} - ${adSoyad}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-w-2xl; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0F203C; padding: 20px; text-align: center;">
             <h2 style="color: #8DC63F; margin: 0; text-transform: uppercase;">Yeni Teklif Talebi</h2>
          </div>
          <div style="padding: 20px;">
            <h3 style="color: #0F203C; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">İletişim Bilgileri</h3>
            <p style="margin:5px 0; color:#333;"><b>Müşteri:</b> ${adSoyad}</p>
            <p style="margin:5px 0; color:#333;"><b>Telefon:</b> ${telefon}</p>
            ${epostaSatiri}
            
            <h3 style="color: #0F203C; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-top:20px;">Talep Detayları</h3>
            <p style="margin:5px 0; color:#333;"><b>Hizmet Türü:</b> ${hizmet}</p>
            <p style="margin:5px 0; color:#333;"><b>Mekan:</b> ${mekan}</p>
            <p style="margin:5px 0; color:#333;"><b>İlçe:</b> ${ilce}</p>
            ${bocekSatiri}
            <br/>
            ${notSatiri}
          </div>
        </div>
      `,
    });

    // 2. MAİL: MÜŞTERİYE GİDEN OTOMATİK BİLGİLENDİRME
    if (eposta && eposta !== "Belirtilmedi" && eposta.includes("@")) {
      await transporter.sendMail({
        from: `"EPCON Çevre Sağlığı" <${process.env.EMAIL_USER}>`,
        to: eposta,
        subject: "Teklif Talebiniz Alındı - EPCON",
        html: `
          <div style="font-family: Arial, sans-serif; max-w-2xl; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0F203C; padding: 20px;">
               <h2 style="color: #8DC63F; margin: 0;">EPCON Çevre Sağlığı Sistemleri</h2>
            </div>
            <div style="padding: 20px; color: #333;">
              <p>Sayın <b>${adSoyad}</b>,</p>
              <p>Web sitemiz üzerinden iletmiş olduğunuz <strong>${hizmet} (${mekan})</strong> talebiniz sistemimize başarıyla ulaşmıştır.</p>
              <p>Teknik ekibimiz ve ziraat mühendislerimiz iletmiş olduğunuz bilgileri değerlendirerek en kısa sürede sizinle iletişime geçecek ve uygun planlamayı/fiyatlandırmayı sağlayacaktır.</p>
              <br/>
              <p>Bizi tercih ettiğiniz için teşekkür ederiz.</p>
              <hr style="border:0; border-top:1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 12px; color: #666;">
                <strong>EPCON Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti.</strong><br/>
                Telefon: 0216 505 73 06<br/>
                Web: <a href="https://www.epcon.com.tr" style="color: #0F203C;">www.epcon.com.tr</a>
              </p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return NextResponse.json({ success: false, error: 'Mail gönderilemedi' }, { status: 500 });
  }
}