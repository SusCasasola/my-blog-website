import React from 'react';
import PropTypes from 'prop-types';

import 'styles/main.scss';
import Hero from 'components/Hero';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainContent from 'components/MainContent';
import { I18nContextProvider } from 'components/I18nContext';

const WebsitePage = ({ lang, children, heroImage }) => (
  <I18nContextProvider lang={lang}>
    <Header />
    <Hero heroImage={heroImage} />
    <MainContent>{children}</MainContent>
    <Footer />
  </I18nContextProvider>
);

WebsitePage.propTypes = {
  lang: PropTypes.string.isRequired,
  heroImage: PropTypes.string,
};

WebsitePage.defaultProps = {
  heroImage: '/static/hero.jpg',
};

export default WebsitePage;
