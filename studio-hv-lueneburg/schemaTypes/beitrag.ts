import {defineField, defineType} from 'sanity'

export const beitrag = defineType({
  name: 'beitrag',
  title: 'Beitrag',
  type: 'document',
  fields: [
    defineField({
      name: 'titel',
      title: 'Titel',
      type: 'string',
      description: 'Die Überschrift des Beitrags',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL-Adresse',
      type: 'slug',
      description: 'Die Web-Adresse — wird automatisch erstellt',
      options: {
        source: 'titel',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'veroeffentlichtAm',
      title: 'Veröffentlichungsdatum',
      type: 'datetime',
      description: 'Wann soll der Beitrag erscheinen?',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'kategorie',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          {title: 'Spielbericht', value: 'spielbericht'},
          {title: 'Vereinsnews', value: 'vereinsnews'},
          {title: 'Jugend', value: 'jugend'},
          {title: 'Turnier', value: 'turnier'},
          {title: 'Sponsoring', value: 'sponsoring'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'titelbild',
      title: 'Titelbild',
      type: 'image',
      description: 'Das Hauptbild',
      options: {hotspot: true},
    }),
    defineField({
      name: 'zusammenfassung',
      title: 'Zusammenfassung',
      type: 'text',
      description: 'Kurze Vorschau für Google und die Übersicht',
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'inhalt',
      title: 'Inhalt',
      type: 'array',
      description: 'Der vollständige Text',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Überschrift 2', value: 'h2'},
            {title: 'Überschrift 3', value: 'h3'},
            {title: 'Überschrift 4', value: 'h4'},
          ],
          marks: {
            decorators: [
              {title: 'Fett', value: 'strong'},
              {title: 'Kursiv', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternativtext',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Bildunterschrift',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'mannschaft',
      title: 'Mannschaft',
      type: 'reference',
      description: 'Welche Mannschaft?',
      to: [{type: 'mannschaft'}],
    }),
    defineField({
      name: 'autor',
      title: 'Autor',
      type: 'string',
      description: 'Wer hat diesen Beitrag geschrieben?',
    }),
    defineField({
      name: 'tags',
      title: 'Schlagwörter',
      type: 'array',
      description: "Schlagwörter, z.B. 'Heimspiel'",
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'titel',
      date: 'veroeffentlichtAm',
      media: 'titelbild',
    },
    prepare({title, date, media}: {title: string; date: string; media: unknown}) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString('de-DE', {day: '2-digit', month: '2-digit', year: 'numeric'})
        : 'Kein Datum'
      return {
        title,
        subtitle: formattedDate,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Neueste zuerst',
      name: 'veroeffentlichtAmDesc',
      by: [{field: 'veroeffentlichtAm', direction: 'desc'}],
    },
  ],
})
