import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WebsitePage from 'components/WebsitePage';
import HomeScreen from 'screens/Home';
import Head from 'components/Head';
import getLastEntries from 'content/getLastEntries';

class Home extends Component {
  static async getInitialProps({ query }) {
    const lastEntries = await getLastEntries(query.lang);

    return {
      lang: query.lang,
      lastEntries,
    };
  }

  render() {
    const { lang, lastEntries } = this.props;

    const descriptionByLang = {
      en: 'Welcome to my blog!',
      es: '¡Bienvenido(a) a mi blog!',
    };

    const metaDataInfo = {
      title: 'Sussie Casasola | Frontend Engineer',
      description: descriptionByLang[lang],
      url: `https://www.sussie.dev/${lang}`,
      canonical: 'https://www.sussie.dev/',
      image: 'https://www.sussie.dev/static/default-meta-image.png',
    };

    return (
      <WebsitePage lang={lang}>
        <Head {...metaDataInfo} />
        <HomeScreen lastEntries={lastEntries} />
      </WebsitePage>
    );
  }
}

Home.propTypes = {
  lang: PropTypes.string.isRequired,
  lastEntries: PropTypes.arrayOf(
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

export default Home;
