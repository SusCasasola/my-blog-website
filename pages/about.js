import { Component } from 'react';
import getConfig from 'next/config';
import { withRouter } from 'next/router'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Layout from 'components/Layout';

const contentful = require('contentful');
const { publicRuntimeConfig } = getConfig();

class About extends Component {
  static async getInitialProps({ query }) {
    const client = contentful.createClient(publicRuntimeConfig.contentLoad);
    const aboutText = await client.getEntries({
      content_type: 'simpleRichText',
      'fields.language': query.lang,
      'fields.name': query.lang === 'es' ? 'Sobre mi' : 'About me'
    });
    return {
      currentLang: query.lang,
      aboutText: aboutText.items[0].fields.richText
    };
  }

  render() {
    const { router: { asPath }, aboutText, currentLang } = this.props;
    const aboutInnerHTML = { __html: documentToHtmlString(aboutText) };
    return (
      <Layout currentUrl={asPath} currentLang={currentLang}>
        <section dangerouslySetInnerHTML={aboutInnerHTML} />
      </Layout>
    );
  }
}

export default withRouter(About);