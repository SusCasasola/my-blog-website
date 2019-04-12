import { Component } from 'react';
import { css } from 'glamor';
import Link from 'next/link';
import getConfig from 'next/config';
import { withRouter } from 'next/router';

import Layout from '../components/Layout';

const contentful = require('contentful');
const { publicRuntimeConfig } = getConfig();

const styles = () => css({
  '& .blog__entries': {
    margin: '2rem 0',
  },
  '& .blog__entry': {
    margin: '0 auto',
    listStyleType: 'none',
    '@media screen and (max-width: 700px)': {
      paddingLeft: 0,
    },
    '&:not(:last-child)': {
      marginBottom: '2rem',
    },
    '& h2': {
      fontSize: '1.5rem',
    }
  }
})

class Blog extends Component {
  static async getInitialProps() {
    const client = contentful.createClient(publicRuntimeConfig.contentful);

    const entries = await client.getEntries({
      content_type: 'blogPost'
    });

    return {
      entries: entries.items,
    }
  }
  render() {
    const { router: { pathname }, entries } = this.props;
    return (
      <Layout currentUrl={pathname}>
        <section className="blog" {...styles()}>
          <h1>My articles</h1>
          <ul className="blog__entries">
            {entries.map((entry, i) => (
              <li key={i} className="blog__entry">
                <article>
                  <Link
                    as={`/blog/${entry.fields.slug}`}
                    href={{ pathname:'/article', query: { slug: entry.fields.slug } }}
                  >
                    <a><h2>{entry.fields.title}</h2></a>
                  </Link>
                  <p>{entry.fields.description}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    );
  }
}
export default withRouter(Blog);