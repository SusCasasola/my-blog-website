import { Fragment } from 'react';

import Head from '../Head';
import Footer from '../Footer';
import Navigation from '../Navigation';

const Layout = ({ children }) => (
  <Fragment>
    <Head />
    <main>
      <Navigation />
      {children}
      <Footer />
    </main>
  </Fragment>
);

export default Layout;
