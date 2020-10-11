import createClient from './createClient';

const client = createClient();

const getLastEntries = async lang => {
  const lastEntries = await client.getEntries({
    content_type: 'blogPost',
    'fields.language': lang,
    select: 'fields.title,fields.description,fields.slug,fields.publishDate,fields.tags',
  });

  return lastEntries.items;
};

export default getLastEntries;
