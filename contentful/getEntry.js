import createClient from './createClient';

const client = createClient();

const getEntry = async slug => {
  const entry = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
  });

  return entry.items[0];
};

export default getEntry;
