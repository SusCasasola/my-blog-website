const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
const contentful = require('contentful');

module.exports = {
  exportPathMap: async function () {
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
    const entries = await client.getEntries({
      content_type: 'blogPost'
    });

    const articles = entries.items.reduce(
      (articles, entry) =>
        Object.assign({}, articles, {
          [`/article/${entry.fields.slug}`]: {
            page: '/article',
            query: {
              slug: entry.fields.slug
            },
          }
        }), {}
    );

    return Object.assign({}, articles, {
      '/': { page: '/home' },
      '/blog': { page: '/blog' },
      '/about': { page: '/about' }
    });
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    return config
  }
}
