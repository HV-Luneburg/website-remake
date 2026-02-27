import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/sanity/schemas'
import {structure} from './src/sanity/structure'

export default defineConfig({
  name: 'hv-lueneburg',
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
