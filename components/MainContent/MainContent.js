import React from 'react';

import { mainStyles } from './MainContent.scss';

const MainContent = ({ children }) => (
  <main id="main-content" className={mainStyles}>
    {children}
  </main>
);

export default MainContent;
