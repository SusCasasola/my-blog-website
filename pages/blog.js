import { Component } from 'react';
import getConfig from 'next/config';
import { withRouter } from 'next/router';

import Layout from 'components/Layout';
import ArticlePreview from 'components/ArticlePreview';
import { container } from 'styles/objects/container.scss';
import { articleListItem } from 'styles/components/blog.scss';

const contentful = require('contentful');
const { publicRuntimeConfig } = getConfig();

class Blog extends Component {
  static async getInitialProps({ query }) {
    const client = contentful.createClient(publicRuntimeConfig.contentLoad);

    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.language': query.lang,
      select: 'fields.title,fields.description,fields.slug,fields.publishDate'
    });
    return {
      entries: entries.items,
      currentLang: query.lang
    }
  }
  render() {
    const { router: { asPath }, entries, currentLang } = this.props;
    const titleText = currentLang === 'es' ? 'Mis artículos' : 'My articles';
 
    return (
      <Layout currentUrl={asPath} currentLang={currentLang}>
        <h1>{titleText}</h1>
        <ul className={container}>
          {entries.map(({ fields: { slug, title, description }, sys: { id } }) => (
            <li key={id} className={articleListItem}>
              <ArticlePreview
                slug={slug}
                title={title}
                currentLang={currentLang}
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