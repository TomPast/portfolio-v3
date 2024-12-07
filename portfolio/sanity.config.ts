import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {muxInput} from 'sanity-plugin-mux-input'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: '6rar12a8',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), muxInput()],

  schema: {
    types: schemaTypes,
  },
})
