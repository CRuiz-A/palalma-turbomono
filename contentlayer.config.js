// contentlayer.config.js
import path from 'path'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: path.posix.join('pages', '**', '*.mdx'),
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
  },
  computedFields,
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: path.posix.join('posts', '**', '*.mdx'),
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
    date: { type: 'date', required: true },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: path.join(process.cwd(), 'apps/web/content'),
  documentTypes: [Post, Page],
  onWarning: (warning) => console.warn(warning),
  onError: (error) => {
    console.error('Contentlayer Error:', error)
    throw error
  },
})