import { Component } from 'react';
import { withRouter } from 'next/router'
const contentful = require('contentful')

import Layout from '../../components/Layout';
import styles from './styles';

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
                <a href={entry.fields.slug}>
                  <article>
                    <img src={entry.fields.heroImage.fields.file.url}/>
                    <h2>{entry.fields.title}</h2>
                    <p>{entry.fields.description}</p>
                  </article>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    );
  }
}
export default withRouter(Blog);