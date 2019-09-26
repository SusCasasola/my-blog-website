import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import translate from 'utils/translate';
import formatDate from 'utils/formatDate';

const ArticlePreview = ({ title, description, publishDate, slug, currentLang }) => (
  <article>
    <h2>{title}</h2>
    <span>{`${translate(currentLang, 'article_published_on')}${formatDate(publishDate)}`}</span>
    <p>
      {description}
      <br />
      <Link
        as={`/${currentLang}/blog/${slug}`}
        href={{ pathname: '/article', query: { slug, lang: currentLang } }}
      >
        <a>{translate(currentLang, 'article_read_more')}</a>
      </Link>
    </p>
  </article>
);

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  currentLang: PropTypes.string.isRequired,
};

export default ArticlePreview;
