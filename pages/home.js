import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getConfig from 'next/config';
import { withRouter } from 'next/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Layout from 'components/Layout';
import translate from 'utils/translate';
import homeRenderingOptions from 'utils/homeRenderingOptions';
import { homeBody } from 'styles/components/home.scss';

const contentful = require('contentful');

const { publicRuntimeConfig } = getConfig();

class Home extends Component {
  static async getInitialProps({ query }) {
    const client = contentful.createClient(publicRuntimeConfig.contentLoad);
    const homeText = await client.getEntries({
      content_type: 'simpleRichText',
      'fields.language': query.lang,
      'fields.name': translate(query.lang, 'home_content_field'),
    });

    return {
      currentLang: query.lang,
      homeText: homeText.items[0].fields.richText,
    };
  }

  render() {
    const {
      router: { asPath },
      homeText,
      currentLang,
    } = this.props;
    const homeInnerHTML = { __html: documentToHtmlString(homeText, homeRenderingOptions) };
    const metaDataInfo = {
      title: 'Sussie Casasola | Frontend Engineer',
      description: translate(currentLang, 'meta_description_home'),
      url: `https://www.sussie.dev/${currentLang}`,
      canonical: 'https://www.sussie.dev',
      image: 'https://www.sussie.dev/static/default-meta-image.png',
    };

    return (
      <Layout currentUrl={asPath} currentLang={currentLang} metaDataInfo={metaDataInfo}>
        <section className={homeBody} dangerouslySetInnerHTML={homeInnerHTML} />
      </Layout>
    );
  }
}

Home.propTypes = {
  router: PropTypes.shape({ asPath: PropTypes.string }).isRequired,
  homeText: PropTypes.string.isRequired,
  currentLang: PropTypes.string.isRequired,
};

export default withRouter(Home);
