import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'atto',

  projectId: 's7kfxic3',
  dataset: 'production',
  ignoreBrowserTokenWarning: true,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
