import React from 'react';
import PropTypes from 'prop-types';

import { useTranslate } from 'components/I18nContext';
import { articleTitle } from './Home.scss';

const Home = ({ lastEntries }) => {
  const { t, currentLang } = useTranslate();

  return (
    <section>
      <h1>{t('home_page_title')}</h1>
      <p>{t('home_page_description')}</p>

      <h2>{t('home_page_latest_articles')}</h2>
      <ul>
        {lastEntries.map(entry => (
          <li className={articleTitle} key={entry.sys.id}>
            <a href={`/${currentLang}/blog/${entry.fields.slug}`} title={entry.fields.title}>
              <h3>{entry.fields.title}</h3>
            </a>
          </li>
        ))}
      </ul>

      <h2>{t('home_page_latest_talks')}</h2>
      <ul>
        <li className={articleTitle}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=bVfzmVi7c_Q"
          >
            <h3>¿Cómo una comunidad remota impulsa el desarrollo de mujeres?</h3>
          </a>
        </li>
        <li className={articleTitle}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=6HcGFQKdbkI"
          >
            <h3>Presentando Café con Ingenieras</h3>
          </a>
        </li>
      </ul>
    </section>
  );
};

Home.propTypes = {
  lastEntries: PropTypes.arrayOf(
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

export default Home;
