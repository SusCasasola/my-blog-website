import React from 'react';
import PropTypes from 'prop-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Divider from 'components/Divider';
import { useTranslate } from 'components/I18nContext';
import formatDate from 'utils/dates/formatDate';
import articleRenderingOptions from 'content/articleRenderingOptions';

import { articleHeader, articleBody, articleFooter } from './Article.scss';

const Article = ({ entry }) => {
  const { t } = useTranslate();
  const { tags, publishDate, body, title, description } = entry;
  const articleBodyInnerHTML = { __html: documentToHtmlString(body, articleRenderingOptions) };

  return (
    <article>
      <h1>{title}</h1>
      <header className={articleHeader}>
        <time pubdate dateTime={publishDate} title={formatDate(publishDate)}>
          {`${t('article_published_on')} ${formatDate(publishDate)}`}
        </time>
        <p>{description}</p>
        <ul className="no-list-style">
          {tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
      </header>
      <Divider />

      <section className={articleBody} dangerouslySetInnerHTML={articleBodyInnerHTML} />

      <Divider />
      <footer className={articleFooter}>
        <address className="author">
          <img
            src="/static/suscasasola.jpeg"
            alt="SusCasasola | Sussie Casasola | Susana Casasola"
          />
          <a href="/" rel="author">
            <h3>{t('article_author_title')}</h3>
            <span>{t('article_author_handle')}</span>
            <p>{t('article_author_description')}</p>
          </a>
        </address>
      </footer>
    </article>
  );
};

Article.propTypes = {
  entry: PropTypes.shape({
    publishDate: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.object, //eslint-disable-line
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Article;
