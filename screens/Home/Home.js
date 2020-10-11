import React from 'react';
import PropTypes from 'prop-types';

import { useTranslate } from 'components/I18nContext';
import ArticlePreview from 'components/ArticlePreview';

const Home = ({ lastEntries }) => {
  const { t } = useTranslate();

  return (
    <section>
      <h1>{t('home_page_title')}</h1>
      <p>{t('home_page_description')}</p>
      <ul className="no-list-style">
        {lastEntries.map(entry => (
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

Home.propTypes = {
  lastEntries: PropTypes.arrayOf({
    id: PropTypes.string,
  }).isRequired,
};

export default Home;
