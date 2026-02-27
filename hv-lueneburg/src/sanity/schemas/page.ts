import {defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Seite',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL-Adresse',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Bild (Kopfbereich)',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Untertitel (Kopfbereich)',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'content',
      title: 'Inhalt',
      type: 'array',
      of: [{type: 'block'}]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'heroImage',
    },
  },
})
