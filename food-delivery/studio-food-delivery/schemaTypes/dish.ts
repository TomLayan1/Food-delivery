import { defineType } from 'sanity'

export const dish = defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Dish description',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Category image',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the dish in USD',
      validation: (rule) => rule.required(),
    },
  ],
}) 