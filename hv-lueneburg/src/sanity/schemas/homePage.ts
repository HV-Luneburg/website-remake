import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Startseite',
  type: 'document',
  groups: [
    { name: 'media', title: 'Bilder & Medien' },
    { name: 'content', title: 'Texte & Sektionen' },
  ],
  fields: [
    defineField({
      name: 'heroSlides',
      title: 'Hero Slideshow',
      description: 'Bilder für den Hintergrund im oberen Bereich der Startseite.',
      type: 'array',
      group: 'media',
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
      name: 'heroText',
      title: 'Hero Texte',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'tagline', title: 'Tagline (z.B. Seit 1946)', type: 'string' },
        { name: 'title', title: 'Titel (HTML erlaubt, z.B. für <br> oder <em>)', type: 'text', rows: 2 },
        { name: 'subtitle', title: 'Untertitel', type: 'text', rows: 3 },
      ]
    }),

    defineField({
      name: 'spielplanSection',
      title: 'Sektion: Spielplan',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Untertitel', type: 'text', rows: 2 },
      ]
    }),

    defineField({
      name: 'statsText',
      title: 'Sektion: Statistiken (Texte)',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Untertitel', type: 'text', rows: 2 },
      ]
    }),

    defineField({
      name: 'clubStats',
      title: 'Statistiken (Die 4 Kacheln)',
      description: 'Die 4 Statistik-Kacheln auf der Startseite.',
      type: 'array',
      group: 'content',
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
    }),

    defineField({
      name: 'teamsSection',
      title: 'Sektion: Mannschaften',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Untertitel', type: 'text', rows: 2 },
      ]
    }),

    defineField({
      name: 'tabellenSection',
      title: 'Sektion: Tabellen',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'tagline', title: 'Tagline', type: 'string' },
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Untertitel', type: 'text', rows: 2 },
      ]
    }),

    defineField({
      name: 'aboutSection',
      title: 'Sektion: Über uns (Vorschau)',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow (z.B. Seit 1946 in Lüneburg)', type: 'string' },
        { name: 'title', title: 'Titel (HTML erlaubt)', type: 'text', rows: 2 },
        { name: 'text', title: 'Fließtext', type: 'text', rows: 4 },
        { 
          name: 'bullets', 
          title: 'Aufzählungspunkte', 
          type: 'array', 
          validation: rule => rule.max(3),
          of: [
            {
              type: 'object',
              fields: [
                { name: 'text', title: 'Text', type: 'string' },
                { name: 'icon', title: 'Icon (Tabler)', type: 'string' }
              ]
            }
          ]
        },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
        { name: 'image', title: 'Sektions-Bild', type: 'image', options: { hotspot: true } }
      ]
    }),

    defineField({
      name: 'ctaSection',
      title: 'Sektion: Call to Action (Unten)',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'subtitle', title: 'Untertitel', type: 'text', rows: 2 },
      ]
    }),

    defineField({
      name: 'gallery',
      title: 'Galerie (Startseite)',
      description: 'Genau 4 Bilder für die Galerie-Sektion auf der Startseite.',
      type: 'array',
      group: 'media',
      validation: rule => rule.length(4),
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
    })
  ],
  preview: {
    prepare() {
      return { title: 'Startseite Konfiguration' }
    }
  }
})
