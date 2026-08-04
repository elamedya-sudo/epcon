import { defineField, defineType } from 'sanity'

export const aboutUs = defineType({
  name: 'aboutUs',
  title: 'Hakkımızda Sayfası',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Üst Alan' },
    { name: 'whoWeAre', title: 'Biz Kimiz' },
    { name: 'missionVision', title: 'Misyon & Vizyon' },
    { name: 'quality', title: 'Kalite Politikası' },
    { name: 'founder', title: 'Kurucumuzdan' },
  ],
  fields: [
    // ÜST ALAN
    defineField({ name: 'heroSubtitle', title: 'Üst Başlık (Örn: EPCON ÇEVRE SAĞLIĞI...)', type: 'string', group: 'hero' }),
    defineField({ name: 'heroTitle', title: 'Ana Başlık (Örn: HAKKIMIZDA VE EKİBİMİZ)', type: 'string', group: 'hero' }),
    defineField({ name: 'heroDescription', title: 'Alt Açıklama Metni', type: 'text', group: 'hero' }),

    // BİZ KİMİZ
    defineField({ name: 'whoWeAreTitle', title: 'Biz Kimiz Başlığı', type: 'string', group: 'whoWeAre' }),
    defineField({ name: 'whoWeAreText', title: 'Biz Kimiz Metni (Paragraflar)', type: 'blockContent', group: 'whoWeAre' }),

    // MİSYON & VİZYON
    defineField({ name: 'missionHighlight', title: 'Misyon (Renkli Kutu İçi Metin)', type: 'text', group: 'missionVision' }),
    defineField({ name: 'missionText', title: 'Misyon (Alt Detay Metni)', type: 'text', group: 'missionVision' }),
    defineField({ name: 'visionHighlight', title: 'Vizyon (Renkli Kutu İçi Metin)', type: 'text', group: 'missionVision' }),
    defineField({ name: 'visionText', title: 'Vizyon (Alt Detay Metni)', type: 'text', group: 'missionVision' }),

    // KALİTE POLİTİKASI
    defineField({ name: 'qualityIntro', title: 'Kalite Politikası Giriş Açıklaması', type: 'text', group: 'quality' }),
    defineField({ 
      name: 'qualityItems', 
      title: 'Kalite Politikası Maddeleri', 
      type: 'array', 
      of: [{ type: 'string' }], 
      group: 'quality',
      description: 'Maddeleri tek tek ekleyebilirsiniz.'
    }),

    // KURUCUMUZDAN
    defineField({ name: 'founderQuote', title: 'Kurucu Sözü', type: 'text', group: 'founder' }),
    defineField({ name: 'founderName', title: 'Kurucu Adı Soyadı', type: 'string', group: 'founder' }),
    defineField({ name: 'founderTitle', title: 'Kurucu Ünvanı', type: 'string', group: 'founder' }),
  ],
  preview: {
    prepare() {
      return { title: 'Hakkımızda Sayfası Metinleri' }
    }
  }
})