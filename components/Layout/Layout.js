import { Fragment } from 'react';

import 'styles/main.scss';
import Head from 'components/Head';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';

const Layout = ({ currentUrl, children, currentLang, showLangSwitch, metaDataInfo }) => (
  <Fragment>
    <Head metaDataInfo={metaDataInfo} currentLang={currentLang} />
    <main>
      <Navigation currentUrl={currentUrl} currentLang={currentLang} />
      {children}
      <Footer currentUrl={currentUrl} currentLang={currentLang} showLangSwitch={showLangSwitch} />
    </main>
  </Fragment>
);

export default Layout;
