import { createClient } from '@sanity/client'

export default createClient({
  projectId: '6rar12a8',
  dataset: 'production',
  useCdn: true,
})
