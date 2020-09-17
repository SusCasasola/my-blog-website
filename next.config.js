const path = require('path');
const webpack = require('webpack');
const contentful = require('contentful');
const withSass = require('@zeit/next-sass');
const { parsed: localEnv } = require('dotenv').config();

const contentfulKeys = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

const mapArticleRoutes = (entries, lang) =>
  entries.reduce(
    (articles, entry) => ({
      ...articles,
      [`/${lang}/blog/${entry.fields.slug}`]: {
        page: '/article',
        query: {
          lang,
          slug: entry.fields.slug,
        },
      },
    }),
    {}
  );

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: 'sussie__[hash:base64:5]',
  },

  publicRuntimeConfig: {
    contentLoad: contentfulKeys,
  },

  async exportPathMap() {
    const client = contentful.createClient(contentfulKeys);

    const entriesEnglish = await client.getEntries({
      content_type: 'blogPost',
      'fields.language': 'en',
    });

    const entriesSpanish = await client.getEntries({
      content_type: 'blogPost',
      'fields.language': 'es',
    });

    const articlesEnglish = mapArticleRoutes(entriesEnglish.items, 'en');
    const articlesSpanish = mapArticleRoutes(entriesSpanish.items, 'es');

    const homePage = {
      '/': { page: '/home', query: { lang: 'en' } },
      '/en': { page: '/home', query: { lang: 'en' } },
      '/es': { page: '/home', query: { lang: 'es' } },
    };
    const blogPage = {
      '/blog': { page: '/blog', query: { lang: 'en' } },
      '/en/blog': { page: '/blog', query: { lang: 'en' } },
      '/es/blog': { page: '/blog', query: { lang: 'es' } },
    };

    return { ...articlesEnglish, ...articlesSpanish, ...homePage, ...blogPage };
  },

  webpack(config) {
    const modifiedConfig = config;
    modifiedConfig.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    modifiedConfig.resolve.alias.components = path.join(__dirname, './components');
    modifiedConfig.resolve.alias.contentful = path.join(__dirname, './contentful');
    modifiedConfig.resolve.alias.lang = path.join(__dirname, './lang');
    modifiedConfig.resolve.alias.pages = path.join(__dirname, './pages');
    modifiedConfig.resolve.alias.screens = path.join(__dirname, './screens');
    modifiedConfig.resolve.alias.styles = path.join(__dirname, './styles');
    modifiedConfig.resolve.alias.utils = path.join(__dirname, './utils');
    return modifiedConfig;
  },
});
