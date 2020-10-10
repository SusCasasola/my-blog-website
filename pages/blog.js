import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WebsitePage from 'components/WebsitePage';
import BlogScreen from 'screens/Blog';
import Head from 'components/Head';

class Blog extends Component {
  static async getInitialProps({ query }) {
    // AWAIT ALL ENTRIES CONTENTFUL

    return {
      lang: query.lang,
      allEntries: [],
    };
  }

  render() {
    const { lang, allEntries } = this.props;

    const descriptionByLang = {
      en: "This is the list of all articles I've published",
      es: 'Esta es la lista de todos los artículos que he publicado.',
    };

    const metaDataInfo = {
      title: `Sussie Casasola | Blog`,
      description: descriptionByLang[lang],
      url: `https://www.sussie.dev/${lang}/blog`,
      canonical: 'https://www.sussie.dev/blog',
      image: 'https://www.sussie.dev/static/default-meta-image.png',
    };

    return (
      <WebsitePage lang={lang}>
        <Head {...metaDataInfo} />
        <BlogScreen allEntries={allEntries} />
      </WebsitePage>
    );
  }
}

Blog.propTypes = {
  lang: PropTypes.string.isRequired,
  allEntries: PropTypes.array.isRequired, //eslint-disable-line
};

export default Blog;
