import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getConfig from 'next/config';
import { withRouter } from 'next/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Layout from 'components/Layout';
import translate from 'utils/translate';
import { about } from 'styles/components/about.scss';

const contentful = require('contentful');

const { publicRuntimeConfig } = getConfig();

class About extends Component {
  static async getInitialProps({ query }) {
    const client = contentful.createClient(publicRuntimeConfig.contentLoad);
    const aboutText = await client.getEntries({
      content_type: 'simpleRichText',
      'fields.language': query.lang,
      'fields.name': translate(query.lang, 'about_content_field'),
    });
    return {
      currentLang: query.lang,
      aboutText: aboutText.items[0].fields.richText,
    };
  }

  render() {
    const {
      router: { asPath },
      aboutText,
      currentLang,
    } = this.props;
    const options = {
      renderNode: {
        'embedded-asset-block': node => `<img src="${node.data.target.fields.file.url}"/>`,
      },
    };
    const aboutInnerHTML = { __html: documentToHtmlString(aboutText, options) };
    const metaDataInfo = {
      title: `Sussie Casasola | ${translate(currentLang, 'about_content_field')}`,
      description: translate(currentLang, 'meta_description_about'),
      url: `https://www.sussie.dev/${currentLang}/about`,
      canonical: 'https://www.sussie.dev/about',
      image: 'https://www.sussie.dev/static/default-meta-image.png',
    };

    return (
      <Layout currentUrl={asPath} currentLang={currentLang} metaDataInfo={metaDataInfo}>
        <section className={about} dangerouslySetInnerHTML={aboutInnerHTML} />
      </Layout>
    );
  }
}

About.propTypes = {
  router: PropTypes.shape({ asPath: PropTypes.string }).isRequired,
  aboutText: PropTypes.string.isRequired,
  currentLang: PropTypes.string.isRequired,
};

export default withRouter(About);
