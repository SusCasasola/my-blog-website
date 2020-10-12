import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WebsitePage from 'components/WebsitePage';
import BlogScreen from 'screens/Blog';
import Head from 'components/Head';
import getAllEntries from 'content/getAllEntries';

class Blog extends Component {
  static async getInitialProps({ query }) {
    const allEntries = await getAllEntries(query.lang);

    return {
      lang: query.lang,
      allEntries,
    };
  }

  render() {
    const { lang, allEntries } = this.props;

    const descriptionByLang = {
      en:
        "This is the list of all the articles I've published. You can use the filter tags to navigate through them.",
      es:
        'Esta es la lista de todos los artículos que he publicado. Usa el filtro de tags para navegar rápidamente.',
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
  allEntries: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        publishDate: PropTypes.string,
        slug: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
      }),
      sys: PropTypes.shape({
        id: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default Blog;
