import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { siteSettings } from './siteSettings'
import {certificate} from './certificate'
import {aboutUs} from './aboutUs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, siteSettings, certificate, aboutUs],
}
