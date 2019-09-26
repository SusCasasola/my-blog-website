import React from 'react';
import PropTypes from 'prop-types';

import 'styles/main.scss';
import Head from 'components/Head';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';

const Layout = ({ currentUrl, children, currentLang, showLangSwitch, metaDataInfo }) => (
  <>
    <Head metaDataInfo={metaDataInfo} currentLang={currentLang} />
    <main>
      <Navigation currentUrl={currentUrl} currentLang={currentLang} />
      {children}
      <Footer currentUrl={currentUrl} currentLang={currentLang} showLangSwitch={showLangSwitch} />
    </main>
  </>
);

Layout.propTypes = {
  currentUrl: PropTypes.string.isRequired,
  currentLang: PropTypes.string.isRequired,
  showLangSwitch: PropTypes.bool.isRequired,
  metaDataInfo: PropTypes.object.isRequired, //eslint-disable-line
};

export default Layout;
