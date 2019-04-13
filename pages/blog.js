import { Component } from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { withRouter } from 'next/router';

import Layout from 'components/Layout';
import { container } from 'styles/objects/container.scss';

const contentful = require('contentful');
const { publicRuntimeConfig } = getConfig();

class Blog extends Component {
  static async getInitialProps() {
    const client = contentful.createClient(publicRuntimeConfig.contentLoad);

    const entries = await client.getEntries({
      content_type: 'blogPost',
      select: 'fields.title,fields.description,fields.slug,fields.publishDate'
    });

    return {
      entries: entries.items,
    }
  }
  render() {
    const { router: { pathname }, entries } = this.props;
    return (
      <Layout currentUrl={pathname}>
        <h1>My articles</h1>
        <ul className={container}>
          {entries.map((entry, i) => (
            <li key={i}>
              <article>
                <h2>{entry.fields.title}</h2>
                <p>
                  {entry.fields.description}
                </p>
                <Link
                  as={`/blog/${entry.fields.slug}`}
                  href={{ pathname:'/article', query: { slug: entry.fields.slug } }}
                >
                  <a>Read more...</a>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}
export default withRouter(Blog);