import { Fragment } from 'react';

import Head from '../Head';
import Footer from '../Footer';
import Navigation from '../Navigation';

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
