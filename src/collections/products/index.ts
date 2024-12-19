import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: {
      en: 'Product',
      ru: 'Товар',
    },
    plural: {
      en: 'Products',
      ru: 'Товари',
    },
  },
  admin: {
    useAsTitle: 'title', // берем какое -либо поле из fields -> name
  },
  fields: [
    {
      label: {
        en: 'Product name',
        ru: 'Имя товара',
      },
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      label: {
        en: 'Product description',
        ru: 'Описание товара',
      },
      name: 'description',
      type: 'textarea',
    },
    {
      label: {
        en: 'Categories',
        ru: 'Категории товара',
      },
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories', // указиваем slug коллекции на которую ссилаемся
      hasMany: true, // многие ко многим
      required: false,
    },
    {
      label: {
        en: 'Category Single',
        ru: 'Категория (один к одному)',
      },
      name: 'category',
      type: 'relationship',
      relationTo: 'categories', // указиваем slug коллекции на которую ссилаемся
      hasMany: false, // один к одному
      required: true,
    },
  ],
}
