import { Fragment } from 'react';

import 'styles/main.scss';
import Head from 'components/Head';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';

const Layout = ({ currentUrl, children, currentLang }) => (
  <Fragment>
    <Head />
    <main>
      <Navigation currentUrl={currentUrl} currentLang={currentLang} />
      <section>{children}</section>
      <Footer currentUrl={currentUrl} currentLang={currentLang} />
    </main>
  </Fragment>
);

export default Layout;
