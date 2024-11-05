import { defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Category description',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Category image',
      validation: (rule) => rule.required(),
    },
  ],
})