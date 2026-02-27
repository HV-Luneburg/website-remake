import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import type {StructureBuilder} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

const structure = (S: StructureBuilder) =>
  S.list()
    .title('HV Lüneburg')
    .items([
      S.listItem()
        .title('Aktuelles & Berichte')
        .child(
          S.documentTypeList('beitrag')
            .title('Beiträge')
            .defaultOrdering([{field: 'veroeffentlichtAm', direction: 'desc'}]),
        ),
      S.divider(),
      S.listItem()
        .title('Mannschaften')
        .child(
          S.documentTypeList('mannschaft')
            .title('Mannschaften')
            .defaultOrdering([{field: 'reihenfolge', direction: 'asc'}]),
        ),
      S.divider(),
      S.listItem()
        .title('Sponsoren')
        .child(
          S.list()
            .title('Sponsoren')
            .items([
              S.listItem()
                .title('Hauptsponsoren')
                .child(
                  S.documentTypeList('sponsor')
                    .title('Hauptsponsoren')
                    .filter('_type == "sponsor" && kategorie == "hauptsponsor"')
                    .defaultOrdering([{field: 'reihenfolge', direction: 'asc'}]),
                ),
              S.listItem()
                .title('Partner')
                .child(
                  S.documentTypeList('sponsor')
                    .title('Partner')
                    .filter('_type == "sponsor" && kategorie == "partner"')
                    .defaultOrdering([{field: 'reihenfolge', direction: 'asc'}]),
                ),
              S.listItem()
                .title('Förderer')
                .child(
                  S.documentTypeList('sponsor')
                    .title('Förderer')
                    .filter('_type == "sponsor" && kategorie == "foerderer"')
                    .defaultOrdering([{field: 'reihenfolge', direction: 'asc'}]),
                ),
            ]),
        ),
    ])

export default defineConfig({
  name: 'default',
  title: 'HV Lüneburg',

  projectId: 'z61c87ba',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
