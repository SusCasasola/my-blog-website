import { Fragment } from 'react';

import Head from 'components/Head';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';

const Layout = ({ currentUrl, children }) => (
  <Fragment>
    <Head />
    <main>
      <Navigation currentUrl={currentUrl} />
      {children}
      <Footer />
    </main>
  </Fragment>
);

export default Layout;
