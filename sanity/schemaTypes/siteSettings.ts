import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Genel Ayarlar',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Telefon Numarası',
      type: 'string',
      description: 'Sitede görünecek ana telefon numarası (Örn: 0216 505 73 06)',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Numarası',
      type: 'string',
      description: 'WhatsApp yönlendirmesi için numara (Örn: 0533 234 43 88)',
    }),
    defineField({
      name: 'address',
      title: 'Açık Adres',
      type: 'text',
      description: 'İletişim ve footer kısmında görünecek adres',
    }),
    defineField({
      name: 'floatingButtonActive',
      title: 'Yüzen Buton (WhatsApp/Tel) Görünsün mü?',
      type: 'boolean',
      initialValue: true, 
    }),
    defineField({
      name: 'email',
      title: 'E-posta Adresi',
      type: 'string',
    }),
    defineField({
      name: 'workingHours',
      title: 'Çalışma Saatleri',
      type: 'string',
      description: 'Örn: Pzt - Cmt: 08:00 - 20:00',
    }),
    defineField({
      name: 'companyName',
      title: 'Tam Firma Ünvanı',
      type: 'string',
      description: 'İletişim sayfasında görünecek resmi şirket ünvanı',
    }),
    defineField({
      name: 'contactDescription',
      title: 'İletişim Sayfası Açıklaması',
      type: 'text',
      description: 'İletişim bilgilerinin üstünde yer alan karşılama metni',
    }),
  ],
})