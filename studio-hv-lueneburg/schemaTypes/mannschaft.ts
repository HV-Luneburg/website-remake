import {defineField, defineType} from 'sanity'

export const mannschaft = defineType({
  name: 'mannschaft',
  title: 'Mannschaft',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: "z.B. 'Herren 1' oder 'Weibliche Jugend D'",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL-Adresse',
      type: 'slug',
      description: 'Die Web-Adresse — wird automatisch erstellt',
      options: {source: 'name', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'liga',
      title: 'Liga / Spielklasse',
      type: 'string',
      description: 'z.B. "Verbandsliga Männer"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'kategorie',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          {title: 'Herren', value: 'herren'},
          {title: 'Damen', value: 'damen'},
          {title: 'Jugend', value: 'jugend'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'beschreibung',
      title: 'Beschreibung',
      type: 'text',
      description: 'Kurze Vorstellung der Mannschaft',
      rows: 4,
    }),
    defineField({
      name: 'foto',
      title: 'Mannschaftsfoto',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'trainer',
      title: 'Trainer',
      type: 'string',
    }),
    defineField({
      name: 'trainingszeiten',
      title: 'Trainingszeiten',
      type: 'array',
      description: "z.B. 'Di. 19:30–21:30 Uhr'",
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'halle',
      title: 'Trainingshalle',
      type: 'string',
    }),
    defineField({
      name: 'kontakt',
      title: 'Kontakt-E-Mail',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram-Link',
      type: 'url',
    }),
    defineField({
      name: 'handballNetId',
      title: 'handball.net ID',
      type: 'string',
      description: 'Technische ID — bitte nicht ändern!',
    }),
    defineField({
      name: 'reihenfolge',
      title: 'Reihenfolge',
      type: 'number',
      description: 'Kleinere Zahl = weiter oben auf der Seite',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'liga',
      media: 'foto',
    },
  },
  orderings: [
    {
      title: 'Reihenfolge (aufsteigend)',
      name: 'reihenfolgeAsc',
      by: [{field: 'reihenfolge', direction: 'asc'}],
    },
    {
      title: 'Name (A–Z)',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
  ],
})
