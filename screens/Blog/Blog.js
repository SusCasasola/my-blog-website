import React from 'react';
import PropTypes from 'prop-types';

import { useTranslate } from 'components/I18nContext';
import ArticlePreview from 'components/ArticlePreview';

import useTagFilters from './useTagFilters';

const Blog = ({ allEntries }) => {
  const { t } = useTranslate();
  const { filteredEntries, Tags } = useTagFilters(allEntries);

  return (
    <section>
      <h1>{t('blog_page_title')}</h1>

      <Tags />
      <ul className="no-list-style">
        {filteredEntries.map(entry => (
          <li key={entry.sys.id}>
            <ArticlePreview
              title={entry.fields.title}
              description={entry.fields.description}
              publishDate={entry.fields.publishDate}
              slug={entry.fields.slug}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

Blog.propTypes = {
  allEntries: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        publishDate: PropTypes.string,
        slug: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
      }),
      sys: PropTypes.shape({
        id: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default Blog;
