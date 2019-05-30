import { Fragment } from 'react';

import 'styles/main.scss';
import Head from 'components/Head';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';

const Layout = ({ currentUrl, children, currentLang, showLangSwitch, canonical }) => (
  <Fragment>
    <Head canonical={canonical} />
    <main>
      <Navigation currentUrl={currentUrl} currentLang={currentLang} />
      {children}
      <Footer currentUrl={currentUrl} currentLang={currentLang} showLangSwitch={showLangSwitch} />
    </main>
  </Fragment>
);

export default Layout;
