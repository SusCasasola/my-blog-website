import { Component } from 'react';
import getConfig from 'next/config';
import { withRouter } from 'next/router'
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
      homeText: homeText.items[0].fields.richText
    };
  }

  render () {
    const { router: { asPath }, homeText, currentLang } = this.props;
    const homeInnerHTML = { __html: documentToHtmlString(homeText, homeRenderingOptions) };
    return (
      <Layout currentUrl={asPath} currentLang={currentLang}>
        <section className={homeBody} dangerouslySetInnerHTML={homeInnerHTML} />
      </Layout>
    );
  }
}

export default withRouter(Home);