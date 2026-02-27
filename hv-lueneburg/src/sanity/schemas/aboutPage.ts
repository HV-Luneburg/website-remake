import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Über uns (Seite)',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Sektion',
      type: 'object',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'title', title: 'Titel (HTML erlaubt)', type: 'text', rows: 2 },
        { name: 'subtitle', title: 'Untertitel', type: 'text', rows: 3 },
        { name: 'image', title: 'Hintergrundbild', type: 'image', options: {hotspot: true} }
      ]
    }),
    defineField({
      name: 'statsText',
      title: 'Statistiken Sektion',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { 
          name: 'stats', 
          title: 'Werte', 
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Titel (z.B. Mitglieder)', type: 'string' },
                { name: 'amount', title: 'Wert (z.B. 250+)', type: 'string' }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'valuesSection',
      title: 'Werte Sektion',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Untertitel', type: 'text', rows: 2 },
        {
          name: 'items',
          title: 'Werte',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Wertel-Titel', type: 'string' },
                { name: 'description', title: 'Beschreibung', type: 'text', rows: 3 }
              ]
            }
          ]
        }
      ]
    })
  ],
  preview: {
    prepare() {
      return { title: 'Über uns Konfiguration' }
    }
  }
})
