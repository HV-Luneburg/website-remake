import {defineField, defineType} from 'sanity'

const kategorieLabels: Record<string, string> = {
  hauptsponsor: 'Hauptsponsor',
  partner: 'Partner',
  foerderer: 'Förderer',
}

export const sponsor = defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Firmenname',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'PNG mit transparentem Hintergrund empfohlen',
      options: {hotspot: false},
    }),
    defineField({
      name: 'mark',
      title: 'Kurzzeichen (falls kein Logo vorhanden)',
      type: 'string',
      description: 'Z.B. "S" für Sparkasse, wird im Ticker gezeigt wenn kein Logo existiert.',
      validation: rule => rule.max(3)
    }),
    defineField({
      name: 'text',
      title: 'Beschreibung / Text',
      type: 'text',
      description: 'Besonders wichtig für Hauptsponsoren',
      rows: 4
    }),
    defineField({
      name: 'website',
      title: 'Website-URL',
      type: 'url',
    }),
    defineField({
      name: 'jobLink',
      title: 'Karriere / Job-URL',
      type: 'url',
      description: 'Z.B. für die Jobbörse der Hauptsponsoren'
    }),
    defineField({
      name: 'kategorie',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          {title: 'Hauptsponsor', value: 'hauptsponsor'},
          {title: 'Partner', value: 'partner'},
          {title: 'Förderer', value: 'foerderer'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'aktiv',
      title: 'Aktiv',
      type: 'boolean',
      description: 'Nur aktive Sponsoren werden auf der Website angezeigt',
      initialValue: true,
    }),
    defineField({
      name: 'reihenfolge',
      title: 'Reihenfolge',
      type: 'number',
      description: 'Kleinere Zahl = weiter vorne in der Anzeige',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'kategorie',
      media: 'logo',
    },
    prepare({title, subtitle, media}: {title: string; subtitle: string; media: any}) {
      return {
        title,
        subtitle: subtitle ? kategorieLabels[subtitle] || subtitle : undefined,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Reihenfolge (aufsteigend)',
      name: 'reihenfolgeAsc',
      by: [{field: 'reihenfolge', direction: 'asc'}],
    },
    {
      title: 'Kategorie',
      name: 'kategorieAsc',
      by: [{field: 'kategorie', direction: 'asc'}],
    },
  ],
})
