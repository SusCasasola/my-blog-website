import createClient from './createClient';

const client = createClient();

const getAllEntries = async lang => {
  const allEntries = await client.getEntries({
    content_type: 'blogPost',
    'fields.language': lang,
    select: 'fields.title,fields.description,fields.slug,fields.publishDate',
  });

  return allEntries.items;
};

export default getAllEntries;
