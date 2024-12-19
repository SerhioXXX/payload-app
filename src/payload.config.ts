// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { GlobalConfig } from 'payload'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/products'
import { Categories } from './collections/categories'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    // disable: true, // не сработало
    user: Users.slug,
    dateFormat: 'dd.MM.yyyy HH:mm', // устанавливает формат дат в админке (таблии),
    meta: {
      title: 'My Payload admin panel 1',
      description: 'Glory to Ukraine',
      // favicon : ""
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/api/media/file/favicon-32x32',
        },
      ],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Products, Categories],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
