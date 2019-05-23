import { Component } from 'react';
import getConfig from 'next/config';
import { withRouter } from 'next/router'

import Layout from 'components/Layout';

const contentful = require('contentful');
const { publicRuntimeConfig } = getConfig();

class Home extends Component {
  static async getInitialProps({ query }) {
    const client = contentful.createClient(publicRuntimeConfig.contentLoad);
    const homeText = await client.getEntries({
      content_type: 'simpleRichText',
      'fields.language': query.lang,
      'fields.name': query.lang === 'es' ? 'Inicio' : 'Home'
    });

    return { homeText: homeText.items[0].fields.richText, currentLang: query.lang }
  }

  render () {
    const { router: { asPath }, aboutMe, currentLang } = this.props
    return (
      <Layout currentUrl={asPath} currentLang={currentLang}>
        <h1>Hi</h1>
      </Layout>
    );
  }
}

export default withRouter(Home);