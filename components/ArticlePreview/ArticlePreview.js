import React from 'react';
import PropTypes from 'prop-types';

import translate from 'utils/translate';
import formatDate from 'utils/formatDate';

const ArticlePreview = ({ title, description, publishDate, slug, currentLang }) => (
  <a href={`/${currentLang}/blog/${slug}`}>
    <article>
      <h2>{title}</h2>
      <span>{`${translate(currentLang, 'article_published_on')}${formatDate(publishDate)}`}</span>
      <p>{description}</p>
    </article>
  </a>
);

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  currentLang: PropTypes.string.isRequired,
};

export default ArticlePreview;
