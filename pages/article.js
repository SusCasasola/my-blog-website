import { Component } from 'react';
import getConfig from 'next/config';
import { withRouter } from 'next/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Layout from 'components/Layout';
import translate from 'utils/translate';
import formatDate from 'utils/formatDate';
import articleRenderingOptions from 'utils/articleRenderingOptions';
import { articleTitle, articleDescription, articleBody, articleDate } from 'styles/components/article.scss';

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
    const { publishDate, body, title, description, canonical } = entry.fields;
    
    const articleBodyInnerHTML = { __html: documentToHtmlString(body, articleRenderingOptions) };

    return (
      <Layout
        currentUrl={asPath}
        currentLang={currentLang}
        showLangSwitch={false}
        canonical={canonical}
      >
        <article>
          <h1 className={articleTitle}>{title}</h1>
          <header className={articleDescription}>
            <span className={articleDate}>
              {`${translate(currentLang, 'article_published_on')}${formatDate(publishDate)}`}
            </span>
            <p>{description}</p>
          </header>
          <section className={articleBody} dangerouslySetInnerHTML={articleBodyInnerHTML}/>
        </article>  
      </Layout>
    );
  }
};

export default withRouter(Article);