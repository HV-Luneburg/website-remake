import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Startseite',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSlides',
      title: 'Hero Slideshow',
      description: 'Bilder für den Hintergrund im oberen Bereich der Startseite.',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Alternativer Text',
              type: 'string',
              description: 'Wichtig für Barrierefreiheit und SEO.',
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'clubStats',
      title: 'Statistiken (In Zahlen)',
      description: 'Die 4 Statistik-Kacheln auf der Startseite.',
      type: 'array',
      validation: rule => rule.max(4),
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titel', type: 'string' },
            { name: 'amount', title: 'Wert/Zahl', type: 'string' },
            { 
              name: 'icon', 
              title: 'Icon (Tabler)', 
              type: 'string', 
              description: 'Z.B. tabler:users, tabler:ball-tennis' 
            }
          ]
        }
      ]
    })
  ]
})
