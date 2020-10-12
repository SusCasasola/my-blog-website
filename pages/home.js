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
      en:
        "Welcome to my blog! This is where I can share with the world some learnings that I've had over these years. Hope it's useful!",
      es:
        '¡Bienvenida(o) a mi blog! Aquí comparto un poco sobre las cosas que he aprendido en los últimos años en el mundo del Frontend.',
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
