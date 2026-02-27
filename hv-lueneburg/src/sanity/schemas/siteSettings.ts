import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Allgemeine Einstellungen',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Vereinsname',
      type: 'string',
      validation: (rule) => rule.required(),
      initialValue: 'HV Lüneburg'
    }),
    defineField({
      name: 'shortName',
      title: 'Kurzname',
      type: 'string',
      initialValue: 'HVL'
    }),
    defineField({
      name: 'founded',
      title: 'Gründungsjahr',
      type: 'number',
      initialValue: 1946
    }),
    defineField({
      name: 'email',
      title: 'Allgemeine E-Mail',
      type: 'string',
    }),
    defineField({
      name: 'sponsoringEmail',
      title: 'Sponsoring E-Mail',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Adresse der Geschäftsstelle',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'handballNetSettings',
      title: 'handball.net Widget Konfiguration',
      type: 'object',
      fields: [
        {
          name: 'clubId',
          title: 'Vereins-ID (ClubId)',
          description: 'Z.B. nuliga.hvn.681. Standard für Gesamtarbeiten.',
          type: 'string',
          initialValue: 'nuliga.hvn.681'
        },
        {
          name: 'organizationId',
          title: 'Organisations-ID (OrganizationId)',
          type: 'string',
        },
        {
          name: 'tournamentId',
          title: 'Turnier/Ligen-ID (TournamentId)',
          description: 'Die ID für die anzuzeigende Tabelle der 1. Herren.',
          type: 'string',
          initialValue: 'nuliga.hvn.1662205'
        },
        {
          name: 'teamId',
          title: 'Team-ID (TeamId)',
          type: 'string',
        },
      ]
    }),
    defineField({
      name: 'liveTicker',
      title: 'Live Ticker',
      type: 'object',
      fields: [
        { name: 'enabled', title: 'Aktivieren', type: 'boolean', initialValue: false },
        { 
          name: 'items', 
          title: 'Ticker Meldungen', 
          type: 'array', 
          of: [
            {
              type: 'object',
              fields: [
                { name: 'text', title: 'Text', type: 'string' },
                { name: 'href', title: 'Link (optional)', type: 'string' }
              ]
            }
          ]
        }
      ]
    })
  ],
})
