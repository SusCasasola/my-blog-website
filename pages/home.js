import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WebsitePage from 'components/WebsitePage';
import HomePage from 'screens/Home';
import Head from 'components/Head';

class Home extends Component {
  static async getInitialProps({ query }) {
    // AWAIT ENTRIES CONTENTFUL

    return {
      lang: query.lang,
      lastEntries: [1, 2, 3],
    };
  }

  render() {
    const { lang, lastEntries } = this.props;

    const descriptionByLang = {
      en: 'Welcome to my website!',
      es: '¡Bienvenido(a) a mi sitio web!',
    };

    const metaDataInfo = {
      title: 'Sussie Casasola | Frontend Engineer',
      description: descriptionByLang[lang],
      url: `https://www.sussie.dev/${lang}`,
      image: 'https://www.sussie.dev/static/default-meta-image.png',
    };

    return (
      <WebsitePage lang={lang}>
        <Head {...metaDataInfo} />
        <HomePage lastEntries={lastEntries} />
      </WebsitePage>
    );
  }
}

Home.propTypes = {
  lang: PropTypes.string.isRequired,
  lastEntries: PropTypes.array.isRequired, //eslint-disable-line
};

export default Home;
