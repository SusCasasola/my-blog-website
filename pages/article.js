import { Component } from 'react';
import getConfig from 'next/config';
import { withRouter } from 'next/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Layout from 'components/Layout';
import { article, description } from 'styles/components/article.scss';

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
    const body = entry.fields.body;
    const options = {
      renderNode: {
        'embedded-asset-block': (node) =>
          `<img src="${node.data.target.fields.file.url}"/>`
      }
    };
    const articleBodyInnerHTML = { __html: documentToHtmlString(body, options) };

    return (
      <Layout currentUrl={asPath} currentLang={currentLang} showLangSwitch={false}>
        <article className={article}>
          <h1>{entry.fields.title}</h1>
          <section className={description}>
            <p>{entry.fields.description}</p>
          </section>
          <section dangerouslySetInnerHTML={articleBodyInnerHTML}/>
        </article>  
      </Layout>
    );
  }
};

export default withRouter(Article);