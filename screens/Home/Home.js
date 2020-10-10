import React from 'react';
import PropTypes from 'prop-types';

import { useTranslate } from 'components/I18nContext';

const Home = ({ lastEntries }) => {
  const { t } = useTranslate();
  console.log(lastEntries);

  return (
    <section>
      <h1>{t('home_page_title')}</h1>
      <p>{t('home_page_description')}</p>
      <ul>
        {lastEntries.map(entry => (
          <li key={entry.id}>{entry.name}</li>
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
