const path = require('path');
const webpack = require('webpack');
const contentful = require('contentful');
const withSass = require('@zeit/next-sass');
const { parsed: localEnv } = require('dotenv').config();

const contentfulKeys = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN 
};

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "sussie__[hash:base64:5]",
  },

  publicRuntimeConfig: {
    contentLoad: contentfulKeys,
  },

  exportPathMap: async function () {
    const client = contentful.createClient(contentfulKeys);
    const entries = await client.getEntries({
      content_type: 'blogPost'
    });

    const articles = entries.items.reduce(
      (articles, entry) =>
        Object.assign({}, articles, {
          [`/blog/${entry.fields.slug}`]: {
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
    config.resolve.alias['pages'] = path.join(__dirname, './pages')
    config.resolve.alias['styles'] = path.join(__dirname, './styles')
    config.resolve.alias['components'] = path.join(__dirname, './components')
    return config
  }
});
