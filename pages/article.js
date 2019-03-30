import { Component } from 'react';
import { withRouter } from 'next/router'
const contentful = require('contentful');
import { css } from 'glamor';

import Layout from '../components/Layout';

const styles = () => css({
  '& img': {
    maxWidth: '100%',
    marginBottom: '2rem',
  }
});

class Article extends Component {
  static async getInitialProps({ query }) {
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })

    const entry = await client.getEntries({ content_type: 'blogPost', 'fields.slug': query.slug });

    return {
      entry: entry.items[0],
    }
  }
  render() {
    const { router: { pathname }, entry } = this.props;
    return (
      <Layout currentUrl={pathname}>
        <section className="article" {...styles()}>
          <h1>{entry.fields.title}</h1>
          <img src={entry.fields.heroImage.fields.file.url} />
          <p>{entry.fields.description}</p>
        </section>
      </Layout>
    );
  }
};

export default withRouter(Article);