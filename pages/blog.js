import { Component } from 'react';
import { css } from 'glamor';
import Link from 'next/link';
import { withRouter } from 'next/router';
const contentful = require('contentful');

import Layout from '../components/Layout';

const styles = () => css({
  '& .blog__entries': {
    margin: '2rem 0',
  },
  '& .blog__entry': {
    position: 'relative',
    maxWidth: 598,
    margin: '0 auto',
    paddingLeft: 140,
    listStyleType: 'none',
    '@media screen and (max-width: 700px)': {
      paddingLeft: 0,
    },
    '&:not(:last-child)': {
      marginBottom: '2rem',
    },
    '& img': {
      maxWidth: 120,
      position: 'absolute',
      left: 0,
      top: 0,
      marginRight: '1rem',
      '@media screen and (max-width: 700px)': {
        position: 'static',
        maxWidth: '100%'
      }
    },
    '& h2': {
      fontSize: '1.5rem',
    },
    '& p': {
      color: 'var(--black-07)'
    }
  }
})

class Blog extends Component {
  static async getInitialProps() {
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

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
          <h1>Sometimes I write...</h1>
          <ul className="blog__entries">
            {entries.map((entry, i) => (
              <li key={i} className="blog__entry">
                <Link
                  as={`/blog/${entry.fields.slug}`}
                  href={`article?slug=${entry.fields.slug}`}
                >
                  <a>
                    <article>
                      <img src={entry.fields.heroImage.fields.file.url}/>
                      <h2>{entry.fields.title}</h2>
                      <p>{entry.fields.description}</p>
                    </article>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    );
  }
}
export default withRouter(Blog);