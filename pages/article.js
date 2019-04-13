import { Component } from 'react';
import getConfig from 'next/config';
import { withRouter } from 'next/router'

import Layout from 'components/Layout';

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
    }
  }
  render() {
    const { router: { pathname }, entry } = this.props;
    return (
      <Layout currentUrl={pathname}>
        <h1>{entry.fields.title}</h1>
        <p>{entry.fields.description}</p>
      </Layout>
    );
  }
};

export default withRouter(Article);