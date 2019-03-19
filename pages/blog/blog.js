import { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
const contentful = require('contentful');

import styles from './styles';
import Layout from '../../components/Layout';

class Blog extends Component {
  static async getInitialProps() {
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })

    const entries = await client.getEntries({ content_type: 'blogPost' });

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
                  as={`/article/${entry.fields.slug}`}
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