import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WebsitePage from 'components/WebsitePage';
import ArticleScreen from 'screens/Article';
import Head from 'components/Head';
import getEntry from 'content/getEntry';

class Article extends Component {
  static async getInitialProps({ query }) {
    const entry = await getEntry(query.slug);
    return {
      lang: query.lang,
      entry,
    };
  }

  render() {
    const { lang, entry } = this.props;
    const { title, description, canonical, slug, image } = entry.fields;

    const metaDataInfo = {
      title,
      description: `${description.substring(0, 297)}...`,
      url: `https://www.sussie.dev/${lang}/blog/${slug}`,
      canonical,
      image: `https:${image.fields.file.url}`,
    };

    return (
      <WebsitePage lang={lang}>
        <Head {...metaDataInfo} />
        <ArticleScreen entry={entry.fields} />
      </WebsitePage>
    );
  }
}

Article.propTypes = {
  lang: PropTypes.string.isRequired,
  entry: PropTypes.object.isRequired //eslint-disable-line
};

export default Article;
