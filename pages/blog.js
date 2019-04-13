import { Component } from 'react';
import getConfig from 'next/config';
import { withRouter } from 'next/router';

import Layout from 'components/Layout';
import ArticlePreview from 'components/ArticlePreview';
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
          {entries.map(({ fields: { slug, title, description }, sys: { id } }) => (
            <li key={id}>
              <ArticlePreview
                slug={slug}
                title={title}
                description={description}
              />
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}
export default withRouter(Blog);