import React from 'react';
import PropTypes from 'prop-types';

import 'styles/main.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainContent from 'components/MainContent';
import { I18nContextProvider } from 'components/I18nContext';

const WebsitePage = ({ lang, children }) => (
  <I18nContextProvider lang={lang}>
    <Header />
    <MainContent>{children}</MainContent>
    <Footer />
  </I18nContextProvider>
);

export default WebsitePage;

WebsitePage.propTypes = {
  lang: PropTypes.string.isRequired,
};
