import React from 'react';
import PropTypes from 'prop-types';

import { useTranslate } from 'components/I18nContext';
import formatDate from 'utils/dates/formatDate';
import { articlePreviewStyles } from './ArticlePreview.scss';

const ArticlePreview = ({ title, description, publishDate, slug }) => {
  const { t, currentLang } = useTranslate();

  return (
    <a href={`/${currentLang}/blog/${slug}`} className={articlePreviewStyles}>
      <article>
        <h2>{title}</h2>
        <span>{`${t('article_published_on')} ${formatDate(publishDate)}`}</span>
        <p>{description}</p>
      </article>
    </a>
  );
};

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ArticlePreview;
