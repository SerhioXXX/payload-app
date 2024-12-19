import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: {
      en: 'Category',
      ru: 'Категория',
    },
    plural: {
      en: 'Categories',
      ru: 'Категории',
    },
  },
  admin: {
    useAsTitle: 'title', // берем какое -либо поле из fields -> name
  },
  fields: [
    {
      label: {
        en: 'Category name',
        ru: 'Название категории',
      },
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      label: {
        en: 'Category description',
        ru: 'Описание категории',
      },
      name: 'description',
      type: 'textarea',
    },
  ],
}
