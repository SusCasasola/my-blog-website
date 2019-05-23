import { Component } from 'react';
import getConfig from 'next/config';
import { withRouter } from 'next/router'

import Layout from 'components/Layout';
import { container } from 'styles/objects/container.scss';

const contentful = require('contentful');
const { publicRuntimeConfig } = getConfig();

class Article extends Component {
  static async getInitialProps({ query }) {
    const client = contentful.createClient(publicRuntimeConfig.contentLoad);

    const entry = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': query.slug
    });

    return {
      entry: entry.items[0],
      currentLang: query.lang
    }
  }
  render() {
    const { router: { asPath }, entry, currentLang } = this.props;
    return (
      <Layout currentUrl={asPath} currentLang={currentLang}>
        <h1>{entry.fields.title}</h1>
        <div className={container}>
          <p>{entry.fields.description}</p>
        </div>
      </Layout>
    );
  }
};

export default withRouter(Article);