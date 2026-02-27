import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'HVL Lüneburg',

  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [], // Schemas will map here
  },
})
