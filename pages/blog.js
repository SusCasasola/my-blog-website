import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getConfig from 'next/config';
import { withRouter } from 'next/router';

import Layout from 'components/Layout';
import translate from 'utils/translate';
import ArticlePreview from 'components/ArticlePreview';
import { articleListItem, blog } from 'styles/components/blog.scss';

const contentful = require('contentful');

const { publicRuntimeConfig } = getConfig();

class Blog extends Component {
  static async getInitialProps({ query }) {
    const client = contentful.createClient(publicRuntimeConfig.contentLoad);

    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.language': query.lang,
      select: 'fields.title,fields.description,fields.slug,fields.publishDate',
    });
    return {
      entries: entries.items,
      currentLang: query.lang,
    };
  }

  render() {
    const {
      router: { asPath },
      entries,
      currentLang,
    } = this.props;
    const metaDataInfo = {
      title: `Sussie Casasola | Blog`,
      description: translate(currentLang, 'meta_description_blog'),
      url: `https://www.sussie.dev/${currentLang}/blog`,
      canonical: 'https://www.sussie.dev/blog',
      image: 'https://www.sussie.dev/static/default-meta-image.png',
    };
    return (
      <Layout currentUrl={asPath} currentLang={currentLang} metaDataInfo={metaDataInfo}>
        <h1>{translate(currentLang, 'blog_page_title')}</h1>
        <ul className={blog}>
          {entries.length > 0 ? (
            entries.map(({ sys: { id }, fields: { slug, title, description, publishDate } }) => (
              <li key={id} className={articleListItem}>
                <ArticlePreview
                  slug={slug}
                  title={title}
                  publishDate={publishDate}
                  currentLang={currentLang}
                  description={description}
                />
              </li>
            ))
          ) : (
            <p>Oops! I haven&apos;t write anything in English. I&apos;m sorry. Coming soon...</p>
          )}
        </ul>
      </Layout>
    );
  }
}

Blog.propTypes = {
  router: PropTypes.shape({ asPath: PropTypes.string }).isRequired,
  entries: PropTypes.array.isRequired, //eslint-disable-line
  currentLang: PropTypes.string.isRequired,
};

export default withRouter(Blog);
