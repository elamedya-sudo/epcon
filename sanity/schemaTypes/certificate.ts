import { defineField, defineType } from 'sanity'
import { Award } from 'lucide-react'

export const certificate = defineType({
  name: 'certificate',
  title: 'Belgelerimiz',
  type: 'document',
  // @ts-ignore
  icon: Award,
  fields: [
    defineField({
      name: 'title',
      title: 'Belge Adı',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      description: 'Belgenin hangi başlık altında görüneceğini seçin',
      options: {
        list: [
          { title: 'YETKİ VE RUHSATLAR', value: 'YETKİ VE RUHSATLAR' },
          { title: 'KALİTE BELGELERİ', value: 'KALİTE BELGELERİ' },
          { title: 'MESLEKİ ÜYELİK VE GÜVENCE', value: 'MESLEKİ ÜYELİK VE GÜVENCE' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'documentNo',
      title: 'Belge Numarası',
      type: 'string',
    }),
    defineField({
      name: 'scope',
      title: 'Kapsam',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Geçerlilik Tarihi',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Belge Resmi',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})